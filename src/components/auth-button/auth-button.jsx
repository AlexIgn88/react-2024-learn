"use client";

import { useAuth } from "../auth-context/use-auth.js";
import Button from "../Button/button.jsx";
import { defaultUserObject } from "../auth-context/auth-consts.js";
import { authButton } from "./auth-button.module.scss";
import { isDesktop } from "../../ui/ui-utils.js";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";
import { useGetUsersQuery } from "../../redux/services/api/index.js";

const AuthButton = () => {
  const { user, setUser } = useAuth();
  const { isAuthorized, fullName } = user;
  const isDesktopMode = isDesktop();

  //"захардкордил" id пользователя
  const userId = "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54";

  const { data: userData } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === userId),
    }),
  });

  const authButtonText = (() => {
    switch (true) {
      case !isAuthorized && isDesktopMode:
        return "Войти";
      case isAuthorized && isDesktopMode:
        return "Выйти";
      case !isAuthorized && !isDesktopMode:
        return <TiLockClosed />;
      case isAuthorized && !isDesktopMode:
        return <TiLockOpen />;
    }
  })();

  const loginHandler = () =>
    setUser({
      isAuthorized: true,
      id: userId,
      firstName: userData?.name,
      surname: "Ivanov",
      get fullName() {
        return `${this.surname} ${this.firstName}`;
      },
      loginTime: new Date().getTime(),
    });

  const logoutHandler = () => setUser(defaultUserObject);

  return (
    <div className={authButton}>
      {isAuthorized && isDesktopMode && <div>{fullName}</div>}
      <Button
        text={authButtonText}
        handler={!isAuthorized ? loginHandler : logoutHandler}
      />
    </div>
  );
};

export default AuthButton;
