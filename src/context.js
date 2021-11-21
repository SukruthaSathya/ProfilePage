import {createContext,useState} from 'react'



export const AppContext = createContext(null)

function Post({children}){
    const [username,setUsername] = useState('')
     

    return(
   <AppContext.Provider value={{username,setUsername}}>
       {children}
   </AppContext.Provider>
    )
}

export default Post