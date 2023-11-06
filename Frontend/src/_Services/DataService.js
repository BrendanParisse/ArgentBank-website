import { loginUserSuccess, loginUserFailure, logoutUser } from '../_Slices/AuthSlice.js';
import { getUserProfileSuccess, getUserProfileFailure, updateUserProfileSuccess, updateUserProfileFailure } from '../_Slices/UserSlice.js';
import { ApiService } from './ApiService.js';

const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await ApiService.login(email, password);
        if (response.body.token) { // Si token est présent dans body
            dispatch(loginUserSuccess(response.body)); // Mets à jour le state
            window.location.href = '/user'; // Redirige l'utilisateur'
        } else {
            dispatch(loginUserFailure(response.message));
            alert('Identifiants de connexion incorrects'); // Affiche une alerte avec le message d'erreur
        }
    } catch (error) {
        dispatch(loginUserFailure(error.message));
        alert('Identifiants de connexion incorrects'); // Affiche une alerte en cas d'erreur
    }
};

const logout = () => (dispatch) => {
    dispatch(logoutUser());
};

const getUserProfile = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            const response = await ApiService.UserProfile(token);
            if (response) {
                dispatch(getUserProfileSuccess(response.body)); // Met à jour le state avec les données utilisateur
            } else {
                dispatch(getUserProfileFailure(response.message));
            }
        }
    } catch (error) {
        dispatch(getUserProfileFailure(error.message));
    }
};

const handleSubmit = (newUserName, setNewUserName) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await ApiService.UpdateUserName(token, newUserName);
        if (response.status === 200) {
            // Met à jour le nom d'utilisateur dans le state Redux
            dispatch(updateUserProfileSuccess(response.body));
            // Réinitialise le champ du nom d'utilisateur (formulaire))
            setNewUserName('');
        } else {
            dispatch(updateUserProfileFailure(response.message));
        }
    } catch (error) {
        dispatch(updateUserProfileFailure(error.message));
    }
};


export const DataService = {
    loginUser, getUserProfile, logout, handleSubmit
}

