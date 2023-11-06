async function login(email, password) {
    let url = 'http://localhost:3001/api/v1/user/login';
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json(); // Transmets les données à la variable data
        return data; // Retourne les données
    }
    catch (erreur) {
        alert("error");
    }
}

async function UserProfile(token) {
    let url = 'http://localhost:3001/api/v1/user/profile';
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        const dataUser = await response.json(); // Transmets les données à la variable dataUser
        console.log(dataUser)
        return dataUser; // Retourne les données obtenues
    }
    catch (erreur) {
        alert("error");
    }
}

async function UpdateUserName(token, newUserName) {
    const url = 'http://localhost:3001/api/v1/user/profile';

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName: newUserName }), // Envoie le nouveau nom d'utilisateur
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du nom d\'utilisateur', error);
    }
}


export const ApiService = {
    login, UserProfile, UpdateUserName
}