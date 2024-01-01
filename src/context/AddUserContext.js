import { createContext, useContext } from "react";

export const UserContext = createContext({user:null})

export const UserProver =  UserContext.Provider

export const useUserContext = ()=> {
    return  useContext(UserContext)
}
