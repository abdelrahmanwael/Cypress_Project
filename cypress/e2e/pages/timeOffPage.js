class TimeOffPage {
    //Locators
    newRequesBtn = '[id="new_time_off_button"]';
    pendingStatusLabel = '[class="pending"]';
    deleteTimeOffRequestBtn = '[class="fas fa-times-circle fa-lg"]';
    deleteTimeOffSuccessMsg = 'div.alert.alert-info';


    //Methods
    clicknewRequestButton() {
        cy.get(this.newRequesBtn).click();
    }
    assertNewRequestAdded() {
        cy.get(this.pendingStatusLabel).should('exist');
    }
    deleteTimeOffRequest() {
        cy.get(this.deleteTimeOffRequestBtn).first().click();
        this.assertSuccessMessage();
    }
    assertSuccessMessage() {
        cy.get(this.deleteTimeOffSuccessMsg).should('contain.text', 'Time Off Request was successfully deleted.');
      }
}

export default TimeOffPage;