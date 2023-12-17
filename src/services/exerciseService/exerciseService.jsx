const GetAllExercises = (page, size, order, sortpar) => {
    if (sortpar == null) {
        sortpar = 'id'
    }
    const token = localStorage.getItem('jwtToken');


    return fetch(
        `http://18.192.22.39:8080/admin-user/get-exercises?page=${page}&size=${size}&sort=${sortpar},${order}`
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
    return fetch("http://18.192.22.39:8080/admin-user/add-exercise", {
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

    return fetch(`http://18.192.22.39:8080/admin-user/delete-exercise/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    });


}
export { GetAllExercises, DeleteExerciseByid, EditChoosenExercise };