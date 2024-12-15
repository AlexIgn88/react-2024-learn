"use client";

import { BREAKPOINT } from "./ui-consts.js";

//Во избежание ошибки ReferenceError: window is not defined
//перенес вычисление isDesktopHelper в клиентский компонент, куда импортируется isDesktopHelper
export const isDesktop = () =>
  typeof window !== "undefined" ? window?.innerWidth > BREAKPOINT : false;
