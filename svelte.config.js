import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {

  preprocess: [
    sveltePreprocess({
      postcss: true
    }),
  ],

	kit: {
		adapter: adapter({
      edge: false,
      split: true
    })
	}
};

export default config;
