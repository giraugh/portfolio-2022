import type { Component } from 'solid-js'

import { Banner, About } from 'components'

import styles from './App.module.scss'

const App: Component = () => {
  return (
    <main class={styles.App}>
      <Banner />
      <About />
    </main>
  )
}

export default App
