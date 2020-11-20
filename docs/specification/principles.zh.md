---
title: 设计原则
order: 0
redirect_from:
  - /zh/docs/specification
---

数据可视化 AntV 的设计原则是基于 [Ant Design](https://ant.design/docs/spec/introduce-cn) 设计体系衍生的，具有数据可视化特性的指导原则。它在遵循 Ant Design 设计价值观的同时，对数据可视化领域的进一步解读，如色板、字体的指引。<br /> <br />AntV 经过大量的项目实战经验，总结了四条核心原则：准确、清晰、有效、美，这四条原则按重要等级先后排序，相辅相成且呈递进关系。<br />![设计原则.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*aOiuRKvy_-UAAAAAAAAAAAAAARQnAQ)<br /> <br />

### **准确**

可视表达时不歪曲，不误导，不遗漏，精准如实反应数据的特征信息。例：某基金收益率趋势图，合理的值域区间可以反映真实的数据波动趋势。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*txR0T5hk6PYAAAAAAAAAAAAAARQnAQ)<br />

### **清晰**

清晰包括两个层面，**结构清晰**与**内容清晰。** <br />**<br />**结构清晰：**数据可视化呈现的是一幅作品，它是制作者分析思路的呈现，其布局决定阅读者的浏览顺序。清晰的平面布局以及清晰的数据纵深路径能很好的帮助阅读者获取信息。下图展示一个经典的仪表盘设计布局，上方的筛选区从顶层决定画布区呈现的数据，右侧区默认展示画布区的汇总信息，画布上激活数据点时，右侧则更新显示明细数据。<br /><img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ZoGhS5Xwr4UAAAAAAAAAAAAAARQnAQ" width="100%"><br /> <br /> <br />**内容清晰：不让用户带着疑惑看图是我们始终不变的追求。当图上有数据日期、数据来源、数据指标需要说明时，应当在恰当的时间、合适的位置给予说明，以帮助阅读者更好地理解数据、定位问题。<br />![结构清晰-1.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*Y2hXRJTNkZYAAAAAAAAAAAAAARQnAQ)<br /> <br /> <br />

### **有效**

信息传达有重点，克制不冗余，避免信息过载，用最适量的数据-油墨比（Data-ink Ratio）表达对用户最有用的信息。<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*OAHVTYSN_6MAAAAAAAAAAAAAARQnAQ)<br /> <br /> <br />

### **美**

美是一种克制，合理利用视觉元素进行映射，运用格式塔原理对数据进行分组，既能帮助用户更快的获取信息，也能在一定程度上建立一种秩序美、规律美。<br />![g6.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*aJhwSpaxG20AAAAAAAAAAAAAARQnAQ)
