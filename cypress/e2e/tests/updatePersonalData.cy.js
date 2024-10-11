import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import SchedulePage from '../pages/schedulePage';
import PersonalInfoPage from '../pages/personalInfoPage';

describe.only('Login Test', () => {
    const loginPage = new LoginPage();
    const schedulePage = new SchedulePage();
    const personalInfoPage = new PersonalInfoPage();

    it('User update personal data', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        schedulePage.clickUpdateInformationButton();
        personalInfoPage.updatePersonalInformation();
    });
});
