const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const PortalPage = require('../pageobjects/loginPortal.page');
const InventoryPage = require('../pageobjects/inventory.page');

Given('I am in the Login Portal for Sauce Demo', async () => {
    await PortalPage.open();
});

When('I enter any username and password', async function () {
    await PortalPage.userField.setValue('user');
    await PortalPage.passField.setValue('password');
});

When('I clear both fields before pressing the Login button', async function () {

    await PortalPage.clearField('user');
    await PortalPage.clearField('pass');

    await PortalPage.loginBtn.click();
})

Then('I see the following error message "Username is required"', async () => {
    await expect(PortalPage.errorMsg).toBeDisplayed();
    await expect(PortalPage.errorMsg).toHaveText('Epic sadface: Username is required');
});

When('I clear password field before pressing the Login button', async function () {
    await PortalPage.clearField('pass');
    await PortalPage.loginBtn.click();
})

Then('I see the following error message "Password is required"', async () => {
    await expect(PortalPage.errorMsg).toBeDisplayed();
    await expect(PortalPage.errorMsg).toHaveText('Epic sadface: Password is required');
})

When('I enter accepted username and password', async () => {
    await PortalPage.userField.setValue('visual_user');
    await PortalPage.passField.setValue('secret_sauce');

    await PortalPage.loginBtn.click();
})

Then('I am taken to inventory page', async function () {
    await expect(InventoryPage.logoTitle).toBeDisplayed();
    await expect(InventoryPage.logoTitle).toHaveText('Swag Labs');
    await expect(InventoryPage.productsTitle).toBeDisplayed();
    await expect(InventoryPage.productsTitle).toHaveText('Products');
})