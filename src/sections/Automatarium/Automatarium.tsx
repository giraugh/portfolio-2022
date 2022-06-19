import { createElement, ArrowRight } from 'lucide'

import { Button, SkewedSection } from 'components'
import automatariumBannerURL from '@/assets/images/automatarium-banner.svg'

import styles from './Automatarium.module.scss'

const AUTOMATARIUM_LINK = 'https://github.com/automatarium/automatarium'

const Automatarium = () =>
  <SkewedSection background='var(--automatarium-grid-pattern)' border='var(--light-grey)'>
    <div class={styles.Content}>
      <img class={styles.Title} src={automatariumBannerURL} alt='Automatarium Logo and Title'/>
      <div class={styles.Text}>
        <p>
        <b>Automatarium</b> is a <b>modern recreation of JFLAP</b>, a dated tool for analysing automata and other theoretical computer science concepts.
        Automatarium adds a sleek modern user interface, dozens of quality-of-life features and a super easy-to-use testing lab.
        Originally created as part of my <b>capstone project</b> at RMIT, Automatarium is now <b>open-source</b> and accepting contributions.
        </p>
        <Button href={AUTOMATARIUM_LINK} background='var(--automatarium-brand)'>Take me there! {createElement(ArrowRight)}</Button>
      </div>
      <div class={styles.ScreenshotContainer}>
        <div class={styles.Screenshot} />
      </div>
    </div>
  </SkewedSection>

export default Automatarium
