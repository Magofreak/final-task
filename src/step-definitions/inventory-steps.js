const { Given, When, Then } = require("@wdio/cucumber-framework");
const InventoryPage = require("../pageobjects/inventory.page");

Given('I am in the "Products" section of the inventory page', async ()=> {
    await InventoryPage.open();
    await expect(InventoryPage.logoTitle).toHaveText('Swag Labs');
});

When('I click the "Add to cart" button of a desired item', async () => {
    await InventoryPage.addShirtBtn.click();
});

Then('I see the cart icon gets updated', async () => {
    await expect(InventoryPage.cartIcon).toExist();
    await expect(InventoryPage.cartIcon).toHaveText('1');
});

When('I click "Name Z to A" in the filter dropdown options', async () => {
    await InventoryPage.filterBy('Z_to_A');
    await browser.pause(1000);
});

Then('I see all items from the "Products" section sorted by selected filter', async () => {
    const itemArray = [];
    for await (const elem of InventoryPage.productsArray){
        const itemText = await elem.getText();
        itemArray.push(itemText);        
    }
    const sortedItems = [...itemArray];
    const expectedItems = [...itemArray];
    await expect(sortedItems.sort((a,b)=>b-a)).toEqual(expectedItems);

    console.log(sortedItems);

})

