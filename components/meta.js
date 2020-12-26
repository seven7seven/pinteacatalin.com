import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="/images/svg/side.svg" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Pintea Cătălin — Digital designer, builder & entrepreneur in Cluj-Napoca</title>
      <meta name="description"
            content="Get in touch for advice on your web projects, check out my current work and personal ramblings."
      />
      <meta property="og:image" content="/images/svg/side.svg" />
    </Head>
  )
}
