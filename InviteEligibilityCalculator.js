const { officeLocation, invitationMinDistanceKm }  = require('./config');
const calculateDistance = require('./calculateDistance');

class InviteEligibilityCalculatorByGreatDistance {
    isEligible(partnerLat, partnerLong, baseLat, baseLong){
        if(calculateDistance(partnerLat, partnerLong, baseLat, baseLong) <= invitationMinDistanceKm){
            return true;
        }
    }
}