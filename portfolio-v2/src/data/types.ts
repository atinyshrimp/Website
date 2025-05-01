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

export enum Stats {
	CREATIVITY = "creativity",
	IMPACT = "impact",
	DIFFICULTY = "difficulty",
	MASTERY = "mastery",
	USAGE = "usageFrequency",
	COMBO = "comboPower",
	COLLABORATION = "collaboration",
	GROWTH = "growth",
}

export interface SkillStats {
	[Stats.MASTERY]: number; // 1-5,
	[Stats.USAGE]: number; // 1-5
	[Stats.COMBO]: number; // 1-5
}

export interface ProjectStats {
	[Stats.CREATIVITY]: number; // 1-5
	[Stats.IMPACT]: number; // 1-5
	[Stats.DIFFICULTY]: number; // 1-5
}

export interface ExperienceStats {
	[Stats.COLLABORATION]: number; // 1-5
	[Stats.IMPACT]: number; // 1-5
	[Stats.GROWTH]: number; // 1-5
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
		startDate: Date;
		endDate: Date | "Present";
		location: string;
		achievements: string[];
	};

	// Properties for stats
	stats: ProjectStats | SkillStats | ExperienceStats;
}

export interface Deck {
	id: string;
	name: string;
	cards: string[]; // IDs of cards in the deck
	description: string;
	coverImage?: string; // URL or path to the cover image
}
