const fs = require("fs");
const path = require("path");


fs.readFile("./urlListSample.txt", "utf-8", (err, data) => {
    if (err) throw err;
     const urlist = data.toString().replace(/\r\n/g,'\n').split('\n');

    urlist.forEach(ChromeWebStoreUrl => {
    	FindOutIfYouTubExtension(ChromeWebStoreUrl);
    });
    
});

function FindOutIfYouTubExtension(ChromeWebStoreUrl) {
	console.log(blankUrl);
}

/*console.log(path.dirname(__filename));*/

/*fs.writeFile(path.join(__dirname, 'description.txt'), 'tableau', err => {
    if (err) throw err;
    console.log('File created...');

});*/