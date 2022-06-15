import type { Component } from 'solid-js'

import { Banner } from 'components'

import styles from './App.module.scss'

const App: Component = () => {
  return (
    <main class={styles.App}>
      <Banner />
    </main>
  )
}

export default App
