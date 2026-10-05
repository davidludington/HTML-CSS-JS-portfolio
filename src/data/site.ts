export const site = {
	name: 'David Ludington',
	role: 'Quality Assurance Engineer',
	email: 'diludington@gmail.com',
	resumeUrl: '/David_Ludington_resume.pdf',
	description:
		'Quality Assurance Engineer at Encyclopedia Britannica. Browse my projects, skills, and creative work.',
} as const;

export type NavLink = {
	label: string;
	href: string;
};

/**
 * Drives the top nav, the hamburger menu, and the footer. Adding a page means
 * adding one entry here.
 */
export const navLinks: NavLink[] = [
	{ label: 'Work', href: '/work' },
	{ label: 'Creative', href: '/creative' },
];

export const socials = [
	{
		label: 'My LinkedIn profile',
		href: 'https://www.linkedin.com/in/david-ludington-903389249/',
		icon: 'linkedin.png',
	},
	{
		label: 'My Github profile',
		href: 'https://github.com/davidludington',
		icon: 'github.png',
	},
] as const;

/**
 * `iconClass` carries the one-off modifier from the original markup. The email
 * icon gets `.email-icon` (height: 2.5rem); the LinkedIn icon does not.
 */
export const contactLinks = [
	{
		label: 'Email icon',
		text: site.email,
		href: `mailto:${site.email}`,
		icon: 'email.png',
		iconClass: 'email-icon',
	},
	{
		label: 'LinkedIn icon',
		text: 'LinkedIn',
		href: 'https://www.linkedin.com/in/david-ludington-903389249/',
		icon: 'linkedin.png',
		iconClass: '',
	},
] as const;

/** Rendered on /work under "Work". */
export const currentRole = {
	title: 'Current Role',
	role: 'QA Automation Engineer',
	company: 'Encyclopedia Britannica',
	icon: 'experience.png',
} as const;

export const education = {
	title: 'Loyola University Chicago',
	degree: 'Bachelors of Science - 2025',
	field: 'Computer Science',
	icon: 'education.png',
} as const;
