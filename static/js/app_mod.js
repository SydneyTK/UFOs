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
};
// 11.5.3 filter 
function handleClick() {
    // use new funtion and d3 to have the users clicks on th filter data react and manipulate table 
    // grab the datetime value from the filter 
    let date=d3.select("#datetime").property("value");
    // use tableData variable from data.js as a blank slate, if no filter is selected entier table will be returned 
    let filteredData=tableData;

    // 11.5.3, check to see if the date was entered and filter the data using that date 
    if (date) {
        //apply 'filter' to the table data to only keep the rows where the 'datetime' value matches the filter value 
        filteredData = filteredData.filter(row => row.datetime===date);
    };

    //rebuild the table using the filtered data, note if no date was entered then filteredData will just be the original table data
    buildTable(filteredData);
};

//tell the handle click function to be applied when the filter button is clicked, D3 listens 
//attach an event to listen for the form button 
d3.selectAll("#filter-btn").on("click", handleClick);

//build the original/ unfiltered table when the page loads 
buildTable(tableData);
