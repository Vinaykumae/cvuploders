document.addEventListener("DOMContentLoaded", function () {
    const csvFileInput = document.getElementById("csvFileInput");
    const uploadButton = document.getElementById("uploadButton");
    const resultDiv = document.getElementById("result");

    uploadButton.addEventListener("click", function () {
        const file = csvFileInput.files[0];

        if (!file) {
            alert("Please select a CSV file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            const csvData = e.target.result;
            const lines = csvData.split("\n");

            // Process the CSV data here
            // For example, you can parse and display it in the resultDiv

            // Example: Display the CSV content line by line
            resultDiv.innerHTML = "";
            lines.forEach((line) => {
                const paragraph = document.createElement("p");
                paragraph.textContent = line;
                resultDiv.appendChild(paragraph);
            });
        };

        reader.readAsText(file);
    });
});
