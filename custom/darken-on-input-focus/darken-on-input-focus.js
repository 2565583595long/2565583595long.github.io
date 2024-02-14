document.addEventListener('DOMContentLoaded', function() {
    // 创建遮罩层元素并添加到body
    const overlay = document.createElement('div');
    overlay.className = 'overlay-darken';
    document.body.appendChild(overlay);

    const commentsContainer = document.getElementById('comments');

    // 显示或隐藏遮罩层的功能
    function toggleOverlay(on) {
        overlay.style.display = on ? 'block' : 'none';
    }

    // 为评论输入区域添加事件委托
    commentsContainer.addEventListener('focusin', function(event) {
        if (event.target.matches('#wl-nick, #wl-mail, #wl-link, #wl-edit')) {
            toggleOverlay(true);
        }
    });

    commentsContainer.addEventListener('focusout', function(event) {
        toggleOverlay(false);
    });
});