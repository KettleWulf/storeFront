export const getItemImageUrl = (image) => {
	const url = image?.formats?.medium?.url ?? image?.url;

	return url ? `http://localhost:1337${url}` : "";
};

export const getPlainText = (value) => {
	if (typeof value === "string") return value;
	if (!Array.isArray(value)) return "";

	return value
		.flatMap((block) => block?.children ?? [])
		.map((child) => child?.text)
		.filter(Boolean)
		.join(" ");
};
