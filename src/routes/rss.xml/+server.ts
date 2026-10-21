import { getBlogPosts } from '#lib/content.server.js';
import { site } from '#lib/site.js';

export const prerender = true;

function escapeXml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET = async () => {
	const posts = getBlogPosts();
	// `site.url`, not `url.origin`: this feed is prerendered, where the origin
	// is SvelteKit's placeholder unless the build was told otherwise. Every
	// `<link>` and `<guid>` below is permanent once published.
	const siteURL = site.url.replace(/\/$/, '');
	const feedURL = `${siteURL}/rss.xml`;
	const lastBuild = (posts[0]?.createdDate ?? new Date()).toUTCString();

	const items = posts
		.map((post) => {
			const link = `${siteURL}/${post.slug}`;

			return [
				'  <item>',
				`    <title>${escapeXml(post.title)}</title>`,
				`    <link>${escapeXml(link)}</link>`,
				`    <guid isPermaLink="true">${escapeXml(link)}</guid>`,
				`    <description>${escapeXml(post.description)}</description>`,
				`    <pubDate>${post.createdDate.toUTCString()}</pubDate>`,
				'  </item>'
			].join('\n');
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(site.name)}</title>
  <link>${escapeXml(siteURL)}</link>
  <atom:link href="${escapeXml(feedURL)}" rel="self" type="application/rss+xml" />
  <description>${escapeXml(`Latest posts from ${site.name}.`)}</description>
  <language>en</language>
  <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
</channel>
</rss>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
