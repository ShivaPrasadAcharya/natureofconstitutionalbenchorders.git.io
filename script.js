document.addEventListener('DOMContentLoaded', function() {
    // Populate filter options
    const filterType = document.getElementById('filterType');
    const uniqueTypes = [...new Set(ordersData.map(item => item.type))].sort();
    
    uniqueTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        filterType.appendChild(option);
    });

    // Initial table population
    populateTable(ordersData);

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', filterTable);
    document.getElementById('filterType').addEventListener('change', filterTable);

    function filterTable() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const filterValue = document.getElementById('filterType').value;

        const filteredData = ordersData.filter(item => {
            const typeMatch = filterValue === 'all' || item.type === filterValue;
            const searchMatch = Object.values(item).some(value => 
                value.toString().toLowerCase().includes(searchTerm)
            );
            return typeMatch && searchMatch;
        });

        populateTable(filteredData);
    }

    function populateTable(data) {
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.type}</td>
                <td>${item.parties}</td>
                <td>${item.caseNumber}</td>
                <td>${item.remarks}</td>
                <td>${item.date}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
