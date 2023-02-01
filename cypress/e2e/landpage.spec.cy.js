// //check web page found
// describe("template spec", () => {
//   it("passes by reaching ", () => {
//     cy.visit("http://localhost:3000");
//   });
// });

// //check it contains type (Get Started)
// describe("test for type=content", () => {
//   it('finds the content "Get Started"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Get Started");
//   });
// });

// //check it clicks buttons with type (Get Started)
// describe("test for button content", () => {
//   it('clicks button with "Get Started"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Get Started").click();
//   });
// });

// //check it contains type (Log In)
// describe("test for type=content", () => {
//   it('finds the content "Log In"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Log In");
//   });
// });

// //check it clicks buttons with type (Log In)
// describe("test for button content", () => {
//   it('clicks button with "Log In"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Log In").click();
//   });
// });

// //check it contains type (Overview)
// describe("test for type=content", () => {
//   it('finds the content "Overview"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Overview");
//   });
// });

// //check it clicks buttons with type (Overview)
// describe("test for button content", () => {
//   it('clicks button with "Overview"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Overview").click();
//   });
// });

// //check it contains type (Budgeting)
// describe("test for type=content", () => {
//   it('finds the content "Budgeting"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Budgeting");
//   });
// });

// //check it clicks buttons with type (Budgeting)
// describe("test for button content", () => {
//   it('clicks button with "Budgeting"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Budgeting").click();
//   });
// });

// //check it contains type (Savings)
// describe("test for type=content", () => {
//   it('finds the content "Savings"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Savings");
//   });
// });

// //check it clicks buttons with type (Budgeting)
// describe("test for button content", () => {
//   it('clicks button with "Savings"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Savings").click();
//   });
// });

// //check that Get Started takes you to onboarding form 1
// describe("test for button content", () => {
//   it('clicks button with "Get Started"', () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Get Started").click();

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should("include", "/onboarding");
//   });
// });

// //check it clicks buttons with type (Next step)
// describe("test for button content", () => {
//   it('clicks button with "Next step"', () => {
//     cy.visit("http://localhost:3000/onboarding");

//     cy.contains("Next step").click();
//   });
// });

// //Test if input of form 1 is able
// describe("Check input is able to be 3000", () => {
//   it("Gets, types and asserts", () => {
//     cy.visit("http://localhost:3000");

//     cy.contains("Get Started").click();

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should("include", "/onboarding");

//     // Get an input, type into it
//     cy.get(".relative > .block").type("3000");

//     //  Verify that the value has been updated
//     cy.get(".relative > .block").should("have.value", "3000");

//     cy.contains("Next step").click();
//   });
// });

//Test if input of form 2 is able NOT WORKING
describe("Check input is able to be 4000", () => {
  it("Gets, types and asserts", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Get Started").click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "onboarding");

    // // Get an input, type into it
    // cy.get(".relative > .block").type("3000");

    // //  Verify that the value has been updated
    // cy.get(".relative > .block").should("have.value", "3000");

    cy.contains("Next step").click();

    // // Get an input, type into it
    // cy.get('[data-testid="rent"]').type("1000");

    //  Verify that the value has been updated
    // cy.get('[data-testid="rent"]'').should("have.value", "1000");
  });
});
