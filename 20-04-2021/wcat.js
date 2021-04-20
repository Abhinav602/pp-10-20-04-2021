//  input -> ??
let fs = require("fs");
let input = process.argv.slice(2);

console.log("input", input);

let options = [];
let filePaths = [];

for (let i = 0; i < input.length; i++) {
    // first character js string 
    if (input[i] == "-s" || input[i] == "-b" || input[i] == "-n") {
        options.push(input[i]);
    } else {
        filePaths.push(input[i]);
    }
}

// console.log("options", options);
// console.log("filePath", filePaths);
for (let i = 0; i < filePaths.length; i++) {
    let isFilePresent = fs.existsSync(filePaths[i]);
    if (isFilePresent == false) {
        console.log("filepath", filePaths[i], "does not exist. Kindly check path");
        return;
    }
}

let totalContent = "";
for (let i = 0; i < filePaths.length; i++) {
    let contentOFCurrent = fs.readFileSync(filePaths[i]);
    totalContent += contentOFCurrent + "\n";
}

 //console.log(totalContent);
//  implements
let isSoption = options.includes("-s");
if (isSoption == true) {
    //   empty line break remove
    // console.log(totalContent);
    // idenitfy empty line breaks
    let contentArr = totalContent.split("\r\n");
    // console.log(contentArr);
    // remove 
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] !== "") {
            tempArr.push(contentArr[i]);
        }
    }
    totalContent = tempArr.join("\r\n");
}

let isB = options.includes("-b");
let isN = options.includes("-n");

let finalOptions;

if(isN == true){
    if( isB == true){

        let idb = options.indexOf("-b");
        let idn = options.indexOf("-n");
        finalOptions = idb>idn? "b":"-n";

    }
    else {
        finalOptions = "-n"
    }
}

else if ( isB == true ){
    finalOptions = "-b";
}


if( finalOptions == "-b" ){
    
    let count = 1;
    let contentArr = totalContent.split("\r\n");
    //console.log(contentArr);
    // remove 
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] !== "") {
            contentArr[i] = count + ". " + contentArr[i];
            count++;
        }
    }


    totalContent = contentArr.join("\r\n");
}
if ( finalOptions == "-n") {

    let count = 1;
    let contentArr = totalContent.split("\r\n");

    //console.log(contentArr);
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = count+". " + contentArr[i];
        count++;
    }

    totalContent = contentArr.join("\r\n");
}
console.log(totalContent);
//  -s option implement
// console.log(totalContent);
//
//  node wcat.js -s -b -n "f1.txt" 
//  node wcat.js -s -b -n "f1.txt" "f2.txt" "f4.txt" 