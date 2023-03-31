export class LoginPage {
    constructor() {
        this.userInput = "#user_login";
        this.passwordInput = "#user_password";
        this.loginButton = "#login_form > div.form-actions > input";
        this.tabs = {
            account_summary_tab: "#account_summary_tab",
            account_activity_tab: "#account_activity_tab",
            transfer_funds_tab: "#transfer_funds_tab",
        };
        this.error = ".alert.alert-error";
    }

    visit() {
        cy.visit("http://zero.webappsecurity.com/login.html");
    }

    validateLoginPage() {
        cy.get(this.userInput).should("be.visible");
        cy.get(this.passwordInput).should("be.visible");
        cy.get(this.loginButton).should("be.visible");
    }

    validateLoginError() {
        cy.get(this.error = ".alert.alert-error").should("be.visible");
    }

    validataSuccesfulLogin() {
        cy.get(this.tabs.account_summary_tab).should("be.visible");
        cy.get(this.tabs.account_activity_tab).should("be.visible");
        cy.get(this.tabs.transfer_funds_tab).should("be.visible");
    }
    
    login(email, password) {
        cy.get(this.userInput).should("be.visible").type(email);
        cy.get(this.passwordInput).should("be.visible").type(password);
        cy.get(this.loginButton).should("be.visible").click();
    }
}

export const loginPage = new LoginPage()