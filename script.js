window.onload = () => {
    function swipeFunc() {
        getLeft = Number(photos.style.left.match(/\d+/ig)[0]);
        switch (getLeft) {
            case 1000: onePick.checked = true; break;
            case 0: twoPick.checked = true; break;
            case 500: threePick.checked = true; break;
            // Ибо потому что :$
        }
        if (getLeft !== 1000) {
            photos.style.left = -getLeft - 500 + 'px';
        } else {
            photos.style.left = '0px';
        }
    }
    let swipe = setInterval(swipeFunc, 3 * 1000),
        firstCord = null,
        lastCord = null;

    const onePick = document.getElementById('onePick'),
        twoPick = document.getElementById('twoPick'),
        threePick = document.getElementById('threePick'),
        photos = document.getElementById('photos');
    photos.style.left = '0px';
    let getLeft = Number(photos.style.left.match(/\d+/ig)[0]);
    onePick.onchange = () => {
        photos.style.left = '0px';
        clearInterval(swipe);
        swipe = setInterval(swipeFunc, 3 * 1000);
    }

    twoPick.onchange = () => {
        photos.style.left = '-500px';
        clearInterval(swipe);
        swipe = setInterval(swipeFunc, 3 * 1000);
    }

    threePick.onchange = () => {
        photos.style.left = '-1000px';
        clearInterval(swipe);
        swipe = setInterval(swipeFunc, 3 * 1000);
    }
}