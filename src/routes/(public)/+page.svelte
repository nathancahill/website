<script lang="ts">
	import { formatDate, isoDate } from '#lib/utils/date.js';

	let { data } = $props();
</script>

<div class="markdown mb-10 flow-root">
	<img src="/nathancahill.jpg" class="float-right size-40" alt="Profile" />
	<h1>Nathan Cahill</h1>
	<p>Web aesthete and open source aficionado.</p>
</div>

<div class="markdown">
	<p>
		<em>Hello,</em> I'm Nathan Cahill &mdash; a full-stack developer and outdoor photographer. I live
		and work while travelling the world with my wife and two dogs. I'm an ardent champion of building
		towards a high&#8209;performance, low&#8209;bandwidth web.
	</p>

	<p>When I'm not working, you'll find me rock climbing, skiing or surfing with my pups.</p>
</div>

<h2 class="mt-12 text-2xl font-bold">Recent posts</h2>

<hr class="mb-4" />

<ul class="mb-8 space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 md:space-y-0">
	{#each data.blogPosts as post (post.slug)}
		<li>
			<time datetime={isoDate(post.createdDate)} class="mb-1 text-sm text-gray-600">
				{formatDate(post.createdDate)}
			</time>
			<h5 class="text-lg leading-6 font-medium text-gray-900">
				<a href="/{post.slug}">{post.title}</a>
			</h5>
			<div class="markdown">
				<p>{post.description}</p>
			</div>
			<a href="/{post.slug}" class="font-medium text-blue-500">Read full post</a>
		</li>
	{/each}
</ul>

<div class="markdown">
	<h2>Let's chat</h2>
</div>

<hr class="mb-4" />

<div class="markdown mb-32">
	<p>
		I'm keen on compiler-driven frontends (like <a href="https://svelte.dev/">Svelte</a>),
		data-driven backends (like <a href="http://postgrest.org/">Postgrest</a>,
		<a href="https://graphql.org/">GraphQL</a> and
		<a href="https://github.com/simonw/datasette/">Datasette</a>), utility-first design (like
		<a href="https://tailwindcss.com/">Tailwind CSS</a>) and serverless functions (like
		<a href="https://developers.cloudflare.com/workers/">Cloudflare Workers</a> and
		<a href="https://vercel.com/">Vercel</a>). If we have common interests or if you just want to
		say hi, shoot me a note: nathan@nathancahill.com.
	</p>
</div>
