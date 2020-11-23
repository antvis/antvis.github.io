---
title: 交互
order: 2
---

## 交互式图表

区别于传统数据报表相对静态的表现形式，交互式图表并不停留在信息展示层面。用户通过与图不断产生交互，从数据中获取更深层次的分析和信息。

常见的图表交互 PC 端有经过、点击、框选、平移，移动端有轻点、轻扫等操作，但仅仅只有这些吗？随着意识的不断深入，用户要从图上获取的信息远不是鼠标经过、点击、平移能够得到，也就是说要获取更多的信息，图表需要有更多的交互行为支持。

## 任务层次

Shneiderman  于 1996 年提出可视化信息检索的箴言 “Overview First, Zoom and Filter, Then Details-on-Demand”，译为“概览第一，聚焦过滤，再按需查看详情”。它符合人类寻求信息的基本逻辑：先大体，再局部，然后聚焦兴趣点进行探索，这是一个由表及里的过程。

![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*REV9SLcEjSYAAAAAAAAAAAAAARQnAQ)

**数据获取：**该层解决用户的第一个问题“是什么”，用户主要通过浏览查看来获取数据，其通用交互范式为 \*\*Overview + Detail（概览+细节），常见于传统数据报表、汇报型图表、大屏等，比如流量监控、区域销售大盘。

**信息加工：**该层解决用户的第二个问题“为什么”，当图上有看不懂的信息时，用户期望有人告诉他为什么会这样，或者自己查探明究竟，其通用交互范式为 Focus + Context（聚焦+关联），常见于富交互的统计报表，或海量、高维、多源的可视分析系统。

**知识流转：**该层解决用户的第三个问题“怎么办”，当获取洞见通用交互范式为 Annote + Guide（标记+指引），常见于可视分析系统、智能分析、智能决策系统，比如运营专员对异常点进行标记辅助管理员进行决策，智能系统对整体趋势进行解读与归因分析。

## 举个例子

某公司运营同学需要找出销量整体下滑的原因。在图表上，运营同学的思路是找出症结、定位问题、关联分析、验证设想、得出结论并给出指引。

![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*zTnyTKYH1kYAAAAAAAAAAAAAARQnAQ)

## 交互建议

上述案例贯穿了数据可视化任务的三层次：“数据获取”、“信息加工”、“知识转换”，这三层是由浅及深、由表及里、循序渐进、互相融合的过程。

我们并不建议图表上堆砌交互动作，每一个交互都应有目的，用户的每一次操作都因有迹可循。在设计图表时建议站在高层次上关注用户界面与相关行为的整体结构，明确图表的使用场景以及用户可能面临的数据处境，让用户可以高效、有效地浏览可视化内容，使呈现给用户的信息合理并且具有意义。具体来说可以遵循以下几点：

### 操控感

给用户以操控感，不让其迷失在数据的海洋中。提供足够便捷的过滤筛选组件，配合鼠标悬停、点击、框选等操作，方便用户查看更多视图空间，快速定位感兴趣的数据空间，亦或根据特定变量对数据进行排序、突出、降维处理等。当我们将这些组件与交互动作进行结合，用一些习以为常的交互去操纵可视化时，用户将会很清晰、并且有信心控制好当前视图。

### 渐进呈现

在复杂的可视化中，必须保证用户在不同层次的信息之间能进行无缝和直观的探索。

首先给出作为分析入口的概览视图，提供“数据获取”的交互操作辅助完成任务，同时给出可以看到具体内容的细节视图，各视图间协同一致。在渐进呈现过程中，“信息加工”相关组件安排在扩展窗口中，作为一个触发机关的通道。渐进呈现对于专家用户来说是顺势而为，对中级用户来说也是福利。

### 构建系统，而不是单个图表

