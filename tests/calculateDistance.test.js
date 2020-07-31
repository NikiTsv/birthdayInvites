const calculateDistance = require('../InvitationEligibility/calculateDistance')();
const baseLocation = require('../config').officeLocation;

test(`calculateDistance should return the right distance between two points`, () => {
    const testLocation = {lat: 42.2120589, long: 24.1118188};
    const expectedDistance = 80.28025021927516;
    expect(calculateDistance(testLocation.lat, testLocation.long, baseLocation.lat, baseLocation.long)).toBe(expectedDistance);
})

test(`calculateDistance should return 0 when the locations are the same`, () => {
    const testLocation = baseLocation;
    const expectedDistance = 0;
    expect(calculateDistance(testLocation.lat, testLocation.long, baseLocation.lat, baseLocation.long)).toBe(expectedDistance);
})

// this actually found an error in the code with the 0 location (Null Island) where meridian and equator cross
test(`calculateDistance should return 0 when the locations are 0 lat and long`, () => {
    const testLocation = {lat: 0, long: 0};
    const expectedDistance = 0;
    expect(calculateDistance(testLocation.lat, testLocation.long, testLocation.lat, testLocation.long)).toBe(expectedDistance);
})

test(`calculateDistance should throw when given higher than valid latitude`, () => {
    const testLocation = {lat: 91, long: 0};
    expect(() => {
        calculateDistance(testLocation.lat, testLocation.long, testLocation.lat, testLocation.long);
    }).toThrow();
})

test(`calculateDistance should throw when given lower than valid latitude`, () => {
    const testLocation = {lat: -91, long: 0};
    expect(() => {
        calculateDistance(testLocation.lat, testLocation.long, testLocation.lat, testLocation.long);
    }).toThrow();
})

test(`calculateDistance should throw when higher than valid longitude`, () => {
    const testLocation = {lat: 0, long: 181};
    expect(() => {
        calculateDistance(testLocation.lat, testLocation.long, testLocation.lat, testLocation.long);
    }).toThrow();
})

test(`calculateDistance should throw when lower than valid longitude`, () => {
    const testLocation = {lat: 0, long: -181};
    expect(() => {
        calculateDistance(testLocation.lat, testLocation.long, testLocation.lat, testLocation.long);
    }).toThrow();
})