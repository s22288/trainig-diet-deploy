import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import "../../../../context/customization.css";
import {
    GetAllMealTypes,
    SaveDiet,
} from "../../../../services/dietServices/dietService"
import { useLocation, useNavigate } from "react-router-dom";

import FunctionalityNavbar from "../../../Medium/navbar/functionalitynavbar";
import CustomMeal from "./customMeal/customMeal";
import { GetMealByMealType } from "../../../../services/mealService/mealService";
import { checkUserRole } from "../../../../services/usersServices/UserService";
import FunctionalityPremiumNavbar from "../../../Medium/navbar/functionalityPremiumNavbar";
import calculateCPM from "../../../../services/usersServices/IndicatorService";

const DietCustomization = () => {

    const location = useLocation();

    useEffect(() => {
        checkUserRole().then((fulfilledValue) => {
            const stringValue = String(fulfilledValue);
            setRole(stringValue);
        }, []);


    }, [location.pathname])
    const navigate = useNavigate();
    const [userData, setUserData] = useState();
    const [description, setDescription] = useState('describe diet');
    const [alergic, setAlergic] = useState();
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectOption] = useState(1);
    const [goal, setGoal] = useState('lose');
    const [role, setRole] = useState('USER')
    const [cpm, setCpm] = useState()
    const [cpmCopy, setCpmCopy] = useState();



    const [calories, setCalories] = useState(0)

    useEffect(() => {

        GetAllMealTypes().then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {
                setOptions(data)




            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });



    }, [])
    useEffect(() => {
        setCpmfunc('lose')
    }, [])
    const HandleSubmit = (event) => {
        event.preventDefault();
        fetchUserData(selectedOption);


    };
    const handleChange = (event) => {
        event.preventDefault();

        setSelectOption(event.target.value);
        console.log(event.target.value)
    };



    const replaceData = (index, mainIndex) => {

        let userDataIndex = userData.findIndex((d) => {
            return d.mealEntity.id === mainIndex;
        });


        const updatedUserData = [...userData];
        const alternatives = updatedUserData[userDataIndex].alternatives;
        if (alternatives.length > 0) {
            let copy = updatedUserData[userDataIndex].mealEntity;
            updatedUserData[userDataIndex].mealEntity = alternatives[index];
            updatedUserData[userDataIndex].alternatives[index] = copy;
        }
        setUserData(updatedUserData);
        calculateCalories()


    };


    const calculateCalories = () => {
        const count = userData.map((data) => data.mealEntity.calories).reduce((start, next) => start + next, 0);
        setCalories(count)
        return count;
    }

    const ToMainMeals = () => {
        return userData.map((data) => data.mealEntity)
    }
    const saveDiet = (event) => {
        event.preventDefault();



        const dietData = {
            caloriesCount: calculateCalories(),
            dietName: description,
            dietGoal: goal,
            mealEntitySet: ToMainMeals(),
        };
        SaveDiet(dietData);
        navigate("/user-page/create-training/train-customize");
    };


    const fetchUserData = (typeId) => {

        GetMealByMealType(typeId, parseInt(cpm))
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch user data");
                }
            })
            .then((data) => {
                setUserData(data);
                console.log(data)



                setAlergic(data[0].allAlergics)


            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });


    };
    const handleInput = (event) => {
        setDescription(event.target.value);
    };


    const handleChangeCalories = (event) => {
        event.preventDefault()
        const selectedGoal = event.target.value;


        setGoal(selectedGoal);
        setCpmfunc(selectedGoal)


    };

    const setCpmfunc = (selectedGoal) => {
        console.log(goal)
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
                setCpmCopy(d)




                if (selectedGoal === 'lose') {
                    setCpmCopy((d - 300).toFixed(2))
                    console.log(cpmCopy)
                    console.log(d)


                }

                if (selectedGoal === 'gain') {
                    setCpmCopy((d + 300).toFixed(2))

                }
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });

    }


    return (
        <div>
            {role === 'USER' ? (
                <FunctionalityNavbar />
            ) : (
                <FunctionalityPremiumNavbar />
            )}

            <div className="context-customize-container">



                <form onSubmit={HandleSubmit} className="context-customize-comic-form">
                    <div className="select-container">

                        <label htmlFor="goal">Set Goal</label>
                        <select
                            id="goal"
                            value={goal}
                            onChange={handleChangeCalories}
                            required
                        >
                            <option value="lose">Lose Weight</option>
                            <option value="maintain">Maintain Weight</option>
                            <option value="gain">Gain Weight</option>
                        </select>
                        {cpmCopy ? <h2>{cpmCopy} kcal</h2> : null}


                    </div>
                    {options.map(option => (
                        <label key={option.id}>
                            <input
                                type="radio"
                                value={option.id}
                                name="return"
                                checked={selectedOption == option.id}

                                onChange={handleChange}
                            />
                            {option.name}
                        </label>
                    ))}
                    <label>Diet description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={handleInput} required
                    />
                    <br />
                    <br></br>

                    <input type="submit" value="Submit" className="context-customize-submit-button" />
                </form>


            </div>
            <div className="context-customize-user-data">
                {userData ? (
                    userData.map((item, index) => (
                        <div key={index}>
                            <CustomMeal onreplace={replaceData} data={item} />
                        </div>
                    ))
                ) : (
                    <p className="context-customize-warning"></p>
                )}
                <div className="context-customize-save-button">

                    {userData ? (
                        <div>
                            <Button variant="contained" onClick={saveDiet}>
                                Save
                            </Button>
                        </div>

                    ) : (<p></p>)}
                </div>
            </div>

            <div className="context-customize-save-button">
                {userData ? (
                    <div>
                        <p className="calories">
                            <h2>Alergeny:</h2>
                            {alergic.map((a, index) => (
                                <div key={index} className="context-customize-comic-div">
                                    <p className="context-customize-alergic">{a.id})  <img className="context-customize-diet-alergens-img " src={a.photo} alt="alergeny" /> Name: {a.name}, Description: {a.description}</p>


                                </div>
                            ))}
                        </p>
                        <p></p>
                    </div>
                ) : (

                    <p></p>
                )}
            </div>
        </div>
    );
};
export default DietCustomization;