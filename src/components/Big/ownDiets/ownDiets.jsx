import { useEffect, useState } from "react";
import DietDetails from "./dietDetails";
import { GetAllDiets } from "../../../services/dietServices/dietService";
import "../../../context/own.css";
import { Link } from "react-router-dom";
const OwnDiets = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleNoteDeletion = (id) => {
        setUserData((prevUserData) =>
            prevUserData.filter((item) => item.id !== id)
        );
    };
    useEffect(() => {


        GetAllDiets()
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch user data");
                }
            })
            .then((data) => {
                setUserData(data);
                setLoading(false);
                console.log(data)
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
                setLoading(false);
            });

    }, []);
    return (
        <div className="onwTraningContainer">
            {loading ? (
                <p>Loading...</p>
            ) : userData && userData.length > 0 ? (
                <div className="parent">
                    {userData.map((item) => (
                        <div className="column">
                            <DietDetails key={item.id} val={item} ondelete={handleNoteDeletion} />
                        </div>
                    ))}
                </div>
            ) : (
<div>
    
                <p className="emptytrain">No Diet available</p>
                <Link to={'/user-page/create-training/diet-customize'}>Create first Diet</Link>

                </div>
            )}
        </div>
    );
};
export default OwnDiets;