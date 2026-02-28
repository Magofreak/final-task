@cartFlow
Feature: Inventory items management

    Scenario: Add an item to the shopping cart
        Given I am in the "Products" section of the inventory page
        When I click the "Add to cart" button of a desired item
        Then I see the cart icon gets updated

        Scenario: Sort items in alphabetical descending order
        When I click "Name Z to A" in the filter dropdown options
        Then I see all items from the "Products" section sorted by selected filter