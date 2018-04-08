import {composers} from "../data";

export function getRuleWithSelector(selector) {
    let numSheets = document.styleSheets.length,
        numRules,
        sheetIndex,
        ruleIndex;
    for (sheetIndex = 0; sheetIndex < numSheets; sheetIndex += 1) {
        numRules = document.styleSheets[sheetIndex].cssRules.length;
        for (ruleIndex = 0; ruleIndex < numRules; ruleIndex += 1) {
            if (document.styleSheets[sheetIndex].cssRules[ruleIndex].selectorText === selector) {
                return document.styleSheets[sheetIndex].cssRules[ruleIndex];
            }
        }
    }
}



export function displayBackground(){
    const afterSlidingTagRule = getRuleWithSelector('.headerSection::before');
    const coverTitle = document.querySelector('.coverTitle');
    const coverPreBio = document.querySelector('.preBiography');
    const coverBio = document.querySelector('.biography');


    window.addEventListener('DOMContentLoaded', function() {
        afterSlidingTagRule.style.background = `url("${composers[0].coverPicture}") no-repeat `;
        afterSlidingTagRule.style.backgroundSize = `cover`;
    });


    coverTitle.innerHTML = composers[0].composerName;
    coverPreBio.innerHTML = composers[0].preBiography;
    coverBio.innerHTML = composers[0].biography;

}
