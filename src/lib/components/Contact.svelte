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
  }

  li {
    display: flex;
    padding: 0.25rem 0;
  }
  li a {
    display: flex;
  }

  ul {
    margin: 0;
  }

  .contact-social {
    display: flex;
    flex-wrap: wrap;

    & li {
      justify-content: center;
      width: 200px;
      flex-grow: 1;
    }
    & a {
      flex-grow: 1;
    }

    & .button:hover {
      border: 0;
    }
  }

  .gray-wrapper {
    & section {
      width: 400px;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .svg {
    width: 1rem;
    aspect-ratio: 1/1;
    margin-right: 0.5rem;
  }
</style>

<article class="gray" id="contacto">
  <div class="gray-wrapper">
    <Capitular>Contacto</Capitular>
    <section>
      <ul class="contact-info">
        <li>
          <img class="svg" src="u.svg" alt="user" />
          <p>{user.nombre}</p>
        </li>
        <li>
          <a href="tel:{user.telefono}" title="Llámame">
            <img class="svg" src="p.svg" alt="phone" />
            <p>{user.telefono}</p>
          </a>
        </li>
        <li>
          <a href="mailto:{user.mail}" title="Mándame un mail">
            <img class="svg" src="m.svg" alt="mail" />
            <p>{user.mail}</p>
          </a>
        </li>
      </ul>
    </section>

    <section>
      <ul class="contact-social">
        <li>
          <a class="button" href={user.facebook} target="_blank">
            <img class="svg" src="f.svg" alt="facebook" />
            <p class="contact-text">facebook</p>
          </a>
        </li>
        <li>
          <a class="button" href={user.instagram} target="_blank">
            <img class="svg" src="i.svg" alt="instagram" />
            <p class="contact-text">instagram</p>
          </a>
        </li>
        <li>
          <a
            class="button"
            href="https://wa.me/{user.telefono}?text=Hola%21%20Quiero%20saber%20m%C3%A1s%20sobre%20el%20Evento%20de%20Abril%20con%20Sergio%20Fernandez"
          >
            <img class="svg" src="w.svg" alt="whatsapp" />
            <p class="contact-text">whatsapp</p>
          </a>
        </li>
      </ul>
    </section>

    <Paypal {user} />
  </div>
</article>
