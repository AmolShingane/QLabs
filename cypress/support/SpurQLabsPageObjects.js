/// <reference types="Cypress" />

import { timeout } from "async"

class SpurQlab {


    performOperations(operation, num1, num2, expectedResult) {
        const AllButtons = "div[style='padding-top:3px;'] > div >span"
        const subButton = "div[style='padding-top:3px;'] > div > span.sciop:nth(2)"
        const outPutValue = "#sciOutPut"

        switch (operation) {
            case 'add':
                this.typenumber(num1, AllButtons, subButton)
                cy.get(AllButtons, { timeout: 1000 }).contains('+').click({ force: true })
                this.typenumber(num2, AllButtons, subButton)
                cy.wait(2000)
                this.verifyOutPut(expectedResult, outPutValue, AllButtons)
                break

            case 'subtract':
                this.typenumber(num1, AllButtons, subButton)
                cy.get(subButton, { timeout: 1000 }).contains('–').click({ force: true })
                this.typenumber(num2, AllButtons, subButton)
                cy.wait(2000)
                this.verifyOutPut(expectedResult, outPutValue, AllButtons)
                break

            case 'divid':
                this.typenumber(num1, AllButtons, subButton)
                cy.get(AllButtons, { timeout: 1000 }).contains('/').click({ force: true })
                this.typenumber(num2, AllButtons, subButton)
                cy.wait(1000)
                this.verifyOutPut(expectedResult, outPutValue, AllButtons)
                break

            case 'multiply':
                this.typenumber(num1, AllButtons, subButton)
                cy.get(AllButtons, { timeout: 1000 }).contains('×').click({ force: true })
                this.typenumber(num2, AllButtons, subButton)
                cy.wait(1000)
                this.verifyOutPut(expectedResult, outPutValue, AllButtons)
                break

            default:
                break;
        }
    }

    verifyOutPut(expectedOutPut, outPutValue, AllButtons) {
        cy.get(outPutValue).invoke('text').then(result => {
            cy.log(result)
            result.trim()
            cy.log(result)
            expect(Number(result)).to.equal(Number(expectedOutPut))
        })
        cy.wait(1000)
        cy.get(AllButtons).contains('AC').click({ force: true })
    }

    typenumber(num, AllButtons, subButton) {
        for (var i = 0; i < num.length; i++) {
            cy.log(num[i])
            if (num[i] == '-') {
                cy.get(subButton).click({ force: true })
            }
            cy.get(AllButtons, { timeout: 1000 }).contains(num[i]).click({ force: true })
        }
    }
}
export default SpurQlab