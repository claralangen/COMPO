const recIntoCircle = document.querySelector('.navRec');
const recs = document.querySelectorAll('.navRec-item');
const posterContainer = document.querySelector('.posterContainer');

recIntoCircle.addEventListener('click',function () {
    posterContainer.classList.toggle('is-hidden');
    console.log(posterContainer)
    for (let i = 0; i < recs.length; i++) {
        recs[i].classList.toggle('navRecRadius');
    }
});