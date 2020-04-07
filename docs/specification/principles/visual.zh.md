---
title: 色板
order: 1
---

AntV 色板是基于 [Ant Design 色彩体系](https://ant.design/docs/spec/colors-cn)，并结合数据可视化特性而设计。在可视化设计中，色板的运用原则上优先保障准确性，考虑在操作指引、交互反馈上起到强化或凸显的作用。其次需兼顾色障碍群体，帮助有色盲色弱的人群也能在数据可视化中获取洞见。

## 颜色映射原理

在数据可视化领域中，数据与颜色的映射是非常重要的一个环节。颜色有三个视觉通道，分别是色调（H）、饱和度（S）、明度（B），不同的视觉通道可以与不同的数据类型建议关联。

**色调（H）：**通常使用颜色中的不同色调来描述不同的分类数据，如水果品类中苹果映射为红色、香蕉映射为黄色、梨映射为绿色，将品类与色调（H）建立了关联。

**饱和度（S）/明度（B）：**颜色通过明暗、饱和度的共同变化来描述有序或数值型的连续数据，比如身高由低到高或由 160cm 到 180 cm 的颜色映射为由浅到深，将连续变化与颜色的明暗饱和变化建立关联。

| 颜色属性 |  | 关系 | 数据类型 |  |
| :-: | :-: | :-: | --- | --- |
| 色调（H） | <img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*znc2SZGby9MAAAAAAAAAAABkARQnAQ" width=152 /> | = | 分类型 | 如  🍎、🍌、🍐 |
| 饱和度（S） | <img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*8yVNQ6kKU9gAAAAAAAAAAABkARQnAQ" width=152 /> | = | 有序型 | 如多少、高低、大小 |
| 明度（B） | <img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*KpGITpALYaQAAAAAAAAAAABkARQnAQ" width=152 /> |  | 数值型 | 如  9.5cm 、18 个 |

<br/>

## 6 大色板类型

AntV 色板以蚂蚁极客蓝为起始主色，根据不同数据类型、使用场景扩展出 6 种可视化色板类型，可完美兼容 Ant Design UI 资产。以下所有色板均通过无障碍测试校验，可放心使用。

![02-AntV 品牌色@3x.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*pdBRSLgX79kAAAAAAAAAAABkARQnAQ)

<br/>

### 分类色板

分类色板用于描述分类数据，如苹果、香蕉、梨，常用一个颜色代表一个值以区分不同类型，取色时色相分布均衡，相邻颜色之间明暗需考虑差异性，常用于饼图的不同分类、填充地图中的不同国家、关系图中的不同角色等。

![03-分类色板@3x.png](https://gw.alipayobjects.com/zos/antfincdn/dcADI7GBH%24/1.png)

<swatch title="基础 10 色" colors="#5B8FF9,#5AD8A6,#5D7092,#F6BD16,#E8684A,#6DC8EC,#9270CA,#FF9D4D,#269A99,#FF99C3" colorNames="Geek Blue,Cyan,Grey,Sunrise Yellow,Dust Red,Daybreak Blue,Golden Purple,Sunset Orange,Dark Green,Magenta"></swatch>

<swatch title="扩展 20 色" colors="#5B8FF9,#BDD2FD,#5AD8A6,#BDEFDB,#5D7092,#C2C8D5,#F6BD16,#FBE5A2,#E8684A,#F6C3B7,#6DC8EC,#B6E3F5,#9270CA,#D3C6EA,#FF9D4D,#FFD8B8,#269A99,#AAD8D8,#FF99C3,#FFD6E7"></swatch>

**用法示例**

如图水果价格走势对比，使用红色代表苹果价格、蓝色代表蓝莓价格、黄色代表香蕉价格。

![Artboard@2x.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*Kh5NSai4X0cAAAAAAAAAAABkARQnAQ)

<br/>

### 顺序色板

顺序色板，一般使用同一或邻近色相，通过明度或饱和度的渐变，常用来表示同一事物中的数值大小或梯度变化，如排行榜等级变化、一个国家或地区的新增人口数对比、风险等级变化等。

![Artboard@3x.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*83wWSqUDFvwAAAAAAAAAAABkARQnAQ)

**单色顺序色板**

单一色相渐变称之为单色顺序色板，人眼可识别的色彩数量 5 ～ 7 个，为保证信息的最佳识别度，尽可能的克制使用颜色数量。

<swatch colors="#BDE8FF,#9EC9FF,#7EABFF,#5A8DF8,#3874DB,#005BBF,#0044A4,#122C6A|#D0E3FF,#B4C7EC,#99ACD0,#7F91B4,#657899,#4C5F7F,#344766,#1C314E|#7EFAC6,#60DDAB,#40C190,#14A577,#008A5E,#007046,#005730,#003E1B|#FFE244,#F6BD16,#D7A300,#B98800,#9C6F00,#7F5700,#633F00,#482900|#8BF4F2,#6ED8D6,#50BCBA,#2FA19F,#008685,#006C6C,#005354,#003C3D|#E8684B,#FF9F7C,#FF8363,#E8684B,#C94D33,#AA311C,#8C1004,#6F0000|#FDD5FF,#DDB6FF,#BE99F7,#A27FDA,#8765BE,#6C4DA3,#523588,#391E6F|#FFCFFA,#FFABD5,#EF8BB4,#D27099,#B55680,#993C67,#7D214F,#620038" colorNames="Geek Blue,Grey,Green,Yellow,Cyan,Red,Purple,Magenta"></swatch>

**邻近色顺序色板**

为拉开颜色差异，可用两个或以上个色相，通过明度或饱和度渐变，颜色连续而丰富，可产生更多色彩分级，表达更多的连续数值，常用于热力图中的热度变化，通过邻近色相的差异将聚集部分突显出来

<swatch colors="#FDEDBE,#FFDF80,#FFCB33,#FFB200,#FF8C00,#FF6500,#E6450F,#B22C00,#661900|#FFEBB0,#FFDF80,#FACA3E,#E6B80B,#B5AC23,#6A9A48,#20876B,#06746B,#044E48|#D2EDC8,#A9DACC,#75C6D1,#42B3D5,#3993C2,#3073AE,#27539B,#1E3388,#171E6D|#FACDAA,#F4A49E,#EE7B91,#E85285,#BE408C,#942D93,#6A1B9A,#56167D,#42105F" colorNames="Sunset Orange,Leaf Yellow,Geek Blue,Golden Purple"></swatch>

**用法示例**

2017 年西安居民人均消费支出，通过连续的颜色变化，可以快速感知出居住方面消费占比最大，其次食品烟酒，第三是交替通信

![12.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*n-BbTJ0b8dQAAAAAAAAAAABkARQnAQ)

<br/>

### 发散色板

对比色渐变色板，一般是两种互补色（也可以是对比色）去展现数据从一个负向值到 0 点再到正向值的连续变化区间，显示相对立的两个值的大小关系，常用于气温的冷热、海拔高低、股票涨跌等

![06-离散色板@3x.png](https://gw.alipayobjects.com/zos/antfincdn/RjSAEfs7mK/2.png)

<swatch colors="#227BA2,#22BAED,#8AD4FF,#C9E9FF,#F2EAEA,#FFC5AC,#FF895D,#F3470D,#A4300C|#B22C00,#FF6500,#FFB200,#FFDF80,#E0F2EB,#66D8FF,#00A5FF,#0059FF,#002CB2|#1B7536,#05B54F,#7ACF89,#BFE8C3,#EFF3DE,#FFE9B8,#FFD470,#EDB40A,#A37B16|#10686C,#16A37E,#65CF9B,#C1E8C5,#EAF3DB,#F1E3AF,#F2C354,#DE9111,#BB490F|#004C99,#0072E5,#4DA6FF,#B3D9FF,#EAE9EB,#FFD5B1,#FFAB66,#F17F0B,#A45411|#B22C00,#FF6500,#FFB200,#FFDF80,#FFE2DC,#EAACFF,#C53FFF,#8500FF,#3900E5" colorNames="Cyan/Red,Classic,Green/Yellow,Grow,Geek Blue/Yellow,Magic"></swatch>

**用法示例**

全国等温线图，使用发散色板表示正负值的气温变化，暖色系的橙红色容易让人联系到太阳或炽热的感受，用于高温变化，颜色越红温度越高，反之，冷色系的蓝容易让人联想到冰和寒冷的感受，用于低温变化，颜色越深温度越低

![Artboard Copy@2x.png](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Xnp3T5QsQ5gAAAAAAAAAAABkARQnAQ)

<br/>

### 叠加色板

叠加色板，为了色尽其用的原则，将两组顺序色板通过图层叠加模式产生一组新的色板，一个颜色代表两种变量数据，常用于观察一个事物两个维度变化的相关性，如胖瘦和高矮两个维度的人数分布中，瘦且高的人群分布。

![07-叠加色板@3x.png](https://gw.alipayobjects.com/zos/antfincdn/GqyrzdG6ZV/3.png)

<swatch grid="sudoku" colors="#B5950E,#637E08,#115A04,#DFCA62,#7AAC3C,#167B1C,#DFE9C1,#7AC675,#168D38|#8B59FF,#6752FF,#1444ED,#B78DFF,#8881FF,#1B6BED,#D7D1FF,#A0BFFF,#209FED|#1685E1,#0C7189,#025142,#6FB6E1,#3D9B89,#0B6E42,#BBDFE1,#66BD89,#128742|#D6893E,#80703E,#1A523E,#D6B08C,#808F8C,#1A698C,#D6D6D8,#80AFD8,#1A80D8" colorNames="MYG,MPC,MBG,MOB"></swatch>

> 命名规范：『叠加模式 + 色相名称』首字母，如 MYG = Multiple Yellow Green

**用法示例**

双变量映射地图，相对于单变量映射的地图，该地图形式更加新颖，十分适合用来展示两个紧密联系的变量信息。如下图所示，图中展现了美国国民人口居住密度和家庭生产总值的分布关系，纵向由浅到深的紫色映射了人口密度，横向由浅到深的蓝色映射了家庭收入水平，相交的颜色可以总体反映出人口和家庭的分布情况。可以从地图中清晰地看到，人口多且收入高的大多分布在沿海地区，人口数少且收入低的则主要分布在中部地区。

![Artboard Copy 2@2x.png](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1XjNRZBf050AAAAAAAAAAABkARQnAQ)

<br/>

### 强调色板

对比突出重点或特定数据，将重点关注的数据标以高饱和度的强调色，其他普通数据标以低饱和、低明度的基本色，常用于对比重点关注事物与其他分类事物的差别，如将自家产品与竞品的对比使用

![08-强调色板@2x.png](https://gw.alipayobjects.com/zos/antfincdn/uOa0QZCyxn/4.png)

<swatch title="推荐 9 色" colors="#5B8FF9,#E8684A,#9270CA,#269A99,#BEDED1,#EFE0B5,#B5D7E5,#F4DBC6,#F2CADA" colorNames="Geek Blue,Dust Red,Golden Purple,Dark Green"></swatch>

<swatch title="扩展 19 色" colors="#5B8FF9,#E8684A,#9270CA,#269A99,#5AD8A6,#F6BD16,#6DC8EC,#FF9D4D,#FF99C3,#BDD2FD,#BEDED1,#C2C8D5,#EFE0B5,#F6C3B7,#B5D7E5,#D3C6EA,#F4DBC6,#AAD8D8,#F2CADA"></swatch>

**用法示例**

如图某工厂历年能源消耗占比趋势对比，分别用五种不同的颜色代表五种能源，其中「天然气」为重点关注的能源类型，使用饱和度高的蓝代表「天然气」，其他能源类型着以低饱和度的分类颜色，以便关注的「天然气」能够快速被观察到，同时其他类型可作为对比参考而不会因颜色过多而产生干扰。

![Artboard Copy 6@2x.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*d7FMRa5JzqcAAAAAAAAAAABkARQnAQ)

<br/>

### 语义色板

色彩在可视化中的使用，不仅是数据信息传递的可视化通道，同时也是更深一层的文化故事的载体，用于表达意义或情感。重视用色习惯，遵循相关标准，色彩也不是都能寓意的，相当一部分图表色彩选择和感情因素无关，而是按照某种习惯来设定色彩，即所谓约定俗成，有的甚至形成来规范。如气象预警配色，红绿灯配色，股市的红涨绿跌等。

![image.png](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*mgfTQp7rjHIAAAAAAAAAAABkARQnAQ)

<swatch colors="#F4664A,#30BF78,#FAAD14" colorNames="Red,Green,Yellow"></swatch>

**用法示例**

某水产公司 2019 年的月盈利变化，使用红色表示盈利，绿色表示亏损。

![Artboard Copy 5@2x.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*WfR-QLKisxgAAAAAAAAAAABkARQnAQ)

---

## 8 条使用建议

我们发现，在提供官方色板的前提下，仍有用户并不是十分擅长在实际场景中应用色板，以下几条设计指引供使用时参考。

### 避免使用过多颜色

在实际应用中，经常会出现大量颜色使用的误区，建议高亮重要的数据（不超过 8 个），其他数据默认置灰，通过图例交互进行查看。

![](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*cztFQZfwO_MAAAAAAAAAAABkARQnAQ)

### 数据映射规则从简

同样的数据，映射规则尽量保持为一种。

例如当使用柱形的高度来映射数据时，就不需要再加上颜色的维度去映射数据了。

![](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*IwZLRaHaKu4AAAAAAAAAAABkARQnAQ)

### 选择准确的色板

对应自己的数据，按照数据特性选用对的色板，下图中分类数据应选用分类色板，而不是连续色板。

![](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*7JBjTaZbuDAAAAAAAAAAAABkARQnAQ)

### 解释你的颜色

当图表中出现不同颜色时，需要向读者解释颜色代表的含义。

![](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*75RVSIqnG6UAAAAAAAAAAABkARQnAQ)

### 保持颜色一致性

对于统一度量，使用同样的颜色方案，而且在整个页面（通常是仪表盘）使用时，注意保持整体颜色方案的一致性。

![image.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*zSxkR6YWhl8AAAAAAAAAAABkARQnAQ)

### 彩虹色环不连续

不以色环顺序来表达连续的有序型或数值型数据，因为色环顺序并非人眼自然记忆，且彩虹色变化并非均衡变化，如下图中灰阶的转化，很容易看出彩虹色并不是一个连续逐渐加深的色板，因此彩虹色环并不适合展示连续数据，容易引起误解。

![15.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*AauZRb3L6NAAAAAAAAAAAABkARQnAQ)

### 顺序色板需均衡

下图右侧「不建议」图中，第 2 、第 3 个颜色很相近，难以区分，第 3 、第 4 个颜色跳跃很大，对于均衡的连续数据表达中，容易引起数据感知的误差，均衡选色可在 PhotoShop 的拾色器中使用 Lab 模式下固定色相不变，调节 L 值进行等距取色。

![14.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*y5TuTLVZ0r4AAAAAAAAAAABkARQnAQ)

### 为视障群体设计

AntV 色板在做无障碍验证时，得出以下几点取色建议 ：

- 分类色板选取需明暗交替

   虽然正常人眼中右侧分类色板通过色相可以区分差异，但在视障人士、甚至全色盲，则主要靠颜色的明暗差异来识别不同的数据类型，因此分类色板需要注意适度的明暗交替

<img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*eKFoRaOyrv4AAAAAAAAAAABkARQnAQ" width="100%" />

- 离散色板尽量选取蓝黄对比

   一般场景中，我们常也会使用黄绿配色，黄绿对比中，黄是暖色系，绿是冷色系，同样能给到对比感受，且打破常规的蓝红对比色，给到新颖的色彩感受，但如果你的用户中视障人士占比较多，则尽量避免绿黄配色，如图为两种色板在正常人眼和红绿色盲眼中的对比效果，黄绿配色在红绿色盲眼中就失去了色彩对比，难以区分。

<img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*LZGKTq93oGsAAAAAAAAAAABkARQnAQ" width="100%" />

## 资源下载

- <img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*PUsdR6401PIAAAAAAAAAAABkARQnAQ" width=27 /> [AntV 色板.sketch](https://www.yuque.com/attachments/yuque/0/2020/sketch/218706/1583201961356-1ce3fb8f-66b0-4b0c-b27c-691f306345ae.sketch?_lake_card=%7B%22uid%22%3A%221583201956414-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2020%2Fsketch%2F218706%2F1583201961356-1ce3fb8f-66b0-4b0c-b27c-691f306345ae.sketch%22%2C%22name%22%3A%22AntV+%E8%89%B2%E6%9D%BF.sketch%22%2C%22size%22%3A5161276%2C%22type%22%3A%22%22%2C%22ext%22%3A%22sketch%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22VLPws%22%2C%22card%22%3A%22file%22%7D)
- <img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*7M88TLJPib4AAAAAAAAAAABkARQnAQ" width=27 /> [AntV 色板.ase.zip](https://www.yuque.com/attachments/yuque/0/2020/zip/218706/1583201975252-c893c80e-4b31-49ae-8264-86baec447067.zip?_lake_card=%7B%22uid%22%3A%221583201975117-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2020%2Fzip%2F218706%2F1583201975252-c893c80e-4b31-49ae-8264-86baec447067.zip%22%2C%22name%22%3A%22AntV+%E8%89%B2%E6%9D%BF.ase.zip%22%2C%22size%22%3A2881%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22RrNV8%22%2C%22card%22%3A%22file%22%7D)
- <img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*_UQtSpEHRdQAAAAAAAAAAABkARQnAQ" width=27 /> [AntV 色板色值表](https://www.yuque.com/docs/share/98fd436e-bf79-4242-9ccd-2eeb74234ce6?#)

## 扩展阅读

- [AntV 色彩体系的搭建](https://zhuanlan.zhihu.com/p/70121039)
- 想自定义色板？查看 [色板生成教程](https://www.yuque.com/docs/share/cfdbe7e2-cd82-4844-8150-840a94be5a49?#)
