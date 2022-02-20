# manifest-design

基于vue开发的商品标签设计系统

<div align="center"><a href="./README-en.md">English</a> | 简体中文</div>

``Email：916411582@qq.com``

### [项目演示地址(github)](https://sxx19950910.github.io/manifest-design/)

[![](https://120.24.218.188/design/demo.png)]()

## 支持插入变量的功能啦

1. 创建模板，将右侧组件拖入页面中间画板，即可创建打印元素。
2. 支持插入模板变量功能，例如：${var}
3. 设计好模板后，可以保存为图片进行打印，也可以点击上方”生成vue模板组件，按钮，将模板下载至本地，后续可以通过组件的形式使用该打印模板。
4. 组件形式调用打印方式： 调用template的print方法，然后传入variables变量即可，注意variables对象的key要和模板中的变量名称一一对应。
5. 更多请参考"使用手册"。<br>

例如：
```javascript
this.$refs.template.print({
    variables: {
        receiverAddress: 'value1',
        barcodeValue: 'value2',
        qrcodeValue: 'value3'
    }
}),
```

## 近期计划

1. 开放更多可自定义的配置出口
2. 修复缺陷,优化设计时的体验

### 即插即用

`支持生成vue打印组件,使用简单方便,搭配lodop便可实现一键打印`<br>

操作步骤:

1. 设计好模板
2. 点击design-ui顶部功能条中的"生成vue模板组件"将组件文件下载到本地
3. 在对应的项目种引用该组件,然后调用该组件的print方法即可实现打印

### 特性

1.组件化<br/>
2.拖拽式设计<br/>
3.可扩展<br/>
4.动态预览<br/>
4.另存为图片<br/>
5.模板保存<br/>
6.支持lodop快速预览与打印<br/>
7.动态生成打印组件,一键调用<br/>

## 一条龙

git clone https://github.com/SXX19950910/manifest-design.git <br/>

cd manifest-design<br/>

npm i<br/>

npm run dev

[更新日志](https://github.com/SXX19950910/manifest-design/blob/master/LOG.md)

## 部署

npm run build

## 反馈

#### 有问题或者更好的idea请提交issue,我会在看到后的第一时间回复您<br>

`或者反馈至邮箱: 916411582@qq.com`
