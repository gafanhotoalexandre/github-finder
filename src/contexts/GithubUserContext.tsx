import { createContext, useState } from 'react'
import { GithubUser } from '../types/GithubUser'

interface GithubUserContextData {
  userData: GithubUser | null
  setUserData: React.Dispatch<React.SetStateAction<GithubUser | null>>
  // fetchUserData: (username: string) => Promise<string>
}
export const GithubUserContext = createContext<
  GithubUserContextData | undefined
>(undefined)

interface GithubUserProps {
  children: React.ReactNode
}
export function GithubUserProvider({ children }: GithubUserProps) {
  const [userData, setUserData] = useState<GithubUser | null>(null)
  return (
    <GithubUserContext.Provider value={{ userData, setUserData }}>
      {children}
    </GithubUserContext.Provider>
  )
}
