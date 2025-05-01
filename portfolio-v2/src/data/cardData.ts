import { Card, CardType, CardRarity } from "./types";

export const cards: Card[] = [
	// Project Cards
	{
		id: "project-1",
		title: "Portfolio Card Game",
		description:
			"An interactive portfolio website inspired by card deck builder games",
		type: CardType.PROJECT,
		rarity: CardRarity.LEGENDARY,
		imageUrl:
			"https://images.unsplash.com/photo-1742743032749-187b17179e0f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		tags: [
			"Frontend",
			"React",
			"TypeScript",
			"Framer Motion",
			"Styled Components",
		],
		links: [
			{
				label: "GitHub",
				url: "https://github.com/atinyshrimp/Website/tree/master/portfolio-v2",
			},
		],
		isFeatured: true,
		projectDetails: {
			duration: "4 weeks",
			technologies: [
				"React",
				"TypeScript",
				"Framer Motion",
				"Styled Components",
			],
			role: "Developer & Designer",
			outcomes: [
				"Interactive card interface",
				"Deck building mechanic",
				"Responsive design",
			],
		},
	},
	{
		id: "project-2",
		title: "E-commerce Platform",
		description:
			"A full-featured online store with product management and payment processing",
		type: CardType.PROJECT,
		rarity: CardRarity.EPIC,
		imageUrl:
			"https://github.com/atinyshrimp/lego/blob/master/client/v2/assets/images/bricked_up_logo.png?raw=true",
		tags: [
			"Frontend",
			"Backend",
			"Fullstack",
			"React",
			"Node.js",
			"MongoDB",
			"Web Scraping",
		],
		links: [
			{ label: "GitHub", url: "https://github.com/atinyshrimp/lego" },
			{
				label: "Live Demo",
				url: "https://bricked-up.vercel.app/",
			},
		],
		projectDetails: {
			duration: "3 months",
			technologies: ["React", "Node.js", "Express", "MongoDB", "Puppeteer"],
			outcomes: [
				"Secure payment processing",
				"User authentication",
				"Product management",
			],
		},
	},
	{
		id: "project-3",
		title: "Gastronaut",
		description:
			"A full-featured online store with product management and payment processing",
		type: CardType.PROJECT,
		rarity: CardRarity.EPIC,
		imageUrl:
			"https://github.com/atinyshrimp/webscraping-ml-project/blob/d7c9e3ad8aeb6fee792deac46b4c0fbb2430780e/static/img/landing_page.png?raw=true",
		tags: [
			"Python",
			"HuggingFace",
			"Bootstrap",
			"Web Scraping",
			"Natural Language Processing (NLP)",
			"Machine Learning (ML)",
		],
		links: [
			{
				label: "GitHub",
				url: "https://github.com/atinyshrimp/webscraping-ml-project",
			},
		],
		projectDetails: {
			duration: "3 months",
			technologies: ["Python", "HuggingFace", "Bootstrap", "Puppeteer"],
			role: "Developer & Designer",
			outcomes: ["Web scraping", "Data analysis"],
		},
	},
	{
		id: "project-4",
		title: "CatSim",
		description:
			"A simple pet simulation game where you can take care of your virtual cat",
		type: CardType.PROJECT,
		rarity: CardRarity.EPIC,
		imageUrl:
			"https://joycelapilus.com/static/media/catsim_thumbnail.506b32b6ebab4307004c.png",
		tags: [
			"Unity",
			"C#",
			"Game Design",
			"Game Development",
			"Object-Oriented Programming (OOP)",
		],
		links: [
			{
				label: "GitHub",
				url: "https://github.com/atinyshrimp/Programmer-Theory-Repo",
			},
			{
				label: "Unity Play",
				url: "https://play.unity.com/p/63fb8d6caf7eae04a34e6471",
			},
		],
		projectDetails: {
			duration: "2 months",
			technologies: ["C#", "Unity"],
			outcomes: [
				"Interactive gameplay mechanics",
				"User-friendly interface",
				"Pet care simulation",
			],
		},
	},
	{
		id: "project-5",
		title: "Venulog",
		description:
			"A logistic platform that allows you to manage your deliveries for events",
		type: CardType.PROJECT,
		rarity: CardRarity.EPIC,
		imageUrl: "https://placehold.co/600x400/2a3990/white/?text=Venulog",
		tags: ["Frontend", "Backend", "Fullstack", "Node.js", "Express", "Stripe"],
		links: [
			{
				label: "Live Demo",
				url: "https://venulog.com",
			},
		],
		projectDetails: {
			duration: "1 month",
			technologies: ["Node.js", "Express", "Stripe", "i18n"],
			role: "Full Stack Developer",
			outcomes: [
				"Secure payment processing",
				"User authentication with JWT",
				"Internationalization (i18n)",
			],
		},
	},
	{
		id: "project-6",
		title: "MiDoc",
		description:
			"A web application that allows you to manage your medical prescriptions related to menopause",
		type: CardType.PROJECT,
		rarity: CardRarity.EPIC,
		imageUrl:
			"http://www.midoc.es/cdn/shop/files/Diseno_sin_titulo_-_2025-04-02T111651.217.png?v=1743585811",
		tags: [
			"Frontend",
			"Backend",
			"Node.js",
			"Express",
			"Stripe",
			"Application Programming Interface (API)",
			"Web Development",
		],
		links: [
			{
				label: "Live Demo",
				url: "https://midoc-app.cleverapps.io",
			},
		],
		projectDetails: {
			duration: "1 month",
			technologies: [
				"Node.js",
				"Express",
				"MongoDB",
				"Stripe",
				"i18n",
				"Calendly",
			],
			role: "Full Stack Developer",
			outcomes: [
				"Secure payment processing",
				"User authentication with JWT",
				"Calendly integration",
				"Medical prescription management",
				"Webhook integration",
			],
		},
	},
	{
		id: "project-7",
		title: "Captain Sonar",
		description:
			"A digital version of the board game Captain Sonar, a strategic team game",
		type: CardType.PROJECT,
		rarity: CardRarity.EPIC,
		imageUrl: "https://jeux.ca/wp-content/uploads/2019/06/Captain-Sonar.jpg",
		tags: [
			"Team Management",
			"Game Design",
			"Game Development",
			"Object-Oriented Programming (OOP)",
		],
		links: [
			{
				label: "Live Demo",
				url: "https://midoc-app.cleverapps.io",
			},
		],
		projectDetails: {
			duration: "1 month",
			technologies: ["Unity", "C#", "Adobe Photoshop"],
			outcomes: [
				"Interactive gameplay mechanics",
				"User-friendly interface",
				"Team-based strategy game",
			],
		},
	},

	// Skill Cards
	{
		id: "skill-1",
		title: "React",
		description: "Building interactive UIs with React and related technologies",
		type: CardType.SKILL,
		rarity: CardRarity.EPIC,
		imageUrl:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Freact-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png&f=1&nofb=1&ipt=1cc4c836f28d79730cf5b3fbc49f630732dc5afdb1245c99e8f5944340ea76a0",
		tags: ["Frontend", "JavaScript", "User Interface (UI)"],
		skillDetails: {
			proficiency: 5,
			yearsOfExperience: 3,
			relatedProjects: ["project-1", "project-2"],
		},
	},
	{
		id: "skill-2",
		title: "Figma",
		isFeatured: true,
		description:
			"Creating intuitive, accessible, and aesthetically pleasing user experiences",
		type: CardType.SKILL,
		rarity: CardRarity.RARE,
		imageUrl:
			"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlnbWF8ZW58MHx8MHx8fDA%3D",
		tags: ["Design", "User Experience", "User Interface"],
		skillDetails: {
			proficiency: 4,
			yearsOfExperience: 2,
			relatedProjects: ["project-1"],
		},
	},
	{
		id: "skill-3",
		title: "Japanese",
		description: "Speaking, reading, and writing Japanese",
		isFeatured: true,
		type: CardType.SKILL,
		rarity: CardRarity.LEGENDARY,
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1694475091098-27cea4555469?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBsYW5ndWFnZXxlbnwwfHwwfHx8MA%3D%3D",
		tags: ["Language", "Culture", "Communication"],
		skillDetails: {
			proficiency: 5,
			yearsOfExperience: 10,
			relatedProjects: ["project-1", "project-2"],
		},
	},
	{
		id: "skill-4",
		title: "Korean",
		description: "Speaking, reading, and writing Korean",
		type: CardType.SKILL,
		rarity: CardRarity.LEGENDARY,
		imageUrl:
			"https://images.unsplash.com/photo-1640090540877-a9ea2027abbd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWFuJTIwbGFuZ3VhZ2V8ZW58MHx8MHx8fDA%3D",
		tags: ["Language", "Culture", "Communication"],
		skillDetails: {
			proficiency: 5,
			yearsOfExperience: 10,
			relatedProjects: ["project-1", "project-2"],
		},
	},

	// Experience Cards
	{
		id: "experience-1",
		title: "Full Stack Developer",
		description:
			"Led a team of frontend developers building complex web applications",
		isFeatured: true,
		type: CardType.EXPERIENCE,
		rarity: CardRarity.LEGENDARY,
		imageUrl:
			"https://bank.cellar-c2.services.clever-cloud.com/file/assets/edb8d352c855fbd4e7e1496b10b059b0/lestud_logo%20%281%29.jpeg",
		tags: [
			"Leadership",
			"Frontend",
			"Backend",
			"Fullstack",
			"Team Management",
			"Internship",
			"Agile Methodologies",
			"Application Programming Interface (API)",
		],
		experienceDetails: {
			company: "Selego",
			position: "Full Stack Developer & Data Scientist",
			startDate: new Date("2025-02-10"),
			endDate: new Date("2025-08-15"),
			location: "Paris, France",
			achievements: [
				"Increased team productivity by 30% through process improvements",
				"Successfully delivered 5 major product releases",
				"Mentored junior developers and conducted code reviews",
			],
		},
	},
	{
		id: "experience-3",
		title: "ESILV",
		description:
			"Master's degree (MSc) in engineering, specializing in Data Science and AI",
		type: CardType.EXPERIENCE,
		rarity: CardRarity.RARE,
		imageUrl:
			"https://www.esilv.fr/ecole-ingenieur/logos/logo_esilv_png_couleur.png",
		tags: [
			"Engineering",
			"Formation",
			"Data Science",
			"AI",
			"Machine Learning",
			"Deep Learning",
		],
		experienceDetails: {
			company: "Ecole Supérieure d'Ingénieurs Léonard de Vinci",
			position: "Master's Degree in Engineering",
			startDate: new Date("2020-09-01"),
			endDate: new Date("2025-08-31"),
			location: "Courbevoie, France",
			achievements: [
				"Specialized in Data Science and AI",
				"Completed projects in machine learning and data analysis",
				"Participated in hackathons and coding competitions",
				"Gained experience in software development and engineering principles",
			],
		},
	},
	{
		id: "experience-4",
		title: "EMLV",
		description:
			"Master's degree (MSc) in management, specializing in Corporate Finance",
		type: CardType.EXPERIENCE,
		rarity: CardRarity.RARE,
		imageUrl: "https://www.emlv.fr/wordpress/logos/logo-emlv-couleur.png",
		tags: [
			"Management",
			"Finance",
			"Accounting",
			"Formation",
			"Corporate Finance",
			"Analysis",
			"Business",
		],
		experienceDetails: {
			company: "Ecole de Management Léonard de Vinci",
			position: "Master's Degree in Management",
			startDate: new Date("2020-09-01"),
			endDate: new Date("2025-08-31"),
			location: "Courbevoie, France",
			achievements: [
				"Specialized in Corporate Finance",
				"Completed projects in financial analysis and accounting",
				"Participated in business case competitions",
				"Gained experience in financial modeling and valuation techniques",
			],
		},
	},
	{
		id: "experience-5",
		title: "Research Engineer Intern",
		description:
			"Master's degree (MSc) in management, specializing in Corporate Finance",
		type: CardType.EXPERIENCE,
		rarity: CardRarity.RARE,
		imageUrl:
			"https://files.appli-intramuros.com/img/news/3199/de54a5130b71968927729fd9da1f8a42_travaux-sn.jpg",
		tags: ["Internship", "Engineering"],
		experienceDetails: {
			company: "SNCF Réseau",
			position: "Research Engineer Intern",
			startDate: new Date("2022-06-07"),
			endDate: new Date("2022-08-10"),
			location: "Saint-Denis, France",
			achievements: [
				"Made an inventory of the standards used by type of conductor",
				"Identified canceled standards and researched alternative standards",
				"Specified test types and sanctions for technical validation by type of conductor",
				"Synthesized (e.g.: Excel table) the standards and the technical validation tests by type of conductor",
				"Mapped out the gathered information in a Word document shared and used by the whole research section",
			],
		},
	},
	{
		id: "experience-6",
		title: "Data Analyst Junior Connected Vehicle",
		description: "",
		type: CardType.EXPERIENCE,
		rarity: CardRarity.RARE,
		imageUrl:
			"https://www.largus.fr/images/styles/max_1300x1300/public/images/01-logo-stellantis.jpg?itok=onTwqeH3",
		tags: ["Internship", "Data Science", "Python", "Power BI", "Data Analysis"],
		experienceDetails: {
			company: "Stellantis",
			position: "Data Analyst Intern",
			startDate: new Date("2024-04-01"),
			endDate: new Date("2024-08-09"),
			location: "Poissy, France",
			achievements: [
				"Specialized in Corporate Finance",
				"Completed projects in financial analysis and accounting",
				"Participated in business case competitions",
				"Gained experience in financial modeling and valuation techniques",
			],
		},
	},
];

