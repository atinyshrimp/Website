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
