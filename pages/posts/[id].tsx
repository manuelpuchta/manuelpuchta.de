import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post: React.FC<Post> = ({
  title,
  date,
  description,
  contentHtml,
}: Post) => (
  <Layout title={title} description={description} identifier="posts">
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
