import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, User, } from './Index.js';
import Layout from '../../Layouts/Layouts.js';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="ARGENTBANK" element={<Navigate to="/Home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/User" element={<User />} />
                <Route path="*" element={<Home />} />
            </Route>

        </Routes>
    );

};

export default PublicRouter;