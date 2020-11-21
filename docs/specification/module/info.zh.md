---
title: 信息组件 Info Component
order: 6
---

# 定义

信息组件（Info Component）是图形与数据映射关系实体的统称，我们常见的图例 Legend、提示信息 Tooltip 等都是信息组件的一种实体。信息组件可对图表中的数据进行转译，帮助阅读者更高效的理解图背后的数据。

# 为什么要有信息组件

信息组件是连接“数据层-表现层-洞察层”的桥梁，制作者将数据加工后通过信息组件进行视觉映射，阅读者通过信息组件与可视化作品进行交互。这两层转化需要灵活多变的组件来进行承载。

过去，我们设计图表的思路是特图特做，比如设计 PC 端折线图鼠标 hover 时，折线上方显示悬浮提示 Tooltip 组件。在移动端，因为没有鼠标 hover 操作，需将原来悬浮出现的 Tooltip 提示信息转化为更直观的组件，比如指标卡 Index Card 平铺显示。 ![data-presentation-insights diagram.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605764267319-4df8100e-ed7b-43ce-9d6c-68ce3bff282b.png#align=left&display=inline&height=860&margin=%5Bobject%20Object%5D&name=data-presentation-insights%20diagram.png&originHeight=860&originWidth=2560&size=178730&status=done&style=none&width=2560) 有了信息组件，我们可以不必为 PC 端指定一种组件悬浮提示 Tooltip，为移动端指定一种组件指标卡 Index Card。信息组件可识别不同端，不同的设备，甚至不同的尺寸，在信息不丢失的情况下做组件形态的转变。

# 信息组件构成

信息组件由三类元素组合构成，它们分别是 **视觉标记 Visual Mark，文本标签 Label，数值标签 Value** **视觉标记** 视觉标记是视觉通道映射的载体，常见的为颜色、形状等，具体详见[视觉篇](https://www.yuque.com/mo-college/vis-design/seqpy0)和[色板篇](https://www.yuque.com/mo-college/vis-design/ugbofr)。

| **视觉通道** | **示例** |
| --- | --- |
| 颜色 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605773039807-6567e644-c36d-4887-adb2-e44f45476e49.png#align=left&display=inline&height=92&margin=%5Bobject%20Object%5D&name=image.png&originHeight=184&originWidth=1480&size=41335&status=done&style=none&width=740) |
| 形状 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605773104112-2e49cb9a-8e97-4238-8c6f-910a8dffc970.png#align=left&display=inline&height=91&margin=%5Bobject%20Object%5D&name=image.png&originHeight=182&originWidth=1428&size=58838&status=done&style=none&width=714) |
| 尺寸 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605773327033-32bed739-49e9-48d8-9bef-af579ad4e7a5.png#align=left&display=inline&height=126&margin=%5Bobject%20Object%5D&name=image.png&originHeight=252&originWidth=1092&size=68736&status=done&style=none&width=546) |

**文本标签** 文本标签此处特指显示数据标签名称的文本组件。样式详见 全局样式-数据标签。**数值标签** 文本标签此处特指显示数据数值的文本组件。样式详见全局样式-数据标签。

# 常见形态

**视觉标记 Visual Mark，文本标签 Label，数值标签 Value**  可组合变换出 N 种形态，常见的形态有以下 4 种：

1. 标签提示(Label）
1. 图例（Legend）
1. 指标卡（Index Card）
1. 提示信息（Tooltip）

![信息组件.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605864585100-12432765-7f3e-41ec-a7cd-69a122efcbc3.png#align=left&display=inline&height=1194&margin=%5Bobject%20Object%5D&name=%E4%BF%A1%E6%81%AF%E7%BB%84%E4%BB%B6.png&originHeight=1194&originWidth=2240&size=299525&status=done&style=none&width=2240)

# 1.标签提示 Label

在图表中，标签是对当前的一组数据进行的内容标注。 ![1.标签提示.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605864651500-dcf1752f-36a1-4b95-9157-5979f6cdf07c.png#align=left&display=inline&height=524&margin=%5Bobject%20Object%5D&name=1.%E6%A0%87%E7%AD%BE%E6%8F%90%E7%A4%BA.png&originHeight=524&originWidth=2240&size=66126&status=done&style=none&width=2240)

## 中心文本

| **元素**     | **适合设备**      | **出现位置** | **适合图表类型**         |
| ------------ | ----------------- | ------------ | ------------------------ |
| Label、Value | PC 端、移动端均可 | 图形上       | 环图、环形进度条、仪表盘 |

![2.中心文本.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605866304040-6bf4ad25-76eb-4bda-9e69-581fd5dac843.png#align=left&display=inline&height=882&margin=%5Bobject%20Object%5D&name=2.%E4%B8%AD%E5%BF%83%E6%96%87%E6%9C%AC.png&originHeight=882&originWidth=2240&size=156256&status=done&style=none&width=2240)

## 坐标提示

| **元素** | **适合设备** | **出现位置** | **适合图表类型** |
| --- | --- | --- | --- |
| Value | PC 端、移动端均可 | 轴上，覆盖轴标签 | 散点图、气泡图等笛卡尔坐标系图表 |

![3.坐标提示.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605866663104-814f5f68-1b83-47a8-9540-6cc930c6caaa.png#align=left&display=inline&height=882&margin=%5Bobject%20Object%5D&name=3.%E5%9D%90%E6%A0%87%E6%8F%90%E7%A4%BA.png&originHeight=882&originWidth=2240&size=122781&status=done&style=none&width=2240)

# 2.图例

## 分类图例 Categorical Legend

分类图例用于解释图表中的分类维度信息。依据视觉标记的不同，分类图例可分为颜色图例和形状图例。 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605794751374-131e7367-5ec4-4dee-9aa1-ec894b54aa1b.png#align=left&display=inline&height=584&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1168&originWidth=3050&size=426998&status=done&style=none&width=1525)

| **元素** | **适合设备** | **出现位置** | **适合图表类型** |
| --- | --- | --- | --- |
| Visual Mark + Label | PC 端、移动端均可，移动端更推荐仅静态显示 | 根据图表类型不同，推荐位置不同 | 几乎所有需要分类标记映射的图表。折面柱条饼环气泡散点等常见统计图表，符号地图，关系图等。 |

![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605789024361-b046dcf0-f15c-4c8a-a81c-75fbf803c80d.png#align=left&display=inline&height=494&margin=%5Bobject%20Object%5D&name=image.png&originHeight=988&originWidth=2874&size=996989&status=done&style=none&width=1437)

**布局** 图例遵循流式布局，横向和纵向排列时超出区域，可以启用翻页。 **1. 图例超出时翻页** 在 G2Plot 中，图例如果占据了图表大部分的位置，你可以发现内置提供了翻页功能。 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605789258030-8af548dd-9da5-495b-873a-050eb903d10c.png#align=left&display=inline&height=562&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1124&originWidth=2814&size=353833&status=done&style=none&width=1407)

**2. 图例应该放在哪里？** 图例是对图形本身的概括。通常人的视觉动线是从上至下，从左到右。默认把图例放在左上角去做一个通用的方案看起来似乎很稳妥。但这样是最优做法吗？更好的做法：**缩短用户对照图例看图形的本能路径，提升信息获取效率。** ** 虽然图例的位置从技术上支持了 12 个位置，我们总结了图例在不同的图表类型中不同的位置后，经过克制收敛为两类，并应用在统计图表类库 [G2Plot](https://g2plot.antv.vision/zh/examples/gallery) 和以及智能生成图表 AVA（补 AVA 网址） 中。 ** **设计者和观看者甚至并不会感知到位置的变化，但获取信息的效率就在不经意间提升了。 ** ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605839011127-994ff1ba-7a05-4894-b054-e0586a9c36b7.png#align=left&display=inline&height=1600&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1600&originWidth=3840&size=1076334&status=done&style=none&width=3840)

## 连续图例 Continuous Legend

连续图例用于提供图表中度量值的参考。依据视觉标记的不同，连续图例可分为连续颜色图例和分类形状图例。 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605799907441-493d31c2-79db-436b-8251-467ad5a3d507.png#align=left&display=inline&height=584&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1168&originWidth=3020&size=673458&status=done&style=none&width=1510)

| **元素** | **适合设备** | **出现类型** | **适合图表类型** |
| --- | --- | --- | --- |
| Visual Mark + Label | PC 端、移动端均可，移动端更推荐仅静态显示 | 根据图表类型不同，推荐类型不同 | 需要解释度量映射的图表。气泡散点图、地图、关系图等。 |

**示例** 敬请期待此处的地图和关系图等复杂图表图例示例

**布局** 连续图例的布局规则与分类图例基本一致，可以位于图表上下左右的 12 个方位，也可以位于图表上方。 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605801298502-2c4f9293-6deb-48dd-92f0-a375051f0ce6.png#align=left&display=inline&height=581&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1162&originWidth=2838&size=1942887&status=done&style=none&width=1419)

# 3.提示信息 Tooltip

提示信息 (Tooltip)，是指当鼠标悬停在图形上时，以提示框的形式展示该点的数据，比如该点的值，数据单位等，帮助用户快速获取图形的关键数据。当你希望数据可视化作品对用户的操作有所反馈时，提示信息 Tooltip 就可以发挥作用。

Tooltip 的基本元素包括：视觉标记图形，文本标签，数值标记等。 Tooltip 的可选元素：所在的 UI 容器还可以和其他 UI 组件配合使用，完成过滤，下钻等自助分析功能。

![tooltip元素.svg](https://cdn.nlark.com/yuque/0/2019/svg/268442/1574330723800-269bdf1e-8159-4319-994d-421e80c91c2d.svg#align=left&display=inline&height=327&margin=%5Bobject%20Object%5D&name=tooltip%E5%85%83%E7%B4%A0.svg&originHeight=327&originWidth=1120&size=43470&status=done&style=none&width=1120)

| **元素**                  | **适合设备** | **出现位置** | **适合图表类型** |
| ------------------------- | ------------ | ------------ | ---------------- |
| Visual Mark + Label+Value | PC 端        | 图表上方     | 全部图表         |

![image.png](https://cdn.nlark.com/yuque/0/2019/png/174999/1574301311775-582cea8c-0836-423d-897f-a2aa3b0f9c19.png#align=left&display=inline&height=591&margin=%5Bobject%20Object%5D&name=image.png&originHeight=591&originWidth=1492&size=105438&status=done&style=none&width=1492)

# 4.指标卡 Index Card

指标卡往往适用于折线图高亮某一时刻的指标数据。

| **元素** | **适合设备** | **出现位置** | **适合图表类型** |
| --- | --- | --- | --- |
| Visual Mark + Label+Value | PC 端、移动端均可，移动端适合代替 tooltip 交互显示 | 图表上方 | 全部图表 |

![image.png](https://cdn.nlark.com/yuque/0/2019/png/174999/1574301311770-82e4e513-b8dc-4e40-ba92-8434f3d3b99e.png#align=left&display=inline&height=591&margin=%5Bobject%20Object%5D&name=image.png&originHeight=591&originWidth=1492&size=40183&status=done&style=none&width=1492)

# 高阶用法 Advanced

## 高阶图例

带数值 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605802669574-290cf503-5376-40be-8c8e-8df5b7d18139.png#align=left&display=inline&height=385&margin=%5Bobject%20Object%5D&name=image.png&originHeight=385&originWidth=473&size=38921&status=done&style=none&width=473) 带操作 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605802929859-b5b9cdd2-4700-42aa-a308-4ce49c827dcf.png#align=left&display=inline&height=414&margin=%5Bobject%20Object%5D&name=image.png&originHeight=828&originWidth=838&size=173690&status=done&style=none&width=419)

## 适应设备环境多变

组件依据当前的设备和环境，尺寸和交互降级时，用于解释性的信息，可选择变化信息组件的形态承载。如下图所示，PC 端的图形 Label +分类图例，在移动端可变换为指标卡，在极小尺寸的迷你图表中可变换为 tooltip。用户所付出的交互和时间成本不同，可以看到尽量一致的信息。具体可以查看 [响应式篇](https://www.yuque.com/mo-college/vis-design/gqrmxl)。 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605802030926-50884840-b6da-4b8b-be56-e3aa23eb26d9.png#align=left&display=inline&height=383&margin=%5Bobject%20Object%5D&name=image.png&originHeight=766&originWidth=2376&size=338284&status=done&style=none&width=1188)

# 扩展阅读

下面是一份对照表，可以帮助你更快决定自己的图表中应该使用何种信息组件。

| 分类 | 位置 | 数据属性 | 视觉通道 | 样例 | 作用 |
| :-: | :-: | :-: | --- | :-: | --- |
| **图例** | 图形旁 |
| 或悬浮于图形上 | 分类数据 | 颜色 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605689469663-a8d6724e-f5b6-479f-8f09-3f1f2d17f227.png#align=left&display=inline&height=98&margin=%5Bobject%20Object%5D&name=image.png&originHeight=196&originWidth=1234&size=39786&status=done&style=none&uid=1605689469602-0&width=617) | 解释分类数据的颜色映射关系 |
|  |  | 连续数据 | 颜色 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605689214508-ef4d85fa-f5e9-4dd6-ab50-aec4d6bd7bcd.png#align=left&display=inline&height=140&margin=%5Bobject%20Object%5D&name=image.png&originHeight=280&originWidth=1230&size=60117&status=done&style=none&uid=1605689214443-0&width=615) | 解释连续度量值的颜色映射关系 |
|  |  | 分类数据 | 形状 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605689412104-a631473e-53fb-49e7-b8ee-37788084a715.png#align=left&display=inline&height=93&margin=%5Bobject%20Object%5D&name=image.png&originHeight=186&originWidth=1224&size=61326&status=done&style=none&uid=1605689412048-0&width=612) | 解释分类数据的形状映射关系 |
|  |  | 连续数据 | 尺寸 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605689816624-97565195-591d-4ada-ac1c-242beaf4a2f7.png#align=left&display=inline&height=98&margin=%5Bobject%20Object%5D&name=image.png&originHeight=196&originWidth=1234&size=41701&status=done&style=none&width=617)![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605689871602-17beeefd-ac31-4a2f-b469-80466a7d0c50.png#align=left&display=inline&height=218&margin=%5Bobject%20Object%5D&name=image.png&originHeight=436&originWidth=668&size=77162&status=done&style=none&width=334) | 解释连续度量值的尺寸映射关系 |
| **指标卡** | 图形旁 | 分类数据 | 多种 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605692166102-ca95c1cd-14b2-464a-9413-cd7cb28fa99b.png#align=left&display=inline&height=171&margin=%5Bobject%20Object%5D&name=image.png&originHeight=342&originWidth=1288&size=143684&status=done&style=none&uid=1605692165969-0&width=644) | 解释某一关键数据点细节信息，常适用于移动端或帮助强调图表的某处数据信息 |
| **提示信息** | 悬浮于图形上 | 多种 | 多种 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605691025534-94482a50-6526-4146-bfff-c9037c87b966.png#align=left&display=inline&height=671&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1342&originWidth=1416&size=417098&status=done&style=none&uid=1605691025414-0&width=708) | 解释当前鼠标悬浮的数据点细节信息 |
|  |  | 连续数据 | 无 | ![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605691429347-7752bd16-cf66-441a-bde5-71adaf5d7d19.png#align=left&display=inline&height=683&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1366&originWidth=1522&size=338608&status=done&style=none&uid=1605691429000-0&width=761) | 解释当前鼠标悬浮点的数据点细节信息，常适用于小尺寸或高密度的图形查看操作，作为辅助。 |

# 参考

图例 [https://antv.vision/zh/docs/specification/components/legend](https://antv.vision/zh/docs/specification/components/legend) 提示信息 [https://antv.vision/zh/docs/specification/components/tooltip](https://antv.vision/zh/docs/specification/components/tooltip)
