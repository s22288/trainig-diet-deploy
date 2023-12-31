import { useLocation } from "react-router-dom";
import CustomizedRating from "../ExerciseDetails/customRaiting";
import trainImage from "../../../../photo/traininguser.jpg";
import FunctionalityNavbar from "../../../../components/Medium/navbar/functionalitynavbar";
import './../../../../context/mealsandexercisedetails.css'
import FunctionalityPremiumNavbar from "../../../../components/Medium/navbar/functionalityPremiumNavbar";
import { useEffect, useState } from "react";
import { checkUserRole } from "../../../../services/usersServices/UserService";


const ExcerciseDetails = () => {

    const location = useLocation();
    const data = location.state?.data;

    const [role, setRole] = useState('USER')
    useEffect(() => {
        checkUserRole().then((fulfilledValue) => {
            const stringValue = String(fulfilledValue);
            setRole(stringValue);
        }, []);

        if (!data) {
            return <div>No exercise data available.</div>;
        }


    }, [location.pathname])



    return (
        <div>
            {role === 'USER' ? (
                <FunctionalityNavbar />
            ) : (
                <FunctionalityPremiumNavbar />
            )}
            <div className="context-details-container">
                {data.map((exercise) => (
                    <div className="context-card" key={exercise.id}>
                        <img src={trainImage} alt={exercise.name} />

                        <div className="exercise-details">
                            <h3>Name: {exercise.name}</h3>
                            <p>BodyPart:  {exercise.bodypartEntitySet[0].description}</p>
                            <CustomizedRating rate={exercise.levelOfAdvance} />
                            <p >Reps {exercise.reps}</p>
                            <p >Series {exercise.series}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    );
};
export default ExcerciseDetails;