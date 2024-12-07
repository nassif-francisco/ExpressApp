console.log('lolololol')

document.onreadystatechange = function () {
  if (document.readyState !== 'loading') {
    // Execute code here
    console.log("DOM fully loaded and parsed");
    loadData();
  }
}

function loadData()
{
  console.log('adadadadada')
  let tableBody = document.querySelector('#dataTable'); 

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
  