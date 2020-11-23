const historyContributors: {
  name: string;
  jobTitle: string;
  avatar: string;
  weibo: string;
  github: string;
}[] = [
  {
    name: '巴思',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*WiTATJQpbLIAAAAAAAAAAABkARQnAQ',
    weibo: 'https://weibo.com/145643593',
    github: '',
  },
  {
    name: '沉鱼',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*IMNERLEzuS8AAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: '',
  },
  {
    name: '董珊珊',
    jobTitle: '设计师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*cOoVT53fMRAAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: '',
  },
  {
    name: '顾倾',
    jobTitle: '设计师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*xAQvQoGpucAAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: '',
  },
  {
    name: '光生',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*bLcFRI5XuJAAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: 'github: github.com/zxc0328',
  },
  {
    name: '广知',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*pqeZRI4PPQcAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: '',
  },
  {
    name: '画康',
    jobTitle: '设计师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*QnJdSq-ts6wAAAAAAAAAAABkARQnAQ',
    weibo: 'https://weibo.com/u/1985143287',
    github: '',
  },
  {
    name: '绝云',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*1jxSSK2O9XAAAAAAAAAAAABkARQnAQ',
    weibo: 'https://weibo.com/omosirovincent',
    github: 'https://github.com/leungwensen',
  },
  {
    name: '陆沉',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*eqF9SY80u2QAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: '',
  },
  {
    name: '罗宪',
    jobTitle: '动效设计师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*F6RgRLWn0PwAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: '',
  },
  {
    name: '米法',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*yvrBSIRx4OQAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: 'https://github.com/paleface001',
  },
  {
    name: '芈乐',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*SZd2QaFV8KkAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: 'https://github.com/weepy3641',
  },
  {
    name: '青湳',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*SVnYRaJ705sAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: 'https://github.com/elaine1234',
  },
  {
    name: '轻声',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*ULIwSqt8mscAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: 'https://github.com/laispace',
  },
  {
    name: '乌诺',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*NNrXRqwWfooAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: '',
  },
  {
    name: '亦叶',
    jobTitle: '设计师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*al5RSKvDIYQAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: '',
  },
  {
    name: '有田',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*cVYyTJfysRsAAAAAAAAAAABkARQnAQ',
    weibo: 'https://weibo.com/u/1869365461',
    github: 'https://github.com/TomHuangCN',
  },
  {
    name: '早弦',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*1VQ3QrVIyMIAAAAAAAAAAABkARQnAQ',
    weibo: 'https://www.weibo.com/markwhu',
    github: 'https://github.com/fkysly',
  },
  {
    name: '张初尘',
    jobTitle: '产品经理',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*-p3YQIlUtocAAAAAAAAAAABkARQnAQ',
    weibo: 'https://weibo.com/u/1824917073',
    github: 'https://github.com/lilyal',
  },
  {
    name: '长哲',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*z2OZQq5QGfYAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: 'https://github.com/bzhangzju',
  },
  {
    name: '祯逸',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*7WXcTYVBdmAAAAAAAAAAAABkARQnAQ',
    weibo: '',
    github: '',
  },
  {
    name: '诸岳',
    jobTitle: '工程师',
    avatar:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*EkmcTa-uJDUAAAAAAAAAAABkARQnAQ',
    weibo: 'https://www.weibo.com/u/6987384726',
    github: 'https://github.com/dengfuping',
  },
];

export default historyContributors;
