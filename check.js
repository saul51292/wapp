var wappalyzer = require('./index');

var fs = require('fs')
var file = fs.createWriteStream('companies.txt');

var arrayOfSites = ['http://www.gap.com/',
'http://www.hm.com/',
'http://www.6pm.com/',
'http://www.jcrew.com/',
'http://www.mango.com/',
'http://www.ralphlauren.com/',
'http://www.shopbop.com/',
'http://www.modcloth.com/',
'http://www.finishline.com/',
'http://www.dsw.com/',
'http://www.hottopic.com/',
'http://www.abercrombie.com/',
'http://www.oldnavy.com/',
'http://www.shoebuy.com/',
'http://www.freepeople.com/']

var count = 0

var arrayLength = arrayOfSites.length;

for (var i = 0; i < arrayLength; i++) {
	   var options={
		  	url : arrayOfSites[i],
		  	hostname : arrayOfSites[i],
		  	debug:false
		}
		wappalyzer.detectFromUrl(options,function  (err,apps,appInfo) {
		fs.appendFile('companies.txt', (arrayOfSites[count] + ": " + apps + "\n"), function (err) {
 			 if (err) throw err;
 			 console.log ((arrayOfSites[count] + ' was appended to file!'));
		});
		count++;
	});
};

