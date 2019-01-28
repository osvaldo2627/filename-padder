
const stringPadder = require("string-pad-pattern");
const fs = require("fs");
const path = require("path");

/**
 * 
 * @param {string} folder target folder to apply padding to the files that match the patter
 * @param {string} pattern patter to search and rename, rember use (?var) on the target section
 * @param {int} padLenght the lenght of the padded section after padding
 * @param {string} padString the characters or set of that should be use for the padding, defualt '0'
 * @param {boolean} padRight boolean value 
 */
module.exports = {

    padRenameSync(folder, pattern, padLenght = 5, padString = '0', padRight = false) {

        try {
            folder = path.normalize(folder);
            let files = fs.readdirSync(folder);
            let separator = process.platform === 'win32' ? '\\' : '/';

            //mapping array to get the padded version of the current name
            let arrayReplace = files.map((file) => {
                let paddedName = stringPadder.padPattern(file, pattern, padLenght, padString, padRight);
                return { currentName: file, newName: paddedName }
            })

            //looping to rename the file for the padded version        
            for (let item of arrayReplace) {
                try {
                    fs.renameSync(`${folder}${separator}${item.currentName}`, `${folder}${separator}${item.newName}`)
                } catch (error) {
                    console.log(`file renamed from ${item.currentName} to ${item.newName}`);
                }
            }
            return arrayReplace;
        } catch (error) {
            console.log('ERROR: ' + error);
            return null;
        }
    }
}

