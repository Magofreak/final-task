const BasePage = require('./base.page');

class InventoryPage extends BasePage {
    get productsTitle(){
        return $('span[data-test="title"]')
    }

    get logoTitle(){
        return $('.app_logo')
    }

    open(){
        return super.open('inventory.html');
    }
}

module.exports = new InventoryPage();