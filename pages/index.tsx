import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';

import Date from '../components/date';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { imageLoader } from '../lib/imageLoader';

export enum PageType {
  Index = 'index',
  Posts = 'posts',
  Cv = 'cv',
}

type HomeProps = {
  allPostsData: Page[];
};

const Home: React.FC<HomeProps> = ({ allPostsData }: HomeProps) => (
  <Layout
    metaData={{
      title: 'Hi!',
      identifier: PageType.Index,
    }}
  >
    <section>
      <Image
        loader={imageLoader}
        src={'images/portrait-500.jpg'}
        alt="A black and white portrait of Manuel Puchta, the author of this website"
        width={300}
        height={300}
      />
      <h2>
        Hello! I&apos;m Manuel, a{' '}
        <Link href="/cv/">
          <a title="This link will bring you to my CV page">web developer</a>
        </Link>{' '}
        from Hamburg.
      </h2>
      <p>
        When I&apos;m not pushing pixels and code in front of a monitor, I love
        to ride far on my bike, listen to music or capture moments with a
        camera. 📸
      </p>
    </section>
    <section>
      <h2>Notes</h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="post">
            <h3>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </h3>
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <p>
        Say hi <code>hallo[at]manuelpuchta.de</code> or stalk by:
      </p>
      <ul>
        <li>
          <a
            href="https://www.flickr.com/photos/manuelpuchta/"
            title="I have some photos uploaded to my flickr stream."
          >
            flickr
          </a>
        </li>
        <li>
          <a
            href="https://github.com/manuelpuchta"
            title="My GitHub profile: bits and bytes, also lot's of stars."
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/manuelpuchta"
            title="Help me to get more likes on my Instagram photos, please."
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.komoot.com/user/911055856910"
            title="If you are into cycling: I share some of my favourite cycling routes on komoot."
          >
            Komoot
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/manuelpuchta/"
            title="I have a LinkedIn profile."
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/user/dvjcg7g517s9rdfnhr93sgodx?si=d025f791cecb4a09"
            title="And what is your taste in music?"
          >
            Spotify
          </a>
        </li>
        <li>
          <a
            href="https://www.strava.com/athletes/44997462"
            title="Let's give each other Kudos, yeah!"
          >
            Strava
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/manuelpuchta"
            title="Follow me on Twitter."
          >
            Twitter
          </a>
        </li>
      </ul>
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
