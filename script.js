const NEWCOLORBUTTON = document.getElementById('newColorButton');
const HEXARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

NEWCOLORBUTTON.addEventListener('click', function() {
    let randomColor = "";

    for (let i = 0; i<6; i++) {
        randomColor += HEXARRAY[Math.floor(Math.random()*HEXARRAY.length)];
    }

    document.body.style.backgroundColor = `#${randomColor}`;
});
