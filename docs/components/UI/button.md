#  按钮 Button

> 常用的操作按钮。

## 按钮类型 

通过设置`type`属性为`default`、`success`、`error`、`warning`来创建不同样式的Button，样式默认为`default`。

### 示例代码
```
<l-button type="default">default</l-button>
<l-button type="error">error</l-button>
<l-button type="success">success</l-button>
<l-button type="warning">warning</l-button>
```
## 按钮形状


### 示例代码
```
<l-button shape="semicircle">半圆角</l-button>
<l-button shape="circle">圆弧角</l-button>
<l-button shape="square">方角</l-button>
```
## 按钮尺寸


### 示例代码
```
<l-button size="medium">中按钮</l-button>
<l-button size="large">大按钮</l-button>
<l-button size="mini">小按钮</l-button>
```

## 长按钮



### 示例代码
```
<l-button long="{{true}}">长按钮</l-button>
```

## 镂空按钮


### 示例代码
```
<l-button plain="{{true}}">镂空</l-button>
```

## 禁用按钮



### 示例代码
```
<l-button disabled="{{true}}">禁用按钮</l-button>
```
<!-- false情况 -->
## 加载状态



### 示例代码
```
<l-button loading="{{true}}">加载中</l-button>
```

## 图标按钮



### 示例代码

```
<l-button icon="warning" icon-style="color:#fff;size:20">icon图标/l-button>
<l-button image="../../image/icon.png">自定义图标</l-button>
```

## 特殊样式按钮

>同时设置spcial属性和open-type时，仅在slot中定义的内容可以触发开放能力。



### 示例代码
```
<l-button special="{{true}}" open-type="share">
    <!-- 此处是插槽自定义内容 -->
   <l-icon name="share" />
</l-button>
```

## 按钮微信开放能力

> 建议使用开放能力前仔细阅读[微信小程序button组件][1]的相关文档，充分了解小程序Button的相关开放能力。

Lin-Mini的Button组件同样支持小程序原生Button的相关开放能力。

例如，小程序可以通过原生Button来获取用户的相关信息。而使用Lin-Mini的Button组件同样可以做到，且用法同原生Button保持一致。

具体使用方法如下：

* 根据需求设置Button的`open-type`(开放能力类型)属性，该属性的可选值与[小程序Button组件][1]的`open-type`属性可选值保持一致。

例如设置分享功能即可写为`open-type="share"`。
* 某些开放能力同时还需要传入一个回调函数用以获取回调数据，Lin-MiNi的Button组件的回调函数设置方式同样与小程序原生Button保持一致。

例如在获取用户信息时，你可以这样设置回调函数：`bind:getuserinfo="getUserInfo"`。

### 示例代码

```
<l-button bind:getuserinfo="getUserInfo" openType="getuserinfo"></l-button>
```

## 用户案例

浏览完以上内容，您大概已经了解Button组件的`特殊样式用法`以及`按钮的微信开放能力`。

下面我们来浏览一个在实际开发中较为常见的用户案例，案例实现效果图如下所示：


通过效果图，我们来分析下怎样去实现该案例。总体来讲可分为两部分:

1. 设置Button组件的`spcial`属性为`true`，然后将自定义代码插入插槽中。
2. 将Button组件的`open-type`属性设置为`contact`实现客服功能。

以下是实现该案例的代码。

### 示例代码

```
 <l-button special="true" openType="contact">
    <view class="container">
      <l-icon size="40" name="customer-service" color="#3683d6" />
      <text class="describe">客服</text>
    </view>
  </l-button>
```

## 按钮属性（Button Attributes）

<!-- 注释出微信原生功能 -->
>除本文档列出的参数之外，微信原生Button的参数同样支持，具体参考[微信Button组件文档][1]。

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| size | 按钮尺寸 | String | medium/large/mini | medium | 
| type | 按钮类型 | String | warning/success/error/ghost/default  | default | 
| plain | 按钮是否镂空 | Boolean | ----- | false | 
| disabled   | 按钮是否禁用 | Boolean | ----- | false | 
| loading | 是否为加载中按钮 | Boolean | ----- | false | 
| shape | 按钮形状 | String | square/circle/semicircle   | circle | 
| icon | 按钮内icon图标 | String | -----   | ---|
| icon-style | 按钮内icon大小和颜色 | String | -----   | ---|
| image | 自定义图标 | String | -----   | --- |  
| long | 联通两边按钮(长按钮)   | Boolean | ------- | false | 
| special   | 特殊按钮   | Boolean   | -------   | false   | 
| open-type | 微信开放能力 | String | ------- | --- | 
| form-type | 用于  组件，点击分别会触发  组件的 submit/reset 事件 | String | ------- | --- | 
| l-class | 覆盖按钮区域自定义外部样式类 | String | ------- | --- | 
| l-hover-class | 自定义按钮点击态外部样式类 | String | ------- | --- | 

## 按钮事件（Button Events）
 
