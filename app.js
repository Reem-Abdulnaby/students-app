
const yargs=require('yargs')
const students=require('./student')

   

    

yargs.command({
    command:'add',
    describe:'add new student',
    builder:{
        id:{
          describe: 'This is ID for student',
        demandOption:true,
        type:'number'

    },
     name:{
         describe:'This is name of student',
         demandOption:true,
         type:"string"

     },
     degrees:{
         describe:"This degrees of student",
         demandOption:true,
         type:'array'
     },
     comment:{
         describe:"This is comment in command",
         type:"string"
     }
}, 
   handler:(x)=>{
      
     const sumDegrees=(degree)=>{
        let  totaldegree=0
         degree.forEach((object)=>totaldegree +=object)
       return   totaldegree

     }
    
     students.addStudent(x.id,x.name, sumDegrees(x.degrees),x.comment)
   }
})
yargs.command({
    command:'delete',
    describe:'delete student',
    builder:{
        id:{
          describe: 'This is ID for student',
        demandOption:true,
        type:'number'

    }

}, 
   handler:(x)=>{
       students.deleteStudent(x.id)
   }
})
yargs.command({
    command:'list',
    describe:'list student',
    
   handler:()=>{
      students.listStudent()
   }
})
yargs.command({
    command:'read',
    describe:'info of student',
    builder:{
        id:{
          describe: 'This is ID for student',
        demandOption:true,
        type:'number'

    }

}, 
   handler:(x)=>{
       students.readStudent(x.id)
   }
})
yargs.parse()
