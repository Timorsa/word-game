const size = {
	small: '576px',
	medium: '768px',
	large: '992px',
	xlarge: '1200px',
};

export const above = (Object.keys(size) as Array<keyof typeof size>).reduce(
	(acc, key) => {
		acc[key] = (style: String) =>
			`@media (min-width: ${size[key]}) { ${style} }`;
		return acc;
	},
	{} as { [index: string]: Function },
);

export const below = (Object.keys(size) as Array<keyof typeof size>).reduce(
	(acc, key) => {
		acc[key] = (style: String) =>
			`@media (max-width: ${size[key]}) { ${style} }`;
		return acc;
	},
	{} as { [index: string]: Function },
);
