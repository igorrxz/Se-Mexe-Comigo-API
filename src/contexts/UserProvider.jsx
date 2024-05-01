import { createContext } from "react";

const UserContext = createContext({})

export default function UserProvider({children}) {

  return (
    <UserContext.Provider value={null}>
      {children}
    </UserContext.Provider>
  )
}