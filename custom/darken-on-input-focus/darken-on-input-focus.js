document.addEventListener('DOMContentLoaded', function() {
    const targetInputSelectors = ['#wl-nick', '#wl-mail', '#wl-link', '#wl-edit']; // 更新为特定的输入框选项
    const bodyDarkenClass = 'body-darken'; // 当输入框聚焦时，给body添加的class

    // 功能：为页面体添加一个遮罩层的样式
    function toggleBodyDarken(on) {
        if (on) {
            document.body.classList.add(bodyDarkenClass);
        } else {
            document.body.classList.remove(bodyDarkenClass);
        }
    }

    // 为所有目标输入框添加事件监听器
    targetInputSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(inputElement => {
            inputElement.addEventListener('focus', () => toggleBodyDarken(true));
            inputElement.addEventListener('blur', () => toggleBodyDarken(false));
        });
    });
});