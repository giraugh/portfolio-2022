import type { Component } from 'solid-js'

import { Banner, About, Stevent, FishTime } from 'sections'

import styles from './App.module.scss'

const App: Component = () => {
  return (
    <main class={styles.App}>
      <Banner />
      <About />
      <Stevent />
      <FishTime />
    </main>
  )
}

export default App
