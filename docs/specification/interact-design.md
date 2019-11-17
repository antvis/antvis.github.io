---
title: 交互设计指引
order: 3
redirect_from:
  - /zh/docs/specification
---

## 交互式图表

区别于传统数据报表相对静态的表现形式，交互式图表并不停留在信息展示层面。用户通过与图不断产生交互，从数据中获取更深层次的分析和信息。

常见的图表交互 PC 端有经过、点击、框选、平移，移动端有轻点、轻扫等操作，但仅仅只有这些吗？随着意识的不断深入，用户要从图上获取的信息远不是鼠标经过、点击、平移能够得到，也就是说要获取更多的信息，图表需要有更多的交互行为支持。

## 任务层次

Shneiderman  于 1996 年提出可视化信息检索的箴言 “Overview First, Zoom and Filter, Then Details-on-Demand”，译为“概览第一，聚焦过滤，再按需查看详情”。它符合人类寻求信息的基本逻辑：先大体，再局部，然后聚焦兴趣点进行探索，这是一个由表及里的过程。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*_8WNQbX2xFQAAAAAAAAAAABkARQnAQ' width=747 alt="start0"/>

**数据获取：**该层解决用户的第一个问题“是什么”，用户主要通过浏览查看来获取数据，其通用交互范式为\*\* \*\*Overview + Detail（概览+细节），常见于传统数据报表、汇报型图表、大屏等，比如流量监控、区域销售大盘。

**信息加工：**该层解决用户的第二个问题“为什么”，当图上有看不懂的信息时，用户期望有人告诉他为什么会这样，或者自己查探明究竟，其通用交互范式为 Focus + Context（聚焦+关联），常见于富交互的统计报表，或海量、高维、多源的可视分析系统。

**知识流转：**该层解决用户的第三个问题“怎么办”，当获取洞见通用交互范式为 Annote + Guide（标记+指引），常见于可视分析系统、智能分析、智能决策系统，比如运营专员对异常点进行标记辅助管理员进行决策，智能系统对整体趋势进行解读与归因分析。

## 举个例子

某公司运营同学需要找出销量整体下滑的原因。在图表上，运营同学的思路是找出症结、定位问题、关联分析、验证设想、得出结论并给出指引。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*J2qVTKcQlQ0AAAAAAAAAAABkARQnAQ' width=747 alt="start1"/>

## 交互建议

上述案例贯穿了数据可视化任务的三层次：“数据获取”、“信息加工”、“知识转换”，这三层是由浅及深、由表及里、循序渐进、互相融合的过程。

我们并不建议图表上堆砌交互动作，每一个交互都应有目的，用户的每一次操作都因有迹可循。在设计图表时建议站在高层次上关注用户界面与相关行为的整体结构，明确图表的使用场景以及用户可能面临的数据处境，让用户可以高效、有效地浏览可视化内容，使呈现给用户的信息合理并且具有意义。具体来说可以遵循以下几点：

#### 操控感

给用户以操控感，不让其迷失在数据的海洋中。提供足够便捷的过滤筛选组件，配合鼠标悬停、点击、框选等操作，方便用户查看更多视图空间，快速定位感兴趣的数据空间，亦或根据特定变量对数据进行排序、突出、降维处理等。当我们将这些组件与交互动作进行结合，用一些习以为常的交互去操纵可视化时，用户将会很清晰、并且有信心控制好当前视图。

#### **渐进呈现**

在复杂的可视化中，必须保证用户在不同层次的信息之间能进行无缝和直观的探索。<br />首先给出作为分析入口的概览视图，提供“数据获取”的交互操作辅助完成任务，同时给出可以看到具体内容的细节视图，各视图间协同一致。在渐进呈现过程中，“信息加工”相关组件安排在扩展窗口中，作为一个触发机关的通道。渐进呈现对于专家用户来说是顺势而为，对中级用户来说也是福利。

#### **构建系统，而不是单个图表**

复杂的可视化场景经常会多层次、多人群、甚至人机协同。一个完备的可视化系统应该为用户提供组件来记录、组织在探索过程中获得的见解，总结传达他们的洞察，给出有效的行动指引。以便受众能根据线索还原视觉探索，串连一个有体感的可视化故事。

得益于丰富的可视化分析工具，我们可以处理复杂的可视化。比如我们可以建立多个分离图表的视觉关联让其有特征联系，再比如我们可以做筛选维度的联动，当一个区域分布的图表上选择“杭州”时，明细表、趋势表也会刷新为杭州维度，这无疑给看似“静”的图表赋予“动”的视角，让图、图与图之间活了起来，而这底层的关联正像一个系统的运转。

## 小结

本文尝试总结现阶段图表交互的三个任务层次：“数据获取”、“信息加工”、“知识转换”，并列举每个任务层次可能涉及的相关交互行为并给出操作建议。

