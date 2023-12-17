import { useState } from "react";
import "../../../context/details.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { DelteteTrainigById } from "../../../services/trainingServices/trainingService";
import photo from '../../../photo/traininguser.jpg'
const TrainingDetails = (props) => {
    const [isDeleted, setIsDeleted] = useState(false);

    const { id, treiningType, description, maxAge, exerciseEntitySet } = props.val;

    const handleDelelte = () => {

        DelteteTrainigById(id)
            .then((response) => {
                if (response.ok) {
                    props.ondelete(id);
                    setIsDeleted(true);
                } else {
                    console.log("Failed to delete note");
                }
            })
            .catch((error) => {
                console.error("Error deleting note:", error);
            });

    };
    if (isDeleted) {
        return null;
    }

    return (
        <div className="training-details-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={photo} title="green iguana" />
                <CardContent>

                    <Typography variant="h6" color="text.secondary">
                        Opis:  {description}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Type: {treiningType}
                    </Typography>

                </CardContent>
                <CardActions>
                    <button onClick={handleDelelte} className="delte-perfect">
                        Delete
                    </button>
                    <Link
                        className="link-perfect"
                        to={`/user-page/training/details/${id}`}
                        state={{ data: exerciseEntitySet }}
                    >
                        Details
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default TrainingDetails;