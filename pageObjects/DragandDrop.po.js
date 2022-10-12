var ele = require('../../support/Elements/Draganddropelements').elements;
class DragandDrop {
    homePageVerify() {
        //verifying the Home page header
        cy.get(ele.homepagetext).should('have.text', 'Welcome to the-internet')
    }
    pageVerify() {
        //Drag and Drop page verification
        cy.get(ele.Draganddropheader).should('have.text', 'Drag and Drop')
    }
    boxA() {
        return cy.get(ele.locatorA)
    }
    boxB() {
        return cy.get(ele.locatorB)
    }
    dragAndDropPage() {
        return cy.get(ele.DragAndDroppageLocator)
    }


    beforeDragAndDrop() {
        // verifying the data before peforming drag and drop actio
        this.boxA().should('contain.text', 'A')
        this.boxB().should('contain.text', 'B')

    }
    dragAndDropVerify() {
        // verifying the data after performing drag and drop action
        this.boxB().should('contain.text', 'A')
        this.boxA().should('contain.text', 'B')
    }
    verifyingProperty() {
        //verifying the draggable property of both boxes 
        this.boxA().invoke('attr', 'draggable')
        this.boxB().invoke('attr', 'draggable')
    }
    draggingAndDroping() {
        // performing drag and drop operation
        const dataTransfer = new DataTransfer();
        this.boxA().trigger('dragstart', { dataTransfer });

        this.boxB().trigger('drop', { dataTransfer })
    }

}

export default DragandDrop