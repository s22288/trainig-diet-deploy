import { useEffect, useState } from "react";
import "./userData-useracc.css";
import MenPhoto from '../../../photo/blackMen.png'
import Women from '../../../photo/blackWoman.png'

import { getUserData, updateUsersData } from "../../../services/usersServices/UserService";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import FunctionalityNavbar from "../../Medium/navbar/functionalitynavbar";

const UserAccount = () => {
    const [birthDate, setBirthDate] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [pal, setPal] = useState(0);
    const [gender, setGender] = useState('')

    const [userData, setUserData] = useState(null);
    useEffect(() => {

        getUserData()
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch user data");
                }
            })
            .then((data) => {
                setUserData(data);
                setBirthDate(data.birthDate)
                setWeight(data.weight)
                setGender(data.sex)
                setHeight(data.height)
                setPal(data.palfactor)
                console.log(userData)

            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });



    }, []);


    const palArray = [
        {
            val: 1.2,
            mess: 'Brak aktywności zawodowej, chory, leżący'
        },
        {
            val: 1.4,
            mess: 'Pracownik biurowy, którego aktywność związana jest wyłącznie z obowiązkami domowymi'
        },
        {
            val: 1.6,
            mess: 'Pracownik biurowy, trenujący 2-3 razy w tygodniu przez minimum godzinę'
        },
        {
            val: 1.8,
            mess: 'Pracownik biurowy, trenujący 3-4 razy w tygodniu przez minimum godzinę'
        },
        {
            val: 2.0,
            mess: 'Zawodowy sportowiec, trenujący minimum 6 godzin tygodniowo lub osoba ciężko pracująca fizycznie'
        }

    ]

    const handleSubmit = (event) => {
        event.preventDefault();


        const data = {
            birthDate: birthDate,
            height: height,
            weight: weight,
            palfactor: pal
        };

        updateUsersData(data).then(() => {
            setUserData({
                ...userData,
                birthDate: data.birthDate,
                height: data.height,
                weight: data.weight,
                palfactor: data.palfactor
            });
        })
            .catch((error) => {
                console.error("Failed to update user data", error);
            });




    };

    const handleChange = (event) => {
        setPal(event.target.value)
    }



    return (
        <div

        >
            <FunctionalityNavbar />




            <div className="userData-content-image-container-data-container">
                <div className="userData-content">
                    <div className="userData-content-image-containerr">
                        {userData ? (
                            userData.photo ? (

                                gender ? (
                                    <img src={MenPhoto} className="userData-image" />

                                ) :
                                    <img src={Women} className="userData-image" />



                            ) :
                                <img src={MenPhoto} className="userData-image" />


                        ) : (
                            <div className="userData-placeholder-image" />
                        )}
                    </div>
                    <div className="data-container">
                        <div className="userData-background-div"></div>

                        <h1 className="userData-title">User Data</h1>

                        {userData ? (
                            <div className="userData-background-div">
                                {userData.email ? (
                                    <p className="userData-title-text">Email: {userData.email}</p>
                                ) : (
                                    <p className="userData-title-text">Email: ?</p>
                                )}



                                {userData.birthDate ? (
                                    <p className="userData-title-text">BirthDate: {userData.birthDate}</p>
                                ) : (
                                    <p className="userData-title-text">BirthDate: ?</p>
                                )}
                                {userData.height ? (
                                    <p className="userData-title-text">Height: {userData.height}</p>
                                ) : (
                                    <p className="userData-title-text">Height: ?</p>
                                )}
                                {userData.weight ? (
                                    <p className="userData-title-text">Weight: {userData.weight}</p>
                                ) : (
                                    <p className="userData-title-text">Weight: ?</p>
                                )}
                                {userData.palfactor ? (
                                    <p className="userData-title-text">PalFactor: {userData.palfactor}</p>
                                ) : (
                                    <p className="userData-title-text">PalFactor: ?</p>
                                )}
                            </div>

                        ) : (
                            <p className="text">No user data available.</p>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="userData-login-form">
                        <label className="customlb">BrithDate:</label>
                        <input

                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="userData-user-input" required />
                        <br />

                        <label className="customlb">Height:</label>
                        <input

                            type="number"
                            value={height}
                            max={230}
                            min={100}
                            onChange={(e) => setHeight(e.target.value)}
                            className="userData-user-input" required />
                        <br />

                        <label className="customlb">Weight:</label>
                        <input

                            type="number"
                            value={weight}
                            max={200}
                            min={40}
                            onChange={(e) => setWeight(e.target.value)}
                            className="userData-user-input" required />
                        <br />
                        <FormControl fullWidth >

                            <InputLabel id="demo-simple-select-label">Pal</InputLabel>
                            <Select required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={pal}

                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={palArray[0].val} className="userData-title-text-menu-item-text">{palArray[0].mess} : {palArray[0].val} </MenuItem>
                                <MenuItem className="userData-title-text-menu-item-text" value={palArray[1].val}>{palArray[1].mess} : {palArray[1].val}</MenuItem>
                                <MenuItem className="userData-title-text-menu-item-text" value={palArray[2].val}>{palArray[2].mess} : {palArray[2].val}</MenuItem>
                                <MenuItem className="userData-title-text-menu-item-text" value={palArray[3].val}>{palArray[3].mess} : {palArray[3].val}</MenuItem>
                                <MenuItem className="userData-title-text-menu-item-text" value={palArray[4].val}>{palArray[4].mess} : {palArray[4].val}</MenuItem>

                            </Select >
                        </FormControl>

                        <button type="submit" className="login-button">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default UserAccount;