/* =========================================
   WHATSAPP
========================================= */

const whatsappNumber = "525545523770";

const whatsappMessage =
  "Hola Aranzazu, vi tu página y me interesa una consulta nutricional. ¿Podrías compartirme información y ayudarme a agendar una cita? Gracias.";

const whatsappURL =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


document
  .querySelectorAll(".whatsapp-link")
  .forEach((link) => {

    link.href = whatsappURL;

  });


/* =========================================
   NAVBAR
========================================= */

const nav =
  document.getElementById("nav");


window.addEventListener(
  "scroll",
  () => {

    if (!nav) {
      return;
    }

    if (window.scrollY > 30) {

      nav.classList.add("scrolled");

    } else {

      nav.classList.remove("scrolled");

    }

  }
);


/* =========================================
   MENÚ MOBILE
========================================= */

const burger =
  document.getElementById("burger");

const mobileMenu =
  document.getElementById("mobileMenu");


if (burger && mobileMenu) {

  burger.addEventListener(
    "click",
    () => {

      burger.classList.toggle("active");

      mobileMenu.classList.toggle("open");


      const isOpen =
        mobileMenu.classList.contains("open");


      burger.setAttribute(
        "aria-expanded",
        isOpen
      );

    }
  );


  mobileMenu
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          burger.classList.remove("active");

          mobileMenu.classList.remove("open");

          burger.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* =========================================
   ANIMACIONES
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.12
      }

    );


  revealElements.forEach(
    (element) => {

      revealObserver.observe(
        element
      );

    }
  );

} else {

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "visible"
      );

    }
  );

}


/* =========================================
   CONTADORES
========================================= */

const counters =
  document.querySelectorAll(".counter");

const statsSection =
  document.querySelector(".stats");

let countersStarted =
  false;


function animateCounter(counter) {

  const target =
    parseFloat(
      counter.dataset.target
    );


  const decimals =
    parseInt(
      counter.dataset.decimals
    ) || 0;


  const duration =
    1700;


  const start =
    performance.now();


  function update(currentTime) {

    const elapsed =
      currentTime - start;


    const progress =
      Math.min(
        elapsed / duration,
        1
      );


    const eased =
      1 -
      Math.pow(
        1 - progress,
        3
      );


    const value =
      target * eased;


    counter.textContent =
      value.toFixed(
        decimals
      );


    if (progress < 1) {

      requestAnimationFrame(
        update
      );

    } else {

      counter.textContent =
        target.toFixed(
          decimals
        );

    }

  }


  requestAnimationFrame(
    update
  );

}


if (
  statsSection &&
  "IntersectionObserver" in window
) {

  const statsObserver =
    new IntersectionObserver(

      (entries) => {

        const entry =
          entries[0];


        if (
          entry.isIntersecting &&
          !countersStarted
        ) {

          countersStarted =
            true;


          counters.forEach(
            animateCounter
          );


          statsObserver.disconnect();

        }

      },

      {
        threshold: 0.35
      }

    );


  statsObserver.observe(
    statsSection
  );

}


/* =========================================
   GALERÍA / LIGHTBOX
========================================= */

const galleryCards =
  document.querySelectorAll(
    ".gallery-card"
  );


const lightbox =
  document.getElementById(
    "lightbox"
  );


const lightboxImage =
  document.getElementById(
    "lightboxImage"
  );


const lightboxCaption =
  document.getElementById(
    "lightboxCaption"
  );


const lightboxClose =
  document.getElementById(
    "lightboxClose"
  );


galleryCards.forEach(
  (card) => {

    card.addEventListener(
      "click",
      () => {

        if (
          !lightbox ||
          !lightboxImage ||
          !lightboxCaption
        ) {
          return;
        }


        lightboxImage.src =
          card.dataset.image;


        lightboxImage.alt =
          card.dataset.caption;


        lightboxCaption.textContent =
          card.dataset.caption;


        lightbox.classList.add(
          "open"
        );


        document.body.style.overflow =
          "hidden";

      }
    );

  }
);


function closeLightbox() {

  if (!lightbox) {
    return;
  }


  lightbox.classList.remove(
    "open"
  );


  document.body.style.overflow =
    "";

}


