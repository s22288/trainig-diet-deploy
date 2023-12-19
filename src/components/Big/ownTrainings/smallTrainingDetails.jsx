import { useLocation } from "react-router-dom";
import FunctionalityNavbar from "../../Medium/navbar/functionalitynavbar";
import { ReactComponent as Houselogo } from "../../../photo/house.svg";
import { ReactComponent as TrainingLogo } from "../../../photo/training.svg";
import { ReactComponent as NoteLogo } from "../../../photo/note.svg";
import './smallTrainingDetails.css'
import { useEffect, useState } from "react";
import { checkUserRole } from "../../../services/usersServices/UserService";
const SmallTrainigDetails = () => {
    const location = useLocation();
    const [role, setRole] = useState('USER')

    const data = location.state?.data;
    console.log('dane' + data.day)
    useEffect(() => {
        checkUserRole().then((fulfilledValue) => {
            const stringValue = String(fulfilledValue);
            setRole(stringValue);
        }, []);


    }, [location.pathname])
    if (!data) {
        return <div>No exercise data available.</div>;
    }


    return (
        <div className="small-training-background" >
            {role === 'USER' ? (
                <FunctionalityNavbar />
            ) : (
                <FunctionalityNavbar />
            )}

            <div className="small-training-details-container" >
                <h2><TrainingLogo /> {data.training.description} /{data.training.treiningType} </h2>

                <h2><Houselogo /> {data.trainingEvent.localozation}</h2>
                <h2 ><NoteLogo /> {data.trainingEvent.description}</h2>
            </div>
        </div>
    )

}
export default SmallTrainigDetails