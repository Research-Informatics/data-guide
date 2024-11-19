document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default behavior
            const target = document.querySelector(button.getAttribute('data-target'));
            const arrow = button.querySelector('.fa-chevron-right');

            if (target) {
                target.classList.toggle('active'); // Toggle the "active" class on the submenu
                if (arrow) {
                    arrow.classList.toggle('fa-chevron-down'); // Toggle arrow direction
                    arrow.classList.toggle('fa-chevron-right');
                }
            }
        });
    });
});
