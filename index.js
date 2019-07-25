const fs = require('fs'),
  request = require('request');

let download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
async function forLoop(){
  for( let i=1; i<=201; i++){
    let uri = "https://vs1.coursehunters.net/mosh-react-mastering/lesson"+i+".mp4";
    let fileName = "Lesson "+i;
    await download(uri, fileName, function(){
      console.log('Downloaded Lesson: '+i);
    });
  }
}

forLoop();


