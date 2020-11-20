---
title: 设计模型
order: 0
---

## 总览

2005 年，英国设计协会（The British Design Council）首次提出“双钻设计模型”（double-diamond design process model），他们将设计过程分为 4 个阶段（探索 > 聚焦 > 设计 > 评估）。该双钻模型同样适合于数据可视化设计。

## ![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617551702-a05eabf6-db69-4baa-9fd9-ca1bcf8c0e89.png#align=left&display=inline&height=843&margin=%5Bobject%20Object%5D&name=image.png&originHeight=843&originWidth=1440&size=418194&status=done&style=none&width=1440)\*\*

值得注意的是，数据可视化中，如果一个双钻流程没能拿到结果，那么我们再次探索、聚焦，直至找到满意的可视化解决方案。<br /> <br /> <br /> <br />

## 探索

设计师在接到可视化设计任务时，切忌马上开始画稿。AntV 提倡从“提问题开始设计”。不断提问，扩大问题范围，进一步检测问题之下的根本原因，然后聚焦于其中一个问题的描述。<br />

- **业务背景：**业务方是谁？可视化的目的是什么？
- **产品分析：**产品是什么？投放在哪？是否需要跨端适配？
- **了解用户：**给谁看？年龄？知识构成？
- **观察数据：**数据来自哪里？数据结构如何？数据极值情况如何？数据产出时效、质量如何？

<br />
<br />
<br />

## 聚焦

经过第一阶段的探索，第二阶段我们需要聚焦。可视化作品可以传达什么？我们用户想要在可视化上看到什么？<br />

- **用户目标：**可视化解决什么问题？用户关注哪些核心指标？在使用链路上是否需要协作？
- **设计目标：**如何凸显用户关注的核心指标？我们期望用户看到什么？

<br />
<br />
<br />

## 设计

接下来，我们要开始画图了，但我们还得反问我们自己：我们应该阐述什么样的观点？用什么图表类型阐述比较合适呢？视觉设计上面需要注意什么？用户需要与可视化进行交互吗？交互上需要注意什么？<br />

- **图表类型：**数据类型（地理可视化数据、图数据、常规统计数据）、用户分析目地（看关系、看分布、看趋势、看比较、分析整体与部分关系）决定图表类型。AntV 提供图表分类导航决策树，借助它，我们可以快速定位我们可以使用的图表；
- **视觉设计：**AntV 有一套完成的视觉设计体系，包括”布局“、”色板“、”字体“。详见[视觉设计指引](https://www.yuque.com/mo-college/vis-design/seqpy0)；
- **交互设计：**屏幕空间很小？数据放不下怎么办，用户能否与数据进行交互？是否要为多端设计。详见[交互设计指引](https://www.yuque.com/mo-college/vis-design/yygtlg)；
- **观点阐述：**数据反映出来的趋势或者关系分布能否总结出来？异常数据是否需要标记出来？你可能需要用到[标注组件](https://www.yuque.com/mo-college/vis-design/ybatti)。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617551707-310b0173-07ed-4fd6-a790-1147513d5a3b.png#align=left&display=inline&height=816&margin=%5Bobject%20Object%5D&name=image.png&originHeight=816&originWidth=1920&size=1430545&status=done&style=none&width=1920)<br /> <br /> <br /> <br />

## 评估

设计好的可视化作品，用户看得懂吗？AntV 的四条核心原则：准确、清晰、有效、美，这四条原则也是评估可视化作品的四点准则；<br />![设计原则.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605617551685-bdac7af5-66fc-4f30-ab2f-dc2b6376081a.jpeg#align=left&display=inline&height=524&margin=%5Bobject%20Object%5D&name=%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99.jpg&originHeight=524&originWidth=3840&size=81604&status=done&style=none&width=3840)

- **测试：**找用户或者身边同事，让他们扫视你的作品，描述他们第一眼感觉，看能否匹配你的设计预期。再让他们点一点、操作一下，能否找到自己想要的数据；
- **迭代**：如果不能，建议反问用户、反问自己问题出在哪里，并开始新一轮的迭代优化。

####
