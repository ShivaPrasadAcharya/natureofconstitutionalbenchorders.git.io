let expandedRows = new Set();

function highlightText(text, searchTerm) {
    if (!searchTerm || !document.getElementById('highlightCheckbox').checked) return text;
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

function renderTable(searchTerm = '') {
    const tbody = document.querySelector('#ordersTable tbody');
    tbody.innerHTML = '';

    orders.forEach((order, index) => {
        if (searchTerm && !Object.values(order).some(value => 
            value.toLowerCase().includes(searchTerm.toLowerCase()))) {
            return;
        }

        const row = document.createElement('tr');
        const isExpanded = expandedRows.has(index);

        row.innerHTML = `
            <td>${highlightText(order.type, searchTerm)}</td>
            <td>${highlightText(order.parties, searchTerm)}</td>
            <td>${highlightText(order.caseNumber, searchTerm)}</td>
            <td>${highlightText(order.date, searchTerm)}</td>
            <td class="details-cell ${isExpanded ? '' : 'collapsed'}">${highlightText(order.details, searchTerm)}</td>
        `;

        row.addEventListener('click', () => {
            if (expandedRows.has(index)) {
                expandedRows.delete(index);
            } else {
                expandedRows.add(index);
            }
            renderTable(searchTerm);
        });

        tbody.appendChild(row);
    });
}

// Event Listeners
document.getElementById('searchInput').addEventListener('input', (e) => {
    renderTable(e.target.value);
});

document.getElementById('highlightCheckbox').addEventListener('change', () => {
    renderTable(document.getElementById('searchInput').value);
});

document.getElementById('expandAllBtn').addEventListener('click', () => {
    if (expandedRows.size === orders.length) {
        expandedRows.clear();
    } else {
        expandedRows = new Set(Array.from(Array(orders.length).keys()));
    }
    renderTable(document.getElementById('searchInput').value);
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});
