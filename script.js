// ===== Toggle du menu burger sur mobile =====
const btnMenuMobile = document.getElementById('btn-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');

btnMenuMobile.addEventListener('click', () => {
  menuMobile.classList.toggle('open');
  const icon = btnMenuMobile.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

// ===== Fermer le menu mobile après clic sur un lien =====
document.querySelectorAll('.menu-mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuMobile.classList.remove('open');
    const icon = btnMenuMobile.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

// ===== Validation simple du formulaire de contact (simulation d'envoi, pas de backend) =====
const formContact = document.getElementById('form-contact');
const confirmationMessage = document.getElementById('confirmation-message');

formContact.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  const champs = ['nom', 'telephone', 'besoin', 'message'];
  champs.forEach(id => {
    const input = document.getElementById(id);
    const errorMsg = input.parentElement.querySelector('.error-msg');
    const valeur = input.value.trim();
    let champValide = valeur.length > 0;

    // Validation spécifique au numéro de téléphone (au moins 9 chiffres)
    if (id === 'telephone' && champValide) {
      const chiffres = valeur.replace(/\D/g, '');
      champValide = chiffres.length >= 9;
    }

    if (!champValide) {
      isValid = false;
      input.classList.add('border-red-500');
      errorMsg.classList.remove('hidden');
    } else {
      input.classList.remove('border-red-500');
      errorMsg.classList.add('hidden');
    }
  });

  if (isValid) {
    confirmationMessage.classList.remove('hidden');
    formContact.reset();
    setTimeout(() => {
      confirmationMessage.classList.add('hidden');
    }, 5000);
  } else {
    confirmationMessage.classList.add('hidden');
  }
});
