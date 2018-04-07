import {composers} from "../data";

export function generatePosterContainer(){

    const posterContainer = document.querySelector('.posterContainer');

    for (let i = 0; i < 12; i++) {
        let poster = document.createElement('div');
        poster.classList.add('posterContainer-item');
        posterContainer.appendChild(poster);

    }

}

export function generatePosterContent(){

    const posterContainerItem = document.querySelector('.posterContainer-item');

    let posterTitle = document.createElement('h3');
    let randomComposer = Math.floor(Math.random()* composers.length);
    let randomMovie = Math.floor(Math.random()* composers[randomComposer].movies.length);

    posterTitle.classList.add('posterContainer-title');
    posterTitle.textContent = composers[randomComposer].movies[randomMovie].name;
    posterContainerItem.appendChild(posterTitle);
}





