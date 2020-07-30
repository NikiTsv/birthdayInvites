
const PartnersRepository = require('./PartnersRepository');
const BirthdayInvites = require('./BirthdayInvites');
const InviteEligibilityCalculatorByGreatDistance = require('./InviteEligibilityCalculator');
const getCalcDistanceFn = require('./calculateDistance');
const awilix = require('awilix')

const createAppContainer = async () => {
  const container = awilix.createContainer();
  container.register({
    calculateDistance: awilix.asFunction(getCalcDistanceFn),
    partnersRepository: awilix.asClass(PartnersRepository),
    inviteEligibilityCalculator: awilix.asClass(InviteEligibilityCalculatorByGreatDistance),
    birthdayInvites: awilix.asClass(BirthdayInvites),
  });

  return container
};


module.exports = createAppContainer