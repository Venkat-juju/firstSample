function CountRows() {
    var totalRowCount = 0;
    var rowCount = 0;
    var table = document.getElementById("studentTable");
    var rows = table.getElementsByTagName("tr")
    alert(typeof(rows));
    for (var i = 0; i < rows.length; i++) {
        totalRowCount++;
        if (rows[i].getElementsByTagName("td").length > 0) {
            rowCount++;
        }
    }
    var message = "Total Row Count: " + totalRowCount;
    message += "\nRow Count: " + rowCount;
    alert(message);
}

function addRow() {
	var table = document.getElementById("studentTable");
	var rowCount = table.getElementsByTagName("tr").length;
	
	// create an empty <tr> element and add it to the last position of the table
	var row = table.insertRow(rowCount);

	// insert new cells(<td> element) at the first and second position of the <tr> element
	var studentName = row.insertCell(0);
	var registerNumber = row.insertCell(1);
	var dateOfBirth = row.insertCell(2);
	var year = row.insertCell(3);
	var branch = row.insertCell(4);

	// fill the new cells with the respected values
	studentName.innerHTML = document.getElementById("studentName").value;
	registerNumber.innerHTML = document.getElementById("registerNumber").value;
	dateOfBirth.innerHTML = document.getElementById("dateOfBirth").value;
	year.innerHTML = document.getElementById("year").value;

	var branchele = document.getElementById("department");
	branch.innerHTML = branchele.options[branchele.selectedIndex].value;

	// clearing the fields
	document.getElementById("studentName").value = "";
	document.getElementById("registerNumber").value = "";
	document.getElementById("dateOfBirth").value = "";
	document.getElementById("year").value = "";
	branchele.selectedIndex = branchele.options[0];

	// alerting the user 
	alert("Students details updated");
}

function showAlert() {
	alert("Venkataramanan");
}