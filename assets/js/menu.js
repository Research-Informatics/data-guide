document.addEventListener('DOMContentLoaded', () => {
    const toggleLinks = document.querySelectorAll('.toggle-menu');

    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const currentUrl = window.location.href;

            // Create absolute URLs for comparison
            const linkUrl = new URL(href, window.location.origin).href.split('#')[0];
            const currentPage = window.location.href.split('#')[0];

            if (linkUrl === currentPage) {
                // Same page: Prevent default behavior and toggle submenu
                e.preventDefault();
                const targetSelector = link.getAttribute('data-target');
                const target = document.querySelector(targetSelector);
                const arrow = link.querySelector('.fa');

                if (target) {
                    target.classList.toggle('active'); // Toggle submenu visibility
                    if (arrow) {
                        arrow.classList.toggle('expanded'); // Toggle arrow direction
                    }
                }
            }
            // Different page: Allow default navigation
        });
    });
});
