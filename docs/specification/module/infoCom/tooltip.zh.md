---
title: 提示信息 Tooltip
order: 2
---

## 定义

提示信息 Tooltip，指当鼠标悬停在图表上或者手指点按移动设备的某个数据点时，**以交互提示**信息的形式展示该点的数据，比如该点的值，数据单位等。

---

## 何时使用

当你希望数据可视化作品对用户的操作有所反馈时，提示信息 Tooltip 就可以发挥作用。<br />例如：当用户悬停一个数据点时，如果仅数据点样式发生变化而没有其他任何提示，这看起来就像一个 Bug，建议同步显示提示信息 Tooltip 帮助用户深入了解数据点的详情。

---

## 元素

Tooltip 的基本元素包括：视觉标记图形，文本标签，数值标记等。 <br />Tooltip 的可选元素：所在的 UI 容器还可以和其他 UI 组件配合使用，完成过滤，下钻等自助分析功能。

![tooltip元素.svg](https://cdn.nlark.com/yuque/0/2019/svg/268442/1574330723800-269bdf1e-8159-4319-994d-421e80c91c2d.svg#align=left&display=inline&height=327&name=tooltip%E5%85%83%E7%B4%A0.svg&originHeight=327&originWidth=1120&size=43470&status=done&width=1120)

---

## 类型

提示信息 Tooltip 按不同的图表类型，常见有如下四种：

| 跟随显示的浮层提示 | 与图例组合显示的提示 | 与轴组合显示的提示 | 图形上显示的提示 |
| --- | --- | --- | --- |
| 悬浮 | 固定位置 | 固定在轴上 | 固定在图形上 |
| ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/355/1574255966078-63755349-5033-43b2-a0f6-df70a29ac0a5.png#align=left&display=inline&height=158&name=image.png&originHeight=158&originWidth=243&size=7372&status=done&width=243) | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/355/1567147875944-dbf41d25-6f71-40ab-a1e6-be466c5946e4.png#align=left&display=inline&height=491&name=image.png&originHeight=982&originWidth=1500&size=276037&status=done&width=750) | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/355/1574255804346-8ce64dcd-2e5c-498f-adff-4c30326cf75f.png#align=left&display=inline&height=178&name=image.png&originHeight=178&originWidth=292&size=8169&status=done&width=292) | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/355/1574257781958-4b379fe0-1f3d-4a1f-b562-773f8ca2bb6a.png#align=left&display=inline&height=248&name=image.png&originHeight=248&originWidth=350&size=22083&status=done&width=350) |

### 跟随显示的浮层提示

![image.png](https://cdn.nlark.com/yuque/0/2019/png/174999/1574301311775-582cea8c-0836-423d-897f-a2aa3b0f9c19.png#align=left&display=inline&height=591&name=image.png&originHeight=591&originWidth=1492&size=105438&status=done&width=1492)

**适合设备：**PC 端<br />**出现位置：**悬浮即触发显示，跟随鼠标移动<br />**适合图表类型：**全部图表

### 与图例组合显示的提示

![image.png](https://cdn.nlark.com/yuque/0/2019/png/174999/1574301311770-82e4e513-b8dc-4e40-ba92-8434f3d3b99e.png#align=left&display=inline&height=591&name=image.png&originHeight=591&originWidth=1492&size=40183&status=done&width=1492)

**适合设备：**常用于移动端，PC 端也适用<br />**出现位置：**图表上方<br />**适合图表类型：**全部图表

### 与轴组合显示的提示

![image.png](https://cdn.nlark.com/yuque/0/2019/png/174999/1574301311770-9d5464cf-d05f-4b80-b1d1-bc173f4058d8.png#align=left&display=inline&height=591&name=image.png&originHeight=591&originWidth=1492&size=33636&status=done&width=1492)

**适合设备：**常用于 PC 端，移动端也可使用<br />**出现位置：**轴上，覆盖轴标签<br />**适合图表类型：**散点图、气泡图等迪卡尔坐标系图表

### 图形上显示的提示

![image.png](https://cdn.nlark.com/yuque/0/2019/png/174999/1574301311696-d277fba0-a642-415d-81a9-619b16fa9656.png#align=left&display=inline&height=591&name=image.png&originHeight=591&originWidth=1492&size=42828&status=done&width=1492)

**适合设备：**PC 端、移动端均可<br />**出现位置：**图形上<br />**适合图表类型：**环图

##
