import { Link } from 'react-router-dom'
import Container from '../../components/common/Container'
import PageHeader from '../../components/common/PageHeader'
import Photo, { RepresentativeLabel } from '../../components/common/Photo'
import Reveal from '../../components/common/Reveal'
import EnquiryBand from '../../components/sections/EnquiryBand'
import usePageMeta from '../../hooks/usePageMeta'
import { businesses } from '../../data/businesses'

export default function Businesses() {
  usePageMeta(
    'Our Businesses',
    'Mining, construction, manufacturing, transportation and industrial training: the five businesses of Phakir Sarada Private Limited.',
  )
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Businesses' }]}
        eyebrow="Businesses"
        title="Five businesses. One group."
        intro="Each business brings its own expertise, under one parent company."
      />
      <section className="py-[clamp(4rem,8vw,7rem)]">
        <Container className="space-y-6">
          {businesses.map((b, i) => (
            <Reveal key={b.slug}>
              <Link
                to={`/businesses/${b.slug}`}
                className="group grid overflow-hidden rounded-2xl bg-white shadow-card transition-shadow hover:shadow-card-hover md:grid-cols-2"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-navy md:aspect-auto md:min-h-80 ${i % 2 ? 'md:order-2' : ''}`}>
                  {b.photo ? (
                    <>
                      <Photo photo={{ ...b.photo, alt: '' }} sizes="(min-width: 768px) 50vw, 100vw" label={false} className="absolute! inset-0 transition-transform duration-700 group-hover:scale-105" />
                      <RepresentativeLabel photo={b.photo} />
                    </>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 m-auto h-40 w-40 bg-gold opacity-25 transition-transform duration-700 group-hover:scale-110"
                      style={{ mask: `url(${b.icon}) center / contain no-repeat`, WebkitMask: `url(${b.icon}) center / contain no-repeat` }}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="font-heading text-sm font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="mt-3 text-3xl font-extrabold group-hover:text-gold">{b.name}</h2>
                  <p className="mt-4 max-w-md leading-relaxed">{b.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                    Explore {b.name.toLowerCase()}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
      <EnquiryBand />
    </>
  )
}
