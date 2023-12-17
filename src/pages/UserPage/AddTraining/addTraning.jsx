import { useEffect, useState } from "react"
import ChooseTraining from "../../../components/Medium/form/chooseTrainingForm"
import FunctionalityNavbar from "../../../components/Medium/navbar/functionalitynavbar"
import { checkUserRole } from "../../../services/usersServices/UserService"
import FunctionalityPremiumNavbar from "../../../components/Medium/navbar/functionalityPremiumNavbar"
import { useLocation } from "react-router-dom"

const AddTranining = () => {
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
            )}            <ChooseTraining />
        </div>
    )
}

export default AddTranining;