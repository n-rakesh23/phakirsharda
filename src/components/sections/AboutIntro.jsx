import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Container from '../common/Container'
import OfficeAddress from '../common/OfficeAddress'
import ImageReveal from '../motion/ImageReveal'
import { company, offices, trust } from '../../data/site'
import { leadership } from '../../data/leadership'
import { fadeUp, stagger, viewport } from '../../lib/motion'

const founder = leadership.find((p) => p.featured)
const corporate = offices.find((o) => o.label === 'Corporate Office') ?? offices[0]

export default function AboutIntro() {
  return (
    <section aria-labelledby="about-heading" className="bg-white py-[clamp(5rem,10vw,9rem)]">
      <Container className="grid gap-16 lg:grid-cols-12">
        {/* Editorial statement */}
        <motion.div className="lg:col-span-7" variants={stagger(0.09)} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            About the company
          </motion.p>
          <motion.h2 id="about-heading" variants={fadeUp} className="font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            An industrial group rooted in Odisha, working across India.
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-8 max-w-[60ch] space-y-5 text-lg leading-relaxed">
            <p>
              {company.legalName} brings together mining, construction, manufacturing, transportation and
              industrial skill development under one parent company.
            </p>
            <p>
              Our corporate office is in Bengaluru, Karnataka, with offices in Bhubaneswar and Jagatsinghpur in
              Odisha. We have mining operations in Keonjhar, Sundargarh, Jajpur and Mayurbhanj, and construction
              activity in Paradip through our subsidiary, Suntech Infra Consultancy Private Limited.
            </p>
            <p>Through the {trust.name}, we support the communities around us.</p>
          </motion.div>

          {/* Verified corporate information */}
          <motion.dl variants={fadeUp} className="mt-12 grid gap-px overflow-hidden rounded-xl bg-navy/10 sm:grid-cols-2">
            <div className="bg-white p-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Legal name</dt>
              <dd className="mt-2 font-heading font-bold text-navy">{company.legalName}</dd>
            </div>
            <div className="bg-white p-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Corporate office</dt>
              <dd className="mt-2 text-sm">
                <OfficeAddress office={corporate} />
              </dd>
            </div>
            <div className="bg-white p-6 sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Contact</dt>
              <dd className="mt-2 flex flex-wrap gap-x-8 gap-y-1 font-semibold text-navy">
                <a href={company.phoneHref} className="hover:text-gold">{company.phone}</a>
                <a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a>
              </dd>
            </div>
          </motion.dl>
        </motion.div>

        {/* Founder */}
        {founder && (
          <motion.figure
            className="lg:col-span-5 lg:pt-10"
            variants={stagger(0.1, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="group relative">
              <ImageReveal className="aspect-[4/5] rounded-2xl">
                <img
                  src={founder.photo.src}
                  srcSet={`${founder.photo.srcSmall} 360w, ${founder.photo.src} ${founder.photo.width}w`}
                  sizes="(min-width: 1024px) 36vw, 90vw"
                  width={founder.photo.width}
                  height={founder.photo.height}
                  alt={`Portrait of ${founder.name}, ${founder.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </ImageReveal>
              <span aria-hidden="true" className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-gold" />
            </div>
            <motion.figcaption variants={fadeUp} className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Director &amp; Founder</p>
              <p className="mt-2 font-heading text-2xl font-extrabold text-navy">{founder.name}</p>
              {founder.guidingWords && (
                <blockquote className="mt-4 border-l-2 border-gold pl-4 text-sm italic leading-relaxed">
                  “{founder.guidingWords.translation}”
                  <span className="mt-1 block not-italic text-xs text-slate">{founder.guidingWords.source}</span>
                </blockquote>
              )}
              <Link to="/about" className="mt-6 inline-block font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold">
                Meet our leadership
              </Link>
            </motion.figcaption>
          </motion.figure>
        )}
      </Container>
    </section>
  )
}
