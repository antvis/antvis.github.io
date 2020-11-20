---
title: Legend
order: 1
---

## 定义

图例解释了图表区域中包含的所有视觉元素的含义。<br />

## 何时使用

对图表中的图形进行解释说明，用来**映射图形的尺寸、颜色、数值大小**等含义，帮助用户直观地理解图表。<br />

## 元素

由映射图形形状 + 文本组成。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*KoYURZ2NBuQAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=340&margin=%5Bobject%20Object%5D&name=image.png&originHeight=680&originWidth=1718&size=42597&status=done&style=none&width=859)<br />

## 类型

根据数据类型不同，分为**连续型图例**和**分类型图例**。<br />根据状态不同，图例可以被设置为**静态**或可**交互态**。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*hzFyQojp6GIAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=362&margin=%5Bobject%20Object%5D&name=image.png&originHeight=724&originWidth=1994&size=136153&status=done&style=none&width=997)<br />

## 常见问题

### 问题 1：如何决定图例的位置？

图例是对图形本身的概括。通常人的视觉动线是从上至下，从左到右。默认把图例放在左上角去做一个通用的方案看起来没毛病。<br />但更好的做法是：**缩短用户对照图例看图形的本能路径，提升信息获取效率。**<br />![2019-11-19 21-13-53.2019-11-19 21_16_50.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*0bCLSqyxd7IAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=925&margin=%5Bobject%20Object%5D&name=2019-11-19%2021-13-53.2019-11-19%2021_16_50.gif&originHeight=925&originWidth=2147&size=1159781&status=done&style=none&width=2147)<br />虽然图例的位置从技术上支持了 12 个位置，我们总结了图例在不同的图表类型中不同的位置后，经过克制收敛为两类，并应用在 plot 图表类库中，以及智能生成图表工具中。<br />**设计者和观看者甚至并不会感知到位置的变化，但是对应图形获取信息的效率就在不经意间提升了。**<br />![02.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*j2TkTospEqwAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=314&margin=%5Bobject%20Object%5D&name=02.gif&originHeight=1059&originWidth=1691&size=223891&status=done&style=none&width=501)<br />

### 问题 2：图例太多怎么办？

在 g2plot 中，图例如果占据了图表大部分的位置，你可以发现我们提供了翻页功能。
