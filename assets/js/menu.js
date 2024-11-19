document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-menu');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSelector = button.getAttribute('data-target');
            const target = document.querySelector(targetSelector);
            const arrow = button.querySelector('.toggle-arrow');

            if (target) {
                target.classList.toggle('active');
                const isExpanded = target.classList.contains('active');
                button.setAttribute('aria-expanded', isExpanded);
                if (isExpanded) {
                    arrow.classList.remove('fa-chevron-right');
                    arrow.classList.add('fa-chevron-down');
                } else {
                    arrow.classList.remove('fa-chevron-down');
                    arrow.classList.add('fa-chevron-right');
                }
            }
        });
    });
});
