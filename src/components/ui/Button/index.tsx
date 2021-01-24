import styles from './button.css'

const Button = ({ type = 'button', ...rest }, children) => (
  <button class={styles.button} type={type} {...rest} >{children}</button>
)

export default Button
