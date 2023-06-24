import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Addstudent({student,setStudent}) {
    let [studentname,setStudentname]=useState("")
    let [email,setEmail]=useState("")
    let [mobile,setMobile]=useState("")
    let [dob,setDOB]=useState("")
    let params=useParams()
    // console.log(params)
    useEffect(()=>{
        if (params.id !==undefined)
        {
            setStudentname(student[params.id].studentname)
            setEmail(student[params.id].email)
            setMobile(student[params.id].mobile)
            setDOB(student[params.id].dob)
        }
    },[params.id,student])
    let handleSubmit=()=>{
        let newStudent={studentname,email,mobile,dob}
        let newArray=[...student]
        if (params.id !==undefined){
            newArray.splice(params.id,1,newStudent)
        }
        else {newArray.push(newStudent)}
        setStudent(newArray)
        navigate("/student-list")
    }
    let navigate=useNavigate()
    return <>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={studentname} onChange={(e)=>setStudentname(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" placeholder="Date of Birth" value={dob} onChange={(e)=>setDOB(e.target.value)}/>
            </Form.Group>
        </Form>
        <Button varient='primary' onClick={(e)=>handleSubmit()}>
            Add Student
        </Button>
    </>
}

export default Addstudent