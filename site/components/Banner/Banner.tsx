import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Banner.module.less';

const mockData = [
  {
    name: 'About',
    title: '关于我们',
    info:
      '我们是蚂蚁金服数据可视化团队，一群有爱有梦的人，怀揣「让人们在数据世界里获得视觉化思考能力」的梦想前行，成就智能时代全球领先的数据可视化解决方案。',
    content: '暂无内容',
  },
  {
    name: 'G2 | G2Plot',
    title: 'G2',
    info:
      '我们是蚂蚁金服数据可视化团队，一群有爱有梦的人，怀揣「让人们在数据世界里获得视觉化思考能力」的梦想前行，成就智能时代全球领先的数据可视化解决方案。',
    content: '暂无内容',
  },
  {
    name: 'G6 | Graphin',
    title: 'G6',
    info:
      '我们是蚂蚁金服数据可视化团队，一群有爱有梦的人，怀揣「让人们在数据世界里获得视觉化思考能力」的梦想前行，成就智能时代全球领先的数据可视化解决方案。',
    content: '暂无内容',
  },
  {
    name: 'X6',
    title: 'X6',
    info:
      '我们是蚂蚁金服数据可视化团队，一群有爱有梦的人，怀揣「让人们在数据世界里获得视觉化思考能力」的梦想前行，成就智能时代全球领先的数据可视化解决方案。',
    content: '暂无内容',
  },
  {
    name: 'L7',
    title: 'L7',
    info:
      '我们是蚂蚁金服数据可视化团队，一群有爱有梦的人，怀揣「让人们在数据世界里获得视觉化思考能力」的梦想前行，成就智能时代全球领先的数据可视化解决方案。',
    content: '暂无内容',
  },
  {
    name: 'F2',
    title: 'F2',
    info:
      '我们是蚂蚁金服数据可视化团队，一群有爱有梦的人，怀揣「让人们在数据世界里获得视觉化思考能力」的梦想前行，成就智能时代全球领先的数据可视化解决方案。',
    content: '暂无内容',
  },
  {
    name: 'ChartCube',
    title: 'ChartCube',
    info:
      '我们是蚂蚁金服数据可视化团队，一群有爱有梦的人，怀揣「让人们在数据世界里获得视觉化思考能力」的梦想前行，成就智能时代全球领先的数据可视化解决方案。',
    content: '暂无内容',
  },
  {
    name: 'AVA',
    title: 'AVA',
    info:
      '我们是蚂蚁金服数据可视化团队，一群有爱有梦的人，怀揣「让人们在数据世界里获得视觉化思考能力」的梦想前行，成就智能时代全球领先的数据可视化解决方案。',
    content: '暂无内容',
  },
];

export default () => {
  const [list, setList] = useState(mockData);
  const [active, setActive] = useState(0);

  return (
    <div className={styles.banner}>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.mainTitle}>让数据栩栩如生</div>
          <div className={styles.subTitle}>
            蚂蚁金服全新一代数据可视化解决方案
          </div>
        </div>

        <div className={styles.backgound}>
          <div className={styles.mainImage}></div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.productList}>
          {(list || []).map((item, index) => {
            return (
              <div
                className={classNames(
                  styles.productItem,
                  index === active ? styles.productItemActive : null,
                )}
                key={index}
                onMouseEnter={() => setActive(index)}
              >
                {item.name}
              </div>
            );
          })}
        </div>

        <div className={styles.introduce}>
          {(list || []).map((item, index) => {
            return (
              <div
                className={styles.introduceDetail}
                style={{ display: index === active ? '' : 'none' }}
              >
                <div className={styles.guide}>
                  <div className={styles.name}>{item.title}</div>
                  <div className={styles.info}>{item.info}</div>
                  <div className={styles.play}>
                    <div className={styles.playIcon}></div>
                    <div className={styles.playText}>了解我们</div>
                  </div>

                  <div className={styles.news}>
                    <div className={styles.newsTitle}>最新资讯</div>
                    <div className={styles.time}>2020.11.22</div>
                    <div className={styles.promo}>
                      蚂蚁金服体验技术部招聘啦！
                    </div>
                  </div>
                </div>

                <div className={styles.productShow}>{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
