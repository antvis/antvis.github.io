"use strict";(self.webpackChunkantv_vision=self.webpackChunkantv_vision||[]).push([[8476],{18609:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var i=n(64590),s=n(72012),a=n(62056),l=n(58330),r=n(67294),o=n(97857),c=n.n(o),h=n(5574),u=n.n(h),d=n(69069),p=n(56152),m=n(73806),g=n(98265),v=n(78957),x=n(98698),j=n(82664),b=n(51351),f=n(62719),w="jw2qDeIOLQIM0ITycc58",y="uCjtQZ9ZASgrU8fh4EZ4",Z="bElHjm75OA8R_ZgtSruu",k="dbJJv8R5d5oBOOLkwu6e",z="mgfbrVxdxGktTmCdjkoD",S=[{label:"G2",gitUrl:"https://github.com/antvis/G2",api:"https://g2.antv.antgroup.com/api/overview",chartDemo:"https://g2.antv.antgroup.com/examples",assignee:"pearmini"},{label:"G6",gitUrl:"https://github.com/antvis/G6",api:"https://g6.antv.antgroup.com/api/overview",chartDemo:"https://g6.antv.antgroup.com/examples",assignee:"Yanyan-Wang"},{label:"X6",gitUrl:"https://github.com/antvis/X6",api:"https://x6.antv.antgroup.com/api/graph/graph",chartDemo:"https://x6.antv.antgroup.com/examples",assignee:"NewByVector"},{label:"L7",gitUrl:"https://github.com/antvis/L7",api:"https://l7.antv.antgroup.com/api/scene",chartDemo:"https://l7.antv.antgroup.com/examples",assignee:"lzxue"},{label:"F2",gitUrl:"https://github.com/antvis/F2",api:"https://f2.antv.antgroup.com/api/f2",chartDemo:"https://f2.antv.antgroup.com/examples",assignee:"zengyue"},{label:"S2",gitUrl:"https://github.com/antvis/S2",api:"https://s2.antv.antgroup.com/api/general/s2-data-config",chartDemo:"https://s2.antv.antgroup.com/examples",assignee:"lijinke666"}],C=[{label:"bug",value:"bug"},{label:"文档问题",value:"documentation"},{label:"优化建议",value:"enhancement"},{label:"功能需求",value:"request"},{label:"问题讨论",value:"discussion"}],I=n(85893),U={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:14}}},q=function(){var e=(0,r.useState)(void 0),t=u()(e,2),n=t[0],i=t[1],s=(0,r.useState)(G()),a=u()(s,2),o=a[0],h=a[1],q=(0,l.bU)().id.includes("zh")?"zh":"en",D=(0,r.useMemo)((function(){return S.map((function(e){return{label:e.label,value:e.gitUrl}}))}),[]);function G(){var e=window;return{innerWidth:e.innerWidth,innerHeight:e.innerHeight}}(0,r.useEffect)((function(){function e(){h(G())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var N=(0,r.useMemo)((function(){return"en"===q?(0,I.jsxs)("div",{children:[(0,I.jsx)("h3",{children:"Before You Start..."}),(0,I.jsxs)("p",{children:[" ","If you open an issue that does not conform to the requirements, it will be closed immediately"]}),(0,I.jsx)("p",{children:"For usage questions, please use the following resources:"}),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:"Read the introduce and components documentation"}),(0,I.jsx)("li",{children:"Make sure you have search your question in FAQ and changelog"}),(0,I.jsx)("li",{children:"Look for / ask questions on StackOverflow"})]})]}):(0,I.jsxs)("div",{children:[(0,I.jsx)("h3",{children:"在你开始之前..."}),(0,I.jsxs)("p",{children:["AntV的issue如果你开的 issue 不符合规定，它将会被",(0,I.jsx)("strong",{children:"立刻关闭。"})]}),(0,I.jsx)("p",{children:"对于使用中遇到的问题，请使用以下资源："}),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:"仔细阅读对应的 API文档 和 图标。"}),(0,I.jsx)("li",{children:"提问前确保你在 常见问题 和 更新日志 中搜索过"}),(0,I.jsx)("li",{children:"在 StackOverflow (英文) 或是 SegmentFault（中文）搜索和提问"})]})]})}),[q]);return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(p.Z,{hasSider:!0,children:(0,I.jsx)(d.Z,{className:w,children:(0,I.jsx)("div",{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"},children:(0,I.jsxs)("div",{className:y,children:[N,(0,I.jsxs)(m.Z,c()(c()({onFinish:function(e){var t=(0,b.Z)({user:"antvis",repo:n?n.label:"",title:e.title,labels:[e.type,"QuickIssue"],assignee:null==n?void 0:n.assignee});window.open(t)}},o.innerWidth<960?{}:U),{},{children:[(0,I.jsxs)("div",{className:Z,children:[(0,I.jsx)(m.Z.Item,{label:"zh"===q?"仓库":"Repositorie",name:"gitHub",rules:[{required:!0}],children:(0,I.jsx)(g.Z,{style:{width:250},options:D,onChange:function(e){var t=S.find((function(t){return t.gitUrl===e}));i(t)}})}),n?(0,I.jsx)(m.Z.Item,{children:(0,I.jsx)("div",{className:k,children:(0,I.jsxs)(v.Z,{children:[(0,I.jsx)(x.ZP,{onClick:function(){window.open(null==n?void 0:n.api)},children:"API"}),(0,I.jsx)(x.ZP,{onClick:function(){window.open(null==n?void 0:n.chartDemo)},children:"zh"===q?"图表示例":"Demo"}),(0,I.jsx)("div",{style:{paddingTop:6},children:(0,I.jsx)(f.Z,{href:"https://github.com/antvis/".concat(n.label),"data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star antvis/".concat(n.label," on GitHub"),children:"Star"})})]})})}):(0,I.jsx)("div",{className:k})]}),(0,I.jsxs)("div",{className:Z,children:[(0,I.jsx)(m.Z.Item,{label:"zh"===q?"类型":"type",name:"type",rules:[{required:!0}],children:(0,I.jsx)(g.Z,{style:{width:250},options:C})}),(0,I.jsx)(m.Z.Item,{labelCol:o.innerWidth<960?{}:{span:3},wrapperCol:o.innerWidth<960?{}:{span:9},label:"zh"===q?"标题":"title",name:"title",rules:[{required:!0}],children:(0,I.jsx)(j.Z,{placeholder:"zh"===q?"请填写标题":"Please fill in the title",className:z})})]}),(0,I.jsxs)("div",{style:{textAlign:"center"},children:[(0,I.jsx)("p",{style:{color:"#a1a1a1"},children:"zh"===q?"issue正文内容,请点击下方按钮跳转到 Github 页面填写":"Please click the button below to be redirected to the GitHub page where you can fill in the content for the main issue"}),(0,I.jsx)(x.ZP,{htmlType:"submit",type:"primary",children:"zh"===q?"前往GitHub创建issue":"create issue"})]})]}))]})})})})})},D=function(){var e=(0,l.bU)(),t=(0,l.YB)();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a.h,{}),(0,I.jsx)(i.Z,{title:t.formatMessage({id:"quickIssue"}),lang:e.id}),(0,I.jsx)("div",{className:"home-container",children:(0,I.jsx)(q,{})}),(0,I.jsx)(s.$,{})]})}}}]);