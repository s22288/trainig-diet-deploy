


import backgroundSVG from "../../photo/userpage.svg";

import UserPageMain from "../../components/Big/userPageMain/userPageMain";
import PremiumUserNavbar from "../../components/Medium/navbar/premiuUserNavbar";

const UserPagePremium = () => {

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