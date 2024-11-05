document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.memory');
    const totalSections = sections.length;
    const audio = document.getElementById('bgm-audio');
    let audioPlayed = false; // 用于记录音频是否已播放

    function playAudio() {
        audio.play().then(() => {
            audioPlayed = true; // 设置为已播放
        }).catch(error => {
            console.log("等待用户进一步交互以播放音频:", error);
        });
    }

    // 监听 WeixinJSBridgeReady 事件，确保微信浏览器中可以自动播放
    document.addEventListener("WeixinJSBridgeReady", playAudio, false);

    function onScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const maxScrollHeight = document.body.scrollHeight - windowHeight;
        const scrollFraction = scrollPosition / maxScrollHeight; // 计算滚动进度

        sections.forEach((section, index) => {
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

        // 播放音频
        if (!audioPlayed && scrollFraction > 0) {
            playAudio(); // 尝试播放音频
        }

        // 保持最后一个 section 可见
        if (scrollFraction > 1 - 1 / maxScrollHeight) {
            sections[sections.length - 1].style.opacity = 1;
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();  // 初始化时更新 opacity
});
