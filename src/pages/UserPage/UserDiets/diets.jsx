import { useEffect, useState } from "react";
import OwnDiets from "../../../components/Big/ownDiets/ownDiets";
import FunctionalityPremiumNavbar from "../../../components/Medium/navbar/functionalityPremiumNavbar";
import FunctionalityNavbar from "../../../components/Medium/navbar/functionalitynavbar";
import { checkUserRole } from "../../../services/usersServices/UserService";
import { useLocation } from "react-router-dom";


const DietsPage = () => {
    const [role, setRole] = useState('USER')
    const location = useLocation();

    useEffect(() => {
        checkUserRole().then((fulfilledValue) => {
            const stringValue = String(fulfilledValue);
            setRole(stringValue);
        }, []);


    }, [location.pathname])
    return (
        <div>
            {role === 'USER' ? (
                <FunctionalityNavbar />
            ) : (
                <FunctionalityPremiumNavbar />
            )}
            <OwnDiets />
        </div>
    );
};

export default DietsPage;