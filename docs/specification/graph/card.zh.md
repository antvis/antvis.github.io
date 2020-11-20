---
title: 卡片 Card
order: 0
---

# 定义

图表卡片是页面级可视化应用的细粒度单位。一个应用于数据分析的页面，都会由页面框架（顶部、侧边导航）、页面级组件、内容卡片排列构成。使用 AntV 组件搭建的图表，都需了解到统计图表卡片设计规范。<br /> <br />

# 构成

考虑到实际业务应用场景，以下罗列了较为重型的可视分析页面中图表的卡片元素。如下图，一个具有阅读端一定分析和操作能力的图表，可分为 8 个模块：

- Title 标题 必选
- Toolbar 卡片操作栏 必选
- SwitchButton 快捷切换：时间范围切换。antd 组件
- Filter 时间筛选、文本筛选、数值筛选 Filters antd 组件
- SwitchButton 时间粒度切换、聚合粒度切换 antd 组件
- DropdownPanel 分析维度：分类维度、聚合指标、衍生指标 antd 组件
- Legend 图例：颜色图例、样式图例、指标型图例
- Element 图表图形必选

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*96W_T4fxggQAAAAAAAAAAAAAARQnAQ)<br /> <br /> <br />

## 信息优先级

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*-JzQQ4XL8bsAAAAAAAAAAAAAARQnAQ)<br />
