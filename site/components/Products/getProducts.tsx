import React from 'react';

const tuple = <T extends string[]>(...args: T) => args;
const CATEGORY_TYPE = tuple('basic', 'extension', 'mobile', 'ecology');

export const CATEGORIES: Array<{
  type: typeof CATEGORY_TYPE[number];
  name: string;
}> = [
  { type: 'basic', name: '标准版基础产品' },
  { type: 'extension', name: '标准版扩展产品' },
  { type: 'mobile', name: '移动定制（F版）产品' },
  { type: 'ecology', name: '周边生态' },
];

export interface ProductItem {
  title: string;
  icon?: React.ReactNode;
  slogan?: string;
  description: string;
  category: typeof CATEGORY_TYPE[number];
  links?: Array<{
    icon?: React.ReactNode;
    title: React.ReactNode;
    url?: string;
    openExternal?: boolean;
  }>;
}

export type ValuesOf<T extends any[]> = T[number];

export type ProductType = {
  links: {
    /** 产品首页 */
    readonly home?: { url: string; title?: string };
    /** 图表示例 */
    readonly example?: { url: string; title?: string };
    /** 使用文档 */
    readonly api?: { url: string; title?: string };
  };
  [k: string]: any;
};

export function getProducts({
  language,
  isChinaMirrorHost,
}: {
  language: 'zh' | 'en';
  isChinaMirrorHost: boolean;
}): Promise<ProductType[]> {
  return fetch(
    'https://gw.alipayobjects.com/os/antfincdn/k7Lnz2LKZw/products.json',
  )
    .then((res) => res.json())
    .then((products: ProductType[]) => {
      return products
        .filter((d) => d.lang === language)
        .map((d) => {
          const links: ProductType['links'] = d.links ? { ...d.links } : {};
          Object.keys(links).forEach((k: string) => {
            // @ts-ignore
            let actualUrl = links[k].url || '';

            if (isChinaMirrorHost) {
              // g2plot.antv.vision => antv-g2plot.gitee.io
              const match = actualUrl.match(
                /([http|https]):\/\/(.*)\.antv\.vision/,
              );
              if (match && match[2]) {
                actualUrl = actualUrl.replace(
                  `${match[2]}.antv.vision`,
                  `antv-${match[2]}.gitee.io`,
                );
              }
            }
            // @ts-ignore
            links[k].url = actualUrl;
          });
          return { ...d, links };
        });
    });
}
