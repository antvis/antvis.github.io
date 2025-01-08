import { each } from 'lodash';
import React from 'react';
import { getActualUrl } from '../Banner/helper';

const tuple = <T extends string[]>(...args: T) => args;
const CATEGORY_TYPE = tuple('basic', 'extension', 'mobile', 'ecology');

export const CATEGORIES: Array<{
  type: (typeof CATEGORY_TYPE)[number];
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
  category: (typeof CATEGORY_TYPE)[number];
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
  // 如需要修改产品信息，请到 https://yuyan.antfin-inc.com/datavprod/antv-site-datas/schemas/site-products-h5data/console 修改区块内容
  return fetch(
    'https://render.alipay.com/p/h5data/antv-site-datas_site-products-h5data.json',
  )
    .then((res) => res.json())
    .then((products: ProductType[]) => {
      return products
        .filter((d) => d.lang === language)
        .map((d) => {
          const links =
            typeof d.links === 'string' ? JSON.parse(d.links) : { ...d.links };
          const newLinks: any = {};

          each(links, (value, k: string) => {
            newLinks[k] = {
              ...value,
              url: value?.url && getActualUrl(value.url, isChinaMirrorHost),
            };
          });
          return { ...d, links: newLinks };
        });
    });
}

// 转化跳转，更具当前 镜像、中英文 进行修改。
export function transformUrl({
  url,
  language,
  isChinaMirrorHost,
}: {
  url: string;
  language: 'zh' | 'en';
  isChinaMirrorHost: boolean;
}) {
  const languageUrl = url
    .replace(/\/(zh|en)/, '')
    .replace(/([http|https]\:\/\/).+?\//, (v) => `${v}${language}/`);
  return getActualUrl(languageUrl, isChinaMirrorHost);
}
