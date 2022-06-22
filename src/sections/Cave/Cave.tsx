import { createEffect, For, onMount } from 'solid-js'
import { createElement, AlertTriangle } from 'lucide'

import { SkewedSection } from 'components'

import Spikes from './Spikes/Spikes'
import styles from './Cave.module.scss'
import projects from './projects'

const Cave = () => {
  return <SkewedSection background='var(--purple)' border='var(--purple)'>
    <div class={styles.Content}>
      <div class={styles.Text}>
        <h2 class={styles.Heading}><span class={styles.DesktopOnly}>Games &amp; </span>Other Projects</h2>
        <p>
          Check out some of my video game projects mixed in with some other interesting projects.
        </p>
        <div class={styles.WarningBox}>
          {createElement(AlertTriangle)}
          <p>
            Some of these projects date back to the start of my career so they might not all represent 
            the quality of my work in {String(new Date().getFullYear())} :&rpar;
          </p>
        </div>
      </div>
      <div class={styles.ProjectsContainer}>
        <For each={projects}>
          {(project) => <ProjectCard
            title={project.name}
            src={project.image}
            href={project.link}
            description={project.description}
            dark={project.dark} />}
        </For>
      </div>
    </div>
    <div class={styles.FullHeight}/>
    <SpikesSection />
  </SkewedSection>
}

const SpikesSection = () => <>
  <div class={styles.SpikesContainer}>
    <Spikes parallaxIntensity={6} simplexFreq={.5} spikeResolution={1500 / 90} spikeHeight={2000} spikeBaseHeight={1} fill='var(--deep-purple)' />
    <Spikes parallaxIntensity={10} spikeResolution={1500 / 70} spikeHeight={400} spikeBaseHeight={320} fill={'var(--dark-purple)'} />
    <Spikes spikeResolution={1500 / 70} spikeHeight={400} spikeBaseHeight={270} fill={'var(--purple)'} />
  </div>
  <div class={`${styles.SpikesContainer} floor`}>
    <Spikes spikeResolution={1500 / 70} spikeHeight={400} spikeBaseHeight={7} fill={'var(--dark-purple)'} />
    <Spikes spikeResolution={1500 / 70} spikeHeight={300} spikeBaseHeight={10} fill={'var(--purple)'} />
  </div>
</>

const ProjectCard = ({ title='', description='', src='', href='', dark=false }) => {
  let cardRef: HTMLElement | undefined = undefined
  onMount(() => {
    const onLoad = () => (cardRef as HTMLElement).style.backgroundImage = `url(${src})`
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }) 

  return <a ref={cardRef} class={styles.ProjectCard} href={href}>
    <div class={`${styles.ProjectCardContent} ${dark ? 'dark' : 'light'}`}>
      <span class={styles.ProjectTitle}>{title}</span>
      <p>{description}</p>
    </div>
  </a>
}


export default Cave
