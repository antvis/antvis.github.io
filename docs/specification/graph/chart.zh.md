---
title: 统计图表 Chart
order: 1
---

# 折线图

**定义：**折线图又叫趋势图，是用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。详见 AntV 官网 [折线图 demo](https://g2plot.antv.vision/zh/examples/line/basic)。

| 适合的数据 | 「两个连续字段数据」，或者「一个有序的分类」+「一个连续数据字段」 |
| :-- | :-- |
| 功能 | 观察数据的变化趋势 |
| 数据与图形的映射 | 两个连续字段分别映射到横轴和纵轴 |
| 适合的数据条数 | 大于两条 |

**元素构成：**折线图主要包括坐标轴、图例、标签、图形等内容 <img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*zxbiRqpcMycAAAAAAAAAAAAAARQnAQ" width="100%">

- X 轴：通常对应连续数据，值为时间，调用连续数据 X 轴；
- Y 轴：通常对应连续数据，值为数字，调用连续数据 Y 轴；
- 图例：通常出现在多条折线图中，用来区分不同折线代表的数据含义；
- 标签：用来解释数据点的值；
- 图形：图形默认为线，也可以利用面积图渐变填充的方式强调趋势走向。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*z-M3QIorRgMAAAAAAAAAAAAAARQnAQ)

#

# 柱/条形图

**定义：**柱状图用于描述分类数据之间的对比，如果我们把时间周期，如周、月、年，也理解为一种分类数据 (time category)，那么柱状图也可以用于描述时间周期之间的数值比较。详见 AntV 官网 [柱形图 demo](https://g2plot.antv.vision/zh/examples/column/basic#basic)。

| 适合的数据 | 「一组或多组分类数据」+「一组或者多组对应的数值」 |
| :-- | :-- |
| 功能 | 对比分类数据的数值大小 |
| 数据与图形的映射 | 分类数据字段映射到横轴的位置，连续数据字段映射到矩形的高度，分类数据也可以设置颜色增强分类的区分度 |
| 适合的数据条数 | 分类数据不宜过多，不建议超过 20 条，如有多组分类数据，不建议超过 10 组 |

##

**元素构成：**与折线图一样，主要包括坐标轴、图例、标签、图形等内容。![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*DKfZR6-f5p0AAAAAAAAAAAAAARQnAQ)

- X 轴：通常对应分类数据，值为文本，调用连续数据 X 轴。
- Y 轴：通常对应连续数据，值为数字，调用连续数据 Y 轴。
- 图例：通常出现在分组柱关图、分组条形图中，用来区分不同柱子代表的数据含义。
- 标签：用来解释数据点的值。

##

**何时使用：**这个问题相信困扰着一些刚接触可视化的设计者。柱形图、条形图都是利用相同宽度下矩形的长度来表示维度之间度量值的大小区别，利用的视觉通道是绝对位置。在大多数情况下，折线图和柱形图是可以互相替换的。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*1PoBQIc-1VIAAAAAAAAAAAAAARQnAQ)![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*zgcvRZkfJzUAAAAAAAAAAAAAARQnAQ)

**适用于柱形图：**

1. 当图表画布长度大于高度时，利用宽度空间的富余，展现更多的柱形。

2. x 轴变量为时间等时序离散数据时，柱形图相当于强化了单时间点度量体量的“增强版折线图”。![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*klwjTL2S6AkAAAAAAAAAAAAAARQnAQ)

**适用于条形图：**

1. 当当图表画布长度大于高度时，利用高度空间的富余，展现更多的条形。

2. 当维度名称较长，在条形图的空间下可以展示更多的文字标签。

3. 条形图的上下排布更适合延伸出转化漏斗、排名占比等业务语义。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*WbFgTbEpfUgAAAAAAAAAAAAAARQnAQ)

# 饼图

**定义：**饼图通过扇形区块的面积，弧度和颜色等视觉标记，展现数据的分类和占比情况。它的特点是展现部分与部分之间，以及部分与整体的关系。部分相加之和等于整体的 100%，用整圆表示。详见 AntV 官网 [饼图 demo](https://g2plot.antv.vision/zh/examples/pie/basic#pie-state)。

| **适合的数据** | 一个「分类维度字段」和一个「数值度量字段」 |
| :-- | :-- |
| **功能** | 对比分类数据的数值大小 |
| **数据与图形的映射** | 「维度字段」的计数映射区块颜色和数量；「度量字段」的聚合值映射区块弧长和面积 |
| **适合的数据条数** | 建议区块数目不超过 9 种，超出的部分可以考虑合并显示为“其它” |

##

**元素构成：饼**图主要包括图形、标签、图例等内容。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*cpBZSpr-Pi0AAAAAAAAAAAAAARQnAQ)

- **图形(Element)：**饼图由扇形组成，环图由滑块组成。
- **图形标签(Label)：**显示各个区块的占比（%），名称（华东、华南、华北）和实际数值（123.45）。
- **复合指标：**在环图中心位置处显示，或以指标卡形式显示在图表上部分。

# 迷你图表 Minichart

**定义：**Minichart 通常在空间有限的情况下作为 fullsize chart 的降级显示形式，相比于 fullsize chart，Minichart 省略了轴和图例，标题，标签等组件，而只保留了图表图形的基本态势，因此展现的信息量是有限的，在静态展示状态下，只能体现数据的大概分布。详见 AntV 官网 [mini 图表](https://g2plot.antv.vision/zh/examples/gallery#category-%E8%BF%B7%E4%BD%A0%E6%8A%98%E7%BA%BF%E5%9B%BE)。

**Minichart 类型：**可折线图、面积图、柱形图、直方图、饼图、环形/条形进度条、子弹图等。

| 折线图 Sparkline | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*WT15RKQ5ragAAAAAAAAAAAAAARQnAQ) ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ZDxyR7u1nuoAAAAAAAAAAAAAARQnAQ) |
| --- | --- |
| 面积图 MiniArea | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*z88MTLwcvkwAAAAAAAAAAAAAARQnAQ) |
| 柱形图 MiniBar | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*bHz4Q6L2utMAAAAAAAAAAAAAARQnAQ) |
| 直方图 Histogram | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*qeh1SahCPSoAAAAAAAAAAAAAARQnAQ) |
| 环形进度条 | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*23KoTa9FMT0AAAAAAAAAAAAAARQnAQ) |
| 条形进度条 | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*WiE5SIMgWJ0AAAAAAAAAAAAAARQnAQ) |

##

**何时使用：**在有限的空间内展现数据的大体分布/趋势/占比关系。可以单独使用 Minichart 作为页面里的单个图表, 也可以搭配其他 UI 组件使用。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*pvh0S4b17QoAAAAAAAAAAAAAARQnAQ)
