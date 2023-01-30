export default class Passport {
  /**
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName() {
    return this.firstName.toLowerCase();
  }

  getLastName() {
    return this.lastName.toUpperCase();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return `${this.firstName[0].toUpperCase()}.${this.lastName[0].toUpperCase()}.`;
  }

  getIsValidName() {
    const pattern = /^[a-zA-Z]{1,}$/;
    return pattern.test(this.firstName) &&
      pattern.test(this.lastName) &&
      !this.lastName.endsWith(".")
      ? "Yes"
      : "No";
  }
}
