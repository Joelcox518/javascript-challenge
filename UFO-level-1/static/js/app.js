// from data.js
var tableData = data;

// YOUR CODE HERE!
function createTable(data){
  var tablebody = d3.select("tbody");
  tablebody.html(""); 
  data.forEach((rowData) => {
    var row = tablebody.append("tr");
    Object.values(rowData).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);

    });
  })

}
createTable(tableData);

//Second bullet point
function filterData(){



  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(date => date.datetime === inputValue);

    // Check the filterData in the console
    console.log(filteredData);

createTable(filteredData);

}
d3.selectAll("#filter-btn").on("click", filterData);
