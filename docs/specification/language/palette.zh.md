---
title: 色板
order: 1
---

G2 是一套基于可视化编码的图形语法，以数据驱动，具有高度的易用性和扩展性，用户无需关注各种繁琐的实现细节，一条语句即可构建出各种各样的可交互的统计图表。

AntV 色板是基于 <a href='https://ant.design/docs/spec/colors-cn' target='_blank'>Ant Design 色彩体系</a>，并结合数据可视化设计价值观而设计。在可视化设计中，色板的运用原则上优先保障给予用户的信任感，同时考虑在呈现阅读、交互反馈强化给到用户轻松感，最重要的是颜色在不同场景中使用的意义感，帮助用户能在数据可视化中启发理解和获取洞见，收获工作的意义。<a href='/specification/resources' target='_blank'>下载资源色板</a>

## 颜色映射原理

在数据可视化领域中，数据与颜色的映射是非常重要的一个环节。颜色有三个视觉通道，分别是色调（H）、饱和度（S）、明度（B），不同的视觉通道可以与不同的数据类型建议关联。

**色调（H）:** 通常使用颜色中的不同色调来描述不同的分类数据，如水果品类中苹果映射为红色、香蕉映射为黄色、梨映射为绿色，将品类与色调（H）建立了关联。

**饱和度（S）/明度（B）:** 颜色通过明暗、饱和度的共同变化来描述有序或数值型的连续数据，比如身高由低到高或由 160cm 到 180 cm 的颜色映射为由浅到深，将连续变化与颜色的明暗饱和变化建立关联。

| 颜色属性 |  | 关系 | 数据类型 |  |
| :-: | :-: | :-: | --- | --- |
| 色调（H） | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*0vQmTqfW0KwAAAAAAAAAAAAADmJ7AQ/original" width=152 alt="" /> | = | 分类型 | 如  🍎、🍌、🍐 |
| 饱和度（S） | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*9ZoIRaaVRxAAAAAAAAAAAAAADmJ7AQ/original" width=152 alt="" /> | = | 有序型 | 如多少、高低、大小 |
| 明度（B） | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*tBO1SpMwfwIAAAAAAAAAAAAADmJ7AQ/original" width=152 alt="" /> |  | 数值型 | 如  9.5cm 、18 个 |

## 6 大色板类型

AntV 色板以蚂蚁极客蓝为起始主色，根据不同数据类型、使用场景扩展出 6 种可视化色板类型，可完美兼容 Ant Design UI 资产。以下所有色板均通过无障碍测试校验，可放心使用。

![02-AntV 品牌色@3x.png](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*8Uj3TJt8nHYAAAAAAAAAAAAADmJ7AQ/original)

### 分类色板

分类色板用于描述分类数据，如苹果、香蕉、梨，常用一个颜色代表一个值以区分不同类型，取色时色相分布均衡，相邻颜色之间明暗需考虑差异性，常用于饼图的不同分类、填充地图中的不同国家、关系图中的不同角色等。

![03-分类色板@3x.png](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*4bxvS6I4osQAAAAAAAAAAAAADmJ7AQ/original)

<swatch title="基础 10 色" colors="#5B8FF9,#61DDAA,#65789B,#F6BD16,#7262fd,#78D3F8,#9661BC,#F6903D,#008685,#F08BB4" colorNames="Geek Blue,Cyan,Grey,Sunrise Yellow,Deep Purple,Daybreak Blue,Golden Purple,Sunset Orange,Dark Green,Magenta"></swatch>

<swatch title="扩展 20 色" colors="#5B8FF9,#CDDDFD,#61DDAA,#CDF3E4,#65789B,#CED4DE,#F6BD16,#FCEBB9,#7262fd,#D3CEFD,#78D3F8,#D3EEF9,#9661BC,#DECFEA,#F6903D,#FFE0C7,#008685,#BBDEDE,#F08BB4,#FFE0ED"></swatch>

