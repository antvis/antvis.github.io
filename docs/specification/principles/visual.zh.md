---
title: 视觉
order: 1
---

AntV 色板（ 数据可视化色彩体系）是基于  [Ant Design 色彩体系](https://ant.design/docs/spec/colors-cn)，并结合数据可视化特性而设计的。<br />在数据可视化设计中，色彩的运用原则上应首先考虑准确性，先保证达到了信息传递、操作指引、交互反馈，或是强化、凸显某一个信息的目的，其次再去考虑品牌识别性。

选择 AntV 色彩时有以下三个注意点：

- 根据不同的数据特性选择相应的色彩，保证数据传达的准确性；

- 结合当前页面环境，建立视觉连续性；

- 视觉层次清晰可辨，保证色彩足够的对比度的同时也能够被视障碍（色盲、色弱）的用户辨别。

---

在可视化领域中，数据信息到颜色的映射是非常重要的一个环节，分为色调、饱和度、亮度三个视觉通道。通常色调属于分类的视觉通道，饱和度和亮度通常用于连续的视觉通道。

AntV 色板包含分类色板、连续色板和语义色板，用户选择色板时需对照数据特性选择相应的配色方案。

## 分类色板

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*XUT3T7L71bwAAAAAAAAAAABkARQnAQ' width=478/>

## 连续色板

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*DBFTS4jnrAoAAAAAAAAAAABkARQnAQ' width=750/>

> Ant Design 的色彩生成算法工具提供了[ 12 种连续色板](https://ant.design/docs/spec/colors-cn#%E5%9F%BA%E7%A1%80%E8%89%B2%E6%9D%BF)。

## 语义色板

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*rnGzSoja17YAAAAAAAAAAABkARQnAQ' width=750/>

---

## 使用指南

我们发现，在提供官方色板的前提下，仍有用户并不是十分擅长在实际场景中应用色板。在此我们提出几个设计指引供参考

### 生成自己的色板

如果你想生成一套自己的色板，那么我们建议您需要遵循以下原则，查看更多色板分析：[https://zhuanlan.zhihu.com/p/70121039](https://zhuanlan.zhihu.com/p/70121039)

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*bNf5TqyehdEAAAAAAAAAAABkARQnAQ' width=750/>

### 避免使用过多的颜色数量

在实际应用中，经常会出现大量颜色使用的误区，建议高亮重要的数据（不超过 8 个），其他数据默认置灰，通过图例交互进行查看。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*r01PSYbo5lwAAAAAAAAAAABkARQnAQ' width=600/>

### 数据映射的规则尽量简单

同样的数据，映射规则尽量保持为一种。<br />例如当使用柱形的高度来映射数据时，就不需要再加上颜色的维度去映射数据了。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*DdcHQYrSO_IAAAAAAAAAAABkARQnAQ' width=600/>

### 对应数据，做到准确的映射

对应自己的数据，按照数据特性选用对的色板，下图中分类数据应选用分类色板，而不是连续色板。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*UPgcSLEmTnkAAAAAAAAAAABkARQnAQ' width=600/>

### 解释你的颜色

当图表中出现不同颜色时，需要向读者解释颜色代表的含义。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*TMw5RYDOcAsAAAAAAAAAAABkARQnAQ' width=600/>

### 上下文保持颜色的一致性

对于统一度量，使用同样的颜色方案，而且在整个页面（通常是仪表盘）使用时，注意保持整体颜色方案的一致性。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*LcXRRL30oDwAAAAAAAAAAABkARQnAQ' width=750/>
