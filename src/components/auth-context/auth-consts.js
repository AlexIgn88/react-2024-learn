export const defaultUserObject = {
  isAuthorized: false,
  id: "",
  firstName: "",
  surname: "",
  get fullName() {
    return `${this.surname} ${this.firstName}`;
  },
  loginTime: null,
};
