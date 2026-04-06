import { createContext, useContext, useState } from "react";

const User = createContext();

export const UserProvider = ({ children }) => {
    const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem('registerUsers')) || []);
    const [logginedUser, setLogginedUser] = useState(JSON.parse(localStorage.getItem('logeedInUser')) || null);

    const AddRegisterUser = (data) => {
        let newUser = [...registerUser, data];
        setRegisterUser(newUser);
        localStorage.setItem('registerUsers', JSON.stringify(newUser));
    }
    const LogoutUser = () => {
        setLogginedUser(null);
        localStorage.removeItem('logeedInUser');
    };


    return (<User.Provider
        value={{
            AddRegisterUser,
            registerUser,
            setLogginedUser,
            logginedUser,
            LogoutUser
        }}
    >{children}
    </User.Provider>)
}

export const AuthUser = () => useContext(User);

