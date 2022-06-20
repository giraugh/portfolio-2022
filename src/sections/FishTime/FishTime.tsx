import { createElement, Github } from 'lucide'

import { SkewedSection, Button } from 'components'
import fishTimeBannerURL from 'assets/images/fish-time-banner.svg'
import fishTimeScreenshotURL from 'assets/images/fish-time-screenshot.png'

import Waves from './Waves/Waves'
import styles from './FishTime.module.scss'

const FISH_TIME_LINK = 'https://github.com/giraugh/fish.time'

const FishTime = () =>
  <SkewedSection background='var(--fish-time-background)' border='transparent'>
    <div class={styles.Content}>
      <img class={styles.Title} src={fishTimeBannerURL} alt='Fish Time Logo and Title'/>
      <div class={styles.Text}>
        <p>
          Fish Time is a WIP <b>time tracking web app</b> with an ocean aesthetic.
          Unlike its land-loving contemporaries, Fish Time has a focus on collaboration features, ease-of-use and mobile support.
          Whilst still in-progress, Fish Time is <b>open source</b> and contributions are greatly encouraged!
        </p>
        <Button href={FISH_TIME_LINK} background='var(--fish-time-brand)'>Show me the fish! {createElement(Github)}</Button>
      </div>
      <div class={styles.ScreenshotContainer}>
        <div class={styles.Screenshot} />
      </div>
    </div>
    <Waves />
  </SkewedSection>

export default FishTime
