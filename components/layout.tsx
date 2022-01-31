import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const {
  publicRuntimeConfig: { host },
} = getConfig();

const name = 'Manuel Puchta';

type LayoutProps = {
  children: React.ReactNode;
  description?: string;
  identifier?: string;
  title?: string;
  published_time?: string;
};

// eslint-disable-next-line
const Layout: React.FC<LayoutProps> = ({
  children,
  description,
  identifier,
  title,
  published_time,
}: LayoutProps) => {
  const { asPath } = useRouter();
  const titleString = title ? `${title} | ${name}` : name;

  return (
    <>
      <Head>
        <title>{titleString}</title>
        <meta name="og:title" content={title} />
        {description && <meta name="description" content={description} />}
        {asPath && <meta property="og:url" content={`${host}${asPath}`} />}
        <meta name="author" content={`${name}`} />
        {published_time && (
          <meta
            property="article:published_time"
            content={`${published_time}`}
          />
        )}
        <meta property="og:image" content={`${host}/images/portrait-500.jpg`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@manuelpuchta" />
        <meta name="twitter:creator" content="@manuelpuchta" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <h1>
          <Link href="/">
            <a title="Back to the home page">
              {name}
              <span className="caret" />
            </a>
          </Link>
        </h1>
      </header>
      <main className={identifier ? `${identifier}` : null}>{children}</main>
      <footer>
        <ul>
          <li>
            <Link href="/">
              <a title="Back to the home page">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/cv/">
              <a title="Will bring you to my CV page">CV</a>
            </Link>
          </li>
        </ul>
      </footer>

      <script
        data-goatcounter="https://manuelpuchta.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </>
  );
};

export default Layout;
