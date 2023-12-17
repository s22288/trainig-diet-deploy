import { useEffect, useState } from "react"
import getPremiumUserIndicators from "../../../../services/premiumService/premiumService"
import BMIDiagram from "../Diagrams/BMIDiagram/bmi"
import IBWDiagram from "../Diagrams/IBWDiagram/ibw"
import WHRDiagram from "../Diagrams/WHRDiagram/whr"
import './indicators.css'
const PremiumUserIndicators = () => {
    const [indicators, setIndicators] = useState('')

    const [bmi, SetBmi] = useState(0)
    const [ibw, SetIbw] = useState(0)
    const [whr, setWhr] = useState('')

    useEffect(() => {
        getPremiumUserIndicators().then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {

                setIndicators(data)
                SetBmi(data.bmi)
                SetIbw(data.ibw)
                setWhr(data.whr)



            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });

    }, [])


    return (
        <div className="indicators">
            <IBWDiagram data={indicators} />

            <WHRDiagram data={whr} />

            <BMIDiagram data={indicators} />

        </div>
    )
}

export default PremiumUserIndicators