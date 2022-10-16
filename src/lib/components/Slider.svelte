<script>
  export let cover;
</script>

<style lang="postcss">
  img {
    width: 100%;
  }
  .slider {
    display: none;

    @media (--large) {
      display: block;
      z-index: -1;
      width: 100%;
      min-height: 400px;
      margin: auto;
      overflow: hidden;

      & ul {
        display: flex;
        margin: 0;
        padding: 0;
        width: 400%;
        animation: b 20s infinite alternate linear;
      }

      & li {
        width: 100%;
        list-style: none;
      }

      & img {
        width: 100%;
      }
    }
  }
  @-webkit-keyframes b {
    0% {
      margin-left: 0;
    }

    20% {
      margin-left: 0;
    }

    25% {
      margin-left: -100%;
    }

    45% {
      margin-left: -100%;
    }

    50% {
      margin-left: -200%;
    }

    70% {
      margin-left: -200%;
    }

    75% {
      margin-left: -300%;
    }

    to {
      margin-left: -300%;
    }
  }

  @keyframes b {
    0% {
      margin-left: 0;
    }

    20% {
      margin-left: 0;
    }

    25% {
      margin-left: -100%;
    }

    45% {
      margin-left: -100%;
    }

    50% {
      margin-left: -200%;
    }

    70% {
      margin-left: -200%;
    }

    75% {
      margin-left: -300%;
    }

    to {
      margin-left: -300%;
    }
  }
</style>

<img class="mobile" src={cover[0]} alt="" />
<div class="slider">
  <ul>
    {#each cover as id, i}
      <li><img src={id} alt="" /></li>
    {/each}
  </ul>
</div>
