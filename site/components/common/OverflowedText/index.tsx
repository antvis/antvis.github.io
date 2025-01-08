import { ConfigProvider, Tooltip } from 'antd';
import cx from 'classnames';
import { isNumber, isString, omit, toNumber } from 'lodash';
import React, { PureComponent } from 'react';

import './index.less';

type Props = {
  className: string;
  text: string;
  maxWidth: string | number;
  maxHeight?: string | number;
  style?: Record<string, any>;
};

const getPixel = (value: string | number) => {
  if (isNumber(value)) return `${value}px`;
  return value;
};

const getNumber = (value: string | number) => {
  if (isString(value)) return toNumber(value.replace(/[^0-9]+/, ''));
  return value;
};

// 自动省略并提示组件
export class OverflowedText extends PureComponent<Props> {
  static defaultProps = {
    className: '',
    text: 'overflowed text',
    maxWidth: '100px',
    style: {},
  };

  state = {
    isOverflow: false,
  };

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.text !== this.props.text ||
      prevProps.maxWidth !== this.props.maxWidth ||
      prevProps.maxHeight !== this.props.maxHeight ||
      prevProps.style !== this.props.style
    ) {
      // @ts-ignore
      this.init(this.$text);
    }
  }

  init = (node: HTMLDivElement) => {
    // @ts-ignore
    this.$text = node;
    if (!node) return;
    const { maxHeight } = this.props;
    this.setState({
      isOverflow: maxHeight
        ? node.scrollHeight > node.offsetHeight
        : node.scrollWidth > node.offsetWidth,
    });
  };

  render() {
    const { text, className, maxWidth, maxHeight, style = {} } = this.props;
    const { fontSize, lineHeight } = style;
    const props = omit(this.props, [
      'className',
      'text',
      'maxWidth',
      'maxHeight',
      'style',
      'width',
    ]);
    const cls = cx(
      'component-overflowed-text',
      className,
      maxHeight && 'max-height-text',
    );

    let textStyle: Record<string, string> = {
      maxWidth: getPixel(maxWidth),
      ...style,
    };
    // 最大高度 转化为 行数， 需要  fontSize, lineHeight 属性
    if (maxHeight && fontSize && lineHeight) {
      const lineHeightSize = getNumber(fontSize) * lineHeight;
      textStyle = {
        ...textStyle,
        maxWidth: 'none',
        display: '-webkit-box',
        '-webkitBoxOrient': 'vertical',
        '-webkitLineClamp': (
          Math.max(getNumber(maxHeight), lineHeightSize) / lineHeightSize
        ).toFixed(0),
      };
    }

    return (
      <div className={cls} style={textStyle} ref={this.init}>
        {this.state.isOverflow ? (
          <ConfigProvider prefixCls="antd5">
            <Tooltip
              title={text}
              placement="topLeft"
              overlayStyle={{ maxWidth: '50vw' }}
              {...props}
            >
              {text}
            </Tooltip>
          </ConfigProvider>
        ) : (
          text
        )}
      </div>
    );
  }
}
