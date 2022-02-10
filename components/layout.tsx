import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

import { PageType } from '../pages';

const {
  publicRuntimeConfig: { host },
} = getConfig();

const defaultName = 'Manuel Puchta';
const defaultDescription = 'Manuel Puchta is a web developer living in Hamburg';

type LayoutProps = {
  children: React.ReactNode;
  metaData: {
    description?: string;
    identifier?: PageType;
    title?: string;
    published_time?: string;
  };
};

const Layout: React.FC<LayoutProps> = ({ children, metaData }: LayoutProps) => {
  const { asPath } = useRouter();

  const {
    description = defaultDescription,
    identifier,
    title,
    published_time,
  } = metaData;

  const titleString = title ? `${title} | ${defaultName}` : defaultName;
  const hideHomeLinkInFooter = identifier
    ? identifier === PageType.Index
    : false;

  return (
    <>
      <Head>
        <title>{titleString}</title>
        <meta name="og:title" content={title} />
        {description && <meta name="description" content={description} />}
        {asPath && <meta property="og:url" content={`${host}${asPath}`} />}
        <meta name="author" content={`${defaultName}`} />
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

        <script
          data-goatcounter="https://manuelpuchta.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </Head>
      <header>
        <h1>
          <Link href="/">
            <a title="Back to the home page">
              {defaultName}
              <span className="caret" />
            </a>
          </Link>
        </h1>
      </header>
      <main className={identifier ? `${identifier}` : null}>{children}</main>
      {!hideHomeLinkInFooter && (
        <footer>
          <ul>
            <li>
              <Link href="/">
                <a title="Back to the home page">Home</a>
              </Link>
            </li>
          </ul>
        </footer>
      )}
    </>
  );
};

export default Layout;
