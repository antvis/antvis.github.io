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

<br />
<br />**元素构成：**折线图主要包括坐标轴、图例、标签、图形等内容
## ![](https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*uxv8RJgYx4oAAAAAAAAAAABkARQnAQ#align=left&display=inline&height=271&margin=%5Bobject%20Object%5D&originHeight=766&originWidth=2262&status=done&style=none&width=800)

- X 轴：通常对应连续数据，值为时间，调用连续数据 X 轴；
- Y 轴：通常对应连续数据，值为数字，调用连续数据 Y 轴；
- 图例：通常出现在多条折线图中，用来区分不同折线代表的数据含义；
- 标签：用来解释数据点的值；
- 图形：图形默认为线，也可以利用面积图渐变填充的方式强调趋势走向。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617790147-1a93693f-8b3a-42f9-b584-e0f7f76edb11.png#align=left&display=inline&height=1100&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1100&originWidth=3840&size=302766&status=done&style=none&width=3840)<br />

#

# 柱/条形图

**定义：**柱状图用于描述分类数据之间的对比，如果我们把时间周期，如周、月、年，也理解为一种分类数据 (time category)，那么柱状图也可以用于描述时间周期之间的数值比较。详见 AntV 官网 [柱形图 demo](https://g2plot.antv.vision/zh/examples/column/basic#basic)。

| 适合的数据 | 「一组或多组分类数据」+「一组或者多组对应的数值」 |
| :-- | :-- |
| 功能 | 对比分类数据的数值大小 |
| 数据与图形的映射 | 分类数据字段映射到横轴的位置，连续数据字段映射到矩形的高度，分类数据也可以设置颜色增强分类的区分度 |
| 适合的数据条数 | 分类数据不宜过多，不建议超过 20 条，如有多组分类数据，不建议超过 10 组 |

##

**元素构成：**与折线图一样，主要包括坐标轴、图例、标签、图形等内容。![](https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*O4GCSZuzPJ0AAAAAAAAAAABkARQnAQ#align=left&display=inline&height=266&margin=%5Bobject%20Object%5D&originHeight=497&originWidth=1492&status=done&style=none&width=800)

- X 轴：通常对应分类数据，值为文本，调用连续数据 X 轴。
- Y 轴：通常对应连续数据，值为数字，调用连续数据 Y 轴。
- 图例：通常出现在分组柱关图、分组条形图中，用来区分不同柱子代表的数据含义。
- 标签：用来解释数据点的值。

##

**何时使用：**这个问题相信困扰着一些刚接触可视化的设计者。柱形图、条形图都是利用相同宽度下矩形的长度来表示维度之间度量值的大小区别，利用的视觉通道是绝对位置。在大多数情况下，折线图和柱形图是可以互相替换的。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617790167-c44c7dd5-0c5f-4b12-8a42-c85601844b32.png#align=left&display=inline&height=253&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=580&size=21923&status=done&style=none&width=370)![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617790169-f66e8b71-0936-470d-acda-20e392be6d11.png#align=left&display=inline&height=253&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=580&size=26005&status=done&style=none&width=370)<br />**适用于柱形图：**<br />1. 当图表画布长度大于高度时，利用宽度空间的富余，展现更多的柱形。<br />2. x 轴变量为时间等时序离散数据时，柱形图相当于强化了单时间点度量体量的“增强版折线图”。![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617790146-2292ffd7-3ff9-4eec-a9a6-b84e6ac71f6e.png#align=left&display=inline&height=240&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=1222&size=42443&status=done&style=none&width=740)<br />**适用于条形图：**<br />1. 当当图表画布长度大于高度时，利用高度空间的富余，展现更多的条形。<br />2. 当维度名称较长，在条形图的空间下可以展示更多的文字标签。<br />3. 条形图的上下排布更适合延伸出转化漏斗、排名占比等业务语义。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617790128-ddae588e-44d9-47af-bacb-3e2d9a3a21d2.png#align=left&display=inline&height=240&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=1222&size=55408&status=done&style=none&width=740)<br /> <br />

# 饼图

**定义：**饼图通过扇形区块的面积，弧度和颜色等视觉标记，展现数据的分类和占比情况。它的特点是展现部分与部分之间，以及部分与整体的关系。部分相加之和等于整体的 100%，用整圆表示。详见 AntV 官网 [饼图 demo](https://g2plot.antv.vision/zh/examples/pie/basic#pie-state)。

| **适合的数据** | 一个「分类维度字段」和一个「数值度量字段」 |
| :-- | :-- |
| **功能** | 对比分类数据的数值大小 |
| **数据与图形的映射** | 「维度字段」的计数映射区块颜色和数量；「度量字段」的聚合值映射区块弧长和面积 |
| **适合的数据条数** | 建议区块数目不超过 9 种，超出的部分可以考虑合并显示为“其它” |

##

**元素构成：饼**图主要包括图形、标签、图例等内容。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617790167-0081b048-ecbe-4a28-a86f-02c18a84ff79.png#align=left&display=inline&height=232&margin=%5Bobject%20Object%5D&name=image.png&originHeight=464&originWidth=1488&size=44349&status=done&style=none&width=744)

- **图形(Element)：**饼图由扇形组成，环图由滑块组成。
- **图形标签(Label)：**显示各个区块的占比（%），名称（华东、华南、华北）和实际数值（123.45）。
- **复合指标：**在环图中心位置处显示，或以指标卡形式显示在图表上部分。

<br />
<br />

# 迷你图表 Minichart

**定义：**Minichart 通常在空间有限的情况下作为 fullsize chart 的降级显示形式，相比于 fullsize chart，Minichart 省略了轴和图例，标题，标签等组件，而只保留了图表图形的基本态势，因此展现的信息量是有限的，在静态展示状态下，只能体现数据的大概分布。详见 AntV 官网 [mini 图表](https://g2plot.antv.vision/zh/examples/gallery#category-%E8%BF%B7%E4%BD%A0%E6%8A%98%E7%BA%BF%E5%9B%BE)。<br /> <br /> <br />**Minichart 类型：**可折线图、面积图、柱形图、直方图、饼图、环形/条形进度条、子弹图等。

| 折线图 Sparkline | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/191639/1605497238522-2f08adc6-11e7-4d31-8d3f-635529cfd661.png#align=left&display=inline&height=65&margin=%5Bobject%20Object%5D&name=image.png&originHeight=68&originWidth=158&size=2321&status=done&style=none&width=150) ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/191639/1605497251055-902c10a4-33be-44ea-a168-5473a11d70c5.png#align=left&display=inline&height=66&margin=%5Bobject%20Object%5D&name=image.png&originHeight=68&originWidth=158&size=2409&status=done&style=none&width=154) |
| --- | --- |
| 面积图 MiniArea | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/191639/1605497277022-916a99a7-9c2d-45f0-9a68-02a999a8c2ff.png#align=left&display=inline&height=65&margin=%5Bobject%20Object%5D&name=image.png&originHeight=68&originWidth=158&size=2383&status=done&style=none&width=152) |
| 柱形图 MiniBar | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/191639/1605497212833-fcad6f27-2b5f-4f75-a14e-c053351547f9.png#align=left&display=inline&height=65&margin=%5Bobject%20Object%5D&name=image.png&originHeight=68&originWidth=158&size=977&status=done&style=none&width=152) |
| 直方图 Histogram | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/191639/1605497344649-1267e577-e478-49b8-b054-c541a3416a58.png#align=left&display=inline&height=65&margin=%5Bobject%20Object%5D&name=image.png&originHeight=68&originWidth=158&size=960&status=done&style=none&width=151) |
| 环形进度条 | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/191639/1605497419512-3ac6363d-5dc8-4fdc-82e8-8e8de5a52345.png#align=left&display=inline&height=89&margin=%5Bobject%20Object%5D&name=image.png&originHeight=98&originWidth=166&size=4137&status=done&style=none&width=150) |
| 条形进度条 | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/191639/1605497484870-03fea53e-4786-4edc-a71d-8836b5f20e41.png#align=left&display=inline&height=69&margin=%5Bobject%20Object%5D&name=image.png&originHeight=105&originWidth=659&size=9488&status=done&style=none&width=436) |

##

**何时使用：**在有限的空间内展现数据的大体分布/趋势/占比关系。可以单独使用 Minichart 作为页面里的单个图表, 也可以搭配其他 UI 组件使用。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617790142-cd242913-8ae7-4d97-a82e-5a52640b9902.png#align=left&display=inline&height=1024&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1024&originWidth=3030&size=771398&status=done&style=none&width=3030)
