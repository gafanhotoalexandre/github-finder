import { LuSearch } from 'react-icons/lu'
import { UserContainer } from '../components/UserContainer'

export function Home() {
  return (
    <div className="">
      <header className="w-96 h-32 rounded-lg flex flex-col gap-3 justify-center bg-[#ffffff33] shadow">
        <h1 className="title">Github Finder</h1>

        {/* input section */}
        <section className="px-4 flex items-center justify-center">
          <input
            type="text"
            className="w-60 rounded-full px-4 py-1 transition-all outline-none focus:w-64"
          />

          <button className="w-8 h-8 rounded-full bg-sky-400 ml-2 flex items-center justify-center text-white hover:scale-110 transition-all">
            <LuSearch className="text-xl" />
          </button>
        </section>
      </header>

      <UserContainer></UserContainer>
    </div>
  )
}
