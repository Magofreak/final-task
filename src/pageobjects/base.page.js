module.exports = class BasePage {
    open(path){
        return browser.url(`https://www.saucedemo.com/${path}`)
    }
}