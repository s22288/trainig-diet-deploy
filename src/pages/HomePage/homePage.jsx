
import './homepage-home.css'
import dietBecground from "../../photo/dieteBacground.jpg";
import trainigBacground from "../../photo/trainingbackground.jpg";
import UserMenuNavbar from '../../components/Medium/navbar/menuNavbar';
import MainPageCard from '../../components/Big/bigCard/MainPageCard';
import backgroundSVG from "../../photo/background.svg";

const HomePage = () => {
    let trainingDesc =
        "Our training program is designed to help you achieve your fitness goals effectively and efficiently. Whether you're a beginner or an experienced athlete, our team of qualified trainers will provide expert guidance and support throughout your fitness journey. ";

    let dietDesc =
        "At our facility, we understand the importance of nutrition in achieving optimal health and fitness. Our diet program is designed to complement your training efforts and help you make sustainable and healthy dietary choices. ";

    const traing = {
        title: "training",
        desc: trainingDesc,
        img: trainigBacground,
    };
    const diet = {
        title: "diet",

        desc: dietDesc,
        img: dietBecground,
    };
    return (


        <div
            className="home-page-background"

        >
            <UserMenuNavbar />
            <div className="home-page-maincontainer">
                <MainPageCard data={traing} />
                <MainPageCard data={diet} />
            </div>
        </div>
    )
}

export default HomePage