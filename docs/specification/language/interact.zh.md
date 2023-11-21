---
title: 交互
order: 2
---

# 01 交互层次

区别于传统数据报表相对静态的表现形式，用户通过与图不断产生交互，从数据中获取更深层次的分析和信息。

Shneiderman [1] 提出了经典的可视化信息交互策略：概览、缩放、过滤、按需提供细节、关联、记录和提取。两年后，Dix [2] 将高亮与焦点、上下翻页和超链接、概况与上下文、同一表示的不同参数、时间轴的过渡归纳为新的交互操作模式。交互的种类有很多，学者们对可视化交互的分类方式也各有不同，有「行为」[3]、「意图」[4]、「意图+参数」[5]等多种方式。

经过业务的实践和沉淀，AntV 从用户视角出发，按照用户的目标和行为对可视化交互进行梳理。我们发现用户在进行可视化数据分析时，通常会经历三个步骤，分别为「看数-分析-洞察」。

**看数：** 主要指用户获取数据并初步可视化加工和阅读查看的行为。
**分析：** 主要指用户对数据进行调整，从更多角度进行看数的行为。
**洞察：** 主要指用户通过交互强化洞见，并对结果进行流转的行为。

基于更多的业务调研和桌面调研，我们总结出常见的24类可视化交互，这是我们从用户视角出发的最全归纳。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7_pEQayJZzYAAAAAAAAAAAAADmJ7AQ/original' alt='' />

&nbsp;

### 举个例子

某大型超市销售同学想要分析今年的营收情况，找出所有有潜力的商品类型，并制定下一年度销售策略。于是销售同学找到数据，并使用可视化图表帮助自己看数、分析和洞察。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*tbjSSKbthzYAAAAAAAAAAAAADmJ7AQ/original' alt='' />

&nbsp;

# 02 设计建议

AntV 5.0 的设计价目标是让用户更有信任感、轻松感和意义感。下面从交互的角度切入，提供设计建议。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*L-r_SYACkmcAAAAAAAAAAAAADmJ7AQ/original' alt='' />

### 信任感

对操作多些确定，让用户自助使用。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*91N6SoAZyCYAAAAAAAAAAAAADmJ7AQ/original' alt='' />

用户在浏览图表查看数据时，我们建议每一次鼠标触发都有实时有效的反馈，如上图：用户在使用鼠标悬浮在图例上时，可实时的联动高亮图例对应的图形内容，让用户对自己当前阅读的对象有更明确的感知。

### 轻松感

交互的操作简单，让用户轻松分析。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*W9AyTIsZvMkAAAAAAAAAAAAADmJ7AQ/original' alt='' />

用户在交互过程中，始终都要跨过认知鸿沟和执行鸿沟 [6]，为了降低用户的认知成本和操作成本，我们建议在可视化交互中提供更多的直接操纵的能力。如上图：当用户有对数据自定义排序的场景下，若用户可以直接拖拽图形进行排序，便可以获得更自然的交互体验。

除了少思考和少操作以外，我们建议可以提供类似右键菜单的能力，让用户产生分析意图时即可所见即所得的获取分析工具，并对对象快速进行分析探索。

### 意义感 

增强分析的能力，让用户更易洞察。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*KdnqRIZwMCsAAAAAAAAAAAAADmJ7AQ/original' alt='' />

用户在分析探索时，适时的画龙点睛之笔可以让洞察更直观的展现在分析者面前，一条辅助线和一块参考区间便可以快速的将机会点或者风险点清晰的暴露出来。但是如果这个时候如果用户需要填写复杂的表单才能记录自己的洞察，那么在复杂的操作间，灵感可能会稍纵即逝。
我们建议为用户匹配更直观的交互语言，让用户抓住时机，快速沉淀洞察记录观点。如上图：用户在标注辅助线时原需要填写复杂的表单才能完成诉求，如果我们支持用直接长按坐标轴X即可添加辅助线，那么用户将获得更自由的交互体验，洞察也可被更快获取。

&nbsp;
# 03 设计策略

