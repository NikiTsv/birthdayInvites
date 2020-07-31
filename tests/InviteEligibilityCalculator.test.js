const InviteEligibilityCalculator = require('../InvitationEligibility/InviteEligibilityCalculator');
const minDistance = require('../config').minDistance;

test(`InviteEligibilityCalculator should return false when calculated distance is greater than min distance required (${minDistance})`, () => {
    const dependencies = {
        calculateDistance: () => 101
    }

    const inviteEligibilityCalculator = new InviteEligibilityCalculator(dependencies);
    inviteEligibilityCalculator.isEligible(50, 50, 50, 50);
})

test(`InviteEligibilityCalculator should return true when calculated distance is less than min distance required (${minDistance})`, () => {
    const dependencies = {
        calculateDistance: () => 80
    }

    const inviteEligibilityCalculator = new InviteEligibilityCalculator(dependencies);
    inviteEligibilityCalculator.isEligible(50, 50, 50, 50);
})