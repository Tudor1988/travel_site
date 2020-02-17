var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error){
    if (error) {
        return console.log(error);
    } else {
        return console.log("Congrats")
    }
})

var myPhotoLocation = "https://github.com/LearnWebCode/welcome-to-git/blob/master/images/dog.jpg"

https.get(myPhotoLocation, function(respons) {
respons.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"))
});