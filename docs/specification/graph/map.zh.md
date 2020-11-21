---
title: 地图 Map
order: 2
---

# 地图通用概念

地图是将空间数据映射在坐标轴上，通过可视化图层表达出来的特殊形式。它主要包括：图层、坐标、数据。

## 图层

**地图框架设计**

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*7HDKQZBDCv0AAAAAAAAAAAAAARQnAQ)

### 控件层

辅助用户操纵画面、查看固定窗体下多视角信息的快捷工具层，如视角切换、镜头拉远拉近等工具。控件层一般指纯视图操作的视图组件：图表标题/视图工具栏/图形绘制组件/标尺/品牌 logo 等。

![气泡地图备份 3.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*XFTUR77RlToAAAAAAAAAAAAAARQnAQ)

### 图形层

精彩纷呈的数据可视化层，包含图形和图形组件，共同呈现一个场景下的数据可视化表达。

图形：大体分为点、线、面图层

| **点图层** | **线图层** | **面图层** |
| :-: | :-: | :-: |
| ![20191118131855.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*f9wMRoyxx_8AAAAAAAAAAAAAARQnAQ) | ![20191118135935.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*VzliS6BBTrIAAAAAAAAAAAAAARQnAQ) | ![Group@2x.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*S1l5TKA4JB8AAAAAAAAAAAAAARQnAQ) |

图形组件：图形可视化的内容增强，共同传递界面信息，如图例、数据面板等，常见的如 Tooltip/筛选器/时间过滤器/数据面板/图例等

![气泡地图备份 2.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*JizXSq0AcccAAAAAAAAAAAAAARQnAQ)

### 地图层

承载 LBS 信息的地理地图层，给予观众更沉浸式感受的可视化层，L7 默认提供黑白彩三版地图

![地图切换.gif](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*u9eQQ6yLhuYAAAAAAAAAAAAAARQnAQ)

## 坐标

在地理空间（比如地球和地图）中，完整的坐标体系采用(经度、维度、海拔)的结构来表述，`position(longitude, latitude, altitude)` ，但绝大多数坐标信息仅包含经纬度信息，`position(longitude, latitude)`。

![position.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*2c9vT4tDIJsAAAAAAAAAAAAAARQnAQ)

绝大多数平面地图为地球球体采用莫帕托投影方式展开的平面图。因而，不管是平面地图还是立体地球，都可以采用同一套坐标体系。

## 数据

数据类型大概分类点、线、面

### 点图层数据

| 某城市小店名称 | 经度 | 纬度 | 店铺规模权重 | 图形 |
| --- | --- | --- | --- | --- |
| A | 116.490794 | 39.949238 | 200 | <img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*s3KAQ4f2hXEAAAAAAAAAAAAAARQnAQ" width="30%"> |
| B | 116.332692 | 40.009834 | 600 | <img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*ALfXQarkAQkAAAAAAAAAAAAAARQnAQ" width="60%"> |
| ... |  |  |  |  |

### 线图层数据

**两点连线：**点的移动形成了线，线的位置参数中需至少包含起点、终点的经纬度信息。比如发货地与收货地。

| 起点 | 终点 | 起点-经度  | 起点-纬度 | 终点-经度  | 终点-纬度 | 来往次数 |
| ---- | ---- | ---------- | --------- | ---------- | --------- | -------- |
| A1   | A2   | 116.490794 | 39.949238 | 116.490794 | 39.949238 | 280      |
| ...  |      |            |           |            |           |          |

**寻路路径：**两点之间应用寻路规则形成运动路径。数据结构上是多个连续的经纬度打点。

| 经纬度 | 气温（摄氏度） |
| --- | --- |
| [116.478885,39.998642],[116.477769,39.995798],[116.48058,39.994072],[116.483884,39.995338],[116.481932,39.997985] | 40 |
| ... |  |

### 面图层数据

面图形层(polygon)，指用一连串首尾闭合的点坐标对（xi,yi）来表达，其中每一个坐标对都具有定位意义。属于依比例符号图层，其轮廓范围是表达对象实际范围的缩影。

| 省份 | 经纬度 | 风险等级 |
| --- | --- | --- |
| A 省 | [116.472501,39.994524],[116.472641,39.991286],[116.474647,39.993226] | 3 |
| B 省 | [116.472791,39.99122],[116.475527,39.989486],[116.477447,39.99136] | 10 |
| ... |  |  |

# 地图种类

## 气泡图

指地图上用一个形状相同、面积大小和数值成正比的圆点来定位的地图，是散点图的扩展，用于表达离散现象分布特征的地图。 <img src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*DGGIRq8M3AYAAAAAAAAAAAAAARQnAQ" width="100%">

## 亮点图

散点图的变形，指用一个点代表一个值，连续渐进颜色代表数值大小，并通过色彩的叠加的达到效果增强，专为海量散点数据运用而生，解决散点图在远视角时，因面积变小导致色彩无法区分的情况，常用于海量数据的地理分布，如城市灯光数

![20191118131602.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*IAyRSKwaHjMAAAAAAAAAAAAAARQnAQ)

## 符号图

