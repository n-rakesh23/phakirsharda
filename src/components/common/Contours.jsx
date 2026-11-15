// Signature background: survey-map style contour rings, generated once at module load.

function ring(cx, cy, r, seed) {
  const pts = []
  const steps = 72
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    const k = 1 + 0.09 * Math.sin(3 * t + seed) + 0.05 * Math.sin(5 * t + seed * 2.3) + 0.03 * Math.cos(7 * t + seed)
    pts.push(`${(cx + Math.cos(t) * r * k * 1.25).toFixed(1)},${(cy + Math.sin(t) * r * k).toFixed(1)}`)
  }
  return `M${pts.join('L')}Z`
}

const groups = [
  { cx: 1180, cy: 260, count: 11, step: 34, seed: 0.6 },
  { cx: 260, cy: 760, count: 8, step: 38, seed: 2.1 },
]

const paths = groups.flatMap((g) =>
  Array.from({ length: g.count }, (_, i) => ring(g.cx, g.cy, 30 + i * g.step, g.seed + i * 0.18)),
)

export default function Contours({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {paths.map((d, i) => (
          <path key={i} d={d} strokeOpacity={0.08 + (i % 3) * 0.04} />
        ))}
      </g>
    </svg>
  )
}
