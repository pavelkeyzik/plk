type Theme = "dark" | "light";
type Mode = "dark" | "light" | "system";

interface State {
  mode: Mode;
  theme: Theme;
  systemTheme: Theme;
}

interface Options {
  defaultMode?: Mode;
}

interface NotificationData {
  mode: Mode;
  theme: Theme;
}

const mediaQuery = "(prefers-color-scheme: dark)";

function getSystemTheme(): Theme {
  if (window.matchMedia(mediaQuery).matches) {
    return "dark";
  }

  return "light";
}

function getThemeByMode(mode: Mode): Theme {
  if (mode === "system") {
    return getSystemTheme();
  }

  return mode;
}

function createThemeStore(options: Options = {}) {
  const initialMode = options.defaultMode || "system";

  // Initialize state
  const state: State = {
    mode: initialMode,
    systemTheme: getSystemTheme(),
    theme: getThemeByMode(initialMode),
  };

  // Create subscriptions object to be able notify subscribers
  const subscriptions = new Map();
  let subscriptionId = 0;

  function subscribe(
    callback: (notificationData: NotificationData) => void,
  ): number {
    subscriptionId++;
    subscriptions.set(subscriptionId, callback);

    state.systemTheme = getSystemTheme();

    if (state.mode === "system") {
      notifyAboutThemeChange(state.systemTheme);
    } else {
      notifyAboutThemeChange(state.theme);
    }

    return subscriptionId;
  }

  function usubscribe(subscriptionId: number): void {
    subscriptions.delete(subscriptionId);
  }

  function notifyAboutThemeChange(theme: Theme) {
    subscriptions.forEach((notify) => {
      const notificationData: NotificationData = {
        mode: state.mode,
        theme,
      };

      notify(notificationData);
    });
  }

  window.matchMedia(mediaQuery).addEventListener("change", (event) => {
    const prefersDarkMode = event.matches;

    state.systemTheme = prefersDarkMode ? "dark" : "light";

    if (state.mode === "system") {
      notifyAboutThemeChange(state.systemTheme);
    }
  });

  function changeThemeMode(mode: Mode = "dark") {
    const newTheme = getThemeByMode(mode);

    state.mode = mode;
    state.theme = newTheme;

    if (state.mode === "system") {
      notifyAboutThemeChange(state.systemTheme);
    } else {
      notifyAboutThemeChange(state.theme);
    }
  }

  return {
    subscribe,
    usubscribe,
    changeThemeMode,
  };
}

export type { Mode, NotificationData, Theme };
export { createThemeStore };
