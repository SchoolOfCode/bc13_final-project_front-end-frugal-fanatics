const { Features } = require("@headlessui/react/dist/utils/render");

/**
 * added localhost url to cypress.config to allow testing environment with local server.
 * Commented out useeffect across budgeting,overview and savings pages to allow for testing of navigation and Features without forced routing to landing page.**/

//test to check savings pahe successfully loads
describe("The Savings Page", () => {
	it("successfully loads", () => {
		cy.visit("/savings"); // change URL to match your dev URL
	});
});
//checking naviagtion to budgeting works
describe("Navigation to Budgeting", () => {
	it("should navigate to the budgeting page", () => {
		//setting viewport to ensure sidebar open
		cy.viewport(1440, 900);
		// Start from the savings page
		cy.visit("/savings");

		// Find a link containing "budget" and click it
		cy.contains("Budgeting").click();

		// The new url should include "/budget"
		cy.url().should("include", "/budgeting");

		// The new page should contain a title with "budgeting page"
		cy.get("title").contains("Budgeting Page");
	});
});
//checking naviagtion to overview works
describe("Navigation to Overview", () => {
	it("should navigate to the overview page", () => {
		//setting viewport to ensure sidebar open
		cy.viewport(1440, 900);
		// Start from the savings page
		cy.visit("/savings");

		// Find a link containing "overview" and click it
		cy.contains("Overview").click();

		// The new url should include "/budget"
		cy.url().should("include", "/overview");

		// The new page should contain a title with "overview page"
		cy.get("title").contains("Overview Page");
	});
});

describe("Navigation to 1st external link (NI DIRECT) using card component link", () => {
	it("should navigate to the savings page", () => {
		//setting viewport to ensure sidebar open
		cy.viewport(1440, 900);
		// Start from the savings page
		cy.visit("/savings");
		//find link in page containing url and click to navigate to it
		cy.get(
			'[href="https://www.nidirect.gov.uk/articles/saving-future"] > .rounded-2xl > .flex > .mt-4'
		).click();
	});
});

describe("Navigation to 2nd external link(MSE) using card component link", () => {
	it("should navigate to the savings page", () => {
		//setting viewport to ensure sidebar open
		cy.viewport(1440, 900);
		// Start from the savings page
		cy.visit("/savings");
		//find link in page containing url and click to navigate to it
		cy.get(
			'[href="https://www.moneysavingexpert.com/shopping/chat-tips-gold/"] > .rounded-2xl > .flex > .mt-4'
		).click();
	});
});

//check that you can add to christmas Pot and see confetti (pot 1)
describe("When you click add savings under pot 1 a modal appears and when current savings is increased and submitted, confetti is rendered", () => {
	it("should open a modal to add to the savings pot", () => {
		// Start from the savings page
		cy.visit("/savings");
		//find add savings button and click it
		cy.get(".m-auto > :nth-child(1) > .gap-2 ").click();
		//change current
		cy.get(".px-1 > .block").clear().type("400");
		cy.contains("Save").click();
	});
});

//check that you can add to holiday Pot and see confetti (pot 2)
describe("When you click add savings under pot 2 a modal appears and when current savings is increased and submitted, confetti is rendered", () => {
	it("should open a modal to add to the savings pot", () => {
		// Start from the savings page
		cy.visit("/savings");
		//find add savings button and click it
		cy.get(".m-auto > :nth-child(2) > .gap-2 ").click();
		//change current
		cy.get(".px-1 > .block").clear().type("400");
		cy.contains("Save").click();
	});
});

//check that you can add to nursery Pot and see confetti(pot 3)
describe("When you click add savings under pot 3 a modal appears,and when current savings is increased and submitted, confetti is rendered", () => {
	it("should open a modal to add to the savings pot", () => {
		// Start from the savings page
		cy.visit("/savings");
		//find add savings button and click it
		cy.get(".m-auto > :nth-child(3) > .gap-2 ").click();
		//change current
		cy.get(".px-1 > .block").clear().type("400");
		cy.contains("Save").click();
	});
});

//check that you can add to savings and add to birthday Pot (pot 4)
describe("When you click add savings under pot 4 a modal appears, and when current savings is increased and submitted, confetti is rendered", () => {
	it("should open a modal to add to the savings pot", () => {
		// Start from the savings page
		cy.visit("/savings");
		//find add savings button and click it
		cy.get(".m-auto > :nth-child(4) > .gap-2 ").click();
		//change current
		cy.get(".px-1 > .block").clear().type("400");
		cy.contains("Save").click();
	});
});

//check that you can reduce savings and update birthday Pot (pot 4)
describe("When you click add savings a modal appears, then lower the pot savings under pot 4, no confetti should render and pot total should be updated", () => {
	it("should open a modal to add to the savings pot", () => {
		// Start from the savings page
		cy.visit("/savings");
		//find add savings button and click it
		cy.get(".m-auto > :nth-child(4) > .gap-2 ").click();
		//change current
		cy.get(".px-1 > .block").clear().type("200");
		cy.contains("Save").click();
	});
});

//check that without useffect being removed and forcing push, that you are routed back to landing page when you dont hold a valid sesssion

describe("Forced navigation to landing page", () => {
	it("should navigate to the landing page", () => {
		// Start to try and visit the savings page without a session
		cy.visit("/savings");

		// The new url should include "/"
		cy.url().should("contains", "/");

		// The new page should contain a button with "get started"
		cy.get("button").contains("Get Started");
	});
});
