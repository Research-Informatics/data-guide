document.addEventListener('DOMContentLoaded', () => {
    const toggleLinks = document.querySelectorAll('.toggle-menu');

    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const target = document.querySelector(link.getAttribute('data-target'));
            const arrow = link.querySelector('.toggle-arrow'); // Select the arrow span

            if (target) {
                target.classList.toggle('active'); // Toggle the "active" class
                if (arrow) {
                    arrow.classList.toggle('expanded'); // Toggle arrow rotation
                }
            }
        });
    });
});
