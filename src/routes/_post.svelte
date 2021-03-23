<script>
    export let title
    export let description
    export let path
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}" />
    <meta name="twitter:card" value="summary" />
    <meta property="og:title" content="{title}" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="{description}" />
    <meta property="og:url" content="https://nathancahill.com{path}" />
    <meta property="og:image" content="https://nathancahill.com{path}.png" />
</svelte:head>

<article class="markdown max-w-2xl mx-auto">
    <a href="/">Home</a>
    <slot />
</article>
