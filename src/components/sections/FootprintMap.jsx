import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Container from '../common/Container'
import OfficeAddress from '../common/OfficeAddress'
import { coastline, mapBounds, mapPoints } from '../../data/geo'
import { offices } from '../../data/site'
import { ease, fadeUp, stagger, viewport } from '../../lib/motion'

const W = 600
const H = 520
const px = (lon) => ((lon - mapBounds.west) / (mapBounds.east - mapBounds.west)) * W
const py = (lat) => ((mapBounds.north - lat) / (mapBounds.north - mapBounds.south)) * H

const coastPath = coastline.map(([lon, lat], i) => `${i ? 'L' : 'M'}${px(lon).toFixed(1)},${py(lat).toFixed(1)}`).join(' ')
const seaPath = `${coastPath} L${px(coastline.at(-1)[0]).toFixed(1)},${H} L${W},${H} L${W},${py(coastline[0][1]).toFixed(1)} Z`

const corporate = offices.find((o) => o.label === 'Corporate Office')

const kinds = {
  office: { label: 'Office', swatch: <span className="h-3 w-3 rounded-full bg-gold ring-4 ring-gold/25" /> },
  mining: { label: 'Mining district', swatch: <span className="h-3.5 w-3.5 rounded-full border-2 border-brand-teal bg-brand-teal/20" /> },
  construction: { label: 'Construction', swatch: <span className="h-3 w-3 rotate-45 border-2 border-gold" /> },
}

function Marker({ p, i }) {
  const x = px(p.lon)
  const y = py(p.lat)
  const delay = 0.6 + i * 0.12
  const lx = p.label === 'left' ? x - 14 : p.label === 'right' ? x + 14 : x
  const ly = p.label === 'below' ? y + 30 : y + 5
  const anchor = p.label === 'left' ? 'end' : p.label === 'right' ? 'start' : 'middle'

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.6, ease: ease.out, delay }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      {p.kind === 'mining' && (
        <>
          <circle cx={x} cy={y} r="26" fill="var(--color-brand-teal)" fillOpacity="0.14" />
          <circle cx={x} cy={y} r="7" fill="none" stroke="var(--color-brand-teal)" strokeWidth="2.5" />
        </>
      )}
      {p.kind === 'office' && (
        <>
          <motion.circle
            cx={x}
            cy={y}
            r="8"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="1.5"
            animate={{ r: [8, 22], opacity: [0.7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: delay + 0.4 }}
          />
          <circle cx={x} cy={y} r="6.5" fill="var(--color-gold)" stroke="var(--color-ink)" strokeWidth="2" />
        </>
      )}
      {p.office && p.kind !== 'office' && (
        <motion.circle cx={x} cy={y} r="9" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" animate={{ r: [9, 22], opacity: [0.7, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: delay + 0.4 }} />
      )}
      {p.kind === 'construction' && (
        <rect x={x - 6} y={y - 6} width="12" height="12" fill="var(--color-ink)" stroke="var(--color-gold)" strokeWidth="2.5" transform={`rotate(45 ${x} ${y})`} />
      )}
      <text x={lx} y={ly} textAnchor={anchor} className="fill-white font-heading text-[15px] font-bold max-sm:text-[25px]" style={{ paintOrder: 'stroke', stroke: 'var(--color-ink)', strokeWidth: 4 }}>
        {p.name}
      </text>
    </motion.g>
  )
}

