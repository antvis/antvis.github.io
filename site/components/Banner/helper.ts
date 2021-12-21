import bannerLinks from '../../data/banner-link.json';
import bannerInfo from '../../data/banner-info.json';

/**
 * 获取真实的 url。根据是否国内镜像进行调整
 * @param url
 * @param isChinaMirrorHost
 * @returns
 */
export function getActualUrl(url: string, isChinaMirrorHost: boolean): string {
  let link = url;
  if (isChinaMirrorHost && link) {
    // g2plot.antv.vision => antv-g2plot.gitee.io
    const match = link.match(/([http|https]):\/\/(.*)\.antv\.vision/);
    if (match && match[2]) {
      link = link.replace(
        `${match[2]}.antv.vision`,
        `antv-${match[2]}.gitee.io`,
      );
    }
  }
  return link;
}

/**
 * 获取 banner 的场景 demo 信息。根据是否国内镜像进行调整 url
 */
export function getBannerInfo(isChinaMirrorHost: boolean) {
  const products_tabs = bannerInfo.products_tabs.map((products_tab) => {
    if (!products_tab.demos) {
      return products_tab;
    }
    const demos = products_tab.demos.map((demo) => {
      return {
        ...demo,
        // @ts-ignore
        host: demo.host && getActualUrl(demo.host, isChinaMirrorHost),
      };
    });
    return { ...products_tab, demos };
  });

  return { ...bannerInfo, products_tabs };
}

/**
 * 获取 banner 的产品链接。根据是否国内镜像进行调整 url
 */
export function getBannerLink(isChinaMirrorHost: boolean) {
  return bannerLinks.map((bannerLink) => {
    if (bannerLink.url) {
      return {
        ...bannerLink,
        url: getActualUrl(bannerLink.url, isChinaMirrorHost),
      };
    }
    return bannerLink;
  });
}
