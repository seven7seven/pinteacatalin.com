import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      // Favicon
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#20211d" />
      <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#20211d" />
      <meta name="msapplication-config" content="/images/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#20211d" />

      // Description
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Pintea Cătălin — Digital designer, builder & entrepreneur in Cluj-Napoca</title>
      <meta name="description"
            content="Get in touch for advice on your web projects, check out my current work and personal ramblings."
      />

      // OG
      <meta property="og:image" content="/images/svg/favicon.svg" />
    </Head>
  )
}
