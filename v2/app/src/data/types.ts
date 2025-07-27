export enum CardType {
  PROJECT = "project",
  SKILL = "skill",
  EXPERIENCE = "experience",
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
  _id: string;
  title: string;
  description: string;
  type: CardType;
  imageUrl?: string;
  tags: string[];
  links?: { label: string; url: string }[];
  isFeatured?: boolean;
  // Properties specific to projects
  projectDetails?: {
    duration: string;
    technologies: string[];
    role?: string;
    outcomes: (string | { label: string; subpoints: string[] })[];
  };

  // Properties specific to skills
  skillDetails?: {
    proficiency: number; // 1-5
    yearsOfExperience: number;
    relatedProjects: Card[]; // IDs of related project cards
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
  _id: string;
  title: string;
  cards: Card[];
  description: string;
  imageUrl?: string; // URL or path to the cover image
}

export interface Activity {
  description: string;
  timestamp: Date;
}

export interface Achievement {
  slug: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
}
