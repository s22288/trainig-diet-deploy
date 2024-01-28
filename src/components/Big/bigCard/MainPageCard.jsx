import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

export default function MainPageCard(props) {
    let image = props.data.img;
    let title = props.data.title;
    let desc = props.data.desc;

    return (
        <Card
            // className="bigcardOne"
            sx={{
                maxWidth: 645,
                maxHeight: 620,

                backgroundColor: "black",
                border: "2px solid green",
                ["@media (max-height: 600px)"]: {
                    maxWidth: 300,
                    maxHeight: 200,

                },
            }}

        >
            <CardActionArea>
                <CardMedia
                    component="img"

                    image={image}
                    alt="green iguana"
                    sx={{
                        height: 300,
                        ["@media (max-height: 600px)"]: {
                            fontSize: 50,
                            maxHeight: 80,

                        },
                    }}
                />
                <CardContent>
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "45px",
                            fontFamily: "'Luckiest Guy', cursive",
                            ["@media (max-height: 600px)"]: {
                                fontSize: 10,


                            },
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "20px",
                            fontFamily: "Bangers, cursive",
                            ["@media (max-height: 600px)"]: {
                                fontSize: 10,


                            },
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
        </Card>
    );
}
