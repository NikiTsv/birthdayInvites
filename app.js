const createAppContainer = require('./container')

async function start(){
    try{
        const container = await createAppContainer();
        const birthdayInvites = container.resolve('birthdayInvites');
        const guests = await birthdayInvites.getBirthdayGuests();
        console.log('Eligible partners', guests);
        console.log(`Total guests found ${guests.length}`)

    }catch(err){
        console.error(new Date(), err)
    }
}

setTimeout(() => {
    start()
}, 5*1000);