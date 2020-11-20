---
title: 色板
order: 1
---

AntV 色板是基于 [Ant Design 色彩体系](https://ant.design/docs/spec/colors-cn)，并结合数据可视化特性而设计。在可视化设计中，色板的运用原则上优先保障准确性，考虑在操作指引、交互反馈上起到强化或凸显的作用。其次需兼顾色障碍群体，帮助有色盲色弱的人群也能在数据可视化中获取洞见。<br />

## 颜色映射原理

<br />在数据可视化领域中，数据与颜色的映射是非常重要的一个环节。颜色有三个视觉通道，分别是色调（H）、饱和度（S）、明度（B），不同的视觉通道可以与不同的数据类型建议关联。<br />**色调（H）：**通常使用颜色中的不同色调来描述不同的分类数据，如水果品类中苹果映射为红色、香蕉映射为黄色、梨映射为绿色，将品类与色调（H）建立了关联。<br /> **饱和度（S）/明度（B）：**颜色通过明暗和饱和度的共同变化来描述有序或数值型的连续数据，比如身高由低到高或由 160cm 到 180 cm 的颜色映射为由浅到深，将连续变化与颜色的明暗饱和变化建立关联。<br />

| 颜色属性 |  | 关系 | 数据类型 |  |
| :-: | :-: | :-: | --- | --- |
| 色调（H） | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/185301/1582780324996-d9339d61-e45a-48e4-b04a-40164057040e.png#align=left&display=inline&height=33&name=image.png&originHeight=144&originWidth=672&size=15042&status=done&style=none&width=152) | = | 分类型 | 如  🍎、🍌、🍐 |
| 饱和度（S） | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/185301/1582780238558-0bfd821d-c20f-4124-9f8a-00c597f7e7b0.png#align=left&display=inline&height=32&name=image.png&originHeight=140&originWidth=652&size=12827&status=done&style=none&width=151) | = | 有序型 | 如多少、高低、大小 |
| 明度（B） | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/185301/1582780043960-dd86c192-cfe4-40e2-a0e0-d0788fcc012b.png#align=left&display=inline&height=31&name=image.png&originHeight=152&originWidth=748&size=18696&status=done&style=none&width=152) |  | 数值型 | 如  9.5cm 、18 个 |

<br />

## 6 大色板类型

<br />AntV 色板以蚂蚁极客蓝为起始主色，根据不同数据类型、使用场景扩展出 6 种可视化色板类型，可完美兼容 Ant Design  UI 资产。以下所有色板均通过无障碍测试校验，可放心使用。<br />![02-AntV 品牌色@3x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201086841-c1bb4188-2bd4-44e6-a3a4-fa7bd60dd270.png#align=left&display=inline&height=1071&margin=%5Bobject%20Object%5D&name=02-AntV%20%E5%93%81%E7%89%8C%E8%89%B2%403x.png&originHeight=1071&originWidth=2907&size=252865&status=done&style=none&width=2907)<br />

### 分类色板

<br />分类色板用于描述分类数据，如苹果、香蕉、梨，常用一个颜色代表一个值以区分不同类型，取色时色相分布均衡，相邻颜色之间明暗需考虑差异性，常用于饼图的不同分类、填充地图中的不同国家、关系图中的不同角色等。

![03-分类色板@4x.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605619237113-c00c56e9-540f-43fe-896f-1ebd8cfd2ec5.png#align=left&display=inline&height=508&margin=%5Bobject%20Object%5D&name=03-%E5%88%86%E7%B1%BB%E8%89%B2%E6%9D%BF%404x.png&originHeight=508&originWidth=2324&size=46260&status=done&style=none&width=2324)![03-分类色板@3x.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605619237103-6848e048-dfb9-4465-a61b-8186baeb7c3b.png#align=left&display=inline&height=1326&margin=%5Bobject%20Object%5D&name=03-%E5%88%86%E7%B1%BB%E8%89%B2%E6%9D%BF%403x.png&originHeight=1326&originWidth=1743&size=109645&status=done&style=none&width=1743)<br />**用法示例**<br />如图水果价格走势对比，使用红色代表苹果价格、蓝色代表蓝莓价格、黄色代表香蕉价格。

**![Artboard@2x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201439281-bbcc7172-0f75-4186-b719-58ba8e2e640f.png#align=left&display=inline&height=1070&margin=%5Bobject%20Object%5D&name=Artboard%402x.png&originHeight=1070&originWidth=1960&size=77906&status=done&style=none&width=1960)**<br />

### 顺序色板

<br />顺序色板，一般使用同一或邻近色相，通过明度和饱和度的渐变，常用来表示同一事物中的数值大小或梯度变化，如排行榜等级变化、一个国家或地区的新增人口数对比、风险等级变化等。<br />![Artboard@3x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201459261-856b236e-edc9-42dc-b82c-f8f07cc580ab.png#align=left&display=inline&height=390&margin=%5Bobject%20Object%5D&name=Artboard%403x.png&originHeight=390&originWidth=1743&size=25732&status=done&style=none&width=1743)<br />**单色顺序色板**<br />单一色相渐变称之为单色顺序色板，人眼可识别的色彩数量 5 ～ 7 个，为保证信息的最佳识别度，尽可能的克制使用颜色数量。<br />![04-单色连续色板@3x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201472706-7d3f4902-8855-4b00-879b-3b9efabad431.png#align=left&display=inline&height=1089&margin=%5Bobject%20Object%5D&name=04-%E5%8D%95%E8%89%B2%E8%BF%9E%E7%BB%AD%E8%89%B2%E6%9D%BF%403x.png&originHeight=1089&originWidth=1743&size=226465&status=done&style=none&width=1743)<br />**邻近色顺序色板**<br />为拉开颜色差异，可用两个或以上个色相，通过明度或饱和度渐变，颜色连续而丰富，可产生更多色彩分级，表达更多的连续数值，常用于热力图中的热度变化，通过邻近色相的差异将聚集部分突显出来<br />![05-邻近色连续色板@3x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201494971-d686dfd2-e556-44bf-839e-85302f8bc35f.png#align=left&display=inline&height=792&margin=%5Bobject%20Object%5D&name=05-%E9%82%BB%E8%BF%91%E8%89%B2%E8%BF%9E%E7%BB%AD%E8%89%B2%E6%9D%BF%403x.png&originHeight=792&originWidth=1743&size=140280&status=done&style=none&width=1743)<br />\*\*用法示例\*\*<br />2017 年西安居民人均消费支出，通过连续的颜色变化，可以快速感知出居住方面消费占比最大，其次食品烟酒，第三是交替通信<br />![12.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201513576-a1be0667-8227-420f-a395-54de52184157.png#align=left&display=inline&height=983&margin=%5Bobject%20Object%5D&name=12.png&originHeight=983&originWidth=1724&size=343916&status=done&style=none&width=1724)<br />

### 发散色板

<br />对比色渐变色板，一般是两种互补色（也可以是对比色）去展现数据从一个负向值到 0 点再到正向值的连续变化区间，显示相对立的两个值的大小关系，常用于气温的冷热、海拔高低、股票涨跌等<br />![06-离散色板@4x.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605619237119-534aa427-31e4-49e6-a6d8-f9646cdf4d2e.png#align=left&display=inline&height=1824&margin=%5Bobject%20Object%5D&name=06-%E7%A6%BB%E6%95%A3%E8%89%B2%E6%9D%BF%404x.png&originHeight=1824&originWidth=2324&size=382421&status=done&style=none&width=2324)<br />**用法示例**<br />全国等温线图，使用发散色板表示正负值的气温变化，暖色系的橙红色容易让人联系到太阳或炽热的感受，用于高温变化，颜色越红温度越高，反之，冷色系的蓝容易让人联想到冰和寒冷的感受，用于低温变化，颜色越深温度越低<br />**![替换2.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1585799942378-092f87ae-b8fb-4746-83e0-e7e2b59519de.png#align=left&display=inline&height=1166&margin=%5Bobject%20Object%5D&name=%E6%9B%BF%E6%8D%A22.png&originHeight=1166&originWidth=1960&size=1575163&status=done&style=none&width=1960)**<br />

### 叠加色板

<br />叠加色板，为了色尽其用的原则，将两组顺序色板通过图层叠加模式产生一组新的色板，一个颜色代表两种变量数据，常用于观察一个事物两个维度变化的相关性，如胖瘦和高矮两个维度的人数分布中，瘦且高的人群分布<br />![07-叠加色板@3x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583762984700-fde393bf-5ba2-4f49-83cc-a629ad0866de.png#align=left&display=inline&height=1263&margin=%5Bobject%20Object%5D&name=07-%E5%8F%A0%E5%8A%A0%E8%89%B2%E6%9D%BF%403x.png&originHeight=1263&originWidth=1761&size=105205&status=done&style=none&width=1761)<br />**用法示例**<br />双变量映射地图，相对于单变量映射的地图，该地图形式更加新颖，十分适合用来展示两个紧密联系的变量信息。如下图所示，图中展现了美国国民人口居住密度和家庭生产总值的分布关系，纵向由浅到深的紫色映射了人口密度，横向由浅到深的蓝色映射了家庭收入水平，相交的颜色可以总体反映出人口和家庭的分布情况。可以从地图中清晰地看到，人口多且收入高的大多分布在沿海地区，人口数少且收入低的则主要分布在中部地区。<br />![Artboard Copy 7@2x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583763026151-15c2e082-436d-4b99-82de-97b4e6a6bf2e.png#align=left&display=inline&height=1200&margin=%5Bobject%20Object%5D&name=Artboard%20Copy%207%402x.png&originHeight=1200&originWidth=1960&size=1662458&status=done&style=none&width=1960)<br />

### 强调色板

<br />对比突出重点或特定数据，将重点关注的数据标以高饱和度的强调色，其他普通数据标以低饱和、低明度的基本色，常用于对比重点关注事物与其他分类事物的差别，如将自家产品与竞品的对比使用<br />![08-强调色板@2x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201621924-45f20a1a-ffeb-4ec5-a0b1-fdbbb247690c.png#align=left&display=inline&height=738&margin=%5Bobject%20Object%5D&name=08-%E5%BC%BA%E8%B0%83%E8%89%B2%E6%9D%BF%402x.png&originHeight=738&originWidth=1136&size=38863&status=done&style=none&width=1136)<br />**用法示例**<br />如图某工厂历年能源消耗占比趋势对比，分别用五种不同的颜色代表五种能源，其中「天然气」为重点关注的能源类型，使用饱和度高的蓝代表「天然气」，其他能源类型着以低饱和度的分类颜色，以便关注的「天然气」能够快速被观察到，同时其他类型可作为对比参考而不会因颜色过多而产生干扰。<br />**![Artboard Copy 6@2x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201646508-ea10ae2d-e171-4054-b6b5-66d551e8cba2.png#align=left&display=inline&height=814&margin=%5Bobject%20Object%5D&name=Artboard%20Copy%206%402x.png&originHeight=814&originWidth=1960&size=107371&status=done&style=none&width=1960)**<br />

### 语义色板

<br />色彩在可视化中的使用，不仅是数据信息传递的可视化通道，同时也是更深一层的文化故事的载体，用于表达意义或情感。重视用色习惯，遵循相关标准，色彩也不是都能寓意的，相当一部分图表色彩选择和感情因素无关，而是按照某种习惯来设定色彩，即所谓约定俗成，有的甚至形成来规范。如气象预警配色，红绿灯配色，股市的红涨绿跌等。<br />![替换.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1585798670548-39286237-bbb1-458a-bfc9-e66b239b7414.png#align=left&display=inline&height=238&margin=%5Bobject%20Object%5D&name=%E6%9B%BF%E6%8D%A2.png&originHeight=238&originWidth=1136&size=31117&status=done&style=none&width=1136)<br />**用法示例**<br />某水产公司 2019 年的月盈利变化，使用红色表示盈利，绿色表示亏损。<br />**![Artboard Copy 5@2x.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201679192-9acb75c1-7176-46bd-a30c-194beb60418a.png#align=left&display=inline&height=1054&margin=%5Bobject%20Object%5D&name=Artboard%20Copy%205%402x.png&originHeight=1054&originWidth=1960&size=155259&status=done&style=none&width=1960)**<br />

## 3 大颜色主题

在默认主题的基础上，新增三大颜色主题，分别是秋日橙主题、马卡龙主题、强对比主题，这三类主题色板各有不同的使用场景。<br />\*\*

### 秋日橙主题

以橙色调为主的主题色板，整体基调是秋日的丰收色，同时适应深浅模式，可按需替换默认主题。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605619237093-cbab2a11-26ad-498d-9df8-0f936bc3736f.png#align=left&display=inline&height=154&margin=%5Bobject%20Object%5D&name=image.png&originHeight=154&originWidth=1170&size=7191&status=done&style=none&width=1170)<br />**![秋日橙.gif](https://cdn.nlark.com/yuque/0/2020/gif/100257/1605619237095-a20808d6-1ff2-4e41-b29b-c4d0176811af.gif#align=left&display=inline&height=608&margin=%5Bobject%20Object%5D&name=%E7%A7%8B%E6%97%A5%E6%A9%99.gif&originHeight=608&originWidth=1080&size=1560869&status=done&style=none&width=1080)**

### 马卡龙主题

以粉紫色调为主的主题色板，整体基调是马卡龙糖果色，同时适应深浅模式，风格活泼明快，可按需替换默认主题。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605619237086-3390b171-bf79-462b-9af2-81b51950238e.png#align=left&display=inline&height=142&margin=%5Bobject%20Object%5D&name=image.png&originHeight=142&originWidth=1191&size=6858&status=done&style=none&width=1191)<br />![马卡龙.gif](https://cdn.nlark.com/yuque/0/2020/gif/100257/1605619237138-571b6e40-27ee-45f5-a579-fe67b6991f89.gif#align=left&display=inline&height=608&margin=%5Bobject%20Object%5D&name=%E9%A9%AC%E5%8D%A1%E9%BE%99.gif&originHeight=608&originWidth=1080&size=1513910&status=done&style=none&width=1080)<br />

### 强对比主题

强对比分类主题，颜色饱和度较高，强对比度，在投屏场景等降对比场景使用。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605619237128-138a4d92-c1c6-4954-8db2-93886d0f3564.png#align=left&display=inline&height=89&margin=%5Bobject%20Object%5D&name=image.png&originHeight=142&originWidth=1191&size=8352&status=done&style=none&width=746)<br />![强对比橙.gif](https://cdn.nlark.com/yuque/0/2020/gif/100257/1605619237161-44bed184-ceae-472c-ba21-3aee2ee70ed1.gif#align=left&display=inline&height=608&margin=%5Bobject%20Object%5D&name=%E5%BC%BA%E5%AF%B9%E6%AF%94%E6%A9%99.gif&originHeight=608&originWidth=1080&size=1529279&status=done&style=none&width=1080)<br />

---

## 8 条使用建议

我们发现，在提供官方色板的前提下，仍有用户并不是十分擅长在实际场景中应用色板，以下几条设计指引供使用时参考。<br />

### 避免使用过多颜色

在实际应用中，经常会出现大量颜色使用的误区，建议高亮重要的数据（不超过 8 个），其他数据默认置灰，通过图例交互进行查看。<br />![](https://cdn.nlark.com/lark/0/2018/png/56/1539063872396-2650f51b-d7d0-48b2-bb4f-f46187c872ab.png#align=left&display=inline&height=237&margin=%5Bobject%20Object%5D&originHeight=614&originWidth=1554&status=done&style=none&width=600)<br />

### 数据映射规则从简

同样的数据，映射规则尽量保持为一种。<br />例如当使用柱形的高度来映射数据时，就不需要再加上颜色的维度去映射数据了。

### ![](https://cdn.nlark.com/lark/0/2018/png/56/1539063894683-5a2847a9-aa56-41b1-ad3d-b2e8464e347b.png#align=left&display=inline&height=239&margin=%5Bobject%20Object%5D&originHeight=620&originWidth=1558&status=done&style=none&width=600)

### 选择准确的色板

对应自己的数据，按照数据特性选用对的色板，下图中分类数据应选用分类色板，而不是连续色板。<br />![](https://cdn.nlark.com/lark/0/2018/png/56/1539063913944-5202e736-4d8e-4257-8cd6-aa18a0d9644e.png#align=left&display=inline&height=243&margin=%5Bobject%20Object%5D&originHeight=630&originWidth=1558&status=done&style=none&width=600)<br />

### 解释你的颜色

当图表中出现不同颜色时，需要向读者解释颜色代表的含义。<br />![](https://cdn.nlark.com/lark/0/2018/png/56/1539063939104-11609dc7-cab6-4f2f-bba3-a7e07ba075ba.png#align=left&display=inline&height=238&margin=%5Bobject%20Object%5D&originHeight=620&originWidth=1560&status=done&style=none&width=600)<br />

### 保持颜色一致性

对于统一度量，使用同样的颜色方案，而且在整个页面（通常是仪表盘）使用时，注意保持整体颜色方案的一致性。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/174999/1574066743331-3c7e6533-0d90-4ea3-981a-3576ea18c04e.png#align=left&display=inline&height=583&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1166&originWidth=1788&size=242374&status=done&style=none&width=894)<br />

###

### 彩虹色环不连续

不以色环顺序来表达连续的有序型或数值型数据，因为色环顺序并非人眼自然记忆，且彩虹色变化并非均衡变化，如下图中灰阶的转化，很容易看出彩虹色并不是一个连续逐渐加深的色板，因此彩虹色环并不适合展示连续数据，容易引起误解。<br />![15.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201800653-d368e08c-8017-43dd-be42-c8030759c796.png#align=left&display=inline&height=243&margin=%5Bobject%20Object%5D&name=15.png&originHeight=630&originWidth=1558&size=84031&status=done&style=none&width=600)<br />

### 顺序色板需均衡

下图右侧「不建议」图中，第 2 、第 3 个颜色很相近，难以区分，第 3 、第 4 个颜色跳跃很大，对于均衡的连续数据表达中，容易引起数据感知的误差，均衡选色可在 PhotoShop 的拾色器中使用 Lab 模式下固定色相不变，调节 L 值进行等距取色。<br />![14.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201825387-149cfba1-12e8-4f0a-9750-e2fa43956b08.png#align=left&display=inline&height=243&margin=%5Bobject%20Object%5D&name=14.png&originHeight=630&originWidth=1558&size=28066&status=done&style=none&width=600)<br />

### 为视障群体设计

AntV 色板在做无障碍验证时，得出以下几点取色建议 ：<br />

- 分类色板选取需明暗交替

虽然正常人眼中右侧分类色板通过色相可以区分差异，但在视障人士、甚至全色盲，则主要靠颜色的明暗差异来识别不同的数据类型，因此分类色板需要注意适度的明暗交替<br />![Group 5.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201837524-33ee37f5-61d9-45d8-bb81-12dd37941491.png#align=left&display=inline&height=243&margin=%5Bobject%20Object%5D&name=Group%205.png&originHeight=630&originWidth=1558&size=28858&status=done&style=none&width=600)<br />

- 离散色板尽量选取蓝黄对比

一般场景中，我们常也会使用黄绿配色，黄绿对比中，黄是暖色系，绿是冷色系，同样能给到对比感受，且打破常规的蓝红对比色，给到新颖的色彩感受，但如果你的用户中视障人士占比较多，则尽量避免绿黄配色，如图为两种色板在正常人眼和红绿色盲眼中的对比效果，黄绿配色在红绿色盲眼中就失去了色彩对比，难以区分。<br />![13.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201846297-7c0ea0f7-da8e-47b3-8946-134f0f634cc4.png#align=left&display=inline&height=243&margin=%5Bobject%20Object%5D&name=13.png&originHeight=630&originWidth=1558&size=47528&status=done&style=none&width=600)<br />

## 资源下载

<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201857656-b9003910-8030-4caa-bff4-f333f14cd5b0.png#align=left&display=inline&height=24&margin=%5Bobject%20Object%5D&name=image.png&originHeight=398&originWidth=446&size=85875&status=done&style=none&width=27) [AntV 色板-2.0.sketch](https://www.yuque.com/attachments/yuque/0/2020/sketch/218706/1605620229367-6537fad7-15c5-4029-8105-eb6b859b6423.sketch?_lake_card=%7B%22uid%22%3A%221605620228504-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2020%2Fsketch%2F218706%2F1605620229367-6537fad7-15c5-4029-8105-eb6b859b6423.sketch%22%2C%22name%22%3A%22AntV+%E8%89%B2%E6%9D%BF-2.0.sketch%22%2C%22size%22%3A5047687%2C%22type%22%3A%22%22%2C%22ext%22%3A%22sketch%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22G6cEV%22%2C%22card%22%3A%22file%22%7D)<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/218706/1583201857666-6f1027ca-f8ba-44b8-8a9c-b5edfce9142f.png#align=left&display=inline&height=26&margin=%5Bobject%20Object%5D&name=image.png&originHeight=280&originWidth=276&size=7351&status=done&style=none&width=26) [AntV 色板色值表](https://yuque.antfin-inc.com/antv/zrwbtm/xg04p1)<br />

## 扩展阅读

- [AntV 色彩体系的搭建](https://zhuanlan.zhihu.com/p/70121039)

- 想自定义色板？查看 [色板生成教程](https://www.yuque.com/docs/share/cfdbe7e2-cd82-4844-8150-840a94be5a49?#)
