import { useEffect } from 'react'

const siteUrl = 'https://www.therenewedstrengthproject.org'
const defaultImage = `${siteUrl}/trsp-hero-alpine-lake-original.jpeg`

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'The Renewed Strength Project',
  alternateName: 'TRSP',
  url: siteUrl,
  logo: `${siteUrl}/rsp-logo.png`,
  areaServed: [
    'Loveland, Colorado',
    'Fort Collins, Colorado',
    'Windsor, Colorado',
    'Greeley, Colorado',
    'Larimer County, Colorado',
    'Northern Colorado',
  ],
  description:
    'A Northern Colorado nonprofit removing financial barriers to individualized, evidence-informed strength and movement coaching for individuals affected by cancer.',
  nonprofitStatus: 'Nonprofit501c3',
  email: 'info@therenewedstrengthproject.org',
}

function upsertMeta(selector, createElement, updateElement) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = createElement()
    element.setAttribute('data-trsp-seo', 'true')
    document.head.appendChild(element)
  }

  updateElement(element)
}

function buildBreadcrumbSchema(breadcrumbs) {
  if (!breadcrumbs?.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export default function SEO({
  title,
  description,
  path = '/',
  image = defaultImage,
  breadcrumbs = [],
  noindex = false,
  structuredData,
}) {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${path}`
    const fullTitle = title.includes('Renewed Strength Project')
      ? title
      : `${title} | Renewed Strength Project`

    document.title = fullTitle

    const metaTags = [
      ['name', 'description', description],
      ['name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow'],
      ['property', 'og:title', fullTitle],
      ['property', 'og:description', description],
      ['property', 'og:type', 'website'],
      ['property', 'og:url', canonicalUrl],
      ['property', 'og:image', image],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', fullTitle],
      ['name', 'twitter:description', description],
      ['name', 'twitter:image', image],
    ]

    metaTags.forEach(([attribute, key, content]) => {
      upsertMeta(
        `meta[${attribute}="${key}"]`,
        () => {
          const element = document.createElement('meta')
          element.setAttribute(attribute, key)
          return element
        },
        (element) => {
          element.setAttribute('content', content)
        },
      )
    })

    upsertMeta(
      'link[rel="canonical"]',
      () => {
        const element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        return element
      },
      (element) => {
        element.setAttribute('href', canonicalUrl)
      },
    )

    document
      .querySelectorAll('script[data-trsp-seo-jsonld="true"]')
      .forEach((element) => element.remove())

    const schemas = [
      organizationSchema,
      buildBreadcrumbSchema(breadcrumbs),
      structuredData,
    ].filter(Boolean)

    schemas.forEach((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-trsp-seo-jsonld', 'true')
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })
  }, [breadcrumbs, description, image, noindex, path, structuredData, title])

  return null
}
