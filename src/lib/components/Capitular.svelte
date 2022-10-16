<script>
</script>

<style lang="postcss">
  h3 {
    text-align: center;
  }

  hr {
    width: var(--unit);
    color: var(--primary);
    margin: 0 clamp(0.5rem, calc(8px + 1vw), 1rem);
  }

  .caps {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    max-width: 100%;
    flex-grow: 1;
  }
</style>

<div class="caps">
  <hr />
  <h3>
    <slot />
  </h3>
  <hr />
</div>
