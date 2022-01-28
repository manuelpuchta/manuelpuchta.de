import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const name = 'Manuel Puchta';

type LayoutProps = {
  children: React.ReactNode;
  description?: string;
  identifier?: string;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  description,
  identifier,
  title,
}: LayoutProps) => {
  const titleString = title ? `${title} | ${name}` : name;

  return (
    <>
      <Head>
        <title>{titleString}</title>
        <meta name="og:title" content={title} />
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
    </>
  );
};

export default Layout;
