/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage.po'
import iFrames from '../../support/pageObjects/iframes.po'

const test = new iFrames()
const homepageobject = new HomePage()
describe('iframes Page', function () {
    this.beforeEach(() => {
        cy.visit(Cypress.env('homepage'));
       homepageobject.homePageVerification()//verifying homepage
       homepageobject.framepage()//verify the href property and performing click action
        //test.Framespageverify()
        //test.iframespage()
        test.pageTitleVerify()//page verification from homepage to iframes page
        cy.wait(3000)
    })
    it('iframe body', function () {
        test.getiFrameBody() 

        cy.wait(3000)
    })

    it('should change the text color', function () {
        test.getiFrameBody()
        test.textFormatAction()
        test.fontColor()

       // test.verifyingtext()
        cy.wait(3000)

    })
    it('should alignment text', function () {
        test.getiFrameBody()
        test.textAlignment()
    })
})