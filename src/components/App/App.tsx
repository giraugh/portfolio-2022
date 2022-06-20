import type { Component } from 'solid-js'

import { Banner, About, Stevent, FishTime, Automatarium, Gallery } from 'sections'

import styles from './App.module.scss'

const App: Component = () => {
  return (
    <main class={styles.App}>
      <Banner />
      <About />
      <Stevent />
      <FishTime />
      <Automatarium />
      <Gallery />
      <Stevent />
    </main>
  )
}

export default App
