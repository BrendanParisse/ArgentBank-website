import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataService } from '../../_Services/DataService';

const InfoUser = () => {
    const userProfile = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const [newUserName, setNewUserName] = useState(''); // État local pour le nouveau nom d'utilisateur
    const [isEditing, setIsEditing] = useState(false);

    const handleUserNameChange = (e) => {
        setNewUserName(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Transmets le nouveau nom
        dispatch(DataService.handleSubmit(newUserName, setNewUserName));
    };

    const handleEditClick = () => {
        setNewUserName(''); // Réinitialise le champ user
        setIsEditing(prevState => !prevState); // Inverse la valeur
    };

    const handleCancelClick = () => {
        setNewUserName('');
        setIsEditing(false); // Cache le formulaire
    };

    return (
        <div className="header">
            <h1>Welcome back<br />{userProfile ? userProfile.userName : 'Loading...'}</h1>
            <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
            {isEditing && (
                <div className='Formulaire'>
                    <form action="" method="post" onSubmit={handleFormSubmit}>
                        <div className='ChampForm'>
                            <label htmlFor="UserName">User Name:</label>
                            <input
                                type="text"
                                name="UserName"
                                id="UserName"
                                value={newUserName}
                                onChange={handleUserNameChange}
                            />
                        </div>
                        <div className='ChampForm Gris'>
                            <label htmlFor="FName">First Name:</label>
                            <input type="text" name="FName" placeholder={userProfile ? userProfile.firstName : 'Loading...'} readOnly={true} id="FName" />
                        </div>
                        <div className='ChampForm Gris'>
                            <label htmlFor="LName">Last Name:</label>
                            <input type="text" name="LName" placeholder={userProfile ? userProfile.lastName : 'Loading...'} readOnly={true} id="LName" />
                        </div>
                        <div className='ButtonForm'>
                            <input type="submit" value="Save" id="Save" />
                            <input type="button" value="Cancel" onClick={handleCancelClick} id="Cancel" />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default InfoUser;