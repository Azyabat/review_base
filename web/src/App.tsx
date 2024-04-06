import { attachLogger } from "effector-logger";

import React from "react";
import { AuthPage, CommonPage } from "./pages";
import "./style.css";

attachLogger();

export const App = () => {
  return <AuthPage />;
};
