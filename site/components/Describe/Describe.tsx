import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Describe.module.less';

const gridBackgroundImg =
  'https://gw.alipayobjects.com/zos/basement_prod/31366ec3-a932-4e29-9e84-44ae0d6e6815.svg';

const Describe = () => {
  const { t } = useTranslation();
  let title = 'AntV 企业级可视化解决方案';
  let description =
    'AntV 3.0 已全新升级，主要包含 G2、G6、F2、L7 以及一套完整的图表使用和设计规范。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验后方敢与君见。';
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>{t(title)}</p>
        <div key="slicer" className={styles.slicer} />
        <div key="content" className={styles.descriptionWrapper}>
          <p key="content1" className={styles.description}>
            {t(description)}
          </p>
        </div>
        <img
          src={gridBackgroundImg}
          className={styles.gridback}
          alt="gird-background"
        />
      </div>
    </div>
  );
};
export default Describe;
