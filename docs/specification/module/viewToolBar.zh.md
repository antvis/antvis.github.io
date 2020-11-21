---
title: 视图控制栏 View ToolBar
order: 10
---

## 定义

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*c5L6TIo4WB4AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=320&margin=%5Bobject%20Object%5D&name=image.png&originHeight=320&originWidth=1562&size=993022&status=done&style=none&width=1562)

视图控制栏是用户与数据进行交互的载体，当用户操作视图工具栏时，可对视图可视区间缩放、平移、对数据进行检索、过滤等。

## 何时使用

以下两种情况，建议设计时开启视图控制栏。

- 数据绘制区域超过屏幕可视区域，为方便用户能以全局视角观察数据，建议开启视图控制栏。例：地图上的视图控制栏；
- 用户需要频繁与视图上的数据进行交互，比如放大、缩小视图空间，快速定位检索数据点等。例：公安通过关系网核查犯罪嫌疑人；

## 构成元素

![01.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*E3pES4vv9D0AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=352&margin=%5Bobject%20Object%5D&name=01.png&originHeight=352&originWidth=1884&size=36221&status=done&style=none&width=1884)

以下每组元素都为选配项

- 搜索；
- 画布控制按钮组：+、—、百分比、Mini Map 迷你视图（可选配）；
- 自定义组：可定制视图工具栏按钮，比如全屏、定位当前位置等操作。

## 常见类型

![02.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*I8dMQK3jwh8AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=424&margin=%5Bobject%20Object%5D&name=02.png&originHeight=424&originWidth=1884&size=62857&status=done&style=none&width=1884)

## 出现位置

- z-index 层级：层级高于画布，但低于视图中的 Tooltip 提示信息组件；
- 水平边距：距两边边距均为 8 的倍数；
- 位置：视布局需要，八个方向均可配置。

![03.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*89aDRrBlnV0AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=812&margin=%5Bobject%20Object%5D&name=03.png&originHeight=812&originWidth=1884&size=50732&status=done&style=none&width=1884)

## 交互说明

### 搜索

- 键盘操作：输入后，enter 执行搜索操作，按键盘 esc 可退出搜索框，搜索恢复 normal 态。

![04.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*XPsyQ4f1jRwAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=696&margin=%5Bobject%20Object%5D&name=04.png&originHeight=696&originWidth=1884&size=106974&status=done&style=none&width=1884)

### 画布控制按纽组

- 点击“+”，0 以上默认增幅 25%，100% 以上默认增幅 50%，建议最大值 200%；
- 点击”—“，100%~200% 之间，默认降幅 50%，100% 以下默认降幅 25%，建议早小值 25%；
- 百分比字体：Roboto Condensed；
- 键盘操作：按 esc 可退出已激活的下拉框。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*RJs7T67ptNUAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=1024&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1024&originWidth=1884&size=220672&status=done&style=none&width=1884)

### Mini Map

- 键盘操作：按 esc 可退出已显示的 Mini Map。

![06.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*jSwQQaWl9OYAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=1020&margin=%5Bobject%20Object%5D&name=06.png&originHeight=1020&originWidth=1884&size=180155&status=done&style=none&width=1884)

## 设计建议

### 按钮分组显示

建议视图控制栏按钮按照格式塔原理分组显示。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*NZOfT6iidTMAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=416&margin=%5Bobject%20Object%5D&name=image.png&originHeight=416&originWidth=1884&size=111992&status=done&style=none&width=1884)

### 遵循用户阅读习惯

画布初始位置，建议符合从左至右，从上至下的阅读习惯，而不是一刀切显示视图的正中间。比如：

- 思维导图建议贴左，垂直居中；
- 关系图将起始节点居中显示；
- DAG 流程图建议贴上，水平居中；

### 效率优先

建议视图增快捷操作，提升使用效率

- 放大 +：Ctrl/⌘ + +
- 缩小 -：Ctrl/⌘ + —
- 100% 1:1 等比例显示：Ctrl/⌘ + 0
- 适应画布显示：Ctrl/⌘ + 1

### 全场景考虑

- 建议补充移动端样式及交互；
- 补充 Dark Mode 模式。
