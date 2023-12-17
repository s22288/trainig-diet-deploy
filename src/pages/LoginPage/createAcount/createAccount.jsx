import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./login.css";
import backgroundSVG from "../../../photo/wave.svg";
import BackNavbar from "../../../components/Medium/navbar/backNavbar";
import { CreateAccount, RegisterUser } from "../../../services/usersServices/UserService";
const CreateAccountPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [sex, setSex] = useState(true);

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let userdata = {
            "firstname": firstName,
            "lastname": lastName,
            "email": email,
            "password": password,
            "birthDate": birthDate,
            "height": height,
            "weight": weight,
            "palfactor": 1.2,
            "sex": sex
        }

        RegisterUser(userdata)
        navigate('/')
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
                {error && <p className="error-message">{error}</p>}{" "}
                <label className="create-account-customlb">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <label className="create-account-customlb">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />

                <label className="create-account-customlb">FirstName:</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <br />
                <label className="create-account-customlb">LastName:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <br />






                <label className="create-account-customlb">BirthDate:</label>
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                />
                <br />

                <label className="create-account-customlb">Height:</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                />
                <br />

                <label className="create-account-customlb">Weight:</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />
                <br />

                <label className="create-account-customlb">Sex:</label>
                <input
                    type="radio"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    required
                />
                <br />

                <button type="submit" className="create-account-login-button">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default CreateAccountPage;