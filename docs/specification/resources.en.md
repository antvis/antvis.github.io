---
title: Resource Download
order: 10
---

<style>
    .resource-card {
        max-width: 350px;
        width: 40%;
        min-width: 300px;
        height: 130px;
        border: 1px solid #e9e9e9;
        border-radius: 4px;
        font-size: 12px;
        color: #777;
        display: inline-block;
        margin: 20px 40px 10px 0;
        vertical-align: middle;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        position: relative;
        overflow: hidden;
    }
    .resource-card:hover {
        box-shadow: 0 1px 2px -2px rgba(0,0,0,0.16), 0 3px 6px 0 rgba(0,0,0,0.12), 0 5px 12px 4px rgba(0,0,0,0.09);
        border-color: transparent;
    }
    .resource-card img, .resource-card .resource-content {
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .resource-card img {
        width: 50px;
        margin: 0 20px 0 24px;
    }
    .resource-card .resource-content {
        margin-left: 92px;
    }
    .resource-content .title {
        display: block;
        font-size: 16px;
        color: rgba(0,0,0,.65);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 1.2;
        margin-bottom: 6px;
    }
    .resource-content .description {
        display: block;
        color: #999;
        padding-right: 8px;
    }
    @media only screen and (max-width: 480px) {
        .resource-card {
            width: 100%;
        }
    }
</style>

We provide design resources and tools as below:

<div class="resource-cards">
    <a href="https://github.com/antvis/feedback/releases/download/design/AntV.Charts.sketch" class="resource-card">
        <img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*xMzhQLZvDlcAAAAAAAAAAABkARQnAQ" alt="">
        <span class="resource-content">
            <span class="title">AntV Charts</span>
            <span class="description">Chart components as Sketch template</span>
        </span>
    </a>
    <a href="https://github.com/antvis/feedback/releases/download/design/AntV.Charts.Icons.sketch" class="resource-card">
        <img src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*xMzhQLZvDlcAAAAAAAAAAABkARQnAQ" alt="">
        <span class="resource-content">
            <span class="title">AntV Charts Icons</span>
            <span class="description">Logos and icons</span>
        </span>
    </a>
</div>
