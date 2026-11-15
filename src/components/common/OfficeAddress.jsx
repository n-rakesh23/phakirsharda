// Semantic, multi-line postal address for an office from src/data/site.js.
export default function OfficeAddress({ office, className = '' }) {
  return (
    <address className={`not-italic leading-relaxed ${className}`}>
      {office.addressLines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </address>
  )
}
