document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.memory');
    const totalSections = sections.length;
    
    function onScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const maxScrollHeight = document.body.scrollHeight - windowHeight;
        const scrollFraction = scrollPosition / maxScrollHeight; // 计算滚动进度

        sections.forEach((section, index) => {
            // 计算当前 section 应该显示的透明度
            const start = (index / totalSections);
            const end = ((index + 1) / totalSections);
            
            if (scrollFraction >= start && scrollFraction < end) {
                section.style.opacity = 1; // 显示当前 section
            } else if (scrollFraction >= end) {
                section.style.opacity = 0; // 隐藏当前 section
            } else {
                section.style.opacity = 0; // 隐藏当前 section
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();  // 初始化时更新 opacity
});
