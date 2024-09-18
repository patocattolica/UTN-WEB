const addStudent = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;

    // debo guardar en el local Storage y redirigir
    let students = localStorage.getItem('students');

    // chequeo si students esta en el Storage
    if(students){
        students = [];
    }
    else{
        students = JSON.parse(students);
    }

    students.push({name,latsname});
    localStorage.setItem('students',JSON.stringify(students));

    window.location.href = index.html
};

