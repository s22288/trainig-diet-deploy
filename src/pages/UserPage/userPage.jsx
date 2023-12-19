


import backgroundSVG from "../../photo/userpage.svg";

import UserNavbar from "../../components/Medium/navbar/userNavbar";
import UserPageMain from "../../components/Big/userPageMain/userPageMain";

const UserPage = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundSVG})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >

      <UserNavbar />
      <UserPageMain />
    </div>
  );
};

export default UserPage;