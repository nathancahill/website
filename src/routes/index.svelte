<style>
    h1, h3 {
        @apply font-bold mb-1;
    }

    h1 {
        @apply text-3xl;
    }

    h3 {
        @apply text-2xl;
    }

    p {
        @apply mb-4;
    }

    hr {
        @apply my-10;
    }

    a {
        @apply text-blue-500;
    }

    a:hover {
        @apply text-blue-600;
    }
</style>

<svelte:head>
    <title>Nathan Cahill</title>
    <meta name="description" content="Web aesthete and open source aficionado.">
</svelte:head>

<div class="container max-w-4xl mx-auto mt-16 px-4 md:px-8">
    <div class="mb-10 clearfix">
        <img src="/nathancahill.jpg" class="w-40 h-40 float-right" alt="Profile picture" />
        <h1>Nathan Cahill</h1>
        <p>
            Web aesthete and open source aficionado.
        </p>
    </div>

    <p>
        <i>Hello</i>, I'm Nathan Cahill; a web engineer and outdoor photographer. I live and work while travelling the world with my wife and two dogs. I'm an ardent champion of building towards a high&#8209;performance, low&#8209;bandwidth web.
    </p>
    <p>
        When I'm not working, you'll find me rock climbing, skiing or surfing with my pups.
    </p>

    <hr/>

    <h3>Let's chat</h3>
    <p>
        I'm keen on compiler-driven frontends (like <a href="https://svelte.dev/">Svelte</a>), data-driven backends (like <a href="http://postgrest.org/">Postgrest</a> and <a href="https://github.com/simonw/datasette/">datasette</a>) and utility-first design (like <a href="https://tailwindcss.com/">Tailwind CSS</a>). If we have common interests or if you just want to say hi, shoot me a note: nathan@nathancahill.com.
    </p>
</div>
