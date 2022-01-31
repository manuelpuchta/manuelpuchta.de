export {};

declare global {
  interface Window {
    goatcounter: any;
  }
}

declare module 'remark-html' {
  const html: any;
  export default html;
}
