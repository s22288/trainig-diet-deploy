import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import "./usercard.css";
import { buyPremiumAcc } from "../../../../services/usersServices/UserService";

export default function UserPageCard(props) {
    let image = props.data.img;
    let action = props.data.action;
    let desc = props.data.desc;
    let to = props.data.to;
    let acess = props.data.acces;

    const buyAccess = (event) => {

        event.preventDefault();



        buyPremiumAcc().then((response) => {
            if (response.ok) {
                console.log("User updated successfully");
            } else {
                throw new Error("Failed to update user");
            }
        })
            .catch((error) => {
                console.error("Error updating user:", error);
            });

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("email");
        localStorage.removeItem("password");


    };
    const buySubscription = () => {
        // BuyPremiumSubscription();

    }
    return (
        <Card sx={{
            maxWidth: 800,
            ["@media (max-height: 600px)"]: {
                maxWidth: 200,


            },
        }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="340"
                image={image}
                sx={{
                    ["@media (max-height: 600px)"]: {
                        maxHeight: 100,


                    }
                }}

            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        color: "black",
                        fontSize: "25px",
                        fontFamily: "'Luckiest Guy', cursive",
                        ["@media (max-height: 600px)"]: {
                            fontSize: "19px",

    
    
                        }
                    }}
                >
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                {acess ? (
                    <div onClick={buyAccess}>
                        <Link to={to} onClick={buySubscription()} className="link-button">
                            "buy acess"
                        </Link>
                    </div>
                ) : (
                    <Link className="link-button" to={to}>
                        {action}
                    </Link>
                )}
            </CardActions>
        </Card>
    );
}