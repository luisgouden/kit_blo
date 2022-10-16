<script>
  export let cover;
  import Imagen from "./Imagen.svelte";
  import Slider from "./Slider.svelte";
</script>

{#if cover.length == 1}
  <Imagen {cover} />
{:else}
  <Slider {cover} />
{/if}
