const { officeLocation, invitationMinDistanceKm }  = require('./config');
class InviteEligibilityCalculatorByGreatDistance {
    constructor(dependencies){
        this.calculateDistance = dependencies.calculateDistance;
    }

    isEligible(partnerLat, partnerLong, baseLat, baseLong){

        if(this.calculateDistance(partnerLat, partnerLong, baseLat, baseLong) <= invitationMinDistanceKm){
            return true;
        }
        return false;
    }
}


module.exports = InviteEligibilityCalculatorByGreatDistance