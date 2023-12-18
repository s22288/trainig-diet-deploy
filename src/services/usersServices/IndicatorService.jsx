function calculateCPM() {
    const token = localStorage.getItem('jwtToken');

    return fetch("http://18.192.22.39:443/normal-user/cpm", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })

}



export default calculateCPM