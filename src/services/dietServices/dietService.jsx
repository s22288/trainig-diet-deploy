const GetAllDiets = () => {
    const token = localStorage.getItem('jwtToken');

    return fetch("http://localhost:9800/normal-user/diets", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    });
};

const GetAllMealTypes = () => {
    const token = localStorage.getItem('jwtToken');

    return fetch("http://localhost:9800/create-diet/all-mealTypes", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })


}



const SaveDiet = (diet) => {
    const token = localStorage.getItem('jwtToken');

    fetch("http://localhost:9800/create-diet/save-diet", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(diet),
    });
};

const DelteteDietbyId = (id) => {
    const token = localStorage.getItem('jwtToken');

    return fetch(`http://localhost:9800/normal-user/delete-diet/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include'
    });
};

const CountCalories = (data) => {

    return data.reduce((start, next) => start + next.mealEntity.calories, 0);
};
export { GetAllDiets, SaveDiet, CountCalories, GetAllMealTypes, DelteteDietbyId };