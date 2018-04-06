export function generateCircle() {
    const circleContainer = document.querySelector('.bgCircles');

    for (let i = 0; i < 12; i++) {
        let circles = document.createElement('div');
        circles.classList.add('circleItem');
        circleContainer.appendChild(circles);
    }
}

export function circleProperties() {
    const circle = document.querySelectorAll('.circleItem');
    let width = 1500;
    let height = 1500;
    let red = 229;
    let blue = 63;
    for (let i = 0; i < circle.length; i++) {
        console.log(width, height);
        circle[i].style.height = height + 'px';
        circle[i].style.width = width + 'px';
        circle[i].style.background = 'rgb(' + red + ',9,' + blue + ')';
        red -= 15;
        blue -= 4;
        width = width - (155 - (i / 0.18));
        height = height - (155 - (i / 0.18));
    }
}

