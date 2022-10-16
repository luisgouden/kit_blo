<script>
  /** @type {import('./$types').PageData} */

  import Castellon from "$lib/Castellon.svelte";
  import Elite from "$lib/Elite.svelte";
  import Funnel from "$lib/Funnel.svelte";

  export let data;
  export let post = data.post;
</script>

<svelte:head>
  <title>{post.evento}</title>
</svelte:head>

{#if post.evento === "elite"}
  <Elite user={post} />
{:else if post.evento === "2020"}
  <Castellon user={post} />
{:else if post.evento === "funnel"}
  <Funnel user={post} />
{/if}
