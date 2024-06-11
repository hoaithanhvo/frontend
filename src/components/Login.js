import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                password,
            });
            console.log(response);
            setMessage('Login successful'); // Hiển thị thông báo thành công
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage('Invalid username or password'); // Hiển thị thông báo "Sai mật khẩu" khi đăng nhập thất bại
            } else {
                setMessage('Error logging in: ' + error.response.data); // Hiển thị thông báo lỗi khác nếu có
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>} {/* Hiển thị thông báo */}
        </div>
    );
};

export default Login;
