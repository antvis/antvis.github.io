import React from 'react';
import styles from './product.module.less';

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

export default Product;
