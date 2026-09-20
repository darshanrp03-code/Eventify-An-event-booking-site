const track = document.querySelector(".eventsTrack");

const cardWidth = 525;

let position = 0;


function moveRight() {

    position -= cardWidth;

    track.style.transform = `translateX(${position}px)`;


    if (Math.abs(position) >= cardWidth * 6) {

        position = 0;

        setTimeout(() => {

            track.style.transition = "none";
            track.style.transform = "translateX(0)";

            setTimeout(() => {
                track.style.transition = "transform 0.6s ease";
            }, 50);

        }, 600);
    }
}


function moveLeft() {

    if (position === 0) {

        track.style.transition = "none";

        position = -(cardWidth * 6);

        track.style.transform = `translateX(${position}px)`;

        setTimeout(() => {

            track.style.transition = "transform 0.6s ease";

            position += cardWidth;

            track.style.transform = `translateX(${position}px)`;

        }, 50);

    } else {

        position += cardWidth;

        track.style.transform = `translateX(${position}px)`;
    }
}


setInterval(() => {
    moveRight();
}, 1800);