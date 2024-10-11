class UnavailabilityPage {
    //Locators
    newRequesBtn = '[id="new_unavailability_btn"]';
    newRecordType = 'a:contains("Recurring")';
    deleteUnavailabilityRequestBtn = '[class="fas fa-trash-alt color-black"]';
    deleteRequestConfirmationBtn = 'button:contains("Yes")';
    deleteUnavailabilitySuccessMsg = 'div.alert.alert-info';


    //Methods
    clicknewRequestButton() {
        cy.get(this.newRequesBtn).first().click();
    }
    assertNewRequestAdded() {
        cy.get(this.newRecordType).should('exist');
    }
    deleteTimeOffRequest() {
        cy.get(this.deleteUnavailabilityRequestBtn).first().click();
        cy.get(this.deleteRequestConfirmationBtn).click();
        this.assertSuccessMessage();
    }
    assertSuccessMessage() {
        cy.get(this.deleteUnavailabilitySuccessMsg).should('contain.text', 'Unavailability deleted');
      }
}

export default UnavailabilityPage;