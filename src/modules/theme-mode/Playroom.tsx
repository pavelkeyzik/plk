import { useEffect, useState } from "react";

import { PlayroomInfo, PlayroomInfoProps } from "../../components/PlayroomInfo";
import { getCodeURL } from "../../utils/getCodeURL";
import { createThemeStore, Mode, NotificationData, Theme } from ".";

const playroomInfo: PlayroomInfoProps = {
  title: "Theme Mode",
  description:
    "Allows you to detect prefered theme and change it as you needed",
  codeURL: getCodeURL("theme-mode"),
};

const store = createThemeStore({
  defaultMode: (localStorage.getItem("theme-mode:mode") as Mode) || "system",
});

function Playroom() {
  const [preferedMode, setPreferedMode] = useState<Mode | null>(null);
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null);

  useEffect(() => {
    function handleThemeChange(notification: NotificationData) {
      setPreferedMode(notification.mode);
      setActiveTheme(notification.theme);
      localStorage.setItem("theme-mode:mode", notification.mode);
    }

    const subscriptionId = store.subscribe(handleThemeChange);

    return () => {
      store.usubscribe(subscriptionId);
    };
  }, []);

  return (
    <div>
      <PlayroomInfo {...playroomInfo} />
      <p>
        Prefered mode: <b>{preferedMode}</b>
      </p>
      <p>
        Active theme: <b>{activeTheme}</b>
      </p>
      <p>
        Change theme to:{" "}
        <button onClick={() => store.changeThemeMode("dark")}>Dark</button> |{" "}
        <button onClick={() => store.changeThemeMode("light")}>Light</button> |{" "}
        <button onClick={() => store.changeThemeMode("system")}>System</button>
      </p>
    </div>
  );
}

export { Playroom };
