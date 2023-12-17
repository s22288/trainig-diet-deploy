import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react";
import calculateCPM from "../../../../services/usersServices/IndicatorService";
import './select.css'
const SelectDietGoal = (props) => {
    const { passGoalToParent, passCaloriesToParent } = props;

    const [cpm, setCpm] = useState('lose')
    const [cpmCopy, setCpmCopy] = useState();
    let age
    useEffect(() => {



        calculateCPM()
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch user data");
                }
            })
            .then((d) => {

                setCpm(d);




            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });

    }, []);


    const handleChange = (event) => {
        event.preventDefault()
        setCpmCopy(cpm)
        let goalSett = event.target.value
        passGoalToParent(goalSett)

        if (goalSett === 'lose') {
            setCpmCopy((cpm - 300).toFixed(2))



        }

        if (goalSett === 'gain') {
            setCpmCopy((cpm + 300).toFixed(2))

        }
        passCaloriesToParent(cpmCopy)

    }

    return (
        <div>
            <div className="select-container">
                <FormControl className="custom-select" >
                    <InputLabel className="custom-select-label" id="demo-simple-select-label">Set Goal</InputLabel>
                    <Select required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={'lose'}>Lose Weight</MenuItem>
                        <MenuItem value={'maintain'}>Maintain Weight</MenuItem>
                        <MenuItem value={'gain'}>Gain Weight</MenuItem>
                    </Select>
                </FormControl>
                {cpmCopy ? <h2>{cpmCopy} kcal</h2> : null}


            </div>




        </div>
    )
}

export default SelectDietGoal