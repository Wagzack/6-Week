(function (window, documnet) {
    'use strict';

    const $toggles = documnet.querySelectorAll('.toggle');
    const $toggleBtn = documnet.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElemnets();
    });

    window.addEventListener('resize', function(){
        if(window.innerWidth > 1024 ) {
            offElements();
        }
    });

    function toggleElemnets() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)