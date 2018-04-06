import {composers} from "./data";

export function get_the_name (){
    console.log('k');
    for (var i = 0; i < composers.length; i++) {
        var composerName = composers[i].composerName;
        return composerName;
    }
}