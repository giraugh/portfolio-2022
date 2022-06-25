import { createSignal, onMount, onCleanup, createEffect } from 'solid-js'
import SimplexNoise from 'simplex-noise'

const Spikes = ({
  spikeHeight = 800,
  spikeResolution = 1500 / 90,
  spikeBaseHeight = 100,
  spikeMagnitude = 1,
  simplexSlice = 0,
  simplexFreq = 4,
  simplexOffset = 0,
  simplexSeed = '',
  fill = 'black',
  parallaxIntensity = 0,
}) => {
  let svgRef: SVGSVGElement | undefined = undefined
  const [pageWidth, setPageWidth] = createSignal(0)
  const [seed, setSeed] = createSignal(simplexSeed)

  onMount(() => {
    if (!seed()) {
      setSeed(String(Math.random() * 1000))
    }
  })

  // Apply parallax effect
  createEffect(() => {
    let timer: number
    const onScroll = () => {
      if (svgRef && parallaxIntensity !== 0) {
        const top = document.scrollingElement?.scrollTop ?? 0
        const deltaY = (svgRef?.getBoundingClientRect().top ?? top)
        svgRef.style.transform = `translateY(${Math.round(deltaY / (parallaxIntensity * 1))}px)` // (`translateY(${deltaY / 2})`)
      }
      timer = window.requestAnimationFrame(onScroll)
    }

    if (svgRef && parallaxIntensity != 0)
      onScroll()
    return () => timer && window.cancelAnimationFrame(timer)
  })

  // Keep track of svg width
  onMount(() => { window.addEventListener('resize', handleResize); handleResize() })
  onCleanup(() => { window.removeEventListener('resize', handleResize) })
  const handleResize = () => {
    if (svgRef) setPageWidth(svgRef.clientWidth * 2)
  }

  const spikePath = () => {
    const width = pageWidth()
    const simplex = new SimplexNoise(seed())
    const freq = simplexFreq
    const offset = simplexOffset

    const sampleSimplex = (x: number, freq: number) =>
      simplex.noise2D(simplexSlice, x * freq)

    const sampleHarmonic = (x: number, freq: number) =>
           sampleSimplex(x, freq) +
      .5 * sampleSimplex(x, freq*2) +
      .25 * sampleSimplex(x, freq*4) +
      .125 * sampleSimplex(x, freq*8)

    const sample = (x: number) =>
      (sampleHarmonic(x + offset, freq / width) + 1) / 3.5

    // Determine spike points
    const spikeCount = (1 / spikeResolution) * width
    const spikePoints = Array.from({ length: spikeCount })
      .map((_, i) => ({
        x: i * spikeResolution,
        y: spikeBaseHeight + spikeMagnitude * (spikeHeight * sample(i * width * (1 / spikeResolution)))
      }))

    return spikePoints.length > 0
      ? `M${spikePoints[0].x} ${spikePoints[0].y}` +
        spikePoints.slice(1).map(p => `L${p.x} ${p.y}`).join(' ') +
        `L${width} ${0}` +
        `L${0} ${0}` + 
        `L${spikePoints[0].x} ${spikePoints[1].y}` +
        'Z'
      : ''
  }

  return <svg width={pageWidth()} height={spikeHeight + spikeBaseHeight} ref={svgRef}>
    <g> 
      <path d={spikePath()} fill={fill} />
    </g>
  </svg>
}

export default Spikes
