import React,{createContext, useState} from 'react';
export const AppContext = createContext();

export const AppProvider = (props)=>{
    const [search ,setSearch] = useState('');
    const [isSignIn,setSignIn] =useState(false);

    return(
    <AppContext.Provider
    value={{ search,setSearch,isSignIn,setSignIn
     }}>
        {props.children}
    </AppContext.Provider>
)};