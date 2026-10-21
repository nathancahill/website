// Frontmatter dates parse as midnight UTC, so they are formatted in UTC too:
// in the build machine's zone, a US one would print the day before.
const formatter = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	timeZone: 'UTC'
});

export function formatDate(date: Date) {
	return formatter.format(date);
}

export function isoDate(date: Date) {
	return date.toISOString().slice(0, 10);
}
