---
title: 移动端 Mobile
order: 5
---

AntV 拥有一套基于移动端的可视化图形语法图表库（F2），我们设计师在 Ant Design “准确、有效、清晰、美”的数据可视化原则的基础之上，融入移动端的特性，拓展出专门为移动端数据可视化而生的设计指引。

# 移动端特性

在移动端运用数据可视化之前应该清晰移动端的特性，主要有以下几方面：

> 1. 用户碎片化时间、浏览行为多于深入交互行为；
> 2. 多试用于触摸界面，和手势化的简单交互操作；
> 3. 硬件界面多样性；
> 4. 界面相对较小，内容信息呈纵向和多线性；
> 5. 用户操作时环境条件多样；
> 6. 网络电量相对不稳定，要求具有性能高及特殊状况下的良好体验。

# 设计建议

基于以上移动端的特性，结合 AntV 可视化设计原则，建议在产品中进行数据可视化设计时，遵循以下几点建议：

## 1、信息轻量聚焦

**聚焦当前场景用户任务，避免不必要的视觉元素干扰**。移动端可视化信息传递需要更加聚焦用户在场景中的任务和具体的信息，最大程度刨除图表展示中的无用或相对次要的信息及图形元素，**减少信息维度交叉的复杂性和视觉干扰**，巧妙采用流程、排版、动效的方式将信息拆解。

| PC | 移动端 |
| --- | --- |
| <img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*GT9kSaph_38AAAAAAAAAAAAAARQnAQ" width="500pt" height="500pt"> | <img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*UMuASYgxoJAAAAAAAAAAAAAAARQnAQ" width="500pt"> |
|  |

## 2、手势操作自然

移动端的硬件特质以及发展趋势，要求可视化的操作更符合人的自然行为反应，使交互操作更自然。手势方式的选择上应该源于生活经验，易于理解，学习成本低，用户无操作压力。

区别于游戏和其他沉浸式应用中的手势选择，在可视化场景中，**应该尽量避免高学习成本的手势，同时需要注意保持页面间交互的一致性**。以下为 AntV 的设计师推荐使用的最常用的标准手势：

![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*SmlZQY1NH-8AAAAAAAAAAAAAARQnAQ)

在 “信息轻量聚焦” 中我们提到移动端的可视化设计多聚焦于用户的直接任务，用[可视化交互](../language/interact) 一文中提及的任务层次来分析，移动端交互设计上会更聚焦在数据获取层，对复杂程度较高的交互行为要进行适度的克制。下图是 AntV 设计总结的常用手势表，给大家做参考。

| **动作** | **目的** | **操作** | **示例** |
| --- | --- | --- | --- |
| 浏览 | 寻找感兴趣的数据 | Touch and hold ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*sF5KQa9DBWAAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*EieBSL4__wgAAAAAAAAAAAAAARQnAQ) |
| 选中 | 对单个数据点感兴趣 | Tap ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*tr5mR5kLBsIAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*nwHFTocgGM0AAAAAAAAAAAAAARQnAQ) |
| 过滤 | 聚焦重点信息 | Touch and hold ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*PeAUQpdwouwAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*dsrjRqD_PUcAAAAAAAAAAAAAARQnAQ) |
| 缩放 | 探索、识别数据 | Pinch ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*wE0sT7UUeesAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*KKKGRKluIg4AAAAAAAAAAAAAARQnAQ) |
| 平移 | 探索更大的数据空间 | Swipe ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ELAJS7z5iLkAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*yWrQQ5aLj6UAAAAAAAAAAAAAARQnAQ) |

## 3、功能组件完善易用

由于硬件显示屏的限制，传统 PC 上的图表在展示上并不能很好的在移动端上做适应，因此对于某些功能组件，需要针对移动端做更具针对性的设计（以下拿 tooltip 为例）。由于硬件显示屏的限制，传统 PC 上的图表在展示上并不能很好的在移动端上做适应，因此对于某些功能组件，需要针对移动端做更具针对性的设计（以下拿 tooltip 为例）。

