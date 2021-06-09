import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SpurQlab from '../../../../support/SpurQLabsPageObjects';


var spurQLabObj = new SpurQlab()

Given('Visit online calculator page', () => {
   // cy.visit("https://www.calculator.net")
    // cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.visit("https://www.amazon.in/")
    cy.wait(1000)
})

And('{string} this two numbers n1={string} and n2={string} and expected result is {string}', (operation, num1, num2, expectedResult) => {
    spurQLabObj.performOperations(operation, num1, num2, expectedResult)
})

And('Cheked all check box',()=>{
    spurQLabObj.checkAllCheckBox()
})

And('Select drop down value',()=>{
    spurQLabObj.selectDropDown()
})

And('Select dynamic drop dwon',()=>{
    spurQLabObj.selectDynamicDropDown()
})

And('Compare web table data',()=>{
    spurQLabObj.getWebTableValue()
})

And('Open new tab in same tab',()=>{
    spurQLabObj.openNewTabInSameWindow()
})

//Print data from api
And('Print data from api',()=>{
    spurQLabObj.printDataFromApi()
})

//Click on todays deal
And('Click on todays deal',()=>{
    spurQLabObj.clickOnTodaysDeal()
})

//Select iPhone in that and add to cart
And('Select iPhone in that and add to cart',()=>{
    spurQLabObj.SelectiPhoneInAndAddToCart()
})

//Test api
And('Test api',()=>{
    spurQLabObj.testApi()
})