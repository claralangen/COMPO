import {get_the_name} from "./dataDisplay";
import {circleProperties,generateCircle} from "./uiComponents/generateBgCircles";

var ui = {
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
