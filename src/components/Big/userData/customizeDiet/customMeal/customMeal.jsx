import React from "react";
import './customMeal.css'

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
const CustomMeal = (props) => {
    let exer = props.data;
    let main = props.data.mealEntity;

    const handleHange = (altIndex) => {
        let mainId = main.id;
        props.onreplace(altIndex, mainId);
    };

    if (!main) {
        return null;
    }

    return (
        <div id="parent">
            <div className="custom-meal-left">
                <Card sx={{ maxWidth: 245 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/premium-vector/healthy-food-hand-symbol-cartoon-illustration-vector_201904-1555.jpg?w=2000"
                            alt="green iguana"
                        />
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="div">
                                food:   {main.mealName}
                            </Typography>

                            <Typography variant="h6" color="text.secondary">
                                {main.calories} kcal
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div className="custom-meal-right">
                <div className="custom-meal-alternatives-row">
                    {exer.alternatives &&
                        exer.alternatives.map((alt, idx) => (
                            <div className="custom-meal-altern" key={idx}>
                                <Card sx={{ maxWidth: 245, backgroundColor: "ActiveBorder" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://img.freepik.com/premium-vector/healthy-food-hand-symbol-cartoon-illustration-vector_201904-1555.jpg?w=2000"
                                            alt="green iguana"
                                        />

                                        <CardContent>

                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                color="white"
                                                component="div"
                                            >
                                                food:     {alt && alt.mealName}
                                            </Typography>

                                            <Typography variant="h6" color="white">
                                                {alt && ` ${alt.calories} kcal`}
                                            </Typography>
                                            <Button className="custom-meal-change-button"
                                                onClick={() => handleHange(idx, alt.id)}
                                                variant="contained"
                                            >
                                                Change
                                            </Button>
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

export default CustomMeal;
