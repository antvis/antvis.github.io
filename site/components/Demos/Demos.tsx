import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import chroma from 'chroma-js';
import { assign, clone } from 'lodash';

import styles from './Demos.module.less';

interface DemoProps {
  imgurl: string;
  title_zh: string;
  title_en: string;
  host?: string;
  path?: string;
  ratio: number; //图片比例
  width?: number;
  height?: number;
  location?: string;
}
interface DemosProps {
  list?: DemoProps[];
  active: number;
}

export default (props: DemosProps) => {
  // 根据实际效果调整最大最小列数
  const MAX_COLS = 4;
  const MIN_COLS = 2;
  let list = props.list || [];
  const active = props.active;
  const { i18n } = useTranslation();
  const [imgs, updateImgs] = useState<number[][]>([]);

  const getRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const colorScale = chroma.scale(['E0C1FF', '5900C9']);

  const getCols = (totalNum: number, ratio: number) => {
    let total = 0;
    let maxCols = 0;
    let randomCols = 0;
    for (let i = 1; total <= totalNum; i++) {
      total += i;
      if (total <= totalNum) {
        maxCols += 1;
      }
    }

    // 比例阀值看实际情况调整
    if (ratio <= 1.3) {
      randomCols = getRandomNum(MIN_COLS, 3);
    } else {
      randomCols = getRandomNum(MIN_COLS, MAX_COLS);
    }

    return randomCols > maxCols ? maxCols : randomCols;
  };

  const getSum = (num: number) => {
    let res = 0;
    for (let i = 0; i <= num; i += 1) {
      res += i;
    }
    return res;
  };

  const getColWidh = (cols: number, index: number, width: number) => {
    return width * ((cols - index) / getSum(cols));
  };

  const getRowHeight = (rows: number, height: number) => {
    return height / rows;
  };

  /* 布局规则： 排序靠前的列宽大 */
  const layout = () => {
    let res: number[][] = [];
    const maxWidth = document.body.clientWidth - 360;
    const height = document.body.clientHeight - 396;
    const maxHeight = height > 480 ? height : 480;
    const ratio = list[0].ratio;

    const cols = getCols(list.length, ratio);
    const totalImgNum = getSum(cols);
    let index = getRandomNum(0, list.length - totalImgNum - 1); // list索引，随机截取
    let firtColNum = getRandomNum(1, 2);
    for (let i = 0; i < cols; i += 1) {
      let rows = i + 1; // 每列的图片个数
      let rowIndex = [];
      for (let j = 0; j < rows; j += 1) {
        assign(list[index], { width: getColWidh(cols, i, maxWidth) });
        assign(list[index], { height: getRowHeight(rows, maxHeight) });
        rowIndex.push(index);
        index += 1;
      }
      res.push(rowIndex);
      firtColNum += 1;
    }

    return res;
  };

  useEffect(() => {
    if (!list || list.length <= 0 || !active) return;
    updateImgs(layout());
  }, [list, active]);

  return (
    <div id="demos" className={styles.demos}>
      {imgs.map((rows: number[], key: number) => (
        <div className={styles.col} key={`col${key}`}>
          {rows.map((item: number, index: number) => (
            <a
              href={
                list[item].location
                  ? list[item].location
                  : `${list[item].host}/${i18n.language}/${list[item].path}`
              }
              key={`${list[item].path}${index}`}
              target="_blank"
              style={{
                width: `${list[item].width}px`,
                height: `${list[item].height}px`,
              }}
            >
              <div
                className={styles.cover}
                style={{
                  backgroundColor: `${colorScale(item / list.length)}`,
                }}
              />
              <div
                className={styles.img}
                style={{
                  backgroundImage: `url(${list[item].imgurl})`,
                  width: `${list[item].width}px`,
                  height: `${list[item].height}px`,
                }}
              />
              <div className={styles.title}>
                {i18n.language === 'zh'
                  ? list[item].title_zh
                  : list[item].title_en}
              </div>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};
