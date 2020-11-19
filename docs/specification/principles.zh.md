---
title: 设计原则
order: 0
redirect_from:
  - /zh/docs/specification
---

数据可视化 AntV 的设计原则是基于 [Ant Design](https://ant.design/docs/spec/introduce-cn) 设计体系衍生的，具有数据可视化特性的指导原则。它在遵循 Ant Design 设计价值观的同时，对数据可视化领域的进一步解读，如色板、字体的指引。<br /> <br />AntV 经过大量的项目实战经验，总结了四条核心原则：准确、清晰、有效、美，这四条原则按重要等级先后排序，相辅相成且呈递进关系。<br />![设计原则.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605616701807-7e6ad517-d282-4cb3-af04-8913e37a0c72.jpeg#align=left&display=inline&height=524&margin=%5Bobject%20Object%5D&name=%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99.jpg&originHeight=524&originWidth=3840&size=81604&status=done&style=none&width=3840)<br /> <br />

### **准确**

可视表达时不歪曲，不误导，不遗漏，精准如实反应数据的特征信息。例：某基金收益率趋势图，合理的值域区间可以反映真实的数据波动趋势。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605616701766-f07174d3-87cd-49b0-8a47-7ca940e6df53.png#align=left&display=inline&height=988&margin=%5Bobject%20Object%5D&name=image.png&originHeight=988&originWidth=3840&size=640834&status=done&style=none&width=3840)<br />\*\*<br />

### **清晰**

清晰包括两个层面，**结构清晰 **与 **内容清晰。**<br />**<br />**结构清晰：**数据可视化呈现的是一幅作品，它是制作者分析思路的呈现，其布局决定阅读者的浏览顺序。清晰的平面布局以及清晰的数据纵深路径能很好的帮助阅读者获取信息。下图展示一个经典的仪表盘设计布局，上方的筛选区从顶层决定画布区呈现的数据，右侧区默认展示画布区的汇总信息，画布上激活数据点时，右侧则更新显示明细数据。<br />![结构清晰.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605616701740-a357715e-b4e8-40ed-8932-71f086b8dfb7.jpeg#align=left&display=inline&height=1300&margin=%5Bobject%20Object%5D&name=%E7%BB%93%E6%9E%84%E6%B8%85%E6%99%B0.jpg&originHeight=1300&originWidth=3840&size=927563&status=done&style=none&width=3840)<br /> <br /> <br />**内容清晰：\*\*不让用户带着疑惑看图是我们始终不变的追求。当图上有数据日期、数据来源、数据指标需要说明时，应当在恰当的时间、合适的位置给予说明，以帮助阅读者更好地理解数据、定位问题。<br />![结构清晰-1.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605616701780-d7786bc9-5eae-4f1a-bd0f-b308613b07a8.jpeg#align=left&display=inline&height=1694&margin=%5Bobject%20Object%5D&name=%E7%BB%93%E6%9E%84%E6%B8%85%E6%99%B0-1.jpg&originHeight=1694&originWidth=3840&size=454630&status=done&style=none&width=3840)<br /> <br /> <br />

### **有效**

信息传达有重点，克制不冗余，避免信息过载，用最适量的数据-油墨比（Data-ink Ratio）表达对用户最有用的信息。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605616701756-b1757d30-04b9-4f8b-b5d1-35d152245736.png#align=left&display=inline&height=1432&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1432&originWidth=3840&size=733302&status=done&style=none&width=3840)<br /> <br /> <br />

### **美**

美是一种克制，合理利用视觉元素进行映射，运用格式塔原理对数据进行分组，既能帮助用户更快的获取信息，也能在一定程度上建立一种秩序美、规律美。<br />![g6.gif](https://cdn.nlark.com/yuque/0/2020/gif/100257/1605616701864-fc3e6bac-1545-4bc4-a2d3-77062da0d7a4.gif#align=left&display=inline&height=475&margin=%5Bobject%20Object%5D&name=g6.gif&originHeight=475&originWidth=1280&size=2404100&status=done&style=none&width=1280)
