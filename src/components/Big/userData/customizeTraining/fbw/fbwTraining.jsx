import { useState } from "react";
import CustomExcercises from "../exercise/exerciseCustom";

const FbwTraining = (props) => {
    const [userData, setUserData] = useState(props.data.map(u => ({ ...u, dayName: 'fbw' })));
       
    const replaceData = (index, mainIndex) => {
        let userDataIndex = userData.findIndex((d) => {
            return d.exerciseEntity.id === mainIndex;
        });
        const updatedUserData = [...userData];
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
            <h2>3X per week</h2>

            {userData ? (
                userData.map((item, index) => (
                    <div key={index}>

                        <CustomExcercises onreplace={replaceData} data={item} />
                    </div>
                ))
            ) : (
                <p className="context-customize-warning">Select a training type</p>
            )}
        </div>

    )
}

export default FbwTraining