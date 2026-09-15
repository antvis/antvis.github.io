import classNames from 'classnames';
import { useTranslation } from '../../lib/i18n';
import debounce from 'lodash/debounce.js';
import { useEffect, useRef, useState } from 'react';
import FAMOUS_PERSONS_DATAS from '../../data/famous-persons.json';
import { OverflowedText, ModuleTitle as Title } from '../common';

// 专家之声
export function FamousPersons() {
  const { locale: language, t: useT } = useTranslation();

  const textRef = useRef<any>(null);
  const msgRef = useRef<any>(null);

  const [textSize, setTextSize] = useState({ maxWidth: 237, maxHeight: 53 });
  const [msgSize, setMsgSize] = useState({ maxWidth: 237, maxHeight: 143 });

  useEffect(() => {
    const changeSize = debounce(() => {
      if (textRef?.current) {
        setTextSize({
          maxWidth: textRef?.current.clientWidth,
          maxHeight: textRef?.current.clientHeight,
        });
      }
      if (msgRef?.current) {
        setMsgSize({
          maxWidth: msgRef?.current.clientWidth,
          maxHeight: msgRef?.current.clientHeight,
        });
      }
    }, 200);

    window.addEventListener('resize', changeSize);
    changeSize();

    return () => {
      window.removeEventListener('resize', changeSize);
      changeSize.cancel();
    };
  }, []);

  return (
    <div className="flex items-center justify-center pt-20 pb-[120px] flex-col overflow-hidden tablet:px-6 mobile:py-12 mobile:px-5">
      <Title
        title={useT('专家之声')}
        subTitle={useT('来自数据可视化专家的专业认可与推荐')}
      />
      <div className="flex items-center justify-center mb-7 py-2 font-sans tablet:w-full tablet:flex-wrap tablet:gap-5">
        {FAMOUS_PERSONS_DATAS.map((data) => {
          const filter = `drop-shadow(${data.color} 80px 0)`;
          return (
            <div
              key={data.name}
              className={classNames(
                language === 'en'
                  ? 'h-[377px]'
                  : 'h-[calc((1680px_-_100vw)/10_+_370px)]',
                'flex items-center justify-between flex-col max-h-[377px] min-h-[350px] w-[calc((100vw_-_464px)/4)] min-w-[239px] max-w-[399px] pt-[29px] px-5 pb-5 relative mx-[14px] tracking-normal transition-all duration-200 ease-[ease] bg-white border border-solid border-[#e5e8ef] shadow-[0_8px_28px_0_rgba(0,0,0,0.05)] rounded-2xl hover:-translate-y-2 hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.1)] tablet:w-[calc(50%_-_10px)] tablet:min-w-0 tablet:m-0 tablet:max-w-none mobile:w-full',
              )}
            >
              <div className="relative overflow-hidden">
                <img
                  src={data.image}
                  alt="image"
                  className="h-[60px] w-[60px]"
                />
                <img
                  src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*XGF5T7Atc7kAAAAAAAAAAAAADmJ7AQ/original"
                  className="absolute -top-[2px] -left-20 h-[14px] w-[14px]"
                  style={{ filter }}
                  alt="icon"
                />
              </div>
              <div className="my-1 text-[20px] text-[#1d2129] font-medium font-sans">
                {useT(data.name)}
              </div>
              <div
                className="leading-7 h-14 text-[14px] text-[#424e66] line-clamp-2 text-ellipsis"
                ref={textRef}
              >
                <OverflowedText
                  text={useT(data.text)}
                  {...textSize}
                  style={{ fontSize: 14, lineHeight: 2 }}
                />
              </div>
              <div className="w-full [border-top:1px_solid_#f5f5f5] my-[14px]" />
              <div
                className="text-[#86909c] flex-1 overflow-hidden"
                ref={msgRef}
              >
                <OverflowedText
                  text={useT(data.msg)}
                  {...msgSize}
                  style={{ fontSize: 14, lineHeight: 2 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
