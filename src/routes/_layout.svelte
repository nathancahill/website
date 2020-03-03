<style global lang="less">
    /*! purgecss start ignore */
	@tailwind base;
    /*! purgecss end ignore */
	@tailwind components;
	@tailwind utilities;

    /*! purgecss start ignore */
    @import "src/less/markdown";
    /*! purgecss end ignore */
</style>

<main class="container max-w-4xl mx-auto mt-16 px-4 md:px-8">
	<slot></slot>
</main>
