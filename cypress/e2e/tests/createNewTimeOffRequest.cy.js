import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import SchedulePage from '../pages/schedulePage';
import TimeOffPage from '../pages/timeOffPage';
import TimeOffNewRequestPage from '../pages/timeOffNewRequestPage';

describe.only('Login Test', () => {
    const loginPage = new LoginPage();
    const schedulePage = new SchedulePage();
    const timeOffPage = new TimeOffPage();
    const timeOffNewRequestPage = new TimeOffNewRequestPage();

    it('User update personal data', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        schedulePage.clickTimeOffPageLink();
        timeOffPage.clicknewRequestButton();
        timeOffNewRequestPage.fillNewTimeOffRequest();
        timeOffPage.assertNewRequestAdded();
        timeOffPage.deleteTimeOffRequest();
    });
});
