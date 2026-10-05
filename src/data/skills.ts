export type Skill = {
	name: string;
	level?: string;
	icon: string;
};

/** Rendered under "Frameworks" on /work. */
export const frameworks: Skill[] = [
	{ name: 'Selenium', icon: 'selenium.png' },
	{ name: 'Appium', icon: 'appium.jpeg' },
	{ name: 'Pytest', icon: 'pytest.png' },
];

/** Rendered under "Languages" on /work. */
export const languages: Skill[] = [
	{ name: 'Java', level: 'Intermediate', icon: 'java_logo.png' },
	{ name: 'Python', level: 'Most Experience', icon: 'pylogo.png' },
	{ name: 'C/C++', level: 'Intermediate', icon: 'c_logo.png' },
	{ name: 'Git', level: 'Intermediate', icon: 'git_logo.png' },
	{ name: 'HTML', level: 'Basic', icon: 'HTML_logo.png' },
	{ name: 'CSS', level: 'Basic', icon: 'css_logo.png' },
	{ name: 'JavaScript', level: 'Basic', icon: 'javascript_logo.png' },
];
