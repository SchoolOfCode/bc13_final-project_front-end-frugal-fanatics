it("user should be able to log in", () => {
	cy.visit("/onboarding");

	// fill in income and next step
	cy.get(".relative > .block").type("1000");
	cy.get(".mt-16").click();
	cy.getByData("Rent or Mortgage ").type("1000");
	// cy.get("#\30 ").type("1000");

	// // submit the form
	// cy.get("button").contains("Sign in").click();
	// cy.contains("button", "Logout").should("be.visible");
});
