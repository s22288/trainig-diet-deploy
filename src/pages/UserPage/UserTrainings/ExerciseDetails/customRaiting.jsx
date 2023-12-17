import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
        color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
        color: "#ff3d47",
    },
});

export default function CustomizedRating(props) {
    const [value, setValue] = React.useState(props.rate);
    useEffect(() => {
        setValue(props.rate);
    }, [props.rate]);

    return (
        <Box
            sx={{
                "& > legend": { mt: 2 },
            }}
        >
            <Typography component="legend">Level of Advance</Typography>
            <StyledRating
                value={value}
                name="customized-color"
                defaultValue={0}
                getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
        </Box>
    );
}