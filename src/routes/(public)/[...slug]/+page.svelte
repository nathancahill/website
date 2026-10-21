<script lang="ts">
	import { formatDate, isoDate } from '#lib/utils/date.js';

	let { data } = $props();
</script>

<article class="markdown mx-auto mb-32 max-w-2xl">
	<a href="/">Home</a>

	<h1>{data.blogPost.title}</h1>

	<h5>
		<time datetime={isoDate(data.blogPost.createdDate)}
			>{formatDate(data.blogPost.createdDate)}</time
		>
	</h5>

	<br />

	<data.component />
</article>
