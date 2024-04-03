import { test, expect } from '@playwright/test';
const RegisterPage = require('./pageObjects/RegisterPage.js');
const { generateTestData } = require('./utils/utils.js');

const testData = generateTestData();

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Register' }).click();
});

test('Registro com informações válidas e campos obrigatórios preenchidos', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(null, testData.firstName, testData.lastName, null, null, null, testData.email, null, true, testData.password, testData.password);
  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
;});

test('Registro com informações válidas e todos os campos preenchidos', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    testData.companyName, 
    true, 
    testData.password, 
    testData.password
    );
  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo o campo Gender.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    null, 
    null, 
    null, 
    testData.email, 
    null, 
    testData.newsletter, 
    testData.password, 
    testData.password);
  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo o campo Date of Birth.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    null, 
    true, 
    testData.password, 
    testData.password);
  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo o campo Company Details.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    testData.firstName, 
    testData.lastName, 
    null, 
    null,
    null, 
    testData.email, 
    testData.companyName, 
    true, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas e opção Newsletter desmarcada.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    testData.firstName, 
    testData.lastName, 
    null, 
    null,
    null, 
    testData.email, 
    null, 
    false, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();  

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo Gender e Company Details.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    null, 
    null, 
    null, 
    testData.email, 
    testData.companyName, 
    true, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo Gender e Date of Birth.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    null, 
    true, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo Gender e Newsletter desmarcada.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    null, 
    null, 
    null, 
    testData.email, 
    null, 
    false, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo Date of Birth e Company Details.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    testData.companyName, 
    true, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo Date of Birth e Newsletter desmarcada.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    null, 
    false, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo Company Name e Newsletter desmarcada..', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    testData.firstName, 
    testData.lastName, 
    null, 
    null, 
    null, 
    testData.email, 
    testData.companyName, 
    false, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo Gender, Date of birth e Company name.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    testData.companyName, 
    true, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo Gender, Date of birth e Newsletter desmarcada.', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    null, 
    false, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Registro com informações obrigatórias preenchidas, incluindo Date of birth, Company Name e Newsletter desmarcada.', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    testData.companyName, 
    false, 
    testData.password, 
    testData.password
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getRegistrationResultText()).resolves.toEqual('Your registration completed');
});

test('Campos Obrigatórios Não Preenchidos', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.clickRegisterButton();

  // Verificar se todas as mensagens de erro estão presentes
  await expect(registerPage.getFirstNameErrorMessage()).resolves.toEqual('First name is required.');
  await expect(registerPage.getLastNameErrorMessage()).resolves.toEqual('Last name is required.');
  await expect(registerPage.getEmailRequireErrorMessage()).resolves.toEqual('Email is required.');
  await expect(registerPage.getPasswordErrorMessage()).resolves.toEqual('Password is required.');
  await expect(registerPage.getConfirmPasswordErrorMessage()).resolves.toEqual('Password is required.');
});

test('Preenchimento Apenas do Campo First Name', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    testData.firstName, 
    '', 
    null, 
    null, 
    null, 
    '', 
    null, 
    false, 
    '', 
    ''
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getLastNameErrorMessage()).resolves.toEqual('Last name is required.');
  await expect(registerPage.getEmailRequireErrorMessage()).resolves.toEqual('Email is required.');
  await expect(registerPage.getPasswordErrorMessage()).resolves.toEqual('Password is required.');
  await expect(registerPage.getConfirmPasswordErrorMessage()).resolves.toEqual('Password is required.');
});

test('Preenchimento Apenas do Campo Last Name', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    '', 
    testData.lastName, 
    null, 
    null, 
    null, 
    '', 
    null, 
    false, 
    '', 
    ''
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getFirstNameErrorMessage()).resolves.toEqual('First name is required.');
  await expect(registerPage.getEmailRequireErrorMessage()).resolves.toEqual('Email is required.');
  await expect(registerPage.getPasswordErrorMessage()).resolves.toEqual('Password is required.');
  await expect(registerPage.getConfirmPasswordErrorMessage()).resolves.toEqual('Password is required.');
});

test('Preenchimento Apenas do Campo Email', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    '', 
    '', 
    null, 
    null, 
    null, 
    testData.email, 
    null, 
    false, 
    '', 
    ''
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getFirstNameErrorMessage()).resolves.toEqual('First name is required.');
  await expect(registerPage.getLastNameErrorMessage()).resolves.toEqual('Last name is required.');
  await expect(registerPage.getPasswordErrorMessage()).resolves.toEqual('Password is required.');
  await expect(registerPage.getConfirmPasswordErrorMessage()).resolves.toEqual('Password is required.');
});

test('Preenchimento Apenas do Campo Password', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    '', 
    '',
    null, 
    null, 
    null, 
    '', 
    null, 
    false, 
    testData.password, 
    ''
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getFirstNameErrorMessage()).resolves.toEqual('First name is required.');
  await expect(registerPage.getLastNameErrorMessage()).resolves.toEqual('Last name is required.');
  await expect(registerPage.getEmailRequireErrorMessage()).resolves.toEqual('Email is required.');
  await expect(registerPage.getConfirmPasswordErrorMessage()).resolves.toEqual('Password is required.');
});

test('Preenchimento Apenas do Campo Confirm password', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    null, 
    '', 
    '',
    null, 
    null, 
    null, 
    '', 
    null, 
    false, 
    testData.password, 
    ''
    );  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getFirstNameErrorMessage()).resolves.toEqual('First name is required.');
  await expect(registerPage.getLastNameErrorMessage()).resolves.toEqual('Last name is required.');
  await expect(registerPage.getEmailRequireErrorMessage()).resolves.toEqual('Email is required.');
  await expect(registerPage.getConfirmPasswordErrorMessage()).resolves.toEqual('Password is required.');
});

test('Preenchimento de E-mail Já Cadastrado', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    testData.companyName, 
    true, 
    testData.password, 
    testData.password
    );
  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getEmailErrorMessage()).resolves.toEqual('The specified email already exists');
});

test('Preenchimento de E-mail em Formato Incorreto', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    'abc@a', 
    testData.companyName, 
    true, 
    testData.password, 
    testData.password
    );
  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getWrongEmail()).resolves.toEqual('Wrong email');
});

test('Preenchimento de Password com Menos de 6 Caracteres', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    testData.companyName, 
    true, 
    '12345', 
    '12345'
    );
  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getPasswordErrorMessage()).resolves.toEqual('Password must meet the following rules: must have at least 6 characters');
});

test('Preenchimento de Confirm Password Divergente', async ({ page }) => {
  const testData = generateTestData();
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(
    testData.gender, 
    testData.firstName, 
    testData.lastName, 
    testData.day, 
    testData.month, 
    testData.year, 
    testData.email, 
    testData.companyName, 
    true, 
    testData.password, 
    '12345'
    );
  
  await registerPage.clickRegisterButton();

  await expect(registerPage.getConfirmPasswordErrorMessage()).resolves.toEqual('The password and confirmation password do not match.');
});