const { Before } = require("@wdio/cucumber-framework");
const PortalPage = require("../pageobjects/loginPortal.page");

Before({name: 'Login', tags: '@cartFlow'}, async ()=>{
    await PortalPage.open();
    await PortalPage.userField.setValue('visual_user');
    await PortalPage.passField.setValue('secret_sauce');
    await PortalPage.loginBtn.click();
})