import { createElement, Github, Linkedin, FileText } from 'lucide'
import { SkewedSection } from 'components'

import styles from './About.module.scss'

const PORTRAIT_URL = 'https://cdn.giraugh.xyz/compressed/ewan.webp'
const GITHUB_URL = 'https://github.com/giraugh'
const LINKED_IN_URL = 'https://www.linkedin.com/in/ewan-breakey-8294241a9/'
const RESUME_URL = 'https://drive.google.com/file/d/1u6UoSsEBk9zjqBOLg4MVTYfqV_b6yL_m/view?usp=sharing'

const About = () =>
  <SkewedSection onTop topBorder background='var(--green)' border='var(--dark-green)'>
    <div class={styles.Content}>
      <div class={styles.PortraitCircle} style={{ 'background-image': `url(${PORTRAIT_URL})` }}/>
      <div>
        <p><strong>Hey! I'm Ewan!</strong></p>
        <p>
          I&apos;m a software engineer and web designer from Melbourne, Australia.
          I love to collaborate on creative projects, promote diversity/accessibility and hone my skills.
        </p>
        <div class={styles.ButtonGroup}>
          <a target="_blank" rel="noreferrer nofollow" href={GITHUB_URL}><button>{createElement(Github)}Github</button></a>
          <a target="_blank" rel="noreferrer nofollow" href={LINKED_IN_URL}><button>{createElement(Linkedin)}LinkedIn</button></a>
          <a target="_blank" rel="noreferrer nofollow" href={RESUME_URL}><button>{createElement(FileText)}Resume</button></a>
        </div>
      </div>
    </div>
  </SkewedSection>

export default About
