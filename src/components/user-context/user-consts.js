export const defaultUserObject = {
  authorized: false,
  firstName: "",
  surname: "",
  get fullName() {
    return `${this.surname} ${this.firstName}`;
  },
  loginTime: null,
};
