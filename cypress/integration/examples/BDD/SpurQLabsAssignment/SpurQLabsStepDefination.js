import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SpurQlab from '../../../../support/SpurQLabsPageObjects'

var spurQLabObj = new SpurQlab
Given('Visit online calculator page', () => {
    cy.visit("https://www.calculator.net")
    cy.wait(1000)
})

And('{string} this two numbers n1={string} and n2={string} and expected result is {string}', (operation, num1, num2, expectedResult) => {
    spurQLabObj.performOperations(operation, num1, num2, expectedResult)
})
