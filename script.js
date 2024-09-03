document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.memory');
    let currentIndex = 0;

    function showSection(index) {
        if (index < 0 || index >= sections.length) return;
        
        sections[currentIndex].classList.remove('active');
        sections[currentIndex].classList.add('exit');
        
        sections[index].classList.remove('exit');
        sections[index].classList.add('active');
        
        currentIndex = index;
    }

    function onScroll() {
        const currentScroll = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            if (currentScroll >= sectionTop - windowHeight / 2) {
                showSection(index);
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    showSection(currentIndex);
});