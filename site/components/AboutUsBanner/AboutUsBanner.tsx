import React from 'react';
import styles from './AboutUsBanner.module.less';
import { useTranslation } from 'react-i18next';

interface Props {
  bannerSVG: JSX.Element;
}

const AboutUsBanner = (props: Props) => {
  const { t } = useTranslation();
  let title = '蚂蚁集团数据可视化团队';
  let description = '「让人们在数据世界里获得视觉化思考能力」';
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{t(title)}</div>
          <p className={styles.description}>{t(description)}</p>

          <div className={styles.teaser}>
            <div className={styles.teaserimg}>{props.bannerSVG}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBanner;
