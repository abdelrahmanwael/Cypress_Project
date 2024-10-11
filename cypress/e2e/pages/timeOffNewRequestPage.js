import { faker } from '@faker-js/faker';

class TimeOffNewRequestPage {
    //Locators
    startingDateField = '[id="employee_time_off_request_start_date"]';
    endingDateField = '[id="employee_time_off_request_end_date"]';
    outSideArea = 'p:contains("* Please specify if your request is for a half day")';
    notesTextField = '[id="employee_time_off_request_reason"]';
    submitBtn = 'button[value="Save"]';
    submitConfirmBtn = '[id="ok-button-time-off"]';

    //Methods
    insertTimeOffStartAndEndDates() {
        const startTimeOffDate = faker.date.between({ from: '2024-10-11', to: '2024-12-31' });
        const formattedStartDate = startTimeOffDate.toLocaleDateString('en-GB');
        cy.get(this.startingDateField).clear().type(formattedStartDate);
        cy.get(this.outSideArea).click();
        const startDate = new Date(startTimeOffDate);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 10);
        const formattedEndDate = endDate.toLocaleDateString('en-GB');
        cy.get(this.endingDateField).focus().clear().type(formattedEndDate);
        cy.get(this.outSideArea).click();
    }
    insertEmployeeNotes(){
        const employeeNotes = faker.lorem.paragraph();
        cy.get(this.notesTextField).clear().type(employeeNotes);
    }
    clickSubmitButton() {
        cy.get(this.submitBtn).first().click();
        cy.get(this.submitConfirmBtn).click();
    }
    fillNewTimeOffRequest() {
        this.insertTimeOffStartAndEndDates();
        this.insertEmployeeNotes();
        this.clickSubmitButton();
    }
}

export default TimeOffNewRequestPage;