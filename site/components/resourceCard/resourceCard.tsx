import React from 'react';
import PropTypes from 'prop-types';
import './resourceCard.less';

interface Props {
  cardContent: {
    icon: string;
    title: string;
    description: string;
    index: number;
    link: string;
  };
  isMobile: boolean;
}
interface States {
  isHover: boolean;
}

class ResourceCard extends React.Component<Props, States> {
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

  mouseOverCard = (evt: any) => {
    this.setState({ isHover: true });
    const target = evt.currentTarget;
    if (!this.props.isMobile) {
      // const styleHeight = target.style.height.toString();
      // let height;
      // let marginTop;
      // if(styleHeight !== 'auto' && styleHeight !== '') {
      //   const scale = 0.1;
      //   const length = styleHeight.length;
      //   height = parseInt(styleHeight.subStr(0, length - 2));
      //   height = (1 + scale) * height;
      //   marginTop = scale / 2 * height;
      //   target.style.marginTop = `-${marginTop}px`;
      //   target.style.height = `${height}px`;
      // }
      target.style.marginTop = '-20px';
      target.style.borderBottom = '4px solid';
      target.style.borderImage =
        '-webkit-linear-gradient(left, #aa6aff, #706dff) 30 30';
      target.style.borderImage =
        '-moz-linear-gradient(left, #aa6aff, #706dff) 30 30';
      target.style.borderImage =
        'linear-gradient(left, #aa6aff, #706dff) 30 30';
      target.style.translation = 'all 0.3s';
    } else {
      target.style.height = 'auto';
    }
  };

  mouseOutCard = (evt: any) => {
    this.setState({ isHover: false });
    const target = evt.currentTarget;
    if (!this.props.isMobile) {
      target.style.marginTop = '0';
      target.style.borderBottom = '0px solid';
      target.style.translation = 'all 0.3s';
    } else {
      target.style.height = 'auto';
    }
  };

  render() {
    return (
      <div
        className="resource-card"
        onMouseOver={this.mouseOverCard}
        onMouseOut={this.mouseOutCard}
      >
        <div className="resource-content-wrapper">
          <img
            className="resource-card-icon"
            src={this.props.cardContent.icon}
            alt="resource"
          />
          <p className="resource-card-title">{this.props.cardContent.title}</p>
          <p className="resource-card-description">
            {this.props.cardContent.description}
          </p>
          <a
            className="resource-card-detail-link"
            href={this.props.cardContent.link}
          >
            查看详情
          </a>
        </div>
      </div>
    );
  }
}

export default ResourceCard;
