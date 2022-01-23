import getConfig from 'next/config';

const {
  publicRuntimeConfig: { host },
} = getConfig();

type ImageLoaderProps = {
  src: string;
};

// @see: https://nextjs.org/docs/api-reference/next/image#loader
export const imageLoader = ({ src }: ImageLoaderProps) => {
  return `${host}/${src}`;
};
