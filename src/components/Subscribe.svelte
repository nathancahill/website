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
                class={`bg-white rounded-r-none focus:outline-none focus:shadow-outline border rounded-l-md py-2 px-3 block w-full appearance-none leading-normal w-full min-w-0 sm:text-sm shadow-sm focus:mr-3px ${errors.email ? 'border-red-400 focus:border-red-400 text-red-800' : 'border-gray-300 focus:border-blue-400 text-gray-700'}`}
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