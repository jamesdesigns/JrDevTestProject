function createTable() {
    "use strict";
    // Assign the entered values to the appropriate variables - row and col
    let row = parseInt(document.getElementById("rows").value);
    let col = parseInt(document.getElementById("columns").value);

    // RULES:  Default value / a negative number  / number greater than 6.
    if (isNaN(row)) {
        // Assign a default value of 6 to an empty Row
        let row = parseInt(document.getElementById("rows").value = 6);  
    } 
    
    if (isNaN(col)) {
        // Assign a default value of 6 to an empty Row
        let col = parseInt(document.getElementById("columns").value = 6); 
    } 
    
   if (row < 0 || col < 0) {
        document.getElementById("alert").innerHTML = "Rows and Columns should be a positive number!";
    } else if (row > 6 || col > 6) {
        document.getElementById("alert").innerHTML = "Enter 6 or less!";

    } else {
    // OUTPUT TABLE  
        let tableHTML = "";
        let rowHTML;
        for (let tr = 0; tr <= row; tr++ ) {
            rowHTML = "";
            for (let c = 0; c <= col; c++) {
                if(tr == 0) {
                    rowHTML += "<td>" + ((c == 0) ? " " : c) + "</td>";
                } else if ( c == 0) {
                    rowHTML += "<td>" + tr + "</td>";
                } else {
                    rowHTML += "<td>" + tr + " x " + c + " = " + (tr * c) + "</td>";
                }
            }
            tableHTML += "<tr>" + rowHTML + "</tr>";
        }
        document.getElementById("newTable").innerHTML = "<table style=\"padding:15;\" border=\"1\">" + tableHTML + "</table>";
    }
}

// RESET BUTTON - Clears the input field and table rows
function resetTable() {
    "use strict";
    // Assign the entered value to the appropriate variable - row
    let row = parseInt(document.getElementById("rows").value);
    // Get the Input Values and Assign an empty value
    document.getElementById("rows").value = '';
    document.getElementById("columns").value = '';
    // Create a For Loop to iterate through the table of rows and decrement values down to 0 and delete all rows
    for(let i = row; i >= 0; i--) {
        document.getElementById("newTable").deleteRow(i);
    }
}