if (lightboxClose) {

  lightboxClose.addEventListener(
    "click",
    closeLightbox
  );

}


if (lightbox) {

  lightbox.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        lightbox
      ) {

        closeLightbox();

      }

    }
  );

}


/* =========================================
   RECETAS DE ARA
========================================= */

const recipes = [

  /* =====================================
     1. TOAST DE PANELA
  ===================================== */

  {

    title:
      "Toast de panela con miel picante",

    category:
      "Desayuno / Cena",

    image:
      "img/Toast_panela.png",

    description:
      "Una opción sencilla, rica y práctica para desayuno o cena.",

    ingredients: [

      "Pan de caja o pan de masa madre",

      "Espinaca",

      "Pepino",

      "Queso panela",

      "2 cucharaditas de miel",

      "Chile de árbol picado"

    ],

    preparation:
      "Dorar el queso panela y el pan por separado. Mezclar la miel con el chile de árbol y sellar el queso panela con esa preparación. Armar el toast: al pan agregar una cama de espinaca, pepino y encima el queso panela. Y así de fácil está una opción de desayuno y/o cena."

  },


  /* =====================================
     2. AVENA PASTEL DE ZANAHORIA
  ===================================== */

  {

    title:
      "Avena sabor pastel de zanahoria",

    category:
      "Desayuno / Colación / Cena",

    image:
      "img/avenapastel.png",

    description:
      "Una opción práctica que puedes dejar preparada desde la noche anterior.",

    ingredients: [

      "1/3 de taza de avena",

      "1/3 de taza de leche",

      "2 cucharadas de yogur",

      "Zanahoria rallada",

      "Nuez picada",

      "Vainilla"

    ],

    preparation:
      "En un bowl o topper agregar todos los ingredientes. Dejar reposar al menos 3 horas o toda la noche. Opción para desayuno, colación y/o cena."

  },


  /* =====================================
     3. POKE BOWL
  ===================================== */

  {

    title:
      "Poke bowl de atún, pepino y mango",

    category:
      "Comida",

    image:
      "img/bowl_atun.png",

    description:
      "Una comida fresca, completa y muy fácil de preparar.",

    ingredients: [

      "Atún en cubitos",

      "1 mango",

      "1 pepino",

      "Arroz cocido",

      "Ajonjolí negro opcional"

    ],

    preparation:
      "Sellar los cubos de atún. Picar el mango y el pepino en cubos. En un bowl agregar una cama de arroz cocido e incorporar los cubos de atún, mango y pepino. Puedes decorar con ajonjolí negro. Disfruta de esta fácil comida."

  },


  /* =====================================
     4. TORTITAS DE PLÁTANO
  ===================================== */

  {

    title:
      "Tortitas de plátano con queso",

    category:
      "Comida",

    image:
      "img/tortitasplatano.png",

    description:
      "Tortitas doraditas de plátano macho con queso Oaxaca.",

    ingredients: [

      "2 plátanos machos maduros",

      "2 cucharadas de harina",

      "40 g de queso Oaxaca"

    ],

    preparation:
      "Cuece los plátanos y hazlos puré. Mezcla la harina con el puré y el queso. Forma las tortitas. En un sartén con aceite en aerosol, dora las tortitas y acompáñalas con ensalada verde. Excelente opción de comida."

  },


  /* =====================================
     5. ARROZ CON LECHE DE GUAYABA
  ===================================== */

  {

    title:
      "Arroz con leche de guayaba",

    category:
      "Postre / Colación",

    image:
      "img/arroz_guayaba.png",

    description:
      "Un arroz con leche suave, cremosito y perfecto para disfrutar frío o calientito.",

    ingredients: [

      "½ taza de arroz blanco crudo",

      "1½ tazas de agua",

      "2 tazas de leche entera",

      "¼ taza de azúcar (puedes ajustar al gusto)",

      "1 raja de canela",

      "½ cucharadita de vainilla",

      "2 cucharadas de pasitas, opcional",

      "Canela en polvo para servir",

      "Una pizquita de sal"

    ],

    preparation:
      "1. Lava el arroz y ponlo en una olla con el agua, la canela y la pizquita de sal.\n\n2. Cocina a fuego medio unos 12-15 minutos, hasta que el arroz esté casi cocido y haya absorbido buena parte del agua.\n\n3. Agrega la leche y el azúcar. Baja a fuego medio-bajo.\n\n4. Cocina unos 20-25 minutos, moviendo cada pocos minutos para que no se pegue, hasta que quede suave y cremosito.\n\n5. Apaga el fuego y agrega la vainilla y las pasitas.\n\n6. Déjalo reposar unos 5-10 minutos. Al enfriarse va a espesar todavía más.\n\n7. Sirve con canela en un bowl."

  },


  /* =====================================
     6. WAFFLES
  ===================================== */

  {

    title:
      "Waffles ricos en proteína",

    category:
      "Desayuno / Colación",

    image:
      "img/wafles.png",

    description:
      "Waffles fáciles de preparar con 15 g de proteína por porción 🫰🏻✨",

    ingredients: [

      "1/3 de taza de avena",

      "1 huevo",

      "3 cucharadas de queso cottage",

      "1/4 de taza de leche"

    ],

    preparation:
      "Licúa todos los ingredientes y coloca la mezcla en una wafflera. Acompaña con tu topping favorito. Cada waffle contiene 15 g de proteína 🫰🏻✨"

  }

];


