import { useEffect, useState } from "react"
import RecordForm from "../../../components/Medium/form/recordsForm"
import FunctionalityNavbar from "../../../components/Medium/navbar/functionalitynavbar"
import './records.css'
import { checkUserRole } from "../../../services/usersServices/UserService"
import FunctionalityPremiumNavbar from "../../../components/Medium/navbar/functionalityPremiumNavbar"
import { useLocation } from "react-router-dom"
const Records = () => {
    const [role, setRole] = useState('USER')
    const location = useLocation();

    useEffect(() => {
        checkUserRole().then((fulfilledValue) => {
            const stringValue = String(fulfilledValue);
            console.log('role ' + stringValue)
            setRole(stringValue);
        }, []);


    }, [location.pathname])

    return (
        <div className="user-records">
            {role === 'USER' ? (
                <FunctionalityNavbar />
            ) : (
                <FunctionalityPremiumNavbar />
            )}
            <RecordForm />

        </div>
    )
}

export default Records