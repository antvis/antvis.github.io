import type { Locale } from './i18n';

export function transformUrl({
  url,
  language,
}: {
  url: string;
  language: Locale;
}): string {
  if (url.startsWith('/') && !url.startsWith('//')) {
    const path = url
      .replace(/^\/(zh|en)(?=\/|$)/, '')
      .replace(/^\/docs\//, '/');
    const parsed = new URL(path, 'https://antv.antgroup.com');
    return `/${language}${parsed.pathname.replace(/\/$/, '')}/${parsed.search}${parsed.hash}`;
  }
  return url;
}
