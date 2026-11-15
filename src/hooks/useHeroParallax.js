import { useScroll, useTransform } from 'motion/react'

// Scroll-linked values for page heroes: the background drifts down slower than the page and the
// content rises and fades as the hero scrolls away. Pass a ref attached to the hero <section>.
export default function useHeroParallax(ref, { bg = '18%', content = '-12%', fadeEnd = 0.75 } = {}) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  return {
    bgY: useTransform(scrollYProgress, [0, 1], ['0%', bg]),
    contentY: useTransform(scrollYProgress, [0, 1], ['0%', content]),
    contentOpacity: useTransform(scrollYProgress, [0, fadeEnd], [1, 0]),
  }
}
