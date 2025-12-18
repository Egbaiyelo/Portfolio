
// Check all languages and ensure they have the same keys


// collect all langs into x as in x.json


// Check keys and report a missin key or just say ooh the keys match go on...


const fs = require('fs');
const { json } = require('stream/consumers');
const DIR = "./portfolio-app/messages/";



let lang_files;
let lang_data = [];


fs.readdir(DIR, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    lang_files = files;
    files.forEach(file => {
        console.log(file.split('.')[0]);

        lang_data.push(JSON.parse(fs.readFileSync(DIR + file, 'utf8')));
    });

    
});




