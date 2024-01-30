import { useLocation } from "react-router-dom";
import FunctionalityNavbar from "../../Medium/navbar/functionalitynavbar";
import { ReactComponent as Houselogo } from "../../../photo/house.svg";
import { ReactComponent as TrainingLogo } from "../../../photo/training.svg";
import { ReactComponent as NoteLogo } from "../../../photo/note.svg";
import './smallTrainingDetails.css'
import { useEffect, useState } from "react";
import { checkUserRole } from "../../../services/usersServices/UserService";
import PremiumUserAccount from "../userData/premiumUserData";
import PremiumUserNavbar from "../../Medium/navbar/premiuUserNavbar";
import FunctionalityPremiumNavbar from "../../Medium/navbar/functionalityPremiumNavbar";
import { GetDataOfEvent } from "../../../services/trainingServices/trainingService";

const SmallTrainigDetails = () => {
    const location = useLocation();
    const [role, setRole] = useState('USER')
    const [events, setEvents] = useState([])

    const data = location.state?.data;

    useEffect(() => {


        checkUserRole().then((fulfilledValue) => {
            const stringValue = String(fulfilledValue);
            setRole(stringValue);
        }, []);


    }, [location.pathname])

    useEffect(() => {
        GetDataOfEvent(data.trainingId).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {
                setEvents(data)
                console.log('event')
                console.log(data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])
    if (!data) {
        return <div>No exercise data available.</div>;
    }


    return (
        <div className="small-training-background" >
            {role === 'USER' ? (
                <FunctionalityNavbar />
            ) : (
                <FunctionalityPremiumNavbar />
            )}
            {events && events.length > 0 &&
                <>
                    <h2><TrainingLogo />/ {data.training} </h2>

                    <h2><Houselogo /> /{events[0].localozation}</h2>
                    <h2><NoteLogo /> /{events[0].description}</h2>
                </>
            }
          
        </div>
    )

}
export default SmallTrainigDetails