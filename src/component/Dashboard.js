import React from 'react'
import Table from 'react-bootstrap/Table';

function Dashboard({teacher,student}) {
    return <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Teacher Name</th>
                    <th>Student Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                teacher.map((e,i)=>{
                    return <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e.teachername}</td>
                        <td>{
                             student.map((e,j)=>{
                                return <tr key={j}>
                                    <td>{e.studentname}</td>
                                </tr>
                            })
                            }</td>
                        <td>
                            &nbsp;
                            &nbsp;
                            <i className="fa-solid fa-pen-to-square"></i>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <i className="fa-solid fa-trash"></i>
                        </td>
                    </tr>
                })
                }
            </tbody>
        </Table>
    </>
}

    export default Dashboard