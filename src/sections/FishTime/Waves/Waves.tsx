import { createSignal, onCleanup, onMount } from 'solid-js'
import styles from './Waves.module.scss'

const WAVE_HEIGHT = 70
const WAVE_COUNT = 8

const Waves = () => {
  let svgRef: SVGSVGElement | undefined = undefined
  const [pageWidth, setPageWidth] = createSignal(0)

  // Keep track of svg width
  onMount(() => { window.addEventListener('resize', handleResize); handleResize() })
  onCleanup(() => { window.removeEventListener('resize', handleResize) })
  const handleResize = () => {
    if (svgRef) setPageWidth(svgRef.clientWidth * 2)
  }
  
  const wavePath = () => {
    // We find points along the width of the page
    // and then alternate whether they are up or down
    const wavePoints = Array.from({ length: WAVE_COUNT + 1 })
      .map((_, i) => ({ x: (pageWidth() / WAVE_COUNT) * i, y: WAVE_HEIGHT / 2 }))

    // Calculate path of the wave
    return `M${wavePoints[0].x} ${wavePoints[0].y}` +
           `Q${wavePoints[0].x + wavePoints[1].x / 2} ${0} ${wavePoints[1].x} ${wavePoints[1].y}` +
           wavePoints.slice(2).map(p => `T${p.x} ${p.y}`).join(' ') +
           `L${pageWidth()} ${WAVE_HEIGHT * 2}` +
           `L${0} ${WAVE_HEIGHT * 2}`
  }

  return <svg class={styles.Svg} width={pageWidth()} height={3 * WAVE_HEIGHT} ref={svgRef}>
    <defs>
      <linearGradient id="wave-gradient" gradientTransform="rotate(90)">
        <stop offset="5%" stop-color="var(--clr-waves-bright)" />
        <stop offset="80%" stop-color="var(--clr-background)" />
      </linearGradient>
    </defs>
    <g class={styles.WavesContainer}>
      <path d={wavePath()} fill="url(#wave-gradient)" />
    </g>
  </svg>
}

export default Waves
