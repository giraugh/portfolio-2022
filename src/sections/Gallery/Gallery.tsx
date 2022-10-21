import { createEffect, createSignal, onCleanup, onMount, Show, Signal } from 'solid-js'
import { Portal } from 'solid-js/web'
import { ChevronDown, ChevronUp, createElement, ShoppingBag } from 'lucide'

import { SkewedSection, Button } from 'components'

import styles from './Gallery.module.scss'

const Gallery = () => {
  let bannerSectionRef: HTMLElement | undefined = undefined
  let gallerySectionRef: HTMLElement | undefined = undefined
  let buttonRef: HTMLElement | undefined = undefined
  const [isOpen, setIsOpen] = createSignal(false)

  /* Track whether close button should be visible */
  const [sectionVisible, setSectionVisible] = createSignal(false)
  const [buttonVisible, setButtonVisible] = createSignal(false)
  const showCloseButton = () => sectionVisible() && !buttonVisible()
  createEffect(() => {
    const handleObservations = (entries: IntersectionObserverEntry[]) => {
      setSectionVisible(entries.find(e => e.target === gallerySectionRef)?.isIntersecting ?? sectionVisible())
      setButtonVisible(entries.find(e => e.target === buttonRef)?.isIntersecting ?? buttonVisible())
    }

    if (isOpen()) {
      const observer = new IntersectionObserver(handleObservations, { threshold: .05 })
      if (gallerySectionRef) observer.observe(gallerySectionRef)
      if (buttonRef) observer.observe(buttonRef)
      return () => observer.disconnect()
    }
  })

  return <>
    <SkewedSection ref={bannerSectionRef} background='var(--bright-blue)' border='transparent'>
      <div class={styles.Content}>
        <div class={styles.Text}>
          <h2 class={styles.Heading}>Design Gallery</h2>
          <p>
            A showcase of my design and illustration work for various university communities, discord servers and personal projects.
            Primarily features vector and pixel art pieces.
          </p>
          <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen())} background='var(--snake-blue)'>
            <Show when={!isOpen()}>Open Gallery {createElement(ChevronDown)}</Show>
            <Show when={isOpen()}>Close Gallery {createElement(ChevronUp)}</Show>
          </Button>
        </div>
      </div> 
      <div class={styles.Snake} />
    </SkewedSection>
    <Show when={isOpen()}>
      <button
        onClick={() => { bannerSectionRef?.scrollIntoView(); setIsOpen(false) }}
        class={`${styles.CloseButton} ${showCloseButton() ? 'visible' : 'hidden'}`}>
          {createElement(ChevronUp)}
      </button>
      <SkewedSection topBorder background='var(--deep-blue)' border='var(--dark-blue)' ref={gallerySectionRef}>
        <GalleryContent />
      </SkewedSection>
    </Show>
  </>
}

const DUMPLING_NIGHT_URL = 'https://cdn.giraugh.xyz/compressed/dumpling-night.webp'
const BIT_NEEDS_YOU_URL = 'https://cdn.giraugh.xyz/compressed/bit-needs-you-square.webp'
const WELCOME_NIGHT_2022_URL = 'https://cdn.giraugh.xyz/compressed/welcome-night-2022.webp'
const PAIT_URL = 'https://cdn.giraugh.xyz/compressed/pait-close.webp'
const CHILL_NIGHT_URL = 'https://cdn.giraugh.xyz/compressed/chill-night.webp'
const ESRI_URL = 'https://cdn.giraugh.xyz/compressed/esri-tech-talk-poster.webp'
const QANDA_ATLASSIAN_URL = 'https://cdn.giraugh.xyz/compressed/qanda-atlassian-poster.webp'
const BIT_3D_GLASSES_URL = 'https://cdn.giraugh.xyz/compressed/bit-3d-glasses-poster.webp'
const WELCOME_NIGHT_2021_URL = 'https://cdn.giraugh.xyz/compressed/welcome-night-2021.webp'
const BOAT_PARTY_URL = 'https://cdn.giraugh.xyz/compressed/boat-party-promo-coal-wide.webp'
const LASER_BOWLING_URL = 'https://cdn.giraugh.xyz/compressed/laser-bowling.webp'

const ATTRIUM_URL = 'https://cdn.giraugh.xyz/compressed/attrium-obelisk.webp'
const DND_URL = 'https://cdn.giraugh.xyz/compressed/dnd.webp'
const APEX_URL = 'https://cdn.giraugh.xyz/compressed/apex-icon-contrast-boosted.webp'
const WIGGLES_URL = 'https://cdn.giraugh.xyz/compressed/wiggles.webp'
const WIGGLES_XMAS_URL = 'https://cdn.giraugh.xyz/compressed/wiggles-xmas.webp'
const WIGGLES_PRIDE_URL = 'https://cdn.giraugh.xyz/compressed/wiggles-pride-tie.webp'
const HONEY_HEIST_URL = 'https://cdn.giraugh.xyz/compressed/honey-heist-pot-s.webp'
const HOWDY_HEIST_URL = 'https://cdn.giraugh.xyz/compressed/howdy-heist-screenshot.webp'
const UNIHACK_URL = 'https://cdn.giraugh.xyz/compressed/uh.webp'

const LANDSCAPE_URL = 'https://cdn.giraugh.xyz/compressed/parallax-landscape.webp'
const LANDSCAPE_ORANGE_URL = 'https://cdn.giraugh.xyz/compressed/parallax-orange-landscape.webp'
const AMONG_US_URL = 'https://cdn.giraugh.xyz/compressed/among-us-ssssh-bit-sticker.webp'
const TERETH_VANCE_URL = 'https://cdn.giraugh.xyz/compressed/tereth-vance.webp'
const GIRAFFE_URL = 'https://cdn.giraugh.xyz/compressed/giraffe-trect.webp'
const GIRAFFE_BREAD_URL = 'https://cdn.giraugh.xyz/compressed/giraffe-w-bread.webp'
const PROFILE_URL = 'https://cdn.giraugh.xyz/compressed/profile-halo.webp'
const PROFILE_ROBOT_URL = 'https://cdn.giraugh.xyz/compressed/profile-robot.webp'
const PROFILE_SCARY_URL = 'https://cdn.giraugh.xyz/compressed/profile-scary.webp'
const MOCKINBIRD_URL = 'https://cdn.giraugh.xyz/compressed/mockinbird.webp'
const JULIAN_URL = 'https://cdn.giraugh.xyz/compressed/julian-red.webp'
const JULIAN_PINK_URL = 'https://cdn.giraugh.xyz/compressed/julian-pink.webp'
const ROBOT_OUTLINE_URL = 'https://cdn.giraugh.xyz/compressed/robot-w-outline-bw.webp'
const SUNFLOWER_HAPPY_URL = 'https://cdn.giraugh.xyz/compressed/sunflower-happy.webp'

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

const GalleryCard = ({ src, square }: { src: string, square?: boolean }) => {
  const [showModal, setShowModal] = createSignal(false)

  /* TODO: listen for any click, not just on modal to dismiss */

  createEffect(() => {
    document.body.classList.toggle('no-scroll', showModal())
  })

  return <>
    <img
      onClick={() => setShowModal(true)}
      src={src}
      class={`${styles.GalleryCard} ${square ? 'square' : ''}`} />
    <Show when={showModal()}>
      <Portal mount={document.body}>
        <div class={styles.ImageModal} onClick={() => setShowModal(false)}>
          <img src={src} />
        </div>
      </Portal>
    </Show>
  </>
}

export default Gallery
