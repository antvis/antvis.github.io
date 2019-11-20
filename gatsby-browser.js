import Url from 'url-parse';
import closest from 'dom-closest';

// 解决 Gatsby 单页架构下，首页的子站点链接会跳转到 404 的问题
// 详见：https://github.com/antvis/antvis.github.io/pull/39
window.addEventListener('click', e => {
  let node;
  if (e.target.tagName === 'A') {
    node = e.target;
  } else {
    node = closest(e.target, 'a');
  }
  const href = node.getAttribute('href');
  if (!node || !href) {
    return;
  }
  const { pathname } = new Url(href);
  // 这是 AntV 子站点的外链
  if (/g2|g2plot|L7|l7|g|graphin|g6|f2|x6/.test(pathname.split('/')[1])) {
    e.preventDefault();
    if (process.env.NODE_ENV === 'production') {
      window.location = href;
    } else if (!href.startsWith('http')) {
      window.location = `https://antvis.github.io${href}`;
    }
  }
});
