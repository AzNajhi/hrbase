
document.getElementById("edit-btn22").addEventListener("click", function() {
    // Adjust classes for table 1 and table 2 when edit button is clicked
    table1Container.classList.remove("col-md-12");
    table1Container.classList.add("col-md-7");
    table2Container.classList.remove("col-md-12");
    table2Container.classList.add("col-md-5");
	table3Container.classList.remove("col-md-5");
    table2Container.style.display = "block";
	table3Container.style.display = "none";
});

document.getElementById("add-btn22").addEventListener("click", function() {
    // Adjust classes for table 1 and table 2 when edit button is clicked
    table1Container.classList.remove("col-md-12");
    table1Container.classList.add("col-md-7");
    table3Container.classList.remove("col-md-12");
    table3Container.classList.add("col-md-5");
	table2Container.classList.remove("col-md-5");
    table3Container.style.display = "block";
	table2Container.style.display = "none";
});

document.getElementById("close-edit-btn22").addEventListener("click", function() {
    // Adjust classes for table 1 and table 2 when edit button is clicked
    table1Container.classList.remove("col-md-7");
    table1Container.classList.add("col-md-12");
    table2Container.classList.remove("col-md-5");
    table2Container.style.display = "none";
});

document.getElementById("close-add-btn22").addEventListener("click", function() {
    // Adjust classes for table 1 and table 2 when edit button is clicked
    table1Container.classList.remove("col-md-7");
    table1Container.classList.add("col-md-12");
    table3Container.classList.remove("col-md-5");
    table3Container.style.display = "none";
});

document.getElementById("one-btn22").addEventListener("click", function() {
    // Adjust classes for table 1 and table 2 when edit button is clicked
    table10Container.classList.remove("col-md-12");
    table10Container.classList.add("col-md-7");
    table20Container.classList.remove("col-md-12");
    table20Container.classList.add("col-md-5");
    table20Container.style.display = "block";
});

document.getElementById("close-one-btn22").addEventListener("click", function() {
    // Adjust classes for table 1 and table 2 when edit button is clicked
    table10Container.classList.remove("col-md-7");
    table10Container.classList.add("col-md-12");
    table20Container.classList.remove("col-md-5");
    table20Container.style.display = "none";
});