import React, { useEffect, useState } from "react";
import LineChart from "./linecharts";
import './maxes.css';
import { getUserMaxes } from "../../../../services/usersServices/UserService";

const MaxesDiagram = () => {
    const [userMaxes, setUserMaxes] = useState([]);

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

    console.log("userMaxes:", userMaxes);

    return (
        <div>
            <LineChart data={userMaxes} />
        </div>
    );
};

export default MaxesDiagram;
