<script>
    import { Sveltik, Form, Field, ErrorMessage } from 'sveltik'

    function onSubmit(values, { setStatus }) {
        return fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        .then(res => {
            if (!res.ok) {
                setStatus('Sorry, something went wrong.')

                setTimeout(() => {
                    setStatus(null)
                }, 2000)

                return Promise.reject()
            }

            return Promise.resolve()
        })
    }

    const initialValues = {
        email: '',
    }

    function validate(values) {
        const errors = {}

        if (!values.email) {
            errors.email = 'Please enter a valid email.'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Please enter a valid email.'
        }

        return errors
    }
</script>

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

    i {
        @apply font-serif;
    }

    p {
        @apply mb-4 text-gray-700 font-normal;
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

    svg {
        @apply fill-current;
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
        <i>Hello,</i> I'm Nathan Cahill &mdash; a full-stack developer and outdoor photographer. I live and work while travelling the world with my wife and two dogs. I'm an ardent champion of building towards a high&#8209;performance, low&#8209;bandwidth web.
    </p>
    <p>
        When I'm not working, you'll find me rock climbing, skiing or surfing with my pups.
    </p>

    <hr/>

    <h3>Let's chat</h3>
    <p>
        I'm keen on compiler-driven frontends (like <a href="https://svelte.dev/">Svelte</a> and <a href="https://www.gatsbyjs.org/">Gatsby</a>), data-driven backends (like <a href="http://postgrest.org/">Postgrest</a>, <a href="https://graphql.org/">GraphQL</a> and <a href="https://github.com/simonw/datasette/">Datasette</a>) and utility-first design (like <a href="https://tailwindcss.com/">Tailwind CSS</a>). If we have common interests or if you just want to say hi, shoot me a note: nathan@nathancahill.com.
    </p>

    <p>
        I also send out occasional emails about new projects and writings.
    </p>

    <div class="mb-64 sm:mb-32">
        <Sveltik
            {initialValues}
            {onSubmit}
            {validate}
            validateOnBlur={false}
            validateOnChange={false}
            let:isSubmitting
            let:isValidating
            let:errors
            let:setErrors
            let:submitSuccessCount
            let:status
        >
            <Form>
                <label
                    for="email"
                    class="block text-sm leading-5 font-medium text-gray-600"
                >
                    Join the mailing list
                </label>
                <div class="flex mt-1 mb-2 max-w-md">
                    <Field
                        id="email"
                        name="email"
                        class={`bg-white focus:outline-none focus:shadow-outline border rounded-l-md py-2 px-3 block w-full appearance-none leading-normal w-full min-w-0 sm:text-sm shadow-sm focus:mr-3px ${errors.email ? 'border-red-400 focus:border-red-400 text-red-800' : 'border-gray-300 focus:border-blue-400 text-gray-700'}`}
                        type="text"
                        placeholder="jane@example.com"
                        on:input={() => { setErrors({}) }}
                    />
                    <button
                        type="submit"
                        class={`bg-gray-100 border border-l-0 border-gray-300 font-medium py-2 px-4 rounded-r-md leading-normal sm:text-sm shadow-sm flex items-center focus:outline-none focus:shadow-outline focus:border-blue-400 focus:border-l ${isSubmitting || isValidating ? 'text-gray-500 cursor-auto' : submitSuccessCount ? 'text-green-700 cursor-auto' : 'text-gray-700 hover:bg-gray-200'}`}
                        disabled={submitSuccessCount || isSubmitting || isValidating}
                    >
                        {#if submitSuccessCount}
                            Subscribed <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="ml-1"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/></svg>
                        {:else}
                            Subscribe
                        {/if}
                    </button>
                </div>
                {#if status}
                    <span
                        class="block text-sm leading-5 font-normal text-gray-500"
                    >
                        {status}
                    </span>
                {:else if errors.email}
                    <ErrorMessage name="email" as="div" class="text-sm text-red-500" />
                {:else}
                    <span
                        class="block text-sm leading-5 font-normal text-gray-500"
                    >
                        Your email address will never be shared or sold.
                    </span>
                {/if}
            </Form>
        </Sveltik>
    </div>
</div>