<swatch title="更多主题分类色板 20 色" colors="#FF6B3B,#626681,#FFC100,#9FB40F,#76523B,#DAD5B5,#0E8E89,#E19348,#F383A2,#247FEA,#2BCB95,#B1ABF4,#1D42C2,#1D9ED1,#D64BC0,#255634,#8C8C47,#8CDAE5,#8E283B,#791DC9|#025DF4,#DB6BCF,#2498D1,#BBBDE6,#4045B2,#21A97A,#FF745A,#007E99,#FFA8A8,#2391FF,#FFC328,#A0DC2C,#946DFF,#626681,#EB4185,#CD8150,#36BCCB,#327039,#803488,#83BC99|#FF4500,#1AAF8B,#406C85,#F6BD16,#B40F0F,#2FB8FC,#4435FF,#FF5CA2,#BBE800,#FE8A26,#946DFF,#6C3E00,#6193FF,#FF988E,#36BCCB,#004988,#FFCF9D,#CCDC8A,#8D00A1,#1CC25E" colorNames="Autumn,Macaron,Contrasting Orange" descriptions="秋日橙色板，适用于橙色调的产品，可按需替换默认色板。|马卡龙色板，颜色明快，适用于较为活泼轻松的产品或蓝紫色调的产品，可按需替换默认色板。|强对比色板，建议用于投屏及讲演等场景。"></swatch>

**用法示例**

如图水果价格走势对比，使用红色代表苹果价格、蓝色代表蓝莓价格、黄色代表香蕉价格。

![Artboard@2x.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*Kh5NSai4X0cAAAAAAAAAAABkARQnAQ)

<br/>

### 顺序色板

顺序色板，一般使用同一或邻近色相，通过明度或饱和度的渐变，常用来表示同一事物中的数值大小或梯度变化，如排行榜等级变化、一个国家或地区的新增人口数对比、风险等级变化等。

![Artboard@3x.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*83wWSqUDFvwAAAAAAAAAAABkARQnAQ)

**单色顺序色板**

单一色相渐变称之为单色顺序色板，人眼可识别的色彩数量 5 ～ 7 个，为保证信息的最佳识别度，尽可能的克制使用颜色数量。

<swatch colors="#B8E1FF,#9AC5FF,#7DAAFF,#5B8FF9,#3D76DD,#085EC0,#0047A5,#00318A,#001D70|#9DF5CA,#61DDAA,#42C090,#19A576,#008A5D,#006F45,#00562F,#003E19,#002800|#D0E4FF,#B4C8ED,#99ADD1,#7E92B5,#65789B,#4C6080,#334867,#1B324F,#021D38|#FFD83B,#F6BD16,#D7A100,#B98700,#9C6E00,#7F5600,#633F00,#482900,#2F1400|#EBCCFF,#CCB0FF,#AE95FF,#907BFF,#7262FD,#5349E0,#2F32C3,#001BA7,#00068C|#95F0FF,#78D3F8,#5AB8DB,#3A9DBF,#0A82A4,#00698A,#005170,#003958,#002440|#FFCCFF,#EBB0FF,#CE95F5,#B27AD8,#9661BC,#7B48A1,#613086,#48186C,#2E0054|#FFC771,#FFAB57,#F6903D,#D77622,#B85C00,#9B4300,#7D2A00,#601000,#450000|#8CF4F2,#6FD8D6,#52BCBA,#31A09F,#008685,#006C6C,#005354,#003B3D,#002627|#FFC2EC,#FFA6D0,#F08BB4,#D37099,#B65680,#9A3C67,#7E214F,#630038,#490022|#FFBB95,#FF9E7B,#FF8362,#E8684A,#C84D32,#AA311C,#8C1104,#6F0000,#510000|#E2E2E2,#C6C6C6,#ABABAB,#919191,#777777,#5E5E5E,#474747,#303030,#1B1B1B" colorNames="Geek Blue,Cyan,Grey,Sunrise Yellow,Deep Purple,Daybreak Blue,Golden Purple,Sunset Orange,Dark Green,Magenta,Dust Red,Dark"></swatch>

**邻近色顺序色板**

为拉开颜色差异，可用两个或以上个色相，通过明度或饱和度渐变，颜色连续而丰富，可产生更多色彩分级，表达更多的连续数值，常用于热力图中的热度变化，通过邻近色相的差异将聚集部分突显出来

<swatch colors="#FDEDBE,#FFDF80,#FFCB33,#FFB200,#FF8C00,#FF6500,#E6450F,#B22C00,#661900|#FFEBB0,#FFDF80,#FACA3E,#E6B80B,#B5AC23,#6A9A48,#20876B,#06746B,#044E48|#D2EDC8,#A9DACC,#75C6D1,#42B3D5,#3993C2,#3073AE,#27539B,#1E3388,#171E6D|#FACDAA,#F4A49E,#EE7B91,#E85285,#BE408C,#942D93,#6A1B9A,#56167D,#42105F" colorNames="Sunset Orange,Leaf Yellow,Geek Blue,Golden Purple"></swatch>

**用法示例**

2017 年西安居民人均消费支出，通过连续的颜色变化，可以快速感知出居住方面消费占比最大，其次食品烟酒，第三是交替通信

