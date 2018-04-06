import {composers} from "../data";

export function generatePoster(){

    const posterContainer = document.querySelector('.posterContainer');

    for (let i = 0; i < 12; i++) {
        let poster = document.createElement('div');
        poster.classList.add('posterContainer-item');
        posterContainer.appendChild(poster);

    }

}

export function generatePosterText(){

    const posterContainerItem = document.querySelector('.posterContainer-item');

    let posterTitle = document.createElement('h3');
    let randomComposer = Math.floor(Math.random()* composers.length);
    let randomMovie = Math.floor(Math.random()* composers[randomComposer].movies.length);
    console.log(randomComposer);
    console.log(randomMovie);

    posterTitle.classList.add('posterContainer-title');
    posterTitle.textContent = composers[randomComposer].movies[randomMovie].name;
    posterContainerItem.appendChild(posterTitle);
}





