// No changes needed to this file
document.addEventListener('DOMContentLoaded', function() {
    // --- Menu Toggle Logic ---
    const menuButton = document.getElementById('menuButton');
    const body = document.body;
    const inlineMenuContainer = document.getElementById('inlineMenuNav');

    if (menuButton && body && inlineMenuContainer) {
        const menuLinks = inlineMenuContainer.querySelectorAll('nav ul li a');

        function closeMenu() {
            menuButton.classList.remove('active');
            body.classList.remove('menu-active');
        }

        function openMenu() {
            menuButton.classList.add('active');
            body.classList.add('menu-active');
        }

        menuButton.addEventListener('click', function() {
            if (body.classList.contains('menu-active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    setTimeout(closeMenu, 50);
                } else {
                    closeMenu();
                }
            });
        });
    } else {
        console.error("Menu elements not found!");
    }

    // --- Parallax Background Logic ---
    const parallaxContainer = document.querySelector('.parallax-bg-container');
    if (parallaxContainer) {
        const layerBack = document.getElementById('p-layer-back');
        const layerMid = document.getElementById('p-layer-mid');
        const layerFore = document.getElementById('p-layer-fore');

        const factorBack = 0.01;
        const factorMid = 0.03;
        const factorFore = 0.05;

        function debounce(func, wait = 10, immediate = true) {
            let timeout;
            return function() {
                const context = this,
                    args = arguments;
                const later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        const handleMouseMove = debounce(function(e) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const moveX = e.clientX - centerX;
            const moveY = e.clientY - centerY;

            if (layerBack) layerBack.style.transform = `translate(${moveX * factorBack}px, ${moveY * factorBack}px)`;
            if (layerMid) layerMid.style.transform = `translate(${moveX * factorMid}px, ${moveY * factorMid}px)`;
            if (layerFore) layerFore.style.transform = `translate(${moveX * factorFore}px, ${moveY * factorFore}px)`;
        }, 5);

        window.addEventListener('mousemove', handleMouseMove);
    } else {
        console.warn("Parallax container not found.");
    }

    // --- Page Load Animation Trigger ---
    setTimeout(() => {
        document.body.classList.remove('preload');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.body.classList.add('page-loaded');
            });
        });
    }, 50);

});