class RegisterPage {
  constructor(page) {
      this.page = page;
  }

  async fillRegistrationForm(gender = null, firstName, lastName,dateOfBirthDay = null, dateOfBirthMonth = null, dateOfBirthYear = null, email, company = null, subscribeToNewsletter = false, password, confirmPassword) {
      if (gender !== null) {
        await this.page.getByLabel(gender, { exact: true }).check();
      }

      await this.page.locator('input[name="FirstName"]').fill(firstName);
      await this.page.locator('input[name="LastName"]').fill(lastName);

      if (dateOfBirthDay !== null) {
        await this.page.locator('select[name="DateOfBirthDay"]').selectOption({ value: dateOfBirthDay.toString() });
      }
      if (dateOfBirthMonth !== null) {
          await this.page.locator('select[name="DateOfBirthMonth"]').selectOption({ value: dateOfBirthMonth.toString() });
      }
      if (dateOfBirthYear !== null) {
          await this.page.locator('select[name="DateOfBirthYear"]').selectOption({ value: dateOfBirthYear.toString() });
      }

      await this.page.locator('input[name="Email"]').fill(email);
      if (company !== null) {
          await this.page.locator('input[name="Company"]').fill(company);
      }

      if (subscribeToNewsletter) {
        await this.page.getByLabel('Newsletter:').check();
      } else {
        await this.page.getByLabel('Newsletter:').uncheck();
      }

      await this.page.locator('input[name="Password"]').fill(password);
      await this.page.locator('input[name="ConfirmPassword"]').fill(confirmPassword);
  }

  async clickRegisterButton() {
      await this.page.locator('button[name="register-button"]').click();
  }

  async getRegistrationResultText() {
      return await this.page.locator('div.result').textContent();
  }

  async getFirstNameErrorMessage(){
    return await this.page.textContent('#FirstName-error');
  }

  async getLastNameErrorMessage(){
    return await this.page.textContent('#LastName-error');
  }

  async getEmailRequireErrorMessage() {
    return await this.page.textContent('#Email-error');
  }

  async getPasswordErrorMessage(){
    return await this.page.textContent('#Password-error');
  }

  async getConfirmPasswordErrorMessage(){
    return await this.page.textContent('#ConfirmPassword-error');
  }

  async getEmailErrorMessage() {
    return await this.page.textContent('li:has-text("The specified email already exists")');
  }

  async getWrongEmail() {
    return await this.page.textContent('li:has-text("Wrong email")');
  }

}

module.exports = RegisterPage;