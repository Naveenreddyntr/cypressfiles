var ele = require("../../support/Elements/iFrameselements.po").elements;
class iFrames {
    iframespage() {
        cy.get(ele.iFrames).should('have.attr','href')
        cy.get(ele.iFrames).click()
    }
    getItalic() {
        return cy.get(ele.Italic)
    }
    getAlignment() {
        return cy.get(ele.centeralignment)
    }
    Framespageverify() {
        //verifying Frames page
        cy.get(ele.framestext).should('have.text', 'Frames')
    }
    pageTitleVerify() {
        this.Framespageverify()//verifying Frames page
        this.iframespage()//verify the href property and performing click action
        cy.get('h3').should('have.text', ele.title)//verifying the iframes page
    }
    textFormatAction() {
        //verifying Bold button is visible and performing bold action in text 
        cy.get(ele.Bold).click().should('be.visible')
        
    }
    textAlignment() {
        // verifying center Alignment is visible and performing text allignment
        this.getAlignment().click().should('be.visible').and('be.enabled')
    }
    fontColor() {
        //verifying Format button,Text Color,Red Color and performing text color
        cy.get(ele.Formatmenu).click().should('be.visible')
        cy.get(ele.TextColoroption).click().should('be.visible')
        cy.get(ele.Redcolor).should('be.visible')
        cy.get(ele.Redcolor).click()
    }
    getiFrameBody() {
        //locating iframe body and typing text
        cy.get(ele.framebody).then(function ($iframe) {
      const iframecontent = $iframe.contents().find('body')
      cy.wrap(iframecontent).click().type('{selectAll}').clear().type('hello').type('{selectAll}').should('have.css','color')
        })
    
    }   
    
}
export default iFrames