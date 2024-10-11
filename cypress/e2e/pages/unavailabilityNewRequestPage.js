import { faker } from '@faker-js/faker';

class UnavailabilityNewRequestPage {
    //Locators
    unavailabilityTypeDdl = '[id="employee_unavailability_kind"]';
    recurringDayCheckBox = '[id="employee_unavailability_work_week_attributes_monday"]';
    startingDateField = '[id="employee_unavailability_start_date_before_conversion"]';
    endDateRadioBtnOn = '[id="employee_unavailability_open_ended_true"]';
    endingDateField = '[id="employee_unavailability_end_date_before_conversion"]';
    outSideArea = 'label:contains("Every")';
    partDayRadioBtn = '[id="employee_unavailability_all_day_false"]';
    startingTimeField = '[id="employee_unavailability_start_time_before_conversion"]';
    endingTimeField = '[id="employee_unavailability_end_time_before_conversion"]';
    notesTextField = '[id="employee_unavailability_note"]';
    submitBtn = 'button[value="Save"]';
    submitConfirmBtn = '[id="ok-button-unavailability"]';

    //Methods
    chooseUnavailabilityTypeRecurring() {
        cy.get(this.unavailabilityTypeDdl).select('recurring');
    }
    selectRecurringDay() {
        cy.get(this.recurringDayCheckBox).click();
    }
    insertUnavailabilityStartAndEndDates() {
        const startTimeOffDate = faker.date.between({ from: '2024-10-30', to: '2024-12-31' });
        const formattedStartDate = startTimeOffDate.toLocaleDateString('en-GB');
        cy.get(this.startingDateField).clear().type(formattedStartDate);
        cy.get(this.outSideArea).click();
        cy.get(this.endDateRadioBtnOn).click();
        const startDate = new Date(startTimeOffDate);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 4);
        const formattedEndDate = endDate.toLocaleDateString('en-GB');
        cy.get(this.endingDateField).focus().clear().type(formattedEndDate);
        cy.get(this.outSideArea).click();
    }
    insertStartAndEndTimeFields(){
        cy.get(this.startingTimeField).clear().type("13:00");
        cy.get(this.endingTimeField).clear().type("15:00");
    }
    selectPartDayRadioButton() {
        cy.get(this.partDayRadioBtn).click();
    }
    insertEmployeeNotes(){
        const employeeNotes = faker.lorem.paragraph();
        cy.get(this.notesTextField).clear().type(employeeNotes);
    }
    clickSubmitButton() {
        cy.get(this.submitBtn).first().click();
        cy.get(this.submitConfirmBtn).click();
    }
    fillNewUnavailabilityRequest() {
        this.chooseUnavailabilityTypeRecurring();
        this.selectRecurringDay();
        this.insertUnavailabilityStartAndEndDates();
        this.selectPartDayRadioButton();
        this.insertStartAndEndTimeFields();
        this.insertEmployeeNotes();
        this.clickSubmitButton();
    }
}

export default UnavailabilityNewRequestPage;