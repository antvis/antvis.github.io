---
title: 视觉
order: 0
---

AntV 的设计体系中，视觉设计尤为重要。本文主要包括 3 个篇章”布局“、”色板“、”字体“。<br /> <br />

## 布局

有数据表明，人的平均注意力集中时间从 2008 年的 12 秒下降到 2015 年的 8 秒，这个时间还在缩短。我们的大脑每天都要处理海量信息，眼睛会倾向于通过扫视来获取重要信息，扫视的视线流一般是从左至右、从上往下。在数据可视化设计中，布局了决定用户的阅读顺序。在有限的屏幕空间内建立规范的空间布局，可以合理有效地传递信息，让内容为“扫视”而生！<br />**<br />**<br />

### 组件构成

得益于图形语法的启发，AntV 设计团队从设计角度，将图表进行原子级拆分、抽象，形成这样一套通用组件，如下图中的标题、轴、图形、标签、注解、提示信息、图例等。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617203674-778f533f-6024-4f4c-a945-6d6199a550a1.png#align=left&display=inline&height=1886&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1886&originWidth=3840&size=1096396&status=done&style=none&width=3840)<br />**<br />**<br />\*\*

### 平面空间布局

将这些组件在平面空间上合理排布，可以分清主次，同时决定我们的阅读先后顺序。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617203637-d1f8c5b6-371f-42f2-9b9a-c3e5de2fbb67.png#align=left&display=inline&height=1916&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1916&originWidth=3840&size=1433838&status=done&style=none&width=3840)<br /> <br /> <br />\*\*

### 纵向空间层级

我们引入“组件海拔”的概念，去管理这些组件的层级关系。将组件的重要层级重新梳理，归为四类：次要信息、辅助信息、正文、强调信息。通过增加透明度来决定视觉上的“Z”轴的海拔层次。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617203620-e6dce3e2-162f-4166-9bef-97d42a300746.png#align=left&display=inline&height=1688&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1688&originWidth=3840&size=810157&status=done&style=none&width=3840)<br /> <br /> <br />

### 布局示例

以图例为例，图例是对图形数据的概括。通常人的视觉动线是从左到右、从上至下。因此我们习惯性把图例放在左上角，这对绝大多数图表来说没有问题。但图形的变化是复杂多样的，如果图的阅读顺序不是从左到右，而是从上至下，比如下图右边的堆叠柱状图，它是从上往下阅读。因此设计师对图例的位置进行了微调，让其图形与图例顺序建立关联，提高信息获取效率。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617203627-778c209c-fdf8-404e-93ff-a9096d40089c.png#align=left&display=inline&height=1600&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1600&originWidth=3840&size=1076334&status=done&style=none&width=3840)

## 色板

在可视化设计中，色板的运用原则上优先保障准确性，考虑在操作指引、交互反馈上起到强化或凸显的作用。其次需兼顾色障碍群体，帮助有色盲色弱的人群也能在数据可视化中获取洞见。<br /> <br />

### 颜色映射原理

在数据可视化领域中，数据与颜色的映射是非常重要的一个环节。颜色有三个视觉通道，分别是色调（H）、饱和度（S）、明度（B），不同的视觉通道可以与不同的数据类型建议关联。<br /> <br />**色调（H）：**通常使用颜色中的不同色调来描述不同的分类数据，如水果品类中苹果映射为红色、香蕉映射为黄色、梨映射为绿色，将品类与色调（H）建立了关联。<br /> <br />**饱和度（S）/明度（B）：**颜色通过明暗和饱和度的共同变化来描述有序或数值型的连续数据，比如身高由低到高或由 160cm 到 180 cm 的颜色映射为由浅到深，将连续变化与颜色的明暗饱和变化建立关联。<br />

| 颜色属性 |  | 关系 | 数据类型 |  |
| :-: | :-: | :-: | --- | --- |
| 色调（H） | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/185301/1582780324996-d9339d61-e45a-48e4-b04a-40164057040e.png#align=left&display=inline&height=33&name=image.png&originHeight=144&originWidth=672&size=15042&status=done&style=none&width=152) | = | 分类型 | 如  🍎、🍌、🍐 |
| 饱和度（S） | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/185301/1582780238558-0bfd821d-c20f-4124-9f8a-00c597f7e7b0.png#align=left&display=inline&height=32&name=image.png&originHeight=140&originWidth=652&size=12827&status=done&style=none&width=151) | = | 有序型 | 如多少、高低、大小 |
| 明度（B） | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/185301/1582780043960-dd86c192-cfe4-40e2-a0e0-d0788fcc012b.png#align=left&display=inline&height=31&name=image.png&originHeight=152&originWidth=748&size=18696&status=done&style=none&width=152) |  | 数值型 | 如  9.5cm 、18 个 |

