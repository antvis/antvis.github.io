import { Link } from 'gatsby';
import React from 'react';
import GithubCorner from 'react-github-corner';
import { Popover } from 'antd';
import classNames from 'classnames';
import Search from './search';
import meta from '../../.antvisrc';
import styles from './header.module.less';

interface HeaderProps {
  siteTitle?: string;
  location?: Location;
}

interface ProductProps {
  name?: string;
  icon?: string;
  description?: string;
  url?: string;
  links?: Array<{
    name: string;
    link: string;
  }>;
}

const Product: React.FC<ProductProps> = ({
  name,
  icon,
  url,
  description,
  links = [],
}) => (
  <li className={styles.product}>
    <img alt={name} src={icon} />
    <div className={styles.productContent}>
      <a href={url} target="_blank">
        <h4>{name}</h4>
      </a>
      <div className={styles.productDescription}>{description}</div>
      <div className={styles.productLinks}>
        {links.map(({ link, name }, i) => (
          <a target="_blank" href={link} key={i}>
            {name}
          </a>
        ))}
      </div>
    </div>
  </li>
);

const Products: React.FC<any> = () => (
  <div className={styles.products}>
    <h3>基础产品</h3>
    <ul>
      <Product
        name="G2"
        url="/g2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
    </ul>
    <h3>扩展产品</h3>
    <ul>
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
    </ul>
  </div>
);

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.left}>
      <h1>
        <Link to="/">
          <img
            src="https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg"
            alt={siteTitle}
          />
        </Link>
      </h1>
      <span className={styles.divider} />
      <Search />
    </div>
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <Link
            to="/docs/specification/getting-started"
            className={classNames({
              [styles.active]: location.pathname.startsWith(
                '/docs/specification',
              ),
            })}
          >
            {meta.docs['specification'].title['zh-CN']}
          </Link>
        </li>
        <li>
          <Link
            to="/docs/other/other"
            className={classNames({
              [styles.active]: location.pathname.startsWith('/docs/other'),
            })}
          >
            {meta.docs['other'].title['zh-CN']}
          </Link>
        </li>
        <li>
          <Popover
            title={null}
            content={<Products />}
            placement="bottomRight"
            arrowPointAtCenter
          >
            <a>所有产品</a>
          </Popover>
        </li>
        <li>
          <Popover
            title={null}
            content={<Products />}
            placement="bottomRight"
            arrowPointAtCenter
          >
            <a>生态</a>
          </Popover>
        </li>
      </ul>
      <GithubCorner href="https://github.com/antvis" size={64} />
    </nav>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