带着上面三个目标，我们对24种常见交互进行了设计迭代，沉淀了9+设计策略和20+设计案例，且会持续更新。
本篇将对每个策略挑选一个案例进行简单说明。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*eyBiQKJ1gNUAAAAAAAAAAAAADmJ7AQ/original' alt='' />

&nbsp;
### 信任感

#### 👀 有前馈

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZEPRSb71URgAAAAAAAAAAAAADmJ7AQ/original' alt='' />
&nbsp;

#### 👂 有反馈

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*tSCjR4v1rb8AAAAAAAAAAAAADmJ7AQ/original' alt='' />
&nbsp;

#### 🤏 可撤销

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*0CeVRralfEoAAAAAAAAAAAAADmJ7AQ/original' alt='' />
&nbsp;

### 轻松感

#### 🧠 少思考

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*L4ZKTbNAmagAAAAAAAAAAAAADmJ7AQ/original' alt='' />
&nbsp;

#### ⌛️ 快触发

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*INs5RJZckVcAAAAAAAAAAAAADmJ7AQ/original' alt='' />
&nbsp;

#### 👆 少操作

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*4QneSo3H2ScAAAAAAAAAAAAADmJ7AQ/original' alt='' />
&nbsp;

### 意义感

#### ⚒️ 能力全

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ynQXTYINyrAAAAAAAAAAAAAADmJ7AQ/original' alt='' />
&nbsp;

#### 💡 洞察快

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*NsbvQYXz25IAAAAAAAAAAAAADmJ7AQ/original' alt='' />
&nbsp;

#### 🥳 更自由

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZEPRSb71URgAAAAAAAAAAAAADmJ7AQ/original' alt='' />
&nbsp;

更多设计案例和设计Tips可查看： <a href='https://www.yuque.com/antv/operation/lb0y0d6umtqay0ow'>AntV 交互设计工具箱</a>

&nbsp;

# 04 交互索引

### 看数

<table style="border: none;">
  <tr>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*fVkORZuhLFcAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*t-M9RoNdC6sAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*toSKTJDmztkAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*xypCRZZzGUYAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
  </tr>
  <tr>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*IqfzRa1hMP4AAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*kEL4SabGOvYAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Hc7ARp6LdvoAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*wbGpSJWPLgMAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
  </tr>
</table>

&nbsp;
### 分析

<table style="border: none;">
  <tr>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*r-ttQJREzocAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*XmetSYWu8bUAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*9qszSLhIfQ0AAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*KhjUSq6vvuYAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
  </tr>
  <tr>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*QoPPQZluvFEAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*13c-TL4AyHoAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*O1mSQI1fBQQAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*OwhPQ4N5J4cAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
  </tr>
  <tr>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*V8ZkT4KaWYcAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*0iFAQo-pXpIAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*faVBQ7yaDbwAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*tRmTQ5VwfaIAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
  </tr>
  <tr>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*0sQyQbUb4yYAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*qayNQbrz2dcAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"></td>
    <td style="text-align: center; width: 100px;border: none;"></td>
  </tr>
</table>

&nbsp;
### 洞察

<table style="border: none;">
  <tr>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*2BPsSa_RhmEAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"><a><img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*nGWzS6OTZwMAAAAAAAAAAAAADmJ7AQ/original' alt=''/></a></td>
    <td style="text-align: center; width: 100px;border: none;"></td>
    <td style="text-align: center; width: 100px;border: none;"></td>
  </tr>
</table>

# 参考文献

[1] Schneiderman B. The eyes have it: a task by data type taxonomy forinformation\visualizations[J]. Craft of Information Visualization, 1996:364-371.
[2] Dix, Alan, Ellis, Geoffrey. Starting simple: adding value to static visualisation throughsimple interaction[J]. 1998.
[3]李洪海，齐兵．界面设计中交互行为的分类［J］．艺术与设计：理论，2013（11）：119-121．
[4]Landesberger T V, Fiebig S, Bremm S, et al. Interaction Taxonomy for Tracking of UserActions in Visual Analytics Applications[J]. 2014:653-670.
[5] Gotz D, Zhou M X. Characterizing users' visual analytic activity for insightprovenance[C]// IEEE Symposium on Visual Analytics Science & Technology. 2008.
[6]:Donald A.Norman.《设计心理学1》[M]．
