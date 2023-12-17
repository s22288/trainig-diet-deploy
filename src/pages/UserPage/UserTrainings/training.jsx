import { useEffect, useState } from "react";
import OwnTrainings from "../../../components/Big/ownTrainings/owntraining";
import FunctionalityNavbar from "../../../components/Medium/navbar/functionalitynavbar";
import { checkUserRole } from "../../../services/usersServices/UserService";
import FunctionalityPremiumNavbar from "../../../components/Medium/navbar/functionalityPremiumNavbar";
import { useLocation } from "react-router-dom";

const TrainingsPage = () => {
    const location = useLocation();
    const [role, setRole] = useState('USER')
    useEffect(() => {
        checkUserRole().then((fulfilledValue) => {
            const stringValue = String(fulfilledValue);
            setRole(stringValue);
        }, []);


    }, [location.pathname])
    console.log('Rendered with role:', role);

    return (
        <div>
            {role === 'USER' ? (
                <FunctionalityNavbar />
            ) : (
                <FunctionalityPremiumNavbar />
            )}            <OwnTrainings />
        </div>
    );
};

export default TrainingsPage;