复杂的可视化场景经常会多层次、多人群、甚至人机协同。一个完备的可视化系统应该为用户提供组件来记录、组织在探索过程中获得的见解，总结传达他们的洞察，给出有效的行动指引。以便受众能根据线索还原视觉探索，串连一个有体感的可视化故事。

得益于丰富的可视化分析工具，我们可以处理复杂的可视化。比如我们可以建立多个分离图表的视觉关联让其有特征联系，再比如我们可以做筛选维度的联动，当一个区域分布的图表上选择“杭州”时，明细表、趋势表也会刷新为杭州维度，这无疑给看似“静”的图表赋予“动”的视角，让图、图与图之间活了起来，而这底层的关联正像一个系统的运转。

### 小结

本文尝试总结现阶段图表交互的三个任务层次：“数据获取”、“信息加工”、“知识转换”，并列举每个任务层次可能涉及的相关交互行为并给出操作建议。

在大数据时代，可视化是面临海量、高维、多源、非结构化数据的挑战。展望未来，不再局限于键鼠、手指点击等交互，甚至还有自然化（肢体、NLP 语言）、虚拟化（AR/VR/MR）等趋势。它们相应的交互模式又是如何？什么样的匹配操作能帮助用户在数据复杂度不断提高的情况下更快的得到结论从而辅助决策呢？想想都兴奋，这是一条很长的路，需要我们共同来探索。

## 交互索引

### 数据获取

