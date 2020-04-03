import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import classNames from 'classnames';
import styles from './ContributorCard.module.less';

interface Props {
  contributor: {
    name: string;
    jobTitle: string;
    avatar: string;
    weibo: string;
    github: string;
  };
}

const githubDarkIcon =
  'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*JVmgQ6_InSoAAAAAAAAAAABkARQnAQ';
const githubLightIcon =
  'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*2Ij9T76DyCcAAAAAAAAAAABkARQnAQ';
const weiboDarkIcon =
  'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*ekkhR7ISzUsAAAAAAAAAAABkARQnAQ';
const weiboLightIcon =
  'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*5dFiSZv2DzEAAAAAAAAAAABkARQnAQ';

const ContributorCard = (props: Props) => {
  const { t } = useTranslation();

  const [iconStates, setIconStates] = useState({
    githubIcon: githubDarkIcon,
    weiboIcon: weiboDarkIcon,
  });
  const [linkDisplay, setLinkStates] = useState('none');

  const mouseEnterCard = () => {
    setLinkStates('block');
  };

  const mouseLeaveCard = () => {
    setLinkStates('none');
  };

  const mouseEnterGithub = () => {
    setIconStates({
      githubIcon: githubLightIcon,
      weiboIcon: weiboDarkIcon,
    });
  };

  const mouseEnterWeibo = () => {
    setIconStates({
      githubIcon: githubDarkIcon,
      weiboIcon: weiboLightIcon,
    });
  };

  const mouseLeaveIcon = () => {
    setIconStates({
      githubIcon: githubDarkIcon,
      weiboIcon: weiboDarkIcon,
    });
  };

  const getIcons = () => {
    const children = [];
    const span = 4;
    if (props.contributor.github !== '') {
      children.push(
        <Col
          span={span}
          key="github"
          style={{ display: linkDisplay }}
          onMouseEnter={mouseEnterGithub}
          onMouseLeave={mouseLeaveIcon}
        >
          <a
            className={styles.github}
            href={props.contributor.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              key="githubimg"
              className={styles.githubImg}
              src={iconStates.githubIcon}
              alt="github"
            />
          </a>
        </Col>,
      );
    }
    if (props.contributor.weibo !== '') {
      children.push(
        <Col
          span={span}
          key="weibo"
          style={{ display: linkDisplay }}
          onMouseEnter={mouseEnterWeibo}
          onMouseLeave={mouseLeaveIcon}
        >
          <a
            className={styles.weibo}
            href={props.contributor.weibo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              key="weiboimg"
              className={styles.weiboImg}
              src={iconStates.weiboIcon}
              alt="weibo"
            />
          </a>
        </Col>,
      );
    }
    return children;
  };

  return (
    <Col
      className={classNames(styles.card, 'gutter-row')}
      md={3}
      sm={6}
      xs={8}
      onMouseEnter={mouseEnterCard}
      onMouseLeave={mouseLeaveCard}
    >
      <div className={styles.content}>
        <Avatar src={props.contributor.avatar} className={styles.avatar} />
        <div className={styles.text}>
          <p className={styles.name}>{t(props.contributor.name)}</p>
          <p className={styles.jobTitle}>{t(props.contributor.jobTitle)}</p>
        </div>
        <Row className={styles.links} justify="center">
          {getIcons()}
        </Row>
      </div>
    </Col>
  );
};

export default ContributorCard;
