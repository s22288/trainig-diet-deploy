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
            className="bigcardOne"
            sx={{
                maxWidth: 645,
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
                        height: 400,
                        ["@media (max-height: 600px)"]: {
                            width: 300,
                            maxHeight: 200,

                        },
                    }}
                />
                <CardContent>
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "45px",
                            fontFamily: "'Luckiest Guy', cursive",
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
