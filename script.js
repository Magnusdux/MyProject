function updateClock() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Now", "Dec"
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const today = new Date();

    const day = today.getDate();
    const month = monthNames[today.getMonth()];
    const dayName = dayNames[today.getDay()];
    const time = `${(today.getHours() < 10 ? '0' : '') + today.getHours()}:${(today.getMinutes() < 10 ? '0' : '') + today.getMinutes()}`;

    document.getElementById('day-0').innerHTML = day;
    document.getElementById('month-0').innerHTML = month;
    document.getElementById('date-0').innerHTML = dayName;
    document.getElementById('hour-0').innerHTML = time;

    setTimeout(updateClock, 1000);
}

function pickTheWallpaper(elemId) {
    const element = document.getElementById(elemId);
    document.querySelector('.wrapper__body').style.setProperty("--custom-icon", `url(${element.src})`);

    element.classList.add('block-img-content-setting-window-body-wrapper__item--selected');

    checkSelectedItem(elemId);

}

function setCustomAttribute() {
    const wallpaperItems = document.querySelectorAll('.block-img-content-setting-window-body-wrapper__item img');

    Array.from(wallpaperItems).forEach((item, index) => {
        item.setAttribute('id', 'wallpaper-' + index);
        item.setAttribute('onclick', `pickTheWallpaper('${item.getAttribute('id')}')`);
    })
}


function checkSelectedItem(elemId) {
    const wallpaperItems = document.querySelectorAll('.block-img-content-setting-window-body-wrapper__item img');

    Array.from(wallpaperItems).forEach(item => {
        if (item.getAttribute('id') !== elemId) item.classList.remove('block-img-content-setting-window-body-wrapper__item--selected');
    })
}

function stabilazeOpeningWindow() {
    document.querySelector('.setting-window-body-wrapper__content').classList.toggle('setting-window-body-wrapper__content--close');
}


document.querySelector('.wrapper__body').style.setProperty("--custom-icon", 'url(https://source.unsplash.com/89PFnHKg8HE/7952x5304)');

document.getElementById('setting-app-0').addEventListener('click', function() {
    document.getElementById('setting-window-0').classList.toggle('body-wrapper__setting-window--close');

    if (document.querySelector('.setting-window-body-wrapper__content').classList.contains('setting-window-body-wrapper__content--close')) {
        setTimeout(stabilazeOpeningWindow, 200);
    } else {
        document.querySelector('.setting-window-body-wrapper__content').classList.add('setting-window-body-wrapper__content--close');
    }
});


setCustomAttribute();
updateClock();