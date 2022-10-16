<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<style lang="postcss">
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: hsla(221, 10%, 10%, 0.5);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    //left: 10%;
    width: 80%;
    max-height: 80vh;
    max-width: 1000px;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 0 var(--unit) hsla(221, 10%, 10%, 0.75);
  }

  header,
  footer {
    display: flex;
    justify-content: flex-end;
    //margin: 1rem 0;
    flex-direction: row;
  }

  button {
    border: none;
    background: none;
    margin: none;
    padding: none;
    font-size: 1.5rem;
  }
</style>

<div class="backdrop" on:click={() => dispatch("cancel")} />
<div class="modal">
  <header>
    <button on:click={() => dispatch("close")}>&times;</button>
  </header>
  <div class="content">
    <slot />
  </div>
  <footer>
    <slot name="footer">
      <button on:click={() => dispatch("close")}> Close </button>
    </slot>
  </footer>
</div>
