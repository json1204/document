# Button 按钮
## 示例
<example-button></example-button>

----
## 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。
```html

<div>
  <l-button disabled>默认按钮</l-button>
  <l-button type="primary" disabled>主要按钮</l-button>
  <l-button type="success" disabled>成功按钮</l-button>
  <l-button type="info" disabled>信息按钮</l-button>
  <l-button type="warning" disabled>警告按钮</l-button>
  <l-button type="danger" disabled>危险按钮</l-button>
</div>
<div>
  <l-button plain disabled>朴素按钮</l-button>
  <l-button type="primary" plain disabled>主要按钮</l-button>
  <l-button type="success" plain disabled>成功按钮</l-button>
  <l-button type="info" plain disabled>信息按钮</l-button>
  <l-button type="warning" plain disabled>警告按钮</l-button>
  <l-button type="danger" plain disabled>危险按钮</l-button>
</div>
  
```

## 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 VV-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标。

```html

<l-button icon="l-icon-tag" type="primary"></l-button>
<l-button icon="l-icon-close" type="primary"></l-button>
<l-button icon="l-icon-smile" type="primary"></l-button>
<l-button icon="l-icon-search" type="primary">搜索</l-button>
<l-button icon="l-icon-cloudfill" type="primary">下载</l-button>

```


## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
```html

<l-button>默认尺寸</l-button>
<l-button size="medium">中等按钮</l-button>
<l-button size="small">小型按钮</l-button>

```

## Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
