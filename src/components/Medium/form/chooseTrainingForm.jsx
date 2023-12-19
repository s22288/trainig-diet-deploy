import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./choose.css";
import backgroundSVG from "../../../photo/userpage.svg";

const ChooseTraining = () => {
    const [select, setSelect] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (select === "train") {
            navigate("/user-page/create-training/train-customize");
        } else {
            navigate("/user-page/create-training/diet-customize");
        }
    };

    const handleChange = (event) => {
        setSelect(event.target.value);
    };
    let value = 0;
    return (
        <div>
            <div
                className="form-choose-center"
                style={{
                    backgroundImage: `url(${backgroundSVG})`,
                    height: "100vh",
                    backgroundSize: "cover",
                }}
            >

                <form className="form-choose-login-form" onSubmit={handleSubmit}>
                    <label className="form-choose-customlb">Training with Diet</label>

                    <input
                        type="radio"
                        value="trainAndDiet"
                        name="anserw"
                        onChange={handleChange}
                    />

                    <label className="form-choose-customlb">Only Training</label>
                    <input
                        type="radio"
                        value="train"
                        name="anserw"
                        onChange={handleChange}
                    />

                    <input className=" form-choose-login-button " type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default ChooseTraining;