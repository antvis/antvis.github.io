---
title: 信息组件 Info Component
order: 0
---

[@幕阑(mulan.lxy)](/mulan.lxy)   待更新<br />

# 何时使用

为了更好地让读者理解图形背后的数据信息，图表设计者常常需要添加图例 Legend、指标卡或者 Tooltip，作为信息补充。何时需要使用图例？ 如何设计 Tooltip？在空间有限的移动端应当如何合适地展现数据信息？<br />

# 定义

![image.png](https://cdn.nlark.com/yuque/0/2020/png/268442/1605621550863-46f6650e-cb2e-4313-ad23-41c754e08fe9.png#align=left&display=inline&height=724&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1448&originWidth=2860&size=1279991&status=done&style=none&width=1430)<br />图表，指常用的基于图形语法的统计图表和业务封装图表。<br />图例（legend）是图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选。G2 会根据设置图形属性映射以及数据的类型自动生成不同的图例。<br />提示信息 (Tooltip)，是指当鼠标悬停在图形上时，以提示框的形式展示该点的数据，比如该点的值，数据单位等，帮助用户快速获取图形的关键数据。<br />指标卡用来显示关心的某一个指标值（即度量值）及其变化趋势（比如同比，环比）<br />图形元素（Element，也叫 Geom）即我们所说的点、线、面这些几何图形。G2 中并没有特定的图表类型（柱状图、散点图、折线图等）的概念，用户可以单独绘制某一种类型的图表，如饼图，也可以绘制混合图表，比如折线图和柱状图的组合。<br /> <br />在图表中，用户最关心的信息往往是图形对应的数据点的多维信息。然而静态平面的大小是有限的，统计图表往往只能展现最重要的 1~4 个维度的数据信息。在针对不同尺寸和设备下，图表优先显示的信息量是不同的，次要信息被安置在图例说明 legend、悬浮提示 tooltip 中。在现有的图表前端框架和设计中，往往把图例和 tooltip 分开成不同的组件开发和设计，背后的数据信息是不相通的。图例也仅支持展现分类文本信息，不支持展现对应分类的聚合数值。<br />因此本方案解决的是从设计的角度统一以往分离的不同组件，规定不同的展现形态，解决多端显示下相同数据量的不同展现形态，实现工程提效和设计体验一致。工程上见 AntV g2 状态量 [https://yuque.antfin-inc.com/docs/share/462099bd-4bd0-4571-acbf-ecc616093307?#](https://yuque.antfin-inc.com/docs/share/462099bd-4bd0-4571-acbf-ecc616093307?#) 《状态量与图表联动》<br /> <br />Echarts 和 D3.js 作为 AntV 的竞品，是国内外知名度较高的开源前端可视化框架。这两个产品对图例和 tooltip 没有专门的支持功能，需要用户自行开发。<br />Tableau 作为商业分析工具，允许用户以富文本编辑框的形式编辑 tooltip 展现的内容和形态，但是对图例是没有支持聚合值的功能，需要用户使用表格代替。<br />PowerBI 移动端支持在浮层中展现详细图例和 tooltip 信息，仅支持 hover 交互，不支持点选交互。且不对所有图表都通用。<br />以上四种以及其他竞品都未给出通用性解法。<br /> <br />1. 统一 tooltip、图例、指标卡的构成，为一个组件。<br />2. 定义相关组件的布局构成、和响应式<br />3. 定义相关组件的视觉规范和交互规范<br />4. 统一组件后，该方案支持图表多端适配下根据设备不同灵活切换 tooltip、图例和指标卡。<br /> <br /> <br />设计稿：[https://yuque.antfin.com/antv/cfksca/446881?artboard_type=artboard&view=&from=](https://yuque.antfin.com/antv/cfksca/446881?artboard_type=artboard&view=&from=)<br /> <br />图例 [https://antv.vision/zh/docs/specification/components/legend](https://antv.vision/zh/docs/specification/components/legend)<br />提示信息 [https://antv.vision/zh/docs/specification/components/tooltip](https://antv.vision/zh/docs/specification/components/tooltip)
