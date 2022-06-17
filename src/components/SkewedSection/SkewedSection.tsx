import { Component, JSX } from 'solid-js'
import styles from './SkewedSection.module.scss'

type Props = { children: JSX.Element, background: string, border: string }
const SkewedSection: Component<Props> = ({ children, background, border, ...props }) =>
  <section class={styles.SkewedSection} style={{ '--background': background, '--border': border }} {...props}>
    <div class={styles.Background}/>
    <div>
      {children}
    </div>
  </section>

export default SkewedSection
