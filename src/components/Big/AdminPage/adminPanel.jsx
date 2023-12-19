import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { DeleteMealByid, GetAllMeals } from '../../../services/mealService/mealService';
import { DeleteUserById, GetAllUsers } from '../../../services/usersServices/UserService';
import { DeleteExerciseByid, GetAllExercises } from '../../../services/exerciseService/exerciseService';
import { useState } from 'react';

import { Grid, ListItemSecondaryAction } from '@mui/material';
import { ReactComponent as Edit } from '../../../photo/edit.svg'
import { ReactComponent as Delete } from '../../../photo/delete.svg'

import './admin.css'

import { Link } from 'react-router-dom';
const AdminMainPanel = () => {
    const [Users, SetUsers] = useState([])
    const [Meals, SetMeals] = useState([])
    const [Exercises, SetExercises] = useState([])
    const [page, SetPage] = useState(0)
    const [pageM, SetPageM] = useState(0)


    function handleDeleteUser(id) {
        DeleteUserById(id);
        SetUsers((prevUserData) =>
            prevUserData.filter((item) => item.id !== id)
        );
    }
    function handleDeleteExercise(id) {
        DeleteExerciseByid(id);
        SetExercises((prevUserData) =>
            prevUserData.filter((item) => item.id !== id)
        );
    }

    function handleDeleteMeal(id) {
        DeleteMealByid(id);
        SetMeals((prevUserData) =>
            prevUserData.filter((item) => item.id !== id)
        );
    }
    function scrollDownExericses() {
        SetPage(page + 1)
        GetAllExercises(page + 1, 10, 'asc').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {
                SetExercises(data)
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });;
    }


    function scrollUpExericses() {
        if (page >= 0) {
            SetPage(page - 1)
            GetAllExercises(page - 1, 10, 'asc').then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch user data");
                }
            })
                .then((data) => {
                    SetExercises(data)
                })
                .catch((error) => {
                    console.error("Failed to fetch user data", error);
                });;
        }
    }

    function scrollUpMeals() {
        if (pageM >= 0) {
            SetPageM(pageM - 1)
            GetAllMeals(pageM - 1, 10, 'asc').then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch user data");
                }
            })
                .then((data) => {
                    SetMeals(data)
                })
                .catch((error) => {
                    console.error("Failed to fetch user data", error);
                });;
        }
    }

    function scrollDownMeals() {
        SetPageM(pageM + 1)
        GetAllMeals(pageM + 1, 10, 'asc').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {
                SetMeals(data)
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });;
    }



    useEffect(() => {
        GetAllMeals(pageM, 10, 'asc').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {
                SetMeals(data)
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });;

        GetAllUsers().then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {
                SetUsers(data)
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });;

        GetAllExercises(page, 10, 'asc').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {
                SetExercises(data)
            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });;

    }, [])



    return (<div className='admin-panel-container' >


        <h1>Admin Panel</h1>


        <Grid container spacing={2}>
            <Grid item xs={4}>
                <h2>Users </h2>

                <div >
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
                        {Users.map((value) => (
                            <ListItem
                                key={value}
                                disableGutters

                            >
                                <ListItemText primary={`id: ${value.id}`} />


                                <ListItemText primary={`login:  ${value.email}`} />
                                <ListItemSecondaryAction>

                                    <IconButton aria-label="delete" onClick={() => handleDeleteUser(value.id)}>

                                        <Delete />

                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Grid>
            <Grid item xs={4}>
                <h2>Exercises </h2>


                <div >
                    <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'white' }}>
                        {Exercises.map((value) => (
                            <ListItem
                                key={value}
                                disableGutters

                            >
                                <ListItemText primary={`id: ${value.id}`} />
                                <ListItemText primary={`name: ${value.name}`} />

                                <ListItemText primary={`rep: ${value.reps}`} />
                                <ListItemText primary={`level: ${value.levelOfAdvance}`} />

                                <ListItemSecondaryAction>

                                    <IconButton aria-label="edit" >
                                        <Link
                                            className="link-perfect"
                                            to={`/admin-page/edit-exercise/${value.id}`}
                                            state={{ data: value }}
                                        >
                                            <Edit />
                                        </Link>

                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => handleDeleteExercise(value.id)}>

                                        <Delete />

                                    </IconButton>

                                </ListItemSecondaryAction>

                            </ListItem>
                        ))}
                    </List>
                    <button onClick={scrollDownExericses}>down</button>
                    <button onClick={scrollUpExericses}>up</button>

                </div>

            </Grid>
            <Grid item xs={4}>
                <h2>Meals </h2>

                <div >
                    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'white' }}>
                        {Meals.map((value) => (
                            <ListItem
                                key={value}
                                disableGutters

                            >
                                <ListItemText primary={`id: ${value.id}`} />

                                <ListItemText primary={`name: ${value.mealName}`} />

                                <ListItemText primary={`kcal: ${value.calories}`} />

                                <ListItemSecondaryAction>

                                    <IconButton aria-label="edit" >
                                        <Link
                                            className="link-perfect"
                                            to={`/admin-page/edit-meal/${value.id}`}
                                            state={{ data: value }}
                                        >
                                            <Edit />
                                        </Link>
                                    </IconButton>

                                    <IconButton aria-label="delete" onClick={() => handleDeleteMeal(value.id)}>

                                        <Delete />

                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                    <button onClick={scrollDownMeals}>down</button>
                    <button onClick={scrollUpMeals}>up</button>

                </div>
            </Grid>
        </Grid>

    </div>)
}

export default AdminMainPanel

