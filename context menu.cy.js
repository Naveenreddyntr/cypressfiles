/// <reference types="cypress"/>

import HomePage from '../../support/pageObjects/HomePage.po'
import ContextMenu from '../../support/pageObjects/ContextMenu.po'

const test = new ContextMenu()
const homepageobject = new HomePage()
describe('ContextMenu Page',function(){

    this.beforeEach(()=>{

        cy.visit(Cypress.env('homepage'))

        homepageobject.homePageVerification()//verifying the homepage

        homepageobject.contextMenuPage()//verifying the href attribute and perfoming click action

        test.contextMenuPageVerify()//verifying the ContextMenu Page

    })
    it('contetmenu alert',function(){
        
        test.handleAlertMessage()//handling the alert message
    }) 
})