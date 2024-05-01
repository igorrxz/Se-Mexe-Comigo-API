import UserProvider from "./UserProvider"


export default function Providers({ children }) {
  return (
      <UserProvider>{children}</UserProvider>
  )
}
