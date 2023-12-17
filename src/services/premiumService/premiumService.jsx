async function getPremiumUserIndicators() {
    const token = localStorage.getItem('jwtToken');

    return await fetch("http://18.192.22.39:8080/premium-user/indicators", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    })

}

export default getPremiumUserIndicators