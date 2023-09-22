import NextHead from 'next/head';

export default function Head() {
  const site_name = 'Tiger::Page';
  const meta_title = `${site_name}`;
  const meta_desc = `디스크립션`;
  const meta_keywords = `키워드`;
  const meta_ogimg = 'og이미지 경로';
  const meta_url = '대표 url';

  return (
    <NextHead>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
      />

      <title>{meta_title}</title>

      <meta name="title" content={meta_title} />
      <meta name="description" content={meta_desc} />
      <meta name="keywords" content={meta_keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta_title} />
      <meta property="og:description" content={meta_desc} />
      <meta property="og:image" content={meta_ogimg} />
      <meta property="og:url" content={meta_url} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={meta_title} />
      <meta name="twitter:description" content={meta_desc} />
      <meta name="twitter:image" content={meta_ogimg} />
      <meta name="twitter:domain" content={meta_url} />

      <meta name="robots" content="noindex" />

      {/* 파비콘 */}
      <link rel="shortcut icon" href="" sizes="any" />
      <link rel="shortcut icon" href="" type="image/svg+xml" sizes="any" />
      <link rel="apple-touch-icon" href="" />
    </NextHead>
  );
}
