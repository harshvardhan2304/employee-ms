import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/employees';

// export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post('http://localhost:8080/employees/newUser', employee);

export const getEmployee = (employeeID) => axios.get('http://localhost:8080/employees/employee' + '/' + employeeID);

export const updateEmployee = (employeeID, employee) => axios.put('http://localhost:8080/employees/update' + '/' + employeeID,employee);

export const deleteEmployee = (employeeId) => axios.delete('http://localhost:8080/employees/delete' + '/' + employeeId);