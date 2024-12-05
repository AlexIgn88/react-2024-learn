export const defaultUserObject = {
  isAuthorized: false,
  firstName: "",
  surname: "",
  get fullName() {
    return `${this.surname} ${this.firstName}`;
  },
  loginTime: null,
};
