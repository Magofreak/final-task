const { browser } = require("@wdio/globals");
const BasePage = require('./base.page');

class PortalPage extends BasePage {
    
    get userField(){
        return $('#user-name');
    }
    get passField(){
        return $('#password');
    }

    get loginBtn(){
        return $('input[data-test="login-button"]');
    }

    get errorMsg(){
        return $('h3[data-test="error"]');
    }

    open(){
        return super.open('');
    }

    /**
     * @param {'user' | 'pass'} input 
     */
    async clearField(input){
        const field = {
            user: this.userField,
            pass: this.passField
        }
        await field[input].click();
        await browser.pause(500);
        await browser.keys(['Control', 'a', 'Backspace']);
    }
}

module.exports = new PortalPage();