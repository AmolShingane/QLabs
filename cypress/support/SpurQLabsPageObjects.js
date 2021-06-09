/// <reference types="Cypress" />

import { timeout } from "async"
before(function () {
    cy.fixture('example').then(function (testdata) {
        this.testdata = testdata
        //cy.log(this.testdata.name)
    })
})

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
    checkAllCheckBox(){
        cy.get('fieldset input[type="checkbox"]',{timeout:1000}).then((el)=>{
            for(let i=0;i<el.length;i++){
                cy.get('fieldset input[type="checkbox"]:nth('+i+')',{timeout:1000}).check()
            }
        })
    
    }
    selectDropDown(){
        cy.wait(1000)
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')


    }
    selectDynamicDropDown(){
        cy.get('#autocomplete').type('ind')
        cy.wait(1000)
        cy.get("ul > li").contains('India').click({force:true})
    }
    
    getWebTableValue(){
        cy.get('table.table-display tr td:nth-child(2)').each((el,index,list)=>{
            var text=el.text()
            if(text.includes('JMETER')){
                cy.get('table.table-display tr td:nth-child(2)').eq(index).next().then(price =>{
                    var text=price.text()
                    expect(text).equal('25')
                })  
            }
        })

    }

    openNewTabInSameWindow(){
        cy.get('a[id="opentab"]').invoke('removeAttr','target').click()
        cy.wait(2000)
        cy.go('back')
    }

    printDataFromApi(){
        cy.request('GET','https://reqres.in/api/users?page=2').then(resposnce =>{
            expect(resposnce.status).to.equal(200)
            cy.log(resposnce.body.data[0].email)
        })
        
        cy.request('POST','https://reqres.in/api/users?page=2',
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        }).then(resposnce =>{
            cy.log(resposnce.status)
            expect(resposnce.status).equal(201)
            expect(resposnce.body).to.have.property('id')
        })
    }

    clickOnTodaysDeal(){
        cy.get('#nav-xshop-container #nav-xshop .nav-a').contains("Today's Deals").click({force:true})
        cy.wait(2000)
    }
 
    SelectiPhoneInAndAddToCart(){
        cy.get('#dealTitle').contains("iPhone 12 mini | Starting Rs.60900").invoke('text').then(text1 =>{
            cy.log(text1.trim())
            var ans=text1.split('.')
            
            cy.log(ans[0])
            cy.log(ans[1])
            



        })
    }

    testApi(){

        cy.request('GET','https://reqres.in/api/users/2').then(resposnce =>{
            expect(resposnce.status).to.equal(200)
            expect(resposnce.body.data.id).to.equal(2)
        })
    }

    mockApiREsponce(){

        cy.intercept()
    }
}
export default SpurQlab