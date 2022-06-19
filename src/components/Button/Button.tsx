import { JSX, Component } from 'solid-js'
import styles from './Button.module.scss'

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  background: string,
  darkBackground: string,
  href?: string,
}
const Button: Component<ButtonProps> = ({ href, background, darkBackground, ...props }) => {
  const button =
    <button
      style={{ '--background': background, '--background-dark': darkBackground }}
      class={styles.Button}
      {...props} />

  return href
    ? <a href={href} target='_blank' class={styles.ButtonLink}>{button}</a>
    : button
}

export default Button
