document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay-darken');
    const commentsContainer = document.getElementById('comments');

    // 显示或隐藏遮罩层
    function toggleOverlay(display) {
        overlay.style.display = display ? 'block' : 'none';
    }

    // 监听评论区内的聚焦事件
    commentsContainer.addEventListener('focusin', function (event) {
        toggleOverlay(true);
    });

    // 监听评论区内的失焦事件
    commentsContainer.addEventListener('focusout', function (event) {
        toggleOverlay(false);
    });
});