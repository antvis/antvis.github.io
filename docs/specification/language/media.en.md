---
title: 响应式
order: 3
---

## 为什么需要响应式

数据可视化始终面对无限（海量）数据与有限屏幕空间的冲突，如何解决不同端、不同屏幕尺寸下内容的适配问题，在有限的空间内帮助用户更快地理解信息和获取洞见，是我们一直致力研究的问题。如果可视化图表缺少合适的布局方案，看似美好的设计稿，在灌入未知体量的数据或者改变尺寸时会变得惨不忍睹。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617387316-9da34a07-fa22-4275-8f21-454b8e05d294.png#align=left&display=inline&height=810&margin=%5Bobject%20Object%5D&name=image.png&originHeight=810&originWidth=1520&size=543259&status=done&style=none&width=1520)<br /> <br />

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
- **微观: **空间有限时，体现主要信息，保留图形特征。

所有尺寸下细节信息都能通过交互获取到。<br />

### 对应技术方案

数据可视化的响应式设计包括“响应式”与“自适应”

- Responsive design 响应式：缩放图表其结构和外观保持不变，能适应显示区域。
- Adaptive design 自适应：根据显示区域调整图表的结构和外观，如图表布局、信息密度、交互方式等。

![111.gif](https://cdn.nlark.com/yuque/0/2020/gif/100257/1605617387337-8e10af54-17cb-42b2-89f2-30fdbdc398e3.gif#align=left&display=inline&height=386&margin=%5Bobject%20Object%5D&name=111.gif&originHeight=386&originWidth=544&size=758469&status=done&style=none&width=544)<br />

## 设计流程

不同于传统的 UI 组件，图表的多端适配显示既要考虑报表的整体与页面其他元素/图表的响应式布局，也要考虑图表内组件之间的自适应布局。在 Ant Design 的可视化体系中，我们自研出一套适用于全量图表的布局适应规则，从整体图表、图表内原子组件梳理了适用于所有图表的布局适应体系，设计流程如下图：<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617387299-2d951f93-41ef-4ecb-bd0a-8cfe69f44762.png#align=left&display=inline&height=160&margin=%5Bobject%20Object%5D&name=image.png&originHeight=320&originWidth=1492&size=56495&status=done&style=none&width=746)<br /> <br />

### 1.定义经典布局

考虑到信息展现地尽量完整和美观，图表的布局规则会相对灵活和细致。同时，PC 端，移动端和大屏，不同端的交互方式也要求图表的组件做到相应的转换和适配。<br /> <br />作为开始，我们可以针对图表，找到最频繁显示图表的屏幕尺寸。如 PC 端一行放三个图表，560px 的宽度，和移动端一行放一个图表，350px 的宽度。本示例中还包含了极小尺寸下的迷你布局。<br />对三种尺寸的图表（PC、Mobile、Mini），分别定义经典布局。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617387335-a4c62f50-6e30-4031-a000-f10edc431032.png#align=left&display=inline&height=243&margin=%5Bobject%20Object%5D&name=image.png&originHeight=364&originWidth=1119&size=25446&status=done&style=none&width=746)<br />

### 2. 拆解构成

取单个经典布局，拆解为图表组件级的构成。如下图，统计图表 Chart&Plot 可以拆解为 Title，Toolbar，Axes，Element，Label，InfoComponent-legend，Guideline 等。之后我们将对每个图表组件、以及组件之间的关系为切入点，约束布局。<br />![视觉-平面构成.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605617387340-22e80c9e-5e24-4658-aedc-8a4cadd04954.jpeg#align=left&display=inline&height=1264&margin=%5Bobject%20Object%5D&name=%E8%A7%86%E8%A7%89-%E5%B9%B3%E9%9D%A2%E6%9E%84%E6%88%90.jpg&originHeight=1264&originWidth=3840&size=226717&status=done&style=none&width=3840)<br /> <br />

### 3. 确定信息优先级

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617387295-c1a5c6d6-0bea-4a6c-ad28-c01ebcef0716.png#align=left&display=inline&height=300&margin=%5Bobject%20Object%5D&name=image.png&originHeight=600&originWidth=1740&size=397554&status=done&style=none&width=870)

### 4. 明确约束条件

**外部约束：**包含屏幕尺寸和设备属性。前者可拆解出断点范围，后者进一步约束了交互状态。<br />**内部约束：**包含组件所在的大小，组件内元素个数和间距。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617387310-c83bf13f-6800-4a1d-8c64-8a0c390e9c38.png#align=left&display=inline&height=941&margin=%5Bobject%20Object%5D&name=image.png&originHeight=941&originWidth=2299&size=222347&status=done&style=none&width=2299)<br /> <br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617387315-ab210d7d-9de1-4728-9cb8-5d0ef6c185db.png#align=left&display=inline&height=585&margin=%5Bobject%20Object%5D&name=image.png&originHeight=585&originWidth=1710&size=153373&status=done&style=none&width=1710)<br />

### 5. 采取响应策略

其中，省略、换行、旋转、抽样，依赖于数据属性。转化方式依赖于设备的限制。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617387374-c39a59d2-132a-45f8-afeb-a30d8b43ba3d.png#align=left&display=inline&height=155&margin=%5Bobject%20Object%5D&name=image.png&originHeight=310&originWidth=1492&size=204928&status=done&style=none&width=746)<br /> <br />

### 6. 布局适应规则

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617387352-b1e85b68-5801-4521-b998-1ffb7a4965c2.png#align=left&display=inline&height=308&margin=%5Bobject%20Object%5D&name=image.png&originHeight=616&originWidth=3546&size=938691&status=done&style=none&width=1773)<br />

##

## 案例

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617387359-984c0be4-7f9f-4aa3-91ff-4094e4890209.png#align=left&display=inline&height=343&margin=%5Bobject%20Object%5D&name=image.png&originHeight=686&originWidth=1492&size=209786&status=done&style=none&width=746)<br /> <br /> <br />
