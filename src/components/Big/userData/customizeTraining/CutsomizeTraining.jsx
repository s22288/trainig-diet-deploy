import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../../../../context/customization.css";
import Button from "@mui/material/Button";
import CustomExcercises from "./exercise/exerciseCustom";
import FunctionalityNavbar from "../../../Medium/navbar/functionalitynavbar";
import { GetExerciseseByBodyPartFbw, GetExerciseseByBodyPartSplit, GetExerciseseByBodyPartPushPull, SaveTrainig } from "../../../../services/trainingServices/trainingService";
import FbwTraining from "./fbw/fbwTraining";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SplitTraining from "./split/splitTraining";
import { checkUserRole } from "../../../../services/usersServices/UserService";
import FunctionalityPremiumNavbar from "../../../Medium/navbar/functionalityPremiumNavbar";
const TrainingCustomization = () => {

  // klasa split


  const [role, setRole] = useState('USER')
  const location = useLocation();

  useEffect(() => {
    checkUserRole().then((fulfilledValue) => {
      const stringValue = String(fulfilledValue);
      setRole(stringValue);
    }, []);


  }, [location.pathname])
  const [excercise, setExcercise] = useState('SPLIT');
  const [userData, setUserData] = useState();
  const [userDataSplit, setUserDataSplit] = useState();
  const [userDataPushPUll, setUserDataPushPUll] = useState();
  const [firstDay, setFirstDay] = useState([]);
  const [secondDay, setSecondDay] = useState([]);
  const [thirdDay, setThirdDay] = useState([]);

  const navigate = useNavigate();
  const [description, setDescription] = useState('trainin desc');
  const contentArray = new Array(3).fill(null);

  const saveTrainig = (event) => {

    event.preventDefault();
    let toSave = []
    if (excercise === "FBW") {
      toSave = userData.map((data) => data.exerciseEntity);

    } if (excercise === "SPLIT") {
      toSave = Object.values(userDataSplit).flat().map(value => value.exerciseEntity)


    }
    if (excercise === "PUSHPULL") {
      toSave = Object.values(userDataPushPUll).flat().map(value => value.exerciseEntity)

    }
    const trainingToSave = {
      description: description,
      maxAge: 99,
      treiningType: excercise,
      exerciseEntitySet: toSave,

    };

    SaveTrainig(trainingToSave);
    if (role === 'USER') {
      navigate("/user-page");
    } else {
      navigate("/premium-user-page");
    }
  };
  const handleInput = (event) => {
    setDescription(event.target.value);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();

    fetchUserData(excercise);
  };

  const handleChange = (event) => {
    const selectedExercise = event.target.value;
    setExcercise(selectedExercise);
  };
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
  const fetchUserData = () => {

    if (excercise === 'FBW') {


      GetExerciseseByBodyPartFbw()
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch user data");
          }
        })
        .then((data) => {
          setUserData(data);



        })
        .catch((error) => {
          console.error("Failed to fetch user data", error);
        });
    }


    if (excercise === 'PUSHPULL') {


      GetExerciseseByBodyPartPushPull()
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch user data");
          }
        })
        .then((data) => {
          setUserDataPushPUll(data);
          setFirstDay(data['one'])
          setSecondDay(data['two'])
          setThirdDay(data['three'])


        })
        .catch((error) => {
          console.error("Failed to fetch user data", error);
        });
    }




    if (excercise === 'SPLIT') {
      GetExerciseseByBodyPartSplit()
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch user data");
          }
        })
        .then((data) => {
          setUserDataSplit(data);
          setFirstDay(data['one'])
          setSecondDay(data['two'])
          setThirdDay(data['three'])


        })
        .catch((error) => {
          console.error("Failed to fetch user data", error);
        });
    }
  };

  return (
    <div>
      {role === 'USER' ? (
        <FunctionalityNavbar />
      ) : (
        <FunctionalityPremiumNavbar />
      )}
      <div className="context-customize-container">
        <form onSubmit={HandleSubmit} className="context-customize-comic-form">
          <label htmlFor="split">
            <input
              type="radio"
              id="split"
              value="SPLIT"
              name="anserw"
              onChange={handleChange}
              defaultChecked

            />
            SPLIT
          </label>

          <label htmlFor="fbw">
            <input
              type="radio"
              id="fbw"
              value="FBW"
              name="anserw"
              onChange={handleChange}
            />
            FBW
          </label>
          <label htmlFor="pushpull">
            <input
              type="radio"
              id="pushpull"
              value="PUSHPULL"
              name="anserw"
              onChange={handleChange}
            />
            Push-Pull
          </label>


          <label>Training description</label>
          <input className="context-customize-inputdesc"
            type="text"
            value={description}
            onChange={handleInput} required
          />
          <br />
          <br></br>
          <input className="context-customize-submit-button" type="submit" value="Submit" />

        </form>

        <div className="user-data">





          {excercise == 'FBW' && userData ? (
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
          ) : (
            <p className="context-customize-warning"></p>
          )}


          {excercise == 'SPLIT' && userDataSplit ? (
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
          ) : (
            <p className="context-customize-warning"></p>
          )}



          {excercise == 'PUSHPULL' && userDataPushPUll ? (

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
          ) : (
            <p className="context-customize-warning"></p>
          )}
        </div>



        <div >
          {userData || userDataSplit || userDataPushPUll ? (
            <div >
              <Button variant="contained" onClick={saveTrainig}>
                Save
              </Button>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div >
  );
};

export default TrainingCustomization;