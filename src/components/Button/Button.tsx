import { JSX, Component } from 'solid-js'
import styles from './Button.module.scss'

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  background: string,
  href?: string,
}
const Button: Component<ButtonProps> = ({ href, background, ...props }) => {
  const button =
    <button
      style={{ '--background': background }}
      class={styles.Button}
      {...props} />

  return href
    ? <a href={href} target='_blank' class={styles.ButtonLink}>{button}</a>
    : button
}

export default Button
