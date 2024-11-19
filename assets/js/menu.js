document.addEventListener('DOMContentLoaded', () => {
    const toggleLinks = document.querySelectorAll('.toggle-menu');

    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetSelector = link.getAttribute('data-target');
            const target = document.querySelector(targetSelector);

            if (target) {
                // Toggle submenu
                target.classList.toggle('active');
                const arrow = link.querySelector('.fa');
                if (arrow) {
                    arrow.classList.toggle('fa-chevron-right');
                    arrow.classList.toggle('fa-chevron-down');
                }
            }

            // Allow navigation even if submenu exists
            if (link.getAttribute('href') && link.getAttribute('href') !== '#') {
                window.location.href = link.getAttribute('href'); // Navigate to the target link
            }

            e.preventDefault(); // Prevent default only for toggling logic
        });
    });
});
