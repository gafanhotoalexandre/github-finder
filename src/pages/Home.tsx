import { LuSearch } from 'react-icons/lu'

export function Home() {
  return (
    <div className="">
      <header className="w-96 h-32 rounded-lg flex flex-col bg-[#ffffff33]">
        <h1 className="title">Github Finder</h1>

        {/* input */}
        <section className="py-2 px-4 flex items-center justify-center">
          <input
            type="text"
            className="w-48 rounded-full px-4 py-1 transition-all outline-none focus:w-52"
          />

          <button className="w-8 h-8 rounded-full bg-sky-400 ml-2 flex items-center justify-center text-white hover:scale-110 transition-all">
            <LuSearch className="text-xl" />
          </button>
        </section>
      </header>
    </div>
  )
}
