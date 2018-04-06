const recIntoCircle = document.querySelector('.navRec');
const recs = document.querySelectorAll('.navRec-item');

recIntoCircle.addEventListener('click',function () {
    for (let i = 0; i < recs.length; i++) {
        recs[i].classList.toggle('navRecRadius');
    }
});