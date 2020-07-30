function convertDegreesToRadians({ degrees }) {
    return degrees * Math.PI / 180;
}

function absoluteDifference(la1, la2){
    return Math.abs(La1 - La2);
}

// d = rΔσ
function calculateDistanceFromCentralAngle(radius, centralAngle) {
    return radius * centralAngle;
}

module.exports = {
    convertDegreesToRadians,
    absoluteDifference,
    calculateDistanceFromCentralAngle
}