| 名称 | 改造前（传统 PC） | 改造后 |
| --- | --- | --- |
|  | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ZoSPT7_20ggAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*PwH6TaM68RgAAAAAAAAAAAAAARQnAQ) |
|  | 传统的 tooltip 的展示方式在移动端上展示时，浪费了更多的信息空间，并遮挡了有效信息。 | 有效利用屏幕的空间并尝试结合图例展示详细信息。 |

移动端可视化图表往往承载于卡片等“容器”的载体之上，对于图表本身而言也许并不需要复杂的栅格系统，但同样需要找到图表结构的动态空间秩序，达到无论硬件或“容器”如何变化，都有可遵循的『秩序之美』。

在移动端的可视化体系中，建议从三个方面出发：

- 容器尺寸；

- 布局及适配；

- 阅读模式切换。

### 4-1、容器尺寸

移动端的界面尺寸非常多样，为了保证在浏览状态下图表各信息显示的完整性，并在主流尺寸下显示更多信息内容，AntV 移动端的容器尺寸（下面会给出定义）建议用 4：3 比例进行设计。

![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*0pBBT6OStY8AAAAAAAAAAAAAARQnAQ)

### 4-2、布局及适配

虽然 AntV 的图表组件在各个组块的配置上给出了足够的灵活性，但由于移动端的硬件的多变性，设计师更应该带着适配的概念，判断哪些模块应该是确定，哪些模块应该动态适应硬件的变化，具体的模块定义如下图。

![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*c2dEQYQe0ZkAAAAAAAAAAAAAARQnAQ)

### 4-3、阅读模式切换

由于用户的某些细节阅读和深度分析的需要，需要对图表的展示形态做变化，使得用户更容易看到细节，或有利于用户的进一步的操作。主要包括：

#### 场景切换和纵向的适配

在不同页面中相同图表可能承载的用户诉求类型不相同，需要通过不同场景的切换和变化，来更好的满足并达到较好的用户体验。

|  | 在多图表的长页面中，多为浏览型的诉求，设计上更简明更快速做为主要体验目标。 | 对某一图表做进一步操作（详情、下钻等）时，可以通过切换场景或扩大面积方式，沉入式操作。 |
| --- | --- | --- |
| **场景切换** | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*xvpbT7v0sCkAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*Pp5mSYnkgbsAAAAAAAAAAAAAARQnAQ) |
| **纵向拉伸** | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*awcdToQjvVkAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*LtZXR4Ix14IAAAAAAAAAAAAAARQnAQ) |

#### 阅读模式的切换

在时间跨度比较大的时序数据图表中，纵向屏展示时很多数据细节会因清晰表达的原因隐藏掉，可以利用移动硬件的横竖屏的转换，横屏条件下展示更多信息。

| 纵向 | 横向 |
| --- | --- |
| ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*-oR1RL2HMTcAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*wMmORoD03okAAAAAAAAAAAAAARQnAQ) |

## 总结

本文基于移动端硬件及用户习惯的特性，对数据可视化图表的展示从信息整理、交互手势、功能模块改造、适配布局等四个角度，给出了一些在移动端可视化设计中的建议和指引，文中使用的案例均基于我们在 AntV F2 组件库中的实践，但指引并非是局限性的规则，目的是希望让每一个设计师能够转变思维，根据自身实际的设计场景，给出最优秀的移动端可视化设计方案。

最后，移动端可视化在现阶段已远远不只是承载于手机、平板设备上，试想，随着人们在智能数据化、IoT 、及穿戴式、虚拟屏设备上的不断探索，移动端可视化的设计将会有更多的趣味和可能性，也希望在未来和大家一起来探索。

| 名称 | 改造前（传统 PC） | 改造后 |
| --- | --- | --- |
|  | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*fYivSZFbascAAAAAAAAAAAAAARQnAQ) | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*fYgRQbW6lfYAAAAAAAAAAAAAARQnAQ) |
|  | 传统的 tooltip 的展示方式在移动端上展示时，浪费了更多的信息空间，并遮挡了有效信息。 | 有效利用屏幕的空间并尝试结合图例展示详细信息。 |
