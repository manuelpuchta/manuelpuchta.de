import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';

import { getSortedPostsData } from '../lib/posts';
import { imageLoader } from '../lib/imageLoader';
import Date from '../components/date';
import Layout from '../components/layout';
import styles from './index.module.css';

export enum PageType {
  Index = 'index',
  Post = 'post',
  Posts = 'posts',
  Cv = 'cv',
}

type HomeProps = {
  allPostsData: Page[];
};

const Home: React.FC<HomeProps> = ({ allPostsData }: HomeProps) => (
  <Layout
    hasNavigation={false}
    metaData={{
      identifier: PageType.Index,
      title: 'Hi 👋',
    }}
  >
    <section className={styles.grid}>
      <div>
        <Image
          loader={imageLoader}
          src={'images/portrait-500.jpg'}
          alt="A black and white portrait of Manuel Puchta, the author of this website"
          width={280}
          height={280}
          priority
        />
      </div>

      <div>
        <div className={styles.intro}>
          <h2>
            Hello! I&apos;m Manuel, a <Link href="/cv/">web developer</Link>{' '}
            from Berlin.
          </h2>
          <p>
            When I&apos;m not pushing pixels and code in front of a monitor, I
            love to ride far on my bike, listen to music or capture moments with
            my camera. 📸
          </p>
        </div>
      </div>

      <div>
        <h2>Notes</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="post">
              <h3>
                <Link href={`/posts/${id}`}>{title}</Link>
              </h3>
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>
          You can send me nice emails to{' '}
          <a href="mailto:hallo@manuelpuchta.de">hallo[at]manuelpuchta.de</a> or
          find me at{' '}
          <a
            href="https://github.com/manuelpuchta"
            title="My GitHub profile: bits and bytes, also lot's of stars."
          >
            GitHub
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/in/manuelpuchta/"
            title="I have a LinkedIn profile."
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
