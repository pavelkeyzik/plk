import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { Playroom as ResponsivePillsPlayroom } from "./modules/responsive-pills/Playroom";
import { Playroom as ThemeModePlayroom } from "./modules/theme-mode/Playroom";
import { WelcomePage } from "./WelcomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <WelcomePage />,
      },
      {
        path: "/theme-mode",
        element: <ThemeModePlayroom />,
      },
      {
        path: "/responsive-pills",
        element: <ResponsivePillsPlayroom />,
      },
    ],
  },
]);

export { router };
