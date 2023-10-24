import { useState } from 'react'
import { LuSearch } from 'react-icons/lu'

import { api } from '../../services/client'
import { useGithubUser } from '../../hooks/useGithubUser'

export function Header() {
  const { setUserData } = useGithubUser()
  const [searchedUser, setSearchedUser] = useState('')

  async function getUserData() {
    try {
      const response = await api.get(`/${searchedUser}`)
      setUserData(response.data)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <header className="w-96 h-32 rounded-lg flex flex-col gap-3 justify-center bg-[#ffffff33] shadow">
      <h1 className="title">Github Finder</h1>

      {/* input section */}
      <section className="px-4 flex items-center justify-center">
        <input
          type="text"
          className="w-60 rounded-full px-4 py-1 transition-all outline-none focus:w-64"
          value={searchedUser}
          onChange={(e) => setSearchedUser(e.target.value)}
        />

        <button
          onClick={getUserData}
          className="w-8 h-8 rounded-full bg-sky-400 ml-2 flex items-center justify-center text-white hover:scale-110 transition-all"
        >
          <LuSearch className="text-xl" />
        </button>
      </section>
    </header>
  )
}
