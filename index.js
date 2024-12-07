const { spawn } = require('node:child_process');
const http = require('node:http');
var path = require('path')


const express = require("express")
var app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "js")));


app.get("/",function(request,response){
    
    const temperatures = []; // Store readings
    debugger;
    const sensor = spawn('python', ['sensor.py']);
    sensor.stdout.on('data', function(data) {
    
        // convert Buffer object to Float
        temperatures.push(parseFloat(data));
        //console.log(temperatures);
        loadData();
    });
    

    
// response.send("Hello World!")
response.sendFile('C://WebApps/testnode/index.html');
})


app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});


function loadData(temperatures)
{
  console.log('adadadadada')
//   let tableBody = document.querySelector('#dataTable'); 

//   //access data tru API
//   let rowData2 = [
//     { name: 'John Doe', age: 28, location: 'New York' },
//     { name: 'Jane Smith', age: 34, location: 'Los Angeles' },
//     { name: 'Mike Johnson', age: 40, location: 'Chicago' }
//   ];

//   rowData2.forEach(row => {
//     const tr = document.createElement('tr');

//     Object.values(row).forEach(value => {
//       const td = document.createElement('td');
//       td.textContent = value;
//       //td.onclick = () => {openPanelLocal(0)}
//       tr.appendChild(td);
//     });

//     tableBody.appendChild(tr);
//   });
}   



