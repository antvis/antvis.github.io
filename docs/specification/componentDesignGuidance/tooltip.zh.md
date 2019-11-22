---
title: 提示信息
order: 7
---

## 定义

提示信息 Tooltip，指当鼠标悬停在图表上或者手指点按移动设备的某个数据点时，**以交互提示**信息的形式展示该点的数据，比如该点的值，数据单位等。

---

## 何时使用

当你希望数据可视化作品对用户的操作有所反馈时，提示信息 Tooltip 就可以发挥作用。<br />例如：当用户悬停一个数据点时，如果仅数据点样式发生变化而没有其他任何提示，这看起来就像一个 Bug，建议同步显示提示信息 Tooltip 帮助用户深入了解数据点的详情。

---

## 元素

Tooltip 的基本元素包括：视觉标记图形，文本标签，数值标记等。 <br />Tooltip 的可选元素：所在的 UI 容器还可以和其他 UI 组件配合使用，完成过滤，下钻等自助分析功能。

<img src='https://gw.alipayobjects.com/zos/basement_prod/0677c002-9804-4d12-9d3f-744ec5d3c763.svg' width=750/>

---

## 类型

提示信息 Tooltip 按不同的图表类型，常见有如下四种：

| 跟随显示的浮层提示 | 与图例组合显示的提示 | 与轴组合显示的提示 | 图形上显示的提示 |
| --- | --- | --- | --- |
| 悬浮 | 固定位置 | 固定在轴上 | 固定在图形上 |
| <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*jWBiQa_9An0AAAAAAAAAAABkARQnAQ' width=243/> | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*863pQ7Uw3y8AAAAAAAAAAABkARQnAQ' width=750/> | [<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*DB8JTaxMB3sAAAAAAAAAAABkARQnAQ' width=292/> | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*qjY2Sp_5kCwAAAAAAAAAAABkARQnAQ' width=350/> |

### 跟随显示的浮层提示

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*I-40QY9l0qsAAAAAAAAAAABkARQnAQ' width=750/>

**适合设备：**PC 端<br />**出现位置：**悬浮即触发显示，跟随鼠标移动<br />**适合图表类型：**全部图表

### 与图例组合显示的提示

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*YzfWTYhikzYAAAAAAAAAAABkARQnAQ' width=750/>

**适合设备：**常用于移动端，PC 端也适用<br />**出现位置：**图表上方<br />**适合图表类型：**全部图表

### 与轴组合显示的提示

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*iiTwS5EqJ94AAAAAAAAAAABkARQnAQ' width=750/>

**适合设备：**常用于 PC 端，移动端也可使用<br />**出现位置：**轴上，覆盖轴标签<br />**适合图表类型：**散点图、气泡图等迪卡尔坐标系图表

### 图形上显示的提示

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*q7hcQYsi6NsAAAAAAAAAAABkARQnAQ' width=750/>

**适合设备：**PC 端、移动端均可<br />**出现位置：**图形上<br />**适合图表类型：**环图
