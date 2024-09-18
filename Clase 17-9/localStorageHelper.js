const getStudents = () =>{
    // debo guardar en el local Storage y redirigir
    let students = localStorage.getItem('students');

    // chequeo si students esta en el Storage
    if(students){
        students = [];
    }
    else{
        students = JSON.parse(students);
    }

    return getStudents;
}