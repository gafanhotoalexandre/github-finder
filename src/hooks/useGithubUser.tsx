import { useContext } from 'react'
import { GithubUserContext } from '../contexts/GithubUserContext'

export function useGithubUser() {
  const context = useContext(GithubUserContext)

  if (!context) {
    throw new Error(
      'useGithubUser deve ser utilizado dentro de um GithubUserProvider',
    )
  }
  return context
}
