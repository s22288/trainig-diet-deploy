 function calculateCPM() {
    const token = localStorage.getItem('jwtToken');

    return  fetch("https://diet-training-app.link/normal-user/cpm", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })

}



export default calculateCPM