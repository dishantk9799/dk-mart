import { AuthUser } from '../context/UserContext';
import { Navigate } from 'react-router';

const ProtectedHome = ({ children }) => {
    const { logginedUser } = AuthUser();

    if (!logginedUser) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedHome;
