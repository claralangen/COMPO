import {composers} from "../data";

export function displayBackground(){
    const backgroundImg = document.querySelector('.headerSection');
    const coverTitle = document.querySelector('.coverTitle');
    const coverPreBio = document.querySelector('.preBiography');
    const coverBio = document.querySelector('.biography');


   backgroundImg.style.background = 'url("COMPO/src/assets/imgs/cover/JW.png") no-repeat';

    coverTitle.innerHTML = composers[0].composerName;
    coverPreBio.innerHTML = composers[0].preBiography;
    coverBio.innerHTML = composers[0].biography;

}
