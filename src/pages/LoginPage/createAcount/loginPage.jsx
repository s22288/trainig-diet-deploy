import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import backgroundSVG from "../../../photo/background.svg";
import BackNavbar from "../../../components/Medium/navbar/backNavbar";
import { LoginToUserPage } from "../../../services/usersServices/UserService";

const LoginPage = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const [status, userStatus] = useState("USER");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let login = {
            email: email,
            password: password
        }
        LoginToUserPage(login).then(response => {
            if (response.status === 403) {
                window.location.href = '/login';
            }
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if (response.ok) {

                navigate('/user-page')

            }
            return response.json();
        }).then(data => {
            const token = data.token;
            localStorage.setItem('jwtToken', token);
            console.log(token)
            const role = JSON.parse(window.atob(token.split(".")[1])).role;
            let userRole = role[0].authority

            switch (userRole) {
                case 'ADMIN':
                    navigate('/admin-page');
                    break;
                case 'USER':
                    navigate('/user-page');
                    break;
                case 'PREMIUMUSER':
                    navigate('/premium-user-page');
                    break;
                default:
                    navigate('/login');
            }
            return data;
        })
            .catch(error => {
                console.error('Error during registration:', error);
                throw error;
            });

    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundSVG})`,
                height: "100vh",
                backgroundSize: "cover",
            }}
        >
            <BackNavbar />
            <form onSubmit={handleSubmit} className="create-account-login-form">
                {error && <p>{error}</p>}

                <label className="customlb">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <label className="customlb">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
};
export default LoginPage;