<table class="lake-table"><colgroup><col width="91" span="1"><col width="231" span="1"><col width="241" span="1"><col width="188" span="1"></colgroup><tbody><tr style="height: 33px;"><td><p data-lake-id="829bb397d95e2207dd1b1741ef8613ad"><strong>动作</strong></p></td><td><p data-lake-id="87e5cb61b26049774447600e62b20d8b"><strong>目的</strong></p></td><td><p data-lake-id="a54f9e2884100c3df83406ba3b886b6d"><strong>操作</strong></p></td><td><p data-lake-id="f91a827f0279940540e833af43275e57"><strong>示例</strong></p></td></tr><tr style="height: 33px;"><td rowspan="4"><p data-lake-id="cf33ad132be5273cd6f5e1ce7dd77c45">浏览</p></td><td rowspan="3"><p data-lake-id="5da3ee306f1e000d39574f9c2a3371f2">寻找感兴趣的数据</p></td><td><p data-lake-id="72c7fe8a2ed3dd119269ee39ac513c19">Hover</p></td><td><p data-lake-id="4580ffcf4f04b0b36639fd135d4c3caf"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fgif%2F355%2F1535944090875-4475b4c1-8380-4710-815d-8d0d60f1aa66.gif%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*-7PVT5L5adwAAAAAAAAAAAAAARQnAQ" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 113px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p></td></tr><tr style="height: 33px;"><td><p data-lake-id="7ca998585d6c6ac704ef62aaf680c686">Hover 组合“Alt”键</p></td><td><p data-lake-id="e023407638609b119df5a3cbb85736f4"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fgif%2F355%2F1535957901914-281e5400-89a5-4e27-b701-7c8ea7bf6d7d.gif%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*DYM-Sppoz3gAAAAAAAAAAAAAARQnAQ" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 122px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p></td></tr><tr style="height: 33px;"><td><p data-lake-id="6e8a322e89f023dc6493437861e00d0a">Touch and hold（📱移动端）</p></td><td><p data-lake-id="7e542fd2dc685f87a0109c53faf18da1"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fgif%2F355%2F1535959699578-e7e02fa8-9267-4e92-b60f-0bc16eaf012e.gif%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*TiY2So2x-fYAAAAAAAAAAAAAARQnAQ"  class="image lake-drag-image" style="visibility: visible; width: 165px; height: 89px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p></td></tr><tr style="height: 33px;"><td><p data-lake-id="a88b6c1a48c2ee039a5295a65c96c516">高亮视觉联动，寻找关系</p></td><td><p data-lake-id="ec3a4909d97f2d1133742d27f6e8c4ff">Hover</p></td><td><p data-lake-id="a749e824c660b116f60f2839741705cf"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fgif%2F355%2F1535958789517-1b068189-5193-4479-963c-9bc1e05a166d.gif%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*rnzWRrSawzUAAAAAAAAAAAAAARQnAQ" data-raw-src="https://cdn.nlark.com/lark/0/2018/gif/355/1535958789517-1b068189-5193-4479-963c-9bc1e05a166d.gif" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 93px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p></td></tr><tr style="height: 33px;"><td rowspan="2"><p data-lake-id="78cc46c45eb90f1083c05545fddd6799">选中</p></td><td><p data-lake-id="88c57c4d9d82f6ffb69eb17448d1353b">对单个数据点感兴趣</p></td><td><p data-lake-id="ff85af10cbd851fa8373c3fbe93b3f00">Click</p><p data-lake-id="985603ead7817c7d8e3a6df26cc1b79d">Tap（📱移动端）</p></td><td><p data-lake-id="409175359905a156c9559547cdcd0747"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fpng%2F355%2F1535960536310-070424c4-2b73-420d-8192-430c75dbc52a.png%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*n4-UQoUl_RYAAAAAAAAAAAAAARQnAQ" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 101px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p></td></tr><tr style="height: 33px;"><td><p data-lake-id="76c59b6310755d0e8964d2cf75a22ef4">对多个数据点或数据组感兴趣</p></td><td><p data-lake-id="5dc6dd0ee18961009cd723539b34a1ee">Brush 框选</p></td><td><p data-lake-id="cc3db845c2814894ea32d5e2a6bedd02"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fpng%2F355%2F1533262943927-475f1914-7848-4a72-b7e3-9b953ac34b44.png%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*dcR-SpX0bZUAAAAAAAAAAAAAARQnAQ" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 63px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p></td></tr><tr style="height: 33px;"><td><p data-lake-id="eca39dd9cefe986337fc7de7b989bb63">过滤</p></td><td><p data-lake-id="b735f5f5da8cfc38d07480d11cd36c6a">聚焦重点信息</p></td><td><p data-lake-id="e30c4f588278cf7b9140338f371c3d38">值域漫游器区间定位</p></td><td><p data-lake-id="3fe2098e25d95690e705e83f265e8144"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fgif%2F355%2F1535962287470-a9fc28b2-b734-48f4-a256-01d63a5e6314.gif%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*SxbzQJkH300AAAAAAAAAAAAAARQnAQ" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 107px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p></td></tr><tr style="height: 33px;"><td><p data-lake-id="90c5cc1173098359d52c5ea33773dd48">缩放</p></td><td><p data-lake-id="90fe4d48c01c0d56dd2e3a50ece81daf">探索、识别数据</p></td><td><p data-lake-id="2fd4de820817a2d3e69fb1dc1ac45db9">触控板 改变缩略轴区间 滚动条</p><p data-lake-id="3b89edc2f384e25209fd272697b6020d">Pinch（📱移动端）</p></td><td><p data-lake-id="f6967c7d3f7b228bc20c191b60bcbde8"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fgif%2F355%2F1535961270989-9d15d544-97b9-4021-9480-854223f88f5c.gif%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*A7YkSpXZsikAAAAAAAAAAAAAARQnAQ" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 119px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p><p data-lake-id="8a8aedf81cf35143ca93acb644ac3189"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fgif%2F355%2F1535961125605-8b2cfacd-11e9-4cb0-86b7-297cf5205978.gif%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*nd5iT47KeCYAAAAAAAAAAAAAARQnAQ" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 89px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p><p data-lake-id="ce31e7d1bac7362036f8c60cef5f9a2a"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fgif%2F355%2F1535960822489-1e3b07c1-ee6a-4402-8fe3-c310193b2c5b.gif%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*_72TQr-OlZcAAAAAAAAAAAAAARQnAQ" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 122px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p></td></tr><tr style="height: 33px;"><td><p data-lake-id="e3577e629a3605cec22e55af5e6c34c1">平移</p><p data-lake-id="a68d750d1f9abfc173094434b9ab471f"></p><p data-lake-id="9af9c8a6c2fbf33c64a88e0bd7b495c3"></p></td><td><p data-lake-id="7f51baf9282da8b37bc8825569e77607">探索更大的数据空间</p></td><td><p data-lake-id="fa215d4815b374d2e8c3f250915d5b1c">触控板</p><p data-lake-id="433d9775078da9aee44a8a5958a2bd02">拖动缩略轴</p><p data-lake-id="7f1e2d028fbc991b29d4a07cfb318940">滚动条</p><p data-lake-id="0f245dcbbbd47a801cc42a7f88787db5">Swipe（📱移动端）</p></td><td><p data-lake-id="5d3c7a1ec2d93b48365fa937362fa64c"><span data-card-type="inline" data-lake-card="image" contenteditable="false" data-card-value="data:%7B%22src%22%3A%22https%3A%2F%2Fcdn.nlark.com%2Flark%2F0%2F2018%2Fgif%2F355%2F1535961561276-68a840a2-bdc4-4e8c-b4af-f2212c9e2728.gif%22%2C%22width%22%3A166%7D"><span data-card-element="body"><span data-card-element="center"><span class="lake-image">
    <span class="lake-image-content lake-image-content-isvalid">
      <span data-role="detail" class="lake-image-detail">
        <span class="lake-image-meta" style="">
          <span class="lake-image-warning" style="display: none;">
            <i class="anticon anticon-exclamation-circle">
              <svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
          </span>
          <img data-role="image" src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*BdFqQ6rT4jwAAAAAAAAAAAAAARQnAQ" class="image lake-drag-image" style="visibility: visible; width: 165px; height: 157px;">
          <span data-role="maximize" class="lake-image-editor-maximize" style="display: none;"><span class="lake-icon lake-icon-full-screen"></span></span>
        </span>
      </span>
    </span>
  </span></span></span></span></p></td></tr></tbody></table>

