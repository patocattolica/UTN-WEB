const recordStudents = () =>{

    const name = document.getElementById("inputName").value;
    const lastname = document.getElementById("inputLastname").value;

    if(validation(name) && validation(lastname)){
        let students = getStudents();
        let index = students.length;
        index++;
        students.push({index,name,lastname});
        localStorage.setItem('students',JSON.stringify(students));
    }
    else{
        alert("Completar correctamente los campos!");
    }

    window.location.href = "student.html";
}


const validation = (string) =>{
    if(string === ""){
        return false;
    }
    else{
        return true;
    }

}