/* =========================================
   CREAR TARJETAS DE RECETAS
========================================= */

const recipeGrid =
  document.getElementById(
    "recipeGrid"
  );


function renderRecipes() {

  if (!recipeGrid) {
    return;
  }


  recipeGrid.innerHTML =
    "";


  recipes.forEach(
    (recipe, index) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "recipe-card";


      article.innerHTML = `

        <img
          src="${recipe.image}"
          alt="${recipe.title}"
          loading="lazy"
        >

        <div class="recipe-content">

          <span class="recipe-tag">
            ${recipe.category}
          </span>

          <h3>
            ${recipe.title}
          </h3>

          <p>
            ${recipe.description}
          </p>

          <button
            type="button"
            class="recipe-button"
            data-index="${index}"
          >
            Ver receta →
          </button>

        </div>

      `;


      recipeGrid.appendChild(
        article
      );

    }
  );


  document
    .querySelectorAll(
      ".recipe-button"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          openRecipe(
            Number(
              button.dataset.index
            )
          );

        }
      );

    });

}


renderRecipes();


/* =========================================
   MODAL RECETA
========================================= */

const recipeModal =
  document.getElementById(
    "recipeModal"
  );


const recipeClose =
  document.getElementById(
    "recipeClose"
  );


const recipeModalImage =
  document.getElementById(
    "recipeModalImage"
  );


const recipeModalTitle =
  document.getElementById(
    "recipeModalTitle"
  );


const recipeIngredients =
  document.getElementById(
    "recipeIngredients"
  );


const recipePreparation =
  document.getElementById(
    "recipePreparation"
  );


function openRecipe(index) {

  const recipe =
    recipes[index];


  if (
    !recipe ||
    !recipeModal
  ) {
    return;
  }


  recipeModalImage.src =
    recipe.image;


  recipeModalImage.alt =
    recipe.title;


  recipeModalTitle.textContent =
    recipe.title;


  recipeIngredients.innerHTML =
    "";


  recipe.ingredients.forEach(
    (ingredient) => {

      const item =
        document.createElement(
          "li"
        );


      item.textContent =
        ingredient;


      recipeIngredients.appendChild(
        item
      );

    }
  );


  recipePreparation.textContent =
    recipe.preparation;


  recipeModal.classList.add(
    "open"
  );


  document.body.style.overflow =
    "hidden";

}


function closeRecipe() {

  if (!recipeModal) {
    return;
  }


  recipeModal.classList.remove(
    "open"
  );


  document.body.style.overflow =
    "";

}


if (recipeClose) {

  recipeClose.addEventListener(
    "click",
    closeRecipe
  );

}


if (recipeModal) {

  recipeModal.addEventListener(
    "click",
    (event) => {

      if (
        event.target ===
        recipeModal
      ) {

        closeRecipe();

      }

    }
  );

}


/* =========================================
   OPINIONES
========================================= */