### 信息加工

| **动作** | **说明** | **相应操作** | **示例** |
| --- | --- | --- | --- |
| 拖拽 | 对数据重新加工计算 | 拖拽合并计算 | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*u4GcRoa2eLEAAAAAAAAAAAAAARQnAQ) |
| 重编码 | 改变数据视觉通道，让数据特征更显性化 | 选中-修改 | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*7HE0TYbvXlEAAAAAAAAAAAAAARQnAQ) |
| 重配置 | 切换维度以不同视角看数据 | 单选切换 | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*2agcRrAnkEMAAAAAAAAAAAAAARQnAQ) |
| 下钻/上卷 | 聚焦到感兴趣的数据子空间 | 下钻/上卷 | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*Do0dSbVA6skAAAAAAAAAAAAAARQnAQ) |
| 链接 | 直观的展示分析逻辑和呈现数据结果，让分析更流畅，让报表会说话 | 链接跳转 | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*HDj-RKSIx1oAAAAAAAAAAAAAARQnAQ) |
| 联动 | 跨视图高亮显示数据对象间的联系，可同时观察数据的不同属性 | 联动刷新 | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*FZeXQq4sMf4AAAAAAAAAAAAAARQnAQ) |

### 知识流转

| **动作** | **说明** | **相应操作** | **示例** |
| --- | --- | --- | --- |
| 标记 | 通过数据标记标出注意点 | 手动标记 / 智能标记 | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*42t2SqloLyQAAAAAAAAAAAAAARQnAQ) |
| 解读 | 将结论标出以辅助决策 | 手动解读 / 智能解读 | ![](https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/img/A*FxGaS7WH5O0AAAAAAAAAAAAAARQnAQ) |
