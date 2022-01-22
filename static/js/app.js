// 11.2.4 import the data (array of UFO sightings) from data.js
const tableData = data;
// 11.2.4 Reference the HTML table using d3
var tbody = d3.select("tbody");

// 11.5.1 create the function to fill the table with data- aka iterate through the array and then append them to a row in a table 
function buildTable(data) {
    // first clear out existing date 
    tbody.html("");
    
    // 11.5.2 next loop through each object in the data 
    //and append a row and cells for each value in the row
    data.forEach((dataRow)=> {
        // append a row to the table body 
        let row= tbody.append("tr");

        //loop through each feild in the dataRow and add
        //each calue as a table cell (td) 
        Object.values(dataRow).forEach((val)=>{
            let cell =row.append("td");
            cell.text(val);
        }
        );
    });
}
