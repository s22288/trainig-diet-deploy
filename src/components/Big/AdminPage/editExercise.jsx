import { useLocation } from "react-router-dom";

import { ReactComponent as Edit } from '../../../photo/edit.svg'
import AdminNavbar from "../../Medium/navbar/adminNavbar";
import { useState } from "react";
import { EditChoosenExercise } from "../../../services/exerciseService/exerciseService";

const EditExercise = () => {


    const location = useLocation();
    console.log('Location:', location);
    const data = location.state?.data;
    const [formData, setFormData] = useState(data);
    console.log(data)
    if (!data) {
        return <div>
            <AdminNavbar />
            <p>No Exercise data.</p></div>;
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        EditChoosenExercise(formData).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {

                console.log(data);
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });
    };
    return (
        <div>
            <AdminNavbar />
            <form className="admin-form-container" onSubmit={handleSubmit}>
                <label className="admin-label" htmlFor="name">Exercise Name:</label>
                <input className="admin-input "
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                /><br />

                <label className="admin-label" htmlFor="photo">Photo URL:</label>
                <input className="admin-input "
                    type="text"
                    id="photo"
                    name="photo"
                    value={formData.photo}
                    onChange={handleInputChange}
                    required
                /><br />

                <label className="admin-label" htmlFor="reps">Reps:</label>
                <input className="admin-input "
                    type="number"
                    id="reps"
                    name="reps"
                    value={formData.reps}
                    onChange={handleInputChange}
                    required
                /><br />

                <label className="admin-label" htmlFor="series">Series:</label>
                <input className="admin-input "
                    type="number"
                    id="series"
                    name="series"
                    value={formData.series}
                    onChange={handleInputChange}
                    required
                /><br />

                <label className="admin-label" htmlFor="levelOfAdvance">Level of Advance:</label>
                <input className="admin-input "
                    type="number"
                    id="levelOfAdvance"
                    name="levelOfAdvance"
                    value={formData.levelOfAdvance}
                    onChange={handleInputChange}
                    required
                /><br />

                <label className="admin-label" htmlFor="trainingMachineId">Training Machine ID:</label>
                <input className="admin-input "
                    type="number"
                    id="trainingMachineId"
                    name="trainingMachineId"
                    value={formData.trainingMachineId}
                    onChange={handleInputChange}
                    required
                /><br />

                <button className="admin-button" type="submit">Submit</button>
            </form>

        </div>
    )
}

export default EditExercise