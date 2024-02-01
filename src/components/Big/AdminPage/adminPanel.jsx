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
import { ReactComponent as Add } from '../../../photo/addbutton.svg'

import './admin.css'

import { Link } from 'react-router-dom';
import { getAdminPrivliges } from '../../../services/adminService/adminService';
const AdminMainPanel = () => {
    const [privlige, setPrivlige] = useState(1);
    const [privlige1, setPrivlige1] = useState(1);
    const [privlige2, setPrivlige2] = useState(1);
    const [error1, setError1] = useState('')
    const [error2, setError2] = useState('')

    const [error3, setError3] = useState('')
    useEffect(() => {
        getAdminPrivliges().then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch user data");
            }
        })
            .then((data) => {

                setPrivlige(data[0])
                setPrivlige1(data[1])
                setPrivlige2(data[2])


            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });

    }, [])
    const [Users, SetUsers] = useState([])
    const [Meals, SetMeals] = useState([])
    const [Exercises, SetExercises] = useState([])
    const [page, SetPage] = useState(0)
    const [pageM, SetPageM] = useState(0)


    function handleDeleteUser(id) {
        if (privlige == 0) {
            setError1('no privliges')
            return
        }
        DeleteUserById(id);
        SetUsers((prevUserData) =>
            prevUserData.filter((item) => item.id !== id)
        );
    }
    function handleDeleteExercise(id) {
        if (privlige1 == 0) {
            setError2('no privliges')
            return
        }
        console.log(id)
        DeleteExerciseByid(id);
        SetExercises((prevUserData) =>
            prevUserData.filter((item) => item.id !== id)
        );
    }

    function handleDeleteMeal(id) {
        if (privlige2 == 0) {
            setError3('no privliges')
            return
        }
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
                console.log(data)
                SetExercises(data)

            })
            .catch((error) => {
                console.error("Failed to fetch user data", error);
            });;

    },[])



    return (<div className='admin-panel-container' >


        <h1>Admin Panel</h1>


        <Grid container spacing={2}>
            <Grid item xs={4}>
                <h2>Users </h2>

                <div >
                    <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'white' }}>
                        {Users.map((value) => (
                            <ListItem
                                key={value}
                                disableGutters
                                style={{ margin: '4px 0', padding: '8px' }}


                            >
                                <ListItemText primary={`id: ${value.id}`}
                                    style={{ margin: '4px 0', padding: '8px', marginRight: '-50px' }}
                                />


                                <ListItemText primary={`login:  ${value.email}`}
                                    style={{ margin: '4px 0', padding: '8px', marginRight: '2px' }}

                                />
                                <ListItemSecondaryAction>

                                    <IconButton aria-label="delete" onClick={() => handleDeleteUser(value.id)}>

                                        <Delete />

                                    </IconButton>

                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                        <p>{error1}</p>
                    </List>
                </div>
            </Grid>
            <Grid item xs={4}>
                <h2>Exercises </h2>

                <Link
                    to={`/admin-page/save-exercise`}

                >
                    <Add />
                </Link>
                <div >
                    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'white' }}>
                        {Exercises.map((value) => (
                            <ListItem
                                key={value}
                                disableGutters

                            >
                                <ListItemText primary={`id: ${value.id}`}
                                    style={{ margin: '4px 0', padding: '8px', marginRight: '-100px' }}

                                />
                                <ListItemText primary={`name: ${value.name}`}
                                    style={{ margin: '4px 0', padding: '8px', marginRight: ' - 20px' }}
                                />

                                <ListItemText primary={`rep: ${value.reps}`}
                                    style={{ margin: '4px 0', padding: '8px', marginLeft: '-50px' }}

                                />
                                <ListItemText primary={`lvl: ${value.levelOfAdvance}`}
                                    style={{ margin: '4px 0', padding: '8px', marginLeft: '-50px', marginRight: '15px' }}

                                />
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

                                    <IconButton aria-label="delete" onClick={() => handleDeleteExercise(value.id)}>

                                    </IconButton>

                                </ListItemSecondaryAction>

                            </ListItem>
                        ))}
                        <p>{error2}</p>

                    </List>
                    <button onClick={scrollDownExericses}>down</button>
                    <button onClick={scrollUpExericses}>up</button>

                </div>

            </Grid>
            <Grid item xs={4}>
                <h2>Meals </h2>

                <Link
                    to={`/admin-page/save-meal`}
                // state={{ data: value }}
                >

                    <Add />
                </Link>
                <div >
                    <List sx={{ width: '100%', maxWidth: 750, bgcolor: 'white' }}>
                        {Meals.map((value) => (
                            <ListItem
                                key={value}
                                disableGutters

                            >
                                <ListItemText primary={`id: ${value.id}`} style={{ margin: '4px 0', padding: '8px', marginRight: '-80px' }}

                                />

                                <ListItemText primary={`name: ${value.mealName}`}
                                    style={{ margin: '4px 0', padding: '8px', marginLeft: '-60px' }}
                                />

                                <ListItemText primary={`kcal: ${value.calories}`}
                                    style={{ margin: '4px 0', padding: '8px', marginLeft: '-100px' }}

                                />

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
                                    <IconButton aria-label="delete" onClick={() => handleDeleteMeal(value.id)}>


                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                    <button onClick={scrollDownMeals}>down</button>
                    <button onClick={scrollUpMeals}>up</button>

                    <p>{error3}</p>

                </div>
            </Grid>
        </Grid>

    </div>)
}

export default AdminMainPanel

