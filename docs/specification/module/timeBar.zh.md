---
title: 时间轴 TimeBar
order: 5
---

## 定义

时间轴组件基于普通缩略轴演变而来，它是有效展示动态时序数据、分析图数据的组件。该组件可以让用户快速、直观地观察事件序列以及它们之间的联系。用户可以播放时间来发现异常和探寻模式，推动调查并揭示数据中隐藏的故事。<br />![缩略轴配图.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*DGrITrxo7GMAAAAAAAAAAAAAARQnAQ)<br />

##

## 何时使用

如果需要观察一定时间内图数据的演变情况，分析变化趋势时，建议开启时间轴组件。例：在金融风控领域，保险公司和金融机构的反欺诈人员通过图可视化分析三个月内的案件情况，时间轴组件可以帮助快速分析可疑人脉、财务转账关系，定位嫌疑人。<br />

## 常见类型

### 趋势图时间轴

该时间轴包括但不限于折线图、面积图、柱状图中的一种或多种组合用来表示某种数据属性趋势的时间轴组件，[查看演示 Demo](https://g6.antv.vision/zh/examples/tool/timebar#timebar)<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*fkZzQrw6pVMAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=220&margin=%5Bobject%20Object%5D&name=image.png&originHeight=220&originWidth=1160&size=28712&status=done&style=none&width=1160)<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*sbFESKIoEyEAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=220&margin=%5Bobject%20Object%5D&name=image.png&originHeight=220&originWidth=1160&size=38865&status=done&style=none&width=1160)<br />

### 简版时间轴

相对于趋势图时间轴而言，去掉了表示数据趋势的图表，使用更为简洁的线条来表示时间范围，[查看演示 Demo](https://g6.antv.vision/zh/examples/tool/timebar#simple-timebar)<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*fmVtRIhx4GYAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=220&margin=%5Bobject%20Object%5D&name=image.png&originHeight=220&originWidth=1160&size=19284&status=done&style=none&width=1160)<br />

### 时间刻度时间轴

指表示时间刻度的时间轴组件，[查看演示 Demo](https://g6.antv.vision/zh/examples/tool/timebar#slice-timebar)<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*wDZoRZR3c50AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=220&margin=%5Bobject%20Object%5D&name=image.png&originHeight=220&originWidth=1160&size=16421&status=done&style=none&width=1160)<br />

## 构成元素

![01-b-构成元素.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*jKWcTqx3OysAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=300&margin=%5Bobject%20Object%5D&name=01-b-%E6%9E%84%E6%88%90%E5%85%83%E7%B4%A0.png&originHeight=300&originWidth=1138&size=54789&status=done&style=none&width=1138)<br />时间轴组件主体分为三部分，2、3 部分需同时出现或隐藏。

1. 缩略轴：可配置成趋势图时间轴、简版时间轴、时间刻度时间轴；
1. 播放器：播放时间动画，可配置是否显示；
1. 时间配置：可配置播放速度、是否只看单一时间点；

## 出现位置

时间轴作为辅助组件，建议放在图形区下方。<br />![出现位置.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*3bGeQLQdaAsAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=1090&margin=%5Bobject%20Object%5D&name=%E5%87%BA%E7%8E%B0%E4%BD%8D%E7%BD%AE.png&originHeight=1090&originWidth=1884&size=162859&status=done&style=none&width=1884)<br />

## 交互说明

### 缩略轴

支持拖拽、点击、平移改变时间范围。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*aW0qT5R2RC4AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=706&margin=%5Bobject%20Object%5D&name=image.png&originHeight=706&originWidth=1884&size=124376&status=done&style=none&width=1884)<br />简版时间轴、时间刻度时间轴交互操作同上。鼠标滚轮滚动时，左右平移已选定区间，暂不支持触控版操作。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*1RYlTrrpvWsAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=270&margin=%5Bobject%20Object%5D&name=image.png&originHeight=270&originWidth=1884&size=36876&status=done&style=none&width=1884)<br />轴上数值文本内置自动躲避规则。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*8cVqT4pZw2sAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=824&margin=%5Bobject%20Object%5D&name=image.png&originHeight=824&originWidth=1884&size=137089&status=done&style=none&width=1884)<br />

### 播放器

播放器主要包括三部分，其中播放、暂停按钮动作及状态相互切换。<br />![播放器交互说明.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*hxCgQLC-VV8AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=446&margin=%5Bobject%20Object%5D&name=%E6%92%AD%E6%94%BE%E5%99%A8%E4%BA%A4%E4%BA%92%E8%AF%B4%E6%98%8E.png&originHeight=446&originWidth=1884&size=30520&status=done&style=none&width=1884)<br />播放方式，分两种：

- **累计时间段数据：**开始时间不变，结束时间持续增加，适合查看从一个时间点开始，持续观察累计变化趋势；
- **区间时间段数据：**开始到结束时间的区间段固定不变，播放时该时间段水平移动，适合查看固定时间段内的数据变化趋势；

### 时间配置

时间配置主要包括两部分，单一时间开关、播放速度设置。<br />

- 单一时间开关，默认不开启

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*D-23S5W3EpcAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=796&margin=%5Bobject%20Object%5D&name=image.png&originHeight=796&originWidth=1884&size=94389&status=done&style=none&width=1884)<br />

- 播放速度设置，默认配速为最慢速 1，最大速为 5。支持滚轮（触控板）滑动切换配速，每次增减值为 1。

![速度配置.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*Km8sQIiRgUgAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=254&margin=%5Bobject%20Object%5D&name=%E9%80%9F%E5%BA%A6%E9%85%8D%E7%BD%AE.png&originHeight=254&originWidth=1884&size=18623&status=done&style=none&width=1884)<br />
