import classNames from 'classnames';
import { LocaleProvider, useTranslation, type Locale } from '../../lib/i18n';
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
function ThemeCharts() {
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
      className="flex items-center justify-center relative z-2 pt-[50px] pb-10 flex-col font-sans bg-cover bg-transparent tablet:px-6 mobile:py-12 mobile:px-5"
      style={{
        backgroundImage: select.background
          ? `url(${select.background})`
          : undefined,
      }}
    >
      <h2
        className={classNames(
          'h-auto mt-0 leading-[1em] text-[40px] font-sans font-bold mb-12 mobile:text-[28px] mobile:leading-[1.3] mobile:text-center mobile:mb-6',
          isDark ? 'text-white' : 'text-[#1d2129]',
        )}
      >
        {useT('定制主题，一键生成')}
      </h2>
      <div className="flex justify-center mb-8 mobile:gap-2 mobile:w-full mobile:flex-wrap">
        {THEME_DATAS.map((data, index) => {
          const isTheme = selectedIndex === index;

          return (
            <button
              type="button"
              key={data.text}
              className={classNames(
                'flex items-center justify-center h-[52px] w-40 cursor-pointer text-[18px] border-2 border-solid rounded-lg mr-5 leading-[52px] [&>img]:h-6 [&>img]:w-6 [&>img]:mr-2 mobile:m-0 mobile:w-auto mobile:min-w-[88px] mobile:px-2 mobile:leading-[inherit] mobile:text-[14px]',
                isDark
                  ? classNames(
                      'bg-transparent text-white border-white hover:font-medium hover:opacity-90',
                      isTheme ? 'font-medium opacity-100' : 'opacity-20',
                    )
                  : classNames(
                      'bg-white hover:font-medium hover:border-[#691eff]',
                      isTheme
                        ? 'font-medium border-[#691eff] text-[#691eff] mobile:font-normal'
                        : 'border-[#e5e8ef]',
                    ),
              )}
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
        className={classNames(
          'h-[600px] w-[calc(100vw_-_360px)] max-w-[1680px] min-w-[1040px] border border-solid shadow-[0_8px_28px_0_rgba(0,0,0,0.05)] rounded-2xl box-border p-6 mb-9 tablet:w-full tablet:min-w-0 tablet:h-auto mobile:p-3',
          isDark
            ? 'border-transparent bg-transparent bg-position-[-100px]'
            : 'bg-[#fafbfc] border-[#e5e8ef]',
        )}
        style={{
          backgroundImage: select.backgroundChart
            ? `url(${select.backgroundChart})`
            : undefined,
        }}
      >
        <div className="flex items-center tracking-normal leading-7 h-7 mb-[18px]">
          <img
            src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*U3AfQq_cQMYAAAAAAAAAAAAADmJ7AQ/original"
            alt="antv"
          />
          <div
            className={classNames(
              'w-[85px] text-[20px] font-sans font-bold mobile:text-[16px]',
              isDark ? 'text-white' : 'text-[#1d2129]',
            )}
          >
            AntV 5.0
          </div>
          <div
            className={classNames(
              'w-0 h-3 border-l [border-left-style:solid] mx-3',
              isDark ? 'border-[rgba(255,255,255,0.5)]' : 'border-l-[#979797]',
            )}
          />
          <div
            className={classNames(
              'text-[16px] leading-7',
              isDark ? 'text-white' : 'text-black',
            )}
          >
            {useT(select.text)}
          </div>
        </div>
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-[14px] mobile:grid-cols-1">
          {CHARTS.map((chart) => {
            return (
              <div
                className={classNames(
                  'h-[243px] w-[calc(100%/3_-_10px)] box-border p-[18px] float-left mb-[15px] mr-[14px] nth-[3n]:mr-0 shadow-[0_2px_8px_0_rgba(0,0,0,0.05)] rounded-xl tablet:w-auto tablet:float-none tablet:m-0',
                  isDark ? 'bg-[rgba(255,255,255,0.08)]' : 'bg-white',
                )}
                key={chart.msg}
              >
                <div
                  className={classNames(
                    'h-6 font-medium text-[16px] tracking-normal leading-6',
                    isDark ? 'text-white' : 'text-[#1d2129]',
                  )}
                >
                  {useT(chart.msg)}
                </div>
                <div className="h-[183px]">
                  {chart.chart({ ...colorsJson, value: select.theme })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className={classNames(
            'group/download bg-transparent border-0 font-[family-name:inherit] text-[16px] tracking-normal leading-6 cursor-pointer overflow-hidden relative',
            isDark
              ? 'text-white opacity-80 hover:opacity-100'
              : 'text-[#424e66] hover:text-[#691eff]',
          )}
          onClick={onDownload}
        >
          <img
            alt=""
            className={
              isDark
                ? 'relative -left-20 [filter:drop-shadow(#fff_80px_0)]'
                : 'group-hover/download:relative group-hover/download:-left-20 group-hover/download:[filter:drop-shadow(#691eff_80px_0)]'
            }
            src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*coOuTKR_NDMAAAAAAAAAAAAADmJ7AQ/original"
          />{' '}
          {useT('规范下载')}
        </button>
      </div>
    </div>
  );
}

export default function ThemeIsland({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <ThemeCharts />
    </LocaleProvider>
  );
}
