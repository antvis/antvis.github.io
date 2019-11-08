import React from 'react';
import styles from './bannerSVG.module.less';

const BannerSVG = () => {
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
  const block6Dur = '3s';
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
    const circles = labels.map((label, i) => {
      const beginx = block6GridPositions[i].x;
      const beginy = block6GridPositions[i].y;
      const tox = block6CirclePositions[i].x;
      const toy = block6CirclePositions[i].y;
      const xvalues = `${beginx};${beginx};${tox};${tox};${beginx}`;
      const yvalues = `${beginy};${beginy};${toy};${toy};${beginy}`;
      const keySplines =
        '0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;';
      const keyTimes = '0;0.4;0.48;0.92;1';
      return (
        <circle
          id={`block6-circle-${label}`}
          fill={fills[i]}
          cx={beginx}
          cy={beginy}
          r={block6NodeRadius}
        >
          <animate
            attributeName="cx"
            begin="0s"
            dur={block6Dur}
            from={beginx}
            to={tox}
            values={xvalues}
            keySplines={keySplines}
            keyTimes={keyTimes}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            begin="0s"
            dur={block6Dur}
            from={beginy}
            to={toy}
            values={yvalues}
            keySplines={keySplines}
            keyTimes={keyTimes}
            repeatCount="indefinite"
          />
        </circle>
      );
    });
    return circles;
  };

  return (
    <section className={styles.wrapper}>
      <svg width="100%" height="auto" viewBox="-50 0 751 547" version="1.1">
        <defs>
          <linearGradient
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
            id="linearGradient-1"
          >
            <stop stopColor="#ECE7FC" offset="0%"></stop>
            <stop stopColor="#E7DFFC" stopOpacity="0" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            id="linearGradient-2"
          >
            <stop stopColor="#F0EFFD" offset="0%"></stop>
            <stop stopColor="#F9F8FF" offset="100%"></stop>
          </linearGradient>
          <rect id="path-3" x="311" y="445" width="24" height="24"></rect>
          <filter
            x="-275.0%"
            y="-225.0%"
            width="650.0%"
            height="650.0%"
            filterUnits="objectBoundingBox"
            id="filter-4"
          >
            <feOffset
              dx="0"
              dy="12"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="20"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.1925   0 0 0 0 0.273875   0 0 0 0 0.35  0 0 0 0.1 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <rect id="path-5" x="39" y="0" width="24" height="24"></rect>
          <filter
            x="-275.0%"
            y="-225.0%"
            width="650.0%"
            height="650.0%"
            filterUnits="objectBoundingBox"
            id="filter-6"
          >
            <feOffset
              dx="0"
              dy="12"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="20"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.1925   0 0 0 0 0.273875   0 0 0 0 0.35  0 0 0 0.1 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <linearGradient
            x1="78.4948196%"
            y1="100%"
            x2="0%"
            y2="100%"
            id="linearGradient-7"
          >
            <stop stopColor="#FBF6FF" offset="0%"></stop>
            <stop stopColor="#FAF9FC" offset="100%"></stop>
          </linearGradient>
          <path
            d="M0,0 L154,0 L154,152 C154,153.104569 153.104569,154 152,154 L2,154 C0.8954305,154 1.3527075e-16,153.104569 0,152 L0,0 L0,0 Z"
            id="path-8"
          ></path>
          <filter
            x="-65.9%"
            y="-51.0%"
            width="231.8%"
            height="231.8%"
            filterUnits="objectBoundingBox"
            id="filter-10"
          >
            <feOffset
              dx="0"
              dy="23"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="30"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.89233777   0 0 0 0 0.767282774   0 0 0 0 1  0 0 0 0.34298514 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <filter
            x="-71.4%"
            y="-56.5%"
            width="242.9%"
            height="242.9%"
            filterUnits="objectBoundingBox"
            id="filter-11"
          >
            <feGaussianBlur
              stdDeviation="30.5"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="39"
              dy="-12"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.60003278 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="linearGradient-12"
          >
            <stop stopColor="#FF91FD" offset="0%"></stop>
            <stop stopColor="#6D3AFF" offset="100%"></stop>
          </linearGradient>
          <path
            d="M77,111 C80.3137085,111 83,113.686292 83,117 C83,120.313708 80.3137085,123 77,123 C73.6862915,123 71,120.313708 71,117 C71,113.686292 73.6862915,111 77,111 Z M37,111 C40.3137085,111 43,113.686292 43,117 C43,120.313708 40.3137085,123 37,123 C33.6862915,123 31,120.313708 31,117 C31,113.686292 33.6862915,111 37,111 Z M117,111 C120.313708,111 123,113.686292 123,117 C123,120.313708 120.313708,123 117,123 C113.686292,123 111,120.313708 111,117 C111,113.686292 113.686292,111 117,111 Z M78,72 C81.3137085,72 84,74.6862915 84,78 C84,81.3137085 81.3137085,84 78,84 C74.6862915,84 72,81.3137085 72,78 C72,74.6862915 74.6862915,72 78,72 Z M37,71 C40.3137085,71 43,73.6862915 43,77 C43,80.3137085 40.3137085,83 37,83 C33.6862915,83 31,80.3137085 31,77 C31,73.6862915 33.6862915,71 37,71 Z M117,71 C120.313708,71 123,73.6862915 123,77 C123,80.3137085 120.313708,83 117,83 C113.686292,83 111,80.3137085 111,77 C111,73.6862915 113.686292,71 117,71 Z M77,31 C80.3137085,31 83,33.6862915 83,37 C83,40.3137085 80.3137085,43 77,43 C73.6862915,43 71,40.3137085 71,37 C71,33.6862915 73.6862915,31 77,31 Z M37,31 C40.3137085,31 43,33.6862915 43,37 C43,40.3137085 40.3137085,43 37,43 C33.6862915,43 31,40.3137085 31,37 C31,33.6862915 33.6862915,31 37,31 Z M117,31 C120.313708,31 123,33.6862915 123,37 C123,40.3137085 120.313708,43 117,43 C113.686292,43 111,40.3137085 111,37 C111,33.6862915 113.686292,31 117,31 Z"
            id="path-13"
          ></path>
          <filter
            x="-45.1%"
            y="-33.2%"
            width="190.2%"
            height="190.2%"
            filterUnits="objectBoundingBox"
            id="filter-14"
          >
            <feOffset
              dx="0"
              dy="11"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="12"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.453902939   0 0 0 0 0.109426346   0 0 0 0 0.921337183  0 0 0 0.421410621 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <radialGradient
            cx="-3.18731345%"
            cy="149.566259%"
            fx="-3.18731345%"
            fy="149.566259%"
            r="181.707698%"
            id="radialGradient-15"
          >
            <stop stopColor="#E565FF" offset="0%"></stop>
            <stop stopColor="#9C58FF" offset="58.1529772%"></stop>
            <stop stopColor="#7818FF" offset="100%"></stop>
          </radialGradient>
          <rect id="path-16" x="0" y="0" width="100" height="100"></rect>
          <filter
            x="-122.5%"
            y="-84.5%"
            width="345.0%"
            height="345.0%"
            filterUnits="objectBoundingBox"
            id="filter-17"
          >
            <feOffset
              dx="0"
              dy="38"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="34.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.751720252   0 0 0 0 0.56875   0 0 0 0 1  0 0 0 0.407096809 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <filter
            x="-105.0%"
            y="-67.0%"
            width="310.0%"
            height="310.0%"
            filterUnits="objectBoundingBox"
            id="filter-18"
          >
            <feGaussianBlur
              stdDeviation="33.5"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="5"
              dy="-4"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.232927229 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
          <rect id="path-19" x="0" y="0" width="54" height="6"></rect>
          <filter
            x="-75.0%"
            y="-675.0%"
            width="250.0%"
            height="1450.0%"
            filterUnits="objectBoundingBox"
            id="filter-20"
          >
            <feOffset
              dx="0"
              dy="0"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="13.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.866272087   0 0 0 0 0.767721037   0 0 0 0 1  0 0 0 0 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <rect id="path-21" x="0" y="12" width="54" height="6"></rect>
          <filter
            x="-75.0%"
            y="-675.0%"
            width="250.0%"
            height="1450.0%"
            filterUnits="objectBoundingBox"
            id="filter-22"
          >
            <feOffset
              dx="0"
              dy="0"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="13.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.866272087   0 0 0 0 0.767721037   0 0 0 0 1  0 0 0 0 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <rect id="path-23" x="0" y="24" width="54" height="6"></rect>
          <filter
            x="-75.0%"
            y="-675.0%"
            width="250.0%"
            height="1450.0%"
            filterUnits="objectBoundingBox"
            id="filter-24"
          >
            <feOffset
              dx="0"
              dy="0"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="13.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.866272087   0 0 0 0 0.767721037   0 0 0 0 1  0 0 0 0 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <rect id="path-25" x="0" y="36" width="54" height="6"></rect>
          <filter
            x="-75.0%"
            y="-675.0%"
            width="250.0%"
            height="1450.0%"
            filterUnits="objectBoundingBox"
            id="filter-26"
          >
            <feOffset
              dx="0"
              dy="0"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="13.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.866272087   0 0 0 0 0.767721037   0 0 0 0 1  0 0 0 0 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
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
          <path
            d="M0,0 L126,0 L126,124 C126,125.104569 125.104569,126 124,126 L2,126 C0.8954305,126 1.3527075e-16,125.104569 0,124 L0,0 L0,0 Z"
            id="path-31"
          ></path>
          <filter
            x="-73.8%"
            y="-59.5%"
            width="247.6%"
            height="247.6%"
            filterUnits="objectBoundingBox"
            id="filter-32"
          >
            <feOffset
              dx="0"
              dy="18"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="28"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.86820607   0 0 0 0 0.783993902   0 0 0 0 1  0 0 0 0.111505682 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <rect id="path-33" x="25" y="37" width="64" height="64" rx="2"></rect>
          <filter
            x="-56.2%"
            y="-56.2%"
            width="212.5%"
            height="212.5%"
            filterUnits="objectBoundingBox"
            id="filter-34"
          >
            <feGaussianBlur
              stdDeviation="33.5"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="5"
              dy="-4"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.232927229 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
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
          <path
            d="M2,0 L131,0 L131,0 L131,131 L2,131 C0.8954305,131 1.3527075e-16,130.104569 0,129 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"
            id="path-38"
          ></path>
          <filter
            x="-93.5%"
            y="-64.5%"
            width="287.0%"
            height="287.0%"
            filterUnits="objectBoundingBox"
            id="filter-39"
          >
            <feOffset
              dx="0"
              dy="38"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="34.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.751720252   0 0 0 0 0.56875   0 0 0 0 1  0 0 0 0.407096809 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <filter
            x="-80.2%"
            y="-51.1%"
            width="260.3%"
            height="260.3%"
            filterUnits="objectBoundingBox"
            id="filter-40"
          >
            <feGaussianBlur
              stdDeviation="33.5"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="5"
              dy="-4"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.232927229 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
          <circle id="path-41" cx="65.5" cy="65.5" r="32.5"></circle>
          <filter
            x="-21.5%"
            y="-21.5%"
            width="143.1%"
            height="143.1%"
            filterUnits="objectBoundingBox"
            id="filter-42"
          >
            <feGaussianBlur
              stdDeviation="10"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="8"
              dy="-5"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.717766608 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
          <linearGradient
            x1="68.75%"
            y1="31.25%"
            x2="0.75304186%"
            y2="99.2469581%"
            id="linearGradient-43"
          >
            <stop stopColor="#FFD341" offset="0%"></stop>
            <stop
              stopColor="#FFDBB8"
              stopOpacity="0.882402753"
              offset="100%"
            ></stop>
          </linearGradient>
          <path
            d="M66,33.0022767 L66.001,65 L98,65 C98,47.5036191 84.1254502,33.2868724 66.9039859,33.0042871 L66.3811097,33 C66.2538963,33 66.1268583,33.0007603 66,33.0022767 Z"
            id="path-44"
          ></path>
          <filter
            x="-68.8%"
            y="-34.4%"
            width="237.5%"
            height="237.5%"
            filterUnits="objectBoundingBox"
            id="filter-45"
          >
            <feOffset
              dx="0"
              dy="11"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="5.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.648182595   0 0 0 0 0.388910061   0 0 0 0 1  0 0 0 0.649939904 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <path
            d="M0,0 L124,0 C125.104569,-2.02906125e-16 126,0.8954305 126,2 L126,124 C126,125.104569 125.104569,126 124,126 L0,126 L0,126 L0,0 Z"
            id="path-46"
          ></path>
          <filter
            x="-97.2%"
            y="-67.1%"
            width="294.4%"
            height="294.4%"
            filterUnits="objectBoundingBox"
            id="filter-48"
          >
            <feOffset
              dx="0"
              dy="38"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="34.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.751720252   0 0 0 0 0.56875   0 0 0 0 1  0 0 0 0.407096809 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <filter
            x="-83.3%"
            y="-53.2%"
            width="266.7%"
            height="266.7%"
            filterUnits="objectBoundingBox"
            id="filter-49"
          >
            <feGaussianBlur
              stdDeviation="33.5"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="5"
              dy="-4"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.232927229 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
          <linearGradient
            x1="50%"
            y1="3.85364977%"
            x2="50%"
            y2="89.6029946%"
            id="linearGradient-50"
          >
            <stop stopColor="#944AFB" offset="0%"></stop>
            <stop stopColor="#CD91FF" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="100%"
            y1="50%"
            x2="0%"
            y2="50%"
            id="linearGradient-51"
          >
            <stop stopColor="#A260FF" offset="0%"></stop>
            <stop stopColor="#CE95FF" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="85.7700904%"
            y1="92.3103523%"
            x2="0%"
            y2="34.9608269%"
            id="linearGradient-52"
          >
            <stop stopColor="#944AFB" offset="0%"></stop>
            <stop stopColor="#BB6BFF" offset="100%"></stop>
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
          <filter
            x="-92.5%"
            y="-46.0%"
            width="285.0%"
            height="248.0%"
            filterUnits="objectBoundingBox"
            id="filter-55"
          >
            <feOffset
              dx="0"
              dy="14"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="10"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.345526743   0 0 0 0 0.0645130836   0 0 0 0 0.726845562  0 0 0 0.388002622 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <rect id="path-56" x="0" y="0" width="100" height="100"></rect>
          <filter
            x="-122.5%"
            y="-84.5%"
            width="345.0%"
            height="345.0%"
            filterUnits="objectBoundingBox"
            id="filter-57"
          >
            <feOffset
              dx="0"
              dy="38"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="34.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.751720252   0 0 0 0 0.56875   0 0 0 0 1  0 0 0 0.407096809 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <filter
            x="-105.0%"
            y="-67.0%"
            width="310.0%"
            height="310.0%"
            filterUnits="objectBoundingBox"
            id="filter-58"
          >
            <feGaussianBlur
              stdDeviation="33.5"
              in="SourceAlpha"
              result="shadowBlurInner1"
            ></feGaussianBlur>
            <feOffset
              dx="5"
              dy="-4"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            ></feOffset>
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.232927229 0"
              type="matrix"
              in="shadowInnerInner1"
            ></feColorMatrix>
          </filter>
          <linearGradient
            x1="61.28125%"
            y1="0%"
            x2="38.71875%"
            y2="100%"
            id="linearGradient-59"
          >
            <stop stopColor="#FFFFFF" offset="0%"></stop>
            <stop stopColor="#FEFEFE" offset="100%"></stop>
          </linearGradient>
          <rect id="path-60" x="32" y="10" width="38" height="80" rx="6"></rect>
          <filter
            x="-223.7%"
            y="-73.8%"
            width="547.4%"
            height="312.5%"
            filterUnits="objectBoundingBox"
            id="filter-62"
          >
            <feOffset
              dx="0"
              dy="26"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="24"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.643049592   0 0 0 0 0.24772541   0 0 0 0 0.82178442  0 0 0 0.199874344 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <linearGradient
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="linearGradient-63"
          >
            <stop stopColor="#FFFFFF" offset="0%"></stop>
            <stop stopColor="#FEFEFE" offset="100%"></stop>
          </linearGradient>
          <path
            d="M2,0 L152,0 C153.104569,-2.02906125e-16 154,0.8954305 154,2 L154,154 L154,154 L0,154 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"
            id="path-64"
          ></path>
          <filter
            x="-55.2%"
            y="-38.3%"
            width="210.4%"
            height="210.4%"
            filterUnits="objectBoundingBox"
            id="filter-65"
          >
            <feOffset
              dx="0"
              dy="26"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="24"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.643049592   0 0 0 0 0.24772541   0 0 0 0 0.82178442  0 0 0 0.199874344 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <path
            d="M43.2723795,0.00589474289 L44,0 C68.300529,0 88,19.699471 88,44 C88,68.0575237 68.6925485,87.6055505 44.7276205,87.9941053 L44.0036447,88 L44.0036062,70.9954439 C44.1687062,70.9984769 44.3341752,71 44.5,71 C59.1355459,71 71,59.1355459 71,44.5 C71,29.8644541 59.1355459,18 44.5,18 C30.0312859,18 18.2708479,29.595508 18.0046115,44.0005983 L0.00364468103,44 L0.003,44.436 L0,44 C0,19.9424763 19.3074515,0.394449526 43.2723795,0.00589474289 L44,0 Z"
            id="path-66"
          ></path>
          <filter
            x="-47.2%"
            y="-34.7%"
            width="194.3%"
            height="194.3%"
            filterUnits="objectBoundingBox"
            id="filter-67"
          >
            <feOffset
              dx="0"
              dy="11"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="12"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.453902939   0 0 0 0 0.109426346   0 0 0 0 0.921337183  0 0 0 0.421410621 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <path
            d="M44.5291785,75.9957129 L44,76 C26.326888,76 12,61.673112 12,44 C12,26.5036191 26.0417829,12.2868724 43.4708215,12.0042871 L43.9973493,12 L43.9975007,24.8955224 L43.6827642,24.8980818 C33.2777977,25.0667895 24.8949899,33.5543995 24.8949899,44 C24.8949899,54.5511116 33.4480027,63.1044776 43.9986786,63.1044776 C54.5493546,63.1044776 63.1023673,54.5511116 63.1023673,44 L75.9973493,44 L75.997612,43.6694925 L76,44 C76,61.4963809 61.9582171,75.7131276 44.5291785,75.9957129 Z"
            id="path-68"
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
            x="-32.8%"
            y="-23.4%"
            width="165.6%"
            height="165.6%"
            filterUnits="objectBoundingBox"
            id="filter-69"
          >
            <feOffset
              dx="0"
              dy="6"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="6"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.490799576   0 0 0 0 0.194812378   0 0 0 0 0.892436594  0 0 0 0.388002622 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <circle id="path-70" cx="2" cy="108" r="2"></circle>
          <filter
            x="-2875.0%"
            y="-2000.0%"
            width="5850.0%"
            height="5850.0%"
            filterUnits="objectBoundingBox"
            id="filter-71"
          >
            <feOffset
              dx="0"
              dy="35"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="32.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.490799576   0 0 0 0 0.194812378   0 0 0 0 0.892436594  0 0 0 0.3046875 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <circle id="path-72" cx="108" cy="108" r="2"></circle>
          <filter
            x="-2875.0%"
            y="-2000.0%"
            width="5850.0%"
            height="5850.0%"
            filterUnits="objectBoundingBox"
            id="filter-73"
          >
            <feOffset
              dx="0"
              dy="35"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="32.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.490799576   0 0 0 0 0.194812378   0 0 0 0 0.892436594  0 0 0 0.3046875 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <circle id="path-74" cx="2" cy="2" r="2"></circle>
          <filter
            x="-2875.0%"
            y="-2000.0%"
            width="5850.0%"
            height="5850.0%"
            filterUnits="objectBoundingBox"
            id="filter-75"
          >
            <feOffset
              dx="0"
              dy="35"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="32.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.490799576   0 0 0 0 0.194812378   0 0 0 0 0.892436594  0 0 0 0.3046875 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <circle id="path-76" cx="108" cy="2" r="2"></circle>
          <filter
            x="-2875.0%"
            y="-2000.0%"
            width="5850.0%"
            height="5850.0%"
            filterUnits="objectBoundingBox"
            id="filter-77"
          >
            <feOffset
              dx="0"
              dy="35"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="32.5"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.490799576   0 0 0 0 0.194812378   0 0 0 0 0.892436594  0 0 0 0.3046875 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <path
            d="M2,0 L122,0 L122,0 L122,120 C122,121.104569 121.104569,122 120,122 L0,122 L0,122 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"
            id="path-78"
          ></path>
          <filter
            x="-69.7%"
            y="-48.4%"
            width="239.3%"
            height="239.3%"
            filterUnits="objectBoundingBox"
            id="filter-79"
          >
            <feOffset
              dx="0"
              dy="26"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feGaussianBlur
              stdDeviation="24"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0.643049592   0 0 0 0 0.24772541   0 0 0 0 0.82178442  0 0 0 0.199874344 0"
              type="matrix"
              in="shadowBlurOuter1"
            ></feColorMatrix>
          </filter>
          <circle id="path-80" cx="2.5" cy="8.5" r="2.5"></circle>
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
          <circle id="path-82" cx="18.5" cy="28.5" r="2.5"></circle>
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
          <circle id="path-84" cx="34.5" cy="13.5" r="2.5"></circle>
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
          <circle id="path-86" cx="50.5" cy="52.5" r="2.5"></circle>
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
          <circle id="path-88" cx="66.5" cy="2.5" r="2.5"></circle>
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
            <stop stop-opacity="1" stop-color="#FFDBB8" offset="0%" />
            <stop stop-opacity="1" stop-color="#FFD341" offset="100%" />
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
          id="Ant-V-Topbar-Hover-Menu"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Ant-V-PC-定稿-1101"
            transform="translate(-711.000000, -100.000000)"
          >
            <g id="banner-svg" transform="translate(779.000000, 127.000000)">
              <g id="backs" transform="translate(209.000000, 0.000000)">
                <g transform="translate(-90.000000, -150.000000)">
                  <rect
                    id="back-lefttop-small"
                    stroke="#EBE1FB"
                    opacity="0.503348214"
                    x="257.5"
                    y="145.5"
                    width="206"
                    height="172"
                  ></rect>
                </g>
                <g transform="translate(-320.000000, -180.000000)">
                  <rect
                    id="back-righttop"
                    stroke="#EBE1FB"
                    opacity="0.293619792"
                    x="235.5"
                    y="0.5"
                    width="527"
                    height="451"
                  ></rect>
                </g>
                <g transform="translate(-285.000000, -172.000000)">
                  <path
                    id="back-fan"
                    d="M0.500015456,334.512545 L0.507890624,586.5 L252.499521,586.5 C252.235652,448.831454 143.017682,336.763448 7.1430388,334.533878 L3.01314849,334.5 C2.17494966,334.5 1.33723221,334.504183 0.500015456,334.512545 Z"
                    stroke="#EBE1FB"
                    opacity="0.503348214"
                  ></path>
                </g>
                <path
                  d="M8,464 L8,472 L0,472 L0,464 L8,464 Z M56,464 L56,472 L48,472 L48,464 L56,464 Z M24,464 L24,472 L16,472 L16,464 L24,464 Z M40,464 L40,472 L32,472 L32,464 L40,464 Z M120,464 L120,472 L112,472 L112,464 L120,464 Z M88,464 L88,472 L80,472 L80,464 L88,464 Z M104,464 L104,472 L96,472 L96,464 L104,464 Z M72,464 L72,472 L64,472 L64,464 L72,464 Z M56,448 L56,456 L48,456 L48,448 L56,448 Z M24,448 L24,456 L16,456 L16,448 L24,448 Z M40,448 L40,456 L32,456 L32,448 L40,448 Z M8,448 L8,456 L0,456 L0,448 L8,448 Z M120,448 L120,456 L112,456 L112,448 L120,448 Z M88,448 L88,456 L80,456 L80,448 L88,448 Z M104,448 L104,456 L96,456 L96,448 L104,448 Z M72,448 L72,456 L64,456 L64,448 L72,448 Z M56,432 L56,440 L48,440 L48,432 L56,432 Z M24,432 L24,440 L16,440 L16,432 L24,432 Z M40,432 L40,440 L32,440 L32,432 L40,432 Z M8,432 L8,440 L0,440 L0,432 L8,432 Z M120,432 L120,440 L112,440 L112,432 L120,432 Z M88,432 L88,440 L80,440 L80,432 L88,432 Z M104,432 L104,440 L96,440 L96,432 L104,432 Z M72,432 L72,440 L64,440 L64,432 L72,432 Z M120,416 L120,424 L112,424 L112,416 L120,416 Z M88,416 L88,424 L80,424 L80,416 L88,416 Z M104,416 L104,424 L96,424 L96,416 L104,416 Z M72,416 L72,424 L64,424 L64,416 L72,416 Z M56,416 L56,424 L48,424 L48,416 L56,416 Z M8,416 L8,424 L0,424 L0,416 L8,416 Z M40,416 L40,424 L32,424 L32,416 L40,416 Z M24,416 L24,424 L16,424 L16,416 L24,416 Z M56,400 L56,408 L48,408 L48,400 L56,400 Z M24,400 L24,408 L16,408 L16,400 L24,400 Z M40,400 L40,408 L32,408 L32,400 L40,400 Z M8,400 L8,408 L0,408 L0,400 L8,400 Z M120,400 L120,408 L112,408 L112,400 L120,400 Z M88,400 L88,408 L80,408 L80,400 L88,400 Z M104,400 L104,408 L96,408 L96,400 L104,400 Z M72,400 L72,408 L64,408 L64,400 L72,400 Z M24,384 L24,392 L16,392 L16,384 L24,384 Z M40,384 L40,392 L32,392 L32,384 L40,384 Z M8,384 L8,392 L0,392 L0,384 L8,384 Z M120,384 L120,392 L112,392 L112,384 L120,384 Z M88,384 L88,392 L80,392 L80,384 L88,384 Z M104,384 L104,392 L96,392 L96,384 L104,384 Z M72,384 L72,392 L64,392 L64,384 L72,384 Z M56,384 L56,392 L48,392 L48,384 L56,384 Z M56,368 L56,376 L48,376 L48,368 L56,368 Z M120,368 L120,376 L112,376 L112,368 L120,368 Z M88,368 L88,376 L80,376 L80,368 L88,368 Z M104,368 L104,376 L96,376 L96,368 L104,368 Z M72,368 L72,376 L64,376 L64,368 L72,368 Z M24,368 L24,376 L16,376 L16,368 L24,368 Z M40,368 L40,376 L32,376 L32,368 L40,368 Z M8,368 L8,376 L0,376 L0,368 L8,368 Z M88,352 L88,360 L80,360 L80,352 L88,352 Z M104,352 L104,360 L96,360 L96,352 L104,352 Z M120,352 L120,360 L112,360 L112,352 L120,352 Z M8,352 L8,360 L0,360 L0,352 L8,352 Z M40,352 L40,360 L32,360 L32,352 L40,352 Z M24,352 L24,360 L16,360 L16,352 L24,352 Z M56,352 L56,360 L48,360 L48,352 L56,352 Z M72,352 L72,360 L64,360 L64,352 L72,352 Z"
                  id="back-grids"
                  fill="url(#linearGradient-1)"
                  opacity="0.53218006"
                ></path>
                <rect
                  id="back-rect"
                  fill="url(#linearGradient-2)"
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
                  id="back-rect"
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
                <g id="back-rect"></g>
                <g id="back-rect-top">
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
              </g>
              <g id="block6" transform="translate(131.000000, 218.000000)">
                <mask id="mask-9" fill="white">
                  <use xlinkHref="#path-8"></use>
                </mask>
                <g id="block6-back-white" opacity="0.966843378">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-10)"
                    xlinkHref="#path-8"
                  ></use>
                  <use
                    fill="url(#linearGradient-7)"
                    fillRule="evenodd"
                    xlinkHref="#path-8"
                  ></use>
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-11)"
                    xlinkHref="#path-8"
                  ></use>
                </g>
                <g id="block6-nodes">
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="3s"
                    type="rotate"
                    from="0 77.5 77.5"
                    to="180 77.5 77.5"
                    values="0 77.5 77.5;0 77.5 77.5;90 77.5 77.5;90 77.5 77.5;0 77.5 77.5"
                    keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                    keyTimes="0;0.4;0.48;0.92;1"
                    calcMode="spline"
                    repeatCount="indefinite"
                  />
                  {getBlock6Circles()}
                </g>
              </g>
              <g id="block2" transform="translate(185.000000, 118.000000)">
                <g id="block2-back-purple">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-17)"
                    xlinkHref="#path-16"
                  ></use>
                  <use
                    fill="url(#radialGradient-15)"
                    fillRule="evenodd"
                    xlinkHref="#path-16"
                  ></use>
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-18)"
                    xlinkHref="#path-16"
                  ></use>
                </g>
                <path
                  d="M14,20 L14,80 L88,80 L88,81 L13,81 L13,20 L14,20 Z"
                  id="block2-axis"
                  fill="#FEFEFE"
                  opacity="0.15"
                ></path>
                <g
                  id="block2-back-bars"
                  transform="translate(25.000000, 27.000000)"
                  opacity="0.152134487"
                >
                  <g id="block2-back-bar1">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-20)"
                      xlinkHref="#path-19"
                    ></use>
                    <use
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      xlinkHref="#path-19"
                    ></use>
                  </g>
                  <g id="block2-back-bar2">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-22)"
                      xlinkHref="#path-21"
                    ></use>
                    <use
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      xlinkHref="#path-21"
                    ></use>
                  </g>
                  <g id="block2-back-bar3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-24)"
                      xlinkHref="#path-23"
                    ></use>
                    <use
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      xlinkHref="#path-23"
                    ></use>
                  </g>
                  <g id="block2-back-bar4">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-26)"
                      xlinkHref="#path-25"
                    ></use>
                    <use
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      xlinkHref="#path-25"
                    ></use>
                  </g>
                </g>
                <g id="block2-bars" transform="translate(25.000000, 27.000000)">
                  <rect
                    id="block2-bar1"
                    fill="url(#linearGradient-27)"
                    x="0"
                    y="0"
                    width="27"
                    height="6"
                  >
                    <animate
                      attributeName="width"
                      from="27"
                      to="55"
                      begin="0s"
                      dur="3.5s"
                      values="27;27;55;55;27"
                      keySplines="0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.4;0.5;0.9;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    id="block2-bar2"
                    fill="url(#linearGradient-28)"
                    x="0"
                    y="12"
                    width="44"
                    height="6"
                  >
                    <animate
                      attributeName="width"
                      from="44"
                      to="10"
                      begin="0s"
                      dur="3.5s"
                      values="44;44;10;10;44"
                      keySplines="0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.4;0.5;0.9;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    id="block2-bar3"
                    fill="url(#linearGradient-29)"
                    x="0"
                    y="24"
                    width="17"
                    height="6"
                  >
                    <animate
                      attributeName="width"
                      from="17"
                      to="50"
                      begin="0s"
                      dur="3.5s"
                      values="17;17;50;50;17"
                      keySplines="0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.4;0.5;0.9;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    id="block2-bar4"
                    fill="url(#linearGradient-30)"
                    x="0"
                    y="36"
                    width="34"
                    height="6"
                  >
                    <animate
                      attributeName="width"
                      from="17"
                      to="50"
                      begin="0s"
                      dur="3.5s"
                      values="34;34;5;5;34"
                      keySplines="0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.4;0.5;0.9;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              </g>
              <g id="block8" transform="translate(385.000000, 218.000000)">
                <g id="block8-back-big-white">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-32)"
                    xlinkHref="#path-31"
                  ></use>
                  <use
                    fill="#FFFFFF"
                    fillRule="evenodd"
                    xlinkHref="#path-31"
                  ></use>
                </g>
                <g id="block8-back-purple">
                  <use
                    fill="url(#radialGradient-15)"
                    fillRule="evenodd"
                    xlinkHref="#path-33"
                  ></use>
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-34)"
                    xlinkHref="#path-33"
                  ></use>
                </g>
                <rect
                  id="block8-back-white"
                  stroke="#F0E8FC"
                  fill="#FFFFFF"
                  x="37.5"
                  y="25.5"
                  width="63"
                  height="63"
                ></rect>
                <g id="block8-bars" transform="translate(54.000000, 40.000000)">
                  <rect
                    id="block8-bar2"
                    fill="url(#linearGradient-35)"
                    x="12"
                    y="0"
                    width="6"
                    height="33.75"
                  >
                    <animate
                      attributeName="height"
                      from="33.75"
                      to="10"
                      begin="0s"
                      dur="3s"
                      values="33.75;10;33.75"
                      keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.5;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      from="10"
                      to="23.75"
                      begin="0s"
                      dur="3s"
                      values="0;23.75;0"
                      keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.5;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    id="block8-bar1"
                    fill="url(#linearGradient-36)"
                    x="0"
                    y="10"
                    width="6"
                    height="23.75"
                  >
                    <animate
                      attributeName="height"
                      from="23.75"
                      to="30.75"
                      begin="0s"
                      dur="3s"
                      values="23.75;30.75;23.75"
                      keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.5;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      from="10"
                      to="3"
                      begin="0s"
                      dur="3s"
                      values="10;3;10"
                      keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.5;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    id="block8-bar3"
                    fill="url(#linearGradient-37)"
                    x="24"
                    y="17"
                    width="6"
                    height="16.875"
                  >
                    <animate
                      attributeName="height"
                      from="16.875"
                      to="26.875"
                      begin="0s"
                      dur="3s"
                      values="16.875;26.875;16.875"
                      keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.5;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      from="17"
                      to="7"
                      begin="0s"
                      dur="3s"
                      values="17;7;17"
                      keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                      keyTimes=" 0;0.5;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              </g>
              <g id="blcok5" transform="translate(0.000000, 218.000000)">
                <g id="block5-back-purple">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-39)"
                    xlinkHref="#path-38"
                  ></use>
                  <use
                    fill="url(#radialGradient-15)"
                    fillRule="evenodd"
                    xlinkHref="#path-38"
                  ></use>
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-40)"
                    xlinkHref="#path-38"
                  ></use>
                </g>
                <g id="block5-grids" opacity="0.402436756" fill="#DDBAFF">
                  <rect
                    id="矩形"
                    opacity="0.302711124"
                    x="65"
                    y="0"
                    width="1"
                    height="131"
                  ></rect>
                  <rect
                    id="矩形"
                    opacity="0.302711124"
                    x="0"
                    y="65"
                    width="131"
                    height="1"
                  ></rect>
                  <rect
                    id="矩形备份-26"
                    opacity="0.302711124"
                    x="0"
                    y="98"
                    width="131"
                    height="1"
                  ></rect>
                  <rect
                    id="矩形"
                    opacity="0.302711124"
                    x="0"
                    y="32"
                    width="131"
                    height="1"
                  ></rect>
                  <rect
                    id="矩形备份-24"
                    opacity="0.302711124"
                    x="98"
                    y="0"
                    width="1"
                    height="131"
                  ></rect>
                  <rect
                    id="矩形备份-25"
                    opacity="0.302711124"
                    x="32"
                    y="0"
                    width="1"
                    height="131"
                  ></rect>
                </g>
                <g id="block5-circle" opacity="0.326241629">
                  <use
                    fill="#F4E7FF"
                    fillRule="evenodd"
                    xlinkHref="#path-41"
                  ></use>
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-42)"
                    xlinkHref="#path-41"
                  ></use>
                </g>
                <g id="block5-fan-small">
                  <path
                    id="block5-fan"
                    stroke="url(#block5-gradient)"
                    strokeWidth="32.5"
                    strokeDasharray="207.24"
                    strokeDashoffset="100" //
                    d="M65.5,49 C74.336556,49 81.5,56.3873016 81.5,65.5 C81.5,70.0566032 79.7089393,74.1818092 76.8132242,77.1677613"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="195"
                      to="195"
                      dur="5s"
                      values="195;195;0;0;195"
                      keySplines="
                                  0.1 0.8 0.2 1;
                                  0.1 0.8 0.2 1;
                                  0.1 0.8 0.2 1;
                                  0.1 0.8 0.2 1;"
                      keyTimes="0;0.35;0.5;0.85;1"
                      calcMode="spline"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
              <g id="block4" transform="translate(439.000000, 92.000000)">
                <mask id="mask-47" fill="white">
                  <use xlinkHref="#path-46"></use>
                </mask>
                <g id="block4-back-purple">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-48)"
                    xlinkHref="#path-46"
                  ></use>
                  <use
                    fill="url(#radialGradient-15)"
                    fillRule="evenodd"
                    xlinkHref="#path-46"
                  ></use>
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-49)"
                    xlinkHref="#path-46"
                  ></use>
                </g>
                <g id="block4-front-back" mask="url(#mask-47)">
                  <g transform="translate(64.994468, 55.918147) rotate(10.000000) translate(-64.994468, -55.918147) translate(-40.505532, -50.081853)">
                    <rect
                      id="block4-back-line-verti"
                      fill="url(#linearGradient-50)"
                      x="64"
                      y="180"
                      width="4"
                      height="192"
                    >
                      <animate
                        attributeName="height"
                        from="20"
                        to="192"
                        begin="0s"
                        dur="2s"
                        values="20;192"
                        keySplines=" 0.1 0.8 0.2 1; "
                        keyTimes=" 0;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y"
                        from="180"
                        to="20"
                        begin="0s"
                        dur="2s"
                        values="180;20"
                        keySplines=" 0.1 0.8 0.2 1; "
                        keyTimes=" 0;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect
                      id="block4-back-line-hori"
                      fill="url(#linearGradient-51)"
                      x="-1.36424205e-11"
                      y="151"
                      width="202"
                      height="4"
                    >
                      <animate
                        attributeName="width"
                        from="20"
                        to="202"
                        begin="0s"
                        dur="2s"
                        values="20;202"
                        keySplines=" 0.1 0.8 0.2 1; "
                        keyTimes=" 0;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <path
                      id="block4-back-circle"
                      stroke="url(#linearGradient-52)"
                      opacity="0.545549665"
                      strokeDasharray="132"
                      strokeWidth="5"
                      d="M111.248537,49.2552483 C107.33563,82.1953597 146.587514,105.361957 164.688607,98.6513257"
                    >
                      <animate
                        attributeName="strokeDashoffset"
                        from="132"
                        to="132"
                        dur="2s"
                        values="132;0"
                        keySplines="0.1 0.8 0.2 1;"
                        keyTimes="0;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                </g>
                <g id="blockk4-pin" mask="url(#mask-47)">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-55)"
                    xlinkHref="#path-54"
                  ></use>
                  <use
                    fill="url(#linearGradient-53)"
                    fillRule="evenodd"
                    xlinkHref="#path-54"
                  ></use>
                </g>
              </g>
              <g id="blcok7" transform="translate(285.000000, 218.000000)">
                <g id="block7-back-purple">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-57)"
                    xlinkHref="#path-56"
                  ></use>
                  <use
                    fill="url(#radialGradient-15)"
                    fillRule="evenodd"
                    xlinkHref="#path-56"
                  ></use>
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-58)"
                    xlinkHref="#path-56"
                  ></use>
                </g>
                <path
                  d="M0.501347558,99.5 L99.4968058,99.5 L99.5000192,99.1328902 L99.5,99.1372666 C99.5,72.2776127 77.3400243,50.5 50,50.5 C22.6599757,50.5 0.5,72.2776127 0.5,99.1372666 C0.5,99.2582303 0.50044932,99.3791419 0.501347558,99.5 Z"
                  id="block7-back-fan2"
                  stroke="#FFFFFF"
                  opacity="0.0636151414"
                ></path>
                <path
                  d="M99.4968058,0.5 L0.501347558,0.5 C0.50044932,0.620858103 0.5,0.741769731 0.5,0.862733364 C0.5,27.7223873 22.6599757,49.5 50,49.5 C77.3400243,49.5 99.5,27.7223873 99.5,0.862733364 L99.5000192,0.867109806 L99.4968058,0.5 Z"
                  id="block7-back-fan1"
                  stroke="#FFFFFF"
                  opacity="0.0636151414"
                ></path>
                <mask id="mask-61" fill="white">
                  <use xlinkHref="#path-60"></use>
                </mask>
                <g id="block7-phone">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-62)"
                    xlinkHref="#path-60"
                  ></use>
                  <use
                    fill="url(#linearGradient-59)"
                    fillRule="evenodd"
                    xlinkHref="#path-60"
                  ></use>
                </g>
                <rect
                  id="block7-yaxis"
                  fill="#DEC9F9"
                  mask="url(#mask-61)"
                  x="34"
                  y="33"
                  width="1"
                  height="34"
                ></rect>
                <rect
                  id="block7-xaxis"
                  fill="#DEC9F9"
                  mask="url(#mask-61)"
                  transform="translate(51.000000, 66.500000) scale(1, -1) translate(-51.000000, -66.500000) "
                  x="34"
                  y="66"
                  width="34"
                  height="1"
                ></rect>
                <path
                  id="block7-curve"
                  strokeDasharray="90"
                  d="M36,65 C52.5685425,65 66,51.5685425 66,35"
                  stroke="#9655FE"
                >
                  <animate
                    attributeName="strokeDashoffset"
                    from="90"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              <g id="block3" transform="translate(285.000000, 64.000000)">
                <g id="block3-back-white2" opacity="0.693987165">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-65)"
                    xlinkHref="#path-64"
                  ></use>
                  <use
                    fill="url(#linearGradient-63)"
                    fillRule="evenodd"
                    xlinkHref="#path-64"
                  ></use>
                </g>
                <rect
                  fill="url(#linearGradient-63)"
                  id="block3-back-small-rect1"
                  x="0"
                  y="0"
                  width="77"
                  height="77"
                ></rect>
                <rect
                  fill="#f8f3ff"
                  opacity="0.8"
                  id="block3-back-small-rect2"
                  x="77"
                  y="77"
                  width="77"
                  height="77"
                ></rect>
                <g id="block3-arcs" transform="translate(33.000000, 33.000000)">
                  <circle
                    id="block3-arc-big"
                    fill="none"
                    stroke="url(#arc-gradient1)"
                    filter="url(#arc-filter1)"
                    strokeWidth="18"
                    strokeMiterlimit="1"
                    cx="45"
                    cy="45"
                    r="35"
                    strokeDasharray="201"
                    strokeDashoffset="50"
                    transform="rotate(-180 45 45)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      begin="0s"
                      dur="5s"
                      from="36"
                      to="36"
                      values="36;36;10;10;36"
                      keySplines="
                                0.1 0.8 0.2 1;
                                0.1 0.8 0.2 1;"
                      keyTimes="0;0.35;0.5;0.85;1"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    id="block3-arc-small"
                    fill="none"
                    stroke="url(#arc-gradient2)"
                    filter="url(#arc-filter2)"
                    strokeWidth="13"
                    strokeMiterlimit="1"
                    cx="45"
                    cy="45"
                    r="25"
                    strokeDasharray="123.6 1000"
                    strokeDashoffset="100"
                    transform="rotate(0 45 45)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      begin="0s"
                      dur="5s"
                      from="6"
                      to="6"
                      values="6;6;30;30;6"
                      keySplines="
                                0.1 0.8 0.2 1;
                                0.1 0.8 0.2 1;"
                      keyTimes="0;0.35;0.5;0.85;1"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
                <rect
                  id="block3-back-white"
                  stroke="#7727F4"
                  opacity="0.07"
                  x="24"
                  y="24"
                  width="106"
                  height="106"
                ></rect>
                <g id="block3-dots" transform="translate(22.000000, 22.000000)">
                  <g id="椭圆形备份-30">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-71)"
                      xlinkHref="#path-70"
                    ></use>
                    <use
                      fill="#E8BFFF"
                      fillRule="evenodd"
                      xlinkHref="#path-70"
                    ></use>
                  </g>
                  <g id="椭圆形备份-30">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-73)"
                      xlinkHref="#path-72"
                    ></use>
                    <use
                      fill="#E8BFFF"
                      fillRule="evenodd"
                      xlinkHref="#path-72"
                    ></use>
                  </g>
                  <g id="椭圆形备份-30">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-75)"
                      xlinkHref="#path-74"
                    ></use>
                    <use
                      fill="#E8BFFF"
                      fillRule="evenodd"
                      xlinkHref="#path-74"
                    ></use>
                  </g>
                  <g id="椭圆形备份-30">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-77)"
                      xlinkHref="#path-76"
                    ></use>
                    <use
                      fill="#E8BFFF"
                      fillRule="evenodd"
                      xlinkHref="#path-76"
                    ></use>
                  </g>
                </g>
              </g>
              <g id="block1" transform="translate(63.000000, 96.000000)">
                <g
                  id="block1-bars"
                  transform="translate(29.000000, 26.000000)"
                  fill="#DEC9F9"
                  opacity="0.503348214"
                >
                  <rect id="矩形" x="32" y="0" width="1" height="70"></rect>
                  <rect
                    id="矩形备份-18"
                    x="48"
                    y="0"
                    width="1"
                    height="70"
                  ></rect>
                  <rect
                    id="矩形备份-19"
                    x="64"
                    y="0"
                    width="1"
                    height="70"
                  ></rect>
                  <rect
                    id="矩形备份-16"
                    x="16"
                    y="0"
                    width="1"
                    height="70"
                  ></rect>
                  <rect
                    id="矩形备份-17"
                    x="0"
                    y="0"
                    width="1"
                    height="70"
                  ></rect>
                </g>
                <g id="block1-back" opacity="0.693987165">
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-79)"
                    xlinkHref="#path-78"
                  ></use>
                  <use
                    fill="url(#linearGradient-63)"
                    fillRule="evenodd"
                    xlinkHref="#path-78"
                  ></use>
                </g>
                <g
                  id="block1-circles"
                  transform="translate(27.000000, 34.000000)"
                >
                  <g id="block1-circle1" strokeLinejoin="round">
                    <circle
                      id="block-circle1-shadow"
                      filter="url(#filter-81)"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="2.5"
                      cy="30"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="30"
                        to="30"
                        begin="0s"
                        dur="4s"
                        values="30;45;15;30"
                        keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                        keyTimes=" 0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      id="block-circle1-object"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="2.5"
                      cy="30"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="30"
                        to="30"
                        begin="0s"
                        dur="4s"
                        values="30;45;15;30"
                        keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                        keyTimes="0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                  <g id="block1-circle2">
                    <circle
                      id="block1-circle2-shadow"
                      filter="url(#filter-83)"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="18.5"
                      cy="15"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="15"
                        to="15"
                        begin="0s"
                        dur="4s"
                        values="15;35;45;15"
                        keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                        keyTimes="0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      id="block1-circle2-object"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="18.5"
                      cy="15"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="15"
                        to="15"
                        begin="0s"
                        dur="4s"
                        values="15;35;45;15"
                        keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                        keyTimes="0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                  <g id="block1-circle3">
                    <circle
                      id="block1-circle3-shadow"
                      filter="url(#filter-85)"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="34.5"
                      cy="30"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="30"
                        to="30"
                        begin="0s"
                        dur="4s"
                        values="30;15;45;30"
                        keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                        keyTimes=" 0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      id="block1-circle3-object"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="34.5"
                      cy="30"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="30"
                        to="30"
                        begin="0s"
                        dur="4s"
                        values="30;15;45;30"
                        keySplines="0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1;"
                        keyTimes="0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                  <g id="block1-circle4">
                    <circle
                      id="block1-circle4-shadow"
                      filter="url(#filter-87)"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="50.5"
                      cy="45"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="45"
                        to="45"
                        begin="0s"
                        dur="4s"
                        values="45;25;15;45"
                        keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1"
                        keyTimes="0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      id="block1-circle4-object"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="50.5"
                      cy="45"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="45"
                        to="45"
                        begin="0s"
                        dur="4s"
                        values="45;25;15;45"
                        keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1"
                        keyTimes="0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                  <g id="block1-circle5">
                    <circle
                      id="block1-circle5-shadow"
                      filter="url(#filter-89)"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="66.5"
                      cy="30"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="30"
                        to="30"
                        begin="0s"
                        dur="4s"
                        values="30;45;15;30"
                        keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1"
                        keyTimes="0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      id="block1-circle5-object"
                      stroke="#8D3FFD"
                      strokeWidth="1"
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      cx="66.5"
                      cy="30"
                      r="3"
                    >
                      <animate
                        attributeName="cy"
                        from="30"
                        to="30"
                        begin="0s"
                        dur="4s"
                        values="30;45;15;30"
                        keySplines=" 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1"
                        keyTimes="0;0.35;0.65;1"
                        calcMode="spline"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </section>
  );
};

export default BannerSVG;
