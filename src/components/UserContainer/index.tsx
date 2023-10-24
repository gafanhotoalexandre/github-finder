interface UserContainerProps extends React.HTMLProps<HTMLElement> {}
export function UserContainer(props: UserContainerProps) {
  return (
    <section
      {...props}
      className={`w-72 md:w-96 bg-[#fffffff2] rounded-b-lg  border-b-8 border-sky-400 mt-4 ${
        props.children ? 'rounded shadow' : ''
      }`}
    ></section>
  )
}
