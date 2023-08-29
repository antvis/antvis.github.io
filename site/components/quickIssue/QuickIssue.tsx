// 场景案例模版
import React, { useState, useMemo } from 'react';
import { Layout as AntLayout, Button, Form, Input, Select, Space } from 'antd';
import Article from '@antv/dumi-theme-antv/dist/slots/Article';
import style from './QuickIssue.module.less'
import { GITHUB_URL, ISSUE_TYPE } from './data';
import newGithubIssueUrl from 'new-github-issue-url';
import GitHubButton from 'react-github-btn'
import styles from '@antv/dumi-theme-antv/dist/slots/ManualContent/index.module.less';
import { useLocale } from 'dumi';
import { assign } from 'lodash';

type url = {
  label: string;
  gitUrl: string;
  api: string;
  chartDemo: string;
  assignee: string;
} | undefined

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
export default () => {
  const [url, setUrl] = useState<url>(undefined)
  const locale = useLocale()
  const lang = locale.id.includes('zh') ? 'zh' : 'en';

  const options = useMemo(() => {
    return GITHUB_URL.map((item) => {
      return {
        label: item.label,
        value: item.gitUrl
      }
    })
  }, [])

  const onChange = (e: string) => {
    const findData = GITHUB_URL.find((item) => {
      return item.gitUrl === e
    })
    setUrl(findData)
  }


  const onFinish = (values: any) => {
    const toUrl = newGithubIssueUrl({
      user: 'antvis',
      repo: url ? url.label : '',
      title: values.title,
      labels: [values.type,'QuickIssue'],
      assignee: url?.assignee,
    });
    window.open(toUrl)
  }

  const text = useMemo(() => {
    if (lang === 'en') {
      return <div>
        <h3>Before You Start...</h3>
        <p> If you open an issue that does not conform to the requirements, it will be closed immediately</p>
        <p>For usage questions, please use the following resources:</p>
        <ul>
          <li>Read the introduce and components documentation</li>
          <li>Make sure you have search your question in FAQ and changelog</li>
          <li>Look for / ask questions on StackOverflow</li>
        </ul>
      </div>
    }
    return <div>
      <h3>在你开始之前...</h3>
      <p>AntV的issue如果你开的 issue 不符合规定，它将会被<strong>立刻关闭。</strong></p>
      <p>对于使用中遇到的问题，请使用以下资源：</p>
      <ul>
        <li>仔细阅读对应的 API文档 和 图标。</li>
        <li>提问前确保你在 常见问题 和 更新日志 中搜索过</li>
        <li>在 StackOverflow (英文) 或是 SegmentFault（中文）搜索和提问</li>
      </ul>
    </div>
  }, [lang])


  return (
    <>
      <AntLayout hasSider>
        <Article className={style.markdown}>
          <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className={style.content}>
              {text}
              <Form onFinish={onFinish} {...formItemLayout} >
                <div className={style.flex}>
                  <Form.Item
                    label={lang === 'zh' ? '仓库' : 'Repositorie'}
                    name={'gitHub'}
                    rules={[{ required: true }]}
                  >
                    <Select style={{ width: 250 }} options={options} onChange={onChange} />
                  </Form.Item>
                  <Form.Item>
                    <div style={{ width: 450 }}>
                     { url && <Space>
                        <Button onClick={() => {
                          window.open(url?.api)
                        }}>{'API'}</Button>
                        <Button onClick={() => {
                          window.open(url?.chartDemo)
                        }}>{lang === 'zh' ? '图表示例' : 'Demo'}</Button>
            
                          <div style={{ paddingTop: 6 }}>
                            <GitHubButton
                              href={`https://github.com/antvis/${url.label}`}
                              data-icon="octicon-star"
                              data-size="large"
                              data-show-count="true"
                              aria-label={`Star antvis/${url.label} on GitHub`}
                            >
                              Star
                            </GitHubButton>
                          </div>
                      </Space>
                     }
                    </div>
                  </Form.Item>
                </div>
                <div className={style.flex} >
                  <Form.Item
                    label={lang === 'zh' ? '类型' : 'type'}
                    name={'type'}
                    rules={[{ required: true }]}
                  >
                    <Select style={{ width: 250 }} options={ISSUE_TYPE} />
                  </Form.Item>
                  <Form.Item
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 9 }}
                    label={lang === 'zh' ? '标题' : 'title'}
                    name={'title'}
                    rules={[{ required: true }]}
                  >
                    <Input  placeholder={lang === 'zh' ? '请填写标题' : 'Please fill in the title'} style={{ width: 400 }} />
                  </Form.Item>
                </div>
                <div style={{ textAlign: 'center' }} >
                  <p style={{ color: '#a1a1a1' }}>{lang === 'zh' ? 'issue正文内容,请点击下方按钮跳转到 Github 页面填写' : 'Please click the button below to be redirected to the GitHub page where you can fill in the content for the main issue'}</p>
                  <Button htmlType='submit' type='primary'>{lang === 'zh' ? '前往GitHub创建issue' : 'create issue'}</Button>
                </div>
              </Form>
            </div>
          </div>
        </Article>
      </AntLayout>
    </>
  );
};
