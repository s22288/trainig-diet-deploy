import { useEffect, useState } from "react"
import CalendarOfTraining from "../../../components/Big/userData/calendar/calendar"
import FunctionalityPremiumNavbar from "../../../components/Medium/navbar/functionalityPremiumNavbar"
import FunctionalityNavbar from "../../../components/Medium/navbar/functionalitynavbar"
import { checkUserRole } from "../../../services/usersServices/UserService"
import './trainingCalendar.css'
const TrainingsCalendar = () => {
    const [role, setRole] = useState('USER')
    useEffect(() => {

        setRole(checkUserRole());
    }, [])

    return (
        <div className="calendar-background">
            {role === 'USER' ? (
                <FunctionalityNavbar />
            ) : (
                <FunctionalityPremiumNavbar />
            )}
            <CalendarOfTraining />
        </div>
    )
}
export default TrainingsCalendar