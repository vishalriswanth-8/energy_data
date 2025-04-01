// Replace this with your API URL
const apiUrl = 'https://energy-ushr.onrender.com/get_data';

// Fetch data and populate the table
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('data-table');
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.voltage}</td>
                <td>${row.current}</td>
                <td>${row.power}</td>
                <td>${row.frequency}</td>
                <td>${row.pf}</td>
                <td>${row.timestamp}</td>
            `;
            tableBody.appendChild(tr);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const tableBody = document.getElementById('data-table');
        tableBody.innerHTML = '<tr><td colspan="7">Failed to load data</td></tr>';
    });
