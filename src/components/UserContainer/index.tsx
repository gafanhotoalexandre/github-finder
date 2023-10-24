export function UserContainer({ children }: { children?: React.ReactNode }) {
  return (
    <section
      className={`w-72 md:w-96 bg-[#fffffff2] rounded-b-lg  border-b-8 border-sky-400 mt-4 ${
        children ? 'rounded' : ''
      }`}
    >
      {children}
    </section>
  )
}
