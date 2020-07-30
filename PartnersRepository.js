const fs = require('fs');
const readline = require('readline');

class PartnerRepository {
    async getAll() {
        return new Promise((resolve, reject) => {
            try{
                const partners = await _processLineByLine('partners.txt');
                resolve(partners);
            }catch(error){
                console.error(error);
                reject('There was a problem with reading the database.');
            }
        })
    }
}

async function _processLineByLine(pathToFile) {
    const results = [];
    const fileStream = fs.createReadStream(pathToFile);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        results.push(JSON.parse(line))
    }

    return results;
}