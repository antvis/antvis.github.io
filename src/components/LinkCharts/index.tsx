import classNames from 'classnames';
import { useTranslation } from '../../lib/i18n';
import { useCallback, useEffect, useRef, useState } from 'react';
import CHARTS_DATAS from '../../data/link-charts.json';
import { transformUrl } from '../../lib/urls';
import { OverflowedText, ModuleTitle as Title } from '../common';

// 丰富图表，选用自如
export function LinkCharts() {
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  const [position, setPosition] = useState('center');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(CHARTS_DATAS);

  const { locale: language, t: useT } = useTranslation();

  // 滑动
  const onClick = useCallback(
    (position: 'left' | 'right') => {
      if (loading) return;
      setPosition(position);
      setLoading(true);
      const length = data.length;
      timer.current = setTimeout(() => {
        setData((data) => {
          return position === 'left'
            ? [...data.slice(length - 3), ...data.slice(0, length - 3)]
            : [...data.slice(3), ...data.slice(0, 3)];
        });
        setPosition('center');
        setLoading(false);
      }, 1000);
    },
    [loading, data.length],
  );

  return (
    <div className="flex items-center justify-center pt-[100px] pb-20 flex-col font-sans mobile:pt-12 mobile:pb-6">
      <Title
        title={useT('丰富图表，选用自如')}
        subTitle={useT(
          '柱形图、饼图、关系图、地图、多维表格等260+丰富图表随心选用',
        )}
      />
      <div className="w-full mb-7 py-2 overflow-hidden">
        <div
          className={classNames(
            'flex justify-center transition-all ease-[ease]',
            {
              'duration-1000 translate-x-0': position === 'left',
              'duration-1000 translate-x-[-2454px]': position === 'right',
              'duration-0 translate-x-[-1227px]': position === 'center',
            },
          )}
          style={{ width: data.length * 409 + 'px' }}
        >
          {data.map((data) => {
            return (
              <a
                key={data.link}
                className="flex items-center justify-center flex-col h-[361px] px-5 bg-[#f7f8fd] rounded-2xl tracking-normal relative mx-[14px] transition-all duration-200 ease-[ease] cursor-pointer hover:-translate-y-2 hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.05)]"
                href={transformUrl({
                  url: data.link,
                  language,
                })}
                target="_blank"
              >
                <div className="h-8 text-2xl text-[#1d2129] leading-8 mt-[18px] mb-2 font-sans font-bold">
                  {useT(data.title)}
                </div>
                <div className="text-[14px] text-[#424e66] leading-[22px] mb-[18px] line-clamp-2 text-ellipsis">
                  <OverflowedText text={useT(data.subTitle)} maxWidth={341} />
                </div>
                <div
                  className="h-5 px-[6px] leading-5 absolute text-[14px] top-0 right-0 rounded-[0_8px_0_8px] text-white"
                  style={{ background: data.color }}
                >
                  {data.antv}
                </div>
                <div
                  className="h-[231px] w-[341px] bg-white rounded-xl bg-center bg-no-repeat bg-contain shadow-[0_2px_5px_0_rgba(0,0,0,0.05)]"
                  style={{ backgroundImage: `url(${data.image})` }}
                />
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          disabled={loading}
          aria-label={language === 'zh' ? '上一组图表' : 'Previous charts'}
          className="flex items-center justify-center border-0 h-11 w-11 rounded-full bg-[#f2f3f5] mx-2 text-[#424e66] cursor-pointer hover:bg-[#e5e8ef] rotate-180"
          onClick={() => onClick('left')}
        >
          <img
            alt="left_icon"
            src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Q4WbQ5DCXEAAAAAAAAAAAAAADmJ7AQ/original"
          />
        </button>
        <button
          type="button"
          disabled={loading}
          aria-label={language === 'zh' ? '下一组图表' : 'Next charts'}
          className="flex items-center justify-center border-0 h-11 w-11 rounded-full bg-[#f2f3f5] mx-2 text-[#424e66] cursor-pointer hover:bg-[#e5e8ef]"
          onClick={() => onClick('right')}
        >
          <img
            alt="right_icon"
            src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Q4WbQ5DCXEAAAAAAAAAAAAAADmJ7AQ/original"
          />
        </button>
      </div>
    </div>
  );
}
