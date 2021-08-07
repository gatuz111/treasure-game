const hint = document.getElementById(`hint`);

const map = document.querySelector(`[alt="map"]`);

const ganerateRandomNumber = (size, gap) => Math.floor( Math.random() * (size - (gap*2))) + gap

const getNewTreasureCoords = ({width,heigth}, gap) => ({
    
        x: generateRandomNumber(width, gap),
        y: generateRandomNumber(heigth, gap)
    
});

