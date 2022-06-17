/* @refresh reload */
import { render } from 'solid-js/web'

import { App } from 'components'

import './styles/index.scss'

render(() => <App />, document.getElementById('root') as HTMLElement)
