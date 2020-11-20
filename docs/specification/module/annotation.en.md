---
title: 标注 Annotation
order: 9
---

## 定义

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ce2ERJSPjxgAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=608&margin=%5Bobject%20Object%5D&name=image.png&originHeight=608&originWidth=1450&size=183854&status=done&style=none&width=1450)<br />“辅助标记”指为帮助浏览者阅读图表更易理解图表信息，而添加的对图表整体或者部分元素的注解信息。<br /> <br />

## 何时使用

辅助标记在以下两种场景可帮助用户理解图表：

1. 对于无分析经验或时间较少的用户，直接获取有用的信息。例：有分析经验的用户手动标注异常或重要的数据
1. 对于通过可视分析获取洞见的用户，提升分析效率。例：系统智能高亮波动并分析原因

<br />

## 常见类型

单一数据注解<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*GXHvS7_7kYkAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=220&margin=%5Bobject%20Object%5D&name=image.png&originHeight=712&originWidth=2980&size=498448&status=done&style=none&width=920)<br />区间数据注解：对某一区间范围（时间、数据、对象等）做注解<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*iyLcSIRcGlAAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=314&margin=%5Bobject%20Object%5D&name=image.png&originHeight=750&originWidth=2198&size=318697&status=done&style=none&width=920)<br />数据对比注解：统计指标、值域区间、辅助区间<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*xUeeRL3sDKEAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=206&margin=%5Bobject%20Object%5D&name=image.png&originHeight=720&originWidth=3214&size=435267&status=done&style=none&width=920)<br />多数据指定区域注解<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*5EZiT5OG9B0AAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=298&margin=%5Bobject%20Object%5D&name=image.png&originHeight=724&originWidth=2232&size=342427&status=done&style=none&width=920)<br />多数据批量注解<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*SVFISpBA2pYAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=303&margin=%5Bobject%20Object%5D&name=image.png&originHeight=780&originWidth=2366&size=244394&status=done&style=none&width=920)<br /> <br /> <br />

## 构成元素

辅助标记的可选元素包括：文本，拉线，数据点，区间，辅助线，标记点<br />用户可针对不同的标记内容，选取不同的元素<br />![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*MSEfTq_olakAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=287&margin=%5Bobject%20Object%5D&name=image.png&originHeight=954&originWidth=3062&size=544833&status=done&style=none&width=920)<br />注意：当无法避免与其他组件碰撞时，保持注解内容位于其他**组件最上层**<br /> <br />

### 文本

**设计建议**

1. 在空间的允许下，尽可能显示文本，直观表达标注内容。如果不显示文本需显示 icon，用户可通过点击查看
1. 当文本内容宽度大于等于图表宽度 1/2 时，**隐藏文本显示文本 icon**
1. 文本内容较多时，需设定最大宽度（例：10 个字符），超出显示「...」，用户可通过 hover 查看全部

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*jDkbQ7ivESIAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=289&margin=%5Bobject%20Object%5D&name=image.png&originHeight=854&originWidth=2716&size=361464&status=done&style=none&width=920)<br />**<br />**

### 拉线

**设计建议**

1. 通常建议加上拉线来加强标注与图表的关联
1. 默认方向**与值域趋势方向一致**，方向视空间而定。建议:上 > 下 > 延长 > 折角 > 隐藏

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*rKJMQJH3KyQAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=299&margin=%5Bobject%20Object%5D&name=image.png&originHeight=846&originWidth=2606&size=443779&status=done&style=none&width=920)<br /> <br />

### 数据点

**设计建议**

1. 在单一数据注解或多数据统一注解的场景，建议加上数据点，以突出标注的数据
1. 样式上建议区分已标注与未标注

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*C2TGSptoiZMAAAAAAAAAAAAAARQnAQ#align=left&display=inline&height=296&margin=%5Bobject%20Object%5D&name=image.png&originHeight=792&originWidth=2460&size=460335&status=done&style=none&width=920)<br /> <br />

### 区间

**设计建议**

1. 对某一区域/范围做批注时，建议显示区间。区间底色需与图形样式做区分
1. 区间的使用不宜重叠，且区间面积不宜过多，避免干扰用户阅读图表信息

<br />

### 辅助线

**设计建议**

1. 辅助线的样式需与图表样式做区分，且辅助线的数目不宜过多
1. 辅助线需配合文本表达含义

<br />

### 标记点

**设计建议**

1. 在对多数据做批量批注时，建议在文本附近显示标记点作为提示
