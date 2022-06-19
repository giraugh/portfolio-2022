import { createElement, ArrowRight } from 'lucide'

import { SkewedSection, Button } from 'components'
import steventBannerURL from 'assets/images/stevent-banner.svg'
import steventScreenshotURL from 'assets/images/stevent-screenshot.png'

import styles from './Stevent.module.scss'

const STEVENT_LINK = 'https://stevent.club'
const AYECAL_LINK = 'https://github.com/stevent-team/ayecal'
const EPOXY_LINK = 'https://github.com/stevent-team/epoxy'
const CHARTLET_LINK = 'https://github.com/stevent-team/react-chartlet'

const Stevent = () =>
  <SkewedSection background='var(--white)' border='var(--grey)'>
    <div class={styles.Content}>
      <img class={styles.Title} src={steventBannerURL} alt='Stevent Logo and Title'/>
      <div class={styles.Text}>
        <p>
          I'm a <b>co-founder</b> of Stevent, the unified platform for student clubs and their events.
          Stevent is a hand made <b>web platform</b> providing a centralised home for events and communities at campuses across
          Australia. After launching as a startup in 2022, we received support and recognition from RMIT University
          and <b>RMIT Activator capital funding</b>.
        </p>
        <div class={styles.InfoBox}>
          <p>
            We also have a collection of open source satellite projects.
            If you're a JS developer, check out our projects
            <a target='_blank' href={AYECAL_LINK}><code>epoxy</code></a>,
            <a target='_blank' href={EPOXY_LINK}><code>ayecal</code></a> and 
            <a target='_blank' href={CHARTLET_LINK}><code>react-chartlet</code></a>! 
          </p>
        </div>
        <Button href={STEVENT_LINK} background='var(--stevent-brand)' darkBackground='darkblue'>Take me there! {createElement(ArrowRight)}</Button>
      </div>
      <div class={styles.ScreenshotContainer}>
        <img class={styles.Screenshot} src={steventScreenshotURL} alt='Screenshot of Stevent landing page' />
      </div>
    </div>
  </SkewedSection>

export default Stevent
