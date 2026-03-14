import { createBrowserRouter } from "react-router";
import { SignUp } from "./pages/signup";
import { Customize1 } from "./pages/customize-1";
import { Customize2 } from "./pages/customize-2";
import { Customize3 } from "./pages/customize-3";
import { Configure } from "./pages/configure";
import { Dashboard } from "./pages/dashboard";
import { NewProject } from "./pages/new-project";
import { Workspace } from "./pages/workspace";
import { Home } from "./pages/home";
import { ErrorBoundary } from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/home",
    Component: Home,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/signup",
    Component: SignUp,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/customize",
    Component: Customize1,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/customize-1",
    Component: Customize1,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/customize-2",
    Component: Customize2,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/customize-3",
    Component: Customize3,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/configure",
    Component: Configure,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/settings",
    Component: Configure,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/new-project",
    Component: NewProject,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/workspace",
    Component: Workspace,
    ErrorBoundary: ErrorBoundary,
  },
]);