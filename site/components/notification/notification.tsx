import React from 'react';
import PropTypes from 'prop-types';
import './notification.less';

interface States {
  height: number;
}
interface Props {
  num: string;
  type: string;
  title: string;
  date: string;
}

class Notification extends React.Component<Props, States> {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: 'notification',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notification">
        <div className="notification-container">
          <p className="notification-number">{this.props.num}</p>
          <div className="notification-contents">
            <div className="notification-title">
              <p className="notification-type">{this.props.type}</p>
              <p className="notification-description"> ‧ {this.props.title}</p>
            </div>
            <p className="notification-date">{this.props.date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Notification;
