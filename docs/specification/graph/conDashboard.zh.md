---
title: 监控 Dashboard
order: 4
---

## 定义

在企业级产品中，运维人员常需要监控、跟进、检测、处理多事件、多维度、多指标的实时信息。用户需要清晰、高效地查看全局概况；再明确问题，聚焦下钻分析，处理跟进问题。本文面向**多指标多维度实时数据**的监控场景，提供快速上手的设计模板。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618054996-2be304c4-1180-41aa-a190-663124764388.png#align=left&display=inline&height=514&margin=%5Bobject%20Object%5D&name=image.png&originHeight=514&originWidth=1884&size=53805&status=done&style=none&width=1884)<br />监控模板提供了整个对于监控业务的问题发现定位-分析追溯-跟进处理的解决过程建议。监控人员首先在业务总览页，对所有业务故障的发生与处理有总体把控，再进入故障排查页面进行每段时间内的故障排查，以及下钻查看问题详情；也可以在总览后，进入自行搭建的自定义大盘页面，对相应业务数据有针对性地监控。<br />模板的提供不局限于单页面。设计师可以根据自己的业务场景，选取符合的区块进行拼装。

---

## 模板结构

模板内容涉及三个模块，以三个主页面的形式给出。也支持单页面拼合使用。<br />

### 1.总览页

业务总览页展现关键指标数目列表、报警分布，事件列表，帮助用户快速定位到问题模块，进入故障排查。**<br />**如何使用：\*\*总指标卡描述了所监控业务的应用总个数、出现异常的应用数，以及自定义大盘个数，用于把控监控范围；报警分布展现各时段下异常数量，便于快速聚焦到需要关注的时间段里；事件列表提供故障处理人与处理进度等信息，方便管理者进行监管。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618054993-5458b660-9ec6-4a26-a3a7-44e9f0c1c5ef.png#align=left&display=inline&height=1602&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1602&originWidth=1884&size=431894&status=done&style=none&width=1884)<br />

### 2.故障排查页

故障排查页包含秒级时间区块筛选器、故障事件列表、故障事件基本信息、故障定位细分、失败任务链路、事件列表。**<br />**如何使用：\*\*全局秒级时间区块筛选器对时间进行线性呈现，并将有故障的时间点高亮，有利于用户基于时间高效筛选排查问题高发区。下方左侧以列表形式罗列故障事件可供切换；右侧以总-分形式呈现事件波动概述、故障处理进度、故障定位细分、失败业务流程链路，设计师可根据业务需求选取合适的区块进行。另外，本页还可以延伸添加趋势图等其他图表类型。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618055013-6c34bff0-5663-411c-96c1-6c7920e8332e.png#align=left&display=inline&height=607&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1213&originWidth=2153&size=559684&status=done&style=none&width=1076.5)<br />

### 3.自定义大盘页

自定义大盘为用户自主搭建的图表大盘页，可以包含智能决策意见列表/总指标卡、全局筛选与布局切换、自定义图表。<br />**如何使用：**本页平铺所有指标，呈现全量信息。顶部列表展现智能决策建议，或监控总指标概览（如“齐全度”指标卡），下方工具栏包含全局筛选器、数据更新选项和图表排列方式。图表以单列的列表式或多列平铺卡片的形式切换展现。所有图表支持 y 轴缩放控制，以规避监控场景中易出现的极值问题。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618055007-587deab5-4db3-403b-bbb3-e1328a62b667.png#align=left&display=inline&height=1599&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1599&originWidth=1936&size=566729&status=done&style=none&width=1936)<br />点击布局切换后，可由列表式布局切换为卡片式布局。列表式布局可以让详细查看每个图表；卡片式布局则可以让用户纵览到更多的图表。用户可根据自身需求切换两种布局。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618054991-92d979f6-4cda-4acc-b7a5-660fa4568568.png#align=left&display=inline&height=566&margin=%5Bobject%20Object%5D&name=image.png&originHeight=566&originWidth=1936&size=50572&status=done&style=none&width=1936)<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618055002-bca9f8f6-18f0-4108-b60d-5cfe0a276659.png#align=left&display=inline&height=847&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1693&originWidth=1936&size=637633&status=done&style=none&width=968)<br />

