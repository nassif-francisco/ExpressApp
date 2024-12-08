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

app.get("/",function(request,response){
    
    
    debugger;
    const sensor = spawn('python', ['sensor.py']);
    sensor.stdout.on('data', function(data) {
    
        // convert Buffer object to Float
        temperatures.push(parseFloat(data));
        //console.log(temperatures);
        loadData();
    });
    

    
// response.send("Hello World!")
response.sendFile('C://FULLSTACK/Front&Express/ExpressApp/indexBase.html');
})

app.get("/home",function(request,response){
    
    
  debugger;
  const sensor = spawn('python', ['sensor.py']);
  sensor.stdout.on('data', function(data) {
  
      // convert Buffer object to Float
      temperatures.push(parseFloat(data));
      //console.log(temperatures);
      loadData();
  });
  

  
// response.send("Hello World!")
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






