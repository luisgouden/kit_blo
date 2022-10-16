<script>
  export let user;
</script>

<style lang="postcss">
</style>

{#if user.id}
  <a
    class="button "
    href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id={user.id}"
  >
    <p>comprar entrada</p>
  </a>
{:else}
  <a class="button" href={user.paypal}>
    <p>comprar entrada</p>
  </a>
{/if}
