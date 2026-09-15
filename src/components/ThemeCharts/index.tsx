import classNames from 'classnames';
import { useTranslation } from '../../lib/i18n';
import { useCallback, useState } from 'react';
import THEME_DATAS from '../../data/theme-charts.json';
import THEME_COLORS1 from '../../data/theme-colors1.json';
import THEME_COLORS2 from '../../data/theme-colors2.json';
import THEME_COLORS3 from '../../data/theme-colors3.json';
import {
  ColumnChart,
  GaugeChart,
  GraphChart,
  LineChart,
  PieChart,
  StackedColumnChart,
} from './Charts';

import styles from './index.module.less';

// 已经生成的主题 json 文件
const themeColors = [THEME_COLORS1, THEME_COLORS2, THEME_COLORS3];

const CHARTS = [
  {
    msg: '仪表盘',
    chart: (theme: any) => <GaugeChart theme={theme} />,
  },
  {
    msg: '分组柱形图',
    chart: (theme: any) => <ColumnChart theme={theme} />,
  },
  {
    msg: '力导向图布局',
    chart: (theme: any) => <GraphChart theme={theme} />,
  },
  {
    msg: '折线图',
    chart: (theme: any) => <LineChart theme={theme} />,
  },
  {
    msg: '堆叠柱形图',
    chart: (theme: any) => <StackedColumnChart theme={theme} />,
  },
  {
    msg: '环形图',
    chart: (theme: any) => <PieChart theme={theme} />,
  },
];

// 定制主题，一键生成
export function ThemeCharts() {
  const { t: useT } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const select = THEME_DATAS[selectedIndex];
  const colorsJson = themeColors[selectedIndex];

  // download theme
  const onDownload = useCallback(() => {
    const str = JSON.stringify(colorsJson, null, 2);

    const blobURL = new Blob([str], { type: 'application/json' });

    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blobURL);
    a.download = 'antv_theme.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }, [colorsJson]);

  const isDark = select.theme === 'dark';

  return (
    <div
      className={classNames(styles.themeCharts, {
        [styles.dark]: isDark,
      })}
      style={{
        backgroundImage: select.background
          ? `url(${select.background})`
          : undefined,
      }}
    >
      <h2 className={styles.title}>{useT('定制主题，一键生成')}</h2>
      <div className={styles.themeButtons}>
        {THEME_DATAS.map((data, index) => {
          const isTheme = selectedIndex === index;

          return (
            <button
              type="button"
              key={data.text}
              className={classNames(styles.button, {
                [styles.isTheme]: isTheme,
              })}
              aria-pressed={isTheme}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={
                  isDark ? data.darkImg : isTheme ? data.activeImg : data.img
                }
                alt=""
              />
              {useT(data.text)}
            </button>
          );
        })}
      </div>
      <div
        className={styles.themeChart}
        style={{
          backgroundImage: select.backgroundChart
            ? `url(${select.backgroundChart})`
            : undefined,
        }}
      >
        <div className={styles.msg}>
          <img
            src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*U3AfQq_cQMYAAAAAAAAAAAAADmJ7AQ/original"
            alt="antv"
          />
          <div className={styles.msgTitle}>AntV 5.0</div>
          <div className={styles.segmentation} />
          <div className={styles.msgText}>{useT(select.text)}</div>
        </div>
        <div className={styles.charts}>
          {CHARTS.map((chart, index) => {
            return (
              <div
                className={classNames(styles.chart, {
                  [styles.rightChart]: (index + 1) % 3 === 0,
                })}
                key={chart.msg}
              >
                <div className={styles.chartMsg}>{useT(chart.msg)}</div>
                <div className={styles.content}>
                  {chart.chart({ ...colorsJson, value: select.theme })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.acquire}>
        <button type="button" className={styles.download} onClick={onDownload}>
          <img
            alt=""
            src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*coOuTKR_NDMAAAAAAAAAAAAADmJ7AQ/original"
          />{' '}
          {useT('规范下载')}
        </button>
      </div>
    </div>
  );
}
