import { loginPage } from "../../pageObjects/loginPage";

describe("Login with POM", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.validateLoginPage();
  });

  it("Wrong login", () => {
    loginPage.login("Pepe", "Pompin");
    loginPage.validateLoginError();
  });

  it("Succesful login with cy.env", () => {
    loginPage.login(
      Cypress.env().credentials.user,
      Cypress.env("credentials").password
    );
    loginPage.validataSuccesfulLogin();
  });

  it("Succesful login with cy.env.json", () => {
    cy.log(Cypress.env());
    loginPage.login(
      Cypress.env().credentials.user,
      Cypress.env("credentials").password
    );
    loginPage.validateLoginError();
  });

  it("Wrong login from terminal", () => {
    loginPage.login(
      Cypress.env().credentials.user,
      Cypress.env("ENVIRONMENT_VARIABLE")
    );
    loginPage.validateLoginError();
  });
});

describe.only(
  "Wrong login based on config",
  {
    env: {
      wrongUser: "error1",
      wrongPassword: "error2",
    },
  },
  function () {
    beforeEach(() => {
      loginPage.visit();
      loginPage.validateLoginPage();
    });
    it("wrong config login", function () {
      cy.log(Cypress.env());
      loginPage.login(Cypress.env("wrongUser"), Cypress.env("wrongPassword"));
      loginPage.validateLoginError();
    });

    it("wrong config login 2", function () {
        cy.log(Cypress.env());
        loginPage.login(Cypress.env("variable"), Cypress.env("variable"));
        loginPage.validateLoginError();
      });
  }
);