散点地图的变体，用具象的图标指代抽象的圆点，无需图例就能直观看出数据点代表的内容，常用于地图上重要地标的显示或数据量较少时的信息表达，如某品牌的分店分布情况，可用品牌 LOGO 图标；如常见公交的士站点分布情况等

![ 符号地图.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*FOwXRY8c_WEAAAAAAAAAAAAAARQnAQ)

## 散点图

指地图上可用一个形状大小相同的圆点来定位，用表达离散现象分布特征的地图，如人口、农作物、动植物等的分布，常用于海量数据分布

![20191118131855.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*j4D0QbM2B9kAAAAAAAAAAAAAARQnAQ)

## 路径图

指地图上可用一个形状大小相同的点状符号来定位，用表达离散现象分布特征的地图，如人口、农作物、动植物等的分布，通常用来表示线状或带状分布的地理要素，用于需要对路径详细变化观察的场景，如人类运动轨迹等等

![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*36wUTqKewxcAAAAAAAAAAAAAARQnAQ)

## 弧线图

将两个点的连线绘制成弧形，绘制的弧线可以是贝塞尔曲线，大圆航线，通常用来表示两种地理事物关系和联系，或者人口迁移，物流起点目的地等。通常用来表示线状或带状分布的地理要素，用于重点关注路径起止点以及两地理位置之间的关系，如航线轨迹等等

![20191118135935.jpg](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*totCSI3UzCsAAAAAAAAAAAAAARQnAQ)

## 填充图

填充图，也叫分级统计图，可在地图上不同领土区域进行着色，查看区域间的分布对比情况，通常用来表达区域范围具有分级现象的聚合面状分布，常以颜色或底纹填充的图斑，如：风险等级划分、降水量划分，等等

![Group@2x.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*2gQNR7UZSZUAAAAAAAAAAAAAARQnAQ)

更多地图类型详见 [AntV-L7](https://l7.antv.vision/zh/examples/gallery)

# 设计规范

| **动作名称** | **点图层** |  | **线图层** |  | **面图层** |  |
| --- | :-: | :-: | :-: | --- | --- | --- |
| 不可点击数据点 | 不透明度 30% |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*fzQMSK0KYQoAAAAAAAAAAAAAARQnAQ) | 不透明度 30% |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*xLjiQq3zA88AAAAAAAAAAAAAARQnAQ) | 不透明度 30% |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*6zyhT5T4Nb4AAAAAAAAAAAAAARQnAQ) |
| 常态数据点 | -- |   ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*qXoWTpQNdk8AAAAAAAAAAAAAARQnAQ) | -- |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*jIpASoUSXu4AAAAAAAAAAAAAARQnAQ) | -- |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*_lCuRoHoHGwAAAAAAAAAAAAAARQnAQ) |
| 悬停数据点 | 对象图形底部增加大于该图形直径 4px 的 30% 不透明度的实心同色同类型图层 |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*T09fSYFaUEcAAAAAAAAAAAAAARQnAQ) | 对象图形底部增加大于该图形直径 4px 的 30% 不透明度的实心同色同类型图层 |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*uaCqRous6EIAAAAAAAAAAAAAARQnAQ) | 对象图形底部增加大于该图形直径 4px 的 30% 不透明度的实心同色同类型图层 |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*D8ogTZbHTdoAAAAAAAAAAAAAARQnAQ) |
| 点击数据点 | 对象图形增加大于该图形直径 4px 的外轮廓 2px 描边同色同类型图层 |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*zgvdQqH95sAAAAAAAAAAAAAAARQnAQ) | 对象图形增加 3px 同色描边 |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*sNIPQ4rQVdAAAAAAAAAAAAAAARQnAQ) | 对象图形增加大于该图形直径 4px 的外轮廓 2px 描边同色同类型图层 |  ![image.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*GbheQoq7ELAAAAAAAAAAAAAAARQnAQ) |

# 设计建议

## 对外使用中最重要的地图合规性

地图设计涉及国际领土界限问题，在信息呈现上需要谨慎对待，信息的层级结构、区域划分都和政治主张密切相关，切犯政治错误。在设计中运用地图元素一直是一个风险度极高的事情，主要是因为它的合规性和完整性非常的专业，普通设计师没有相关专业背景，敏感度相对薄弱，很容易触发红线，作品如需对外，设计前期可先向所在公司了解相关审批流程。

## 使用叠加色板拯救你的海量数据

远视角观察海量数据点很小时，颜色明度变化基本看不出来，此时的连续色板映射没有发挥到最大，基本无效，建议开启色彩叠加效果，增强对比效果

![1.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*g6lrQI3y8-YAAAAAAAAAAAAAARQnAQ)

## 色尽其用

合适的数据分区，等间距、等分位等，充分利用色彩通道

![2.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*eI8BTL2UD6IAAAAAAAAAAAAAARQnAQ)

## 黑白场切换，色彩也应随之变换

色彩编码中，有个通用常识，地图底图颜色若是浅色的，因为亮色最接近底图颜色，色彩对比小，亮色往往是编码最小值，而深色对比大，感觉海拔更高，离你更近，因此是最大编码。但切换后的地图底图变深色了，同理，最亮的颜色就应该是编码最大值

![3.png](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*EEC7SoXorLIAAAAAAAAAAAAAARQnAQ)
