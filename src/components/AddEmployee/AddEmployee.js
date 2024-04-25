import React,{useEffect, useState} from 'react'
import { createEmployee, updateEmployee } from '../../Services/EmployeeServices';
import { getEmployee } from '../../Services/EmployeeServices';
import './AddEmployee.css';
import { useNavigate, useParams } from 'react-router-dom';

const AddEmployee = () => {


    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [emailId,setEmailId] = useState('')
    const [dob, setDob] = useState('')
    const [feedback,setFeedback] = useState('')
    const [grade,setGrade] = useState('')
    const [projectJoiningDate,setProjectJoiningDate] = useState('')
    const [projectStatus,setProjectStatus] = useState('')
    const [location,setLocation] = useState('')
     
     const {id} = useParams();
     const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        dob: '',
        feedback: '',
        grade: '',
        projectJoiningDate: '',
        projectStatus: '',
        location: ''
    })


    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmailId(response.data.emailId);
                setDob(response.data.dob);
                setFeedback(response.data.feedback);
                setGrade(response.data.grade);
                setProjectJoiningDate(response.data.projectJoiningDate);
                setProjectStatus(response.data.projectStatus);
                setLocation(response.data.location);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])


    const saveOrUpdateEmployee = async(e) => {
        e.preventDefault();

        if(validateForm()){
            const employee = {firstName, lastName, emailId, dob, feedback, grade, projectJoiningDate, projectStatus, location}
            console.log(employee)

        
            try{
            if(id){
                const response = await updateEmployee(id, employee)
                console.log(response.data);
                navigator('/employees/allUsers')
            }else{
                const response = await createEmployee(employee);
            console.log(response.data);
            navigator('/employees/allUsers');
            }
            }catch(error){
            console.log(error);
            }
        }
    }


    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }else{
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        }else{
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if(emailId.trim()){
            errorsCopy.emailId = '';
        }else{
            errorsCopy.emailId = 'Email is required';
            valid = false;
        }

        if(dob.trim()){
            errorsCopy.dob = '';
        }else{
            errorsCopy.dob = 'DOB is required';
            valid  = false;
        }

        if(feedback.trim()){
            errorsCopy.feedback = '';
        }else{
            errorsCopy.feedback = 'Feedback is required';
            valid = false;
        }

        if(grade.trim()){
            errorsCopy.grade = '';
        }else{
            errorsCopy.grade = 'Grade is required';
            valid = false;
        }

        if(projectJoiningDate.trim()){
            errorsCopy.projectJoiningDate = '';
        }else{
            errorsCopy.projectJoiningDate = 'Project joining date is required';
            valid = false;
        }

        if(projectStatus.trim()){
            errorsCopy.projectStatus = '';
        }else{
            errorsCopy.projectStatus = 'Project joining date is required';
            valid = false;
        }

        if(location.trim()){
            errorsCopy.location = '';
        }else{
            errorsCopy.location = 'location is required';
            valid = false;
        }

        setErrors(errorsCopy);
        
        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }


  return (
    <>
    <div>
        <header>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <a className='navbar-brand'>Employee Monitoring System</a>
            </nav>
        </header>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='card'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input 
                            type='text'
                            placeholder='Enter Employee first name'
                            name='firstName'
                            value={firstName}
                            className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
                            onChange={(e) => setFirstName(e.target.value)}
                            >
                            </input>
                            {errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input 
                            type='text'
                            placeholder='Enter Employee last name'
                            name='lasttName'
                            value={lastName}
                            className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                            onChange={(e) => setLastName(e.target.value)}
                            >
                            </input>
                            {errors.lastName && <div className='invalid-feedback'> { errors.lastName} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email Id</label>
                            <input 
                            type='email'
                            placeholder='Enter Employee email Id'
                            name='emailId'
                            value={emailId}
                            className={`form-control ${errors.emailId ? 'is-invalid': ''}`}
                            onChange={(e) => setEmailId(e.target.value)}
                            >
                            </input>
                            {errors.emailId && <div className='invalid-feedback'> { errors.emailId} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Date of Birth</label>
                            <input 
                            type='date'
                            placeholder='Enter Employee Date of Birth'
                            name='dob'
                            value={dob}
                            className={`form-control ${errors.dob ? 'is-invalid': ''}`}
                            onChange={(e) => setDob(e.target.value)}
                            >
                            </input>
                            {errors.dob && <div className='invalid-feedback'> { errors.dob} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Feedback</label>
                            <input 
                            type='text'
                            placeholder='Enter feedback for employee'
                            name='feedback'
                            value={feedback}
                            className={`form-control ${errors.feedback ? 'is-invalid': ''}`}
                            onChange={(e) => setFeedback(e.target.value)}
                            >
                            </input>
                            {errors.feedback && <div className='invalid-feedback'> { errors.feedback} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Grade</label>
                            <input 
                            type='text'
                            placeholder='Enter Grade of employee'
                            name='grade'
                            value={grade}
                            className={`form-control ${errors.grade ? 'is-invalid': ''}`}
                            onChange={(e) => setGrade(e.target.value)}
                            >
                            </input>
                            {errors.grade && <div className='invalid-feedback'> { errors.grade} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Project Joining Date</label>
                            <input 
                            type='date'
                            placeholder='Enter employee project joining date'
                            name='projectJoiningDate'
                            value={projectJoiningDate}
                            className={`form-control ${errors.projectJoiningDate ? 'is-invalid': ''}`}
                            onChange={(e) => setProjectJoiningDate(e.target.value)}
                            >
                            </input>
                            {errors.projectJoiningDate && <div className='invalid-feedback'> { errors.projectJoiningDate} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Project Status</label>
                            <input 
                            type='text'
                            placeholder='Enter project status'
                            name='projectStatus'
                            value={projectStatus}
                            className={`form-control ${errors.projectStatus ? 'is-invalid': ''}`}
                            onChange={(e) => setProjectStatus(e.target.value)}
                            >
                            </input>
                            {errors.projectStatus && <div className='invalid-feedback'> { errors.projectStatus} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Location</label>
                            <input 
                            type='text'
                            placeholder='Enter Employee Location'
                            name='location'
                            value={location}
                            className={`form-control ${errors.location ? 'is-invalid': ''}`}
                            onChange={(e) => setLocation(e.target.value)}
                            >
                            </input>
                            {errors.location && <div className='invalid-feedback'> { errors.location} </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddEmployee
