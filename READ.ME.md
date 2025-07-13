Description
This project contains Playwright tests for:

Signing in
Placing an order by filling in username and email fields
Setup
Clone the repository.

Install dependencies: npm install

Сreate a .env file in the root directory with the following content: APP_URL=https://fe-delivery.tallinn-learning.ee/

Running Tests
Run all tests: npx playwright test
Run all tests on Chromium: npx playwright test --project=chromium
Run a specific test file on Chromium: npx playwright test tests/lesson16-1.spec.ts --project=chromium
Run all tests on Chromium in debug mode: npx playwright test --project=chromium --debug


