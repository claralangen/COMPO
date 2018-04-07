import {get_the_name} from "./dataDisplay";
import {circleProperties,generateCircle} from "./uiComponents/generateBgCircles";
import {generatePoster} from "./uiComponents/generatePoster";


const ui = {
    circles: document.querySelectorAll('.circle'),
    composerName: document.querySelectorAll('.composerName')
};

for (let i = 0; i < ui.circles.length; i++) {
    ui.composerName[i].innerHTML = get_the_name();
    ui.circles[i].addEventListener('click',function () {
        console.log('ça marche');
    });
}

generateCircle();
circleProperties();
<<<<<<< HEAD:src/js/uiIndex.js

=======
generatePoster();
>>>>>>> 34a7c8a34715423c864f3e1ccf1508ac3b2bc56e:src/js/ui.js
