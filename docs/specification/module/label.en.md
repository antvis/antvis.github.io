---
title: 标签 Label
order: 2
---

## 定义

在图表中，标签是对当前的一组数据进行的内容标注。

<br />

## 元素

包括数据点、拉线、文本数值等元素，根据不同的图表类型选择使用。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*48m4QpCnyp8AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=309&name=image.png&originHeight=618&originWidth=2190&size=85460&status=done&width=1095)

## 显示策略

通常标签显示在图形外，但在「堆叠类」图表中，标签会显示在图形内。如下图：<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*_mkHQKT8bogAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=262&name=image.png&originHeight=716&originWidth=1030&size=51288&status=done&width=377)<br />标签的文本和图形经常需要交叠展示，所以可读性需要足够良好，所以通过对 HS 值的判断，决定文字的颜色。这样对比度就在可控范围内，不会出现可读性的问题。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*yTziRrxxIgwAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=318&name=image.png&originHeight=636&originWidth=500&size=44263&status=done&width=250)

<br /><br />

## 常见问题

### 问题 1：图表标签重叠时怎么办？

标签重叠时，g2plot 的默认方案为动态计算的抽样显示，在标签重叠时，自动隐藏其中一个，同时当 Hover 图表时，显示被隐藏的对应的数据。这样保证了图表的清晰度，也保证了信息的完整性。<br />![标签自适应.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*yxjZRbvQ7j0AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=250&name=%E6%A0%87%E7%AD%BE%E8%87%AA%E9%80%82%E5%BA%94.gif&originHeight=797&originWidth=825&size=935159&status=done&width=259)

### 问题 2：我可以自定义标签吗？

可以，通过配置项你可以修改标签的样式，包括点的形状、文字大小等，但我们还是建议您使用默认方案。
