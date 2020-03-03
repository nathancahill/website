<script>
    import { onMount } from 'svelte'
    import { slide } from 'svelte/transition'
    import Subscribe from '../components/Subscribe.svelte'

    let showing = false

    function hide() {
        showing = false
    }

    onMount(() => {
        setTimeout(() => {
            showing = true
        }, 1000)
    })
</script>

<svelte:head>
    <title>Nathan Cahill</title>
    <meta name="description" content="Web aesthete and open source aficionado.">
</svelte:head>

<div class="markdown mb-10 clearfix">
    <img src="/nathancahill.jpg" class="w-40 h-40 float-right" alt="Profile picture" />
    <h1>Nathan Cahill</h1>
    <p>
        Web aesthete and open source aficionado.
    </p>
</div>

<div class="markdown">
    <p>
        <i>Hello,</i> I'm Nathan Cahill &mdash; a full-stack developer and outdoor photographer. I live and work while travelling the world with my wife and two dogs. I'm an ardent champion of building towards a high&#8209;performance, low&#8209;bandwidth web.
    </p>
    <p>
        When I'm not working, you'll find me rock climbing, skiing or surfing with my pups.
    </p>

    <hr/>

    <h2>Let's chat</h2>
    <p>
        I'm keen on compiler-driven frontends (like <a href="https://svelte.dev/">Svelte</a> and <a href="https://www.gatsbyjs.org/">Gatsby</a>), data-driven backends (like <a href="http://postgrest.org/">Postgrest</a>, <a href="https://graphql.org/">GraphQL</a> and <a href="https://github.com/simonw/datasette/">Datasette</a>) and utility-first design (like <a href="https://tailwindcss.com/">Tailwind CSS</a>). If we have common interests or if you just want to say hi, shoot me a note: nathan@nathancahill.com.
    </p>

    <p>
        I also send out occasional emails about new projects and writings.
    </p>
</div>

{#if showing}
<div class="fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5">
  <div class="max-w-4xl mx-auto px-4 md:px-8" transition:slide>
    <div class="p-2 rounded-lg bg-gray-900 shadow-lg sm:p-3">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="ml-0 sm:ml-3 font-medium text-white truncate">
            <span class="text-gray-400">
              <strong class="text-white font-semibold mr-1">New release: Sveltik</strong>
              <span class="block sm:inline md:hidden xs:hidden">Powerful forms in Svelte.</span>
              <span class="hidden sm:hidden md:inline xs:block">Powerful forms in Svelte, inspired by Formik.</span>
            </span>
          </span>
        </div>
        <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <div class="rounded-md shadow-sm">
            <a rel=prefetch href="/sveltik/introducing" class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-800 focus:outline-none focus:underline">
              Get it now
            </a>
          </div>
        </div>

        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2 mr-1 sm:mr-0">
          <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800" on:click={hide}>
            <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
{/if}

<div class="mb-64 sm:mb-32">
    <Subscribe />
</div>

<style>
    svg {
        @apply fill-current;
    }
</style>
