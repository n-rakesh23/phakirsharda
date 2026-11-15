import { useEffect } from 'react'
import { company } from '../data/site'

// Sets a unique <title> and meta description per page (docs/design.md §12).
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${company.legalName}` : company.legalName
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.name = 'description'
        document.head.appendChild(tag)
      }
      tag.content = description
    }
  }, [title, description])
}
