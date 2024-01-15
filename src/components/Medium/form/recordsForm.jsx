import MaxesDiagram from "../../Big/userData/maxesDiagram/maxesdiagram";
import { addUserMaxes, getUserMaxes } from "../../../services/usersServices/UserService";
import './form-records.css'
import Chart from 'chart.js/auto';
import React, { useEffect, useState } from "react";
import LineChart from "../../Big/userData/maxesDiagram/linecharts";
import '../../../components/Big/userData/maxesDiagram/maxes.css';


const RecordForm = () => {
    const [userMaxes, setUserMaxes] = useState([]);

    const [bench, setBench] = useState(0);
    const [pullups, setPullups] = useState(0);

    const [squad, setSquad] = useState(0);

    const [deadlift, setDeadlift] = useState(0);

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const [dayOfRecord, setDayOfRecords] = useState(formattedDate);





    const fetchData = () => {
        getUserMaxes()
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch user data");
                }
            })
            .then((data) => {
                setUserMaxes(data);
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });
    };






    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(dayOfRecord)
        const record = {
            "bench": bench,
            "pullups": pullups,
            "squad": squad,
            "deadlift": deadlift,
            "dayOfRecords": dayOfRecord
        }

        addUserMaxes(record)
    }

    useEffect(() => {
        fetchData();
    }, [userMaxes]);

    return (
        <div className="form-container">

            <div>
                <LineChart data={userMaxes} />
                {/* <button className="refresh-but" onClick={refreshfunc}>Update</button> */}
            </div>
            <form onSubmit={handleSubmit} className="form-login-form">
                <label className="form-customlb">Benchpress Max :</label>
                <br></br>
                <input required
                    min={1}
                    max={500}
                    type="number"
                    value={bench}
                    onChange={(e) => setBench(e.target.value)}
                    className="form-user-input" />
                <br />

                <label className="form-customlb">Pullups Max :</label>
                <input required
                    min={1}
                    max={500}
                    type="number"
                    value={pullups}
                    onChange={(e) => setPullups(e.target.value)}
                    className="form-user-input" />
                <br />

                <label className="form-customlb">Squat Max :</label>
                <br></br>

                <input required
                    min={1}
                    max={500}
                    type="number"
                    value={squad}
                    onChange={(e) => setSquad(e.target.value)}
                    className="form-user-input" />
                <br />


                <label className="form-customlb">Deadlift Max :</label>
                <br></br>

                <input required
                    min={1}
                    max={500}
                    type="number"
                    value={deadlift}
                    onChange={(e) => setDeadlift(e.target.value)}
                    className="form-user-input" />
                <br />


                <label className="form-customlb">Date:</label>
                <br></br>
                <input required

                    type="date"
                    value={dayOfRecord}
                    onChange={(e) => setDayOfRecords(e.target.value)}
                    className="form-user-input" />

                <br />


                <button type="submit" className="form-login-button">
                    Add
                </button>
            </form>

        </div >

    )
}

export default RecordForm