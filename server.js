const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

const createUser = () => ({
  password: faker.internet.password(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  lastName: faker.name.lastName(),
  firstName: faker.name.firstName(),
  _id: faker.datatype.uuid(),
});

// const test = createUser();
// console.log(test);

const createCompany = () => ({
  _id: faker.datatype.uuid(),
  name: faker.company.name(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.streetAddress(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});

// const test2 = createCompany();
// console.log(test2);

app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  const responseObject = {
    user: newUser,
    company: newCompany,
  };
  res.json(responseObject);
});

app.listen(port, () => console.log(`express server running on port ${port}`));
