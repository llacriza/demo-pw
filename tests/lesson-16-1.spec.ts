import { test, Locator, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {


    await page.goto('https://fe-delivery.tallinn-learning.ee/signin');

})

test('button disabled initially', async ({ page }) => {
    const signInButton: Locator = page.getByRole("button",{name: 'Sign In'});
    const userName: Locator = page.locator('#username');
    const password: Locator = page.locator('#password');
    await userName.fill('John');
    await password.fill('test');
    await expect(signInButton).toBeDisabled();
});