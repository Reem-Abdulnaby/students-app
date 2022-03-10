const fs=require('fs')
const addStudent=(id,Name,TotalDegree,comment="")=>{
    const student=loadStudent()
    const duplicatedID=student.filter((obj)=>{
        return obj.id === id
    })
    
    if(duplicatedID.length == 0){
    student.push({
        id,
        Name,
        TotalDegree,
        comment
     })
     saveStudent(student)
     console.log('saved successfuly')
    }
    else 
    console.log('duplicatd student')
    
    }  


const loadStudent=()=>{
    try{
    const studentBuffe=fs.readFileSync('student.json').toString()
       return JSON.parse(studentBuffe)
    }
    catch{
        return []
    }
}
const saveStudent=(student)=>{
    const saveInfo=JSON.stringify(student)
    fs.writeFileSync('student.json',saveInfo)
}
const deleteStudent=(id)=>{
    const student=loadStudent()
    const studentToKeep=student.filter((obj)=>{
        return obj.id !== id
    })
    
    if(studentToKeep.length == student.length){
        console.log("ID dosen't Match" )
    }
    else{
        console.log('successfly deleted')
        saveStudent(studentToKeep)
    }
   
}
const readStudent=(id)=>{
    const student=loadStudent()
    const studentToRead=student.find((obj)=>{
        return obj.id ===id
    })
    if(studentToRead){
   console.log('ID :'+studentToRead.id)
   console.log('Name:'+studentToRead.Name)
   console.log('Total degree: '+studentToRead.TotalDegree)
   console.log( 'comment: '+studentToRead.comment)
}
    else
    console.log("ID dosen't match")
}
const listStudent=()=>{
    const student=loadStudent()
    student.forEach((el)=>{
        console.log('ID: '+ el.id, ' Name: ' +el.Name , ' Total Degree: '+el.TotalDegree)
       //console.log(el)
    })
}
module.exports={
    addStudent,
    deleteStudent,
    readStudent,
    listStudent

}