/*
  Las primeras 5 aparecen siempre.

  Las últimas 3 se muestran
  al tocar "Ver más opiniones".
*/

const reviews = [

  /* =====================================
     NUEVA 1 - MARIA JOSE
  ===================================== */

  {

    name:
      "Maria Jose Vázquez",

    initial:
      "M",

    featured:
      true,

    text:
      `Súper recomendada 🫶🏻 es súper linda, te acompaña en tu proceso para alcanzar tus objetivos de una forma muy humana ❤️, escuchando tus necesidades y objetivos, se preocupa por que te sientas cómodo con tu plan, además los planes de alimentación son muy versátiles y accesibles, juro que no se sienten como una dieta restrictiva, todo lo contrario, comes de todo.

En cuanto a la consulta es muy completa pues te toma medidas, peso, porcentaje de grasa y de masa muscular, en cada consulta mide tu fuerza, glucosa y toma de presión arterial.

A mi parecer es un servicio muy completo.

Si están buscando nutri, Ara es la mejor opción 💕`

  },


  /* =====================================
     NUEVA 2 - DIANA
  ===================================== */

  {

    name:
      "Diana Enciso",

    initial:
      "D",

    featured:
      true,

    text:
      `Ara es una increíble nutrióloga!! Los planes son deliciosos, el seguimiento increíble y te motiva mucho a seguir apegándote a tu plan y te enseña a mantener el balance!! la súper recomiendo es la mejor`

  },


  /* =====================================
     NUEVA 3 - ARACELI
  ===================================== */

  {

    name:
      "Araceli Peralta",

    initial:
      "A",

    featured:
      true,

    text:
      `Desde que empecé con ella me he sentido acompañada, escuchada y motivada en todo el proceso. Sus planes son súper prácticos, ricos y fáciles de seguir, sin sentir que estás “a dieta” todo el tiempo.

Además de ayudarme con mis objetivos, también me ha enseñado a tener una mejor relación con la comida y a cuidar mi salud de una manera más realista y sostenible. Se nota muchísimo la dedicación y el conocimiento que tiene.

La recomiendo totalmente si buscan a alguien profesional, paciente y que realmente se preocupe por sus pacientes.`

  },


  /* =====================================
     NUEVA 4 - JESSY
  ===================================== */

  {

    name:
      "Jessy Carbajal Rodríguez",

    initial:
      "J",

    featured:
      true,

    text:
      `Asistir al nutriólogo cualquiera puede pero tener consulta con Aranzazu tiene un plus, es una nutricionista actualizada que además de enseñarte a comer te desarrolla un plan de alimentación mensual, donde te incluye cómo debes preparar los alimentos e imágenes que hacen que se te antoje la comida y eso te facilita la vida.

Además te da tips de rutinas de ejercicio y recomendación de suplementos que te ayudarán a tener una mejor calidad de vida.

Las consultas pueden ser presenciales u online y eso ayuda en nuestros tiempos.

Gracias Ara.`

  },


  /* =====================================
     NUEVA 5 - ARANZA
  ===================================== */

  {

    name:
      "Aranza Reyes",

    initial:
      "A",

    featured:
      true,

    text:
      `Voy con Ara para mejorar mi rendimiento deportivo. La atención que brinda es 10/10, siempre puntual y muy profesional.

La atención es muy completa y los planes de alimentación siempre tienen opciones y equivalencias para hacerlo dinámico.

Estoy feliz con los resultados :)`

  },


  /* =====================================
     OPINIONES ANTERIORES
  ===================================== */

  {

    name:
      "Dayana Saray Peña",

    initial:
      "D",

    featured:
      false,

    text:
      `Llevo 2 años acudiendo con ella y me ha ayudado a cumplir mis objetivos, desde composición corporal, volumen y definición.

He mejorado mi relación con la comida, al grado de poder tener un cuerpo más estético, saludable y puedo seguir disfrutando de comer.`

  },


  {

    name:
      "Irvin Ramos",

    initial:
      "I",

    featured:
      false,

    text:
      `Pero en mi proceso con la doctora Aranzazu Ramirez fue diferente, con estudios tras estudios, pudo ver lo que mi cuerpo necesitaba y las cantidades correctas.

Solo me enseñó a comer correctamente y eliminé de mi vocabulario la palabra dieta.

Seguí los pasos que me dio.`

  },


  {

    name:
      "Regina Gonzalez",

    initial:
      "R",

    featured:
      false,

    text:
      `Excelente nutrióloga, me ha ayudado bastante a bajar de peso y conseguir músculo sin dejar de comer, además brinda muy buen servicio en su consultorio 🫶🏻`

  }

];


