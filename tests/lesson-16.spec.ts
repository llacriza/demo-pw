import { test, Locator, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {

    const path = require('path');

    const filePath = `file://${path.resolve('src/order.html')}`;

    await page.goto(filePath);

})

test('button disabled initially', async ({ page }) => {
    const orderButton: Locator = page.getByTestId('submit-order');
    await expect(orderButton).toBeDisabled();
});

test('button enabled after filling correct data', async ({ page }) => {
    const orderButton: Locator = page.getByTestId('submit-order');
    const userName: Locator = page.getByTestId('username');
    const email: Locator = page.getByTestId('email');
    await userName.fill('John');
    await email.fill('test@mail.ru');
    expect(orderButton).toBeEnabled();
});

test('popup is visible', async ({ page }) => {
    const orderButton: Locator = page.getByTestId('submit-order');
    const userName: Locator = page.getByTestId('username');
    const email: Locator = page.getByTestId('email');
    const popupMessage: Locator = page.locator('#popup-message');
    await userName.fill('John');
    await email.fill('test@mail.ru');
    await orderButton.click();
    await expect(popupMessage).toBeVisible();
    await expect(popupMessage).toHaveText('OK');
});

test('button disabled if Email address is incorrect', async ({ page }) => {
    const orderButton: Locator = page.getByTestId('submit-order');
    const userName: Locator = page.getByTestId('username');
    const email: Locator = page.getByTestId('email');
    await userName.fill('John');
    await email.fill('test@mail');
    await expect (orderButton).toBeDisabled();

});
