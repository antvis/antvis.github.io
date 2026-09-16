import { ConfigProvider, Tooltip } from 'antd';
import cx from 'classnames';
import { PureComponent } from 'react';

type Props = {
  className?: string;
  text: string;
  maxWidth?: string | number;
  maxHeight?: string | number;
  style?: Record<string, any>;
};

const getPixel = (value: string | number) => {
  if (typeof value === 'number') return `${value}px`;
  return value;
};

const getNumber = (value: string | number) => {
  if (typeof value === 'string') return Number(value.replace(/[^0-9]+/, ''));
  return value;
};

// 自动省略并提示组件
export class OverflowedText extends PureComponent<Props> {
  private textElement: HTMLDivElement | null = null;

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
      this.init(this.textElement);
    }
  }

  init = (node: HTMLDivElement | null) => {
    this.textElement = node;
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
    const cls = cx(
      'overflow-hidden text-ellipsis',
      className,
      maxHeight ? 'whitespace-normal break-all' : 'whitespace-nowrap',
    );

    let textStyle: Record<string, string> = {
      maxWidth: getPixel(maxWidth ?? '100px'),
      ...style,
    };
    // 最大高度 转化为 行数， 需要  fontSize, lineHeight 属性
    if (maxHeight && fontSize && lineHeight) {
      const lineHeightSize = getNumber(fontSize) * lineHeight;
      textStyle = {
        ...textStyle,
        maxWidth: 'none',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: (
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
