import React, { useState } from 'react';
// import './Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Home = () => {
    const navigator = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/login', { username, password });
            if (response.data === 'Login Successful') {
                // Redirect to Home page upon successful login
                navigator('/Home');
            } else {
                alert('Wrong credentials');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Error during login. Please try again.');
        }
    };

    return (
        <div className='main'>
            <div className="container">
                {/* <div className="heading">
                    <h1>Welcome to Employee Monitoring System</h1>
                </div> */}

                <div className="login-form">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
