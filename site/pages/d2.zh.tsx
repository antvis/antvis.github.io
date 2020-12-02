import React, { useState, useEffect } from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './d2.less';

interface Answer {
  id: string;
  main: string;
  sub?: string;
}

interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

interface UserAnswer {
  keyboard: string;
  symbol: string;
  shirt: string;
  framework: string;
  ide: string;
  worktime: string;
  music: string;
  [key: string]: string;
}

interface FinalPageConfigStyle {
  colors: {
    light: {
      [key: string]: string;
    };
    dark: {
      [key: string]: string;
    };
  };
  stickers: {
    [key: string]: {
      light: string;
      dark: string;
    };
  };
}

interface FinalPageConfigText {
  title: string;
  description1: string;
  description2: string;
}

interface FinalPageConfig {
  styles: {
    [key: string]: FinalPageConfigStyle;
  };
  texts: {
    [key: string]: FinalPageConfigText;
  };
}

interface NextButton {
  unpressed: string;
  pressed: string;
}

interface NextButtons {
  [key: string]: NextButton;
}

// const TITLE = '测一测你是那种工程🦁️';
const COVER_IMG =
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*MaEESpgMr1QAAAAAAAAAAAAAARQnAQ';
const COVER_IMG_PRESSED =
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*MaEESpgMr1QAAAAAAAAAAAAAARQnAQ';
const OPTION_BUTTON =
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*2EPcTbXdj50AAAAAAAAAAAAAARQnAQ';
const OPTION_BUTTON_PRESSED =
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6eUxS4axJCEAAAAAAAAAAAAAARQnAQ';

const NEXT_BUTTONS: NextButtons = {
  default: {
    unpressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*qyBkQ6zPpIwAAAAAAAAAAAAAARQnAQ',
    pressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*LPSMRIDxB_MAAAAAAAAAAAAAARQnAQ',
  },
  cyan: {
    unpressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*gKB6S7rJ1zEAAAAAAAAAAAAAARQnAQ',
    pressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqxCQ52IdYQAAAAAAAAAAAAAARQnAQ',
  },
  red: {
    unpressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*z4gOSaLnU70AAAAAAAAAAAAAARQnAQ',
    pressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*bLOhQKgfiL4AAAAAAAAAAAAAARQnAQ',
  },
  tawny: {
    unpressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NpjlS4GKSJwAAAAAAAAAAAAAARQnAQ',
    pressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*yJBYRLs1UqQAAAAAAAAAAAAAARQnAQ',
  },
  black: {
    unpressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Y99KSo-fpcYAAAAAAAAAAAAAARQnAQ',
    pressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*4UJ4To0P2E0AAAAAAAAAAAAAARQnAQ',
  },
  cover: {
    unpressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*s_ZgSq5HZykAAAAAAAAAAAAAARQnAQ',
    pressed:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*YO1CR7nUuWkAAAAAAAAAAAAAARQnAQ',
  },
};
// TODO: qr code
const QR_CODE =
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*fIErSqLsyA0AAAAAAAAAAAAAARQnAQ';
const SELECTED_COLOR = '#6E40FE';
const UNSELECTED_COLOR = '#fff';

//_back
const userAnswers_back: UserAnswer = {
  keyboard: '',
  symbol: '',
  shirt: '',
  framework: '',
  ide: '',
  worktime: '',
  music: '',
};

const userAnswers: UserAnswer = {
  keyboard: 'red',
  symbol: '=>',
  shirt: 'smile',
  framework: 'vue',
  ide: 'vim',
  worktime: 'forenoon',
  music: 'pop',
};

