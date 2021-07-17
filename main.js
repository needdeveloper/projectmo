window.addEventListener('load', function() {
    fixEmbedHeight();
    createCountUps();
    a();
});

window.addEventListener('resize', function() {
    fixEmbedHeight();
});

function fixEmbedHeight() {
    document.querySelectorAll('.streamable-embeds iframe, .streamable-embeds .clip-placeholder').forEach(function (embed) {
        embed.style.height = (Math.ceil(embed.clientWidth * 9 / 16)) + 'px';
    });
}

function createCountUps() {
    var elements = document.querySelectorAll('.countup');
    setInterval(function() {
        elements.forEach(function (el) {
            var diff = Date.now() - new Date(parseInt(el.attributes['data-timestamp'].value));
            el.innerHTML = formatDateDif(diff);
        }, 500);
    })
}

function padNumber(number) {
    number = number + '';
    if (number.length === 1) {
        return '0' + number;
    }
    return number;
}


function a() {
    var elem = document.getElementById('musicplay');
    var audio = document.getElementById('music');
    var playing = false;
    elem.addEventListener('click', function () {
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        playing = !playing;
    });
}
