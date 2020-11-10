import React, { useState, useEffect } from 'react';

import styles from './Demos.module.less';

interface DemosProps {}

export default (props: DemosProps) => {
  const getRandomSize = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  const list = [
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*IZ9nRq-a6fIAAAAAAAAAAABkARQnAQ',
      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*YPRMRI-lcIwAAAAAAAAAAAAAARQnAQ',
      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*-HIwQbCnfFUAAAAAAAAAAAAAARQnAQ',
      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*55KOQI2EhVUAAAAAAAAAAAAAARQnAQ',
      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*vRbXTpFGp0QAAAAAAAAAAAAAARQnAQ',

      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*vRbXTpFGp0QAAAAAAAAAAAAAARQnAQ',

      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*vRbXTpFGp0QAAAAAAAAAAAAAARQnAQ',

      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*vRbXTpFGp0QAAAAAAAAAAAAAARQnAQ',

      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*vRbXTpFGp0QAAAAAAAAAAAAAARQnAQ',

      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*vRbXTpFGp0QAAAAAAAAAAAAAARQnAQ',

      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
    {
      imgurl:
        'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*vRbXTpFGp0QAAAAAAAAAAAAAARQnAQ',

      title: '折线图/二氧化硅排量放来源',
      url:
        'https://g2plot.antv.vision/zh/examples/line/multiple#line-large-data',
    },
  ];
  // const [allImages, updateAllImages] = useState<JSX.Element>();
  // let images: JSX.Element;
  // for (let i = 0; i < 25; i++) {
  //   const width = getRandomSize(200, 400);
  //   const height = getRandomSize(200, 400);
  //   images = (
  //     <img
  //       src={`https://placekitten.com/${width}/${height}`}
  //       alt="pretty kitty"
  //     />
  //   );
  // }

  // useEffect(() => {
  //   updateAllImages(images);
  // }, []);

  return (
    <section id="demos" className={styles.demos}>
      {list.map((item, key) => (
        <a
          href={item.url}
          style={{
            width: getRandomSize(200, 400),
            height: getRandomSize(200, 400),
          }}
          key={key}
          target="_blank"
          className={styles.demo}
        >
          <div className={styles.cover} />
          <img src={item.imgurl} alt={item.title} />
          <div className={styles.title}>{item.title}</div>
        </a>
      ))}
    </section>
  );
};