export const getCardsByType = (type: CardType): Card[] => {
	return cards.filter((card) => card.type === type);
};

export const getCardById = (id: string): Card | undefined => {
	return cards.find((card) => card.id === id);
};

// Pre-defined decks (collections of cards)
export const decks = [
	{
		id: "frontend-specialist",
		name: "Master Web Developer",
		coverImage:
			"https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D",
		description: "A collection showing my frontend development expertise",
		cards: ["skill-1", "project-1", "project-2", "experience-1"],
	},
	{
		id: "ai-specialist",
		name: "Data Science & AI Specialist",
		coverImage:
			"https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D",
		description: "A collection showing my data science and AI expertise",
		cards: ["project-3", "experience-3"],
	},
	{
		id: "uiux-specialist",
		name: "UI/UX Specialist",
		coverImage:
			"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXh8ZW58MHx8MHx8fDA%3D",
		description: "A collection showing my ui/ux & game design expertise",
		cards: ["skill-1", "project-1", "experience-1", "experience-3"],
	},
	{
		id: "management",
		name: "Management & Finance",
		coverImage:
			"https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da783c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
		description: "A collection showing my management & finance expertise",
		cards: ["experience-4"],
	},
	{
		id: "game-design",
		name: "Game Design & Development",
		coverImage:
			"https://images.unsplash.com/photo-1556438064-2d7646166914?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
		description: "A collection showing my game design expertise",
		cards: ["project-4", "experience-1"],
	},
];
