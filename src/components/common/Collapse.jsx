// Smooth height animation without measuring: grid rows 0fr -> 1fr.
// Closed content is `inert` so it can't be tabbed into or read by screen readers.
export default function Collapse({ open, id, children, className = '' }) {
  return (
    <div
      id={id}
      inert={!open}
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-smooth ${
        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      } ${className}`}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  )
}
