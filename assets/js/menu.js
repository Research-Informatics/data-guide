document.addEventListener('DOMContentLoaded', () => {
    const toggleLinks = document.querySelectorAll('.toggle-menu');

    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const currentPage = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash
            const linkPage = new URL(href, window.location.origin).pathname.replace(/\/$/, "");

            if (linkPage === currentPage) {
                // Same page: Toggle submenu without navigating
                e.preventDefault(); // Prevent default link behavior
                const target = document.querySelector(link.getAttribute('data-target'));
                const arrow = link.querySelector('.fa-chevron-right');

                if (target) {
                    target.classList.toggle('active'); // Toggle the "active" class on the submenu
                    if (arrow) {
                        arrow.classList.toggle('fa-chevron-down'); // Toggle arrow direction
                        arrow.classList.toggle('fa-chevron-right');
                    }
                }
            } else {
                // Different page: Allow navigation and optionally handle submenu state
                // You can add any additional logic here if needed
            }
        });
    });
});
