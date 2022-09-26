export const prerender = true;
 
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch  }) {
  const slug = params.slug;
  const post = await fetch(`users/${slug}.json`).then((r) => r.json());
  return await { 
    post 
  }
};
