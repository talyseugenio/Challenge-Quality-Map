const faker = require('faker');

function generateRandomGender() {
  const genders = ['Male', 'Female'];
  return faker.random.arrayElement(genders);
}

function generateTestData() {
  const gender = generateRandomGender();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const dateOfBirth = faker.date.between('1970-01-01', '2004-12-31');
  const day = dateOfBirth.getDate().toString();
  const month = (dateOfBirth.getMonth()).toString();
  const year = dateOfBirth.getFullYear().toString();
  const companyName = faker.company.companyName();

  return { gender, firstName, lastName, email, password, day, month, year, companyName };
}

module.exports = { generateRandomGender, generateTestData };
