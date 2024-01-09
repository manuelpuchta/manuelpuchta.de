import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import { PageType } from '.';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Layout from '../components/layout';

type PostsProps = {
  allPostsData: Page[];
};

const Posts: React.FC<PostsProps> = ({ allPostsData }: PostsProps) => (
  <Layout
    metaData={{
      identifier: PageType.Posts,
      title: 'Posts',
      description:
        'My digital notebook (fails, learnings, good memories and pictures?).',
    }}
  >
    <section>
      <h2>Posts</h2>
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
