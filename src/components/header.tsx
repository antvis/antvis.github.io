import { Link, navigate } from 'gatsby';
import React from 'react';
import GithubCorner from 'react-github-corner';
import { Popover, Select } from 'antd';
import classNames from 'classnames';
import Search from './search';
import Products from './products';
import { docs } from '../../.antvisrc';
import styles from './header.module.less';

const { Option } = Select;

interface HeaderProps {
  siteTitle?: string;
  location?: Location;
  currentLangKey?: string;
}

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
