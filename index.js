const { spawn } = require('node:child_process');
const http = require('node:http');
var path = require('path')
const fs = require('fs');
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);



const express = require("express")
var app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "js")));
app.use(express.static(path.join(__dirname, 'public')));
const temperatures = []; // Store readings
let pyData;

app.get("/",function(request,response){  
// response.send("Hello World!")
response.sendFile('C://FULLSTACK/Front&Express/ExpressApp/indexBase.html');
})

app.get("/data",function(request,response){
  const sensor = spawn('python', ['BACKEND/sensor.py']);
  sensor.stdout.on('data', function(data) {
      const message = `${data}` ;
      response.send(JSON.parse(data));
  });
})


app.get("/groupData",function(request,response){
  const sensor = spawn('python', ['BACKEND/groupData.py']);
  sensor.stdout.on('data', function(data) {
      const message = `${data}` ;
      response.send(JSON.parse(data));
  });
})

app.get("/dataUI",function(request,response){
response.sendFile('C://FULLSTACK/Front&Express/ExpressApp/index.html');  
})


app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});


function loadData()
{
  
  console.log('saving data from node')
  fs.writeFile("C://FULLSTACK/Front&Express/ExpressApp/js/test.txt", temperatures[0].toString(), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
}   

module.exports.add = function pyData() {
  return temperatures;
}

//$(loadDataTable);






