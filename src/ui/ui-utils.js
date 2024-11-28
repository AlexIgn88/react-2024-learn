import { BREAKPOINT } from "./ui-consts.js";

const isDesktopHelper = () => window.innerWidth > BREAKPOINT;
export const isDesktop = isDesktopHelper();
