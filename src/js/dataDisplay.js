import {composers} from "./data";

export function get_the_name (){
    console.log('k');
    for (let i = 0; i < composers.length; i++) {
        let composerName = composers[i].composerName;
        return composerName;
    }
}