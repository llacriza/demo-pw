import { test, Locator, expect} from '@playwright/test';
import {faker} from "@faker-js/faker/locale/ar";

test.beforeEach(async ({ page }) => {


    await page.goto('/');


})

test('button disabled initially', async ({ page }) => {
    const signInButton: Locator = page.getByRole("button",{name: 'Sign In'});
    const userName: Locator = page.locator('#username');
    const password: Locator = page.locator('#password');
    await userName.fill('John');
    await password.fill('test');
    await expect(signInButton).toBeDisabled();
});

test('Popup appears after sign in clicking when name and pass not correct ENG', async ({ page }) => {
    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password(8);
    const signInButton: Locator = page.getByRole("button",{name: 'Sign In'});
    const popupMessage: Locator = page.locator('[data-name="authorizationError-popup"]');

    await page.fill('#username', randomUsername);
    await page.fill('#password', randomPassword);
    await signInButton.click();
    await expect(popupMessage).toBeVisible();
    console.log(await popupMessage.textContent());
    await expect(popupMessage).toHaveText(`×Incorrect credentials`
    );
});

test('Popup appears after sign in clicking when name and pass not correct RU', async ({ page }) => {
    const langRu : Locator = page.getByRole('button', {name: 'RU'});
    await langRu.click();
    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password(8);
    const signInButton: Locator = page.getByRole("button",{name: 'Войти'});
    const popupMessage: Locator = page.locator('[data-name="authorizationError-popup"]');

    await page.fill('#username', randomUsername);
    await page.fill('#password', randomPassword);
    await signInButton.click();
    await expect(popupMessage).toBeVisible();
    console.log(await popupMessage.textContent());
    await expect(popupMessage).toHaveText(`×Неверные учетные данные`
    );
});