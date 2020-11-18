---
title: 缩略轴 Axis Navigator
order: 4
---

## 定义

缩略轴是一种辅助看数据的组件，它将大量数据浓缩在一个轴上，既可以缩小宏观看数据全貌，又可以放大微观看数据的片断，同时还可以拖拽观察数据在一定区间内的演变。<br />![缩略轴-2.gif](https://cdn.nlark.com/yuque/0/2020/gif/100257/1605618325737-fa1a65ee-e1c3-425d-bcaf-9ef4bb4cff69.gif#align=left&display=inline&height=459&margin=%5Bobject%20Object%5D&name=%E7%BC%A9%E7%95%A5%E8%BD%B4-2.gif&originHeight=459&originWidth=1440&size=3061571&status=done&style=none&width=1440)<br /> <br /> <br />

## 何时使用

缩略轴是值域数据的浓缩，它跟轴的类型息息相关。一般来说时间轴上使用缩略轴的频率高，连续轴使用缩略轴频率低、分类轴几乎不会用到缩略轴。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618325715-0f2721a5-1ae7-417e-93dd-fba3356d0453.png#align=left&display=inline&height=273&margin=%5Bobject%20Object%5D&name=image.png&originHeight=546&originWidth=1710&size=46284&status=done&style=none&width=855)

- 时间轴，数据跨度非常大，【高频使用】，比如一组时序数据跨度 10 年，需观察这期间数据变化趋势时，建议开启缩略轴；
- 时间轴，数据密度很高，【高频使用】，比如分钟级更新的实时数据，当需要查看一天内的数据走势时，建议开启缩略轴；
- 连续轴，数据密度很高，【低频使用】比如查看 1-100 岁平均身高分布，开启缩略轴可以全局查看身高分布；
- 分类轴【不建议使用】。

<br />
<br />
<br />

## 常见类型

### X 轴缩略轴

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618325691-44b4533c-5c5e-4436-ad9e-90c175a80ac3.png#align=left&display=inline&height=166&margin=%5Bobject%20Object%5D&name=image.png&originHeight=166&originWidth=1160&size=50382&status=done&style=none&width=1160)<br /> <br />

### Y 轴缩略轴

![纵赂缩略轴.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605618325693-46eb2193-22c1-4f3e-97a8-9f7fb2256ea4.jpeg#align=left&display=inline&height=532&margin=%5Bobject%20Object%5D&name=%E7%BA%B5%E8%B5%82%E7%BC%A9%E7%95%A5%E8%BD%B4.jpg&originHeight=532&originWidth=1242&size=97364&status=done&style=none&width=1242)<br /> <br /> <br /> <br />

## 构成元素

缩略轴主要包括轴“主体”与“轴刻度”，其中“轴刻度”可以隐藏不显示。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618325677-7ce35aac-2197-44ed-93ac-208aefe85a70.png#align=left&display=inline&height=216&margin=%5Bobject%20Object%5D&name=image.png&originHeight=216&originWidth=1120&size=76714&status=done&style=none&width=1120)<br /> <br /> <br />

## 出现位置

缩略轴可出现在图的四个方向，一般建议摆放在左、下、右方，上方因为有过多的图表组件（标题、图例、筛选器等）不建议摆放。![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618325710-a265dcf5-a4da-40dc-9f54-46e696d33bb7.png#align=left&display=inline&height=406&margin=%5Bobject%20Object%5D&name=image.png&originHeight=406&originWidth=913&size=143288&status=done&style=none&width=913)<br /> <br /> <br /> <br />

## 交互说明

### 缩略轴主题色

缩略轴建议与图表主题配色搭配使用，让整体更加和谐美观。假设你的图表主题色为蓝色，那么缩略轴选定区域也应该为蓝色，同理也可以为橙色。<br />![缩略轴主题色.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605618325727-34c605d6-6c3a-4d01-98e0-ded5dacd642c.jpeg#align=left&display=inline&height=428&margin=%5Bobject%20Object%5D&name=%E7%BC%A9%E7%95%A5%E8%BD%B4%E4%B8%BB%E9%A2%98%E8%89%B2.jpg&originHeight=428&originWidth=1884&size=48190&status=done&style=none&width=1884)<br /> <br /> <br />

### 文本躲避规则

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618325671-bdcd1ac3-fb7f-4291-a1ab-2908b0577928.png#align=left&display=inline&height=706&margin=%5Bobject%20Object%5D&name=image.png&originHeight=706&originWidth=1884&size=333364&status=done&style=none&width=1884)<br /> <br /> <br />

### 与时间轴的关系

时间轴是缩略轴的分支，差异点如下：

| 类型 | 支持数据类型 | 摆放位置 | 支持配件 |
| --- | --- | --- | --- |
| [缩略轴 Axis Navigator](https://yuque.antfin.com/antv/operation/rcuc1x) | 时间轴（时序数据）、连续轴（非连序数据）均可 | X、Y 轴均可 | 无时间配置有播放器 |
| [时间轴 TimeBar](https://yuque.antfin.com/antv/operation/srn89v/) | 必须要有时间轴（时序数据） | X 轴 | 有时间配置与播放器 |
