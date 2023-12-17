import "./../exercise/custom-split.css"

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CustomizedRating from '../../../../../pages/UserPage/UserTrainings/ExerciseDetails/customRaiting'
import FadeMenu from "../../../../Medium/drop-down-menu/dropDown";

const SplitCustomExercises = (props) => {
    let exer = props.data;




    let main = props.data.exerciseEntity;



    const id = main.id;
    const handleHange = (altIndex) => {
        let mainId = id
        props.onreplace(altIndex, mainId);
    };
    if (!main) {
        return null;
    }
    return (
        <div id="parent-split">

            <div className="exercise-left-split">

                <Card sx={{ maxWidth: 400, backgroundColor: 'gold' }}>
                    <CardActionArea>
                        <div style={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                style={{ height: "100px", width: "100px" }}
                                image={main.bodypartEntitySet[0].url}
                            />
                            <CardMedia
                                component="img"
                                height="100"
                                image="https://t3.ftcdn.net/jpg/03/25/72/12/360_F_325721295_x224QeDphb6ZAFl2tkoX0TlBuczNwBek.jpg"
                                alt="green iguana"
                            />

                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Exercise: {main.name}
                            </Typography>
                            <Typography>
                                <CustomizedRating rate={main.levelOfAdvance} />
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Body Part:   {main.bodypartEntitySet[0].description}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Series: {main.series}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Reps {main.reps}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                {main.trainingType}
                            </Typography>

                            <Typography variant="h6" color="text.secondary">
                                <FadeMenu data={main.trainingMachineId} />
                            </Typography>





                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div className="exercise-right-split">
                <div className="exercise-alternatives-row-split">
                    {exer.alternatives.map((alternative, idx) => (
                        <div className="exercise-altern-split" key={idx}>
                            <Card sx={{ maxWidth: 400 }}>
                                <CardActionArea>

                                    <CardMedia
                                        component="img"
                                        height="100"
                                        width="100"
                                        image="https://t3.ftcdn.net/jpg/03/25/72/12/360_F_325721295_x224QeDphb6ZAFl2tkoX0TlBuczNwBek.jpg"
                                        alt="green iguana"
                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Exercise: {alternative.name}
                                        </Typography>
                                        <Typography>
                                            <CustomizedRating rate={alternative.levelOfAdvance} />
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            Body Part:   {alternative.bodypartEntitySet[0].description}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            Series: {alternative.series}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            Reps {alternative.reps}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            {alternative.trainingType}

                                        </Typography>

                                        <Typography variant="h6" color="text.secondary">
                                            <FadeMenu data={alternative.trainingMachineId} />

                                        </Typography>


                                        <CardActions>
                                            <Button
                                                onClick={() => handleHange(idx, alternative.id)}
                                                variant="contained"
                                            >
                                                change
                                            </Button>
                                        </CardActions>


                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
export default SplitCustomExercises;