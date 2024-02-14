document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay-darken';
    document.body.appendChild(overlay);

    const commentsContainer = document.getElementById('comments');

    function toggleOverlay(on) {
        overlay.style.display = on ? 'block' : 'none';
    }

    commentsContainer.addEventListener('focusin', function(event) {
        // 检查事件的目标是否为我们关心的输入框
        if (event.target.matches('#wl-nick, #wl-mail, #wl-link, #wl-edit')) {
            toggleOverlay(true); // 显示遮罩层
        }
    });

    commentsContainer.addEventListener('focusout', function(event) {
        toggleOverlay(false); // 隐藏遮罩层
    });
});