const GetAllTrainings = () => {
    const token = localStorage.getItem('jwtToken');

    return fetch("http://localhost:9800/normal-user/user-trainings", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    });

};

const GetAllTrainingsWithDays = () => {
    const token = localStorage.getItem('jwtToken');

    return fetch("http://localhost:9800/normal-user/trainings-days", {
        method: 'GET',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    });

};
const FindMachineById = (machineId) => {
    const token = localStorage.getItem('jwtToken');

    return fetch(`http://localhost:9800/create-training/findMachine/${machineId}`, {
        method: 'GET',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    });
}

const AsignTrainingToDay = (asignItem, idTraining) => {
    const token = localStorage.getItem('jwtToken');

    return fetch(`http://localhost:9800/create-training/assign-todate?idTraining=${idTraining}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include', body: JSON.stringify(asignItem),
    });
}
const SaveTrainig = (training) => {
    const token = localStorage.getItem('jwtToken');

    fetch("http://localhost:9800/create-training/save-training", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(training),
    });
};
const GetExerciseseByBodyPartFbw = () => {
    const token = localStorage.getItem('jwtToken');

    return fetch("http://localhost:9800/create-training/exercise-for-bodyparts", {
        method: 'GET',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include'
    });
}
const GetExerciseseByBodyPartPushPull = () => {
    const token = localStorage.getItem('jwtToken');

    return fetch("http://localhost:9800/create-training/push-pull-training", {
        method: 'GET',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include'
    });
}
const GetExerciseseByBodyPartSplit = () => {
    const token = localStorage.getItem('jwtToken');

    return fetch("http://localhost:9800/create-training/split-training", {
        method: 'GET',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include'
    });
}





const DelteteTrainigById = (id) => {
    const token = localStorage.getItem('jwtToken');

    return fetch(`http://localhost:9800/normal-user/delete-training/${id}`, {
        method: 'GET',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include'
    });







}

export { GetAllTrainings, DelteteTrainigById, GetExerciseseByBodyPartFbw, GetExerciseseByBodyPartSplit, GetExerciseseByBodyPartPushPull, SaveTrainig, AsignTrainingToDay, GetAllTrainingsWithDays, FindMachineById }