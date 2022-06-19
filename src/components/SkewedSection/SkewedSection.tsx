import { Component, JSX } from 'solid-js'
import styles from './SkewedSection.module.scss'

type SkewedSectionProps = JSX.HTMLAttributes<HTMLElement> & {
  background: string,
  border: string,
}
const SkewedSection: Component<SkewedSectionProps> = ({ background, border, children, ...props }) =>
  <section  style={{ '--background': background, '--border': border }} class={styles.SkewedSection} {...props}>
    <div class={styles.Background}/>
    <div>
      {children}
    </div>
  </section>

export default SkewedSection
