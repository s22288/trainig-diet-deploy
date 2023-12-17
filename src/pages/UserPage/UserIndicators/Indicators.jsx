import PremiumUserIndicators from "../../../components/Big/userData/userIndicators/indicators";
import FunctionalityNavbar from "../../../components/Medium/navbar/functionalitynavbar";
import backgroundSVG from "../../../photo/background.svg"
import './indicators.css'
import PremiumUserNavbar from "../../../components/Medium/navbar/premiuUserNavbar";
import FunctionalityPremiumNavbar from "../../../components/Medium/navbar/functionalityPremiumNavbar";
const Indicators = () => {
    return (
        <div className="user-indicators-background" >
            <FunctionalityPremiumNavbar />
            <PremiumUserIndicators />
        </div>)
}

export default Indicators;