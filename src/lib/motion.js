// Centralised motion configuration (Motion for React).
// One easing family and a small set of duration tokens keep every animation on the site consistent.
// Reduced motion is honoured globally via <MotionConfig reducedMotion="user"> in main.jsx.

export const ease = {
  out: [0.22, 1, 0.36, 1], // primary: confident deceleration (ease-out-expo-like)
  inOut: [0.65, 0, 0.35, 1], // for elements that move across the screen
  soft: [0.25, 0.1, 0.25, 1],
}

export const duration = {
  fast: 0.25, // hovers, small UI
  base: 0.6, // standard entrances
  slow: 0.9, // large headings, images
  cinematic: 1.6, // hero background
}

// Shared viewport settings: animate once, slightly before the element is fully in view.
export const viewport = { once: true, amount: 0.2, margin: '0px 0px -8% 0px' }

const t = (d = duration.base, delay = 0) => ({ duration: d, ease: ease.out, delay })

// ---- Variants -------------------------------------------------------------
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: t(duration.base, delay) }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({ opacity: 1, transition: t(duration.base, delay) }),
}

export const slideReveal = {
  hidden: { opacity: 0, x: -32 },
  show: (delay = 0) => ({ opacity: 1, x: 0, transition: t(duration.base, delay) }),
}

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.94 },
  show: (delay = 0) => ({ opacity: 1, scale: 1, transition: t(duration.slow, delay) }),
}

// Masked line reveal for headlines: the line slides up from behind its own clip.
export const lineReveal = {
  hidden: { y: '110%' },
  show: (delay = 0) => ({ y: '0%', transition: t(duration.slow, delay) }),
}

// Image reveal: a curtain wipes away while the image settles from a slight zoom.
export const imageReveal = {
  hidden: { clipPath: 'inset(0% 0% 100% 0%)' },
  show: (delay = 0) => ({ clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.1, ease: ease.inOut, delay } }),
}
export const imageSettle = {
  hidden: { scale: 1.18 },
  show: (delay = 0) => ({ scale: 1, transition: { duration: 1.6, ease: ease.out, delay } }),
}

// Containers that stagger their children.
export const stagger = (gap = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren } },
})

// Gold accent rule that draws from the left.
export const drawLine = {
  hidden: { scaleX: 0 },
  show: (delay = 0) => ({ scaleX: 1, transition: t(duration.slow, delay) }),
}
