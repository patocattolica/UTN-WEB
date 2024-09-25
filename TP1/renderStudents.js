let currentPage = 1;
let recordsPerPage = 3;
let filteredStudents = [];

const renderTable = (students) => {
    const tbody = document.querySelector('#studentsTable tbody');
    tbody.innerHTML = '';

    let start = (currentPage - 1) * recordsPerPage;
    let end = start + recordsPerPage;

    students.slice(start, end).forEach((student) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${student.index}</td><td>${student.name}</td><td>${student.lastname}</td>`;
        tbody.appendChild(row);
    });

    document.getElementById('pageInfo').innerText = `Página ${currentPage} de ${Math.ceil(students.length / recordsPerPage)}`;
};

const loadTable = () => {
    const students = getStudents();
    filteredStudents = students;  // Al principio, se muestran todos
    renderTable(filteredStudents);
};

const searchByLastname = () => {
    const lastnameInput = document.getElementById('lastnameInput').value.toLowerCase();
    filteredStudents = getStudents().filter(student => 
        student.lastname.toLowerCase().includes(lastnameInput)
    );
    currentPage = 1;  // Resetear a la primera página
    renderTable(filteredStudents);
};



const updateRecordsPerPage = () => {
    recordsPerPage = parseInt(document.getElementById('recordsPerPage').value);
    currentPage = 1;  // Resetear a la primera página
    renderTable(filteredStudents);
};

const goToPrevPage = () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable(filteredStudents);
    }
};

const goToNextPage = () => {
    if (currentPage * recordsPerPage < filteredStudents.length) {
        currentPage++;
        renderTable(filteredStudents);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadTable();

    document.getElementById('searchButton').addEventListener('click', searchByLastname);
    document.getElementById('recordsPerPage').addEventListener('change', updateRecordsPerPage);
    document.getElementById('prevPage').addEventListener('click', goToPrevPage);
    document.getElementById('nextPage').addEventListener('click', goToNextPage);
});