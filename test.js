const filenamePadder = require("./index");

const fs = require("fs");
const fse = require('fs-extra')
const pattern = "track-(?var)-music.mp3";
const lengthPad = 4;
const chartPad  = '0';
const testPath = "test/test-directory/";

let testFiles = ["track-1-music.mp3","track-2-music.mp3","track-11-music.mp3", "track-101-music.mp3", "track-9-music.mp3","track-90-music.mp3", "wao-other-file-no-match.mp3"];
let testFilesExpected = ["track-0001-music.mp3","track-0002-music.mp3","track-0009-music.mp3","track-0011-music.mp3","track-0090-music.mp3","track-0101-music.mp3", "wao-other-file-no-match.mp3" ];


function beforeTest(){
    if (fs.existsSync(testPath)) {
        fse.removeSync(testPath);
    }
    fs.mkdirSync(testPath);
    for(file of testFiles){
        fs.writeFileSync(testPath+file);
    }
}


(function test(folder, pattern, lengthPad, chartPad){
    try {
        //creating test folder and files
        beforeTest();
        let result = filenamePadder.padRenameSync(folder, pattern, lengthPad, chartPad);

        //reading again from the folder, to test with the expected result.
        let files = fs.readdirSync(testPath);
        Array.isArray(result) && JSON.stringify(files) === JSON.stringify(testFilesExpected) ? 
                                                            console.log("Test Success") : console.log("Test Fails");
    } catch (error) {
        console.log("Test Fails");
    }    
})(testPath, pattern, lengthPad, chartPad);