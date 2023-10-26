import { message } from 'antd';
import { useIntl } from 'dumi';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { DownloadOutlined, CopyOutlined } from '@ant-design/icons';
import { GaugeChart, ColumnChart, LineChart , GraphChart, StackedColumnChart, PieChart } from './Charts';

import styles from './index.module.less';

const THEME_DATAS = [
  {
    text: '日常分析',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_QoYRowGM50AAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q5g5Qp2D7GYAAAAAAAAAAAAADmJ7AQ/original',

  },
  {
    text: '数据监控',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Sc7hSIITxFQAAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*6e2CT6K6XYgAAAAAAAAAAAAADmJ7AQ/original',
  },
  {
    text: '活动战报',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*NcJ0Q6nslIMAAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZnG8QZrNVxkAAAAAAAAAAAAADmJ7AQ/original',
  },
  {
    text: '自定主题',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*5y_oTYSFUjUAAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*qebjT6nhHBIAAAAAAAAAAAAADmJ7AQ/original',
  },
];

const CHARTS = [
  {
    msg: "仪表盘",
    chart: <GaugeChart />,
  },
  {
    msg: "分组柱形图",
    chart: <ColumnChart />
  },
  {
    msg: "力导向图布局",
    chart: <GraphChart />
  },
  {
    msg: "折线图",
    chart: <LineChart />
  },
  {
    msg: "堆叠柱形图",
    chart: <StackedColumnChart />
  },
  {
    msg: "环形图",
    chart: <PieChart />
  },
]

export function ThemeCharts() {
  const intl = useIntl()
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    });
  };

  const [select, setSelect] = useState(THEME_DATAS[0]);
  
  const onCopy = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(useT('copy 主题'));
      message.success(useT('已复制'));
    }
  }, []);
  
  const onDownload = useCallback(() => {
    const json = {
      name: '张三',
      addr: '广州'
    };
    const str = JSON.stringify(json, null, 2);
    const url = `data:,${str}`;

    const a = document.createElement('a');
    a.href = url;
    a.download = 'antv_theme.json';
    a.click();
  }, []);

  return (
    <div className={styles.themeCharts}>
      <div className={styles.title}>{useT("定制主题，一键生成")}</div>
      <div className={styles.themeButtons}>
        {
          THEME_DATAS.map((data) => {
            const isTheme = select.text === data.text;
            return <div
              className={classNames(styles.button, {
                [styles.isTheme]: isTheme,
              })}
              onClick={() => setSelect(data)}
            >
              <img src={isTheme ? data.activeImg : data.img} /> {useT(data.text)}
            </div>
          })
        }
      </div>
      <div className={styles.themeChart}>
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
                <div className={styles.content}>{chart.chart}</div>
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
