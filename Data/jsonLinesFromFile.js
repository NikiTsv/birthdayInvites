const fs = require('fs');
const readline = require('readline');

async function jsonLinesFromFile(pathToFile) {
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

module.exports = () => jsonLinesFromFile;