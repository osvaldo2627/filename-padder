

//pattern must be on the way of "file-(?).json"
module.exports = {

    /**
    * @param {string} text to be padded .
    * @param {string}  pattern string pattern for example file-(?varToPad).json
    * @param {int}  padLenght expected lengh of the string after pad.
    * @param {string}  padString character or characters to pad the string
    * @param {boolean}  padRight apply padding to the right, defualt to false
    * 
    */
    padString:(text, pattern, padLenght=5, padString ='0', padRight=false )=>{
        let regPattern = pattern.replace('(?var)', "(\\w*)");
        regPattern =  new RegExp(regPattern);

        let result = regPattern.exec(text);
        if (Array.isArray(result) && result[1]){
            let  padRes = padRight ? result[1].padEnd(padLenght, padString) : result[1].padStart(padLenght, padString);

            return pattern.replace('(?var)', padRes);
        }
        return null;
    }

};

//require('make-runnable');