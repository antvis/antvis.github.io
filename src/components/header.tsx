import { Link, navigate } from 'gatsby';
import React from 'react';
import GithubCorner from 'react-github-corner';
import { Popover, Select } from 'antd';
import classNames from 'classnames';
import Search from './search';
import { docs } from '../../.antvisrc';
import styles from './header.module.less';

const { Option } = Select;

interface HeaderProps {
  siteTitle?: string;
  location?: Location;
  currentLangKey?: string;
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

const Header: React.FC<HeaderProps> = ({
  siteTitle = '',
  location = { pathname: '' },
  currentLangKey = '',
}) => (
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
            to={`/${currentLangKey}/docs/specification/getting-started`}
            className={classNames({
              [styles.active]: location.pathname.startsWith(
                `/${currentLangKey}/docs/specification`,
              ),
            })}
          >
            {docs['specification'].title[currentLangKey]}
          </Link>
        </li>
        <li>
          <Link
            to={`/${currentLangKey}/docs/other/getting-started`}
            className={classNames({
              [styles.active]: location.pathname.startsWith(
                `/${currentLangKey}/docs/other`,
              ),
            })}
          >
            {docs['other'].title[currentLangKey]}
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
      <Select
        size="small"
        style={{ width: 80, fontSize: 12 }}
        value={currentLangKey}
        onChange={(value: string) => {
          navigate(
            location.pathname.replace(`/${currentLangKey}/`, `/${value}/`),
          );
        }}
      >
        <Option value="en">🇺🇸 Eng</Option>
        <Option value="zh">🇨🇳 中文</Option>
      </Select>
      <GithubCorner href="https://github.com/antvis" size={64} />
    </nav>
  </header>
);

export default Header;