export default function FootprintMap() {
  const groups = [
    { kind: 'office', title: 'Offices', items: [...(corporate ? [`${corporate.city} (Corporate)`] : []), ...mapPoints.filter((p) => p.kind === 'office').map((p) => p.name), ...mapPoints.filter((p) => p.office && p.kind !== 'office').map((p) => `${p.name} (Suntech Infra)`)] },
    { kind: 'mining', title: 'Mining districts', items: mapPoints.filter((p) => p.kind === 'mining').map((p) => p.name) },
    { kind: 'construction', title: 'Construction', items: mapPoints.filter((p) => p.kind === 'construction').map((p) => p.name) },
  ]

  return (
    <section aria-labelledby="footprint-heading" className="relative overflow-hidden bg-ink py-[clamp(5rem,10vw,9rem)] text-white">
      <Container>
        <motion.div className="max-w-3xl" variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Geographic footprint
          </motion.p>
          <motion.h2 id="footprint-heading" variants={fadeUp} className="font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
            Rooted in Odisha. Connected to India.
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Map */}
          <motion.figure
            className="relative overflow-hidden rounded-2xl bg-navy/40 ring-1 ring-white/10 lg:col-span-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="map-title map-desc" className="block h-auto w-full">
              <title id="map-title">Indicative map of Phakir Sarada locations in Odisha</title>
              <desc id="map-desc">
                Offices in Bhubaneswar and Jagatsinghpur, construction and the Suntech Infra Consultancy office at Paradip, and mining districts Keonjhar,
                Sundargarh, Jajpur and Mayurbhanj. Bengaluru corporate office is shown separately.
              </desc>
              {/* Graticule */}
              <g stroke="white" strokeOpacity="0.06">
                {[84, 85, 86, 87].map((lon) => <line key={lon} x1={px(lon)} x2={px(lon)} y1="0" y2={H} />)}
                {[20, 21, 22].map((lat) => <line key={lat} y1={py(lat)} y2={py(lat)} x1="0" x2={W} />)}
              </g>
              <g className="fill-white/25 text-[10px]">
                {[84, 85, 86, 87].map((lon) => <text key={lon} x={px(lon) + 4} y={H - 8}>{lon}°E</text>)}
                {[20, 21, 22].map((lat) => <text key={lat} x="6" y={py(lat) - 5}>{lat}°N</text>)}
              </g>
              {/* Sea + coastline */}
              <path d={seaPath} fill="var(--color-brand-teal)" fillOpacity="0.08" />
              <motion.path
                d={coastPath}
                fill="none"
                stroke="var(--color-gold)"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={viewport}
                transition={{ duration: 1.6, ease: ease.inOut, delay: 0.2 }}
              />
              <text x="470" y="440" className="fill-white/30 text-[12px] italic tracking-widest">Bay of Bengal</text>
              <text x="150" y="300" className="fill-white/[0.07] font-heading text-[56px] font-extrabold tracking-[0.2em]">ODISHA</text>
              {mapPoints.map((p, i) => <Marker key={p.id} p={p} i={i} />)}
            </svg>
            <figcaption className="border-t border-white/10 px-5 py-3 text-xs text-white/50">
              Indicative only. Markers show office towns and district headquarters, not individual sites.
            </figcaption>
          </motion.figure>

          {/* Legend + Bengaluru inset */}
          <motion.div className="flex flex-col gap-6 lg:col-span-4" variants={stagger(0.1, 0.2)} initial="hidden" whileInView="show" viewport={viewport}>
            {corporate && (
              <motion.div variants={fadeUp} className="rounded-2xl bg-gold p-6 text-ink">
                <p className="text-xs font-bold uppercase tracking-[0.2em]">Corporate office</p>
                <p className="mt-2 font-heading text-3xl font-extrabold">{corporate.city}</p>
                <OfficeAddress office={corporate} className="mt-3 text-sm text-ink/80" />
              </motion.div>
            )}
            {groups.map((g) => (
              <motion.div key={g.kind} variants={fadeUp} className="rounded-2xl p-6 ring-1 ring-white/10">
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  <span aria-hidden="true" className="flex w-4 justify-center">{kinds[g.kind].swatch}</span>
                  {g.title}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-heading text-lg font-semibold text-white/90">
                  {g.items.map((n) => <li key={n}>{n}</li>)}
                </ul>
              </motion.div>
            ))}
            <motion.div variants={fadeUp}>
              <Link to="/locations" className="inline-block font-semibold text-gold underline decoration-2 underline-offset-8 hover:text-white">
                Addresses and contact details
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
