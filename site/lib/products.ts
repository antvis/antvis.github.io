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
}: {
  language: 'zh' | 'en';
}): Promise<ProductType[]> {
  // 如需要修改产品信息，请到 https://yuyan.antfin-inc.com/datavprod/antv-site-datas/schemas/site-products-h5data/console 修改区块内容
  return fetch(
    'https://render.alipay.com/p/h5data/antv-site-datas_site-products-h5data.json',
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Product feed returned ${res.status}`);
      return res.json();
    })
    .then((products: ProductType[]) => {
      return products
        .filter((d) => d.lang === language)
        .map((d) => {
          const links =
            typeof d.links === 'string' ? JSON.parse(d.links) : { ...d.links };
          return { ...d, links };
        });
    });
}
