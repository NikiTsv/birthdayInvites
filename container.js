
const PartnersRepository = require('./Data/PartnersRepository');
const getJsonLinesFromFileFn = require('./Data/jsonLinesFromFile');
const BirthdayInvites = require('./BirthdayInvites');
const InviteEligibilityCalculatorByGreatDistance = require('./InvitationEligibility/InviteEligibilityCalculator');
const getCalcDistanceFn = require('./InvitationEligibility/calculateDistance');

const awilix = require('awilix')

const createAppContainer = async () => {
  const container = awilix.createContainer();
  container.register({
    calculateDistance: awilix.asFunction(getCalcDistanceFn),
    jsonLinesFromFile: awilix.asFunction(getJsonLinesFromFileFn),
    partnersRepository: awilix.asClass(PartnersRepository),
    inviteEligibilityCalculator: awilix.asClass(InviteEligibilityCalculatorByGreatDistance),
    birthdayInvites: awilix.asClass(BirthdayInvites),
  });

  return container
};


module.exports = createAppContainer