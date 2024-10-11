import testUrls from "../test-data/testUrls";


class LoginPage {
    //Locators
    userNameField = 'input[placeholder="Email Address Or Username"]';
    passwordField = 'input[placeholder="Password"]';
    signInBtn = '#sign-in-button'
    companyLogo = 'img[src="/assets/logo-076d23803b27f7af67e842ba9f5a8371944834157e22d42259a7f956a6d6908d.png"]'


    //Methods
    visit() {
        cy.visit(testUrls.bizimplyURL);
    }
    login(username,password) {
        cy.get(this.userNameField).type(username);
        cy.get(this.passwordField).type(password);
        cy.get(this.signInBtn).click();
        expect(this.companyLogo).to.exist;
    }
}

export default LoginPage;