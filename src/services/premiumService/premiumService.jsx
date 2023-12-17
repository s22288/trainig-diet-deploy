async function getPremiumUserIndicators() {
    const token = localStorage.getItem('jwtToken');

    return await fetch("http://localhost:9800/premium-user/indicators", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })

}

export default getPremiumUserIndicators