const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const bookingForm = document.querySelector('#booking-form');
const entryInput = bookingForm.elements.entrada;
const exitInput = bookingForm.elements.salida;
const formError = document.querySelector('#form-error');

function todayLocal() {
  const date = new Date();
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

entryInput.min = todayLocal();
exitInput.min = todayLocal();

entryInput.addEventListener('change', () => {
  exitInput.min = entryInput.value || todayLocal();
  if (exitInput.value && exitInput.value <= entryInput.value) exitInput.value = '';
  formError.hidden = true;
});
exitInput.addEventListener('change', () => { formError.hidden = true; });

function formatDate(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(year, month - 1, day));
}

bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  if (exitInput.value <= entryInput.value) {
    formError.textContent = 'La salida debe ser posterior a la entrada.';
    formError.hidden = false;
    exitInput.focus();
    return;
  }
  const guests = bookingForm.elements.huespedes.value;
  const message = `Hola Hugo, quisiera consultar disponibilidad en Hous Paradise del ${formatDate(entryInput.value)} al ${formatDate(exitInput.value)} para ${guests} ${guests === '1' ? 'huésped' : 'huéspedes'}. ¿Me puedes contar la tarifa y los detalles de la estadía?`;
  window.open(`https://wa.me/56961781294?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  mobileNav.hidden = !open;
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 850) setMenu(false); });
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('visible'));
}

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector('img').alt;
    lightboxCaption.textContent = item.dataset.caption;
    lightbox.showModal();
    document.body.classList.add('no-scroll');
  });
});
function closeLightbox() {
  lightbox.close();
  document.body.classList.remove('no-scroll');
}
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
lightbox.addEventListener('close', () => document.body.classList.remove('no-scroll'));
document.querySelector('#year').textContent = new Date().getFullYear();
