const GetAllExercises = (page, size, order, sortpar) => {
    if (sortpar == null) {
        sortpar = 'id'
    }
    const token = localStorage.getItem('jwtToken');


    return fetch(
        `https://diet-training-app.link/admin-user/get-exercises?page=${page}&size=${size}&sort=${sortpar},${order}`
        , {
            method: 'GET',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
        })
}
const EditChoosenExercise = (data) => {
    const token = localStorage.getItem('jwtToken');
    return fetch("https://diet-training-app.link/admin-user/add-exercise", {
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include', body: JSON.stringify(data)
    }
    )

}

const SaveExerciseToDB = (data) => {
    const token = localStorage.getItem('jwtToken');
    return fetch("https://diet-training-app.link/admin-user/save-exercise", {
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include', body: JSON.stringify(data)
    }
    )

}
const DeleteExerciseByid = (id) => {
    const token = localStorage.getItem('jwtToken');

    return fetch(`https://diet-training-app.link/admin-user/delete-exercise/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    });


}
export { GetAllExercises, DeleteExerciseByid, EditChoosenExercise,SaveExerciseToDB };