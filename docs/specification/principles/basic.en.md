The design values of AntV for data visualization are derived from the Ant Design design system (<a href='https://ant.design/docs/spec/introduce-cn' target='_blank'>Ant Design</a>) and serve as guiding principles with characteristics of data visualization. While adhering to the design values of Ant Design, it offers a further interpretation in the field of data visualization.

AntV's design language initially defined four design values: "Accuracy, Clarity, Effectiveness, and Beauty". After several years of extensive project practice in internal business and with the changes in users' demands for data analysis, new requirements have been put forward for charts.

Today, we have shifted from the "object perspective" to the "user perspective" and reexamined the AntV design values. In the past, the essence of "accuracy" and "effectiveness" for charts was to build users' "sense of trust". The essence of "clarity" and "beauty" for charts was to build users' "sense of ease". As a carrier for transmitting data information, the most important value of charts is to inspire and provide insights for users. In the past, there was a lack of "sense of meaning", and today we have added it, thus resulting in the upgrade of the values today.

![image.png](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*AFdPQp5GDeQAAAAAAAAAAAAADmJ7AQ/original)

&nbsp;

## Sense of Trust

If we compare a chart to a person, its visible appearance, the behavioral feedback during interaction, and even the sounds it makes are all ways to build a sense of trust with users. The sense of trust means that when users first see a chart from a distance, they can be attracted by its reliable appearance. When presenting data, it should not distort, mislead, or omit information, but accurately and truthfully reflect the characteristic information of the data. Only in this way can users trust the data in the chart with confidence, bravely approach, explore, and understand it, and be bold enough to analyze the data.

<table>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">🙅 Not Recommended</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">👍 Recommended</td>
  </tr>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">The overflowing labels and messy information can easily make users question whether the data is maintained and whether the chart data is real and usable.</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">Display the required data information step by step according to users' purposes of analyzing data. For example, for a relationship diagram, users can view the overall picture when it is zoomed out and view the details of individual data when it is zoomed in.</td>
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

## Sense of Ease

The beauty of data is like a symphony of the visual and interactive aspects of a chart. Use an appropriate amount of visual elements to present data, group data according to the Gestalt principles, focus on conveying information without redundancy, and use the most appropriate data-ink ratio to express the most useful information for users, enabling users to quickly obtain information. Meanwhile, it can also create an orderly and regular beauty. Coupled with timely feedback and appropriately emerging interactions, they jointly play a clear, elegant, and intuitive beauty of data, allowing users to easily understand the data.

<table>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">🙅 Not Recommended</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">👍 Recommended</td>
  </tr>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">The color contrast among graphics, texts, labels, and the background, as well as between graphics, is too low, resulting in a hazy chart that makes it unclear and uneasy for users to read.</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">Strengthen the color contrast among graphics, texts, labels, and the background and between graphics. Use an appropriate amount of ink and proper interactions to help users easily understand the data.</td>
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

## Sense of Meaning

Truly effective communication is like a two-way exchange stage. When users stop to look at a chart, it would be wonderful if they suddenly have an "aha" moment, as if a light bulb has been lit! It's as if they suddenly understand something. Charts can not only help users clearly see the patterns of data at a glance but also stimulate their insight and inspire new views and ideas. Such communication is not only interesting but also brings practical work significance and gains for users. So, don't forget to make your charts shine and make your information more vivid and convincing.

<table>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">🙅 Not Recommended</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;font-size: 15px;font-weight: 600;">👍 Recommended</td>
  </tr>
  <tr>
    <td style="background-color: #fae3ec;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">The seemingly neat and error-free data chart only depicts the most basic presentation of data, and it's difficult for users to intuitively understand the reasons behind the rises and falls.</td>
    <td style="background-color: #fff;width: 20px;"></td>
    <td style="background-color: #f2fad9;width: 280px;text-align: center;padding: 8px;font-weight: 400;color: #666;font-size: 12px;">There is no analysis without comparison. Add an appropriate amount of comparable mean reference auxiliary lines and event markers to assist in trend interpretation, along with overall intelligent insights, to help users quickly understand the patterns of data.</td>
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
