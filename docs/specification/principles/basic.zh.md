---
title: 设计价值观
order: 0
redirect_from:
  - /zh/docs/specification
---

数据可视化 AntV 的设计价值观是基于 <a href='https://ant.design/docs/spec/introduce-cn' target='_blank'>Ant Design</a> 设计体系衍生的，具有数据可视化特性的指导原则。它在遵循 Ant Design 设计价值观的同时，对数据可视化领域的进一步解读。

AntV 设计语言初建定义了四条设计价值观「准确、清晰、有效、美」，经过几年内部业务大量的项目实践，随着用户看数分析诉求的变化，对图表提出了新的要求。

今天我们从「物视角」到「用户视角」的转变，重新审视 AntV 设计价值观，过去对图表的「准确、有效」本质是期望建立用户的「信任感」，过去对图表的「清晰、美」本质是建立用户的「轻松感」，图表作为数据信息传递的载体，最重要的价值是给到用户启发和洞见，过去对「意义感」的缺失，在今天我们进行了新增，于是有了今天的价值观升级。

![image.png](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*AFdPQp5GDeQAAAAAAAAAAAAADmJ7AQ/original)

&nbsp;

## 信任感

如果把图表拟作人，图表看得见的外观，与之交互的行为反馈，甚至发出的声音，都是与用户建立信任感的方式。信任感是，当用户远远初见图表时，能够被它的可靠外观所吸引，表达时不歪曲，不误导，不遗漏，精准如实反应数据的特征信息。这样才能让用户放心地相信图表的数据，勇敢地去靠近、探索和理解它们，让用户敢于看数。

<table>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">🙅 不建议</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">👍 建议</td>
  </tr>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">标签溢出信息杂乱，容易造成用户质疑，数据是否有人维护？图表数据是否真实可用？</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">围绕用户看数目的，循序渐进展示所需的数据信息，如关系图缩小看全貌看概览，放大看单个数据明细。</td>
  </tr>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;padding: 8px;">
      <img style="max-height: none;" src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ockfTIJfqSsAAAAAAAAAAAAADmJ7AQ/original' alt='' >
    </td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;padding: 8px;">
      <img style="max-height: none;" src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7iWYQ7aDD_MAAAAAAAAAAAAADmJ7AQ/original' alt='' />
    </td>
  </tr>
</table>

## 轻松感

数据之美就像是图表视觉和交互的交响乐。运用适量的视觉元素来呈现数据，用格式塔原理把数据分组，信息传达有重点、无冗余，使用最适量的数据-油墨比表达对用户最有用的信息，让用户能快速获取信息，同时还能营造出秩序美和规律美，再搭配及时反馈和适时出现的交互，共同奏响一个清晰优雅直观的数据之美，让用户轻松读懂数据。

<table>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">🙅 不建议</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">👍 建议</td>
  </tr>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">图形、文本、标签与背景，图形与图形之间颜色对比度过低导致图表画面灰蒙蒙，用户阅读不清晰和不轻松</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">强化图形、文本、标签与背景，图形之间颜色对比度，通过适量的油墨和适当的交互帮助用户轻松读懂数据</td>
  </tr>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;padding: 8px;">
      <img style="max-height: none;" src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*-JcMT6um_s8AAAAAAAAAAAAADmJ7AQ/original' alt='' >
    </td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;padding: 8px;">
      <img style="max-height: none;" src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*GjA4T6dgxEAAAAAAAAAAAAAADmJ7AQ/original' alt='' />
    </td>
  </tr>
</table>

## 意义感

真正有效的沟通就像是双向的交流舞台。当用户驻足观看一个图表时，如果他们突然间有了"哇哦"的感觉，仿佛点亮了一盏灯泡，那就太棒了！仿佛一下子悟出了点什么，图表不仅能帮助用户一目了然地看清数据规律，还能激发他们的洞察力，启发新的观点和想法。这样的交流不仅有趣，也能为用户带来实际的工作意义和收获。所以，别忘了点亮你的图表，让你的信息更生动、更有说服力～

<table>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">🙅 不建议</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">👍 建议</td>
  </tr>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">看似整洁无错乱的数据图表，仅刻画了数据最基础的呈现，用户难以直观知道涨跌背后的原因</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">无对比不分析，添加适量可对比的均值参考辅助线，事件标记辅助趋势解读，整体智能洞见，帮助用户快速读懂数据规律</td>
  </tr>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;padding: 8px;">
      <img style="max-height: none;" src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gqc8TqYsF9sAAAAAAAAAAAAADmJ7AQ/original' alt='' >
    </td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;padding: 8px;">
      <img style="max-height: none;" src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*BpLcQr7EgoUAAAAAAAAAAAAADmJ7AQ/original' alt='' />
    </td>
  </tr>
</table>