---
title: Axis
order: 3
---

## 定义

坐标轴指二维空间中统计图表中的轴，它用来定义坐标系中数据在方向和值的映射关系的图表组件。

## 何时使用

在二维笛卡尔坐标系中，轴通常为水平方向的横轴（x 轴）和竖直方向的纵轴（y 轴）。极坐标系中，轴分为切向的切向轴（angle）和径向轴（radius）。

## 构成元素

坐标轴主要构成元素包括：轴标题、轴标签、轴线、轴刻度线、坐标网格线。

![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*o8XoSJZQRDcAAAAAAAAAAABkARQnAQ#align=left&display=inline&height=780&margin=%5Bobject%20Object%5D&originHeight=780&originWidth=2204&status=done&style=none&width=2204)

### 轴标题

**设计建议**

- 通常都建议加上轴标题解释轴的含义。当图表其他部分的内容（图表标题，图形标签，注释，轴标签文字等）已能充分显示轴的意义，可以略去轴标题，精简画面元素。
- 除了数值百分比（%），科学计数法单位（k/m/g）、日期时间（年/月/日）单位和其他情况的数据单位建议在轴标题中显示，在各个轴标签中略去；例：生产总值（亿元）。

![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*LL6zQ6sIxwQAAAAAAAAAAABkARQnAQ#align=left&display=inline&height=710&margin=%5Bobject%20Object%5D&originHeight=710&originWidth=2194&status=done&style=none&width=2194)

##

### 轴标签

**设计建议：**

- 可根据图表类型设置轴标签是否显示、旋转角度以及显示间隔。
- 对文本数据：不建议开启抽样。
- 对数值数据：不建议开启尾部省略。
- 连续轴、时间轴默认自动抽样 + 不旋转；
- 分类轴默认自动旋转 + 自动省略。

![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Ii5XTb5oHIUAAAAAAAAAAABkARQnAQ#align=left&display=inline&height=1392&margin=%5Bobject%20Object%5D&originHeight=1392&originWidth=2266&status=done&style=none&width=2266)

轴标签「若图形区域内有数据标签」，则轴标签可以考虑隐藏，如下图：

![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*C2QwTo41DyUAAAAAAAAAAABkARQnAQ#align=left&display=inline&height=806&margin=%5Bobject%20Object%5D&originHeight=806&originWidth=2378&status=done&style=none&width=2378)

## 轴类型

映射轴的数据类型可分为

![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*OcosRYoYmDAAAAAAAAAAAABkARQnAQ#align=left&display=inline&height=480&margin=%5Bobject%20Object%5D&originHeight=480&originWidth=1832&status=done&style=none&width=1832)

与此对应，轴可以分为：分类轴，时间轴，连续轴。

![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zc8XRKCr4hEAAAAAAAAAAABkARQnAQ#align=left&display=inline&height=546&margin=%5Bobject%20Object%5D&originHeight=546&originWidth=1710&status=done&style=none&width=1710)

##

## 双轴图如何设计？

顾名思义，双轴图共用 Y 轴值域区间，它含有两个 Y 轴左标轴，左右各一个。双轴图的使用大大提高了屏效。

**设计建议**

- 尽量保证基线从「0」开始，且左右 Y 轴分段数量一致；
- 建议两组数据的 Y 轴单位是不同的，比如一组为「人数」，一组为「百分比」；
- 建议开启轴标题。

![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*s0xhQZmQMH8AAAAAAAAAAABkARQnAQ#align=left&display=inline&height=614&margin=%5Bobject%20Object%5D&originHeight=614&originWidth=2348&status=done&style=none&width=2348)