### 4.下钻查看问题详情

点击图表/文字链/热区，触发抽屉查看下钻信息和明细列表；在抽屉中下钻，可推出二级抽屉，用于呈现包含更细节信息的图表。<br />**如何使用：**需要对主页面上的信息进行下钻探索交互时，可使用抽屉，快速便捷。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618054988-bc740581-ee7e-43bd-8cd7-7909b39ba724.png#align=left&display=inline&height=601&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1202&originWidth=3051&size=380373&status=done&style=none&width=1525.5)

---

## 设计建议

### 串联分析思路

- 分析思路遵循通用 dashboard 设计（这里是超链接到通用 dashboard 设计地址）。
- 明确此类页面的使用者身份，以及分析目的，从而选择对应的页面类型。不同业务线间，关注的核心指标不同，常见的指标类型有：宏观的大盘数据，具体的业务指标。
  - 针对决策者（如监控业务管理者），可以选择描述型的指标结果页面；
  - 针对执行者（如异常情况处理者），可以选择有更多维分析功能的分析、详情页面。
- 确定核心指标间的联系及优先级，合理地进行页面布局，把结论（如智能决策）和最重要的指标（如监控页面中的总指标卡）放在最醒目的位置；
- 设计师可以将以上页面通过交互方式串联起来，展现监控数据分析思路。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618054981-00e1f9be-6bb5-48cd-b2da-79a0ddc6b388.png#align=left&display=inline&height=746&margin=%5Bobject%20Object%5D&name=image.png&originHeight=746&originWidth=2232&size=130983&status=done&style=none&width=2232)<br />

### 监控场景图表建议

在监控场景中，由于真实数据的不可控性与实时性，往往存在着数据信息过于密集难辨认，或者在某一时间点突然出现极值（数值徒增），而导致整个图表难以阅读的情况；也会出现因筛选时间过长，x 轴标签过于密集的状况。降低了数据分析的效率和准确性。故建议通过以下方式规避图表中可能出现的问题，并对需要聚焦关注的异常时刻进行突出处理。

- Y 轴缩略轴：监控场景中由于监控值的不确定性较大，容易出现个别极值/其他数个指标值域相近拥挤在一起的情况。y 轴缩略轴组件的设计可以灵活设置 y 轴范围，规避各类异常情况。详见缩略轴（这里是超链接到缩略轴地址）。![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618054999-74181573-128a-421b-bd48-f6756ce8b73b.png#align=left&display=inline&height=781&margin=%5Bobject%20Object%5D&name=image.png&originHeight=781&originWidth=1501&size=128672&status=done&style=none&width=1501)
- 警告标记线：凸显警告时刻/时间段；时间下方用白底躲避与其他 x 轴数值的重叠。![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618055010-486a81ab-834a-4407-b88a-667c111092db.png#align=left&display=inline&height=183&margin=%5Bobject%20Object%5D&name=image.png&originHeight=366&originWidth=1483&size=67332&status=done&style=none&width=741.5)
- 图表上 hover 态：由于监控下可能出现较多时间点，不作处理时 x 轴的轴标签过于密集，故需要抽样显示。同时，鼠标在图表上的 hover 态显示出该时刻的时间，并用白底躲避下方数字；与警告线重合时，时间变为红色。![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618054986-3f548fc9-87db-48e8-b995-2fc833e17977.png#align=left&display=inline&height=412&margin=%5Bobject%20Object%5D&name=image.png&originHeight=412&originWidth=1831&size=117296&status=done&style=none&width=1831)
- 列表式图例：锚定图表中某一时刻，可以在列表式图例中轻松查看到该时刻下的排序，或切换选择指标最大值等其他排序信息；点击列表中的图例可正反选指标，进行高亮或隐藏。![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605618055006-d5da68b0-68d7-4d30-91c3-588cc06f661a.png#align=left&display=inline&height=181&margin=%5Bobject%20Object%5D&name=image.png&originHeight=361&originWidth=1646&size=109929&status=done&style=none&width=823)
