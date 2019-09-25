import { Link } from 'gatsby';
import React from 'react';
import GithubCorner from 'react-github-corner';
import Search from './search';
import styles from './header.module.less';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.left}>
      <h1>
        <Link to="/">
          <img src="https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg" alt={siteTitle} />
        </Link>
      </h1>
      <span className={styles.divider} />
      <Search />
    </div>
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <Link to="/specification" activeClassName={styles.active}>
            设计语言
          </Link>
        </li>
        <li>
          <a>所有产品</a>
        </li>
        <li>
          <a>生态</a>
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
