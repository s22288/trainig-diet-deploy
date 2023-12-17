
import { useState } from "react";
import "../../../context/smalldetails.css";
import * as React from "react";

import { Link } from "react-router-dom";
import { DelteteTrainigById } from "../../../services/trainingServices/trainingService";
const SmallTraining = (props) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const { localozation, day } = props.val.day;

    const { id, description, exerciseEntitySet } = props.val.trainingEntity;
    const eventTrainig = {
        training: props.val.trainingEntity,
        trainingEvent: props.val.day
    }

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
        <div className="context-small-container" >






            <Link
                className="small-link-perfect"
                to={`/user-page/calendar/details/${id}`}
                state={{ data: eventTrainig }}
            >
                {description}
            </Link>


        </div>
    )
}

export default SmallTraining