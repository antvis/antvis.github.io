import { useIntl } from 'dumi';
import classNames from 'classnames';
import { message, ColorPicker } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { DownloadOutlined, CopyOutlined } from '@ant-design/icons';
import { GaugeChart, ColumnChart, LineChart, GraphChart, StackedColumnChart, PieChart } from './Charts';
import { pick } from '../../utils';

import styles from './index.module.less';

const THEME_DATAS = [
  {
    text: '日常分析',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_QoYRowGM50AAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q5g5Qp2D7GYAAAAAAAAAAAAADmJ7AQ/original',
    darkImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*g4qrR4bQMOYAAAAAAAAAAAAADmJ7AQ/original',
    theme: {
      value: 'light',
      colors10: ['red', 'green', 'blue', 'yellow', 'pink'],
    },
  },
  {
    text: '数据监控',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Sc7hSIITxFQAAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*6e2CT6K6XYgAAAAAAAAAAAAADmJ7AQ/original',
    background: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*StbsSZEU_HoAAAAAAAAAAAAADmJ7AQ/original',
    backgroundChart: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*WeCjR59uRiwAAAAAAAAAAAAADmJ7AQ/original',
    darkImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*OSwyT5CsqVQAAAAAAAAAAAAADmJ7AQ/original',
    theme: {
      value: 'dark',
      colors10: ['green', 'blue', 'red', 'yellow', 'pink'],
    },
  },
  {
    text: '活动战报',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*NcJ0Q6nslIMAAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZnG8QZrNVxkAAAAAAAAAAAAADmJ7AQ/original',
    darkImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*6FVKSq7g520AAAAAAAAAAAAADmJ7AQ/original',
    background: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gjWcSYzg5kMAAAAAAAAAAAAADmJ7AQ/original',
    backgroundChart: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*SPGHSrSfT1UAAAAAAAAAAAAADmJ7AQ/original',
    theme: {
      value: 'dark',
      colors10: ['blue', 'yellow', 'pink', 'red', 'green'],
    },
  },
  {
    text: '自定主题',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*5y_oTYSFUjUAAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*qebjT6nhHBIAAAAAAAAAAAAADmJ7AQ/original',
    darkImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*fuZwTJHtSWYAAAAAAAAAAAAADmJ7AQ/original',
    theme: {
      value: 'light',
    },
  },
];

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
  const intl = useIntl()
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    });
  };

  const [select, setSelect] = useState(THEME_DATAS[0]);

  // theme.colors10
  const [colors10, setColors10] = useState<string[]>(pick('#6400FF'));

  // copy theme
  const onCopy = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify({
        theme:
        {
          colors10,
        },
      },
      ));
      message.success(useT('已复制'));
    }
  }, []);

  // download theme
  const onDownload = useCallback(() => {
    const json = {
      theme: {
        colors10,
      },
    };
    const str = JSON.stringify(json, null, 2);
    const url = `data:,${str}`;

    const a = document.createElement('a');
    a.href = url;
    a.download = 'antv_theme.json';
    a.click();
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
              <img src={isDark ? data.darkImg : (isTheme ? data.activeImg : data.img)} /> {useT(data.text)}
            </div>);

            return index === 3 && isTheme ?
              <ColorPicker
                disabledAlpha
                trigger='hover'
                onChange={(v, color) => setColors10(pick(color))}
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
          <img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*U3AfQq_cQMYAAAAAAAAAAAAADmJ7AQ/original' />
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
        <div className={styles.download} onClick={onDownload}><DownloadOutlined /> {useT("规范下载")}</div>
        <div className={styles.segmentation} />
        <div className={styles.copy} onClick={onCopy}><CopyOutlined /> {useT("拷贝代码")}</div>
      </div>
    </div>
  )
}
