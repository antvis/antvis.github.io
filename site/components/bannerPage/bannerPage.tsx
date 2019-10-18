import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../notification/notification';
import holderimg from '../../images/temple-bannerimg.jpg';
import './bannerPage.less';

interface States {
  height: number;
}
interface Props {}

class BannerPage extends React.Component<Props, States> {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
  };
  static defaultProps = {
    className: 'bannerPage',
  };

  constructor(props) {
    super(props);
    this.state = { height: window.innerHeight };
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  onWindowResize() {
    this.setState({ height: window.innerHeight });
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render() {
    return (
      <div>
        <section id="banner-container" style={{ height: this.state.height }}>
          <div className="overlay">
            <div className="homepage-title">
              <div className="title-text">让数据栩栩如生</div>
              <p className="banner-description">
                AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单
                <br />
                方便、专业可靠、无限可能的数据可视化最佳实践。
              </p>
              <a href="#__products">
                <button className="btn-more">继续了解</button>
              </a>
              <div className="notification-list">
                <Notification
                  num="01"
                  type="更新"
                  title="L7 发布新版本，让地图动起来！"
                  date="2019.12.04"
                />
                <Notification
                  num="02"
                  type="推荐"
                  title="Kitchen 3.75 更新，效率大幅度提升！"
                  date="2019.12.03"
                />
              </div>
            </div>
            <div className="banner-right-container">
              <img
                className="right-holder"
                src={holderimg}
                alt="astronaut"
                height="200"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BannerPage;
