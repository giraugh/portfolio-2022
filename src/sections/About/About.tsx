import { createElement, Github, Linkedin, ShoppingBag } from 'lucide'
import { SkewedSection } from 'components'

import styles from './About.module.scss'

const About = () =>
  <SkewedSection onTop background='var(--green)' border='var(--dark-green)'>
    <div class={styles.Content}>
      <div class={styles.PortraitCircle} />
      <div>
        <p><strong>Hey! I'm Ewan!</strong></p>
        <p>
          I&apos;m a software engineer and web designer from Melbourne, Australia.
          I love to collaborate on creative projects, promote diversity/accessibility and hone my skills.
        </p>
        <div class={styles.ButtonGroup}>
          <button>{createElement(Github)}Github</button>
          <button>{createElement(Linkedin)}LinkedIn</button>
          <button>{createElement(ShoppingBag)}Shop</button>
        </div>
      </div>
    </div>
  </SkewedSection>

export default About
