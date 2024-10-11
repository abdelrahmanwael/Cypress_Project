import loginCredentials from "../test-data/loginCredentials"
import LoginPage from '../pages/loginPage';
import SchedulePage from '../pages/schedulePage';
import UnavailabilityPage from '../pages/unavailabilityPage';
import UnavailabilityNewRequestPage from '../pages/unavailabilityNewRequestPage';

describe.only('Login Test', () => {
    const loginPage = new LoginPage();
    const schedulePage = new SchedulePage();
    const unavailabilityPage = new UnavailabilityPage();
    const unavailabilityNewRequestPage = new UnavailabilityNewRequestPage();

    it('User update personal data', () => {
        loginPage.visit();
        loginPage.login(loginCredentials.userName,loginCredentials.password);
        schedulePage.clickUnavailabilityPageLink();
        unavailabilityPage.clicknewRequestButton();
        unavailabilityNewRequestPage.fillNewUnavailabilityRequest();
        unavailabilityPage.assertNewRequestAdded();
        unavailabilityPage.deleteTimeOffRequest();
    });
});
