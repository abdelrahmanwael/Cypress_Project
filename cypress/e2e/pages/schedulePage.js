class SchedulePage {
    //Locators
    updateInfoBtn = 'a[href]:contains("Update information")';
    timeOffPageLink = 'span:contains("Time Off")';
    unavailabilityPageLink = 'span:contains("Unavailability")';


    //Methods
    clickUpdateInformationButton() {
        cy.get(this.updateInfoBtn).click();
    }
    clickTimeOffPageLink() {
        cy.get(this.timeOffPageLink).click();
    }
        clickUnavailabilityPageLink() {
        cy.get(this.unavailabilityPageLink).click();
    }
}

export default SchedulePage;