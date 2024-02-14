document.addEventListener('DOMContentLoaded', function() {
    const bodyDarkenClass = 'body-darken'; 

    function toggleBodyDarken(on) {
        if (on) {
            document.body.classList.add(bodyDarkenClass);
        } else {
            document.body.classList.remove(bodyDarkenClass);
        }
    }

    // 使用事件委托
    document.getElementById('comments').addEventListener('focusin', function(event) {
        if (event.target.matches('#wl-nick, #wl-mail, #wl-link, #wl-edit')) {
            toggleBodyDarken(true);
        }
    });

    document.getElementById('comments').addEventListener('focusout', function(event) {
        if (event.target.matches('#wl-nick, #wl-mail, #wl-link, #wl-edit')) {
            toggleBodyDarken(false);
        }
    });
});