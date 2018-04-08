const recIntoCircle = document.querySelector('.navRec');
const recs = document.querySelectorAll('.navRec-item');
const posterContainer = document.querySelector('.posterContainer');
const filter = document.querySelector('.filter');
const filterBy = document.querySelectorAll('.filter-by');

recIntoCircle.addEventListener('click',function () {
    posterContainer.classList.toggle('is-hidden');
    for (let i = 0; i < recs.length; i++) {
        recs[i].classList.toggle('navRecRadius');
    }
});

filter.addEventListener('click',function(){
    for (let i = 0; i < filterBy.length; i++) {
        filterBy[i].classList.toggle('active');
    }
});

