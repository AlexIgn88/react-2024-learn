import "./index.scss";
import { AppClientOnly } from "./app-client-only.js";

export const metadata = {
  title: "Next.js",
  description: "React 18.3.1 + Next.js 15.1.0",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <AppClientOnly>{children}</AppClientOnly>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
