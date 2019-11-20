import React from 'react';
import styles from './bannerSVG.module.less';

interface BannerSVGProps {
  play: boolean;
}

const BannerSVG = (props: BannerSVGProps) => {
  const block6NodeRadius = '2';
  const block6CirclePositions = [
    { x: 36.8, y: 49.8 }, //A
    { x: 66.8, y: 29.8 }, //B
    { x: 84.8, y: 29.8 }, //C
    { x: 101.8, y: 36.8 }, //D
    { x: 29.8, y: 66.8 }, //E
    { x: 49.8, y: 36.8 }, //F
    { x: 114.8, y: 49.8 }, //G
    { x: 121.8, y: 66.8 }, //H
    { x: 29.8, y: 84.8 }, //I
    { x: 36.8, y: 101.8 }, //J
    { x: 101.8, y: 114.8 }, //K
    { x: 121.8, y: 84.8 }, //L
    { x: 49.8, y: 115.8 }, //M
    { x: 66.8, y: 121.8 }, //N
    { x: 84.8, y: 121.8 }, //O
    { x: 114.8, y: 101.8 }, //P
  ];
  const block6GridPositions = [
    { x: 45.5, y: 45.5 }, //A
    { x: 65.5, y: 45.5 }, //B
    { x: 85.5, y: 45.5 }, //C
    { x: 105.5, y: 45.5 }, //D
    { x: 45.5, y: 65.5 }, //E
    { x: 65.5, y: 65.5 }, //F
    { x: 85.5, y: 65.5 }, //G
    { x: 105.5, y: 65.5 }, //H
    { x: 45.5, y: 85.5 }, //I
    { x: 65.5, y: 85.5 }, //J
    { x: 85.5, y: 85.5 }, //K
    { x: 105.5, y: 85.5 }, //L
    { x: 45.5, y: 105.5 }, //M
    { x: 65.5, y: 105.5 }, //N
    { x: 85.5, y: 105.5 }, //O
    { x: 105.5, y: 105.5 }, //P
  ];
  const labels = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
  ];
  const fills = [
    'rgb(180, 100, 254)', //A
    'rgb(163, 89, 254)', //B
    'rgb(141, 76, 254)', //C
    'rgb(120, 64, 254)', //D
    'rgb(205, 114, 254)', //E
    'rgb(185, 103, 254)', //F
    'rgb(159, 87, 254)', //G
    'rgb(140, 78, 254)', //H
    'rgb(224, 126, 254)', //I
    'rgb(202, 114, 254)', //J
    'rgb(179, 100, 254)', //K
    'rgb(164, 92, 254)', //L
    'rgb(248, 141, 254)', //M
    'rgb(223, 126, 254)', //N
    'rgb(201, 112, 254)', //O
    'rgb(180, 101, 254)', //P
  ];

  const getBlock6Circles = () => {
    const circles = labels.map((label, i) => {
      const beginx = block6GridPositions[i].x;
      const beginy = block6GridPositions[i].y;
      const classname = `block6Circle${label}`;
      return (
        <circle
          id={`block6-circle-${label}`}
          className={props.play ? styles[classname] : 'block6CircleStatic'}
          key={label}
          fill={fills[i]}
          cx={beginx}
          cy={beginy}
          r={block6NodeRadius}
        ></circle>
      );
    });
    return circles;
  };

  const hoverAnimate = false;
  const mouseEnterBlock1 = () => {
    if (hoverAnimate) {
      for (let i = 1; i <= 5; i++) {
        const circleShadow = document.getElementById(
          `block1-circle${i}-shadow`,
        );
        const circle = document.getElementById(`block1-circle${i}-object`);
        circleShadow &&
          circleShadow.setAttribute(
            'class',
            styles[`block1Circle${i}Infinite`],
          );
        circle &&
          circle.setAttribute('class', styles[`block1Circle${i}Infinite`]);
      }
    }
  };
  const mouseOutBlock1 = () => {
    if (hoverAnimate) {
      for (let i = 1; i <= 5; i++) {
        const circleShadow = document.getElementById(
          `block1-circle${i}-shadow`,
        );
        const circle = document.getElementById(`block1-circle${i}-object`);
        circleShadow && circleShadow.setAttribute('class', ''); //styles[`block1Circle${i}`]
        circle && circle.setAttribute('class', ''); //styles[`block1Circle${i}`]
      }
    }
  };
  const mouseEnterBlock2 = () => {
    if (hoverAnimate) {
      for (let i = 1; i <= 4; i++) {
        const bar = document.getElementById(`block2-bar${i}`);
        bar && bar.setAttribute('class', styles[`block2Bar${i}Infinite`]);
      }
    }
  };
  const mouseOutBlock2 = () => {
    if (hoverAnimate) {
      for (let i = 1; i <= 4; i++) {
        const bar = document.getElementById(`block2-bar${i}`);
        bar && bar.setAttribute('class', ''); // styles[`block2Bar${i}Infinite`]
      }
    }
  };
  const mouseEnterBlock3 = () => {
    if (hoverAnimate) {
      if (hoverAnimate) {
        const bigArc = document.getElementById('block3-arc-big');
        const smallArc = document.getElementById('block3-arc-small');
        bigArc && bigArc.setAttribute('class', styles.block3ArcBigInfinite);
        smallArc &&
          smallArc.setAttribute('class', styles.block3ArcSmallInfinite);
      }
    }
  };
  const mouseOutBlock3 = () => {
    if (hoverAnimate) {
      const bigArc = document.getElementById('block3-arc-big');
      const smallArc = document.getElementById('block3-arc-small');
      bigArc && bigArc.setAttribute('class', '');
      smallArc && smallArc.setAttribute('class', '');
    }
  };
  const mouseEnterBlock4 = () => {
    if (hoverAnimate) {
      const verti = document.getElementById('block4-back-line-verti');
      const hori = document.getElementById('block4-back-line-hori');
      const circle = document.getElementById('block4-back-circle');
      verti && verti.setAttribute('class', styles.block4LineVertiInfinite);
      hori && hori.setAttribute('class', styles.block4LineHoriInfinite);
      circle && circle.setAttribute('class', styles.block4CircleInfinite);
    }
  };
  const mouseOutBlock4 = () => {
    if (hoverAnimate) {
      const verti = document.getElementById('block4-back-line-verti');
      const hori = document.getElementById('block4-back-line-hori');
      const circle = document.getElementById('block4-back-circle');
      verti && verti.setAttribute('class', '');
      hori && hori.setAttribute('class', '');
      circle && circle.setAttribute('class', '');
    }
  };

  const mouseEnterBlock5 = () => {
    if (hoverAnimate) {
      const fan = document.getElementById('block5-fan');
      fan && fan.setAttribute('class', styles.block5FanInfinite);
    }
  };
  const mouseOutBlock5 = () => {
    if (hoverAnimate) {
      const fan = document.getElementById('block5-fan');
      fan && fan.setAttribute('class', styles.block5Fan);
    }
  };

  const mouseEnterBlock6 = () => {
    if (hoverAnimate) {
      labels.forEach(label => {
        const circle = document.getElementById(`block6-circle-${label}`);
        circle &&
          circle.setAttribute('class', styles[`block6Circle${label}Infinite`]);
      });
      const container = document.getElementById('block6-nodes');
      container &&
        container.setAttribute('class', styles.block6NodesContainerInfinite);
    }
  };
  const mouseOutBlock6 = () => {
    if (hoverAnimate) {
      labels.forEach(label => {
        const circle = document.getElementById(`block6-circle-${label}`);
        circle && circle.setAttribute('class', '');
      });
      const container = document.getElementById('block6-nodes');
      container && container.setAttribute('class', '');
    }
  };
  const mouseEnterBlock7 = () => {
    if (hoverAnimate) {
      const curve = document.getElementById('block7-curve');
      curve && curve.setAttribute('class', styles.block7CurveInfinite);
    }
  };
  const mouseOutBlock7 = () => {
    if (hoverAnimate) {
      const curve = document.getElementById('block7-curve');
      curve && curve.setAttribute('class', '');
    }
  };
  const mouseEnterBlock8 = () => {
    if (hoverAnimate) {
      for (let i = 1; i <= 3; i++) {
        const bar = document.getElementById(`block8-bar${i}`);
        bar && bar.setAttribute('class', styles[`block8Bar${i}Infinite`]);
      }
    }
  };
  const mouseOutBlock8 = () => {
    if (hoverAnimate) {
      for (let i = 1; i <= 3; i++) {
        const bar = document.getElementById(`block8-bar${i}`);
        bar && bar.setAttribute('class', '');
      }
    }
  };

  return (
    <section className={styles.wrapper}>
      <svg width="130%" height="130%" viewBox="-50 -50 751 587" version="1.1">
        <defs>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            id="back-rect1-gradient"
          >
            <stop stopColor="#F0EFFD" offset="0%"></stop>
            <stop stopColor="#F9F8FF" offset="100%"></stop>
          </linearGradient>
          <rect id="path-5" x="39" y="0" width="24" height="24"></rect>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            id="linearGradient-27"
          >
            <stop stopColor="#3EB0FF" offset="0%"></stop>
            <stop stopColor="#00FF97" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            id="linearGradient-28"
          >
            <stop stopColor="#3EB0FF" offset="0%"></stop>
            <stop stopColor="#00FF97" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            id="linearGradient-29"
          >
            <stop stopColor="#3EB0FF" offset="0%"></stop>
            <stop stopColor="#00FF97" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            id="linearGradient-30"
          >
            <stop stopColor="#3EB0FF" offset="0%"></stop>
            <stop stopColor="#00FF97" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="100%"
            y1="98.9231419%"
            x2="100%"
            y2="0%"
            id="linearGradient-35"
          >
            <stop stopColor="#79FFEF" offset="0%"></stop>
            <stop stopColor="#35FFAD" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="100%"
            y1="98.9231419%"
            x2="100%"
            y2="0%"
            id="linearGradient-36"
          >
            <stop stopColor="#79FFEF" offset="0%"></stop>
            <stop stopColor="#35FFAD" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="100%"
            y1="98.9231419%"
            x2="100%"
            y2="0%"
            id="linearGradient-37"
          >
            <stop stopColor="#79FFEF" offset="0%"></stop>
            <stop stopColor="#35FFAD" offset="100%"></stop>
          </linearGradient>
          <circle id="path-41" cx="65.5" cy="65.5" r="32.5"></circle>
          <linearGradient
            x1="50%"
            y1="3.85364977%"
            x2="50%"
            y2="89.6029946%"
            id="linearGradient-50"
          >
            <stop stopColor="rgba(255, 255, 255, 0.12)" offset="0%"></stop>
            <stop stopColor="rgba(255, 255, 255, 0.12)" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="100%"
            y1="50%"
            x2="0%"
            y2="50%"
            id="linearGradient-51"
          >
            <stop stopColor="rgba(255, 255, 255, 0.12)" offset="0%"></stop>
            <stop stopColor="rgba(255, 255, 255, 0.12)" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="85.7700904%"
            y1="92.3103523%"
            x2="0%"
            y2="34.9608269%"
            id="linearGradient-52"
          >
            <stop stopColor="rgba(255, 255, 255, 0.12)" offset="0%"></stop>
            <stop stopColor="rgba(255, 255, 255, 0.12)" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="100%"
            x2="50%"
            y2="0%"
            id="linearGradient-53"
          >
            <stop stopColor="#FF41F9" offset="0%"></stop>
            <stop stopColor="#00FFCA" offset="100%"></stop>
          </linearGradient>
          <path
            d="M63,34 C74.045695,34 83,42.954305 83,54 C83,61.3637967 76.3333333,71.3637967 63,84 C49.6666667,71.3637967 43,61.3637967 43,54 C43,42.954305 51.954305,34 63,34 Z M63,39.8333333 C55.175966,39.8333333 48.8333333,46.1480369 48.8333333,53.9376185 C48.8333333,58.572673 53.4703894,66.0292388 63,75.6666667 L63,75.6666667 L63.4297955,75.230106 C72.669063,65.80393 77.1666667,58.5024449 77.1666667,53.9376185 C77.1666667,46.1480369 70.824034,39.8333333 63,39.8333333 Z M63,47 C66.3137085,47 69,49.6862915 69,53 C69,56.3137085 66.3137085,59 63,59 C59.6862915,59 57,56.3137085 57,53 C57,49.6862915 59.6862915,47 63,47 Z"
            id="path-54"
          ></path>
          <linearGradient
            id="arc-gradient1"
            x1="0"
            x2="0.3"
            y1="0"
            y2="1"
            gradientTransform="rotate(-90)"
          >
            <stop offset="0%" stopColor="rgb(154, 104, 255)" stopOpacity="1" />\
            <stop
              offset="100%"
              stopColor="rgb(255, 145, 253)"
              stopOpacity="1"
            />
          </linearGradient>
          <linearGradient
            id="arc-gradient2"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
            gradientTransform="rotate(30)"
          >
            <stop offset="0%" stopColor="rgb(68, 17, 215)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="rgb(230, 54, 255)" stopOpacity="1" />
          </linearGradient>
          <filter
            id="arc-filter1"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
          >
            <feOffset result="offOut" in="SourceGraphic" dx="-5" dy="-5" />
            <feColorMatrix
              result="matrixOut"
              in="offOut"
              type="matrix"
              values="0.463 0 0 0 0 0 0.110 0 0 0 0 0 0.922 0 0 0 0 0 0.2 0"
            />
            <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="20" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
          <filter id="arc-filter2" x="-50%" y="-50%" width="250%" height="250%">
            <feOffset result="offOut" in="SourceGraphic" dx="5" dy="5" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
          <filter
            x="-300.0%"
            y="-220.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-81"
          >
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              dx="0"
              dy="4"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="4"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <filter
            x="-300.0%"
            y="-220.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-83"
          >
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              dx="0"
              dy="4"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="4"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <filter
            x="-300.0%"
            y="-220.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-85"
          >
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              dx="0"
              dy="4"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="4"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <filter
            x="-300.0%"
            y="-220.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-87"
          >
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              dx="0"
              dy="4"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="4"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <filter
            x="-300.0%"
            y="-220.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-89"
          >
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter1"
            ></feMorphology>
            <feOffset
              dx="0"
              dy="4"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="4"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <radialGradient
            id="block5-gradient"
            fx="50%"
            fy="50%"
            cx="50%"
            cy="50%"
            r="90%"
          >
            <stop stopOpacity="1" stopColor="#FFDBB8" offset="0%" />
            <stop stopOpacity="1" stopColor="#FFD341" offset="100%" />
          </radialGradient>
          <filter id="rect-shadow" x="-50%" y="-50%" width="300%" height="300%">
            <feOffset result="offOut" in="SourceGraphic" dx="10" dy="10" />
            <feColorMatrix
              result="matrixOut"
              in="offOut"
              type="matrix"
              values="0.192 0 0 0 0 0 0.275 0 0 0 0 0 0.349 0 0 0 0 0 0.1 0"
            />
            <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <g
          id="Ant-V-PC-定稿-1101"
          transform="translate(-711.000000, -100.000000)"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="banner-svg" transform="translate(779.000000, 127.000000)">
            <g id="backs" transform="translate(209.000000, 0.000000)">
              <rect
                id="back-lefttop-small"
                stroke="#EBE1FB"
                opacity="0.503348214"
                x="257.5"
                y="145.5"
                width="206"
                height="172"
                transform="translate(-90.000000, -150.000000)"
              ></rect>
              <rect
                id="back-righttop"
                stroke="#EBE1FB"
                opacity="0.293619792"
                x="235.5"
                y="0.5"
                width="527"
                height="451"
                transform="translate(-320.000000, -180.000000)"
              ></rect>
              <path
                id="back-fan"
                d="M0.500015456,334.512545 L0.507890624,586.5 L252.499521,586.5 C252.235652,448.831454 143.017682,336.763448 7.1430388,334.533878 L3.01314849,334.5 C2.17494966,334.5 1.33723221,334.504183 0.500015456,334.512545 Z"
                stroke="#EBE1FB"
                opacity="0.503348214"
                transform="translate(-285.000000, -172.000000)"
              ></path>
              <image
                xlinkHref="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*aRK0RKcWMzEAAAAAAAAAAABkARQnAQ"
                width="120px"
                height="120px"
                x="0px"
                y="350px"
              />
              <rect
                id="back-rect1"
                fill="url(#back-rect1-gradient)"
                x="290"
                y="424"
                width="21"
                height="21"
              >
                <animate
                  attributeName="y"
                  from="424"
                  to="424"
                  begin="0s"
                  dur="10s"
                  values="424;440;424"
                  keySplines="0.5 0.8 0.6 1; 0.5 0.8 0.6 1;"
                  keyTimes="0;0.5;1"
                  calcMode="spline"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                id="back-rect2"
                fill="#ffffff"
                filter="url(#rect-shadow)"
                x="312"
                y="445"
                width="28"
                height="28"
              >
                <animate
                  attributeName="y"
                  from="445"
                  to="445"
                  begin="0s"
                  dur="10s"
                  values="445;430;445"
                  keySplines="0.5 0.8 0.6 1; 0.5 0.8 0.6 1;"
                  keyTimes="0;0.5;1"
                  calcMode="spline"
                  repeatCount="indefinite"
                />
              </rect>
              <circle
                id="back-circle"
                fill="#EEEBFD"
                cx="205.5"
                cy="431.5"
                r="1.5"
              ></circle>
              <rect
                id="back-rect-top"
                fill="#ffffff"
                filter="url(#rect-shadow)"
                x="39"
                y="0"
                width="24"
                height="24"
              >
                <animate
                  attributeName="y"
                  from="0"
                  to="0"
                  begin="0s"
                  dur="8s"
                  values="0;20;0"
                  keySplines="0.5 0.8 0.6 1; 0.5 0.8 0.6 1;"
                  keyTimes="0;0.5;1"
                  calcMode="spline"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g id="block6" transform="translate(131.000000, 218.000000)">
              <image
                id="block6Back"
                xlinkHref="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zzQTRZPLhIgAAAAAAAAAAABkARQnAQ"
                width="265px"
                height="265px"
                x="-56px"
                y="-35px"
              />
              <g
                id="block6-nodes"
                className={
                  props.play
                    ? styles.block6NodesContainer
                    : 'block6NodesContainerStatic'
                }
              >
                {getBlock6Circles()}
              </g>
            </g>
            <g id="block2" transform="translate(185.000000, 118.000000)">
              <image
                id="block2Back"
                xlinkHref="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*JikGQZ3gmKsAAAAAAAAAAABkARQnAQ"
                width="236px"
                height="236px"
                x="-69px"
                y="-30px"
              />
              <g id="block2-bars" transform="translate(25.000000, 27.000000)">
                <rect
                  id="block2-bar1"
                  className={
                    props.play ? styles.block2Bar1 : 'block2Bar1Static'
                  }
                  fill="url(#linearGradient-27)"
                  x="0"
                  y="0"
                  width="27"
                  height="6"
                ></rect>
                <rect
                  id="block2-bar2"
                  className={
                    props.play ? styles.block2Bar2 : 'block2Bar2Static'
                  }
                  fill="url(#linearGradient-28)"
                  x="0"
                  y="12"
                  width="44"
                  height="6"
                ></rect>
                <rect
                  id="block2-bar3"
                  className={
                    props.play ? styles.block2Bar3 : 'block2Bar3Static'
                  }
                  fill="url(#linearGradient-29)"
                  x="0"
                  y="24"
                  width="17"
                  height="6"
                ></rect>
                <rect
                  id="block2-bar4"
                  className={
                    props.play ? styles.block2Bar4 : 'block2Bar4Static'
                  }
                  fill="url(#linearGradient-30)"
                  x="0"
                  y="36"
                  width="34"
                  height="6"
                ></rect>
              </g>
            </g>
            <g id="block8" transform="translate(385.000000, 218.000000)">
              <image
                id="block8-back"
                xlinkHref="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Vo-SR4jzAy8AAAAAAAAAAABkARQnAQ"
                width="235px"
                height="235px"
                x="-55px"
                y="-40px"
              />
              <g id="block8-bars" transform="translate(54.000000, 40.000000)">
                <rect
                  id="block8-bar2"
                  className={
                    props.play ? styles.block8Bar2 : 'block8Bar2Static'
                  }
                  fill="url(#linearGradient-35)"
                  x="12"
                  y="0"
                  width="6"
                  height="33.75"
                ></rect>
                <rect
                  id="block8-bar1"
                  className={
                    props.play ? styles.block8Bar1 : 'block8Bar1Static'
                  }
                  fill="url(#linearGradient-36)"
                  x="0"
                  y="10"
                  width="6"
                  height="23.75"
                ></rect>
                <rect
                  id="block8-bar3"
                  className={
                    props.play ? styles.block8Bar3 : 'block8Bar3Static'
                  }
                  fill="url(#linearGradient-37)"
                  x="24"
                  y="17"
                  width="6"
                  height="16.875"
                ></rect>
              </g>
            </g>
            <g id="block5" transform="translate(0.000000, 218.000000)">
              <image
                id="block5Back"
                xlinkHref="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*KpT9QrpQ4ZgAAAAAAAAAAABkARQnAQ"
                width="268px"
                height="268px"
                x="-69px"
                y="-30px"
              />

              <g id="block5-circle" opacity="0.326241629">
                <use
                  fill="#F4E7FF"
                  fillRule="evenodd"
                  xlinkHref="#path-41"
                ></use>
              </g>
              <path
                id="block5-fan"
                className={props.play ? styles.block5Fan : 'block5FanStatic'}
                stroke="url(#block5-gradient)"
                strokeWidth="32.5"
                strokeDasharray="207.24"
                strokeDashoffset="193.5" //
                d="M65.5,49 C74.336556,49 81.5,56.3873016 81.5,65.5 C81.5,70.0566032 79.7089393,74.1818092 76.8132242,77.1677613"
              ></path>
            </g>
            <g id="block4" transform="translate(439.000000, 92.000000)">
              <image
                id="block4Back"
                xlinkHref="https://gw.alipayobjects.com/zos/antfincdn/p%24tXf8w8p5/location.png"
                width="260px"
                height="260px"
                x="-68px"
                y="-29px"
              />
              <g id="block4-front-back" mask="url(#mask-47)">
                <g transform="translate(64.994468, 55.918147) rotate(10.000000) translate(-64.994468, -55.918147) translate(-40.505532, -50.081853)">
                  <rect
                    id="block4-back-line-verti"
                    className={
                      props.play
                        ? styles.block4LineVerti
                        : 'block4LineVertiStatic'
                    }
                    fill="url(#linearGradient-50)"
                    x="64"
                    y="20"
                    width="4"
                    height="192"
                  ></rect>
                  <rect
                    id="block4-back-line-hori"
                    className={
                      props.play
                        ? styles.block4LineHori
                        : 'block4LineHoriStatic'
                    }
                    fill="url(#linearGradient-51)"
                    x="-1.36424205e-11"
                    y="151"
                    width="202"
                    height="4"
                  ></rect>
                  <path
                    id="block4-back-circle"
                    className={
                      props.play ? styles.block4Circle : 'block4CircleStatic'
                    }
                    stroke="url(#linearGradient-52)"
                    opacity="0.545549665"
                    strokeDasharray="132"
                    strokeWidth="5"
                    d="M111.248537,49.2552483 C107.33563,82.1953597 146.587514,105.361957 164.688607,98.6513257"
                  ></path>
                </g>
              </g>
            </g>
            <g id="blcok7" transform="translate(285.000000, 218.000000)">
              <image
                id="block7-back"
                xlinkHref="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*62E-Qa78EmMAAAAAAAAAAABkARQnAQ"
                width="235px"
                height="235px"
                x="-68px"
                y="-30px"
              />
              <path
                id="block7-curve"
                className={
                  props.play ? styles.block7Curve : 'block7CurveStatic'
                }
                strokeDasharray="90"
                d="M36,65 C52.5685425,65 66,51.5685425 66,35"
                stroke="#9655FE"
              ></path>
            </g>
            <g id="block3" transform="translate(285.000000, 64.000000)">
              <image
                id="block3Back"
                xlinkHref="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6vbkRapOLegAAAAAAAAAAABkARQnAQ"
                width="250px"
                height="250px"
                x="-48px"
                y="-22px"
              />
              <g id="block3-arcs" transform="translate(33.000000, 33.000000)">
                <circle
                  id="block3-arc-big"
                  className={
                    props.play ? styles.block3ArcBig : 'block3ArcBigStatic'
                  }
                  fill="none"
                  stroke="url(#arc-gradient1)"
                  filter="url(#arc-filter1)"
                  strokeWidth="18"
                  strokeMiterlimit="1"
                  cx="45"
                  cy="45"
                  r="35"
                  strokeDasharray="201"
                  strokeDashoffset="36"
                  transform="rotate(-180 45 45)"
                ></circle>
                <circle
                  id="block3-arc-small"
                  className={
                    props.play ? styles.block3ArcSmall : 'block3ArcSmallStatic'
                  }
                  fill="none"
                  stroke="url(#arc-gradient2)"
                  filter="url(#arc-filter2)"
                  strokeWidth="13"
                  strokeMiterlimit="1"
                  cx="45"
                  cy="45"
                  r="25"
                  strokeDasharray="123.6 1000"
                  strokeDashoffset="6"
                  transform="rotate(0 45 45)"
                ></circle>
              </g>
            </g>
            <g id="block1" transform="translate(63.000000, 96.000000)">
              <image
                id="block1Back"
                xlinkHref="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*AtjkSai-KUAAAAAAAAAAAABkARQnAQ"
                width="216px"
                height="216px"
                x="-48px"
                y="-21px"
              />
              <g
                id="block1-circles"
                transform="translate(27.000000, 34.000000)"
                onMouseEnter={mouseEnterBlock1}
                onMouseOut={mouseOutBlock1}
              >
                <circle
                  id="block1-circle1-shadow"
                  className={
                    props.play ? styles.block1Circle1 : 'block1Circle1Static'
                  }
                  filter="url(#filter-81)"
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="2.5"
                  cy="30"
                  r="3"
                ></circle>
                <circle
                  id="block1-circle1-object"
                  className={
                    props.play ? styles.block1Circle1 : 'block1Circle1Static'
                  }
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="2.5"
                  cy="30"
                  r="3"
                ></circle>

                <circle
                  id="block1-circle2-shadow"
                  className={
                    props.play ? styles.block1Circle2 : 'block1Circle2Static'
                  }
                  filter="url(#filter-83)"
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="18.5"
                  cy="15"
                  r="3"
                ></circle>
                <circle
                  id="block1-circle2-object"
                  className={
                    props.play ? styles.block1Circle2 : 'block1Circle2Static'
                  }
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="18.5"
                  cy="15"
                  r="3"
                ></circle>

                <circle
                  id="block1-circle3-shadow"
                  className={
                    props.play ? styles.block1Circle3 : 'block1Circle3Static'
                  }
                  filter="url(#filter-85)"
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="34.5"
                  cy="30"
                  r="3"
                ></circle>
                <circle
                  id="block1-circle3-object"
                  className={
                    props.play ? styles.block1Circle3 : 'block1Circle3Static'
                  }
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="34.5"
                  cy="30"
                  r="3"
                ></circle>

                <circle
                  id="block1-circle4-shadow"
                  className={
                    props.play ? styles.block1Circle4 : 'block1Circle4Static'
                  }
                  filter="url(#filter-87)"
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="50.5"
                  cy="45"
                  r="3"
                ></circle>
                <circle
                  id="block1-circle4-object"
                  className={
                    props.play ? styles.block1Circle4 : 'block1Circle4Static'
                  }
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="50.5"
                  cy="45"
                  r="3"
                ></circle>

                <circle
                  id="block1-circle5-shadow"
                  className={
                    props.play ? styles.block1Circle5 : 'block1Circle5Static'
                  }
                  filter="url(#filter-89)"
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="66.5"
                  cy="30"
                  r="3"
                ></circle>
                <circle
                  id="block1-circle5-object"
                  className={
                    props.play ? styles.block1Circle5 : 'block1Circle5Static'
                  }
                  stroke="#8D3FFD"
                  strokeWidth="1"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  cx="66.5"
                  cy="30"
                  r="3"
                ></circle>
              </g>
            </g>
          </g>
        </g>

        {/* <path
          onMouseEnter={mouseEnterBlock2}
          onMouseOut={mouseOutBlock2}
          d="M252,145 L252,245 L352,245 L352,145 Z"
          opacity="0"
          id="block2listener"
        ></path>
        <path
          onMouseEnter={mouseEnterBlock3}
          onMouseOut={mouseOutBlock3}
          d="M352,90 L352,245 L507,245 L507,90 Z"
          opacity="0"
          id="block3listener"
        ></path>
        <path
          onMouseEnter={mouseEnterBlock4}
          onMouseOut={mouseOutBlock4}
          d="M507,120 L507,245 L632,245 L632,120 Z"
          opacity="0"
          id="block4listener"
        ></path>
        <path
          onMouseEnter={mouseEnterBlock5}
          onMouseOut={mouseOutBlock5}
          d="M67,245 L67,378 L199,378 L199,245 Z"
          opacity="0"
          id="block5listener"
        ></path>
        <path
          onMouseEnter={mouseEnterBlock6}
          onMouseOut={mouseOutBlock6}
          d="M199,245 L199,398 L353,398 L353,245 Z"
          opacity="0"
          id="block6listener"
        ></path>
        <path
          onMouseEnter={mouseEnterBlock7}
          onMouseOut={mouseOutBlock7}
          d="M353,245 L353,345 L453,345 L453,245 Z"
          opacity="0"
          id="block7listener"
        ></path>
        <path
          onMouseEnter={mouseEnterBlock8}
          onMouseOut={mouseOutBlock8}
          d="M453,245 L453,380 L583,380 L583,245 Z"
          opacity="0"
          id="block8listener"
        ></path> */}
      </svg>
    </section>
  );
};

export default BannerSVG;
