function convertDegreesToRadians({ degrees }) {
    return degrees * Math.PI / 180;
}

// d = rΔσ
function calculateDistanceFromCentralAngle(radius, centralAngle) {
    return radius * centralAngle;
}

module.exports = {
    convertDegreesToRadians,
    calculateDistanceFromCentralAngle
}
