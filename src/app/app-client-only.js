"use client";

import dynamic from "next/dynamic";

const App = dynamic(() => import("../components/app/app"), { ssr: false });

export const AppClientOnly = ({ children }) => {
  return <App>{children}</App>;
};
