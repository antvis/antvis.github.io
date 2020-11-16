import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import chroma from 'chroma-js';
import { assign, cloneDeep } from 'lodash';
import styles from './Demos.module.less';

interface DemoProps {
  imgurl: string;
  title_zh: string;
  title_en: string;
  host: string;
  path: string;
  width?: number;
  height?: number;
}
interface DemosProps {
  list?: DemoProps[];
  active: number;
}

export default (props: DemosProps) => {
  const list = props.list || [];
  const active = props.active;
  const { i18n } = useTranslation();
  const [imgs, setImgs] = useState<DemoProps[]>([]);
  const getRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const getRandomSize = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  const colorScale = chroma.scale(['E0C1FF', '5900C9']);
  let index = 0; // list索引 即每次展示的图片总个数

  let cols = getRandomNum(3, 5);

  /* 布局规则： 取顺序靠前的为高频图表，越高频尺寸越大*/
  const layout = () => {
    let res: DemoProps[] = [];
    const maxWidth = document.body.clientWidth - 360;
    const maxHeight = document.body.clientHeight - 296;
    const defaultRatio = 280 / 130; // 各栈点gallery缩略图原始尺寸
    let totalWidth = maxWidth; // 总列宽

    for (let i = 0; i < cols; i += 1) {
      const averWidth = totalWidth / cols;
      const rows = getRandomNum(i + 1, i + 2); // 每列的图片个数
      if (rows === 1) {
        assign(list[index], { height: maxHeight });
        assign(list[index], { width: maxHeight * defaultRatio });
        index += 1;
      } else {
        const colWidth =
          i === cols - 1 ? totalWidth : averWidth + getRandomNum(10, 20); //当前列的列宽
        totalWidth -= colWidth;
        let totalHeight = 0; // 当前列的总高

        for (let j = 0; j < rows; j += 1) {
          assign(list[index], { width: colWidth });

          const ratioHeight = colWidth / defaultRatio;
          if (totalHeight + ratioHeight <= maxHeight) {
            assign(list[index], { height: ratioHeight });
            totalHeight += ratioHeight;
            index += 1;
          } else {
            assign(list[index], { height: maxHeight - totalHeight });
            index += 1;
            break;
          }
        }
      }

      cols -= 1;
    }
    res = cloneDeep(list.slice(0, index));
    console.log(res);
    return res;
  };

  useEffect(() => {
    if (!list || list.length <= 0 || !active) return;
    setImgs(layout());
  }, [list, active]);

  return (
    <section
      id="demos"
      className={styles.demos}
      style={{
        columnCount: cols,
      }}
    >
      {imgs.map((item: DemoProps, key: number) => (
        <a
          href={`${item.host}/${i18n.language}/${item.path}`}
          key={`${item.path}${key}`}
          target="_blank"
          // style={{
          //   width: `${item.width}px`,
          //   height: `${item.height}px`,
          // }}
        >
          <div
            className={styles.cover}
            style={{
              backgroundColor: `#${colorScale(key / list.length)}`,
              width: `${item.width}px`,
              height: `${item.height}px`,
            }}
          />
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${item.imgurl})`,
              width: `${item.width}px`,
              height: `${item.height}px`,
            }}
          />
          <div className={styles.title}>
            {i18n.language === 'zh' ? item.title_zh : item.title_en}
          </div>
        </a>
      ))}
    </section>
  );
};
