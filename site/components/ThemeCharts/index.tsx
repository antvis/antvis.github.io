import { useIntl } from 'dumi';
import classNames from 'classnames';
import { ColorPicker } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { GaugeChart, ColumnChart, LineChart, GraphChart, StackedColumnChart, PieChart } from './Charts';
import { pick } from '../../utils';
import THEME_DATAS from '../../data/theme-charts.json';

import styles from './index.module.less';

const CHARTS = [
  {
    msg: "仪表盘",
    chart: (theme: any) => <GaugeChart theme={theme} />,
  },
  {
    msg: "分组柱形图",
    chart: (theme: any) => <ColumnChart theme={theme} />,
  },
  {
    msg: "力导向图布局",
    chart: (theme: any) => <GraphChart theme={theme} />,
  },
  {
    msg: "折线图",
    chart: (theme: any) => <LineChart theme={theme} />,
  },
  {
    msg: "堆叠柱形图",
    chart: (theme: any) => <StackedColumnChart theme={theme} />,
  },
  {
    msg: "环形图",
    chart: (theme: any) => <PieChart theme={theme} />,
  },
]

// 定制主题，一键生成
export function ThemeCharts() {
  const intl = useIntl();
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    });
  };

  const [select, setSelect] = useState(THEME_DATAS[0]);

  // theme.colors10
  const [colors10, setColors10] = useState<string[]>(pick('#6400FF', true));

  // download theme
  const onDownload = useCallback(() => {
    const json = {
      _comment: {
        [useT('分类色板')]: useT('主要用于描述分类数据，如苹果、香蕉、梨，常用一个颜色代表一个值以区分不同类型，取色时色相分布均衡，相邻颜色之间明暗需考虑差异性，常用于饼图的不同分类、填充地图中的不同国家、关系图中的不同角色等。'),
        [useT('单一顺序色板')]: useT('单色顺序色板，均基于分类色板生长而来，一般使用同一色相，通过明度或饱和度的渐变，常用来表示同一事物中的数值大小或梯度变化，如排行榜等级变化、一个国家或地区的新增人口数对比、风险等级变化等。'),
        [useT('邻近顺序色板')]: useT('邻近顺序色板，均基于分类色板生长而来，为加大辨识度也可使用邻近色相，通过明度或饱和度的渐变，常用来表示同一事物中的数值大小或梯度变化，如排行榜等级变化、一个国家或地区的新增人口数对比、风险等级变化等。'),
        [useT('发散色板')]: useT('对比色渐变色板，均基于分类色板生长而来，一般是两种互补色（也可以是对比色）去展现数据从一个负向值到 0 点再到正向值的连续变化区间，显示相对立的两个值的大小关系，常用于气温的冷热、海拔高低、股票涨跌等。'),
      },
      theme: {
        colors10,
      },
    };

    const str = JSON.stringify(json, null, 2);

    const blobURL = new Blob([str], { type: 'text/json' });

    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blobURL);
    a.download = 'antv_theme.json';
    a.click();
    a.remove();
  }, []);

  const isDark = useMemo(() => select?.theme?.value === 'dark', [select]);

  return (
    <div
      className={classNames(styles.themeCharts, {
        [styles.dark]: isDark,
      })}
      style={{ backgroundImage: `url(${select.background})` }}
    >
      <div className={styles.title}>{useT("定制主题，一键生成")}</div>
      <div className={styles.themeButtons}>
        {
          THEME_DATAS.map((data, index) => {
            const isTheme = select.text === data.text;

            const button = (<div
              className={classNames(styles.button, {
                [styles.isTheme]: isTheme,
              })}
              onClick={() => setSelect(data)}
            >
              <img src={isDark ? data.darkImg : (isTheme ? data.activeImg : data.img)} alt='theme_icon' /> {useT(data.text)}
            </div>);

            return index === 3 && isTheme ?
              <ColorPicker
                disabledAlpha
                trigger='hover'
                onChange={(v, color) => setColors10(pick(color, true))}
                panelRender={(panel) => <div className="custom-panel">
                  <div className={styles.colors}>
                    {
                      colors10.map((color) => <div className={styles.color} style={{ background: color }} />)
                    }
                  </div>
                  {panel}
                </div>}
              >
                {button}
              </ColorPicker> :
              button
          })
        }
      </div>
      <div
        className={styles.themeChart}
        style={{ backgroundImage: `url(${select.backgroundChart})` }}
      >
        <div className={styles.msg}>
          <img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*U3AfQq_cQMYAAAAAAAAAAAAADmJ7AQ/original' alt='antv' />
          <div className={styles.msgTitle}>AntV 5.0</div>
          <div className={styles.segmentation} />
          <div className={styles.msgText}>{useT(select.text)}</div>
        </div>
        <div className={styles.charts}>
          {
            CHARTS.map((chart, index) => {
              return <div
                className={classNames(styles.chart, {
                  [styles.rightChart]: (index + 1) % 3 === 0,
                })}
              >
                <div className={styles.chartMsg}>{useT(chart.msg)}</div>
                <div className={styles.content}>{chart.chart({ colors10, ...select.theme })}</div>
              </div>
            })
          }
        </div>
      </div>
      <div className={styles.acquire}>
        <div className={styles.download} onClick={onDownload}><img alt='download' src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*coOuTKR_NDMAAAAAAAAAAAAADmJ7AQ/original' /> {useT("规范下载")}</div>
      </div>
    </div>
  )
}
