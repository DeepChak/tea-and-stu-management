import React from 'react'
import Table from 'react-bootstrap/Table';
import {useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Teacherlist({teacher,setTeacher}) {
    let handleDelete=(j)=>{
        let newArray=[...teacher]
        newArray.splice(j,1)
        setTeacher(newArray)
    }
    let navigate=useNavigate()
    return <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>Teacher Name</th>
                    <th>Subject</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    teacher.map((e,j)=>{
                        return <tr key={j}>
                            <td>{j+1}</td>
                            <td>{e.teachername}</td>
                            <td>{e.subject}</td>
                            <td>{e.email}</td>
                            <td>{e.mobile}</td>
                            <td>{e.city}</td>
                            <td>
                            &nbsp;
                            &nbsp;
                            <i className="fa-solid fa-pen-to-square" onClick={()=>navigate(`/edit-teacher/${j}`)}></i>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <i className="fa-solid fa-trash" onClick={()=>handleDelete(j)}></i>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
        <div className='addteacherwrapper'>
            <Button varient='primary' onClick={()=>navigate('/add-teacher')}>
                Add Teacher
            </Button>
        </div>
    </>
}

export default Teacherlist