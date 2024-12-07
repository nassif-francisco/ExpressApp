import { a } from './mymodule.js';

console.log(a)

// document.onreadystatechange = function () {
//   if (document.readyState !== 'loading') {
//     // Execute code here
//     console.log("DOM fully loaded and parsed");
//     loadData();
//   }
// }

document.addEventListener("DOMContentLoaded", function(event) { 
  // console.log("DOM fully loaded and parsed");
  loadData();
});

function loadData()
{
  console.log('executing LoadData')
  let tableBody = document.querySelector('#dataTable'); 

  let myfetch = fetch("test.txt")
  .then((res) => res.text())
  .then((text) => {
    console.log(text)
    // do something with "text"
   })
  .catch((e) => console.error(e));

  //access data tru API
  let rowData2 = [
    { name: 'John Doe', age: 28, location: 'New York' },
    { name: 'Jane Smith', age: 34, location: 'Los Angeles' },
    { name: 'Mike Johnson', age: 40, location: 'Chicago' }
  ];

  rowData2.forEach(row => {
    const tr = document.createElement('tr');

    Object.values(row).forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      //td.onclick = () => {openPanelLocal(0)}
      tr.appendChild(td);
    });

    tableBody.appendChild(tr);
  });
}   

// function loadDataTable() {
//   console.log("executing LoadDataTable");
//   let $tableBody = $("#dataTable");
//   if ($("#dataTable").length) 
//     {
//     console.log('exists')
//     } else {
//       console.log('no exists')
//   }
//   // console.log($tableBody.prop('outerHTML'))
//   // console.log($tableBody.html())

//   // Access data through API
//   let rowData2 = [
//     { name: "John Doe", age: 28, location: "New York" },
//     { name: "Jane Smith", age: 34, location: "Los Angeles" },
//     { name: "Mike Johnson", age: 40, location: "Chicago" }
//   ];

//   // rowData2.forEach(row => {
//   //   let $tr = $("<tr></tr>");

//   //   Object.values(row).forEach(value => {
//   //     let $td = $("<td></td>").text(value);
//   //     // $td.click(() => openPanelLocal(0));
//   //     console.log($td);
//   //     $tr.append($td);
//   //   });
//   //   console.log($tr.html())

//   //   $tableBody.append($tr);
//   //   console.log($tableBody.prop('outerHTML'))
//   // });


//   $('#dataTable tr').not(':first').not(':last').remove();
//   var html = '';
//   for(var i = 0; i < rowData2.length; i++)
//               html += '<tr><td>' + rowData2[i].name + '</td><td>' + rowData2[i].age + '</td><td>' + rowData2[i].location + '</td></tr>';

//   console.log(html);
//   $('#dataTable tr').first().after(html);


//   console.log($('#dataTable tr').html())
// }
  