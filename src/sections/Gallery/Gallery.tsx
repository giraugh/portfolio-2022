import { createSignal, Show } from 'solid-js'
import { ChevronDown, ChevronUp, createElement, Expand } from 'lucide'

import { SkewedSection, Button } from 'components'

import styles from './Gallery.module.scss'

const Gallery = () => {
  const [isOpen, setIsOpen] = createSignal(false)

  return <>
    <SkewedSection background='var(--bright-blue)' border='transparent'>
      <div class={styles.Content}>
        <div class={styles.Text}>
          <h2 class={styles.Heading}>Design Gallery</h2>
          <p>
            A showcase of my design and illustration work for various university communities, discord servers and personal projects.
            Primarily features vector and pixel art pieces.
          </p>
          <Button onClick={() => setIsOpen(!isOpen())} background='var(--snake-blue)'>
            <Show when={!isOpen()}>Open Gallery {createElement(ChevronDown)}</Show>
            <Show when={isOpen()}>Close Gallery {createElement(ChevronUp)}</Show>
          </Button>
        </div>
      </div> 
      <div class={styles.Snake} />
    </SkewedSection>
    <Show when={isOpen()}>
      <SkewedSection topBorder background='var(--deep-blue)' border='var(--dark-blue)'>
        <GalleryContent />
      </SkewedSection>
    </Show>
  </>
}

const DUMPLING_NIGHT_URL = 'https://cdn.giraugh.xyz/dumpling-night.png'
const BIT_NEEDS_YOU_URL = 'https://cdn.giraugh.xyz/bit-needs-you-square.png'
const WELCOME_NIGHT_2022_URL = 'https://cdn.giraugh.xyz/welcome-night-2022.png'
const PAIT_URL = 'https://cdn.giraugh.xyz/pait-close.png'
const CHILL_NIGHT_URL = 'https://cdn.giraugh.xyz/chill-night.png'
const ESRI_URL = 'https://cdn.giraugh.xyz/esri-tech-talk-poster.png'
const QANDA_ATLASSIAN_URL = 'https://cdn.giraugh.xyz/qanda-atlassian-poster.png'
const BIT_3D_GLASSES_URL = 'https://cdn.giraugh.xyz/bit-3d-glasses-poster.png'
const WELCOME_NIGHT_2021_URL = 'https://cdn.giraugh.xyz/welcome-night-2021.png'
const BOAT_PARTY_URL = 'https://cdn.giraugh.xyz/boat-party-promo-coal-wide.png'
const LASER_BOWLING_URL = 'https://cdn.giraugh.xyz/laser-bowling.png'

const ATTRIUM_URL = 'https://cdn.giraugh.xyz/attrium-obelisk.png'
const DND_URL = 'https://cdn.giraugh.xyz/dnd.png'
const APEX_URL = 'https://cdn.giraugh.xyz/apex-icon-contrast-boosted.png'
const WIGGLES_URL = 'https://cdn.giraugh.xyz/wiggles.png'
const WIGGLES_XMAS_URL = 'https://cdn.giraugh.xyz/wiggles-xmas.png'
const WIGGLES_PRIDE_URL = 'https://cdn.giraugh.xyz/wiggles-pride-tie.png'
const HONEY_HEIST_URL = 'https://cdn.giraugh.xyz/honey-heist-pot-s.png'
const HOWDY_HEIST_URL = 'https://cdn.giraugh.xyz/howdy-heist-screenshot.png'
const UNIHACK_URL = 'https://cdn.giraugh.xyz/uh.png'

const LANDSCAPE_URL = 'https://cdn.giraugh.xyz/parallax-landscape.png'
const LANDSCAPE_ORANGE_URL = 'https://cdn.giraugh.xyz/parallax-orange-landscape.png'
const AMONG_US_URL = 'https://cdn.giraugh.xyz/among-us-ssssh-bit-sticker.png'
const TERETH_VANCE_URL = 'https://cdn.giraugh.xyz/tereth-vance.png'
const GIRAFFE_URL = 'https://cdn.giraugh.xyz/giraffe-trect.png'
const GIRAFFE_BREAD_URL = 'https://cdn.giraugh.xyz/giraffe-w-bread.png'
const PROFILE_URL = 'https://cdn.giraugh.xyz/profile-halo.png'
const PROFILE_ROBOT_URL = 'https://cdn.giraugh.xyz/profile-robot.png'
const PROFILE_SCARY_URL = 'https://cdn.giraugh.xyz/profile-scary.png'
const MOCKINBIRD_URL = 'https://cdn.giraugh.xyz/mockinbird.png'
const JULIAN_URL = 'https://cdn.giraugh.xyz/julian-red.png'
const JULIAN_PINK_URL = 'https://cdn.giraugh.xyz/julian-pink.png'
const ROBOT_OUTLINE_URL = 'https://cdn.giraugh.xyz/robot-w-outline-bw.png'
const SUNFLOWER_HAPPY_URL = 'https://cdn.giraugh.xyz/sunflower-happy.png'

