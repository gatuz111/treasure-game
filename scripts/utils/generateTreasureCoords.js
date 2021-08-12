import {generateRandomNumber} from "./generateRandomNumber.js";

const getNewTreasureCoords = ({width,heigth}, gap) => ({
    
    x: generateRandomNumber(width, gap),
    y: generateRandomNumber(heigth, gap)

});

export {getNewTreasureCoords};