<br />
<br />

### 6 大色板类型

AntV 色板以蚂蚁极客蓝为起始主色，根据不同数据类型、使用场景扩展出 6 种可视化色板类型，可完美兼容 Ant Design  UI 资产。以下所有色板均通过无障碍测试校验，可放心使用。<br />![02-AntV 品牌色@3x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201086841-c1bb4188-2bd4-44e6-a3a4-fa7bd60dd270.png#align=left&display=inline&height=1071&margin=%5Bobject%20Object%5D&name=02-AntV%20%E5%93%81%E7%89%8C%E8%89%B2%403x.png&originHeight=1071&originWidth=2907&size=252865&status=done&style=none&width=2907)<br /> <br />更多关于色板的信息请[阅读此链接](https://www.yuque.com/mo-college/vis-design/ugbofr)。<br /> <br />

### 色板示例

**分类色板**<br />如图水果价格走势对比，使用红色代表苹果价格、蓝色代表蓝莓价格、黄色代表香蕉价格。<br />**![Artboard@2x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201439281-bbcc7172-0f75-4186-b719-58ba8e2e640f.png#align=left&display=inline&height=1070&margin=%5Bobject%20Object%5D&name=Artboard%402x.png&originHeight=1070&originWidth=1960&size=77906&status=done&style=none&width=1960)**<br />**<br />**<br />**邻近色顺序色板**<br />2017 年西安居民人均消费支出，通过连续的颜色变化，可以快速感知出居住方面消费占比最大，其次食品烟酒，第三是交替通信。<br />![12.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201513576-a1be0667-8227-420f-a395-54de52184157.png#align=left&display=inline&height=983&margin=%5Bobject%20Object%5D&name=12.png&originHeight=983&originWidth=1724&size=343916&status=done&style=none&width=1724)<br /> <br /> <br /> <br />**叠加色板**<br />双变量映射地图，相对于单变量映射的地图，该地图形式更加新颖，十分适合用来展示两个紧密联系的变量信息。如下图所示，图中展现了美国国民人口居住密度和家庭生产总值的分布关系，纵向由浅到深的紫色映射了人口密度，横向由浅到深的蓝色映射了家庭收入水平，相交的颜色可以总体反映出人口和家庭的分布情况。可以从地图中清晰地看到，人口多且收入高的大多分布在沿海地区，人口数少且收入低的则主要分布在中部地区。<br /> <br />![Artboard Copy 7@2x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583763026151-15c2e082-436d-4b99-82de-97b4e6a6bf2e.png#align=left&display=inline&height=1200&margin=%5Bobject%20Object%5D&name=Artboard%20Copy%207%402x.png&originHeight=1200&originWidth=1960&size=1662458&status=done&style=none&width=1960)<br /> <br /> <br />

## 字体

### 为什么要定义字体

数据可视化的设计中，字体的设计很容易被忽略。我们习惯性引用系统的默认字体而忽视了数据字体的特定老量维度。身经百战后，AntV 设计小组认为一款好的数据可视化字体应当具备以下三个条件，实践表明， Roboto 字体是符合这三个条件的一款不错的数字等宽字体。<br />

- 数字等宽，即数据可视化需要一款等宽字体，0 与 1 所占字符宽度应当一致；
- 识别度高，特殊字符 8B1IiLl0oO"'{[( 2zZ 具备良好的区分度；
- 混排美观，中英文+数字混排时，字体的 X -hieght 高度和谐；

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617203681-78fbdf26-59ef-43d3-9164-1ceba70e61bd.png#align=left&display=inline&height=1360&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1360&originWidth=3840&size=773685&status=done&style=none&width=3840)<br /> <br />

### 等宽字体示例

等宽字体（monospaced font）是指字符宽度相同的电脑字体。与此相对，字符宽度不尽相同的电脑字体称为比例字体（proportional font）。在金融、财会领域，建议使用等宽字体且数值默认右对齐，它方便通过数值的长短来比对大小，提高读数效率，而使用非等宽字体会带来歧义。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617203629-b76c72f5-6ad4-4945-9f69-d236c83d3a9b.png#align=left&display=inline&height=970&margin=%5Bobject%20Object%5D&name=image.png&originHeight=970&originWidth=3840&size=602311&status=done&style=none&width=3840)<br /> <br />

### 定义系统字体

引入外部扩展字体会增加数据包的容量，影响加载性能。如非必要，勿须引入。另外，在字体申明的列表中，建议遵循 fallback 机制对字体顺序进行编排。如下示意：\*\*

```css
font-family: “Roboto","Helvetica Neue", 'Segoe UI', Tahoma,Verdana, -apple-system, BlinkMacSystemFont ,sans-serif;
font-variant-numeric:tabular-nums，
```
