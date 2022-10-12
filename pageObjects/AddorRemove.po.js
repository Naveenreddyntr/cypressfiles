var ele =require('../../support/Elements/AddorRemoveElements').elements;
class AddorRemove{
    addElement(){
        return cy.get(ele.AddElementLocator);
    }
    deleteElement(){
        return cy.get(ele.DeleteElementsLocator);
    }
   // homePageVerication(){
        //verifying the home page
   //     cy.get(ele.homepageheader).should('have.text', 'Welcome to the-internet')
   // }
    //clickingAddorRemoveElements(){
        //verifying the href attribute and perfoming click action
      //  cy.contains(ele.AddorRemoveElementspageLocator).should('have.attr','href')
        //cy.contains(ele.AddorRemoveElementspageLocator).click()
   // }
    
    addorRemoveElementsPageVerify(){
        //verifying the AddorRemoveElements page
        cy.get(ele.AddorRemoveElementspageheader).should('have.text','Add/Remove Elements')
    }
    addElementButtonVerification(){
        //verifying whether the button is visible and enable
        this.addElement().should('be.visible').and('be.enabled')
    }
    cilckingAddElement(){
        //performing click action on Add Element button
        this.addElement().click()
    }
    cilckingDeleteElement(){
        //performing click action on Delete button
        this.deleteElement().click()
    }
    deleteButtonVisible(){
        //verifying whether Delete botton is visible and enabled
        this.deleteElement().should('be.visible').and('be.enabled')
    }
    deleteButtonNotVisible(){
        //verifying whether Delete botton is  not visible
            cy.get('#elements').should('not.be.visible')
        }
    

}

export default AddorRemove