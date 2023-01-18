import {
	Squares2X2Icon,
	ChartBarIcon,
	CurrencyPoundIcon,
	Cog6ToothIcon,
	ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

/**
 * handleNavClick - Handles navigation clicks with the NextJS useRouter custom hook
 * @param {string} pageName - The name of the page to navigate to, with first letter of each word capitalized
 * @param {function} router - NextJS useRouter() custom hook function
 */
export const handleNavClick = (pageName, router, supabase) => {
	switch (pageName) {
		case "Savings":
			router.push("/savings");
			break;
		case "Settings":
			router.push("/savings");
			break;
		case "Logout":
			supabase.auth.signOut();
			router.push("/");
			break;
		default:
			router.push("/savings");
	}
};

/**
 * An array of objects representing the primary navigation links.
 * @type {Array}
 * @property {string} name - The name of the page (first letters of words should be capitalised).
 * @property {string} href - The path of the page.
 * @property {function} icon - The icon to display for the page.
 * @property {boolean} current - Whether the page is currently selected.
 */
export const primaryNavigation = [
	{
		name: "Savings",
		href: "/savings",
		icon: CurrencyPoundIcon,
		current: false,
	},
];

/**
 * An array of objects representing the secondary navigation links.
 * @type {Array}
 * @property {string} name - The name of the page (first letters of words should be capitalised).
 * @property {string} href - The path of the page.
 * @property {function} icon - The icon to display for the page.
 * @property {boolean} current - Whether the page is currently selected.
 */
export const secondaryNavigation = [
	{ name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
	{
		name: "Logout",
		href: "#",
		icon: ArrowRightOnRectangleIcon,
		current: false,
	},
];

/**
 * Sets the current page in order to style it as selected in the UI.
 * @param {Array} navigation - The navigation array.
 * @param {string} pageName - The name of the page to set as current (first letters of words must be capitalised).
 */
export const setCurrentPage = (navigation, pageName) => {
	navigation.forEach((page) => {
		if (page.name === pageName) {
			page.current = true;
		} else {
			page.current = false;
		}
	});
};

/**
 * @typedef {Object} Step
 * @property {string} name - The name or title of the step (eg. Step 1)
 * @property {string} status - The current status of the step (either "current", "upcoming", or "complete")
 */

/**
 * @type {Array.<Step>} steps - An array of step objects representing the progress the multi-step onboarding form.
 */
export const steps = [
	{ name: "Step 1", status: "current" },
	{ name: "Step 2", status: "upcoming" },
	{ name: "Step 3", status: "upcoming" },
];
