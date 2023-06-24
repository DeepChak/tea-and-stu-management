import React from 'react'
import Table from 'react-bootstrap/Table';
import {useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Studentlist({student,setStudent}) {
    let handleDelete=(i)=>{
        let newArray=[...student]
        newArray.splice(i,1)
        setStudent(newArray)
    }
    let navigate=useNavigate()
    return <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>Student Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map((e,i)=>{
                        return <tr key={i}>
                            <td>{i+1}</td>
                            <td>{e.studentname}</td>
                            <td>{e.mobile}</td>
                            <td>{e.email}</td>
                            <td>{e.dob}</td>
                            <td>
                            &nbsp;
                            &nbsp;
                            <i className="fa-solid fa-pen-to-square" onClick={()=>navigate(`/edit-student/${i}`)}></i>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <i className="fa-solid fa-trash" onClick={()=>handleDelete(i)}></i>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
        <div className='addstudentwrapper'>
            <Button varient='primary' onClick={()=>navigate('/add-student')}>
                Add Student
            </Button>
        </div>
    </>
}

export default Studentlist