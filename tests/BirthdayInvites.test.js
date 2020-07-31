const BirthdayInvites = require('../BirthdayInvites');
const minDistance = require('../config').minDistance;

const dependencies = {
    partnersRepository: {
        getAll: async () =>  [
            {"latitude": "42.1268151", "partner_id": 2, "name": "Devon Mac", "longitude": "24.7234766"},
            {"latitude": "42.7034111", "partner_id": 1, "name": "Jamelia Waller", "longitude": "23.4862259"}
        ]
    },
    inviteEligibilityCalculator: {
        isEligible: () => true
    }
}

test(`BirthdayInvites should return results ordered by partner_id ascending`, async () => {

    const birthdayInvites = new BirthdayInvites(dependencies);
    const guests = await birthdayInvites.getBirthdayGuests();
    expect(guests[0].partner_id < guests[1].partner_id).toBe(true);
})