import { Achievement, Activity } from "./types";

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

const recentActivities: Activity[] = [
	{
		description: "Saw the king TAEMIN live for the first time",
		timestamp: new Date("2025-03-12:20:30+0200"),
	},
	{
		description: 'Unlocked "Certified Linguist" achievement',
		timestamp: new Date("2025-01-31T10:00:00+0200"),
	},
	{
		description:
			'Started end-of-study internship at "Selego" as a full-stack developer',
		timestamp: new Date("2025-02-10T09:00+0200"),
	},
	{
		description: "Went to ATEEZ last tour in Paris in VIP1",
		timestamp: new Date("2025-02-22T17:30+0200"),
	},
	{
		description: "Started my portfolio's visual update",
		timestamp: new Date("2025-04-19T02:59+0200"),
	},
];

/** Retrieves the most recent activities, sorted by timestamp. If a limit is provided, only the most recent activities up to that limit are returned.
 *
 * @param {number} limit - The maximum number of recent activities to retrieve. If 0, all recent activities are returned.
 * @returns {Activity[]} - An array of recent activities, sorted by timestamp in descending order.
 */
export const getRecentActivities = (limit: number = 0): Activity[] => {
	if (limit > 0) {
		return recentActivities
			.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
			.slice(0, 5);
	} else {
		return recentActivities.sort(
			(a, b) => b.timestamp.getTime() - a.timestamp.getTime()
		);
	}
};
