---
title: 视觉
order: 0
---

AntV 的设计体系中，视觉设计尤为重要。本文主要包括 3 个篇章”布局“、”色板“、”字体“。<br />

## 布局

有数据表明，人的平均注意力集中时间从 2008 年的 12 秒下降到 2015 年的 8 秒，这个时间还在缩短。我们的大脑每天都要处理海量信息，眼睛会倾向于通过扫视来获取重要信息，扫视的视线流一般是从左至右、从上往下。在数据可视化设计中，布局了决定用户的阅读顺序。在有限的屏幕空间内建立规范的空间布局，可以合理有效地传递信息，让内容为“扫视”而生！<br />

### 组件构成

得益于图形语法的启发，AntV 设计团队从设计角度，将图表进行原子级拆分、抽象，形成这样一套通用组件，如下图中的标题、轴、图形、标签、注解、提示信息、图例等。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*uYO_TLo_kewAAAAAAAAAAAAAARQnAQ)<br />

### 平面空间布局

将这些组件在平面空间上合理排布，可以分清主次，同时决定我们的阅读先后顺序。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*04ZLTqExEnwAAAAAAAAAAAAAARQnAQ)<br />

### 纵向空间层级

我们引入“组件海拔”的概念，去管理这些组件的层级关系。将组件的重要层级重新梳理，归为四类：次要信息、辅助信息、正文、强调信息。通过增加透明度来决定视觉上的“Z”轴的海拔层次。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*Vz-wQaW2jCwAAAAAAAAAAAAAARQnAQ)<br />

### 布局示例

以图例为例，图例是对图形数据的概括。通常人的视觉动线是从左到右、从上至下。因此我们习惯性把图例放在左上角，这对绝大多数图表来说没有问题。但图形的变化是复杂多样的，如果图的阅读顺序不是从左到右，而是从上至下，比如下图右边的堆叠柱状图，它是从上往下阅读。因此设计师对图例的位置进行了微调，让其图形与图例顺序建立关联，提高信息获取效率。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*zJ1BT51MwAEAAAAAAAAAAAAAARQnAQ)<br />

## 色板

在可视化设计中，色板的运用原则上优先保障准确性，考虑在操作指引、交互反馈上起到强化或凸显的作用。其次需兼顾色障碍群体，帮助有色盲色弱的人群也能在数据可视化中获取洞见。<br />

### 颜色映射原理

在数据可视化领域中，数据与颜色的映射是非常重要的一个环节。颜色有三个视觉通道，分别是色调（H）、饱和度（S）、明度（B），不同的视觉通道可以与不同的数据类型建议关联。<br />**色调（H）：**通常使用颜色中的不同色调来描述不同的分类数据，如水果品类中苹果映射为红色、香蕉映射为黄色、梨映射为绿色，将品类与色调（H）建立了关联。<br />**饱和度（S）/明度（B）：**颜色通过明暗和饱和度的共同变化来描述有序或数值型的连续数据，比如身高由低到高或由 160cm 到 180 cm 的颜色映射为由浅到深，将连续变化与颜色的明暗饱和变化建立关联。<br />

| 颜色属性 |  | 关系 | 数据类型 |  |
| :-: | :-: | :-: | --- | --- |
| 色调（H） | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*LzQNQZujjiQAAAAAAAAAAAAAARQnAQ) | = | 分类型 | 如  🍎、🍌、🍐 |
| 饱和度（S） | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ck2OTaHH7Q4AAAAAAAAAAAAAARQnAQ) | = | 有序型 | 如多少、高低、大小 |
| 明度（B） | ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*Esq5T48gzX8AAAAAAAAAAAAAARQnAQ) |  | 数值型 | 如  9.5cm 、18 个 |

<br />

### 6 大色板类型

AntV 色板以蚂蚁极客蓝为起始主色，根据不同数据类型、使用场景扩展出 6 种可视化色板类型，可完美兼容 Ant Design  UI 资产。以下所有色板均通过无障碍测试校验，可放心使用。<br />![02-AntV 品牌色@3x.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ob0rTbJccqgAAAAAAAAAAAAAARQnAQ)<br />更多关于色板的信息请[阅读此链接](/zh/docs/specification/language/visual)。<br />

### 色板示例

**分类色板**<br />如图水果价格走势对比，使用红色代表苹果价格、蓝色代表蓝莓价格、黄色代表香蕉价格。<br />**<img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*oUOmQI_Z4C8AAAAAAAAAAAAAARQnAQ" width="100%">**<br />**邻近色顺序色板**<br />2017 年西安居民人均消费支出，通过连续的颜色变化，可以快速感知出居住方面消费占比最大，其次食品烟酒，第三是交替通信。<br />![12.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*aPr_Q4MA6ooAAAAAAAAAAAAAARQnAQ)<br />**叠加色板**<br />双变量映射地图，相对于单变量映射的地图，该地图形式更加新颖，十分适合用来展示两个紧密联系的变量信息。如下图所示，图中展现了美国国民人口居住密度和家庭生产总值的分布关系，纵向由浅到深的紫色映射了人口密度，横向由浅到深的蓝色映射了家庭收入水平，相交的颜色可以总体反映出人口和家庭的分布情况。可以从地图中清晰地看到，人口多且收入高的大多分布在沿海地区，人口数少且收入低的则主要分布在中部地区。<br />![Artboard Copy 7@2x.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*74y-QLPvFXQAAAAAAAAAAAAAARQnAQ)<br />

## 字体

### 为什么要定义字体

数据可视化的设计中，字体的设计很容易被忽略。我们习惯性引用系统的默认字体而忽视了数据字体的特定老量维度。身经百战后，AntV 设计小组认为一款好的数据可视化字体应当具备以下三个条件，实践表明， Roboto 字体是符合这三个条件的一款不错的数字等宽字体。<br />

- 数字等宽，即数据可视化需要一款等宽字体，0 与 1 所占字符宽度应当一致；
- 识别度高，特殊字符 8B1IiLl0oO"'{[( 2zZ 具备良好的区分度；
- 混排美观，中英文+数字混排时，字体的 X -hieght 高度和谐；

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*C_hDT4rWC_MAAAAAAAAAAAAAARQnAQ)<br />

### 等宽字体示例

等宽字体（monospaced font）是指字符宽度相同的电脑字体。与此相对，字符宽度不尽相同的电脑字体称为比例字体（proportional font）。在金融、财会领域，建议使用等宽字体且数值默认右对齐，它方便通过数值的长短来比对大小，提高读数效率，而使用非等宽字体会带来歧义。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*JRkfSpBpepgAAAAAAAAAAAAAARQnAQ)<br />

### 定义系统字体

引入外部扩展字体会增加数据包的容量，影响加载性能。如非必要，勿须引入。另外，在字体申明的列表中，建议遵循 fallback 机制对字体顺序进行编排。如下示意：

```css
font-family: “Roboto","Helvetica Neue", 'Segoe UI', Tahoma,Verdana, -apple-system, BlinkMacSystemFont ,sans-serif;
font-variant-numeric:tabular-nums，
```
