import React, { useState } from "react";
import Navbars from "./component/Navbars";
import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";
import Studentlist from "./component/Studentlist";
import Teacherlist from "./component/Teacherlist";
import Addstudent from "./component/Addstudent";
import Addteacher from "./component/Addteacher";

function App() {
  let [student, setStudent]=useState([
    {
      studentname:"Alex",
      mobile:"98765432",
      email:"alex@gmail.com",
      dob:"2002-04-30"
    },

    {
      studentname:"Pandian",
      mobile:"98763432",
      email:"pandian@gmail.com",
      dob:"2002-03-20"
    },

    {
      studentname:"Krish",
      mobile:"94565432",
      email:"krish@gmail.com",
      dob:"1998-04-26"
    },

    {
      studentname:"keerthivasan",
      mobile:"926753487",
      email:"keerthivasan@gmail.com",
      dob:"2003-12-25"
    },

    {
      studentname:"Vasanth",
      mobile:"987565432",
      email:"vasanth@gmail.com",
      dob:"1996-05-21"
    },

    {
      studentname:"Karthi",
      mobile:"98765782",
      email:"karthi@gmail.com",
      dob:"1998-06-16"
    },

  ])

  let [teacher, setTeacher]=useState([
    {
      teachername:"Vignesh",
      subject:"computerscience",
      email:"Vignesh@gmail.com",
      mobile:"938726567",
      city:"Madurai"
    },

    {
      teachername:"Ajith",
      subject:"Botnay",
      email:"ajith@gmail.com",
      mobile:"9876456787",
      city:"Madurai"
    },

    {
      teachername:"Balaji",
      subject:"Physics",
      email:"balaji@gmail.com",
      mobile:"6354267814",
      city:"Madurai"
    },
  ])
  return <>
   <BrowserRouter>
   <div>
    <Navbars/>
   </div>
   <div>
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="dashboard" element={<Dashboard teacher={teacher} setTeacher={setTeacher} student={student} setStudent={setStudent}/>}/>
      <Route path="student-list" element={<Studentlist student={student} setStudent={setStudent}/>}/>
      <Route path="edit-student/:id" element={<Addstudent student={student} setStudent={setStudent}/>}/>
      <Route path="add-student" element={<Addstudent student={student} setStudent={setStudent}/>}/>
      <Route path="teacher-list" element={<Teacherlist teacher={teacher} setTeacher={setTeacher}/>}/>
      <Route path="edit-teacher/:id" element={<Addteacher teacher={teacher} setTeacher={setTeacher}/>}/>
      <Route path="add-teacher" element={<Addteacher teacher={teacher} setTeacher={setTeacher}/>}/>
      <Route path="*" element={<Navigate to='/home'/>}/>
    </Routes>
   </div>
   </BrowserRouter>
</>
}

export default App;