---
title: 响应式
order: 3
---

## 为什么需要响应式

数据可视化始终面对无限（海量）数据与有限屏幕空间的冲突，如何解决不同端、不同屏幕尺寸下内容的适配问题，在有限的空间内帮助用户更快地理解信息和获取洞见，是我们一直致力研究的问题。如果可视化图表缺少合适的布局方案，看似美好的设计稿，在灌入未知体量的数据或者改变尺寸时会变得惨不忍睹。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*J33ZRbJy4swAAAAAAAAAAAAAARQnAQ)<br /> <br />

## 挑战

- 图表本身构成复杂；
- 数据体量不可预知；
- 设计者对显示的不足做点状修补，无法给出体系化的解决方案；
- 开发者欠缺专业的可视化知识；
- 开发者依赖底层组件能力，无法二次改造。

<br />
<br />

## 如何解决

### 信息响应原则

- **宏观：**保证核心信息优先展示，体现数据主要特征。<br />折线图展现趋势和变化，柱形图展现排名和分布，饼图展示占比。
- **微观：**空间有限时，体现主要信息，保留图形特征。

所有尺寸下细节信息都能通过交互获取到。<br />

### 对应技术方案

数据可视化的响应式设计包括“响应式”与“自适应”

- Responsive design 响应式：缩放图表其结构和外观保持不变，能适应显示区域。
- Adaptive design 自适应：根据显示区域调整图表的结构和外观，如图表布局、信息密度、交互方式等。

![111.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*kI7lQqlScEAAAAAAAAAAAAAAARQnAQ)<br />

## 设计流程

不同于传统的 UI 组件，图表的多端适配显示既要考虑报表的整体与页面其他元素/图表的响应式布局，也要考虑图表内组件之间的自适应布局。在 Ant Design 的可视化体系中，我们自研出一套适用于全量图表的布局适应规则，从整体图表、图表内原子组件梳理了适用于所有图表的布局适应体系，设计流程如下图：<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*QbsmSp_lWIAAAAAAAAAAAAAAARQnAQ)<br /> <br />

### 1.定义经典布局

考虑到信息展现地尽量完整和美观，图表的布局规则会相对灵活和细致。同时，PC 端，移动端和大屏，不同端的交互方式也要求图表的组件做到相应的转换和适配。<br /> <br />作为开始，我们可以针对图表，找到最频繁显示图表的屏幕尺寸。如 PC 端一行放三个图表，560px 的宽度，和移动端一行放一个图表，350px 的宽度。本示例中还包含了极小尺寸下的迷你布局。<br />对三种尺寸的图表（PC、Mobile、Mini），分别定义经典布局。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*yrLpSLLqDpUAAAAAAAAAAAAAARQnAQ)<br />

### 2. 拆解构成

取单个经典布局，拆解为图表组件级的构成。如下图，统计图表 Chart&Plot 可以拆解为 Title，Toolbar，Axes，Element，Label，InfoComponent-legend，Guideline 等。之后我们将对每个图表组件、以及组件之间的关系为切入点，约束布局。<br />![视觉-平面构成.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*PAoUTJTT6BgAAAAAAAAAAAAAARQnAQ)<br /> <br />

### 3. 确定信息优先级

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*UAXeQJbDyrkAAAAAAAAAAAAAARQnAQ)

### 4. 明确约束条件

**外部约束：**包含屏幕尺寸和设备属性。前者可拆解出断点范围，后者进一步约束了交互状态。<br />**内部约束：**包含组件所在的大小，组件内元素个数和间距。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*CdDuRpbruiUAAAAAAAAAAAAAARQnAQ)<br /> <br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*83S4RrimvY0AAAAAAAAAAAAAARQnAQ)<br />

### 5. 采取响应策略

其中，省略、换行、旋转、抽样，依赖于数据属性。转化方式依赖于设备的限制。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*A29USbqd4LkAAAAAAAAAAAAAARQnAQ)<br /> <br />

### 6. 布局适应规则

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ooAbTblu2YEAAAAAAAAAAAAAARQnAQ)<br />

##

## 案例

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*HU3-TYt4628AAAAAAAAAAAAAARQnAQ)<br /> <br /> <br />
