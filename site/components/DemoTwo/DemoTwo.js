import React, { Component } from 'react';

import Isotope from 'isotope-layout';

//import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';

import styles from './DemoTwo.module.less';
// import './test.css'

const G2ImgUrl = [
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*p7zKQpUrF98AAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*S4CuR5J89jsAAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*p7zKQpUrF98AAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*U2mPQLoxIR4AAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*T0pISJhToPEAAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*YnkLRojc99wAAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*ElDbQ4yz14kAAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*ElDbQ4yz14kAAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*ElDbQ4yz14kAAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*p7zKQpUrF98AAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*bY-vQZy9eBkAAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*LGuMQ4uO_0EAAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*AE2CTr-Uz3QAAAAAAAAAAAAAARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*LGuMQ4uO_0EAAAAAAAAAAAAAARQnAQ',
];

let items = [
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[0]}` } }, // 0 // width 宽度要求是某个数的倍数 eg: 456px 就是 228px 二倍 要求是复数倍数
  { reBox: { width: '456px', imgUrl: `${G2ImgUrl[1]}` } }, // 1
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[2]}` } }, // 2
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[3]}` } }, // 3
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[4]}` } }, // 4
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[5]}` } }, // 5
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[6]}` } }, // 6
  { reBox: { width: '456px', imgUrl: `${G2ImgUrl[7]}` } }, // 7
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[8]}` } }, // 8
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[9]}` } }, // 9
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 10
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[11]}` } }, // 11
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[12]}` } }, // 12
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[13]}` } }, // 13
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 14
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 15
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 16
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 17
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 18
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 19
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 20
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 21
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 22
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 23
  { reBox: { width: '228px', imgUrl: `${G2ImgUrl[10]}` } }, // 24
  // {
  //   reBox: { width: '268px', height: '270px', backgroundImage: `url(${G2ImgUrl[7]})` },
  // },
  // {
  //   reBox: { width: '268px', height: '168px', backgroundImage: `url(${G2ImgUrl[12]})` },
  // }
];

class DemoTwo extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();

    this.state = {
      sortBy: 'category',
    };

    this.onSortHandler = this.onSortHandler.bind(this);
  }

  onSortHandler(sortValue) {
    if (sortValue) {
      //console.log("sortValue", sortValue);
      let bool = this.state.bool;
      let options = { sortBy: sortValue };

      options = Object.assign(options, {
        sortAscending: (bool = !bool),
      });

      this.setState({ bool: bool });
      this.setState({ sortBy: sortValue });

      this.state.iso.arrange(options);
    }
  }

  componentDidMount() {
    this.setState({
      items: items,
    });

    setTimeout(() => {
      // init Isotope
      var iso = new Isotope(this.myRef.current, {
        // itemSelector: ".grid-item",
        // layoutMode: "fitRows",
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: 0,
        },
      });

      this.setState({ iso: iso });

      // 初始化排序方式
      setTimeout(() => {
        if (this.state.iso) {
          //console.log("THERE IS ISTOP FORM - --", this.props.isotopeForm);
          this.onSortHandler(this.state.sortBy);
        }
      }, 200);
    }, 1);

    //}
  }

  elementClicked() {
    setTimeout(() => {
      // re-apply filtering, sorting, and layout
      this.state.iso.layout();
    }, 1);
  }

  render() {
    return (
      <div className={styles.isotope}>
        <div className={styles.grid} ref={this.myRef}>
          {this.state.items &&
            this.state.items.map((item, j) => {
              return (
                <div
                  key={j}
                  className={`grid-item`} // 类名暴露，供 itemSelector 选择
                  onClick={() => this.elementClicked()}
                >
                  <div className="grid-item-wrapper">
                    <div className={styles.gridItemWrapperBox}>
                      <img src={item.reBox.imgUrl} style={item.reBox} />
                      <div
                        className={styles.cover}
                        style={{
                          backgroundColor: `#E0C1FF`,
                          width: `100%`,
                          height: `100%`,
                        }}
                      />
                      <div className={styles.title}>
                        {`折线图/二氧化硅排量放来源${j}`}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default DemoTwo;
