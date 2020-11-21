---
title: 图形 Element
order: 1
---

## 定义

图形是统计图表的视觉通道在形状上映射的视觉展现，是图表的主体部分。图表中其他组件的目的皆是帮助读者更好地理解数据在图形上的映射关系。

## 何时使用

图形可以通过视觉特征更快地被读者感知和接受。从认知学的角度，人眼在对图形的获取效率远高于对抽象意符的理解。所以图形是数据可视化的必备元素，承载着数据背后蕴含的信息。

图形是可视化图表区别于表格和文本的最重要元素。是每个可视化通常必须包含的组件，且通常很大程度上决定了该可视化的有效性与美观度。一个优秀的可视化作品，其图形必定能准确、清晰地呈现背后的数据，带给读者启发和信息。一个优美的可视化作品，其图形是标题信息之后首先被读者注意到的部分，是 data-storytelling 过程戏剧张力和引发读者注意力的载体。

可视化设计中，较图形的美观度更重要的，是作者想表达的数据特性能否被准确地通过图形表达出来。数据特性和用户的认知水平可以帮助可视化设计师决定有效的图形映射类型和视觉映射通道，设计师再通过读者阅读的媒介、设备和环境决定可视化作品的人机交互方式，最后考虑到图形的美观度设计。

## 类型

按照基础图表类型，图形可分为：折线，面积，散点，气泡，饼/环，柱形，条形。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*TuBQT76fCmwAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=551&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1102&originWidth=1794&size=81842&status=done&style=none&width=897)

## 样式

二维空间内的统计图表图形属性遵循计算机视觉元素构成，有 填充，描边，阴影等样式。

## 用法建议

#### 图形比例

以柱条形图为例，柱形/条形比例和两边间距的比例为 1：2：1，柱子宽度为总宽度的 60%。

直方图中的柱形会相比之下排布更加密集，柱子之间间距恒定为 1px。

环形图扇区的外半径和内半径比例为 5：3， 外半径和画布尺寸的 80%。

####

#### 填充样式

根据图形元素在实际图表中的面积占比，我们定义了相应的填充样式。图形占比越大的图表，对应填充的透明度越高。如，在柱/条形图中，图形的填充比例为 95%；在面积图中，图形的填充比例为 25%；在折线图中，可以通过渐变填充的方式强调线条的位置。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*BsLlTZMjZzgAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=164&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=579&size=19005&status=done&style=none&width=240)![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*BpLySKzrilEAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=164&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=580&size=38749&status=done&style=none&width=240)![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*c22ERo00WQUAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=164&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=580&size=21727&status=done&style=none&width=240)

####

#### 与交互状态关联

图形可以吸引用户的注意力，因而在交互语法中，图形在正常态、悬浮态、选中态、被动高亮态，都有显著的视觉样式区别，交互状态的变化基于图形设计，保证了整个可视化设计体系和体验的一致。

| mouse-event | null | hover | click | click |
| --- | --- | --- | --- | --- |
| visual-state | default | highlighted | active | de-active |
| Style | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*yMgBTp-7rSIAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=124&margin=%5Bobject%20Object%5D&name=image.png&originHeight=248&originWidth=248&size=23181&status=done&style=none&width=124) | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*QYIkQqbquRgAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=124&margin=%5Bobject%20Object%5D&name=image.png&originHeight=248&originWidth=248&size=20398&status=done&style=none&width=124) | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*HMFdQb6Gk7EAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=124&margin=%5Bobject%20Object%5D&name=image.png&originHeight=248&originWidth=248&size=20694&status=done&style=none&width=124) | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*wFFnTrSJPMIAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=124&margin=%5Bobject%20Object%5D&name=image.png&originHeight=248&originWidth=248&size=20106&status=done&style=none&width=124) |

####

#### 为信息重要性服务

在不同尺寸下的响应式布局中，依据图形对应代表的信息优先级，决定图形的展现策略。

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*TlnxRIJrZ24AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=235&margin=%5Bobject%20Object%5D&name=image.png&originHeight=235&originWidth=995&size=53572&status=done&style=none&width=995)

持续更新中，敬请期待…
