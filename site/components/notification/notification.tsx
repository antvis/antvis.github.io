import React from 'react';
import PropTypes from 'prop-types';
import './notification.less';

interface States {
  height: number;
}
interface Props {
  className: string;
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

  constructor(props: Readonly<Props>) {
    super(props);
  }

  render() {
    const { className, num, type, title, date } = this.props;
    return (
      <div className={`notification ${className}`}>
        <div className="notification-container">
          <p className="notification-number">{num}</p>
          <div className="notification-contents">
            <div className="notification-title">
              <p className="notification-type">{type}</p>
              <p className="notification-description"> ‧ {title}</p>
            </div>
            <p className="notification-date">{date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Notification;
