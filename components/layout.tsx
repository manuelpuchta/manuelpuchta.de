import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
import Script from 'next/script';

import { PageType } from '../pages';
import Footer from './footer';
import Navigation from './navigation';
import styles from './layout.module.css';

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
    published_time?: string;
    title?: string;
  };
};

const Layout: React.FC<LayoutProps> = ({ children, metaData }: LayoutProps) => {
  const { asPath } = useRouter();
  const {
    description = defaultDescription,
    identifier,
    published_time,
    title,
  } = metaData;
  const titleString = title ? `${title} | ${defaultName}` : defaultName;
  const addPostStyling =
    identifier === PageType.Post || identifier === PageType.Posts;

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Navigation active={identifier} />

      <main className={addPostStyling ? styles.mainPosts : styles.main}>
        {children}
      </main>

      <Footer />

      <Script
        id="goatcounter"
        data-goatcounter="https://manuelpuchta.goatcounter.com/count"
        src="//gc.zgo.at/count.js"
      />
    </>
  );
};

export default Layout;
