const renderTable = () => {
    const tbody = document.getElementById('student_table');
    tbody.innerHTML = '';

    let students = localStorage.getItem('students');

    // chequeo si students esta en el Storage
    if(students){
        students = [];
    }
    else{
        students = JSON.parse(students);
    }

    students.forEach((student) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${student.name}</td><td>${student.lastName}</td>`;

        tbody.appendChild(row);
    });
};