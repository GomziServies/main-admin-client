$(document).ready(() => {
    getInvoiceChart();
    fetchFGiitData();
    fetchFwgData();
    toggleData();
    fetchFwgToken();
    fetchFGiitToken();
});


// Fetch FWG token
function fetchFwgToken() {
    $.get({
        url: BASE_URL + '/oAuth/master/get?scope=fwg',
        success: (result) => {
            var tokenData = result.data;
            localStorage.setItem('fwg_token', tokenData.authorization);
        },
        error: handleError
    });
}

// Fetch FG Group token
function fetchFGiitToken() {
    $.get({
        url: BASE_URL + '/oAuth/master/get?scope=fg_group',
        success: (result) => {
            var tokenData = result.data;
            localStorage.setItem('fg_group_token', tokenData.authorization);
        },
        error: handleError
    });
}

// Fetch FWG data
function fetchFwgData() {
    $.get({
        url: 'https://fg-app-dev-api.fggroup.in/admin/v1/dashboard/stats',
        headers: {
            "authorization": localStorage.getItem("fwg_token"),
        },
        success: (result) => {
            const count = result.data.total_users
            const chartData = result.data.chart_data_user;

            // Extract month labels and user counts
            const labels = chartData.map(entry => entry.month);
            const counts = chartData.map(entry => entry.count);

            // Create the chart
            const ctx = document.getElementById('chart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: `Total User - ${count}`,
                        data: counts,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            precision: 0
                        }
                    }
                }
            });
        },
        error: handleError
    });
}

// Fetch FG Group data
function fetchFGiitData() {
    $.get({
        url: 'https://dev-api.fggroup.in/admin/v1/dashboard/get-dashboard',
        headers: {
            "authorization": localStorage.getItem("fg_group_token"),
        },
        success: (result) => {
            var data = result.data;
            const count = data.active_user;
            const assignUserCount = document.getElementById('fgiitUserCount');
            assignUserCount.textContent = count;

        },
        error: handleError
    });
}

function getInvoiceChart() {
    $.get({
        url: 'https://fg-app-dev-api.fggroup.in/admin/v1/invoice/get',
        headers: {
            "authorization": localStorage.getItem("fwg_token"),
        },
        success: (result) => {
            const data = result.data;
            console.log(data)

            // Define an array of invoice names to check against for FGIIT and FWG
            const invoiceProductNameFGIIT = [
                'Injury Rehabilitation Workshop',
                'Anabolic Androgenic Steroids',
                'Advance Clinical Nutrition Workshop',
                'Diploma In Personal Training course',
                'Diploma In Nutrition course',
                'Group Instructor Workshop',
                'Flexible Course'
            ];

            const invoiceProductNameFWG = [
                'RTP-1.0_ Weight Loss Program',
                'RTP-2.0 Weight Management Program',
                'RTP-3.0 Clinical Illness',
                'RTP-4.0 Corporate Event',
                'RTP-5.0 Prep Coaching',
                'Health and Fitness Book'
            ];

            const productAmounts = {}; // Object to store total paid amount for each product name

            // Define the array to use based on the state of the toggle button
            const targetArray = document.querySelector(".toggle-checkbox").checked ? invoiceProductNameFGIIT : invoiceProductNameFWG;

            // Loop through each invoice detail
            for (let i = 0; i < data.length; i++) {
                const tempInvoice = data[i];
                const productName = tempInvoice.productName;

                // Check if the product name is present in the target array
                if (targetArray.includes(productName)) {
                    // If the product name is present, add the paidPayment to the array for that product
                    if (productAmounts[productName]) {
                        productAmounts[productName].push(parseInt(tempInvoice.paidPayment));
                    } else {
                        productAmounts[productName] = [parseInt(tempInvoice.paidPayment)];
                    }
                }
            }

            // Calculate the total paid amount for each product
            const totalPaidAmounts = {};
            for (const productName in productAmounts) {
                const paidAmountsArray = productAmounts[productName];
                const totalPaidAmount = paidAmountsArray.reduce((total, amount) => total + amount, 0);
                totalPaidAmounts[productName] = totalPaidAmount;
            }

            // Logging the total paid amount for each product name
            // for (const productName in totalPaidAmounts) {
            //     console.log(`${productName} = ${totalPaidAmounts[productName]}`);
            // }

            // Update the bar chart
            updateBarChart(totalPaidAmounts);
        },
        error: (error) => {
            return error.responseJSON ? toastError('Error', error.responseJSON.message) : toastError();
        }
    });
}

function toggleButtonText() {
    const textDisplay = document.getElementById("text-display");
    const toggleCheckbox = document.querySelector(".toggle-checkbox");

    if (toggleCheckbox.checked) {
        textDisplay.textContent = "FGIIT"; // Toggle is ON
    } else {
        textDisplay.textContent = "FWG"; // Toggle is OFF
    }

    // Call the getInvoiceChart function to update the invoice list based on the toggle status
    getInvoiceChart();
}

let barChart; // Variable to store the Chart instance

function updateBarChart(productAmounts) {
    if (barChart) {
        // Destroy the existing chart instance if it exists
        barChart.destroy();
    }
    const ctx = document.getElementById("invoiceDataChart").getContext("2d");
    const labels = Object.keys(productAmounts).map(formatLabel);
    const data = Object.values(productAmounts);

    const dataWithRupeeSign = data.map(amount => `₹ ${amount}`);

    barChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Total Payment",
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value, index, values) {
                            return `₹ ${value}`;
                        }
                    }
                }
            }
        }
    });
}


// Helper function to format labels with custom abbreviations
function formatLabel(label) {
    // Custom label abbreviations
    const abbreviations = {
        'Injury Rehabilitation Workshop': 'IRW',
        'Anabolic Androgenic Steroids': 'AAS',
        'Flexible Course': 'Flexi Course',
        'Advance Clinical Nutrition Workshop': 'ACNW',
        'Diploma In Personal Training course': 'DPT',
        'Diploma In Nutrition course': 'DNC',
        'Group Instructor Workshop': 'GIW',
        'RTP-1.0_ Weight Loss Program': 'RTP-1.0',
        'RTP-2.0 Weight Management Program': 'RTP-2.0',
        'RTP-3.0 Clinical Illness': 'RTP-3.0',
        'RTP-4.0 Corporate Event': 'RTP-4.0',
        'RTP-5.0 Prep Coaching': 'RTP-5.0',
        'Health and Fitness Book': 'Book'
        // Add more custom abbreviations as needed
    };

    // Check if the label has a custom abbreviation, if not, truncate the label to the desired length
    return abbreviations[label] || label.substring(0, 7);
}

function toggleData() {
    const dropdown = document.getElementById("dataDropdown");
    const selectedValue = dropdown.value;

    const userDataDiv = document.querySelector(".userData");
    const invoiceDataDiv = document.querySelector(".invoiceData");

    if (selectedValue === "userData") {
        userDataDiv.style.display = "block";
        invoiceDataDiv.style.display = "none";
    } else if (selectedValue === "invoiceData") {
        userDataDiv.style.display = "none";
        invoiceDataDiv.style.display = "block";
    }
}