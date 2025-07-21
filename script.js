// Animación de scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".scroll-hidden").forEach((el) => {
  observer.observe(el);
});

// Hero parallax
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.getElementById("fg-img").style.transform = `translateY(${
    scrollY * 0.4
  }px)`;
});

// Letras animadas
const versos = [
  "Escuchen todos atentos",
  "Lo que les voy a contar",
  "Un poquito de la historia",
  "De un hombre fuerte y cabal",
  "Que en el bonito Guerrero",
  "Ya lo han visto pasar.",
  "Tengo la dicha señores",
  "De estar con él buenos ratos",
  "Es buen amigo de todos",
  "Con muchas risas y cantos",
  "Enseguida lo presento",
  "Prepárense buenos tragos.",
  "Marco Antonio es su nombre....",
  "Molina Galeana es.........",
  "Del bello lugar de Tecpan",
  "Ahí lo vieron crecer",
  "El Chuma allá lo conocen",
  "No se vayan a perder.",
  "En Guerrero y Michoacan",
  "Él tiene amigos sinceros",
  "Siempre lo andan cuidando",
  "Como buenos pistoleros",
  "Sesenta también le apodan",
  "Sus compás allá en el juego.",
  "Así ya lo reconocen",
  "En las escuelas que triunfa",
  "Su pasión es el fútbol",
  "Pero también su trabajo",
  "Con juegos, cantos y risas",
  "A niños está educando.",
  "Le gusta tomar cerveza...",
  "Vino, tequila y mezcal",
  "Pongan la de los Cadetes",
  "Que me quiero emborrachar",
  "Y sígale con las mismas",
  "Yo se las voy a pagar.",
  "Cincuenta años de historia",
  "Y sigue la mata dando",
  "Que Dios siempre le permita",
  "Que siga y siga pateando",
  "Y cada fin de semana",
  "Con sus amigos bromeando.",
  "Todavía esto no termina",
  "Lo que acabo de contar",
  "El Chuma en Tecpan Galeana",
  "Sesenta acá en Michoacán",
  "No importa cómo le digan",
  "A todos va a respaldar.",
  "Aquí ya dejo pagado",
  "Y disfruten todavía",
  "Todas las de los Cadetes",
  "Marco Antonio se reía",
  "Váyanse hasta que las toquen",
  "Nos vemos ya otro día.",
];

let currentVerse = 0;
let interval;

function showVerse(index) {
  const div = document.getElementById("versos");
  div.innerHTML = `<p class='verse'>${versos[index]}</p>`;
}

function playVerses() {
  if (!interval) {
    showVerse(currentVerse);
    interval = setInterval(() => {
      currentVerse++;
      if (currentVerse < versos.length) {
        showVerse(currentVerse);
      } else {
        clearInterval(interval);
        interval = null;
      }
    }, 2500);
  }
}

function pauseVerses() {
  clearInterval(interval);
  interval = null;
}

function resetVerses() {
  pauseVerses();
  currentVerse = 0;
  document.getElementById("versos").innerHTML = "";
}

// Compartir
function shareCorrido() {
  if (navigator.share) {
    navigator.share({
      title: `El Corrido de "Marco Antonio (El Sheshenta)"`,
      text: "Escucha esta obra de arte musical.",
      url: window.location.href,
    });
  } else {
    alert("Tu navegador no soporta la función de compartir.");
  }
}

// Animacion de carga
function loadingAnimation() {
  const loadingDiv = document.getElementById("loading");

  // Simular carga
  setTimeout(() => {
    loadingDiv.style.display = "none";
  }, 2500);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  loadingAnimation();
});
