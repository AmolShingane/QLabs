/// <reference types="Cypress" />

describe('Myfirst test case',function(){
    it('first test case',function(){
cy.visit('https://www.nih.gov/health-information')

//social media
cy.get('.l-connect-wrapper a').then(function(value){
    cy.log(value.text())
})
    //
cy.get('.l-footer-wrapper ul > li').each((el,index,list)=>{
    cy.log(el.text())
})

//tabs
cy.get('.tab').each(($el,index,$list)=>{
    cy.log($el.text())
})

// date from custom command
cy.returnTime()

// cy.get('ul.inline-link-list >li').each(($el,index,$list)=>{
//     cy.log($el.text())
// })




})
})