import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { PageType } from '..';

const Post: React.FC<Post> = ({
  title,
  date,
  description,
  contentHtml,
  published_time,
}: Post) => (
  <Layout
    metaData={{
      title: title,
      description: description,
      identifier: PageType.Posts,
      published_time: published_time,
    }}
  >
    <article>
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
