import Head from 'next/head';

export const metaData = (pageTitle) => {
    const title = pageTitle.substring(0, 1).toUpperCase() + pageTitle.substring(1) + ' | Monika Chmielewska - Munich based photographer'
    const url = 'https://monikachmielewska.com/' + pageTitle
    return (
        <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Portrait, family, wedding and event photography- Munich & Bavaria. I will be glad to tell your story through my eyes and my camera. Read more about the packages I offer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content="Portrait, family, wedding and event photography- Munich & Bavaria. I will be glad to tell your story through my eyes and my camera. Read more about the packages I offer"
        />
        <meta property="og:url" content={url} />
      </Head>
    )
}