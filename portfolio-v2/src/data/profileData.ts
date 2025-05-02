import { Achievement } from "./types";

export const achievements: Achievement[] = [
	{
		slug: "first-win",
		icon: "🏆",
		title: "First Win",
		description: "Completed first project",
		unlocked: true,
	},
	{
		slug: "first-app",
		icon: "🚀",
		title: "Launched App",
		description: "Released my first app to the public",
		unlocked: true,
	},
	{
		slug: "linguist",
		icon: "🌐",
		title: "Certified Linguist",
		description: "Obtained certification for multiple languages",
		unlocked: true,
	},
	{
		slug: "arms-of-steel",
		icon: "💪🏾",
		title: "Arms of Steel",
		description: "Made bread from scratch",
		unlocked: true,
	},
	{
		slug: "buzzing-eardrums",
		icon: "🎶",
		title: "Buzzing Eardrums",
		description: "Went to 5+ concerts in a year",
		unlocked: true,
	},
	{
		slug: "networking-pro",
		icon: "🤝",
		title: "Networking Pro",
		description: "Connected with industry leaders and peers",
		unlocked: false,
	},
];
