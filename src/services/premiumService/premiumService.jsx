async function getPremiumUserIndicators() {
    const token = localStorage.getItem('jwtToken');

    return await fetch("https://diet-training-app.link/premium-user/indicators", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })

}

export default getPremiumUserIndicators