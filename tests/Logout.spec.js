import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';
import { LogoutPage } from '../Pages/LogoutPage.js';
import testdata from '../Utils/testdata.json' with { type: 'json' };


test('Logout', async ({ page }) => {
    const username = testdata.validUsername;
    const password = testdata.validPassword;
    const login = new LoginPage(page); // object creation, (page) - constructor invoking
    const logout = new LogoutPage(page);

    await login.navigateToApplication();
    await login.applicationLogin(username, password);
    await login.loginToTheApplication();
    await login.succesfulllogin();
    await logout.logout();

})