import { Component, JSX } from 'solid-js'
import styles from './SkewedSection.module.scss'

type SkewedSectionProps = JSX.HTMLAttributes<HTMLElement> & {
  background: string,
  border: string,
  onTop?: boolean,
  topBorder?: boolean,
}
const SkewedSection: Component<SkewedSectionProps> = ({ background, border, onTop, topBorder, children, ...props }) =>
  <section style={{ '--background': background, '--border': border }} class={styles.SkewedSection} {...props}>
    <div class={`${styles.Background} ${onTop ? 'onTop' : ''} ${topBorder ? 'topBorder' : ''}`} />
    <div>
      {children}
    </div>
  </section>

export default SkewedSection
