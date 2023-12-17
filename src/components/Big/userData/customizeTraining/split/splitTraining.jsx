
import { useEffect, useState } from "react";
import CustomExcercises from "../exercise/exerciseCustom";
import SplitCustomExercises from "./splitCustom";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import { AlignVerticalCenter } from "@mui/icons-material";

const SplitTraining = (props) => {
    const [userData, setUserData] = useState(props.data);
    const [firstDay, setFirstDay] = useState(userData['one']);
    const [secondDay, setSecondDay] = useState(userData['two']);
    const [thirdDay, setThirdDay] = useState(userData['three']);



    const replaceData = (index, mainIndex) => {
        let userDataIndex = firstDay.findIndex((d) => {
            return d.exerciseEntity.id === mainIndex;
        });
        const updatedUserData = [...firstDay];
        const alternatives = updatedUserData[userDataIndex].alternatives;
        if (alternatives.length > 0) {
            let copy = updatedUserData[userDataIndex].exerciseEntity;
            updatedUserData[userDataIndex].exerciseEntity = alternatives[index];
            updatedUserData[userDataIndex].alternatives[index] = copy;
        }
        setUserData(updatedUserData);
    };

    const replaceData2 = (index, mainIndex) => {
        let userDataIndex = secondDay.findIndex((d) => {
            return d.exerciseEntity.id === mainIndex;
        });
        const updatedUserData = [...secondDay];
        const alternatives = updatedUserData[userDataIndex].alternatives;
        if (alternatives.length > 0) {
            let copy = updatedUserData[userDataIndex].exerciseEntity;
            updatedUserData[userDataIndex].exerciseEntity = alternatives[index];
            updatedUserData[userDataIndex].alternatives[index] = copy;
        }
        setUserData(updatedUserData);
    };

    const replaceData3 = (index, mainIndex) => {
        let userDataIndex = thirdDay.findIndex((d) => {
            return d.exerciseEntity.id === mainIndex;
        });
        const updatedUserData = [...thirdDay];
        const alternatives = updatedUserData[userDataIndex].alternatives;
        if (alternatives.length > 0) {
            let copy = updatedUserData[userDataIndex].exerciseEntity;
            updatedUserData[userDataIndex].exerciseEntity = alternatives[index];
            updatedUserData[userDataIndex].alternatives[index] = copy;
        }
        setUserData(updatedUserData);
    };
    return (
        <div>
            <Splide aria-label="My Favorite Images">
                <SplideSlide >
                    <h3 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}> Day 1</h3>

                    {firstDay ? (
                        firstDay.map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CustomExcercises onreplace={replaceData} data={item} />


                            </div>
                        ))
                    ) : (
                        <p className="context-customize-warning">Select a training type</p>
                    )}
                </SplideSlide>
                <SplideSlide>
                    <h3 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}> Day 2</h3>
                    {secondDay ? (
                        secondDay.map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CustomExcercises onreplace={replaceData2} data={item} />


                            </div>
                        ))
                    ) : (
                        <p className="context-customize-warning">Select a training type</p>
                    )}
                </SplideSlide>
                <SplideSlide>

                    <h3 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}> Day 3</h3>

                    {thirdDay ? (
                        thirdDay.map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <CustomExcercises onreplace={replaceData3} data={item} />


                            </div>
                        ))
                    ) : (
                        <p className="context-customize-warning">Select a training type</p>
                    )}
                </SplideSlide>
            </Splide>
        </div>

    );

}

export default SplitTraining