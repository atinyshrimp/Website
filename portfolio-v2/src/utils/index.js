const birthDate = new Date("2003-01-27T10:27:00Z").getTime(); // UTC+2 Europe/Paris

/**  Converts a date to a string in the format "Month Year" or returns "Present" if the date is in the future.
 *
 * @param {Date|string} date - The date to convert. Can be a Date object or the string "Present".
 * @returns {string|null} - The formatted date string or null if an error occurs.
 */
export const getStringFromDate = (date) => {
	try {
		if (date === null || date === undefined)
			throw new Error("Invalid date input");
		if (date !== "Present" && !(date instanceof Date))
			throw new Error("Date must be a 'Present' or a Date object");

		if (date === "Present" || date > new Date()) return "Present";

		const options = { year: "numeric", month: "long" };
		return new Date(date).toLocaleDateString("en-US", options);
	} catch (error) {
		console.error("Error in getStringFromDate:", error);
		return null;
	}
};

export const getCurrentXP = () => {
	const today = new Date().getTime();
	const lastBirthday = new Date(birthDate).setFullYear(
		new Date().getFullYear()
	);
	if (lastBirthday > new Date()) {
		lastBirthday.setFullYear(lastBirthday.getFullYear() - 1);
	}
	const progressInMilliseconds = today - lastBirthday;
	const progressInDays = Math.floor(
		progressInMilliseconds / (1000 * 60 * 60 * 24)
	);
	console.log("Days since last birthday:", progressInDays);
	return Math.floor(
		(progressInDays * getXPToNextLevel()) / getNumberOfDaysInYear()
	);
};

export const getCurrentLevel = () => {
	const today = new Date().getTime();
	console.log("Today:", today);
	console.log("Birth Date:", birthDate);
	const ageInMilliseconds = today - birthDate;
	const ageInYears = Math.floor(
		ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)
	);
	console.log("Age in years:", ageInYears);
	return Math.floor(ageInYears);
};

export const getXPToNextLevel = () => {
	let nextBirthday = new Date(birthDate).setFullYear(new Date().getFullYear());
	if (nextBirthday < new Date()) {
		nextBirthday = new Date(birthDate).setFullYear(
			new Date().getFullYear() + 1
		);
	}
	const nextBirthdayInMilliseconds = nextBirthday;
	const nextBirthdayInDays = Math.floor(
		(nextBirthdayInMilliseconds - birthDate) / (1000 * 60 * 60 * 24)
	);
	return nextBirthdayInDays;
};

const getNumberOfDaysInYear = () => {
	const year = new Date().getFullYear();
	// Check if the year is divisible by 4 and not divisible by 100, or divisible by 400
	const isLeap = (year) =>
		year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
	return isLeap(year) ? 366 : 365;
};
