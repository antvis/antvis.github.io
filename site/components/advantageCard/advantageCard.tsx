import React from 'react';
import PropTypes from 'prop-types';
import './advantageCard.less';

interface Props {
  cardContent: {
    index: number;
    icon: string;
    title: string;
    description: string;
  };
  horizontalMargin: number;
}
interface States {
  isHover: boolean;
}

class AdvantageCard extends React.Component<Props, States> {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: 'advantageCard',
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
    return (
      <div
        className="advantage-card"
        style={{
          // width: this.props.cardWidth,
          marginLeft: this.props.horizontalMargin,
          marginRight: this.props.horizontalMargin,
        }}
      >
        <div className="advantage-content-wrapper">
          <img src={this.props.cardContent.icon} alt="advantage" />
          <p className="advantage-card-title">{this.props.cardContent.title}</p>
          <p className="advantage-card-description">
            {this.props.cardContent.description}
          </p>
        </div>
      </div>
    );
  }
}

export default AdvantageCard;
