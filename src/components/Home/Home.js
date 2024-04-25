import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../../../src/component/Navbar';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  
    const navigator = useNavigate();

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function allEmployeeList(){
        navigator('/employees/allUsers')
    }

    function logout(){
        navigator('/')
    }

  
    return (
    <div className='homeMain'>
        <header>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <a className='navbar-brand'>Employee Monitoring System</a>
                <button className='logoutbtn' onClick={logout}>logout</button>
            </nav>
        </header>
    <div className="container">
            
        <div className="buttons">
            
            <div className="button-1">
            <button className='btn btn-primary' onClick={addNewEmployee}>Add Employee</button>
            </div>


            <div className="button-3">
                <button className='btn btn-primary'onClick={allEmployeeList}>All Employees</button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Home;
