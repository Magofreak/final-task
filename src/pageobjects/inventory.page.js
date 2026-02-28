const BasePage = require('./base.page');

class InventoryPage extends BasePage {
    get productsTitle(){
        return $('span[data-test="title"]');
    }

    get logoTitle(){
        return $('.app_logo');
    }

    get addShirtBtn(){
        return $('button#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get cartIcon(){
        return $('span[data-test="shopping-cart-badge"]');
    }

    get dropDown(){
        return $('select[data-test="product-sort-container"]');
    }

    get productsArray(){
        return $$('div[data-test="inventory-item-name"]');
    }

    open(){
        return super.open('inventory.html');
    }

    /**
     * 
     * @param {'A_to_Z' | 'Z_to_A' | 'Lowest' | 'Highest'} option 
     * @returns 
     */
    filterBy(option){
        const filters = {
            A_to_Z: 'Name (A to Z)',
            Z_to_A: 'Name (Z to A)',
            Lowest: 'Price (low to high)',
            Highest: 'Price (high to low)'
        }
        return this.dropDown.selectByVisibleText(filters[option]);
    }
}

module.exports = new InventoryPage();