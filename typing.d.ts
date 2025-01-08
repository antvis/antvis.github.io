declare module '@antv/dumi-theme-antv' {
  const exports: any;
  export = exports;
}

declare module '@antv/dumi-theme-antv/*' {
  const exports: {
    useChinaMirrorHost: any;
    Header: any;
    Footer: any;
    [key: string]: any;
  };
  export = exports;
}

declare module '@antv/dumi-theme-antv/dist/common/SEO' {
  const SEO: any;
  export default SEO;
}

declare module '@antv/dumi-theme-antv/dist/slots/Article' {
  const Article: any;
  export default Article;
}
