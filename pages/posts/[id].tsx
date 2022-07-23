import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { PageType } from '..';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Date from '../../components/date';
import styles from './[id].module.css';

const Post: React.FC<Post> = ({
  title,
  date,
  description,
  contentHtml,
  published_time,
}: Post) => (
  <Layout
    metaData={{
      description: description,
      identifier: PageType.Post,
      published_time: published_time,
      title: title,
    }}
  >
    <article className={styles.post}>
      <Date dateString={date} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  </Layout>
);

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      ...postData,
    },
  };
};
