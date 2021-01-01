import styles from './input.css'

const Input = ({ type = 'text', ...rest }) => (
  <input class={styles.input} type={type} {...rest} />
)

export default Input
