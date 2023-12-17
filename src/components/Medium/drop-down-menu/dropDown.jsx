import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { FindMachineById } from '../../../services/trainingServices/trainingService';
import './dropmenu.css'
export default function FadeMenu(props) {
    const [machine, setMachine] = React.useState()

    const machineid = props.data;
    React.useEffect(() => {
        FindMachineById(machineid).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {
                setMachine(data)
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });
    }, [])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Machine
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Machine: {machine && machine.name}</MenuItem>
                <MenuItem onClick={handleClose}>Desc: {machine && machine.description}</MenuItem>
                <MenuItem onClick={handleClose}>Max: {machine && machine.maxWeight} KG</MenuItem>

            </Menu>
        </div>
    );
}