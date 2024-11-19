document.addEventListener('DOMContentLoaded', () => {
    const toggleLinks = document.querySelectorAll('.toggle-menu');

    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const target = document.querySelector(link.getAttribute('data-target')); // Get the submenu
            const arrow = link.querySelector('.fa'); // Get the arrow icon

            if (target) {
                target.classList.toggle('active'); // Toggle the "active" class on the submenu
                if (arrow) {
                    arrow.classList.toggle('expanded'); // Rotate the arrow
                }
            }
        });
    });
});
