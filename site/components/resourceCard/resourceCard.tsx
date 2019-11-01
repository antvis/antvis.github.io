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
}

class ResourceCard extends React.Component<Props, {}> {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: 'resourceCard',
  };

  constructor(props: Readonly<Props>) {
    super(props);
  }

  render() {
    return (
      <div className="resource-card">
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
