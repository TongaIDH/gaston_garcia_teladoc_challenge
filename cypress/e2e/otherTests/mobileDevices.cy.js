const devices = [
  { viewport: "macbook-15", type: "desktop" },
  { viewport: "ipad-2", type: "mobile" },
  { viewport: [1280, 720], type: "desktop" },
  { viewport: [375, 667], type: "mobile" },
];

describe("Testing Mobile Devices", () => {
  it("Using viewport", () => {
    cy.viewport(1280, 720);
    cy.visit("/");
    cy.contains("Safari").should("exist").and("be.visible");
  });

  it("Using mobile viewport", () => {
    cy.viewport(375, 667);
    cy.visit("/");
    cy.contains("Safari").should("exist").and("not.be.visible");
  });

  it("Using desktop preset viewport", () => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.contains("Safari").should("exist").and("be.visible");
  });

  it("Using mobile preset viewport", () => {
    cy.viewport("iphone-6+");
    cy.visit("/");
    cy.contains("Safari").should("exist").and("not.be.visible");
  });

  devices.forEach((device) => {
    it(`Test with the viewport ${device.viewport}`, () => {
      if (Cypress._.isArray(device.viewport)) {
        cy.viewport(device.viewport[0], device.viewport[1]);
      } else {
        cy.viewport(device.viewport);
      }

      cy.visit("/");

      if (device.type === "desktop") {
        cy.contains("Safari").should("exist").and("be.visible");
      } else {
        cy.contains("Safari").should("exist").and("not.be.visible");
      }
    });
  });
});
