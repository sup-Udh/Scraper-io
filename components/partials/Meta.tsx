import Head from 'next/head';


export const Meta = ({
    // does not work keeps throwing error
     title = '',
    keywords = '',
    description = '',
    author = ''
  }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta name='author' content={author} />
        </Head>
    )
  }