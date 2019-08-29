const express = require('express');
const bodyParser = require('body-parser');

var fs = require('fs');
fs.readFile('refill.txt', function(err, buf) {
  console.log("refill.txt: "+buf.toString());
});
/*var data = "New File Contents";
fs.writeFile('refill.txt', data, function(err, data){
    if (err) console.log(err);
    //console.log("Successfully Written to File.");
});*/

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/content', (req, res) => {
  console.log("GET: "+req.body.content);
});
app.post('/content', (req, res) => {
    //console.log("POST: "+req.body.content);
    res.json({ok: true});
    currentTime = new Date();
    data = currentTime+'\n'+JSON.stringify(req.body)+'\n';
    fs.appendFile('refill.txt', data, function(err, data){
      if (err) console.log(err);
    });
    console.log("POST: "+JSON.stringify(req.body));
    fs.readFile('refill.txt', function(err, buf) {
      console.log("refill.txt: "+buf.toString());
    });
    
    //console.log("Successfully Written to File.");
});

app.listen(3001);
console.log('listening on http://localhost:3001');
