<script>
  import Brand from "./Brand.svelte";
  import Li from "./Li.svelte";
  export let config;
  export let segment;
</script>

<style lang="postcss">
  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    width: 100%;
    position: sticky;
    top: 0;

    @media (--medium) {
      width: 25%;
    }

    @media (--large) {
      top: calc(var(--unit) / 4);
    }
  }

  nav {
    display: none;
    font-weight: 400;
    width: 100%;
    padding-left: 0.25rem;

    @media (--medium) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: min-content;
    }

    @media (--large) {
      width: 14rem;
      padding-left: 0.25rem;
    }
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    font-weight: 400;

    @media (--medium) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

<aside>
  <Brand />
  <nav>
    <ul>
      {#each config.Links as link}
        <Li {segment} link={link.link} text={link.text} />
      {/each}
    </ul>
  </nav>
</aside>
