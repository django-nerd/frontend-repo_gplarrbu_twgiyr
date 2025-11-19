import { Helmet } from 'react-helmet'

export default function SEO({ title = 'Birkdale Health — Trusted Care, Local to You', description = 'Friendly, professional healthcare in Southport. Physiotherapy, health checks, wellness treatments, and more.', image = '/og-image.jpg' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  )
}
