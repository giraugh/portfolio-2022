import { SkewedSection } from 'components'

import styles from './Footer.module.scss'

const Footer = () => <SkewedSection onTop background='var(--purple)' border='var(--purple)'>
  <div class={styles.Content}>
    <h2 class={styles.Heading}>Thanks for stopping by!</h2>
    <p>
      If I can help with anything else, feel free to contact me at <a href='mailto:contact@ewanb.me'><b>contact@ewanb.me</b></a>.
    </p>
    <p class={styles.Legal}>
      This site is created with solid.js, open-source and licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>Creative Commons BY-NC-SA 4.0</a>.
      Check out <a href='https://github.com/giraugh/portfolio-2022'>the repo</a> to report any issues or to contribute!
    </p>
  </div>
  <div class={styles.FullHeight}/>
</SkewedSection>

export default Footer
