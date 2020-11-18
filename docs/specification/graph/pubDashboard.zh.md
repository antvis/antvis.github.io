---
title: 通用 Dashboard
order: 3
---

## 设计目标

每一个 dashboard 都需要明确用户是谁、想传递的目标。有了使用场景，数据的分析与呈现才会变得有生命和意义。让用户快速、清晰地理解数据意义，快速进行分析趋势，驱动决策，是我们设计 dashboard 的目标。<br /> <br /> <br />

## 常见 Dashboard 类型

抛开业务属性，Dashboard 按内容组织以及交互形态，可以分为“指标大盘”、“多维分析”、“数据明细” 3 种类型。<br /> <br />

### 指标大盘

指标大盘将应用中每个部分最关键的数据提取出来，在一个页面呈现，便于全局分析和决策。页面内容通常呈现多个不同维度的关键数据，除关键指标、基础图表外，还会辅以表格、文本分析等，提供最简明直接的数据表达。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618013656-509d1640-3df1-447d-9e89-20b26ad226c0.png#align=left&display=inline&height=885&margin=%5Bobject%20Object%5D&name=image.png&originHeight=885&originWidth=1680&size=403817&status=done&style=none&width=1680)<br /> <br /> <br />

### 多维分析

将同一主题下的**多种下钻维度**呈现在页面中，让用户能够研究多组数据并发现趋势，用户可操作数据，调整数据范围满足更精准的分析需求。页面内容通常上到下遵循从总体到下钻的结构。除基础图表外，还会辅以表格，高级筛选器等，提供更丰富的分析维度，包含能够深入洞察数据的**复杂图表**。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618013648-4e7cf702-57ab-419c-9db5-fd5a95b87e2e.png#align=left&display=inline&height=1547&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1547&originWidth=1259&size=520774&status=done&style=none&width=1259)<br /> <br />**<br />**

### 数据明细

常用于数据报表细节信息的展示，根据业务诉求可配置文本、列表、可视化图表等。<br />**![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618013641-31dfe33f-56f6-4596-ae56-34eb62d061fb.png#align=left&display=inline&height=1095&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1095&originWidth=1255&size=306228&status=done&style=none&width=1255)**<br /> <br /> <br />

## 设计指引\*\*

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618013626-7a234955-dc23-4962-b528-e9332b90b262.png#align=left&display=inline&height=923&margin=%5Bobject%20Object%5D&name=image.png&originHeight=923&originWidth=1440&size=719583&status=done&style=none&width=1440)

###

### 合理组织内容

**有逻辑组织页面层次**，Shneiderman 于 1996 年提出可视化信息检索的箴言 Overview First， Zoom and Filter， Then Details-on-De-mand，译为“概览第一，聚焦过滤，再按需查看详情”。它符合人类寻求信息的基本逻辑：先大体，再局部，然后聚焦兴趣点进行探索，这是一个由表及里的过程。<br /> <br />**合理排布内容，**人的阅读顺序为从左至右，从上而下，采用格式塔设计原理，有限组织不同方面的思路，便于分组和快速扫描。将最重要的视图、最关键的指标放在此类型页面的顶部或左上方。阅读者可以快速准确地找到他们需要查看的文字。当我们打开网页或者仪表盘的时候，第一眼会看哪里？最可能是左手边，可将关键信息放在此位置。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618013653-dbe69716-bba0-4d23-a3df-f592430aed43.png#align=left&display=inline&height=338&margin=%5Bobject%20Object%5D&name=image.png&originHeight=338&originWidth=1680&size=25175&status=done&style=none&width=1680)**<br />**内容组织 Tips\*\*

- 明确此类页面的使用者身份，以及分析目的，从而选择对应的页面类型.   划分用户。不同业务线间，关注的核心指标不同，常见的指标类型有：宏观的大盘数据，具体的业务指标。
  - 针对决策者，可以选择描述型的指标结果页面；
  - 针对执行者，可以选择有更多分析功能的分析、详情页面。
- 确定核心指标间的联系及优先级，合理地进行页面布局，把结论和最重要的指标放在最醒目的位置；
- 请记住，你可以将以上页面通过交互方式串联起来，讲述你的数据故事。

<br />
<br />

### 突出重点

如果系统知道那些值较高，或者超出阈值，为什么要用户去找，不高亮它们？<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618013651-d890470a-c02a-4376-a12f-d269de0fa216.png#align=left&display=inline&height=338&margin=%5Bobject%20Object%5D&name=image.png&originHeight=338&originWidth=1680&size=22747&status=done&style=none&width=1680)<br />**多用对比：**在数据分析领域，经常会说“无对比不分析”。没有对比就没有伤害，没有对比就看不出差距。所以，多用对比，方便阅读读看出数据之间的差异。比如当前数据与目标对比、同期对比往期。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618013638-7bd04527-d108-46f7-a0ab-5025e3333405.png#align=left&display=inline&height=1432&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1432&originWidth=3840&size=1056304&status=done&style=none&width=3840)<br /> <br /> <br /> <br />

### 准确传递

保证数据的准确性、清晰度和完整性<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618013631-4ccd1754-94e3-48b9-ba22-fa0d1ed7096e.png#align=left&display=inline&height=338&margin=%5Bobject%20Object%5D&name=image.png&originHeight=338&originWidth=1680&size=41949&status=done&style=none&width=1680)<br />1、使用正确的图表类型。<br />2、在必要的时候对数据的定义作出解释。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618013665-69a001e7-9d1f-4f03-8587-7483a24014ce.png#align=left&display=inline&height=1746&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1746&originWidth=3840&size=1378054&status=done&style=none&width=3840)
