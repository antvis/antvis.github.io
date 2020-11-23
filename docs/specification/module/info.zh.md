---
title: 信息组件 Info Component
order: 7
---

# 定义

信息组件（Info Component）是图形与数据映射关系实体的统称，我们常见的图例 Legend、提示信息 Tooltip 等都是信息组件的一种实体。信息组件可对图表中的数据进行转译，帮助阅读者更高效的理解图背后的数据。

# 为什么要有信息组件

信息组件是连接“数据层-表现层-洞察层”的桥梁，制作者将数据加工后通过信息组件进行视觉映射，阅读者通过信息组件与可视化作品进行交互。这两层转化需要灵活多变的组件来进行承载。

过去，我们设计图表的思路是特图特做，比如设计 PC 端折线图鼠标 hover 时，折线上方显示悬浮提示 Tooltip 组件。在移动端，因为没有鼠标 hover 操作，需将原来悬浮出现的 Tooltip 提示信息转化为更直观的组件，比如指标卡 Index Card 平铺显示。 <br />


![data-presentation-insights diagram.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*NzhrRp5OMtUAAAAAAAAAAAAAARQnAQ) 

<br />
有了信息组件，我们可以不必为 PC 端指定一种组件悬浮提示 Tooltip，为移动端指定一种组件指标卡 Index Card。信息组件可识别不同端，不同的设备，甚至不同的尺寸，在信息不丢失的情况下做组件形态的转变。

# 信息组件构成

信息组件由三类元素组合构成，它们分别是
**视觉标记 Visual Mark** ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*fAYgQqVrQUsAAAAAAAAAAAAAARQnAQ)、
**文本标签 Label** ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*V7IxT62HnSEAAAAAAAAAAAAAARQnAQ)、
**数值标签 Value** ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*5fNPQ4wtYAQAAAAAAAAAAAAAARQnAQ)。

## 视觉标记 

视觉标记是视觉通道映射的载体，常见的为颜色、形状等，具体详见 [视觉篇](../language/basic) 和 [色板篇](../language/palette)。

| **视觉通道** | **示例** |
| --- | --- |
| 颜色 | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*lACURZb7xg4AAAAAAAAAAAAAARQnAQ) |
| 形状 | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*4MTpRrcgDz4AAAAAAAAAAAAAARQnAQ) |
| 尺寸 | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*3P2URImQOnQAAAAAAAAAAAAAARQnAQ) |

## 文本标签 

文本标签此处特指显示数据标签名称的文本组件。样式详见 全局样式-数据标签。

## 数值标签 

文本标签此处特指显示数据数值的文本组件。样式详见全局样式-数据标签。

# 常见形态

**视觉标记 Visual Mark** ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*fAYgQqVrQUsAAAAAAAAAAAAAARQnAQ)、
**文本标签 Label** ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*V7IxT62HnSEAAAAAAAAAAAAAARQnAQ)、
**数值标签 Value** ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*5fNPQ4wtYAQAAAAAAAAAAAAAARQnAQ) 可组合变换出 N 种形态，常见的形态有以下 4 种：

1. 标签提示(Label）
2. 图例（Legend）
3. 指标卡（Index Card）
4. 提示信息（Tooltip）

![信息组件.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*NR2dQafLPtsAAAAAAAAAAAAAARQnAQ)

# 1.标签提示 Label

在图表中，标签是对当前的一组数据进行的内容标注。在图表中常见表现为中心文本，坐标提示，图形标签，注释标记。图形标签和注释标记详见 [标签 Label](./label) 和 [标注 Annotation](./annotation)<br /> 
<br />
![1.标签提示.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*C8NyRKDfAPsAAAAAAAAAAAAAARQnAQ)

## 中心文本

| **元素**     | **适合设备**      | **出现位置** | **适合图表类型**         |
| ------------ | ----------------- | ------------ | ------------------------ |
| Label、Value | PC 端、移动端均可 | 图形上       | 环图、环形进度条、仪表盘 |

![2.中心文本.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*I7aJToFelkYAAAAAAAAAAAAAARQnAQ)

## 坐标提示

| **元素** | **适合设备** | **出现位置** | **适合图表类型** |
| --- | --- | --- | --- |
| Value | PC 端、移动端均可 | 轴上，覆盖轴标签 | 散点图、气泡图等笛卡尔坐标系图表 |
<br />

![3.坐标提示.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*1lRmSIgd_bUAAAAAAAAAAAAAARQnAQ)

# 2.图例

## 分类图例 Categorical Legend

分类图例用于解释图表中的分类维度信息。依据视觉标记的不同，分类图例可分为颜色图例和形状图例。 

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*J7IEQJJtG6AAAAAAAAAAAAAAARQnAQ)