在大数据时代，可视化是面临海量、高维、多源、非结构化数据的挑战。展望未来，不再局限于键鼠、手指点击等交互，甚至还有自然化（肢体、NLP 语言）、虚拟化（AR/VR/MR）等趋势。它们相应的交互模式又是如何？什么样的匹配操作能帮助用户在数据复杂度不断提高的情况下更快的得到结论从而辅助决策呢？想想都兴奋，这是一条很长的路，需要我们共同来探索。

## 交互索引

### 数据获取

| **动作**           | **目的**                   | **操作**                                                   | **示例**                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | -------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 浏览               | 寻找感兴趣的数据           | Hover                                                      | ​<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*4sVyQL5OJu8AAAAAAAAAAABkARQnAQ' width=166 alt="start2"/>                                                                                                                                                                                                                                                                 |
|                    |                            | Hover 组合“Alt”键                                          | ​<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*sSMxR5uAWkMAAAAAAAAAAABkARQnAQ' width=166 alt="start3"/>                                                                                                                                                                                                                                                                 |
|                    |                            | Touch and hold（📱 移动端）                                | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*u_AVQI3RJVMAAAAAAAAAAABkARQnAQ' width=166 alt="start4"/>                                                                                                                                                                                                                                                                  |
|                    | 高亮视觉联动，寻找关系     | Hover                                                      | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ri2kR7NhnucAAAAAAAAAAABkARQnAQ' width=166 alt="start5"/>                                                                                                                                                                                                                                                                  |
| 选中               | 对单个数据点感兴趣         | Click<br />Tap（📱 移动端）                                | ​<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*9iwKRKqk4JcAAAAAAAAAAABkARQnAQ' width=166 alt="start6"/>                                                                                                                                                                                                                                                                 |
|                    | 对多个数据点或数据组感兴趣 | Brush 框选                                                 | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1RUYRIV0-s4AAAAAAAAAAABkARQnAQ' width=166 alt="start7"/>                                                                                                                                                                                                                                                                  |
| 过滤               | 聚焦重点信息               | 值域漫游器区间定位                                         | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*N5ozRYC9i5IAAAAAAAAAAABkARQnAQ' width=166 alt="start8"/>                                                                                                                                                                                                                                                                  |
| 缩放               | 探索、识别数据             | 触控板 改变缩略轴区间 滚动条<br />Pinch（📱 移动端）       | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*oZkMQLYqaqYAAAAAAAAAAABkARQnAQ' width=166 alt="start9"/><br />​<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*IVRMT6vsv0gAAAAAAAAAAABkARQnAQ' width=166 alt="start10"/><br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*pDBfQouPz4gAAAAAAAAAAABkARQnAQ' width=166 alt="start11"/> |
| 平移<br />​<br />​ | 探索更大的数据空间         | 触控板<br />拖动缩略轴<br />滚动条<br />Swipe（📱 移动端） | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*bc4WTLyIcqwAAAAAAAAAAABkARQnAQ' width=166 alt="start12"/>                                                                                                                                                                                                                                                                 |

### 信息加工

| **动作**  | **说明**                                                     | **相应操作** | **示例**                                                                                                                    |
| --------- | ------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 拖拽      | ​ 对数据重新加工计算                                         | 拖拽合并计算 | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*hSDtTJFnmHkAAAAAAAAAAABkARQnAQ' width=166 alt="start13"/>  |
| 重编码    | 改变数据视觉通道，让数据特征更显性化                         | 选中-修改    | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*aKtdS5uKtaMAAAAAAAAAAABkARQnAQ' width=166/ alt="start14">  |
| 重配置    | 切换维度以不同视角看数据                                     | ​ 单选切换   | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*cAxNTZ99IZYAAAAAAAAAAABkARQnAQ' width=166 alt="start15"/>  |
| 下钻/上卷 | 聚焦到感兴趣的数据子空间                                     | 下钻/上卷    | ​<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*bnfHTYkZKTMAAAAAAAAAAABkARQnAQ' width=166 alt="start16"/> |
| 链接      | 直观的展示分析逻辑和呈现数据结果，让分析更流畅，让报表会说话 | 链接跳转     | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*dM-YQoLwmZMAAAAAAAAAAABkARQnAQ' width=166 alt="start17"/>  |
| 联动      | 跨视图高亮显示数据对象间的联系，可同时观察数据的不同属性     | 联动刷新     | ​<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*z9hoTpLyEnMAAAAAAAAAAABkARQnAQ' width=166 alt="start18"/> |

### 知识流转

| **动作** | **说明**               | **相应操作**          | **示例**                                                                                                                   |
| -------- | ---------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 标记     | 通过数据标记标出注意点 | ​ 手动标记 / 智能标记 | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Qr4dQaMF_BsAAAAAAAAAAABkARQnAQ' width=166 alt="start19"/> |
| 解读     | 将结论标出以辅助决策   | 手动解读 /​ 智能解读  | <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*pqZkS6-vDcwAAAAAAAAAAABkARQnAQ' width=166 alt="start20"/> |
