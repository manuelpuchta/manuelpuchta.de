import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import { PageType } from '.';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Layout from '../components/layout';
import styles from './posts.module.css';

type PostsProps = {
  allPostsData: Page[];
};

const Posts: React.FC<PostsProps> = ({ allPostsData }: PostsProps) => (
  <Layout
    metaData={{
      identifier: PageType.Posts,
      title: 'Posts',
    }}
  >
    <section className={styles.posts}>
      <h2>Posts</h2>
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
  </Layout>
);

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};