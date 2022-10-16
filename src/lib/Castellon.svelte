<script>
  export let user;
  let cover = ["z.jpg"];
  import Cover from "./components/Cover.svelte";
  import Contact from "./components/Contact.svelte";
  import Paypal from "./components/Paypal.svelte";
  import Top from "./components/Top.svelte";
</script>

<style>
  strong {
    text-align: center;
    margin: calc(var(--unit) / 6) 0;
  }
</style>

{#if user.telefono}
  <Top {user} />
{/if}

<header>
  <Cover {cover} />
  <Paypal {user} />
</header>
<section>
  <article class="evento">
    <strong>
      ¡ENHORABUENA! En este evento vas a vivir una experiencia única sobre
      visión y mentalidad en el emprendimiento.
    </strong>
    <p>
      Este evento es indispensable para todos los emprendedores, dueños de
      negocios, networkers y personas proactivas que quieran revisar su relación
      con el dinero, abrirse a nuevas posibilidades de negocio y recibir
      información exclusiva de la mano de Sergio Fernandez.
    </p>
    <p>
      En este evento de 2 horas, recibirás los consejos de Sergio Fernández y
      además podrás conocer la nueva herramienta digital que está cambiando la
      vida de millones de personas en más de 50 paises en todo el mundo.
    </p>
    <iframe src="https://www.youtube.com/embed/eysQM5M5YBE" title="hola" />
    <div class="info">
      <ul>
        <li>
          <img class="icon" src="info1.svg" alt="" />

          <p>
            Descubriremos una nueva manera de relacionarnos con el dinero
            mientras apoyamos al medioambiente y la escolarización en zonas
            deprimidas.
          </p>
        </li>
        <li>
          <img class="icon" src="info2.svg" alt="" />

          <p>
            Las pequeñas y medianas empresas conocerán la digitalización de su
            negocio que sólo está al alcance de las grandes cadenas.
          </p>
        </li>
        <li>
          <img class="icon" src="info3.svg" alt="" />

          <p>
            Y además te presentaremos un modelo de negocio revolucionario para
            poder vivir sin jefe, creciendo en equipo, en confianza y
            disfrutando de la abundancia de esta proyecto/realidad.
          </p>
        </li>
      </ul>
    </div>
    <strong
      >¡Si quieres cuidar tus sueños y valoras tu crecimiento, no puedes faltar
      a esta cita!</strong
    >
    <iframe src="https://www.youtube.com/embed/hTOYhsVvnMM" title="hola" />
    <strong
      >Te garantizo que, como a miles de personas que ya han asistido, el evento
      te fascinará, pero si todavía tienes algun tipo de duda, contacta conmigo
      para ayudarte y resolverlas
    </strong>
  </article>
  <Contact {user} />
</section>
