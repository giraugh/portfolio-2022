import styles from './About.module.scss'
import { createElement, Github, Linkedin } from 'lucide'

const About = () => {
  return <section class={styles.About}>
    <div class={styles.Background}/>
    <div class={styles.Content}>
      <div class={styles.PortraitCircle} />
      <div class={styles.Bio}>
        <p><strong>Hey! I'm Ewan!</strong></p>
        <p>
          I&apos;m a software engineer and web designer from Melbourne, Australia.
          I love to collaborate on creative projects, promote diversity/accessibility and hone my skills.
        </p>
        <div class={styles.ButtonGroup}>
          <button>{createElement(Github)}Github</button>
          <button>{createElement(Linkedin)}LinkedIn</button>
        </div>
      </div>
    </div>
  </section>
}

export default About
