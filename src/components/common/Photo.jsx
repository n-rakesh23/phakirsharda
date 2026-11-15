// Responsive photo plus a "Representative image" label for stock/AI imagery, so illustrative
// pictures are never presented as the company's own sites (docs/design.md §7, §14).
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

export default function Photo({ photo, className = '', sizes = '100vw', eager = false, label = true, labelClassName }) {
  if (!photo) return null
  return (
    <div className={`relative ${className}`}>
      <img
        src={photo.src}
        srcSet={photo.srcSmall ? `${photo.srcSmall} 800w, ${photo.src} ${photo.width ?? 1600}w` : undefined}
        sizes={sizes}
        alt={photo.alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        className="h-full w-full object-cover"
      />
      {label && <RepresentativeLabel photo={photo} className={labelClassName} />}
    </div>
  )
}
