


import backgroundSVG from "../../photo/userpage.svg";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../../components/Medium/navbar/userNavbar";
import UserPageMain from "../../components/Big/userPageMain/userPageMain";
import PremiumUserNavbar from "../../components/Medium/navbar/premiuUserNavbar";
import AdminNavbar from "../../components/Medium/navbar/adminNavbar";

const UserPagePremium = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundSVG})`,
                height: "100vh",
                backgroundSize: "cover",
            }}
        >

            <PremiumUserNavbar />
            <UserPageMain />
        </div>
    );
};

export default UserPagePremium;