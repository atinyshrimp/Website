import { Card, CardType } from "./types";
import AutodeskImage from "../assets/dungeon_wireframe.png";

export const cards: Card[] = [
	// Project Cards
	{
		id: "card-portfolio",
		title: "Portfolio Card Game",
		description:
			"An interactive portfolio website inspired by card deck builder games",
		type: CardType.PROJECT,
		imageUrl:
			"https://images.unsplash.com/photo-1742743032749-187b17179e0f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		tags: [
			"Frontend",
			"React",
			"TypeScript",
			"Framer Motion",
			"Styled Components",
			"Web Development",
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
		stats: {
			creativity: 5,
			impact: 2,
			difficulty: 4,
		},
	},
	{
		id: "lego",
		title: "Lego Marketplace",
		description:
			"A handy little website to look for lego sets to resell and their potential rentability.",
		type: CardType.PROJECT,
		imageUrl:
			"https://github.com/atinyshrimp/lego/blob/master/client/v2/assets/images/bricked_up_logo.png?raw=true",
		tags: [
			"Frontend",
			"Backend",
			"Fullstack",
			"React",
			"Node.js",
			"MongoDB",
			"Web Development",
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
			duration: "4 months",
			technologies: ["React", "Node.js", "Express", "MongoDB", "Puppeteer"],
			outcomes: [
				"Secure payment processing",
				"User authentication",
				"Product management",
			],
		},
		stats: {
			creativity: 4,
			impact: 1,
			difficulty: 3,
		},
	},
	{
		id: "michelin-ml",
		title: "Gastronaut",
		description:
			"A platform recommending sustainable MICHELIN restaurants worldwide based on reviews.",
		type: CardType.PROJECT,
		imageUrl:
			"https://github.com/atinyshrimp/webscraping-ml-project/blob/d7c9e3ad8aeb6fee792deac46b4c0fbb2430780e/static/img/landing_page.png?raw=true",
		tags: [
			"Python",
			"HuggingFace",
			"Bootstrap",
			"Web Scraping",
			"Web Development",
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
			duration: "2 months",
			technologies: ["Python", "HuggingFace", "Bootstrap", "Puppeteer"],
			role: "Developer & Designer",
			outcomes: ["Web scraping", "Data analysis"],
		},
		stats: {
			creativity: 3,
			impact: 1,
			difficulty: 2,
		},
	},
	{
		id: "catsim",
		title: "CatSim",
		description:
			"A simple pet simulation game where you can take care of your virtual cat",
		type: CardType.PROJECT,
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
			duration: "2 weeks",
			technologies: ["C#", "Unity"],
			outcomes: [
				"Interactive gameplay mechanics",
				"User-friendly interface",
				"Pet care simulation",
			],
		},
		stats: {
			creativity: 4,
			impact: 1,
			difficulty: 2,
		},
	},
	{
		id: "selego-venulog",
		title: "Venulog",
		description:
			"A logistic platform that allows you to manage your deliveries for events",
		type: CardType.PROJECT,
		imageUrl: "https://placehold.co/600x400/2a3990/white/?text=Venulog",
		tags: [
			"Frontend",
			"Backend",
			"Fullstack",
			"Node.js",
			"Express",
			"Stripe",
			"Web Development",
			"React",
			"Application Programming Interface (API)",
		],
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
				"Realized during my internship at Selego",
				"Secure payment processing with Stripe",
				"User authentication with JWT",
				"Internationalization (i18n)",
			],
		},
		stats: {
			creativity: 2,
			impact: 4,
			difficulty: 3,
		},
	},
	{
		id: "selego-midoc",
		title: "MiDoc",
		description:
			"A web application that allows you to manage your medical prescriptions related to menopause.",
		type: CardType.PROJECT,
		imageUrl:
			"http://www.midoc.es/cdn/shop/files/Diseno_sin_titulo_-_2025-04-02T111651.217.png?v=1743585811",
		tags: [
			"Frontend",
			"Backend",
			"Node.js",
			"Express",
			"Stripe",
			"React",
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
				"Realized during my internship at Selego",
				"Calendly integration to allow users to book appointments",
				"Secure payment processing with Stripe, integrated with Calendly",
				"User authentication with JWT",
				"Webhooks integration with signature verification",
			],
		},
		stats: {
			creativity: 2,
			impact: 4,
			difficulty: 3,
		},
	},
	{
		id: "ux-sonar",
		title: "Captain Sonar",
		description:
			"A digital version of the board game Captain Sonar, a strategic team game.",
		type: CardType.PROJECT,
		imageUrl: "https://jeux.ca/wp-content/uploads/2019/06/Captain-Sonar.jpg",
		tags: [
			"Team Management",
			"Game Design",
			"Game Development",
			"Object-Oriented Programming (OOP)",
			"C#",
			"Unity",
		],
		links: [
			{
				label: "Github",
				url: "https://github.com/Bouchta003/Captain_Sonar",
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
		stats: {
			creativity: 5,
			impact: 1,
			difficulty: 4,
		},
	},

	// Skill Cards
	{
		id: "react",
		title: "React",
		description: "Building interactive UIs with React and related technologies",
		type: CardType.SKILL,
		imageUrl:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Freact-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png&f=1&nofb=1&ipt=1cc4c836f28d79730cf5b3fbc49f630732dc5afdb1245c99e8f5944340ea76a0",
		tags: ["Framework", "Frontend", "JavaScript", "User Interface (UI)"],
		skillDetails: {
			proficiency: 5,
			yearsOfExperience: 3,
			relatedProjects: [
				"card-portfolio",
				"selego-venulog",
				"selego-midoc",
				"selego-internship",
			],
		},
		stats: {
			mastery: 3,
			usageFrequency: 4,
			comboPower: 4,
		},
	},
	{
		id: "figma",
		title: "Figma",
		description:
			"Creating intuitive, accessible, and aesthetically pleasing user experiences",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlnbWF8ZW58MHx8MHx8fDA%3D",
		tags: ["Design", "User Experience", "User Interface", "Software"],
		skillDetails: {
			proficiency: 4,
			yearsOfExperience: 2,
			relatedProjects: ["lego"],
		},
		stats: {
			mastery: 3,
			usageFrequency: 3,
			comboPower: 4,
		},
	},
	{
		id: "japanese",
		title: "Japanese",
		description:
			"Speaking, reading, and writing Japanese: passed JLPT N3 in 2024",
		isFeatured: true,
		type: CardType.SKILL,
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1694475091098-27cea4555469?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBsYW5ndWFnZXxlbnwwfHwwfHx8MA%3D%3D",
		tags: ["Language", "Culture", "Communication"],
		skillDetails: {
			proficiency: 5,
			yearsOfExperience: 10,
			relatedProjects: ["emlv"],
		},
		stats: {
			mastery: 3,
			usageFrequency: 2,
			comboPower: 2,
		},
	},
	{
		id: "skill-4",
		title: "Korean",
		description: "Speaking, reading, and writing Korean",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1640090540877-a9ea2027abbd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWFuJTIwbGFuZ3VhZ2V8ZW58MHx8MHx8fDA%3D",
		tags: ["Language", "Culture", "Communication"],
		skillDetails: {
			proficiency: 5,
			yearsOfExperience: 10,
			relatedProjects: ["cau-exchange"],
		},
		stats: {
			mastery: 3,
			usageFrequency: 1,
			comboPower: 2,
		},
	},
	{
		id: "language-en",
		title: "English",
		description:
			"Speaking, reading, and writing English: TOEFL ITP 640/677 (CEFR C1)",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1560884482-62010016d7c3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGVuZ2xpc2glMjBsYW5ndWFnZXxlbnwwfHwwfHx8Mg%3D%3D",
		tags: ["Language", "Culture", "Communication"],
		skillDetails: {
			proficiency: 5,
			yearsOfExperience: 10,
			relatedProjects: ["cau-exchange", "esilv", "selego-internship"],
		},
		stats: {
			mastery: 3,
			usageFrequency: 1,
			comboPower: 2,
		},
	},
	{
		id: "unity",
		title: "Unity3D",
		description: "Building interactive games using Unity",
		type: CardType.SKILL,
		imageUrl:
			"https://pbs.twimg.com/profile_images/1481028548085583873/F1TrFReK_400x400.jpg",
		tags: [
			"Game Design",
			"Game Development",
			"C#",
			"Object-Oriented Programming",
			"Game Engine",
			"Software",
		],
		skillDetails: {
			proficiency: 3,
			yearsOfExperience: 2,
			relatedProjects: ["catsim", "ux-sonar", "esilv"],
		},
		stats: {
			mastery: 3,
			usageFrequency: 2,
			comboPower: 2,
		},
	},
	{
		id: "unreal-engine",
		title: "Unreal Engine",
		description: "Building interactive games using Unreal Engine",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1691405167344-c3bbc9710ad2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dW5yZWFsJTIwZW5naW5lfGVufDB8fDB8fHww",
		tags: [
			"Game Design",
			"Game Development",
			"Blueprint",
			"Object-Oriented Programming",
		],
		skillDetails: {
			proficiency: 3,
			yearsOfExperience: 1,
			relatedProjects: ["esilv"],
		},
		stats: {
			mastery: 2,
			usageFrequency: 1,
			comboPower: 2,
		},
	},
	{
		id: "valuation",
		title: "Valuation Techniques",
		description:
			"Experience with DCF, multiples, and precedent transaction methods.",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1651340927948-26826aaef4b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsdWF0aW9ufGVufDB8fDB8fHwy",
		tags: ["Valuation", "Investment", "Corporate Finance"],
		skillDetails: {
			proficiency: 3,
			yearsOfExperience: 1,
			relatedProjects: ["emlv"],
		},
		stats: { mastery: 3, usageFrequency: 2, comboPower: 4 },
	},
	{
		id: "strategy",
		title: "Corporate Strategy",
		description:
			"Analyzing and advising on high-level business decisions in alignment with financial goals.",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyYXRlZ3klMjBidXNpbmVzc3xlbnwwfHwwfHx8Mg%3D%3D",
		tags: ["Strategy", "Finance", "Management"],
		skillDetails: {
			proficiency: 3,
			yearsOfExperience: 1,
			relatedProjects: ["emlv"],
		},
		stats: { mastery: 2, usageFrequency: 1, comboPower: 3 },
	},
	{
		id: "accounting",
		title: "Accounting",
		description:
			"Understanding financial statements and accounting principles for financial analysis.",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNjb3VudGluZ3xlbnwwfHwwfHx8Mg%3D%3D",
		tags: ["Accounting", "Finance", "Reporting"],
		skillDetails: {
			proficiency: 3,
			yearsOfExperience: 3,
			relatedProjects: ["emlv"],
		},
		stats: { mastery: 3, usageFrequency: 1, comboPower: 2 },
	},
	{
		id: "excel",
		title: "Microsoft Excel",
		description:
			"Advanced use of Excel for financial modeling, analysis, and automation.",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhjZWx8ZW58MHx8MHx8fDI%3D",
		tags: ["Excel", "Finance", "Automation", "Modeling"],
		skillDetails: {
			proficiency: 5,
			yearsOfExperience: 5,
			relatedProjects: ["emlv", "sncf"],
		},
		stats: { mastery: 5, usageFrequency: 5, comboPower: 4 },
	},
	{
		id: "power-bi",
		title: "Power BI",
		description:
			"Creating interactive dashboards and reports for data visualization.",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDI%3D",
		tags: [
			"Power BI",
			"Data Visualization",
			"Business Intelligence",
			"Reporting",
			"Analytics",
			"Data Analysis",
		],
		skillDetails: {
			proficiency: 4,
			yearsOfExperience: 1,
			relatedProjects: ["data-analyst-stellantis", "esilv"],
		},
		stats: { mastery: 3, usageFrequency: 1, comboPower: 2 },
	},
	{
		id: "python",
		title: "Python",
		description:
			"Experienced in scripting, data analysis, and building ML pipelines.",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1649180556628-9ba704115795?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDI%3D",
		tags: [
			"Data Science",
			"Machine Learning (ML)",
			"Backend",
			"Scripting",
			"Programming",
		],
		skillDetails: {
			proficiency: 4,
			yearsOfExperience: 4,
			relatedProjects: ["michelin-ml", "esilv", "data-analyst-stellantis"],
		},
		stats: { mastery: 4, usageFrequency: 4, comboPower: 4 },
	},
	{
		id: "pandas",
		title: "Pandas",
		description: "Data manipulation and transformation in Python for analysis.",
		type: CardType.SKILL,
		imageUrl: "https://pandas.pydata.org/static/img/pandas_secondary_white.svg",
		tags: ["Data Science", "Python", "Analytics", "Data Analysis"],
		skillDetails: {
			proficiency: 4,
			yearsOfExperience: 3,
			relatedProjects: ["michelin-ml", "esilv"],
		},
		stats: { mastery: 3, usageFrequency: 3, comboPower: 3 },
	},
	{
		id: "ml",
		title: "Machine Learning (ML)",
		description:
			"Building predictive models using scikit-learn and other libraries.",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGludGVsbGlnZW5jZSUyMGFydGlmaWNpZWxsZXxlbnwwfHwwfHx8Mg%3D%3D",
		tags: [
			"Data Science",
			"Artificial Intelligence (AI)",
			"Predictive Modeling",
		],
		skillDetails: {
			proficiency: 3,
			yearsOfExperience: 2,
			relatedProjects: ["michelin-ml", "esilv"],
		},
		stats: { mastery: 3, usageFrequency: 3, comboPower: 4 },
	},
	{
		id: "sql",
		title: "SQL",
		description: "Querying databases and managing data pipelines.",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		tags: ["Data", "Backend", "Query Language"],
		skillDetails: {
			proficiency: 3,
			yearsOfExperience: 2,
			relatedProjects: ["esilv", "data-analyst-stellantis"],
		},
		stats: { mastery: 3, usageFrequency: 4, comboPower: 3 },
	},
	{
		id: "3ds-max",
		title: "Autodesk 3ds Max",
		description: "3D modeling and rendering for game development.",
		type: CardType.SKILL,
		imageUrl: AutodeskImage,
		tags: [
			"3D Modeling",
			"Game Development",
			"Rendering",
			"Game Design",
			"Level Design",
			"Software",
		],
		skillDetails: {
			proficiency: 2,
			yearsOfExperience: 1,
			relatedProjects: ["esilv"],
		},
		stats: { mastery: 2, usageFrequency: 1, comboPower: 2 },
	},
	{
		id: "web-dev",
		title: "Web Development",
		description:
			"Building responsive and interactive web applications using HTML, CSS, and JavaScript.",
		type: CardType.SKILL,
		imageUrl:
			"https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh0bWwlMjBjc3N8ZW58MHx8MHx8fDI%3D",
		tags: ["HTML5", "CSS", "JavaScript", "Frontend", "Fullstack"],
		skillDetails: {
			proficiency: 3,
			yearsOfExperience: 3,
			relatedProjects: [
				"esilv",
				"experience-2",
				"selego-venulog",
				"selego-midoc",
			],
		},
		stats: { mastery: 3, usageFrequency: 4, comboPower: 4 },
	},

	// Experience Cards
	{
		id: "selego-internship",
		title: "Full Stack Developer",
		description:
			"Built complex web applications using React, Node.js, and MongoDB",
		isFeatured: true,
		type: CardType.EXPERIENCE,
		imageUrl:
			"https://bank.cellar-c2.services.clever-cloud.com/file/assets/edb8d352c855fbd4e7e1496b10b059b0/lestud_logo%20%281%29.jpeg",
		tags: [
			"Frontend",
			"Backend",
			"Fullstack",
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
				"Developed and maintained web applications for various clients",
				"Collaborated with cross-functional teams to define project requirements",
				"Implemented RESTful APIs for data exchange between frontend and backend",
				"Communicated effectively with clients to gather feedback and improve products",
			],
		},
		stats: {
			collaboration: 5,
			impact: 4,
			growth: 3,
		},
	},
	{
		id: "esilv",
		title: "ESILV",
		description:
			"Master of Engineering (MEng) in Data Science and Artificial Intelligence",
		type: CardType.EXPERIENCE,
		imageUrl:
			"https://www.esilv.fr/ecole-ingenieur/logos/logo_esilv_png_couleur.png",
		tags: [
			"Engineering",
			"Formation",
			"Data Science",
			"Artificial Intelligence (AI)",
			"Machine Learning",
			"Deep Learning",
		],
		experienceDetails: {
			company: "Ecole Supérieure d'Ingénieurs Léonard de Vinci",
			position: "Master of Engineering",
			startDate: new Date("2020-09-01"),
			endDate: new Date("2025-08-31"),
			location: "Courbevoie, France",
			achievements: [
				"Specialized in Data Science and AI",
				"Followed a continuous Soft Skills formation, including agile methods like Scrum, teamwork and MBTI.",
				"Yearly projects in accordance with the modules seen throughout the year",
				"Enrolled in the UX Design track including courses such as GUI prototyping, Website Design, Game Design, etc.",
				"Completed a double degree with the Management school, EMLV",
			],
		},
		stats: {
			collaboration: 3,
			impact: 2,
			growth: 4,
		},
	},
	{
		id: "cau-exchange",
		title: "Exchange Program",
		description:
			"Academic exchange program at Chung-Ang University in South Korea.",
		isFeatured: true,
		type: CardType.EXPERIENCE,
		imageUrl:
			"https://cauexchange.wordpress.com/wp-content/uploads/2017/12/img_47821.jpg",
		tags: ["Engineering", "Formation", "Frontend"],
		experienceDetails: {
			company: "Chung-Ang University",
			position: "International Visiting Exchange Student",
			startDate: new Date("2022-09-01"),
			endDate: new Date("2022-12-21"),
			location: "Seoul, South Korea",
			achievements: [
				"Participated in an exchange program at Chung-Ang University, on their Seoul campus",
				"Studied in the College of Software, School of Computer Science & Engineering",
				"Completed courses in Object-Oriented Programming (C++), Web Programming, Numerical Analysis & Intermediate Korean Language",
			],
		},
		stats: {
			collaboration: 3,
			impact: 2,
			growth: 3,
		},
	},
	{
		id: "emlv",
		title: "EMLV",
		description:
			"Master of Science degree (MSc) in management, specializing in Corporate Finance",
		type: CardType.EXPERIENCE,
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
				"Completed projects in management, financial analysis and accounting",
				"Gained experience in financial modeling and valuation techniques",
			],
		},
		stats: {
			collaboration: 4,
			impact: 2,
			growth: 2,
		},
	},
	{
		id: "sncf",
		title: "Research Engineer Intern",
		description:
			"Worked on reviewing the technical standards of electrical conductors for SNCF Réseau",
		type: CardType.EXPERIENCE,
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
		stats: {
			collaboration: 2,
			impact: 3,
			growth: 1,
		},
	},
	{
		id: "data-analyst-stellantis",
		title: "Data Analyst Intern",
		description: "Worked on data analysis and visualization for Stellantis.",
		type: CardType.EXPERIENCE,
		imageUrl:
			"https://www.largus.fr/images/styles/max_1300x1300/public/images/01-logo-stellantis.jpg?itok=onTwqeH3",
		tags: ["Internship", "Data Science", "Python", "Power BI", "Data Analysis"],
		experienceDetails: {
			company: "Stellantis",
			position: "Data Analyst Junior Connected Vehicle",
			startDate: new Date("2024-04-01"),
			endDate: new Date("2024-08-09"),
			location: "Poissy, France",
			achievements: [
				"Developed an interactive map using Power BI to quickly locate vehicles with connectivity issues, facilitating the identification of areas requiring intervention.",
				"Created a system to classify and analyze delays in vehicle data communication, identifying causes by region and proposing tailored solutions.",
				"Implemented an automated process for daily updates of vehicle data, ensuring that information is always current and reliable for analysis.",
				"Automated data collection using Python and created interactive visual reports in Power BI, enabling real-time performance monitoring and a swift response to detected issues.",
			],
		},
		stats: {
			collaboration: 3,
			impact: 2,
			growth: 2,
		},
	},
];

