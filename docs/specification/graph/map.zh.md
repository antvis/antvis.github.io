---
title: 地图 Map
order: 2
---

# 地图通用概念

## 图层

**地图框架设计**<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875571-8a934942-3647-4767-8fb1-dcba3dc96b54.png#align=left&display=inline&height=697&margin=%5Bobject%20Object%5D&name=image.png&originHeight=697&originWidth=1492&size=228037&status=done&style=none&width=1492)<br />

### 控件层

辅助用户操纵画面、查看固定窗体下多视角信息的快捷工具层，如视角切换、镜头拉远拉近等工具。控件层一般指纯视图操作的视图组件：图表标题/视图工具栏/图形绘制组件/标尺/品牌 logo 等。<br />![气泡地图备份 3.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875596-7a02b6a7-d114-4656-a261-beb6d3758629.png#align=left&display=inline&height=1122&margin=%5Bobject%20Object%5D&name=%E6%B0%94%E6%B3%A1%E5%9C%B0%E5%9B%BE%E5%A4%87%E4%BB%BD%203.png&originHeight=1122&originWidth=2070&size=1284024&status=done&style=none&width=2070)

### 图形层

精彩纷呈的数据可视化层，包含图形和图形组件，共同呈现一个场景下的数据可视化表达。<br />图形：大体分为点、线、面图层

| **点图层** | **线图层** | **面图层** |
| :-: | :-: | :-: |
| ![20191118131855.jpg](https://intranetproxy.alipay.com/skylark/lark/0/2020/jpeg/185301/1582985373863-37821f6e-784b-4645-97d6-720a678d0406.jpeg#align=left&display=inline&height=168&margin=%5Bobject%20Object%5D&name=20191118131855.jpg&originHeight=1694&originWidth=1830&size=721544&status=done&style=none&width=181) | ![20191118135935.jpg](https://intranetproxy.alipay.com/skylark/lark/0/2020/jpeg/185301/1582982705741-c0579252-c686-46eb-93fc-2fe2ac44002a.jpeg#align=left&display=inline&height=170&margin=%5Bobject%20Object%5D&name=20191118135935.jpg&originHeight=1674&originWidth=1828&size=834838&status=done&style=none&width=186) | ![Group@2x.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/185301/1582982450590-6cfce744-db0a-432f-9352-8bd6166d7614.png#align=left&display=inline&height=1046&margin=%5Bobject%20Object%5D&name=Group%402x.png&originHeight=1046&originWidth=1332&size=1234553&status=done&style=none&width=1332) |

图形组件：图形可视化的内容增强，共同传递界面信息，如图例、数据面板等，常见的如 Tooltip/筛选器/时间过滤器/数据面板/图例等<br />![气泡地图备份 2.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875594-0c2eba8d-e564-4a15-a07e-c7cbfc82cdf2.png#align=left&display=inline&height=1122&margin=%5Bobject%20Object%5D&name=%E6%B0%94%E6%B3%A1%E5%9C%B0%E5%9B%BE%E5%A4%87%E4%BB%BD%202.png&originHeight=1122&originWidth=2070&size=1284438&status=done&style=none&width=2070)<br />

### 地图层

承载 LBS 信息的地理地图层，给予观众更沉浸式感受的可视化层，L7 默认提供黑白彩三版地图<br />![地图切换.gif](https://cdn.nlark.com/yuque/0/2020/gif/100257/1605617875615-53e931bf-e127-4fab-a362-4d9857174986.gif#align=left&display=inline&height=600&margin=%5Bobject%20Object%5D&name=%E5%9C%B0%E5%9B%BE%E5%88%87%E6%8D%A2.gif&originHeight=600&originWidth=800&size=2240702&status=done&style=none&width=800)

## 坐标

在地理空间（比如地球和地图）中，完整的坐标体系采用(经度、维度、海拔)的结构来表述，`position(longitude, latitude, altitude)` ，但绝大多数坐标信息仅包含经纬度信息，`position(longitude, latitude)`。<br />![position.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605617875571-c28847ba-0834-448f-bfec-b347fe8bc6c8.jpeg#align=left&display=inline&height=387&margin=%5Bobject%20Object%5D&name=position.jpg&originHeight=774&originWidth=1034&size=85013&status=done&style=none&width=517)<br />绝大多数平面地图为地球球体采用莫帕托投影方式展开的平面图。因而，不管是平面地图还是立体地球，都可以采用同一套坐标体系。<br /> <br />

## 数据

数据类型大概分类点、线、面<br />

### 点图层数据

| 某城市小店名称 | 经度 | 纬度 | 店铺规模权重 | 图形 |
| --- | --- | --- | --- | --- |
| A | 116.490794 | 39.949238 | 200 | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/185301/1582986325752-5e39ca75-efaa-4251-a177-58a715423a64.png#align=left&display=inline&height=29&name=image.png&originHeight=256&originWidth=264&size=39036&status=done&style=none&width=30) |
| B | 116.332692 | 40.009834 | 600 | ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/185301/1582986312328-2f5aa114-f730-456f-aa29-13579fade912.png#align=left&display=inline&height=47&name=image.png&originHeight=256&originWidth=264&size=39036&status=done&style=none&width=49) |
| ... |  |  |  |  |

### 线图层数据

**两点连线：**点的移动形成了线，线的位置参数中需至少包含起点、终点的经纬度信息。比如发货地与收货地。<br />

| 起点 | 终点 | 起点-经度  | 起点-纬度 | 终点-经度  | 终点-纬度 | 来往次数 |
| ---- | ---- | ---------- | --------- | ---------- | --------- | -------- |
| A1   | A2   | 116.490794 | 39.949238 | 116.490794 | 39.949238 | 280      |
| ...  |      |            |           |            |           |          |

<br />**<br />**寻路路径：\*\*两点之间应用寻路规则形成运动路径。数据结构上是多个连续的经纬度打点。<br />

| 经纬度 | 气温（摄氏度） |
| --- | --- |
| [116.478885,39.998642],[116.477769,39.995798],[116.48058,39.994072],[116.483884,39.995338],[116.481932,39.997985] | 40 |
| ... |  |

<br />

### 面图层数据

面图形层(polygon)，指用一连串首尾闭合的点坐标对（xi,yi）来表达，其中每一个坐标对都具有定位意义。属于依比例符号图层，其轮廓范围是表达对象实际范围的缩影。<br />

| 省份 | 经纬度 | 风险等级 |
| --- | --- | --- |
| A 省 | [116.472501,39.994524],[116.472641,39.991286],[116.474647,39.993226] | 3 |
| B 省 | [116.472791,39.99122],[116.475527,39.989486],[116.477447,39.99136] | 10 |
| ... |  |  |

<br />

# 地图种类

## 气泡图

指地图上用一个形状相同、面积大小和数值成正比的圆点来定位的地图，是散点图的扩展，用于表达离散现象分布特征的地图。

### ![   气泡地图@2x.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875601-1df7b942-e0e2-4915-a20b-24e7db6bcba9.png#align=left&display=inline&height=970&margin=%5Bobject%20Object%5D&name=%20%20%20%E6%B0%94%E6%B3%A1%E5%9C%B0%E5%9B%BE%402x.png&originHeight=970&originWidth=1314&size=687578&status=done&style=none&width=1314)

## 亮点图

散点图的变形，指用一个点代表一个值，连续渐进颜色代表数值大小，并通过色彩的叠加的达到效果增强，专为海量散点数据运用而生，解决散点图在远视角时，因面积变小导致色彩无法区分的情况，常用于海量数据的地理分布，如城市灯光数<br /> <br />![20191118131602.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605617875610-1870552f-50eb-452e-82d0-7b3cadec8fdb.jpeg#align=left&display=inline&height=1688&margin=%5Bobject%20Object%5D&name=20191118131602.jpg&originHeight=1688&originWidth=1826&size=997053&status=done&style=none&width=1826)

## 符号图

散点地图的变体，用具象的图标指代抽象的圆点，无需图例就能直观看出数据点代表的内容，常用于地图上重要地标的显示或数据量较少时的信息表达，如某品牌的分店分布情况，可用品牌 LOGO 图标；如常见公交的士站点分布情况等<br /> <br />![ 符号地图.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875580-07e03fb7-1930-495c-a6fe-963c82a0a196.png#align=left&display=inline&height=970&margin=%5Bobject%20Object%5D&name=%20%E7%AC%A6%E5%8F%B7%E5%9C%B0%E5%9B%BE.png&originHeight=970&originWidth=1314&size=763978&status=done&style=none&width=1314)<br />

## 散点图

指地图上可用一个形状大小相同的圆点来定位，用表达离散现象分布特征的地图，如人口、农作物、动植物等的分布，常用于海量数据分布<br /> <br />![20191118131855.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605617875602-f5d5376e-974f-40bd-b1e1-f0d8a40ad4b9.jpeg#align=left&display=inline&height=1694&margin=%5Bobject%20Object%5D&name=20191118131855.jpg&originHeight=1694&originWidth=1830&size=721544&status=done&style=none&width=1830)<br /> <br />

## 路径图

指地图上可用一个形状大小相同的点状符号来定位，用表达离散现象分布特征的地图，如人口、农作物、动植物等的分布，通常用来表示线状或带状分布的地理要素，用于需要对路径详细变化观察的场景，如人类运动轨迹等等<br /> <br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875570-b7daf74b-913c-4ed5-841d-67748167441b.png#align=left&display=inline&height=435&margin=%5Bobject%20Object%5D&name=image.png&originHeight=870&originWidth=1454&size=1757261&status=done&style=none&width=727)<br />

## 弧线图

将两个点的连线绘制成弧形，绘制的弧线可以是贝塞尔曲线，大圆航线，通常用来表示两种地理事物关系和联系，或者人口迁移，物流起点目的地等。通常用来表示线状或带状分布的地理要素，用于重点关注路径起止点以及两地理位置之间的关系，如航线轨迹等等<br /> <br />![20191118135935.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/100257/1605617875579-753efdde-1952-4270-be25-bbe0bc929911.jpeg#align=left&display=inline&height=1674&margin=%5Bobject%20Object%5D&name=20191118135935.jpg&originHeight=1674&originWidth=1828&size=834838&status=done&style=none&width=1828)<br /> <br />

## 填充图

填充图，也叫分级统计图，可在地图上不同领土区域进行着色，查看区域间的分布对比情况，通常用来表达区域范围具有分级现象的聚合面状分布，常以颜色或底纹填充的图斑，如：风险等级划分、降水量划分，等等<br /> <br />![Group@2x.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875615-a58cf678-6ae3-41c5-b859-836267180bae.png#align=left&display=inline&height=1046&margin=%5Bobject%20Object%5D&name=Group%402x.png&originHeight=1046&originWidth=1332&size=1234553&status=done&style=none&width=1332)<br /> <br />更多地图类型详见 [AntV-L7](https://l7.antv.vision/zh/examples/gallery)<br />

# 设计规范

| **动作名称** | **点图层** |  | **线图层** |  | **面图层** |  |
| --- | :-: | :-: | :-: | --- | --- | --- |
| 不可点击数据点 | 不透明度 30% |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572448057223-11d0b01a-b852-40fe-b6f2-2057c272880f.png#align=left&display=inline&height=59&name=image.png&originHeight=148&originWidth=164&size=9128&status=done&style=none&width=65) | 不透明度 30% |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572448460716-93cf0c14-2e61-47b0-9d2a-30fdba9363e8.png#align=left&display=inline&height=142&name=image.png&originHeight=105&originWidth=178&size=22156&status=done&style=none&width=240) | 不透明度 30% |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572449036484-1d2582f7-8f25-4d8b-9000-2c520dac6c1e.png#align=left&display=inline&height=127&name=image.png&originHeight=71&originWidth=73&size=18983&status=done&style=none&width=131) |
| 常态数据点 | -- |   ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572448068132-41654f1b-4e71-4e5e-9c0a-bc2f13c711d2.png#align=left&display=inline&height=56&name=image.png&originHeight=144&originWidth=134&size=12418&status=done&style=none&width=52) | -- |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572448483353-73e91ce3-6719-4a1f-8e7e-320b4a2f3114.png#align=left&display=inline&height=144&name=image.png&originHeight=108&originWidth=178&size=26647&status=done&style=none&width=237) | -- |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572449053746-8f6d537e-fbb1-4085-93c4-2510d4c4e15d.png#align=left&display=inline&height=124&name=image.png&originHeight=74&originWidth=73&size=25856&status=done&style=none&width=122) |
| 悬停数据点 | 对象图形底部增加大于该图形直径 4px 的 30% 不透明度的实心同色同类型图层 |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572448614988-eef36b12-bfec-4d20-8c11-88ab29582d9e.png#align=left&display=inline&height=63&name=image.png&originHeight=284&originWidth=296&size=41326&status=done&style=none&width=66) | 对象图形底部增加大于该图形直径 4px 的 30% 不透明度的实心同色同类型图层 |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572448585939-edaa2e85-205f-437e-a2bb-098248a7ef66.png#align=left&display=inline&height=164&name=image.png&originHeight=124&originWidth=178&size=47823&status=done&style=none&width=236) | 对象图形底部增加大于该图形直径 4px 的 30% 不透明度的实心同色同类型图层 |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572449072933-27b920e5-ddaf-4bff-aa8b-f21bcd1a1657.png#align=left&display=inline&height=151&name=image.png&originHeight=83&originWidth=73&size=41113&status=done&style=none&width=133) |
| 点击数据点 | 对象图形增加大于该图形直径 4px 的外轮廓 2px 描边同色同类型图层 |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572448157409-e83c685e-e8ec-48dc-aaf3-e667626fa369.png#align=left&display=inline&height=66&name=image.png&originHeight=172&originWidth=172&size=24091&status=done&style=none&width=66) | 对象图形增加 3px 同色描边 |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572448553396-53461156-88ca-49b6-99ff-8cef23fce901.png#align=left&display=inline&height=159&name=image.png&originHeight=113&originWidth=178&size=39629&status=done&style=none&width=250) | 对象图形增加大于该图形直径 4px 的外轮廓 2px 描边同色同类型图层 |  ![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/185301/1572449082224-db89efd1-4a15-4963-9545-8aaf68b882a8.png#align=left&display=inline&height=154&name=image.png&originHeight=73&originWidth=73&size=55139&status=done&style=none&width=154) |

<br />

# 设计建议

## 对外使用中最重要的地图合规性

地图设计涉及国际领土界限问题，在信息呈现上需要谨慎对待，信息的层级结构、区域划分都和政治主张密切相关，切犯政治错误。在设计中运用地图元素一直是一个风险度极高的事情，主要是因为它的合规性和完整性非常的专业，普通设计师没有相关专业背景，敏感度相对薄弱，很容易触发红线，作品如需对外，设计前期可先向所在公司了解相关审批流程。**<br />**

## 使用叠加色板拯救你的海量数据

远视角观察海量数据点很小时，颜色明度变化基本看不出来，此时的连续色板映射没有发挥到最大，基本无效，建议开启色彩叠加效果，增强对比效果

![1.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875573-67764747-0f80-4517-bfaa-2317c737f403.png#align=left&display=inline&height=610&margin=%5Bobject%20Object%5D&name=1.png&originHeight=610&originWidth=1426&size=1359384&status=done&style=none&width=1426)<br />

## 色尽其用

合适的数据分区，等间距、等分位等，充分利用色彩通道<br />![2.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875584-2d1d6c86-7d19-4a8e-a254-7fe8655d3f8b.png#align=left&display=inline&height=635&margin=%5Bobject%20Object%5D&name=2.png&originHeight=635&originWidth=1432&size=1236821&status=done&style=none&width=1432)<br />

## 黑白场切换，色彩也应随之变换

色彩编码中，有个通用常识，地图底图颜色若是浅色的，因为亮色最接近底图颜色，色彩对比小，亮色往往是编码最小值，而深色对比大，感觉海拔更高，离你更近，因此是最大编码。但切换后的地图底图变深色了，同理，最亮的颜色就应该是编码最大值<br />![3.png](https://cdn.nlark.com/yuque/0/2020/png/100257/1605617875567-eda5a7b7-31fb-4243-8e3c-1119c777354e.png#align=left&display=inline&height=635&margin=%5Bobject%20Object%5D&name=3.png&originHeight=635&originWidth=1432&size=1028190&status=done&style=none&width=1432)
