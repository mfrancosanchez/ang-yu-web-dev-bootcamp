/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer.prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Insert your URL here'
    }
]).then((answers) => {

    let gen_qr = qr.image(answers.url);
    gen_qr.pipe(fs.createWriteStream('url_qr_code.png'));
 
    fs.writeFile('URL.txt', `${answers.url}`, (err) => {
        if (err) throw err;
        console.log(answers.url);
    });
}).catch((error) => {
    if (error.isttyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    } else {
        console.log("Something went wrong");
    }
});



