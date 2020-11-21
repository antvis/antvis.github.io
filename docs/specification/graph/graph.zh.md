---
title: 图 Graph
order: 3
---

# 图构成元素

图的构成元素包括节点（Node）、边（Edge）和组（Combo），这些基础元素是图的原子组成部分，设计者可根据特定业务场景变更节点、边、组的配色和组合形式，搭建更复杂的图可视分析应用。

# 节点（Node）

## 定义

节点是构成图的基本单位，一般表示某个实体。如社交网络数据中，一个人就是一个实体，用一个节点来表示。

## 常见形态

根据业务场景需要，信息可视化呈现时：

- 节点可加标签、可不加标签；
- 节点可存在不同形状；
- 节点可加简短描述；
- 节点可展开下级信息。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582875-8dfa6ab9-f4a4-47d5-ac9e-bb532034a5da.png#align=left&display=inline&height=330&margin=%5Bobject%20Object%5D&name=image.png&originHeight=660&originWidth=2800&size=115252&status=done&style=none&width=1400) ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582864-063f48ad-f10f-4c7d-890f-17720577ad86.png#align=left&display=inline&height=489&margin=%5Bobject%20Object%5D&name=image.png&originHeight=978&originWidth=2800&size=354195&status=done&style=none&width=1400)

## 交互样式

点交互基础样式有以下 6 种：基础状态：**Default-默认**、**Active-激活**、**Selected-选中**、**Disable-失效** 被动状态：**Highlight-强化**、**Inactive-弱化**（在交互场景中与 **Default-默认 **做出区分） ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582872-2607bf05-a23e-4060-9574-f8d3ae97e3a7.png#align=left&display=inline&height=462&margin=%5Bobject%20Object%5D&name=image.png&originHeight=924&originWidth=2700&size=562231&status=done&style=none&width=1350)

> 以力导向图布局和辐射布局为例

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582877-9698ace9-dccc-4746-8280-ee68aae46465.png#align=left&display=inline&height=973&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1946&originWidth=5030&size=571043&status=done&style=none&width=2515)

# 边（Edge）

## 定义

边（Edge）表示的是两个节点之间的关系。如社交网络数据中，我和你的关系，是朋友。

## 常见形态

因图的类型众多，边的形态也相应有：

- 有向的（含箭头）、无向的（无箭头）；
- 加权的（含值）、无加权的（不含值）；
- 加标签、不加标签；
- 不同粗细代表节点流量的……

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582878-1636be8e-a4aa-4421-ab6f-daa5b6366719.png#align=left&display=inline&height=305&margin=%5Bobject%20Object%5D&name=image.png&originHeight=610&originWidth=2800&size=104703&status=done&style=none&width=1400) ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582915-75baab65-f534-45ab-9c7d-0980eff09deb.png#align=left&display=inline&height=305&margin=%5Bobject%20Object%5D&name=image.png&originHeight=610&originWidth=2800&size=123567&status=done&style=none&width=1400)

## 交互样式

边的交互基础样式跟节点同样有以下 6 种：**Default、Active、Selected、Disable、Highlight、Inactive** ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582888-2c7b847d-8329-406b-a6c6-32f8e86e92be.png#align=left&display=inline&height=263&margin=%5Bobject%20Object%5D&name=image.png&originHeight=526&originWidth=2800&size=55862&status=done&style=none&width=1400)

> 在节点的交互样式引用图例中同样可看到边的运用效果

# 组（Combo）

## 定义

组合，又称为节点分组，用于管理一组相似的节点，如一组具有相同类型的节点，或位置上比较靠近的一组节点，可以将它们划分到同一个 Combo 中，可以有效降低视觉上的干扰。

## 常见形态

G6 默认提供两种类型，使用带有不重叠约束的力导向图布局方法，可根据业务场景和布局需要选取合适的形状。

- Circle 圆形
- Rect 矩形

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582892-98f92004-97c3-4a15-9d16-232999d7da9d.png#align=left&display=inline&height=285&margin=%5Bobject%20Object%5D&name=image.png&originHeight=570&originWidth=2800&size=108241&status=done&style=none&width=1400)

> 在 Combo 的具体运用中，会出现 Combo 未展开/已展开、一级 Combo 和二级 Combo 及更多级相结合的形式，上图仅为未展开、展开（共一级）、展开（共二级）形式

## 交互样式

节点组合形式千变万化，按常见形态延伸相应的交互样式如下： ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582900-23f0a25d-9238-4236-ba9b-06f6b0426c7a.png#align=left&display=inline&height=1660&margin=%5Bobject%20Object%5D&name=image.png&originHeight=3320&originWidth=5642&size=1413962&status=done&style=none&width=2821)

# 关系图色板

G6 在 AntV 的基础色彩体系的基础上，结合关系图表达的特点，精细化调整了颜色在数据维度上的衡量和线性感知。内置了一系列优美、和谐且满足无障碍设计原则的色板。包括：分类色板、邻近色板、发散色板、语义色板。默认情况下以蓝色为基础样式的案例色，也是 G6 的默认主色。

让颜色在图中能够达成在数据变化和人体感知上尽可能线性匹配，不同数值对应的颜色区分度要足够高，且在拥有分类色状态下依然感知均匀，一个连续数据集的所有数据点都具有同等的视觉重要性。

####

## 默认主题色

选择蓝色为基础样式的案例色，也是基础样式的默认色 /G6 的主色；灰色作为辅助色。 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582912-1d6c8a52-c517-4242-b943-9b5ea0a9e925.png#align=left&display=inline&height=146&margin=%5Bobject%20Object%5D&name=image.png&originHeight=292&originWidth=2428&size=81458&status=done&style=none&width=1214)