export const stats = {
	creativity: {
		icon: "🎨",
		label: "Creativity",
		description: "Originality, expression, idea generation",
	},
	impact: {
		icon: "💥",
		label: "Impact",
		description: "Tangible outcome or influence",
	},
	difficulty: {
		icon: "🧠",
		label: "Difficulty",
		description: "Problem-solving or technical challenge",
	},
	mastery: {
		icon: "🧠",
		label: "Mastery",
		description: "Expertise level with the skill/tool",
	},
	usageFrequency: {
		icon: "🔁",
		label: "Usage Frequency",
		description: "How often this is part of my workflow",
	},
	comboPower: {
		icon: "🔗",
		label: "Combo Power",
		description: "How well this works with other tools",
	},
	collaboration: {
		icon: "🤝",
		label: "Collaboration",
		description: "Teamwork, communication, cross-discipline work",
	},
	growth: {
		icon: "📈",
		label: "Growth",
		description: "Personal/professional development gained",
	},
};

/** Retrieves all cards from the collection.
 *
 * @returns {Card[]} Sorted array of all cards
 */
export const getCards = (): Card[] => {
	return cards.sort((a, b) => a.title.localeCompare(b.title));
};

/** Retrieves all cards of a specific type from the collection.
 *
 * @param {CardType} type - The type of cards to retrieve
 * @returns {Card[]} Sorted array of cards of the specified type
 */
