// test/pageobjects/utils/userData.ts

export function getUserData() {
  const random = Math.floor(Math.random() * 100000);

  return {
    name: 'Test User',
    email: `testuser${random}@example.com`,
    password: 'Test@1234',
    day: '10',
    month: 'May',
    year: '1990',
    firstName: 'Test',
    lastName: 'User',
    company: 'TestCompany',
    address1: '123 Test St',
    address2: 'Apt 4',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    zipcode: 'A1B2C3',
    mobileNumber: '1234567890'
  };
}