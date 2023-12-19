import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

async function getUserData() {
    const token = localStorage.getItem('jwtToken');
    console.log(token)

    return await fetch("https://diet-training-app.link/normal-user/account-data", {


        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',

    })


}

async function getPremiumUserData() {
    const token = localStorage.getItem('jwtToken');
    console.log(token)

    return await fetch("https://diet-training-app.link/premium-user/account-data", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',

    })


}
async function checkUserRole() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        const role = JSON.parse(window.atob(token.split(".")[1])).role;
        let userRole = role[0].authority

        return String(userRole);
    } else {
        return "USER"
    }
}

async function updatePremiumUsersData(data) {
    const token = localStorage.getItem('jwtToken');

    return await fetch("https://diet-training-app.link/premium-user/update-data", {
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }, body: JSON.stringify(data)
    }
    )
}
const useAuthenticate = () => {
    const token = localStorage.getItem('jwtToken');
    const role = JSON.parse(window.atob(token.split(".")[1])).role;
    let userRole = role[0].authority
    console.log(userRole)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname)
    console.log(location.pathname.includes('/details'));

    useEffect(() => {
        if (!token) {
            if (!['/', '/login', '/create-acc'].includes(location.pathname)) {
                navigate('/login')

            }
        }
        else {
            if (userRole === "USER") {
                if (!['/', '/login', '/create-acc', '/user-page', '/user-page/user-data', '/user-page/records', '/user-page/create-training', '/user-page/create-training/diet-customize', '/user-page/trainings', '/user-page/diets', '/user-page/diet/details', '/user-page/training/details', '/user-page/create-training/train-customize', '/user-page/calendar/details'].includes(location.pathname)) {
                    {
                        navigate('/login')
                    }

                }

            }
            if (userRole === "PREMIUMUSER") {
                console.log((location.pathname).includes('/details'))
                if ((!['/', '/login', '/create-acc', '/premium-user-page', '/premium-user-page/premium-user-data', '/user-page/records', '/premium-user-page/premium-indicators', '/user-page/create-training', '/user-page/create-training/diet-customize', '/user-page/trainings', '/user-page/diets', '/user-page/diet/details', '/user-page/training/details', '/user-page/calendar', '/user-page/create-training/train-customize', '/user-page/calendar/details'].includes(location.pathname))) {


                    navigate('/login')

                }
            }
            if (userRole === "ADMIN") {
                if (!['/', '/login', '/create-acc', '/admin-page', '/admin-page/edit-exercise', '/admin-page/edit-meal',].includes(location.pathname)) {
                    navigate('/login')

                }
            }
        }
    }, [location.pathname])



}




async function getUserMaxes() {
    const token = localStorage.getItem('jwtToken');

    return await fetch("https://diet-training-app.link/normal-user/user-maxes", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',

    })
}



async function updateUsersData(data) {
    const token = localStorage.getItem('jwtToken');
    console.log('data' + data)
    return await fetch("https://diet-training-app.link/normal-user/update-data", {
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }, body: JSON.stringify(data)
    }
    )
}



function addUserMaxes(data) {
    const token = localStorage.getItem('jwtToken');
    return fetch("https://diet-training-app.link/normal-user/add-maxes", {
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



const GetAllUsers = () => {
    const token = localStorage.getItem('jwtToken');

    return fetch(
        `https://diet-training-app.link/admin-user/get-users`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    }
    )
}

const DeleteUserById = (id) => {
    const token = localStorage.getItem('jwtToken');

    return fetch(`https://diet-training-app.link/admin-user/delete-user/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
    });

}
// /update-premium
// const BuyPremiumSubscription = () => {
//     const token = localStorage.getItem('jwtToken');

//     return fetch("http://localhost:9800/normal-user/update-premium", {
//         method: 'Post',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,

//         },
//         credentials: 'include',
//     }
//     )
// }
const RegisterUser = (data) => {
    return fetch("https://diet-training-app.link/api/v1/auth/register", {
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    }
    )
}
const LoginToUserPage = (login) => {
    return fetch("https://diet-training-app.link/api/v1/auth/authenticate", {
        method: 'Post',

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(login)
    }
    )
}




export { addUserMaxes, getUserData, updateUsersData, getUserMaxes, GetAllUsers, DeleteUserById, RegisterUser, LoginToUserPage, useAuthenticate, getPremiumUserData, updatePremiumUsersData, checkUserRole }