| **元素** | **适合设备** | **出现位置** | **适合图表类型** |
| --- | --- | --- | --- |
| Visual Mark + Label | PC 端、移动端均可，移动端更推荐仅静态显示 | 根据图表类型不同，推荐位置不同 | 几乎所有需要分类标记映射的图表。折面柱条饼环气泡散点等常见统计图表，符号地图，关系图等。 |

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*sX5ZR5e8eBoAAAAAAAAAAAAAARQnAQ)

**布局**

图例遵循流式布局，横向和纵向排列时超出区域，可以启用翻页。 

**1. 图例超出时翻页** 在 G2Plot 中，图例如果占据了图表大部分的位置，你可以发现内置提供了翻页功能。 

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*e_9hSL9BUt8AAAAAAAAAAAAAARQnAQ)

**2. 图例应该放在哪里？**

图例是对图形本身的概括。通常人的视觉动线是从上至下，从左到右。默认把图例放在左上角去做一个通用的方案看起来似乎很稳妥。但这样是最优做法吗？

更好的做法：**缩短用户对照图例看图形的本能路径，提升信息获取效率。**
<br />

虽然图例的位置从技术上支持了 12 个位置，我们总结了图例在不同的图表类型中不同的位置后，经过克制收敛为两类，并应用在统计图表类库 <a href='https://g2plot.antv.vision/zh/examples/gallery' target='_blank'>G2Plot</a> 以及智能生成图表 <a href='https://ava.antv.vision/' target='_blank'>AVA</a> 中。

设计者和观看者甚至并不会感知到位置的变化，但获取信息的效率就在不经意间提升了。
<br />

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*HIgXSrHrbm0AAAAAAAAAAAAAARQnAQ)

## 连续图例 Continuous Legend

连续图例用于提供图表中度量值的参考。
<br />

依据视觉标记的不同，连续图例可分为连续颜色图例和连续尺寸图例。连续图例通常适用于静态图表，提供大致的数据映射等级参考。在交互状态下用户依照 Tooltip 或 Label 查看详细信息更为方便。
<br />

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*HA7wQqZyihIAAAAAAAAAAAAAARQnAQ)

| **元素** | **适合设备** | **出现类型** | **适合图表类型** |
| --- | --- | --- | --- |
| Visual Mark + Label | PC 端、移动端均可，移动端更推荐仅静态显示 | 根据图表类型不同，推荐类型不同 | 需要解释度量映射的图表。气泡散点图、地图、关系图等。 |

**示例** 敬请期待此处的地图和关系图等复杂图表图例示例

**布局** 连续图例的布局规则与分类图例基本一致，可以位于图表上下左右的 12 个方位，也可以位于图表上方。 
<br />

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*e_9hSL9BUt8AAAAAAAAAAAAAARQnAQ)

# 3.提示信息 Tooltip

提示信息 (Tooltip)，是指当鼠标悬停在图形上时，以提示框的形式展示该点的数据，比如该点的值，数据单位等，帮助用户快速获取图形的关键数据。

当你希望数据可视化作品对用户的操作有所反馈时，提示信息 Tooltip 就可以发挥作用。

| **元素**                  | **适合设备** | **出现位置** | **适合图表类型** |
| ------------------------- | ------------ | ------------ | ---------------- |
| Visual Mark + Label+Value | PC 端        | 图表上方     | 全部图表         |

<br />

![Tooltip构成.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*DwQjTpXZZ_QAAAAAAAAAAAAAARQnAQ)

Tooltip 的基本元素包括：视觉标记图形，文本标签，数值标记等。 Tooltip 的可选元素：所在的 UI 容器还可以和其他 UI 组件配合使用，完成过滤，下钻等自助分析功能。
<br />

# 4.指标卡 Index Card

指标卡往往适用于折线图高亮某一时刻的指标数据。

| **元素** | **适合设备** | **出现位置** | **适合图表类型** |
| --- | --- | --- | --- |
| Visual Mark + Label+Value | PC 端、移动端均可，移动端适合代替 tooltip 交互显示 | 图表上方 | 全部图表 |

<br />

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*R1PXSYjVcx4AAAAAAAAAAAAAARQnAQ)

# 高阶用法 Advanced

## 高阶图例

### 带数值 

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*baNBQYfa31sAAAAAAAAAAAAAARQnAQ) 

### 带操作 

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*wqzmS799Gm4AAAAAAAAAAAAAARQnAQ)

## 适应设备环境多变

组件依据当前的设备和环境，尺寸和交互降级时，用于解释性的信息，可选择变化信息组件的形态承载。如下图所示，PC 端的图形 Label +分类图例，在移动端可变换为指标卡，在极小尺寸的迷你图表中可变换为 tooltip。用户所付出的交互和时间成本不同，可以看到尽量一致的信息。具体可以查看 [响应式篇](../language/media)。 ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ulwsQZ1i41MAAAAAAAAAAAAAARQnAQ)

# 扩展阅读

下面是一份对照表，可以帮助你更快决定自己的图表中应该使用何种信息组件。

![扩展阅读](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*a3EqQ7KAh3YAAAAAAAAAAAAAARQnAQ)
