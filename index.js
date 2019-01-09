
const padder = require("./padder");
const fs = require("fs");

module.exports = function init (folder, pattern, padLenght=5, padString ='0', padRight=false){
    
    try {
        let files = fs.readdirSync(folder);
        let separator = process.platform === 'win32' ? '\\' : '/';

        //mapping array to get the padded version of the current name
        let arrayReplace = files.map((file)=>{
            let paddedName = padder.padString( file, pattern, 6, '0');
            return { currentName : file, newName : paddedName }
        })   

        //looping to rename the file for the padded version        
        for (let item of arrayReplace){
            
            fs.rename(`${folder}${separator}${item.currentName}`, `${folder}${separator}${item.newName}` ,  (err)=> {
                if ( err ) console.log('ERROR: ' + err);
                console.log(`file renamed from ${item.currentName} to ${item.newName}`);
            });
        }
       
    } catch (error) {
        console.log('ERROR: ' + error);
    }
    
}("D:\\Development\\padrenamer-file\\test\\test-directory", "file-(?var).json" );

//require('make-runnable');

