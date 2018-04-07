import {composers} from "../data";

export function displayBackground(){
    const backgroundImg = document.querySelector('.header');

    backgroundImg.style.background = 'black';
    //backgroundImg.style.background = 'url('+ composers.coverPicture +')';
}