/* =========================================
   CREAR OPINIONES
========================================= */

const reviewGrid =
  document.querySelector(
    ".review-grid"
  );


function createReviewCard(
  review,
  index
) {

  const article =
    document.createElement(
      "article"
    );


  article.className =
    "review-card review-js";


  /*
    Solo las opiniones antiguas
    estarán ocultas inicialmente.
  */

  if (!review.featured) {

    article.classList.add(
      "review-extra"
    );

  }


  article.dataset.reviewIndex =
    index;


  article.innerHTML = `

    <span class="review-quote">
      “
    </span>

    <p class="review-text">
      ${review.text}
    </p>

    <footer>

      <span class="review-avatar">
        ${review.initial}
      </span>

      <div>

        <strong>
          ${review.name}
        </strong>

        <span class="review-google">
          ★★★★★ · Google
        </span>

      </div>

    </footer>

  `;


  return article;

}


/* =========================================
   RENDER OPINIONES
========================================= */

function renderReviews() {

  if (!reviewGrid) {
    return;
  }


  /*
    Borra las tarjetas antiguas
    que estaban escritas en HTML.
  */

  reviewGrid.innerHTML =
    "";


  reviews.forEach(
    (review, index) => {

      reviewGrid.appendChild(
        createReviewCard(
          review,
          index
        )
      );

    }
  );


  /*
    Creamos automáticamente
    el botón Ver más opiniones.
  */

  const existingButton =
    document.querySelector(
      ".reviews-more-wrap"
    );


  if (existingButton) {

    existingButton.remove();

  }


  const reviewsFooter =
    document.querySelector(
      ".reviews-footer"
    );


  if (!reviewsFooter) {
    return;
  }


  const moreWrap =
    document.createElement(
      "div"
    );


  moreWrap.className =
    "reviews-more-wrap";


  moreWrap.innerHTML = `

    <button
      type="button"
      class="reviews-more-button"
      id="reviewsMoreButton"
      aria-expanded="false"
    >
      Ver más opiniones ↓
    </button>

  `;


  reviewsFooter.parentNode.insertBefore(
    moreWrap,
    reviewsFooter
  );


  const moreButton =
    document.getElementById(
      "reviewsMoreButton"
    );


  moreButton.addEventListener(
    "click",
    () => {

      const extraReviews =
        document.querySelectorAll(
          ".review-extra"
        );


      const expanded =
        moreButton.getAttribute(
          "aria-expanded"
        ) === "true";


      extraReviews.forEach(
        (card) => {

          card.classList.toggle(
            "show",
            !expanded
          );

        }
      );


      moreButton.setAttribute(
        "aria-expanded",
        String(!expanded)
      );


      moreButton.textContent =
        expanded
          ? "Ver más opiniones ↓"
          : "Ver menos opiniones ↑";

    }
  );

}


renderReviews();


/* =========================================
   CERRAR MODALES CON ESC
========================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !==
      "Escape"
    ) {
      return;
    }


    if (
      lightbox &&
      lightbox.classList.contains(
        "open"
      )
    ) {

      closeLightbox();

    }


    if (
      recipeModal &&
      recipeModal.classList.contains(
        "open"
      )
    ) {

      closeRecipe();

    }

  }
);


/* =========================================
   GOOGLE
========================================= */

const GOOGLE_REVIEWS_URL =
  "https://maps.app.goo.gl/QRb4gLEpLUMRamq47";


const ROMA_MAP_URL =
  "https://share.google/BFPwr6seVg5OnxCg2";


const ZAPOTITLAN_MAP_URL =
  "https://share.google/2tJVIwXQbiX2xCBea";


console.log(
  "Página de Aranzazu cargada correctamente 😎"
);