const filename = 'partners.txt';
class PartnerRepository {
    constructor(dependencies){
        this.jsonLinesFromFile = dependencies.jsonLinesFromFile;
    }

    async getAll() {
        return new Promise(async (resolve, reject) => {
            try{
                const partners = await this.jsonLinesFromFile(filename);
                resolve(partners);
            }catch(error){
                console.error(error);
                reject(`There was a problem with reading the database. Please check ${filename} contents`);
            }
        })
    }
}



module.exports = PartnerRepository