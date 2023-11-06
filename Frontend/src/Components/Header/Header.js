import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { DataService } from '../../_Services/DataService';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthAuthToken } from '../../_Selectors/AuthSelector';
import { selectUserName } from '../../_Selectors/UserSelector';
import Logo from '../../Assets/img/argentBankLogo.avif'

const Header = () => {
    const token = useSelector(selectAuthAuthToken);
    const userProfile = useSelector(selectUserName);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(DataService.logout());
    };

    useEffect(() => {
        dispatch(DataService.getUserProfile());
    }, [dispatch]);

    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/Home" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to={token ? "/user" : "/Login"} className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {token && userProfile ? userProfile : ""}
                    </NavLink>
                    <NavLink to={token ? "/Home" : "/Login"} className="main-nav-item" onClick={handleLogout}>
                        {token ? "Logout" : "Sign In"}
                    </NavLink>
                </div>
            </nav>
        </header >
    );
};

export default Header;

