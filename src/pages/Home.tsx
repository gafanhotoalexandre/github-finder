import { UserContainer } from '../components/UserContainer'
import { Header } from '../components/Header'
import { useGithubUser } from '../hooks/useGithubUser'
import { User } from '../components/User'

export function Home() {
  const { userData } = useGithubUser()

  return (
    <div className="">
      <Header />

      <UserContainer>
        {userData?.name && (
          <>
            <User />
          </>
        )}
      </UserContainer>
    </div>
  )
}
