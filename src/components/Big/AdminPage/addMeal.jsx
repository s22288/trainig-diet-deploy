import { useLocation, useNavigate } from "react-router-dom";
import AdminNavbar from '../../Medium/navbar/adminNavbar';
import { useState } from 'react';
import './edit.css'
import { EditChoosenExercise } from '../../../services/exerciseService/exerciseService';
import { SaveMealToDB } from "../../../services/mealService/mealService";

const SaveMeal = () => {
    const navigate =useNavigate()
    const location = useLocation();
    console.log('Location:', location);
    const data = location.state?.data;
    const [formData, setFormData] = useState(data);

    console.log(data)
    if (!data) {
        return <div>
            <AdminNavbar />
            <p>No Dishe data.</p></div>;
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
        SaveMealToDB(formData).then((response) => {
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
            navigate('/admin-page');

    };
    return (
        <div>
            <AdminNavbar />
            <form className='admin-form-container' onSubmit={handleSubmit}>
                <label className='admin-label' htmlFor="mealName">Meal Name:</label>
                <input className='admin-input'
                    type="text"
                    id="mealName"
                    name="mealName"
                    value={formData.mealName}
                    onChange={handleInputChange}
                    required
                /><br />

                <label className='admin-label' htmlFor="photo">Photo URL:</label>
                <input className='admin-input'
                    type="text"
                    id="photo"
                    name="photo"
                    value={formData.photo}
                    onChange={handleInputChange}
                    required
                /><br />

                <label className='admin-label' htmlFor="calories">Calories:</label>
                <input className='admin-input'
                    type="number"
                    id="calories"
                    name="calories"
                    value={formData.calories}
                    onChange={handleInputChange}
                    required
                /><br />

                <label className='admin-label' htmlFor="mealTypeId">Meal Type ID:</label>
                <input className='admin-input'
                    type="number"
                    id="mealTypeId"
                    name="mealTypeId"
                    value={formData.mealTypeId}
                    onChange={handleInputChange}
                    required
                /><br />

                <button className='admin-button' type="submit">Add meal</button>
            </form>

        </div>
    )
}
export default SaveMeal