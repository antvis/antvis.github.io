import { useTranslation } from '../../lib/i18n';
import { useState } from 'react';
import COMPLEX_DATAS from '../../data/complex-charts.json';
import { transformUrl } from '../../lib/urls';

// 性能飞跃，专业优雅
export function ComplexCharts() {
  const { locale: language, t: useT } = useTranslation();

  const [select, setSelect] = useState(COMPLEX_DATAS[0]);

  return (
    <div className="flex items-center justify-center flex-col pt-20 pb-10 font-sans tablet:px-6 mobile:pt-12 mobile:px-5 mobile:pb-6">
      <h2 className="h-auto mt-0 mb-12 text-[40px] text-[#1d2129] font-sans font-bold mobile:text-[28px] mobile:leading-[1.3] mobile:text-center mobile:mb-6">
        {useT('性能飞跃，专业优雅')}
      </h2>
      <div className="flex justify-center mb-8 mobile:gap-2 mobile:flex-wrap">
        {COMPLEX_DATAS.map((data) => {
          const isSelect = select.text === data.text;
          return (
            <button
              key={data.text}
              type="button"
              aria-pressed={isSelect}
              className="flex items-center justify-center h-[52px] w-40 cursor-pointer bg-white border-2 border-solid border-[#e5e8ef] rounded-lg mr-5 leading-[52px] text-[18px] [&>img]:mr-2 hover:font-medium hover:border-[#691eff] aria-pressed:font-medium aria-pressed:border-[#691eff] aria-pressed:text-[#691eff] mobile:w-auto mobile:min-w-[88px] mobile:m-0 mobile:px-2 mobile:text-[14px]"
              onClick={() => setSelect(data)}
            >
              <img src={isSelect ? data.activeImg : data.img} alt={data.text} />{' '}
              {useT(data.text)}
            </button>
          );
        })}
      </div>
      <a
        className="w-[calc(100vw_-_360px)] h-[calc((100vw_-_360px)*(571/1680))] max-w-[1680px] min-w-[1040px] max-h-[571px] min-h-[353px] rounded-2xl box-border shadow-[0_8px_28px_0_rgba(0,0,0,0.2)] overflow-hidden [&>video]:w-full [&>video]:h-full [&>video]:bg-cover tablet:w-full tablet:min-w-0 tablet:min-h-0 tablet:h-auto tablet:aspect-[1680/571] tablet:[&>video]:block"
        href={transformUrl({ url: select.link, language })}
        target="_blank"
      >
        <video
          playsInline
          muted={true}
          src={select.video}
          autoPlay
          loop
          // @ts-ignore
          style={{ objectFit: select.objectFit || 'fill' }}
        />
      </a>
    </div>
  );
}
