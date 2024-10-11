import { faker } from '@faker-js/faker';

class PersonalInfoPage {
    //Locators
    titleDdl = '[id="select2-employee_title-container"]';
    titleValueMx = 'li:contains("Mx")';
    phoneNumberField = '[name="employee[phone_number]"]';
    countryDdl = '[id="employee_address_record_attributes_country-button"]';
    countryEgypt = 'a:contains("Egypt")';
    birthDateField = '[id="employee_date_of_birth"]';
    outSideArea = 'span:contains("Shown on schedules and reports from this date")';
    ethnicityDdl = '[id="select2-employee_ethnicity-container"]';
    // ethnicityValueMiddleEastern = '[id="select2-employee_ethnicity-result-eape-Middle Eastern"]';
    ethnicityValueMiddleEastern = 'li:contains("Middle Eastern")';
    passportExpiryDateField = '[id="employee_passport_expiry"]';
    saveBtn = 'button[value="Save"]';
    successMsg = 'div.alert.alert-info';


    //Methods
    selectTitle() {
        cy.get(this.titleDdl).click();
        cy.get(this.titleValueMx).click();
    }
    insertPhoneNumber() {
        const phoneNumber = faker.number.int({ min: 1000000000, max: 9999999999 });
        cy.get(this.phoneNumberField).clear().type(phoneNumber.toString());
    }
    selectCountry() {
        cy.get(this.countryDdl).click();
        cy.get(this.countryEgypt).first().click();
    }
    insertDateOfBirth() {
        const dateOfBirth = faker.date.birthdate().toLocaleDateString('en-GB');
        cy.get(this.birthDateField).clear().type(dateOfBirth);
        cy.get(this.outSideArea).click();
    }
    selectEthnicity() {
        cy.get(this.ethnicityDdl).click();
        cy.get(this.ethnicityValueMiddleEastern).then(($elements) => {
            if ($elements.length === 1) {
              cy.wrap($elements).click();
            } else {
              cy.wrap($elements.last()).click();
            }
          });
    }
    insertPassportExpiryDate() {
        const passportExpiryDate = faker.date.future().toLocaleDateString('en-GB');
        cy.get(this.passportExpiryDateField).clear().type(passportExpiryDate);
        cy.get(this.outSideArea).click();
    }
    clickSaveButton() {
        cy.get(this.saveBtn).first().click();
    }
    assertSuccessMessage() {
        cy.get(this.successMsg).should('contain.text', 'Your profile was successfully updated.');
      }
    updatePersonalInformation() {
        this.selectTitle();
        this.insertPhoneNumber();
        this.selectCountry();
        this.insertDateOfBirth();
        this.selectEthnicity();
        this.insertPassportExpiryDate();
        this.clickSaveButton();
        this.assertSuccessMessage();
    }
}

export default PersonalInfoPage;