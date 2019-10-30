import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import './quoteCard.less';

const leftpad =
  'https://gw.alipayobjects.com/zos/basement_prod/50fbdc16-bac3-4ecd-8210-f4ed2c116fdb.svg';
const rightpad =
  'https://gw.alipayobjects.com/zos/basement_prod/194a96ef-be8c-4e51-85e1-69b34aa2a697.svg';

interface Props {
  cardContent: {
    avatar: string | undefined;
    quote: string;
    from: string;
    name: string;
    index: number;
  };
  // cardWidth: number;
  // marginLeft: number;
  // marginRight: number;
  hasBorder: boolean;
}
interface States {
  isHover: boolean;
}

class QuoteCard extends React.Component<Props, States> {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: 'resourceCard',
  };

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      isHover: false,
    };
  }

  onMouseover = () => {
    this.setState({ isHover: true });
  };

  onMouseleave = () => {
    this.setState({ isHover: false });
  };

  render() {
    let border;
    if (this.props.hasBorder) {
      border = '1px solid rgba(0,0,0,0.05)';
    }
    return (
      <div
        className="quote-card"
        // onMouseOver={this.onMouseover}
        // onMouseOut={this.onMouseleave}
        style={{
          // width: this.props.cardWidth,
          // marginLeft: this.props.marginLeft,
          // marginRight: this.props.marginRight,
          borderLeft: border,
          borderRight: border,
        }}
      >
        <div className="quote-content-wrapper">
          <Avatar
            // size={160}
            src={this.props.cardContent.avatar}
            className="quote-card-avatar"
          />
          <p className="quote-card-name">{this.props.cardContent.name}</p>
          <p className="quote-card-from">{this.props.cardContent.from}</p>
          <img className="pad leftpad" src={leftpad} />
          <div className="quote-slicer"></div>
          <p className="quote-card-quote">{this.props.cardContent.quote}</p>
          <img className="pad rightpad" src={rightpad} />
        </div>
      </div>
    );
  }
}

export default QuoteCard;
