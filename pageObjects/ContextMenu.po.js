var ele = require('../../support/Elements/Contextmenuelements').elements;
class ContextMenu {

    contextMenu() {
        return cy.get(ele.clickingarea);
    }
    handleAlertMessage() {

        //handling the alert messages

        this.contextMenu().rightclick()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You selected a context menu')
        })
    }
    contextMenuPageVerify() {

        //verifying the ContextMenu Page

        cy.get(ele.contextmenupageheader).should('have.text', 'Context Menu')
    }
}

export default ContextMenu