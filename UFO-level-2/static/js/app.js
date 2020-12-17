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

var filterObject= {};

function inputfilter(){
    var changedElement = d3.select(this).select("input");
    //console.log(changedElement);
    var elementValue= changedElement.property("value");
    var id = changedElement.attr("id");
    if (elementValue){
        filterObject[id] = elementValue;
    }
    else {
        delete filterObject[id];
    }

    filterData();
}

//Second bullet point
function filterData(){
    Object.entries(filterObject).forEach(([key, value]) => {
        filteredData = tableData.filter(rowObject => rowObject[key] === value);
    })

    // Check the filterData in the console
   console.log(filteredData);

createTable(filteredData);

}
d3.selectAll(".filter").on("change", inputfilter);