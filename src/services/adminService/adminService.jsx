
async function second() {
    return second
}
const getAdminPrivliges = () => {
    const token = localStorage.getItem('jwtToken');
    console.log(token)
    return fetch("https://diet-training-app.link/admin-user/get-privliges", {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',

    })
}

export { getAdminPrivliges, second }