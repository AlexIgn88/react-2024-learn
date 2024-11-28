import { useUser } from "../user-context/use-user.js";
import Button from "../Button/button.jsx";
import { defaultUserObject } from "../user-context/user-consts.js";
import { authButton } from "./auth-button.module.scss";
import { isDesktop } from "../../ui/ui-utils.js";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";

const AuthButton = () => {
  const { user, setUser } = useUser();

  const authButtonText = (() => {
    switch (true) {
      case !user.authorized && isDesktop:
        return "Войти";
      case user.authorized && isDesktop:
        return "Выйти";
      case !user.authorized && !isDesktop:
        return <TiLockClosed />;
      case user.authorized && !isDesktop:
        return <TiLockOpen />;
    }
  })();

  const loginHandler = () =>
    setUser({
      authorized: true,
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
      {user.authorized && isDesktop && <div>{user.fullName}</div>}
      <Button
        text={authButtonText}
        handler={!user.authorized ? loginHandler : logoutHandler}
      />
    </div>
  );
};

export default AuthButton;
