import {composers} from "../data";

export function generatePosterContainer(){

    const posterContainer = document.querySelector('.posterContainer');

    for (let i = 0; i < 12; i++) {
        let poster = document.createElement('div');
        poster.classList.add('posterContainer-item');
        posterContainer.appendChild(poster);

    }

}

export function generatePosterContent() {

    const posterContainerItem = document.querySelectorAll('.posterContainer-item');

    for (let i = 0; i < posterContainerItem.length; i++) {

        let posterImg = document.createElement('div');
        let posterTitle = document.createElement('h3');
        let posterDate = document.createElement('p');

        let randomComposer = Math.floor(Math.random() * composers.length);
        let randomMovie = Math.floor(Math.random() * composers[randomComposer].movies.length);

        posterImg.classList.add('posterContainer-img');
        posterContainerItem[i].appendChild(posterImg);

        posterTitle.textContent = composers[randomComposer].movies[randomMovie].name;
        posterTitle.classList.add('posterContainer-title');
        posterContainerItem[i].appendChild(posterTitle);

        posterDate.textContent = composers[randomComposer].movies[randomMovie].date;
        posterDate.classList.add('posterContainer-date');
        posterContainerItem[i].appendChild(posterDate);
    }
}




