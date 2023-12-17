function calculateCPM() {
    const token = localStorage.getItem('jwtToken');

    return fetch("http://localhost:9800/normal-user/cpm", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })

}



export default calculateCPM