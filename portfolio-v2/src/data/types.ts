export enum CardType {
	PROJECT = "project",
	SKILL = "skill",
	EXPERIENCE = "experience",
}

export enum CardRarity {
	COMMON = "common",
	RARE = "rare",
	EPIC = "epic",
	LEGENDARY = "legendary",
}

export interface Card {
	id: string;
	title: string;
	description: string;
	type: CardType;
	rarity: CardRarity;
	imageUrl?: string;
	tags: string[];
	links?: { label: string; url: string }[];
	isFeatured?: boolean;
	// Properties specific to projects
	projectDetails?: {
		duration: string;
		technologies: string[];
		role?: string;
		outcomes: string[];
	};

	// Properties specific to skills
	skillDetails?: {
		proficiency: number; // 1-5
		yearsOfExperience: number;
		relatedProjects: string[]; // IDs of related project cards
	};

	// Properties specific to experiences
	experienceDetails?: {
		company: string;
		position: string;
		startDate: string;
		endDate: string | "Present";
		location: string;
		achievements: string[];
	};
}

export interface Deck {
	id: string;
	name: string;
	cards: string[]; // IDs of cards in the deck
	description: string;
	coverImage?: string; // URL or path to the cover image
}
