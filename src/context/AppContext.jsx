import {createContext} from 'react'
import { interviewer } from '../assets/asset'

export const AppContext = createContext()

const AppContextProvider=(props)=>{
    const value={
        interviewer
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
