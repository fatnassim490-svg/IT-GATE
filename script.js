/* ============================================
   IT GATE - Script principal
   ============================================ */

// Toggle du menu burger sur mobile
const btnMenu = document.getElementById('btn-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');
const iconMenu = document.getElementById('icon-menu');

btnMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('open');
  const isOpen = menuMobile.classList.contains('open');
  iconMenu.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
  lucide.createIcons();
});

// Ferme le menu mobile automatiquement après clic sur un lien
document.querySelectorAll('#menu-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    menuMobile.classList.remove('open');
    iconMenu.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// Effet de fond sur le header au scroll
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('bg-black/90', 'backdrop-blur-md', 'shadow-lg');
    header.classList.remove('bg-transparent');
  } else {
    header.classList.remove('bg-black/90', 'backdrop-blur-md', 'shadow-lg');
    header.classList.add('bg-transparent');
  }
});

// Animation d'apparition au scroll (Intersection Observer)
const fadeElements = document.querySelectorAll('.fade-in-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeElements.forEach(el => observer.observe(el));

// Validation du formulaire de contact
const form = document.getElementById('form-contact');
const formSuccess = document.getElementById('form-success');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;

  // Champ Nom
  const nom = document.getElementById('nom');
  const erreurNom = document.getElementById('erreur-nom');
  if (nom.value.trim().length < 2) {
    erreurNom.classList.add('visible');
    isValid = false;
  } else {
    erreurNom.classList.remove('visible');
  }

  // Champ Téléphone (format algérien simplifié : 9 à 10 chiffres)
  const telephone = document.getElementById('telephone');
  const erreurTelephone = document.getElementById('erreur-telephone');
  const telRegex = /^0[5-7][0-9]{8}$/;
  if (!telRegex.test(telephone.value.trim())) {
    erreurTelephone.classList.add('visible');
    isValid = false;
  } else {
    erreurTelephone.classList.remove('visible');
  }

  // Champ Type de besoin
  const besoin = document.getElementById('besoin');
  const erreurBesoin = document.getElementById('erreur-besoin');
  if (besoin.value === '') {
    erreurBesoin.classList.add('visible');
    isValid = false;
  } else {
    erreurBesoin.classList.remove('visible');
  }

  // Champ Message
  const message = document.getElementById('message');
  const erreurMessage = document.getElementById('erreur-message');
  if (message.value.trim().length < 10) {
    erreurMessage.classList.add('visible');
    isValid = false;
  } else {
    erreurMessage.classList.remove('visible');
  }

  if (isValid) {
    // Simulation d'envoi (pas de backend réel)
    formSuccess.classList.remove('hidden');
    form.reset();
    setTimeout(() => {
      formSuccess.classList.add('hidden');
    }, 5000);
  }
});

// Initialisation des icônes Lucide
lucide.createIcons();
