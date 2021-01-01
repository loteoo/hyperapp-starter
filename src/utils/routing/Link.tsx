import { navigate } from './fx'

const Link = ({ href, ...rest }, children) => {
  const HandleClick = (state, ev) => {
    ev.preventDefault()
    return [state, navigate(href)]
  }
  return (
    <a href={href} onclick={HandleClick} {...rest}>
      {children}
    </a>
  )
}

export default Link
