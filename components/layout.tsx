import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const name = 'Manuel Puchta';

type LayoutProps = {
  children: React.ReactNode;
  footer?: boolean;
  title?: string;
  description?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  footer,
  title,
  description,
}: LayoutProps) => {
  const titleString = title ? `${title} | ${name}` : name;

  return (
    <>
      <Head>
        <title>{titleString}</title>
        <meta name="og:title" content={titleString} />
        {description && <meta name="description" content={description} />}
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
      <main>{children}</main>
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
    </>
  );
};

export default Layout;
