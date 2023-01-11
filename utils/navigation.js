import {
	Squares2X2Icon,
	ChartBarIcon,
	CurrencyPoundIcon,
	Cog6ToothIcon,
	ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

/**
 * An array of objects representing the primary navigation links.
 * @type {Array}
 * @property {string} name - The name of the page (first letters of words should be capitalised).
 * @property {string} href - The path of the page.
 * @property {function} icon - The icon to display for the page.
 * @property {boolean} current - Whether the page is currently selected.
 */
export const primaryNavigation = [
	{ name: "Overview", href: "/overview", icon: Squares2X2Icon, current: false },
	{ name: "Budgeting", href: "/budgeting", icon: ChartBarIcon, current: false },
	{ name: "Savings", href: "#", icon: CurrencyPoundIcon, current: false },
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
		if (page.name === pageName) page.current = true;
	});
};
