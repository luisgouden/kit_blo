<script>
  /** @type {import('./$types').PageData} */
  export let data;
  export let user = data.post;

  let showModal = false;
</script>

<style lang="postcss">
  article {
    padding: calc(var(--unit) / 4) 0;

    &:first-of-type {
      padding-top: 0;
      margin-top: 0;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--whiteDark);
    padding: 0.5rem 1rem;
    background: var(--primary);
    font-size: 110%;
    border: 0;
    margin: 0;
    border-radius: 0.25rem;
    transition: background 0.1s ease-in;
  }

  .wraper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: calc(var(--unit) / 4);
    width: 100%;
    & div {
      display: flex;
      flex-direction: column;
      width: 50%;
    }

    & div:first-of-type {
      align-items: center;

      & img {
        max-width: 50%;
      }
    }

    & div:last-of-type {
      justify-items: center;
      align-items: flex-start;
    }
  }

  .funnel {
    display: flex;
    justify-content: center;
    flex-direction: column;

    & span {
      display: flex;
      justify-content: center;
      align-items: center;

      & i {
        font-size: 500%;
        color: var(--primary);
      }
    }

    @media (--medium) {
      width: 50%;
      padding: 0 1rem;
    }
  }

  .wrap-progress-bar {
    overflow: hidden;
    margin: 1rem 0;
    background-color: var(--whiteDark);
    box-shadow: inset 0 1px 2px hsla(221, 10%, 10%, 0.1);

    & .progress-bar {
      height: calc(var(--unit) / 4);
      background-color: var(--primary);
    }
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
    <div class="wraper">
      <div>
        <img alt="" src="info1.svg" />
      </div>

      <div>
        <h4>esta oportunidad es perfecta para ti</h4>
        <p>hola</p>
        <p>que tal??</p>
        <p>soy el chico de las poesias</p>
      </div>
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

  <article class="center">
    <h3>Como funciona</h3>
    <h4>La sencilla forma de recibir tu llamada gratuita</h4>
    <div class="wraper">
      <div class="funnel">
        <span>
          <i class="fas fa-list-ol" />
          <p>
            After you have clicked on the button a short form will open. Simply
            enter your details and submit your request. (It only takes a maximum
            of 30 seconds)
          </p>
        </span>
      </div>
      <div class="funnel">
        <span>
          <i class="fas fa-list-ol" />
          <p>
            After submitting your request, Markus or one of his best business
            partners will contact you and show you how to realize your dream
            life.
          </p>
        </span>
      </div>
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
