<script>
  export let user;
  import Contact from "./components/Contact.svelte";
  import Modal from "./components/Modal.svelte";

  let showModal = false;
</script>

<style lang="postcss">
  .gray {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
  article {
    align-items: center;
  }

  img {
    width: 10rem;
  }

  .wrap-progress-bar {
    width: 100%;
    overflow: hidden;
    background-color: var(--whiteDark);
    box-shadow: inset 0 1px 2px hsla(221, 10%, 10%, 0.1);

    & .progress-bar {
      height: calc(var(--unit) / 4);
      background-color: var(--primary);
    }
  }

  .gray-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .progress-bar {
    width: 80%;
    color: var(--white);
    text-align: center;
    line-height: calc(var(--unit) / 4);
    box-shadow: inset 0 -1px 0 hsla(221, 10%, 10%, 0.15);
    transition: width 0.6s ease;
    background-image: linear-gradient(
      45deg,
      hsla(221, 10%, 100%, 0.15) 25%,
      transparent 0,
      transparent 50%,
      hsla(221, 10%, 100%, 0.15) 0,
      hsla(221, 10%, 100%, 0.15) 75%,
      transparent 0,
      transparent
    );
    background-size: calc(var(--unit) / 3) calc(var(--unit) / 3);
    animation: a 2s linear infinite reverse;
  }

  @keyframes a {
    0% {
      background-position: calc(var(--unit) / 3) 0;
    }

    to {
      background-position: 0 0;
    }
  }
</style>

<header>
  <div class="wrap-progress-bar">
    <div class="progress-bar" role="progressbar">Ya queda poco</div>
  </div>
  <h1>
    La mejor forma de alcanzar tu vida soñada de la forma más rapida posible
  </h1>
</header>

<section>
  <article>
    <iframe
      title="hola"
      src="https://player.vimeo.com/video/389285524?portrait=0"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen="allowfullscreen"
    />

    <button on:click={() => (showModal = true)}>Show Modal</button>

    {#if showModal}
      <Modal
        on:cancel={() => (showModal = false)}
        on:close={() => (showModal = false)}
      >
        <Contact {user} />
      </Modal>
    {/if}
  </article>
  <article class="gray">
    <div class="gray-wrapper">
      <div>
        <img alt="" src="info1.svg" />
      </div>
      <h4>esta oportunidad es perfecta para ti</h4>
      <div>
        <p>
          After you have clicked on the button a short form will open. Simply
          enter your details and submit your request. (It only takes a maximum
          of 30 seconds)
        </p>
        <p>
          After you have clicked on the button a short form will open. Simply
          enter your details and submit your request. (It only takes a maximum
          of 30 seconds)
        </p>
      </div>
      <a class="button" on:click={() => (showModal = true)}>
        <p>comprar entrada</p>
      </a>

      {#if showModal}
        <Modal
          on:cancel={() => (showModal = false)}
          on:close={() => (showModal = false)}
        >
          <Contact {user} />
        </Modal>
      {/if}
    </div>
  </article>

  <article>
    <h3>Como funciona</h3>
    <h4>La sencilla forma de recibir tu llamada gratuita</h4>

    <div>
      <p>
        After you have clicked on the button a short form will open. Simply
        enter your details and submit your request. (It only takes a maximum of
        30 seconds)
      </p>
    </div>

    <div>
      <p>
        After submitting your request, Markus or one of his best business
        partners will contact you and show you how to realize your dream life.
      </p>
    </div>

    <button on:click={() => (showModal = true)}>Show Modal</button>

    {#if showModal}
      <Modal
        on:cancel={() => (showModal = false)}
        on:close={() => (showModal = false)}
      >
        <Contact {user} />
      </Modal>
    {/if}
  </article>
</section>
