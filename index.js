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
    
    
  debugger;
  console.log('lololo')
  const sensor = spawn('python', ['sensor.py']);
  sensor.stdout.on('data', function(data) {
  
      // convert Buffer object to Float

      pyData = {name: "John", age: 30, location: "Caracas"}
      console.log(pyData)

      response.send(pyData);

      //parse pyData
      // const message = `${data}` ;
      // console.log(message);


      // console.log('logging data')
      // console.log((data.toString()))
      // const parseString = ''
      // const newJson = JSON.parse(JSON.stringify(data.toString()))
      //console.log(newJson.name);
      //console.log(temperatures);
      //loadData();
  });
  

  

//response.sendFile('C://FULLSTACK/Front&Express/ExpressApp/index.html');
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






