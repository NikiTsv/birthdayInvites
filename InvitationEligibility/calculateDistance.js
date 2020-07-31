const utils = require('./calculateDistance.utils');
const EARTH_RADIUS = 6371;   // in kilometers

/**
     * Following the algorithm documented here (first formula):
     * https://en.wikipedia.org/wiki/Great-circle_distance
     *
     * @param lat1 latitude of point 1
     * @param long1 longitude of point 1
     * @param lat2 latitude of point 2
     * @param long2 longitude of point 2
**/

// Δ λ σ Φ
function calculateDistance(lat1, long1, lat2, long2) {
    validateInput(lat1, long1, lat2, long2);

    const { sin, cos, acos, abs } = Math;
    // λ1
    const la1 = utils.convertDegreesToRadians({ degrees: long1 });
    // Φ1
    const fi1 = utils.convertDegreesToRadians({ degrees: lat1 });
    // λ2
    const la2 = utils.convertDegreesToRadians({ degrees: long2 });
    // Φ2
    const fi2 = utils.convertDegreesToRadians({ degrees: lat2 });
    // Δλ - absolute difference λ1 - λ2
    const dla = abs(la1 - la2);
    // Δσ = acos(sinΦ1 * sinΦ2 + cosΦ1 * cosΦ2 * cosΔλ)
    const dsigma = acos(sin(fi1) * sin(fi2) + cos(fi1) * cos(fi2) * cos(dla));

    const distance = utils.calculateDistanceFromCentralAngle(EARTH_RADIUS, dsigma);
    return distance;
}

function validateInput(lat1, long1, lat2, long2){

    validateForNullInput(lat1, long1, lat2, long2);
    validateInputIsOfTypeNumber(lat1, long1, lat2, long2);
    validateLat(lat1);
    validateLat(lat2);
    validateLong(long1);
    validateLong(long2);

}

function validateForNullInput(lat1, long1, lat2, long2){
    if(!lat1 == null || !long2 == null || !lat2 == null || !long2 == null){
        throw new Error('Calculate distance validation error - latitude and longitude must be numbers');
    }
}

function validateInputIsOfTypeNumber(lat1, long1, lat2, long2){
    if(isNaN(lat1) || isNaN(long1) || isNaN(lat2) || isNaN(long2)){
        throw new Error('Calculate distance validation error - input must be numbers');
    }
}

function validateLat(lat){
    if(lat < -90 || lat > 90){
        throw new Error(`Calculate distance - invalid latitude ${lat}`);
    }
}

function validateLong(long){
    if(long < -180 || long > 180){
        throw new Error(`Calculate distance - invalid longitude ${long}`);
    }
}

getCalcDistanceFn = () => calculateDistance;

module.exports = getCalcDistanceFn;