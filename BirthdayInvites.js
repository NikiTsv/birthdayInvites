const { officeLocation }  = require('./config');

class BirthdayInvites{
    constructor(dependencies){
        this.partnersRepository = dependencies.partnersRepository;
        this.inviteEligibilityCalculator = dependencies.inviteEligibilityCalculator;
    }

    async getBirthdayGuests(){
        return new Promise(async (resolve, reject) => {
            try{
                const partners = await this.partnersRepository.getAll();
                const eligibleForInvite = [];

                partners.forEach(p=>{
                    if(this.inviteEligibilityCalculator.isEligible(p.latitude, p.longitude, officeLocation.lat, officeLocation.long)){
                        eligibleForInvite.push(p);
                    }
                })

                resolve(eligibleForInvite.sort((a, b) => a.partner_id - b.partner_id));

            }catch(err){
                reject(err)
            }
        });

    }
}

module.exports = BirthdayInvites