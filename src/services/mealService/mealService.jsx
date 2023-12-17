const GetMealByMealType = (type, goalCalories) => {
    const token = localStorage.getItem('jwtToken');

    return fetch(
        `http://localhost:9800/create-diet/getMeals-byType?typeid=${type}&calories=${goalCalories}`
        , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
        }
    );


};
const EditChoosenMeal = (data) => {
    const token = localStorage.getItem('jwtToken');
    return fetch("http://localhost:9800/admin-user/add-meal", {
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

const GetAllMeals = (page, size, order) => {
    const token = localStorage.getItem('jwtToken');

    return fetch(
        `http://localhost:9800/admin-user/get-meals?page=${page}&size=${size}&sort=id,${order}`
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

const DeleteMealByid = (id) => {
    const token = localStorage.getItem('jwtToken');

    return fetch(`http://localhost:9800/admin-user/delete-meal/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    });

}

export { GetMealByMealType, GetAllMeals, DeleteMealByid, EditChoosenMeal };