export const getFeaturedCards = (): Card[] => {
	return cards
		.filter((card) => card.isFeatured)
		.sort((a, b) => a.title.localeCompare(b.title));
};

/** Retrieves all cards of a specific type from the collection.
 *
 * @param {CardType} type - The type of cards to retrieve
 * @returns {Card[]} Sorted array of cards of the specified type
 */
export const getCardsByType = (type: CardType): Card[] => {
	return cards
		.filter((card) => card.type === type)
		.sort((a, b) => a.title.localeCompare(b.title));
};

/** Retrieves a card by its ID from the collection.
 *
 * @param {string} id - The ID of the card to retrieve
 * @returns {Card | undefined} The card with the specified ID, or undefined if not found
 */
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
		cards: [
			"react",
			"card-portfolio",
			"lego",
			"selego-internship",
			"esilv",
			"web-dev",
			"selego-venulog",
		],
	},
	{
		id: "ai-specialist",
		name: "Data Science & AI Specialist",
		coverImage:
			"https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D",
		description: "A collection showing my data science and AI expertise",
		cards: [
			"michelin-ml",
			"esilv",
			"ml",
			"python",
			"pandas",
			"sql",
			"data-analyst-stellantis",
			"power-bi",
			"selego-internship",
		],
	},
	{
		id: "uiux-specialist",
		name: "UI/UX Specialist",
		coverImage:
			"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXh8ZW58MHx8MHx8fDA%3D",
		description: "A collection showing my ui/ux & game design expertise",
		cards: [
			"react",
			"figma",
			"card-portfolio",
			"esilv",
			"unity",
			"unreal-engine",
			"web-dev",
			"3ds-max",
			"ux-sonar",
		],
	},
	{
		id: "management",
		name: "Management & Finance",
		coverImage:
			"https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da783c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
		description: "A collection showing my management & finance expertise",
		cards: ["emlv", "valuation", "strategy", "accounting", "excel"],
	},
	{
		id: "game-design",
		name: "Game Design & Development",
		coverImage:
			"https://images.unsplash.com/photo-1556438064-2d7646166914?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
		description: "A collection showing my game design expertise",
		cards: ["catsim", "esilv", "unity", "unreal-engine", "3ds-max", "ux-sonar"],
	},
];
