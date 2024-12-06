import { useAuth } from "../auth-context/use-auth.js";
import Button from "../Button/button.jsx";
import { defaultUserObject } from "../auth-context/auth-consts.js";
import { authButton } from "./auth-button.module.scss";
import { isDesktop } from "../../ui/ui-utils.js";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";

const AuthButton = () => {
  const { user, setUser } = useAuth();
  const { isAuthorized, fullName } = user;

  const authButtonText = (() => {
    switch (true) {
      case !isAuthorized && isDesktop:
        return "Войти";
      case isAuthorized && isDesktop:
        return "Выйти";
      case !isAuthorized && !isDesktop:
        return <TiLockClosed />;
      case isAuthorized && !isDesktop:
        return <TiLockOpen />;
    }
  })();

  const loginHandler = () =>
    setUser({
      isAuthorized: true,
      firstName: "Петр",
      surname: "Иванов",
      get fullName() {
        return `${this.surname} ${this.firstName}`;
      },
      loginTime: new Date().getTime(),
    });

  const logoutHandler = () => setUser(defaultUserObject);

  return (
    <div className={authButton}>
      {isAuthorized && isDesktop && <div>{fullName}</div>}
      <Button
        text={authButtonText}
        handler={!isAuthorized ? loginHandler : logoutHandler}
      />
    </div>
  );
};

export default AuthButton;