const D2 = () => {
  const { t, i18n } = useTranslation();

  const [pageIdx, setPageIdx] = useState(7); // -1
  const [selectedOption, setSelectedOption] = useState('');
  const [keyboardType, setKeybordType] = useState('default');
  const [pressedNext, setPressedNext] = useState(false);
  const [questionOpacity, setQuestionOpacity] = useState(1);

  const questions: Question[] = [
    {
      id: 'keyboard',
      question: '你喜欢的机械键盘类型是？',
      answers: [
        { main: '青轴', id: 'keyboard-cyan' },
        { main: '黑轴', id: 'keyboard-black' },
        { main: '红轴', id: 'keyboard-red' },
        { main: '茶轴', id: 'keyboard-tawny' },
      ],
    },
    {
      id: 'framework',
      question: '你最常用的前端框架是？',
      answers: [
        { main: 'React', id: 'framework-react' },
        { main: 'Vue', id: 'framework-vue' },
        { main: 'Angular', id: 'framework-angular' },
        { main: '我自己写', id: 'framework-bymyself' },
      ],
    },
    {
      id: 'worktime',
      question: '你平时在哪段时间工作效率最高？',
      answers: [
        { main: '清早', id: 'worktime-morining' },
        { main: '上午', id: 'worktime-forenoon' },
        { main: '下午', id: 'worktime-afternoon' },
        { main: '夜晚', id: 'worktime-dusk' },
        { main: '凌晨', id: 'worktime-night' },
      ],
    },
    {
      id: 'symbol',
      question: '你最喜欢的符号是？',
      answers: [
        { main: '?:', sub: '三目运算符', id: 'symbol-?:' },
        { main: '=>', sub: '箭头函数', id: 'symbol-=>' },
        { main: '...', sub: '扩展运算符', id: 'symbol-...' },
        { main: ';', sub: '快结束这一行吧', id: 'symbol-;' },
      ],
    },
    {
      id: 'shirt',
      question: '你最常穿什么类型的衣服上班？',
      answers: [
        { main: '当然格子衫', id: 'shirt-fashion' },
        { main: '各种卫衣', id: 'shirt-cool' },
        { main: '公司文化衫', id: 'shirt-smile' },
        { main: '我有我 style', id: 'shirt-style' },
      ],
    },
    {
      id: 'ide',
      question: '你平时最常使用哪种编辑器？',
      answers: [
        { main: 'vscode', id: 'ide-vscode' },
        { main: 'webstorm', id: 'ide-webstorm' },
        { main: 'vim', id: 'ide-vim' },
        { main: 'atom', id: 'ide-atom' },
      ],
    },
    {
      id: 'music',
      question: '写代码时，你最喜欢听什么音乐？',
      answers: [
        { main: '抒情古典乐', id: 'music-classic' },
        { main: '暴躁重金属', id: 'music-metal' },
        { main: '迷幻电子乐', id: 'music-electronic' },
        { main: '时尚流行乐', id: 'music-pop' },
      ],
    },
  ];

  const finalPageConfigs: FinalPageConfig = {
    styles: {
      webstorm: {
        colors: {
          light: {
            mainBack: '#F9FAFB',
            chartContainerBack: '#F1F2F3',
            mainText: '#2B2C2D',
            subText: '#72124F',
          },
          dark: {
            mainBack: '#292B2C',
            chartContainerBack: '#3B4041',
            mainText: '#fff',
            subText: '#FFD576',
          },
        },
        stickers: {
          fashion: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Uxb1SqpYbl0AAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*O6i0T7pLjZMAAAAAAAAAAAAAARQnAQ',
          },
          cool: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*98Z-TKPAlHQAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*U4r8S6hUdD4AAAAAAAAAAAAAARQnAQ',
          },
          smile: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*LBHZRb2rOKwAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*P4n5ToLOckMAAAAAAAAAAAAAARQnAQ',
          },
          style: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*OhZwQJVUtNMAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*JXSHSIkWeEQAAAAAAAAAAAAAARQnAQ',
          },
        },
      },
      vscode: {
        colors: {
          light: {
            mainBack: '#FEFFFF',
            chartContainerBack: '#EBECED',
            mainText: '#2B2C2D',
            subText: '#142DE0',
          },
          dark: {
            mainBack: '#202122',
            chartContainerBack: '#242830',
            mainText: '#fff',
            subText: '#1F96F3',
          },
        },
        stickers: {
          fashion: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*i4tSSZsy5iAAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*8tM1QJMcK2IAAAAAAAAAAAAAARQnAQ',
          },
          cool: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*35I0RLsABD0AAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*fs_XRrznHggAAAAAAAAAAAAAARQnAQ',
          },
          smile: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*VwwFT4u12mIAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*tDweQ6nkrM8AAAAAAAAAAAAAARQnAQ',
          },
          style: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*7uvgQolo6K8AAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ThqWRJcb3oIAAAAAAAAAAAAAARQnAQ',
          },
        },
      },
      vim: {
        colors: {
          light: {
            mainBack: '#F0EBD8',
            chartContainerBack: '#D2CAB7',
            mainText: '#403A33',
            subText: '#B2286D',
          },
          dark: {
            mainBack: '#002C37',
            chartContainerBack: '#00181E',
            mainText: '#4FD6E9',
            subText: '#FFBB22',
          },
        },
        stickers: {
          fashion: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*VNXbS7MPXBIAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*rh8WQ4zv5L8AAAAAAAAAAAAAARQnAQ',
          },
          cool: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*jqb3RpWl5IgAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*PPtUR49DfRMAAAAAAAAAAAAAARQnAQ',
          },
          smile: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*-L3CRZGsz6QAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Xn60TLXLvKUAAAAAAAAAAAAAARQnAQ',
          },
          style: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*_SXgSIQS-QUAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*AUKdTJVPr6MAAAAAAAAAAAAAARQnAQ',
          },
        },
      },
      atom: {
        colors: {
          light: {
            mainBack: '#F9FAFB',
            chartContainerBack: '#E9EAEC',
            mainText: '#252426',
            subText: '#AA3FAA',
          },
          dark: {
            mainBack: '#262D36',
            chartContainerBack: '#323842',
            mainText: '#fff',
            subText: '#31CFD3',
          },
        },
        stickers: {
          fashion: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*XQE-R6ZB3QkAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*IjoTRKXKFyYAAAAAAAAAAAAAARQnAQ',
          },
          cool: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*eaD5QLsNC-0AAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*A8sJTqNWJLsAAAAAAAAAAAAAARQnAQ',
          },
          smile: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ksEqRJx8acUAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*fIiNR5aq_H8AAAAAAAAAAAAAARQnAQ',
          },
          style: {
            light:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*U5DPSqN06coAAAAAAAAAAAAAARQnAQ',
            dark:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*bQMdR4s91zIAAAAAAAAAAAAAARQnAQ',
          },
        },
      },
    },

    texts: {
      morning: {
        title: '早起奋斗者',
        description1:
          '月亮不睡你不睡，你是夜晚小宝贝，熬夜搬砖不会累，咖啡眼圈才更配。特为您推荐',
        description2: '，快速生成图表，释放你的夜生活。',
      },
      forenoon: {
        title: '社会主义打工人',
        description1:
          '月亮不睡你不睡，你是夜晚小宝贝，熬夜搬砖不会累，咖啡眼圈才更配。特为您推荐',
        description2: '，快速生成图表，释放你的夜生活。',
      },
      afternoon: {
        title: '车间划水人',
        description1:
          '月亮不睡你不睡，你是夜晚小宝贝，熬夜搬砖不会累，咖啡眼圈才更配。特为您推荐',
        description2: '，快速生成图表，释放你的夜生活。',
      },
      dusk: {
        title: '凡尔赛社畜',
        description1:
          '月亮不睡你不睡，你是夜晚小宝贝，熬夜搬砖不会累，咖啡眼圈才更配。特为您推荐',
        description2: '，快速生成图表，释放你的夜生活。',
      },
      night: {
        title: '通宵爆肝王',
        description1:
          '月亮不睡你不睡，你是夜晚小宝贝，熬夜搬砖不会累，咖啡眼圈才更配。特为您推荐',
        description2: '，快速生成图表，释放你的夜生活。',
      },
    },
  };

  const recommandLib = [
    '「防秃利器 — F2」',
    '「防秃利器 — G2Plot」',
    '「防秃利器 — G6」',
    '「防秃利器 — X6」',
    '「防秃利器 — L7」',
  ];

  const handleClickNext = () => {
    const newIdx = pageIdx + 1;
    if (selectedOption === '' && pageIdx > -1 && pageIdx < questions.length) {
      Toast.info('大哥，选一个再继续吧！', 1);
      return;
    }
    setQuestionOpacity(0);
    setPressedNext(true);

    setTimeout(() => {
      setPageIdx(newIdx);
      setSelectedOption('');
      setQuestionOpacity(1);
      setPressedNext(false);
    }, 100);
  };

  const handleClickOption = (answerId: string) => {
    const strs = answerId.split('-');
    const prefix: string = strs[0];
    const suffix: string = strs[1];
    if (prefix === 'keyboard') {
      setKeybordType(suffix);
    }
    userAnswers[prefix] = suffix;
    setSelectedOption(answerId);
  };

  const getFinalPage = (ide: string, worktime: string, shirt: string) => {
    const gide = ide ? ide : 'vim';
    const gworktime = worktime ? worktime : 'night';
    const gshirt = shirt ? shirt : 'fashion';

    const styles: FinalPageConfigStyle = finalPageConfigs.styles[gide];
    const texts: FinalPageConfigText = finalPageConfigs.texts[gworktime];

    let theme: 'dark' | 'light' = 'dark';
    if (
      worktime === 'morning' ||
      worktime === 'forenoon' ||
      worktime === 'afternoon'
    )
      theme = 'light';
    const colors = styles.colors[theme];
    const randomIdx = Math.floor(Math.random() * recommandLib.length);
    const lib = recommandLib[randomIdx];
    const stickerSrc = styles.stickers[gshirt][theme];

    return (
      <div
        className="d2-finalpage"
        style={{
          backgroundColor: colors.mainBack,
          color: colors.mainText,
        }}
      >
        <div className="d2-finalpage-header">
          <div className="d2-finalpage-title">AntV</div>
          <div className="d2-finalpage-symbol">{userAnswers.symbol}</div>
        </div>
        <div className="d2-chart-container">
          <div
            className="d2-chart-container-playground"
            style={{ backgroundColor: colors.chartContainerBack }}
          ></div>
        </div>
        <div className="d2-finalpage-text-container">
          <div>测算结果显示，你是…</div>
          <div className="d2-finalpage-result-title">{texts.title}</div>
          <img
            className="d2-finalpage-sticker"
            style={{ marginLeft: texts.title.length > 4 ? '190px' : '130px' }}
            src={stickerSrc}
          />{' '}
          <br />
          <span className="d2-finalpage-result-des1">{texts.description1}</span>
          <span
            className="d2-finalpage-result-recommand"
            style={{ color: colors.subText }}
          >
            {lib}
          </span>
          <span className="d2-finalpage-result-des2">{texts.description2}</span>
        </div>
        <div className="d2-finalpage-footer-left">antv.vision↩</div>
        <img className="d2-finalpage-fcode" src={QR_CODE} />
      </div>
    );
  };

  return (
    <div className="d2-container">
      <SEO title={t('AntV D2')} lang={i18n.language} />
      <div
        className="d2-antv-logo-container"
        style={{ display: pageIdx > -1 ? 'none' : 'block' }}
      >
        <img
          className="d2-antv-logo"
          src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*3zCaQL5EgmIAAAAAAAAAAAAAARQnAQ"
          alt="antv-logo"
        />
      </div>
      {pageIdx > -1 && pageIdx < questions.length && (
        <>
          <div
            className="d2-question-back"
            style={{ opacity: questionOpacity }}
          >
            <div className="d2-question-container">
              <div className="d2-question-header">
                <div
                  className="circle"
                  style={{ right: '88px', backgroundColor: '#AAFF90' }}
                ></div>
                <div
                  className="circle"
                  style={{ right: '64px', backgroundColor: '#FFC461' }}
                ></div>
                <div
                  className="circle"
                  style={{ right: '40px', backgroundColor: '#F55050' }}
                ></div>
              </div>
              <div className="d2-question-content">
                <div className="question-title">Q{pageIdx + 1}</div>
                <div className="question-content">
                  {questions[pageIdx].question}
                </div>
              </div>
              <div className="d2-question-pagination-container">
                <div className="d2-question-pagination">{`${pageIdx + 1}/${
                  questions.length
                }`}</div>
              </div>
            </div>
          </div>
          <div
            className="d2-answers-container"
            style={{ opacity: questionOpacity }}
          >
            {questions[pageIdx].answers.map((answer) => (
              <div
                className="d2-answer-block"
                style={{
                  color:
                    selectedOption === answer.id
                      ? SELECTED_COLOR
                      : UNSELECTED_COLOR,
                }}
                onClick={() => handleClickOption(answer.id)}
                key={answer.id}
              >
                <img
                  className="d2-answer-button"
                  src={
                    selectedOption === answer.id
                      ? OPTION_BUTTON_PRESSED
                      : OPTION_BUTTON
                  }
                  alt="option-button"
                />
                <span className="d2-answer-main">{answer.main}</span>
                {answer.sub && (
                  <span className="d2-answer-sub">{answer.sub}</span>
                )}
              </div>
            ))}
          </div>
          <div className="d2-button-container" onClick={handleClickNext}>
            <img
              className="next-button"
              src={
                pressedNext
                  ? NEXT_BUTTONS[keyboardType].pressed
                  : NEXT_BUTTONS[keyboardType].unpressed
              }
              alt="button"
              style={
                pressedNext
                  ? {
                      width: '26.8vw',
                      right: 'calc(8.5vw + 2.95vw)',
                      bottom: 'calc(6.14vh + 1.2vh)',
                    }
                  : { width: '32.7vw', right: '8.5vw', bottom: '6.14vh' }
              }
            />
          </div>
        </>
      )}
      {pageIdx === -1 && (
        <div className="d2-title-container">
          <img
            className="d2-antv-logo"
            src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*3zCaQL5EgmIAAAAAAAAAAAAAARQnAQ"
            alt="antv-logo"
          />
          <img
            className="d2-cover-img"
            src={pressedNext ? COVER_IMG_PRESSED : COVER_IMG}
            onClick={handleClickNext}
          />
          {/* <div className='d2-button-container' onClick={handleClickNext}>
            <img
              className='next-button'
              src={pressedNext ? NEXT_BUTTONS['cover'].pressed : NEXT_BUTTONS['cover'].unpressed}
              alt='button'
              style={pressedNext ?
                {width: '40.7vw', right: '10.5vw', bottom: '32.14vh'}
                : {width: '40.7vw', right: '10.5vw', bottom: '32.14vh'}
              }
            />
          </div> */}
        </div>
      )}
      {pageIdx >= questions.length &&
        getFinalPage(userAnswers.ide, userAnswers.worktime, userAnswers.shirt)}
    </div>
  );
};

D2.noLayout = true;
export default D2;
