import { AuthUser } from '../context/UserContext'
import { Navigate, Outlet } from 'react-router';

const ProtectedAuth = ({ children }) => {
    const { logginedUser } = AuthUser();

    if (logginedUser) {
        return <Navigate to="/home" />;
    }

    return children;
}

export default ProtectedAuth
