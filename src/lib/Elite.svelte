<script>
  export let user;
  let cover = ["z.jpg", "z.jpg", "z.jpg", "z.jpg"];
  import Contact from "./components/Contact.svelte";
  import Cover from "./components/Cover.svelte";
  import Paypal from "./components/Paypal.svelte";
  import Top from "./components/Top.svelte";
  import Capitular from "./components/Capitular.svelte";
</script>

<style>
  #ponentes {
    margin: clamp(0.5rem, calc(8px + 1vw), 1rem) 0;
  }
  .ponente {
    display: grid;
    height: max-content;
    padding: clamp(0.5rem, calc(8px + 1vw), 1rem);

    & img {
      width: 100%;
    }

    & p {
      margin: clamp(0.5rem, calc(8px + 1vw), 1rem) 0;
    }
  }

  #situacion p {
    margin: clamp(0.5rem, calc(8px + 1vw), 1rem) 0;
  }
</style>

{#if user.telefono}
  <Top {user} />
{/if}

<header>
  <Cover {cover} />

  {#if user.telefono}
    <Paypal {user} />
  {/if}
</header>

<section>
  <article id="evento">
    <Capitular>El evento</Capitular>
    <iframe
      title="hola"
      src="https://player.vimeo.com/video/389285524?portrait=0"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen="allowfullscreen"
    />
    <strong>
      ¡ENHORABUENA! En este evento vas a vivir una experiencia única en el mundo
      del desarrollo personal y empresarial.
    </strong>
    <p>
      Este es el evento indispensable para todos los empresarios, dueños de
      negocios, networkers y personas proactivas que quieran aprender de
      personalidades influyentes números uno en el mundo, como Eric Worre, Tony
      Robbins y Arnold Schwarzenegger, expertos en Ventas, Desarrollo personal y
      Psicología para establecer un nuevo estándar para tu propio éxito.
    </p>
    <p>
      3 días de aprendizaje, desarrollo y diversión compartidos con 65.000
      personas de tus mismas inquietudes, en el evento más grande de la historia
      de Europa, dónde:
    </p>
    <div class="info">
      <ul>
        <li>
          <img class="icon" src="info1.svg" alt="" />
          <p>
            Experimentarás cómo tu propia forma de pensar y tus emociones te
            pueden llevar al éxito personal y profesional.
          </p>
        </li>
        <li>
          <img class="icon" src="info2.svg" alt="" />
          <p>Conocerás los hábitos para lograr una mejora constante.</p>
        </li>
        <li>
          <img class="icon" src="info3.svg" alt="" />
          <p>Aprenderás a liderar y desbloquear todo tu potencial.</p>
        </li>
      </ul>
    </div>
    <strong
      >¡Si todavía tienes sueños y valoras tu crecimiento, no puedes faltar a
      esta cita!</strong
    >
  </article>
  <article id="situacion">
    <Capitular>Dónde y cuándo</Capitular>
    <img src="mapa1.jpg" alt="" /><img src="mapa2.jpg" alt="" />
    <p>
      Los días <strong>25 26 27 de Junio</strong> en Gelsenkirchen, Alemania,
      dentro del impresionante
      <strong>VELTINS Arena</strong>, el estadio de fútbol cubierto más moderno
      de Europa y con capacidad para 65.000 personas.
    </p>
  </article>
  <article class="gray" id="ponentes">
    <Capitular>Ponentes</Capitular>
    <div class="ponente">
      <img src="eric.jpg" alt="" />
      <p>
        Es el coach por excelencia en habilidades para desarrollar tu negocio.
        Empresario con más de 30 años de experiencia, conferencista y asesor
        externo de grandes multinacionales. Explicará cómo arrancar un negocio
        exitoso desde cero en tan solo 7 pasos.
      </p>
    </div>
    <div class="ponente">
      <img src="tony.jpg" alt="" />
      <p>
        No necesita presentación. Es el mayor coach personal y negocio de la
        historia.Ha sido coach personal de tres presidentes de USA, de líderes
        mundiales, estrellas y deportistas de élite, tocando las vidas de
        personalidades como Aerosmith, Green Day, Usher, Nelson Mandela,
        princesa Diana… además de líderes empresariales billonarios. Tony
        Robbins es fundador y/o socio de más de treinta empresas
        multimillonarias en diversas áreas; tecnología, deportes, eventos y
        hoteles. Ayudará a que descubras el poder que hay en ti y sacar todo tu
        potencial.
      </p>
    </div>
    <div class="ponente">
      <img src="arnold.jpg" alt="" />
      <p>
        Deportista, actor, político, su carrera ha sido brillante. Es un claro
        ejemplo de una persona que se reinventa a si misma, triunfando en todo
        lo que se propone y tiene mucho que aportarnos.
      </p>
    </div>
  </article>
  <article id="cuanto">
    <iframe
      title="hola"
      src="https://player.vimeo.com/video/390695355?portrait=0"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen="allowfullscreen"
    />
    <strong
      >Normalmente no podrías disfrutar de estas tres celebridades en un evento
      de 3 días por menos de 2000 euros.
    </strong>
    <p>La entrada para socios en este evento es de: 390€.</p>
    <p>
      Gracias a que un grupo de emprendedores hemos comprado paquetes de
      entradas, tienes la suerte de aprovechar el precio de: <strong
        class="precio">{user.precio}</strong
      > (hasta fin de existencias)
    </p>
    <p class="--strong">
      <strong> * </strong>Posibilidad de servicio de traducción a 14 idiomas.
    </p>
    <p class="--strong">
      <strong> * </strong>Podemos ayudarte a gestionar el viaje cómodamente
      (avión, traslados, alojamientos, financiación…)
    </p>
    <strong>
      Te garantizo que, como a miles de personas que ya han asistido, el evento
      te fascinará, pero si todavía tienes algun tipo de duda, contacta conmigo
      para ayudarte y resolverlas.
    </strong>
  </article>
  {#if user.telefono}
    <Contact {user} />
  {/if}
</section>
