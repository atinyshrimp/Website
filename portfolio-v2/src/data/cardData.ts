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
        // imageUrl: "/images/projects/card-portfolio.jpg",
        tags: ["React", "TypeScript", "Framer Motion", "Styled Components"],
        links: [
            {
                label: "GitHub",
                url: "https://github.com/username/portfolio-v2",
            },
            {
                label: "Live Demo",
                url: "https://joycelapilus.com/portfolio-v2",
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
        imageUrl: "/images/projects/ecommerce.jpg",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        links: [
            { label: "GitHub", url: "https://github.com/username/ecommerce" },
        ],
        projectDetails: {
            duration: "3 months",
            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Stripe API",
            ],
            role: "Full Stack Developer",
            outcomes: [
                "Secure payment processing",
                "User authentication",
                "Product management",
            ],
        },
    },

    // Skill Cards
    {
        id: "skill-1",
        title: "React",
        description:
            "Building interactive UIs with React and related technologies",
        type: CardType.SKILL,
        rarity: CardRarity.EPIC,
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Freact-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png&f=1&nofb=1&ipt=1cc4c836f28d79730cf5b3fbc49f630732dc5afdb1245c99e8f5944340ea76a0",
        tags: ["Frontend", "JavaScript", "UI"],
        skillDetails: {
            proficiency: 5,
            yearsOfExperience: 3,
            relatedProjects: ["project-1", "project-2"],
        },
    },
    {
        id: "skill-2",
        title: "UI/UX Design",
        isFeatured: true,
        description:
            "Creating intuitive, accessible, and aesthetically pleasing user experiences",
        type: CardType.SKILL,
        rarity: CardRarity.RARE,
        imageUrl: "/images/skills/uiux.jpg",
        tags: ["Design", "User Experience", "Figma"],
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
        imageUrl: "/images/skills/japanese.jpg",
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
        tags: ["Leadership", "Frontend", "Team Management", "Internship"],
        experienceDetails: {
            company: "Selego",
            position: "Full Stack Developer & Data Scientist",
            startDate: "February 2025",
            endDate: "Present",
            location: "Paris, France",
            achievements: [
                "Increased team productivity by 30% through process improvements",
                "Successfully delivered 5 major product releases",
                "Mentored junior developers and conducted code reviews",
            ],
        },
    },
    {
        id: "experience-2",
        title: "Web Developer",
        description:
            "Developed responsive websites and web applications for clients",
        type: CardType.EXPERIENCE,
        rarity: CardRarity.RARE,
        imageUrl: "/images/experience/web-dev.jpg",
        tags: ["Web Development", "Client Projects"],
        experienceDetails: {
            company: "Creative Web Agency",
            position: "Web Developer",
            startDate: "June 2018",
            endDate: "December 2019",
            location: "Los Angeles, CA",
            achievements: [
                "Built and maintained websites for 15+ clients",
                "Implemented responsive designs and optimized for performance",
                "Collaborated with designers to translate concepts into code",
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
        name: "Frontend Specialist",
        description: "A collection showing my frontend development expertise",
        cards: ["skill-1", "project-1", "experience-1"],
    },
    {
        id: "full-portfolio",
        name: "Complete Portfolio",
        description:
            "The complete overview of my skills, projects and experience",
        cards: cards.map((card) => card.id),
    },
];
