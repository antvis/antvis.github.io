---
title: 如何生成你的分类色板
order: 0
---

可视化色板是数据驱动的，色彩背后还承载着数据信息，不能单纯依靠美丑评判好坏，一套优秀的可视化色板应该让用户信任数据，轻松阅读数据，并能启发用户发掘数据背后的意义。基于新的设计价值观和考虑帮助设计师上手一套色板设计，我们将色板设计流程化的同时，提炼设计规则量化为色彩算法，实现用户输入品牌色即可轻松得到一整套可视化色板，实现人人都可以是专业的可视化设计师。

## AntV 可视化色彩体系

了解了可视化色板的业务特点后，接下来让我们深入了解 antv 的可视化色彩体系，根据不同的业务场景，antv 总共有 6 套不同的色板，其中最关键的是分类色板，其他色板都是分类色板根据一定的映射关系衍生而来，因此本次升级会以分类色板作为抓手进行升级。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*qfJ6RLkMPjoAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

&nbsp;

## 升级的原因是什么？

本次色板升级主要有两个原因：首先是 antv5.0 从人的视角重新提出了三个价值观，新的价值观对可视化色板提出了更多要求。其次是 5.0 开放了系统灵活度，支持用户自定义主题色来生成专属的可视化色板，需要一套可被算法实现的取色逻辑。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*QGEhQqlxHNQAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

&nbsp;

## 现状分析

明确了升级的原因后，让我们带着新的价值观来看看当前色板有哪些问题。信任感要求色彩应该避免让用户产生歧义，4.0 色板中的灰色会红色分别会让用户误以为是对比数据和警告数据，从而造成用户疑惑。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*U-jbSLwWB9cAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

轻松感要求色板应该清晰容易识别，3.0 色板整体与白色的对比较小，色彩运用到图形上不够清晰，图形上的文字不易阅读。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*PDalSpCgE-wAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

意义感要求色彩帮助用户更好的理解数据，对于这一点，antv5.0 会在官网消费侧通过色板使用指南帮助设计师正确的使用可视化色板。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*LsmxQKq5IYoAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

&nbsp;

## 设计流程

明确了升级原因和当前的问题后，我们主要会从下面三个步骤进行优化：第一步是确定取色逻辑：通过参考经典的配色理论来确定取色规律并得到色板初稿；第二步是基线检测：通过量化和测试的方式去检验色板是否满足价值观的要求；第三步是感性调整：在理性的推导之上加上感性的调整让色彩和谐舒；

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*fWAvS4OLAtQAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

&nbsp;

## Step1:确定取色逻辑

首先进入到第一步，我们先来看一下 4.0 色板的取色逻辑是什么，如图所示，4.0 色板在色彩的选取上有一定的逻辑，包括相邻色彩之间的明暗间隔，色彩之间的距离等，5.0 会在 4.0 的基础上继续优化，同时对取色逻辑进行量化用于后期的拓展和算法实现。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*-o1ZRrNDaocAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

为了得到一套可被量化同时又具有色彩搭配美感的取色方式，我们参考了经典的配色理论，包括「邻近取色」「对比取色」「分裂互补取色」从支付宝的品牌色出发依次使用三种配色方式得到三组色板。其中邻近取色沿着一个方向，按照相同的夹角取色，其优点是色彩具有很强的规律感和和谐度，缺点是整体区分度比较低。对比取色是相邻两个色彩是一组成 180 度的对比色，其优点是色板具有很强的区分度，缺点是相邻两色会误以为是一组对比数据，分裂互补取色是三个一组取色，前两个颜色是一组邻近色，第三个颜色是前两个颜色共同的对比色，这种取色方式兼顾了邻近色的和谐同时又有较高的区分度，没有明显的劣势。**因此 5.0 确定以分裂互补取色方式作为取色逻辑。**

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gLIGRp2xlOkAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

&nbsp;

## Step2:基线矫正

根据取色方式得到色板初稿后，还需要通过 4 个基线矫正来让色彩满足价值观的要求。

### 色彩不存在歧义

色彩应该避免与容易引起歧义的色彩(警告红)混淆，从而让用户产生歧义。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*OO2kSL6OE3UAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

### 色彩足够清晰

无论作为元素还是容器，色彩与其相交的内容的对比度都应满足 W3C 可访问标准。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*m_HnSoaTOCMAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

### 色彩间有区分

色彩之间具有足够的区分度，通过在 Lab 模型下计算色彩之间的欧几里得距离来量化区分度，并确保该值大于可区分阈值。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*I9NcTYcWXBgAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

### 兼顾视障体验

保证在视障场景下相邻色彩之间有足够区分，视障人群对色相识别有障碍，对明暗更敏感，因此需要保证相邻两色有一定明度差异。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*c_jbSqwHN_4AAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

通过色环取色和基线矫正，我们就得到一组具有色彩搭配美感，算法可实现并满足价值观要求的色板。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Ixj-QLOiZpUAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

&nbsp;

## Step3:感性调整

色彩是感性的视觉语言，理性的取色内核上，还需要将色板放入真实场景中去验证，对过于突出的色彩进行调节，让色彩更加和谐。

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*SpkLSLFkdeMAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;" />

&nbsp;

## 改版前后对比

得出色板之后，我们将色板放到真实业务中进行测试，并收获了用户的正面反馈。

<div>
  <img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*hkiERrzevIkAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;width: 49%;" />
  <img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*zYhDRKcOCwIAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;width: 49%;" />
</div>

&nbsp;

## 可视化色板生长体系

得到分类色板之后就可以根据已有的映射关系衍生出其他色板。并且根据确定的取色逻辑和定量的基线标准，满足用户只需要输入品牌色就能获得一套可视化色板的诉求。

<div>
  <img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*kjQLT4u2e_sAAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;width: 49%;" />
  <img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*8T0pTKs6c98AAAAAAAAAAAAADmJ7AQ/original' alt='' style="border-radius: 8px;width: 49%;" />
</div>
