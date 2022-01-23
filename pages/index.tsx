import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';

import Date from '../components/date';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

import portraitImage from '../public/images/portrait-500.jpg';

type HomeProps = {
  allPostsData: Page[];
};

const Home: React.FC<HomeProps> = ({ allPostsData }: HomeProps) => (
  <Layout
    title="Hi!"
    description="Manuel Puchta is a web developer living in Hamburg"
  >
    <section>
      <Image
        src={portraitImage}
        alt="A black and white portrait of Manuel Puchta, the author of this website"
        width={300}
        height={300}
      />
      <h2>Hello! I&apos;m Manuel, a web developer from Hamburg.</h2>
      <h3>
        When I&apos;m not pushing pixels and code in front of a monitor, I love
        to ride far on my bike, listen to music or capture moments with a
        camera. 📸
      </h3>
    </section>
    <section>
      <h2>Notes</h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <p>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </p>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h3>Say hi:</h3>
      <ul>
        <li>hallo[at]manuelpuchta.de</li>
      </ul>
      <h3>or stalk by...</h3>
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
