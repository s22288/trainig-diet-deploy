import PremiumUserIndicators from "../../../components/Big/userData/userIndicators/indicators";

import './indicators.css'
import FunctionalityPremiumNavbar from "../../../components/Medium/navbar/functionalityPremiumNavbar";
const Indicators = () => {
    return (
        <div className="user-indicators-background" >
            <FunctionalityPremiumNavbar />
            <PremiumUserIndicators />
        </div>)
}

export default Indicators;