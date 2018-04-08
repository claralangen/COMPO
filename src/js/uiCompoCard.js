import {displayBackground,getRuleWithSelector} from "./uiComponents/displayCoverHeader";
import {generatePosterContent} from "./uiComponents/generatePoster";
import {generatePosterContainer} from "./uiComponents/generatePosterCompo";


getRuleWithSelector();
displayBackground();
generatePosterContainer();
generatePosterContent();