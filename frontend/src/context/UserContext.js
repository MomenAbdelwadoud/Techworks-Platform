import React,{createContext,useState} from 'react'

export const UserContext = createContext({signedIn:true,userType:'',setSignedIn:()=>{},setUserType:()=>{}})

export default function ContextWrapper(props){
const [signedIn, setSignedIn] = useState(true)
const [userType, setUserType] = useState('participant')
    return(
        <UserContext.Provider signedIn={signedIn} userType={userType} setUserType={setUserType} setSignedIn={setSignedIn}>
        {props.children}
        </UserContext.Provider>
    )
}