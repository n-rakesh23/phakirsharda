// Responsive photo (<picture>: AVIF first, WebP fallback) plus a "Representative image" label for
// stock/AI imagery, so illustrative pictures are never presented as the company's own sites
// (docs/design.md §7, §14).
//
// When the photo sits under gradient overlays, pass `label={false}` and render
// <RepresentativeLabel /> after the overlays so it stays visible.

export function RepresentativeLabel({ photo, className = 'bottom-3 right-3' }) {
  if (!photo?.representative) return null
  return (
    <span
      className={`absolute z-10 rounded bg-ink/75 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/85 backdrop-blur-sm ${className}`}
    >
      Representative image
    </span>
  )
}

const avifOf = (src) => src?.replace(/\.webp$/, '.avif')

function srcSets(photo) {
  const w = photo.width ?? 1600
  const sw = photo.smallWidth ?? 800
  const webp = photo.srcSmall ? `${photo.srcSmall} ${sw}w, ${photo.src} ${w}w` : `${photo.src} ${w}w`
  const avif = photo.avif ? (photo.srcSmall ? `${avifOf(photo.srcSmall)} ${sw}w, ${avifOf(photo.src)} ${w}w` : `${avifOf(photo.src)} ${w}w`) : null
  return { webp, avif }
}

export function Picture({ photo, sizes = '100vw', eager = false, className = '', alt, fit = 'cover' }) {
  const { webp, avif } = srcSets(photo)
  return (
    <picture>
      {avif && <source type="image/avif" srcSet={avif} sizes={sizes} />}
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={photo.src}
        alt={alt ?? photo.alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${className}`}
      />
    </picture>
  )
}

export default function Photo({ photo, className = '', sizes = '100vw', eager = false, label = true, labelClassName }) {
  if (!photo) return null
  return (
    <div className={`relative ${className}`}>
      <Picture photo={photo} sizes={sizes} eager={eager} />
      {label && <RepresentativeLabel photo={photo} className={labelClassName} />}
    </div>
  )
}