![12.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*n-BbTJ0b8dQAAAAAAAAAAABkARQnAQ)

### 发散色板

对比色渐变色板，一般是两种互补色（也可以是对比色）去展现数据从一个负向值到 0 点再到正向值的连续变化区间，显示相对立的两个值的大小关系，常用于气温的冷热、海拔高低、股票涨跌等

![06-离散色板@3x.png](https://gw.alipayobjects.com/zos/antfincdn/RjSAEfs7mK/2.png)

<swatch colors="#215B77,#227BA2,#1B9CD0,#22BAED,#61C9FF,#8AD4FF,#ABDFFF,#C9E9FF,#EFF3DE,#FFE9B8,#FFDE94,#FFD470,#FFC741,#EDB40A,#D09C10,#A37B16,#795B16|#014c63,#10686c,#168575,#16a37e,#0bc286,#65cf9b,#96dcb0,#c1e8c5,#F2EAEA,#FFC5AC,#FFA884,#FF895D,#FF6836,#F3470D,#D13808,#A4300C,#7A270E|#003F7F,#004C99,#0059B2,#0072E5,#1A8CFF,#4DA6FF,#80BFFF,#B3D9FF,#EAE9EB,#FFD5B1,#FFC08C,#FFAB66,#FF963E,#F17F0B,#D16A0C,#A45411,#794012|#014c63,#10686c,#168575,#16a37e,#0bc286,#65cf9b,#96dcb0,#c1e8c5,#eaf3db,#f1e3af,#f3d282,#f2c354,#eeb311,#de9111,#cd6e10,#bb490f,#a8190d|#661900,#B22C00,#E6450F,#FF6500,#FF8C00,#FFB200,#FFCB33,#FFDF80,#FFE2DC,#EAACFF,#DD78FF,#C53FFF,#A700FF,#8500FF,#620BE1,#3607C2,#27029A|#661900,#B22C00,#E6450F,#FF6500,#FF8C00,#FFB200,#FFCB33,#FFDF80,#E0F2EB,#66D8FF,#1AC5FF,#00A5FF,#007FFF,#0059FF,#0040FF,#002CB2,#001F7F" colorNames="Cyan/Yellow,Green/Red,Green/Yellow,Grow,Magic,Classic"></swatch>

**用法示例**

全国等温线图，使用发散色板表示正负值的气温变化，暖色系的橙红色容易让人联系到太阳或炽热的感受，用于高温变化，颜色越红温度越高，反之，冷色系的蓝容易让人联想到冰和寒冷的感受，用于低温变化，颜色越深温度越低

![Artboard Copy@2x.png](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Xnp3T5QsQ5gAAAAAAAAAAABkARQnAQ)

### 叠加色板

叠加色板，为了色尽其用的原则，将两组顺序色板通过图层叠加模式产生一组新的色板，一个颜色代表两种变量数据，常用于观察一个事物两个维度变化的相关性，如胖瘦和高矮两个维度的人数分布中，瘦且高的人群分布。

![07-叠加色板@3x.png](https://gw.alipayobjects.com/zos/antfincdn/GqyrzdG6ZV/3.png)

<swatch grid="sudoku" colors="#B5950E,#637E08,#115A04,#DFCA62,#7AAC3C,#167B1C,#DFE9C1,#7AC675,#168D38|#8B59FF,#6752FF,#1444ED,#B78DFF,#8881FF,#1B6BED,#D7D1FF,#A0BFFF,#209FED|#1685E1,#0C7189,#025142,#6FB6E1,#3D9B89,#0B6E42,#BBDFE1,#66BD89,#128742|#D6893E,#80703E,#1A523E,#D6B08C,#808F8C,#1A698C,#D6D6D8,#80AFD8,#1A80D8" colorNames="MYG,MPC,MBG,MOB"></swatch>

> 命名规范：『叠加模式 + 色相名称』首字母，如 MYG = Multiple Yellow Green

**用法示例**

双变量映射地图，相对于单变量映射的地图，该地图形式更加新颖，十分适合用来展示两个紧密联系的变量信息。如下图所示，图中展现了美国国民人口居住密度和家庭生产总值的分布关系，纵向由浅到深的紫色映射了人口密度，横向由浅到深的蓝色映射了家庭收入水平，相交的颜色可以总体反映出人口和家庭的分布情况。可以从地图中清晰地看到，人口多且收入高的大多分布在沿海地区，人口数少且收入低的则主要分布在中部地区。

![Artboard Copy 2@2x.png](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1XjNRZBf050AAAAAAAAAAABkARQnAQ)

### 强调色板

对比突出重点或特定数据，将重点关注的数据标以高饱和度的强调色，其他普通数据标以低饱和、低明度的基本色，常用于对比重点关注事物与其他分类事物的差别，如将自家产品与竞品的对比使用

![08-强调色板@2x.png](https://gw.alipayobjects.com/zos/antfincdn/uOa0QZCyxn/4.png)

<swatch title="推荐 9 色" colors="#5B8FF9,#E8684A,#9270CA,#269A99,#BEDED1,#EFE0B5,#B5D7E5,#F4DBC6,#F2CADA" colorNames="Geek Blue,Dust Red,Golden Purple,Dark Green"></swatch>

<swatch title="扩展 19 色" colors="#5B8FF9,#E8684A,#9270CA,#269A99,#5AD8A6,#F6BD16,#6DC8EC,#FF9D4D,#FF99C3,#BDD2FD,#BEDED1,#C2C8D5,#EFE0B5,#F6C3B7,#B5D7E5,#D3C6EA,#F4DBC6,#AAD8D8,#F2CADA"></swatch>

**用法示例**

如图某工厂历年能源消耗占比趋势对比，分别用五种不同的颜色代表五种能源，其中「天然气」为重点关注的能源类型，使用饱和度高的蓝代表「天然气」，其他能源类型着以低饱和度的分类颜色，以便关注的「天然气」能够快速被观察到，同时其他类型可作为对比参考而不会因颜色过多而产生干扰。

![Artboard Copy 6@2x.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*d7FMRa5JzqcAAAAAAAAAAABkARQnAQ)

### 语义色板

色彩在可视化中的使用，不仅是数据信息传递的可视化通道，同时也是更深一层的文化故事的载体，用于表达意义或情感。重视用色习惯，遵循相关标准，色彩也不是都能寓意的，相当一部分图表色彩选择和感情因素无关，而是按照某种习惯来设定色彩，即所谓约定俗成，有的甚至形成来规范。如气象预警配色，红绿灯配色，股市的红涨绿跌等。

![image.png](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*mgfTQp7rjHIAAAAAAAAAAABkARQnAQ)

<swatch colors="#F4664A,#30BF78,#FAAD14" colorNames="Red,Green,Yellow"></swatch>

**用法示例**

某水产公司 2019 年的月盈利变化，使用红色表示盈利，绿色表示亏损。

![Artboard Copy 5@2x.png](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*WfR-QLKisxgAAAAAAAAAAABkARQnAQ)

## 3 大颜色主题

在默认主题的基础上，新增三大颜色主题，分别是秋日橙主题、马卡龙主题、强对比主题，这三类主题色板各有不同的使用场景。

### 秋日橙主题

以橙色调为主的主题色板，整体基调是秋日的丰收色，同时适应深浅模式，可按需替换默认主题。

<swatch title="Autumn" colors="#FF6B3B,#626681,#FFC100,#9FB40F,#76523B,#DAD5B5,#0E8E89,#E19348,#F383A2,#247FEA,#2BCB95,#B1ABF4,#1D42C2,#1D9ED1,#D64BC0,#255634,#8C8C47,#8CDAE5,#8E283B,#791DC9" colorNames="Autumn" descriptions="秋日橙色板，适用于橙色调的产品，可按需替换默认色板。|马卡龙色板，颜色明快，适用于较为活泼轻松的产品或蓝紫色调的产品，可按需替换默认色板。|强对比色板，建议用于投屏及讲演等场景。"></swatch>

![秋日橙主题.png](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*8g3IQLdwuyQAAAAAAAAAAAAADmJ7AQ/original) ![秋日橙.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*4eQ-Q7NX-wIAAAAAAAAAAAAAARQnAQ)

### 马卡龙主题

以粉紫色调为主的主题色板，整体基调是马卡龙糖果色，同时适应深浅模式，风格活泼明快，可按需替换默认主题。

<swatch title="Macaron" colors="#025DF4,#DB6BCF,#2498D1,#BBBDE6,#4045B2,#21A97A,#FF745A,#007E99,#FFA8A8,#2391FF,#FFC328,#A0DC2C,#946DFF,#626681,#EB4185,#CD8150,#36BCCB,#327039,#803488,#83BC99" colorNames="Macaron" descriptions="马卡龙色板，颜色明快，适用于较为活泼轻松的产品或蓝紫色调的产品，可按需替换默认色板。"></swatch>

![马卡龙主题.png](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Gt1AToxkmZoAAAAAAAAAAAAADmJ7AQ/original) ![马卡龙.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*PhfqRLQmq4QAAAAAAAAAAAAAARQnAQ)

### 强对比主题

强对比分类主题，颜色饱和度较高，强对比度，在投屏场景等降对比场景使用。

<swatch title="Contrasting Orange" colors="#FF4500,#1AAF8B,#406C85,#F6BD16,#B40F0F,#2FB8FC,#4435FF,#FF5CA2,#BBE800,#FE8A26,#946DFF,#6C3E00,#6193FF,#FF988E,#36BCCB,#004988,#FFCF9D,#CCDC8A,#8D00A1,#1CC25E" colorNames="Contrasting Orange" descriptions="强对比色板，建议用于投屏及讲演等场景。"></swatch>

![强对比橙.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*JGEATr_GLWoAAAAAAAAAAAAAARQnAQ)

---

## 8 条使用建议

我们发现，在提供官方色板的前提下，仍有用户并不是十分擅长在实际场景中应用色板，以下几条设计指引供使用时参考。

### 避免使用过多颜色

在实际应用中，经常会出现大量颜色使用的误区，建议高亮重要的数据（不超过 8 个），其他数据默认置灰，通过图例交互进行查看。

![suggestion](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*cztFQZfwO_MAAAAAAAAAAABkARQnAQ)

### 数据映射规则从简

同样的数据，映射规则尽量保持为一种。

例如当使用柱形的高度来映射数据时，就不需要再加上颜色的维度去映射数据了。

![suggestion](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*IwZLRaHaKu4AAAAAAAAAAABkARQnAQ)

### 选择准确的色板

对应自己的数据，按照数据特性选用对的色板，下图中分类数据应选用分类色板，而不是连续色板。

![suggestion](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*7JBjTaZbuDAAAAAAAAAAAABkARQnAQ)

### 解释你的颜色

当图表中出现不同颜色时，需要向读者解释颜色代表的含义。

![suggestion](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*75RVSIqnG6UAAAAAAAAAAABkARQnAQ)

### 保持颜色一致性

对于统一度量，使用同样的颜色方案，而且在整个页面（通常是仪表盘）使用时，注意保持整体颜色方案的一致性。

![suggestion](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*zSxkR6YWhl8AAAAAAAAAAABkARQnAQ)

### 彩虹色环不连续

不以色环顺序来表达连续的有序型或数值型数据，因为色环顺序并非人眼自然记忆，且彩虹色变化并非均衡变化，如下图中灰阶的转化，很容易看出彩虹色并不是一个连续逐渐加深的色板，因此彩虹色环并不适合展示连续数据，容易引起误解。

![suggestion](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*AauZRb3L6NAAAAAAAAAAAABkARQnAQ)

### 顺序色板需均衡

下图右侧「不建议」图中，第 2 、第 3 个颜色很相近，难以区分，第 3 、第 4 个颜色跳跃很大，对于均衡的连续数据表达中，容易引起数据感知的误差，均衡选色可在 PhotoShop 的拾色器中使用 Lab 模式下固定色相不变，调节 L 值进行等距取色。

![suggestion](https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*y5TuTLVZ0r4AAAAAAAAAAABkARQnAQ)

### 为视障群体设计

AntV 色板在做无障碍验证时，得出以下几点取色建议 ：

- 分类色板选取需明暗交替

  虽然正常人眼中右侧分类色板通过色相可以区分差异，但在视障人士、甚至全色盲，则主要靠颜色的明暗差异来识别不同的数据类型，因此分类色板需要注意适度的明暗交替

<img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*eKFoRaOyrv4AAAAAAAAAAABkARQnAQ" width="100%" alt="suggestion" alt="" />

- 离散色板尽量选取蓝黄对比

  一般场景中，我们常也会使用黄绿配色，黄绿对比中，黄是暖色系，绿是冷色系，同样能给到对比感受，且打破常规的蓝红对比色，给到新颖的色彩感受，但如果你的用户中视障人士占比较多，则尽量避免绿黄配色，如图为两种色板在正常人眼和红绿色盲眼中的对比效果，黄绿配色在红绿色盲眼中就失去了色彩对比，难以区分。

<img src="https://gw.alipayobjects.com/mdn/rms_624b2a/afts/img/A*LZGKTq93oGsAAAAAAAAAAABkARQnAQ" width="100%" alt="suggestion" />

## 扩展阅读

- [AntV 色彩体系的搭建](https://zhuanlan.zhihu.com/p/70121039)
- 想自定义色板？查看 [色板生成教程](https://antv.vision/zh/docs/specification/tool/creator-color)
- [下载色板资源](/specification/resources)
