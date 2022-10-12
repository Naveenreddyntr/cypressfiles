/// <reference types="cypress"/>

import HomePage from '../../support/pageObjects/HomePage.po'
import DragandDrop from '../../support/pageObjects/DragandDrop.po'

const test = new DragandDrop()
const homepageobject = new HomePage()

describe('Drag and Drop', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('homepage'));

        homepageobject.homePageVerification()   //verifying the Home page 

        homepageobject.dragAndDropClick()//verify the attribute of "drag and drop" link and peforming click action

        test.verifyingProperty()//verifying the draggable property of boxes

    })

    it('should drag and drop', () => {

        test.pageVerify()//Drag and Drop page verification

        test.beforeDragAndDrop()// verifying the data before drag and drop

        test.draggingAndDroping()// performing drag and drop operation

        test.dragAndDropVerify()//verifying the data after drag and drop 

    });

});