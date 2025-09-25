// Menú móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active'); // Opcional: animar hamburguesa
});

// Submenú en móvil (toggle al click en "Especialidades")
const especialidadesLi = document.querySelector('li:has(a[href="especialidades.html"])');
if (especialidadesLi) {
    const submenu = especialidadesLi.querySelector('.submenu');
    const link = especialidadesLi.querySelector('a');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            submenu.classList.toggle('active');
        }
    });
}

// Cerrar menú al hacer click en un enlace (móvil)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scroll para anclas internas (si usas # en enlaces)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
