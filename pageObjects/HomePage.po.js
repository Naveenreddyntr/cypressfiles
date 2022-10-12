var ele=require('../../support/Elements/HomePageElements').elements;

class HomePage {
        homePageVerification(){
            //verifying the home page
            cy.get(ele.homepageheader).should('have.text', 'Welcome to the-internet')
        }
        clickingAddorRemoveElements(){
            //verifying the href attribute and perfoming click action
            cy.contains(ele.AddorRemoveElementspageLocator).should('have.attr','href')
            cy.contains(ele.AddorRemoveElementspageLocator).click()
        }
        contextMenuPage(){
            //verifying the href attribute and perfoming click action
            cy.get(ele.contextmenuLocator).should('have.attr', 'href')
            cy.get(ele.contextmenuLocator).click()
        }
        dragAndDropClick() {
            //verify the attribute of "drag and drop" link and peforming click action
            cy.get(ele.DragAndDroppageLocator).should('have.attr', 'href')
            cy.get(ele.DragAndDroppageLocator).click()
        }
        framepage() {
            cy.get(ele.frames).should('have.attr','href')
            cy.get(ele.frames).click()
    
        }
}
export default HomePage