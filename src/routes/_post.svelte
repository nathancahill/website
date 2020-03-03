<script>
    export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article class="markdown max-w-2xl mx-auto">
    <slot></slot>
</article>

<style></style>
