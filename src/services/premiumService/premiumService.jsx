async function getPremiumUserIndicators() {
    const token = localStorage.getItem('jwtToken');

    return await fetch("https://18.192.22.39:443/premium-user/indicators", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })

}

export default getPremiumUserIndicators