## 邻近色色板

**定义** 邻近色顺序色板，一般使用两个或以上个临近色调，通过明度和饱和度的逐步渐变，常用来区分有序数据优先级的高低、连续数据的大小或梯度变化。

**取色指南** 根据数据语义特定管理约束，选择合理色调搭配，使连续变化的色调和明度，可产生更多色彩分级，表达更多的连续数值。

**取色方法**

1. 亮色色板选取单色顺序色板中的 1 号色作为起始色，相应临近色调 4 号色为中间色，以此类推，继中间色相应近色调 7 号色为结束色，借助色彩工具，在 CIELab 色彩空间下生成渐变色；
1. 暗色色板同理，起始色为 2 号色，中间色为相应邻近色调 5 号色，结束色为中间色邻近色调的 8 号色；
1. 保留未分段的色带，便于用户自由分段取数。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582951-4ace9d03-3e7a-45bb-96e4-cc504b95fa5c.png#align=left&display=inline&height=540&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1080&originWidth=2422&size=302650&status=done&style=none&width=1211) 邻近色色板（部分

## 发散色色板

**定义** 也称对比色渐变色板，一般是两种互补色（也可以是对比色）去展现数据从一个负向值到 0 点再到正向值的连续变化区间，显示相对立的两个值的大小关系。数据范围的两端同等强调中间值和极值，以表示断点(如零变化或平均值)周围与数据中特定有意义的中间值之间的差异。

**取色指南** 关键断点应该采用中性颜色及与背景色对比度低，如浅灰色，端点应该采用和背景色对比度高的饱和颜色。一般来说是对称的，临界断点可以是平均值、中间值或零变化值。

**取色方法**

1. 选取分类色板中的对比色或互补色，其中 7 号色起始色和结束色，4 号色为过渡色，灰阶色的 1 号色作为中间色，在 CIELab 色彩空间下生成渐变色；
1. 暗色色板同理，其中 8 号色起始色和结束色，5 号色为过渡色，灰阶色的 2 号色作为中间色；
1. 保留未分段的色带，便于用户自由分段取数。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582928-14e608ef-44a8-4ebf-adc8-9c3dc375917b.png#align=left&display=inline&height=618&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1236&originWidth=1584&size=378304&status=done&style=none&width=792) 发散色板（部分）

## 语义色板

**定义** 色彩在可视化中的使用，不仅是数据信息传递的可视化通道，同时也是更深一层的文化故事的载体，用于表达意义或情感。

**取色指南** 重视用色习惯，遵循相关标准，色彩也不是都能寓意的，相当一部分图表色彩选择和感情因素无关，而是按照某种习惯来设定色彩，即所谓约定俗成，有的甚至形成来规范。 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582972-bef0b9e9-1652-4ce4-8019-6f215389f4f6.png#align=left&display=inline&height=154&margin=%5Bobject%20Object%5D&name=image.png&originHeight=308&originWidth=970&size=79993&status=done&style=none&width=485) 语义色板（部分）

更多色板介绍，详见 [AntV 色板](https://antv.vision/zh/docs/specification/principles/visual)

# 设计 Tips

## 节点（Node）

以圆形节点为例，根据点不同的信息展示形式，基础形状的大小有所不同，在图展示中需将图相关信息做最优展示。 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582919-9e8abd97-275d-40cb-bf5a-490626071417.png#align=left&display=inline&height=277&margin=%5Bobject%20Object%5D&name=image.png&originHeight=554&originWidth=1630&size=234288&status=done&style=none&width=815)

> 图 1，圆形节点——文本置内型，节点直径大小建议为 60px，文本大小为 12px

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582967-7ea7ad23-2ef8-41e1-8d3f-c4c010aa4edd.png#align=left&display=inline&height=230&margin=%5Bobject%20Object%5D&name=image.png&originHeight=460&originWidth=1540&size=204571&status=done&style=none&width=770)

> 图 2，圆形节点——文本非置内型，节点直径大小建议为 16px，文本大小为 12px

## 边（Edge）

**边的粗细：**边在点默认大小场景下默认为 1px，通常根据视图大小变化等比例放大缩小。为保持信息有效可视，边最小为 1px，最大值为 12px。

## 组（Combo）

Combo 的大小跟随内容，Node 与 Combo 之间的间隙最小为 Small = 8px。

## 色板使用

> **数据集：**又称为资料集、数据集合或资料集合，是一种由数据所组成的集合。 **连续数值：**统计学概念,又称连续变量。指在一定区间内可以任意取值、数值是连续不断的、相邻两个数值可作无限分割(即可取无限个数值)的数据。 **断点：**文中主要指数据集的中心值或参考值，例如零变化或平均值。 **端点：**文中主要指数据集极端值，例如最大最小值。 **语义：**文中主要指色彩心理学中色彩在客观上对人们对一种刺激和象征，它在主观上又是一种反应和行为。包含从知觉、感情而到记忆、思想、意志、象征等与色彩的因果关系。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582938-43163305-4470-4dd8-a8a9-9d050341e97f.png#align=left&display=inline&height=762&margin=%5Bobject%20Object%5D&name=image.png&originHeight=762&originWidth=1736&size=157352&status=done&style=none&width=1736)

当需要用颜色作为视觉通道时，数据性质可作为参考因素，选用色板的步骤大致如下图： ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605883582958-731967cd-3123-4df2-9f15-c174430a78e6.png#align=left&display=inline&height=1698&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1698&originWidth=1872&size=530541&status=done&style=none&width=1872)
