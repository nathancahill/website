import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

type HastNode = { tagName?: string; properties?: { rel?: string[] }; children?: HastNode[] };

/**
 * mdsvex marks every external link `rel="nofollow"`, with no option to turn
 * it off. Links in posts are meant to be followed, so this takes it back out.
 */
function followLinks() {
	const visit = (node: HastNode) => {
		const rel = node.tagName === 'a' ? node.properties?.rel : undefined;
		if (rel) {
			const kept = rel.filter((value) => value !== 'nofollow');
			if (kept.length) node.properties!.rel = kept;
			else delete node.properties!.rel;
		}
		node.children?.forEach(visit);
	};
	return visit;
}

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			// No options, on purpose: on Vercel that is adapter-static's zero-config
			// mode, which writes the routes that serve `/duo-cli` from `duo-cli.html`
			// and caches `_app/immutable` for a year. Elsewhere it writes `build/`.
			adapter: adapter(),
			// The origin prerendered pages see as `url.origin`. `vela deploy` sets
			// VELA_ORIGIN, and the value is baked in at build time. It is left unset
			// for a deploy that serves more than one host.
			...(process.env.VELA_ORIGIN ? { paths: { origin: process.env.VELA_ORIGIN } } : {}),
			extensions: ['.svelte', '.svx'],
			preprocess: [mdsvex({ rehypePlugins: [followLinks] })]
		})
	]
});
