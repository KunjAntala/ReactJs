import { useState } from "react"
import React from "react"

const AuthContext = React.createContext({
    Token:'',
    IsLogged:false,
    Login : (token) => {},
    Logout : () => {}
})

export const AuthContextProvider = (props) => {
    const [token,setToken] = useState('')
    const isLoggedIn =!! token

    const loginHandler = (token) => {
        setToken(token)
    }

    const logoutHandler = () => {
        setToken(null)
    }

    const contextValue = {
        Token:token,
        IsLogged:isLoggedIn,
        Login:loginHandler,
        Logout:logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}
export default AuthContext