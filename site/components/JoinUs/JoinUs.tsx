import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { useTranslation } from 'react-i18next';
import styles from './JoinUs.module.less';

const JoinUs = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <QueueAnim type="bottom" key="content">
          <p key="title" className={styles.title}>
            {t('加入我们')}
          </p>
          <div key="slicer" className={styles.slicer} />
          <div key="description1" className={styles.description}>
            {t(
              '我们是蚂蚁金服数据可视化团队，一群有爱有梦的人，怀揣「让人们在数据世界里获得视觉化思考能力」的梦想前行，成就智能时代全球领先的数据可视化解决方案，满足与日俱增的数据洞察需求。',
            )}
          </div>
          <div key="description2" className={styles.description}>
            {t(
              '如果你对可视化、图形技术、数据分析充满激情， 无论你是工程师、设计师还是数据分析师，请联系我们，期待你的加入。',
            )}
          </div>
          <div key="email" className={styles.description}>
            {t('antv@antfin.com（注：此邮箱仅用于招聘）')}
          </div>
          <a href="#" className={styles.join}>
            <button className={styles.more}>{t('立即加入')}</button>
          </a>
        </QueueAnim>
      </div>
    </div>
  );
};

export default JoinUs;
