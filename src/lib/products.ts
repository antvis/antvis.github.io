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
  return fetch('https://assets.antv.antgroup.com/antv/products.json')
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
