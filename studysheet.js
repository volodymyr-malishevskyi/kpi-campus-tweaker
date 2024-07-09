const yearSelect = document.querySelector('#selectYear');
const semSelect = document.querySelector('#selectSem');

const calculatedYear = [...yearSelect.options].sort((a, b) => b.value.split('-')[0] - a.value.split('-')[0])[0].value;
const calculatedSem = [...semSelect.options].sort((a, b) => b.value - a.value)[0].value;

yearSelect.value = calculatedYear;
semSelect.value = calculatedSem;

const tableRows = document.querySelectorAll('.ListBox tbody tr');

tableRows.forEach((row) => {
	if (row.dataset.year === calculatedYear && row.dataset.sem === calculatedSem) row.style.display = 'table-row';
	else row.style.display = 'none';
});
