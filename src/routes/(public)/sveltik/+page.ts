import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () =>
	definePageMetaTags({
		title: 'Sveltik',
		description:
			'Powerful forms in Svelte, inspired by Formik. Manage your form’s state and validation.'
	});
