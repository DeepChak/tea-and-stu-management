import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Addteacher({teacher,setTeacher}) {
    let [teachername,setTeachername]=useState("")
    let [subject,setSubject]=useState("")
    let [email,setEmail]=useState("")
    let [mobile,setMobile]=useState("")
    let [city,setCity]=useState("")
    let params=useParams()
    useEffect(()=>{
        if (params.id !==undefined)
        {
            setTeachername(teacher[params.id].teachername)
            setSubject(teacher[params.id].subject)
            setEmail(teacher[params.id].email)
            setMobile(teacher[params.id].mobile)
            setCity(teacher[params.id].city)
        }
    },[params.id,teacher])
    let handleSubmit=()=>{
        let newTeacher={teachername,subject,email,mobile,city}
        let newArray=[...teacher]
        if (params.id !==undefined){
            newArray.splice(params.id,1,newTeacher)
        }
        else {newArray.push(newTeacher)}
        setTeacher(newArray)
        navigate("/teacher-list")
    }
    let navigate=useNavigate()
  return <>
  <Form>
            <Form.Group className="mb-3">
                <Form.Label>Teacher Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={teachername} onChange={(e)=>setTeachername(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
            </Form.Group>
        </Form>
        <Button varient='primary' onClick={(e)=>handleSubmit()}>
            Add Teacher
        </Button>
  </>
}

export default Addteacher