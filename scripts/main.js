const hint = document.getElementById(`hint`);

const map = document.querySelector(`[alt="map"]`);

function getDistanceToTreasure({x: cX, y: cY}, {x: tX, y: tY}) {
    return Math.sqrt( (cX - tX)**2 + (cY - tY)**2)
};

// console.log(getDistanceToTreasure({x: 2, y: 35},{x: 51 , y: 234}));
