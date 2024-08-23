import { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

function Document() {
  const { publicRuntimeConfig: { basePath } } = getConfig();

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/replicar/favicon.ico`} sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
