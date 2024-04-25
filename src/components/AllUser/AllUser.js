import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllUser.css';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../../Services/EmployeeServices';



const EmployeeList = () => {

    
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        // const fetchEmployees = async () => {
        //     try {
        //         const response = await axios.get('http://localhost:8080/employees/allUsers');
        //         setEmployees(response.data);
        //     } catch (error) {
        //         console.error('Error fetching employees:', error);
        //     }
        // };

        // fetchEmployees();


        getAllEmployees();
    }, [])

    function getAllEmployees(){
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:8080/employees/allUsers');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }

    // useEffect( () => {
    //     listEmployees().then((response) => {
    //         setEmployees(response.data);
    //     }).catch(error =>{
    //         console.error(error);
    //     })

    // }, [])

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error =>{
            console.error(error);
        })
    }

    function logout(){
        navigator('/')
    }

    return (
        <>
        <div>
            <header>
                <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                    <a className='navbar-brand'>Employee Monitoring System</a>
                    <button className='logoutbtn' onClick={logout}>logout</button>
                </nav>
            </header>
        </div>
        <div className="headline">
            <h2 className='text-center'>List of Employees</h2>
            </div >
        <div className='container'>

            

            <div className="table-alluser">

            
            <table className='table table-striped table-bordered'>
             <thead>
              <tr>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>DOB</th>
              <th>Feedback</th>
              <th>Grade</th>
              <th>Project Joining Date</th>
              <th>Project Status</th>
              <th>Location</th>
              <th>Actions</th>
              </tr>
             </thead>
            <tbody>
                {employees.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        <td>{employee.dob}</td>
                        <td>{employee.feedback}</td>
                        <td>{employee.grade}</td>
                        <td>{employee.projectJoiningDate}</td>
                        <td>{employee.projectStatus}</td>
                        <td>{employee.location}</td>
                        <td>
                            <button className='btn1 btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                            <button className='btn2 btn-danger' onClick={() => removeEmployee(employee.id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
            </table>
            </div>
        </div>
        </>
    );
};

export default EmployeeList;
