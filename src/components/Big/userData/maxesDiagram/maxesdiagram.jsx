import React, { useEffect, useState } from "react";
import LineChart from "./linecharts";
import './maxes.css';
import { getUserMaxes } from "../../../../services/usersServices/UserService";

const MaxesDiagram = () => {
    const [userMaxes, setUserMaxes] = useState([]);
    const refreshfunc = () => {
        fetchData()
    }

    useEffect(() => {
        fetchData();
    }, []);

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

    return (
        <div>
            <LineChart data={userMaxes} />
            <button className="refresh-but" onClick={refreshfunc}>Update</button>
        </div>
    );
};

export default MaxesDiagram;
