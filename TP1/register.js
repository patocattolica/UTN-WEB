const recordStudents = () =>{

    const name = document.getElementById("inputName").value;
    const lastname = document.getElementById("inputLastname").value;

    // if(validation(name) && validation(lastname)){
    //     name = name.value.trim();
    //     lastname = lastname.value.trim();
    // }

    let students = getStudents();
    let index = students.length;
    index++;
    students.push({index,name,lastname});

    localStorage.setItem('students',JSON.stringify(students));

    window.location.href = 'student.html';
}



const validation = (string) =>{
    
    var string = string.value.trim();

    if(string === ""){
        return false;
    }
    else{
        return true;
    }
    
}