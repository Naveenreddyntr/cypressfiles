/// <reference types="cypress"/>

import HomePage from '../../support/pageObjects/HomePage.po'
import AddorRemove from '../../support/pageObjects/AddorRemove.po'

const test = new AddorRemove()
const homepageobject = new HomePage()

describe('Add/Remove Elements', function () {
    this.beforeEach(() => {
        cy.visit(Cypress.env('homepage'))

        homepageobject.homePageVerification() //verifying the home page

        homepageobject.clickingAddorRemoveElements()//verifying the href attribute and perfoming click action

        test.addorRemoveElementsPageVerify()//verifying the AddorRemoveElements page
    })

    it('addorremoveelement', function () {
        test.addElementButtonVerification()//verifying whether the button is visible and enable

        test.cilckingAddElement()//performing click action on Add Element button

        test.deleteButtonVisible()//verifying whether Delete botton is visible and enabled

        test.cilckingDeleteElement()//performing click action on Delete button

        test.deleteButtonNotVisible()//verifying whether Delete botton is  not visible
    })
})
