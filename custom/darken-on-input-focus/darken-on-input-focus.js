document.addEventListener('DOMContentLoaded', function() {
    // 检查页面上是否已经存在遮罩层，否则创建它
    let overlay = document.querySelector('.overlay-darken');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay-darken';
        document.body.appendChild(overlay);
    }

    // 为评论输入框添加 focusin 和 focusout 事件监听器
    const commentsContainer = document.getElementById('comments');
    function toggleOverlay(display) { 
        overlay.style.display = display ? 'block' : 'none'; // 显示或隐藏遮罩层
    }

    commentsContainer.addEventListener('focusin', () => toggleOverlay(true));
    commentsContainer.addEventListener('focusout', () => toggleOverlay(false));
});