const GalleryContent = () => <>
  <div class={styles.GalleryContent}>
    <div class={styles.Description}>
      <h3>CSIT Posters</h3>
      <p>
        Custom posters created to market CSIT events during 2020-2022. CSIT’s robot mascot Bit, appears prominently throughout.
      </p>
    </div>
    <div class={`${styles.ImageGrid} expand`}>
      <div>
        <GalleryCard src={DUMPLING_NIGHT_URL} />
        <GalleryCard src={BIT_NEEDS_YOU_URL} square />
      </div>
      <div>
        <GalleryCard src={WELCOME_NIGHT_2022_URL} />
      </div>
      <div>
        <GalleryCard src={PAIT_URL} />
      </div>
      <div>
        <GalleryCard src={CHILL_NIGHT_URL} />
      </div>
      <div>
        <GalleryCard src={BOAT_PARTY_URL} />
      </div>
      <div>
        <GalleryCard src={LASER_BOWLING_URL} />
      </div>
      <div>
        <GalleryCard src={QANDA_ATLASSIAN_URL} />
        <GalleryCard src={BIT_3D_GLASSES_URL} square />
      </div>
      <div>
        <GalleryCard src={WELCOME_NIGHT_2021_URL} />
        <GalleryCard src={ESRI_URL} />
      </div>
    </div>
    <div class={styles.Description}>
      <h3>Discord Icons</h3>
      <p>
        Icons created for various discord servers from 2018-2022.
      </p>
    </div>
    <div class={styles.ImageGrid}>
      <div>
        <GalleryCard src={APEX_URL} square />
        <GalleryCard src={ATTRIUM_URL} square />
        <GalleryCard src={DND_URL} square />
      </div>
      <div>
        <GalleryCard src={WIGGLES_URL} square />
        <GalleryCard src={WIGGLES_XMAS_URL} square/>
        <GalleryCard src={WIGGLES_PRIDE_URL} square/>
      </div>
      <div>
        <GalleryCard src={HONEY_HEIST_URL} square />
        <GalleryCard src={HOWDY_HEIST_URL} square />
        <GalleryCard src={UNIHACK_URL} square />
      </div>
    </div>
    <div class={styles.Description}>
      <h3>Other Designs</h3>
      <p>
        Designs from other various personal projects.
      </p>
    </div>
    <div class={`${styles.ImageGrid} expand`}>
      <div>
        <GalleryCard src={LANDSCAPE_URL} />
      </div>
      <div class={styles.LargeOnly}>
        <GalleryCard src={LANDSCAPE_ORANGE_URL} />
      </div>
      <div>
        <GalleryCard src={AMONG_US_URL} />
        <GalleryCard src={TERETH_VANCE_URL} square />
      </div>
      <div>
        <GalleryCard src={GIRAFFE_URL} square />
        <GalleryCard src={GIRAFFE_BREAD_URL} />
      </div>
      <div>
        <GalleryCard src={PROFILE_URL} />
        <GalleryCard src={PROFILE_ROBOT_URL} />
        <GalleryCard src={PROFILE_SCARY_URL} />
      </div>
      <div>
        <GalleryCard src={MOCKINBIRD_URL} />
      </div>
      <div>
        <GalleryCard src={JULIAN_URL} />
        <GalleryCard src={JULIAN_PINK_URL} />
      </div>
      <div>
        <GalleryCard src={ROBOT_OUTLINE_URL} />
        <GalleryCard src={SUNFLOWER_HAPPY_URL} square />
      </div>
    </div>
  </div>
</>

const GalleryCard = ({ src, square }: { src: string, square?: boolean }) =>
  <div style={{ 'background-image': `url(${src})` }} class={`${styles.GalleryCard} ${square ? 'square' : ''}`} />

export default Gallery
