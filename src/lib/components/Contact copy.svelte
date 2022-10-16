<script>
  export let user;
  import Paypal from "./Paypal.svelte";
  import Capitular from "./Capitular.svelte";
</script>

<style lang="postcss">
  #contacto {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    //margin: clamp(0.5rem, calc(8px + 3vw), 1rem) 0;
  }

  ul {
    margin: 0;
  }

  li {
    display: flex;
    margin: clamp(0.5rem, calc(8px + 1vw), 1rem);
  }

  .contact-social {
    width: 100%;

    & li {
      justify-content: center;
    }

    & .button:hover {
      border: 0;
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black);
    background-color: var(--primaryLight);
    font-size: 95%;
    font-weight: 400;
    text-align: center;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--primaryLight);
      border: 1px solid var(--black);
      box-shadow: inset 0 0 calc(var(--unit) / 6) 0 var(--primary);
    }
  }

  .wrapper {
    display: flex;
    padding: 0.5rem 1rem;
  }

  .svg {
    width: 1rem;
    aspect-ration: 1/1;
    margin-right: 0.5rem;
  }

  .chola {
    display: flex;
  }
</style>

<article class="gray" id="contacto">
  <Capitular>Contacto</Capitular>
  <ul class="contact-info">
    <li class="awesome">
      <img class="svg" src="u.svg" alt="user" />
      <p>{user.nombre}</p>
    </li>
    <li>
      <a class="awesome" href="tel:{user.telefono}" title="Llámame">
        <img class="svg" src="p.svg" alt="phone" />
        <p>{user.telefono}</p>
      </a>
    </li>
    <li>
      <a class="awesome" href="mailto:{user.mail}" title="Mándame un mail">
        <img class="svg" src="m.svg" alt="mail" />
        <p>{user.mail}</p>
      </a>
    </li>
  </ul>
  <ul class="contact-social">
    <li>
      <a class="button awesome" href={user.facebook} target="_blank">
        <div class="wrapper">
          <img class="svg" src="f.svg" alt="facebook" />
          <p class="contact-text">facebook</p>
        </div>
      </a>
    </li>
    <li>
      <a class="button awesome" href={user.instagram} target="_blank">
        <div class="wrapper">
          <img class="svg" src="i.svg" alt="instagram" />
          <p class="contact-text">instagram</p>
        </div>
      </a>
    </li>
    <li>
      <a
        class="button awesome"
        href="https://wa.me/{user.telefono}?text=Hola%21%20Quiero%20saber%20m%C3%A1s%20sobre%20el%20Evento%20de%20Abril%20con%20Sergio%20Fernandez"
      >
        <div class="wrapper">
          <img class="svg" src="w.svg" alt="whatsapp" />
          <p class="contact-text">whatsapp</p>
        </div>
      </a>
    </li>
    <Paypal {user} />
  </ul>
</article>
