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

   
        let highlightEnabled = document.getElementById('highlightToggle').checked;
    
        document.getElementById('highlightToggle').addEventListener('change', function() {
            highlightEnabled = this.checked;
            filterTable(); // Reapply search with new highlight setting
        });
    
        function highlightText(text, searchTerm) {
            if (!searchTerm || !highlightEnabled) return text;
            
            const searchTerms = searchTerm.toLowerCase().split(' ').filter(term => term.length > 0);
            let highlightedText = text;
    
            searchTerms.forEach(term => {
                const regex = new RegExp(`(${term})`, 'gi');
                highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
            });
    
            return highlightedText;
        }
    
        function populateTable(data) {
            const tableBody = document.getElementById('tableBody');
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            tableBody.innerHTML = '';
    
            data.forEach(item => {
                const row = document.createElement('tr');
                
                const highlightedContent = {
                    type: highlightText(item.type, searchTerm),
                    parties: highlightText(item.parties, searchTerm),
                    caseNumber: highlightText(item.caseNumber, searchTerm),
                    date: highlightText(item.date, searchTerm),
                    details: highlightText(item.details, searchTerm)
                };
    
                row.innerHTML = `
                    <td>${highlightedContent.type}</td>
                    <td>${highlightedContent.parties}</td>
                    <td>${highlightedContent.caseNumber}</td>
                    <td>${highlightedContent.date}</td>
                    <td class="details-cell">
                        <div class="details-preview">
                            ${highlightedContent.details.substring(0, 100)}...
                            <button class="expand-btn">थप हेर्नुहोस्</button>
                        </div>
                        <div class="details-full">
                            ${highlightedContent.details}
                            <button class="expand-btn">कम हेर्नुहोस्</button>
                        </div>
                    </td>
                `;
    
                const detailsCell = row.querySelector('.details-cell');
                const expandBtns = detailsCell.querySelectorAll('.expand-btn');
                
                expandBtns.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        detailsCell.classList.toggle('expanded');
                    });
                });
    
                tableBody.appendChild(row);
            });
        }
    
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
    
        // Add debounce function to prevent excessive rerendering
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    
        // Use debounced version for search input
        const debouncedFilter = debounce(() => filterTable(), 300);
        document.getElementById('searchInput').addEventListener('input', debouncedFilter);
        document.getElementById('filterType').addEventListener('change', filterTable);
    });