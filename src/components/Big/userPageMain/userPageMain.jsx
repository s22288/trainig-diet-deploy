import { Splide, SplideSlide } from "@splidejs/react-splide";
import * as React from "react";


import image1 from "../../../photo/traininguser.jpg";
import image2 from "../../../photo/subscribe.jpg";
import "@splidejs/react-splide/css/sea-green";
import "./userp.css";
import UserPageCard from "./userPageCard/userPageCard";
import { checkUserRole } from "../../../services/usersServices/UserService";
import { useLocation } from "react-router-dom";

const UserPageMain = () => {
    const [role, setRole] = React.useState('USER')
    const location = useLocation();

    React.useEffect(() => {
        checkUserRole().then((fulfilledValue) => {
            const stringValue = String(fulfilledValue);
            setRole(stringValue);
        }, []);


    }, [location.pathname])
    let tab1 = {
        img: image1,
        desc: "Training and diet",
        action: "create training",
        to: "/user-page/create-training",
        acces: false,
    };
    let tab2 = {
        img: image2,
        desc: "Premium Subscription",
        action: "buy subscription",
        to: "/",
        acces: true,
    };

    return (
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <div className="slide-container">
                    <UserPageCard data={tab1} />
                </div>
            </SplideSlide>
            {role === 'USER' ? (
                <SplideSlide>
                    <div className="slide-container">
                        <UserPageCard data={tab2} />
                    </div>
                </SplideSlide>
            ) : (
                <p></p>
            )}
        </Splide>
    );
};
export default UserPageMain;