import { useGithubUser } from '../../hooks/useGithubUser'

export function User() {
  const { userData } = useGithubUser()

  return (
    <>
      <section className="picture-container">
        <img
          src={userData?.avatar_url}
          alt={userData?.login}
          className="picture"
        />
      </section>

      <section className="details-container">
        <h2 className="name">{userData?.name}</h2>
        <h3 className="username">{userData?.login}</h3>
        <p className="description">{userData?.bio}</p>
      </section>

      <section className="numbers-info-container">
        <div className="numbers-container">
          <h3>{userData?.public_repos}</h3>
          <h4>Repositórios</h4>
        </div>

        <div className="numbers-container">
          <h3>{userData?.followers}</h3>
          <h4>Seguidores</h4>
        </div>

        <div className="numbers-container">
          <h3>{userData?.following}</h3>
          <h4>Seguindo</h4>
        </div>
      </section>
    </>
  )
}
