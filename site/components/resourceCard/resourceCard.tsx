import React from 'react';
import PropTypes from 'prop-types';
import './resourceCard.less';

interface Props {
  cardContent: {
    icon: string;
    title: string;
    description: string;
    link: string;
  };
  cardWidth: number;
  horizontalMargin: number;
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

  constructor(props) {
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
    console.log(this.props.cardWidth);
    return (
      <div
        className="resource-card"
        onMouseOver={this.onMouseover}
        onMouseOut={this.onMouseleave}
        style={{
          width: this.props.cardWidth,
          marginLeft: this.props.horizontalMargin,
          marginRight: this.props.horizontalMargin,
        }}
      >
        <div className="resource-content-wrapper">
          <img src={this.props.cardContent.icon} alt="resource" />
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
        <div
          className="resource-card-bottom"
          style={{ width: this.props.cardWidth }}
        ></div>
      </div>
    );
  }
}

export default ResourceCard;
