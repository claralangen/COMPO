import {composers} from "./data";

export function get_the_name (){
    for (let i = 0; i < composers.length; i++) {
        var composerName = composers[i].composerName;
        return composerName;
    }
}