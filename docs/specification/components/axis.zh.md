---
title: 轴
order: 4
---

## 定义

二维空间里统计图表中的轴，是用来定义坐标系中数据在方向和值的映射关系的图表组件。

## 何时使用

在二维笛卡尔坐标系中，轴通常为水平方向的横轴（x 轴）和竖直方向的纵轴（y 轴）。极坐标系中，轴分为切向的切向轴（angle）和径向轴（radius）。

---

## 元素

轴的元素包括：轴线、轴刻度线、轴标签和轴标题和坐标网格线。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*o8XoSJZQRDcAAAAAAAAAAABkARQnAQ' width=750/>

---

## 类型

映射轴的数据类型可分为<br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*OcosRYoYmDAAAAAAAAAAAABkARQnAQ' width=746/>

对应地，轴可以分为：分类轴，时间轴，连续轴。<br />示例<br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zc8XRKCr4hEAAAAAAAAAAABkARQnAQ' width=750/>

---

<a name="uVw7l"></a>

## 轴标题

**何时使用：**使用文本来描述当前轴标签数据的意义<br />**设计建议：**

- 通常都建议加上轴标题解释轴的含义。当图表其他部分的内容（图表标题，图形标签，注释，轴标签文字等）已能充分显示轴的意义，可以略去轴标题，精简画面元素。
- 除了数值百分比（%），科学计数法单位（k/m/g）、日期时间（年/月/日）单位和其他情况的数据单位建议在轴标题中显示，在各个轴标签中略去。

**例：**生产总值（亿元）<br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*LL6zQ6sIxwQAAAAAAAAAAABkARQnAQ' width=750/>

## 轴标签

**响应式设计建议：**<br />可根据图表类型设置轴标签是否显示、旋转角度以及显示间隔。<br />对文本数据：不建议开启抽样。<br />对数值数据：不建议开启尾部省略。

**默认方案：**<br />连续轴、时间轴默认自动抽样 + 不旋转；分类轴默认自动旋转 + 自动省略。<br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Ii5XTb5oHIUAAAAAAAAAAABkARQnAQ' width=750/>

## 元素的显示策略

**设计建议：**<br />轴上所有的元素可根据图表类型设置不同的显示策略。

**1、折线、面积图为例**<br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Zs9-TJkZv_4AAAAAAAAAAABkARQnAQ' width=750/>

**2、柱状图为例**<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*vTqLQrv26eAAAAAAAAAAAABkARQnAQ' width=750/><br />

**3、条形图为例**<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*_lFeTbo1gEgAAAAAAAAAAABkARQnAQ' width=750/><br />

**4、散点图为例**<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*HDcFQrOvMVUAAAAAAAAAAABkARQnAQ' width=750/><br />

**另外：** <br />上面 4 个设计建议中提到的，轴标签「若图形区域内有数据标签」，则轴标签可以考虑隐藏，如下图： <br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*C2QwTo41DyUAAAAAAAAAAABkARQnAQ' width=750/>

## 数据格式

在轴的使用中，往往离不开对数据的展示，在格式上我们有以下设计建议，引导用户采取正确的数据格式。

### 数值

数值是用来表示计量事物的符号。根据业务诉求，数字可单独出现或搭配数字符号进行使用。

| 符号格式 | 如何使用及何时使用           | 例子      |
| -------- | ---------------------------- | --------- |
| 千分位   | 默认使用千分位帮助用户阅读。 | 123,220   |
| 计量单位 | 计量单位默认用小写字母。     | 123,220kg |
| 百分比   | -                            | 12.32%    |
| 正斜杠   | 用分数的形式表示事物的进展。 | 12/30     |

### 金额

**小写金额**的规范是「货币符号+数字」的格式，例如“CNY1,123.00"。<br />货币符号（[货币符号表](https://baike.baidu.com/item/%E8%B4%A7%E5%B8%81%E4%BB%A3%E7%A0%81/7467182?fr=aladdin)）就是用来表示货币的符号，分为字母和字符两种：

| 货币符号 | 如何使用及何时使用 | 例子 |
| --- | --- | --- |
| 字符 | 以人民币为例，金额前带货币单位标志「¥」。 | ¥123.00 |
| 字母 | 以人民币为例，推荐使用  CNY ，CNY  为国际上通用的货币代码。 | CNY123.00 |

**特殊情况**<br />1.如果一个数值很大，那么数值中的“万”“亿”单位可采用汉字。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*fXJqRrk0bNUAAAAAAAAAAABkARQnAQ' width=744/>

### 日期与时间

**绝对时间**<br />针对用户对时间的精确度要求较高，强调信息发布的具体精确时间点有需要回顾过去的内容并通过绝对时间用来检索信息的诉求。

日期可以通过以下方式格式化：

| 格式 | 如何使用及何时使用 | 例子 |
| --- | --- | --- |
| 年、月、日 | 中国默认使用「yyyy-mm-dd」格式。（[其它国家参考链接）](https://zh.wikipedia.org/wiki/%E5%90%84%E5%9C%B0%E6%97%A5%E6%9C%9F%E5%92%8C%E6%97%B6%E9%97%B4%E8%A1%A8%E7%A4%BA%E6%B3%95) | 2019-12-08 |
| 专用名词 | 含有月日的专用名词采用阿拉伯数字表示时，应采用间隔号「·」将月、日分开，并在数字前后加引号。 | “6.1 儿童节” |
| 日期范围 | 在日期或时间范围之间显示一个波浪号 （前后需要空格） | 2018-12-08 ～ 2019-12-07 |

默认使用二十四小时制：

| 时间制       | 如何使用及何时使用              | 例子                       |
| ------------ | ------------------------------- | -------------------------- |
| 二十四小时制 | 二十四小时时间格式  HH:mm:ss 。 | 14:08:00                   |
| 十二小时制   | 十二小时时间格式 h:mm:ss 。     | 2:08:00 PM<br />2:08:00 AM |

日期时间规范：<br />日期与时间在一起展示时，用「空格」分割开，如“2019-12-08 06:00:00”。

**相对时间**<br />相对时间的精确度对于用户并不十分重要，重要的是信息的即时性。在中后台中，相对时间一般用于消息、通知类功能，用户往往更关注于书面形式的时间单位，而不必去往前推算出发布的具体时间点。

| 时间              | 展示形式                                               |
| ----------------- | ------------------------------------------------------ |
| 1 分钟以内的时间  | 刚刚                                                   |
| 1 小时以内的时间  | N 分钟前                                               |
| 24 小时以内的时间 | N 小时前                                               |
| 24 小时以外的时间 | 用 mm-dd HH:mm 的形式表示，即「12-08 08:00」           |
| 超过一年的时间    | 用 yyyy-mm-dd HH:mm 的形式表示，即「2019-12-08 08:00」 |

### 数据状态

**无数据**<br />无数据用「--」表述。

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*XdDkQ4nIJ5IAAAAAAAAAAABkARQnAQ' width=750/>

---

## 常见问题

### 双轴图的轴如何设计？

在企业级产品中，往往遇到的一个课题是「如何在有限的空间内，传递更多信息」。<br />虽然从设计的角度更建议使用两个独立的图表来传递信息，但我们的用户往往喜欢使用双轴图解决这个场景。

**设计建议**

1. 尽量保证基线从「0」开始
1. 建议两组数据的 Y 轴单位是不同的，比如一组为「人数」，一组为「百分比」
1. 警惕：**由于双轴图表的刻度不受限制，因此可能使读者误读两组数据之间的关系。**

例：<br /><img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*s0xhQZmQMH8AAAAAAAAAAABkARQnAQ' width=750/>
