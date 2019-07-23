# css布局

#### 作用：圣杯布局和双飞翼布局实现的结果是一样的，就是两边定宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。


#### 区别：圣杯布局，使用padding和定位，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。双飞翼布局，使用margin和浮动float，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。

## 圣杯布局
```html
<body>
    <div id="hd">header</div>
        <div id="bd">
            <div id="middle">middle</div>
            <div id="left">left</div>
            <div id="right">right</div>
        </div>
    <div id="footer">footer</div>
</body>
```
```css
#hd{
    height:50px;
    background: #666;
    text-align: center;
}
#bd{
    /*左右栏通过添加负的margin放到正确的位置了，此段代码是为了摆正中间栏的位置*/
    padding:0 200px 0 180px;
    height:100px;
}
#middle{
    float:left;
    width:100%;/*左栏上去到第一行*/
    height:100px;
    background:blue;
}
#left{
    float:left;
    width:180px;
    height:100px;
    margin-left:-100%;
    background:#0c9;
    /*中间栏的位置摆正之后，左栏的位置也相应右移，通过相对定位的left恢复到正确位置*/
    position:relative;
    left:-180px;
}
#right{
    float:left;
    width:200px;
    height:100px;
    margin-left:-200px;
    background:#0c9;
    /*中间栏的位置摆正之后，右栏的位置也相应左移，通过相对定位的right恢复到正确位置*/
    position:relative;
    right:-200px;
}
#footer{
    height:50px;
    background: #666;
    text-align: center;
}
```

## 双飞翼布局

```html
<body>
    <div id="hd">header</div> 
    <div id="middle">
        <div id="inside">middle</div>
    </div>
    <div id="left">left</div>
    <div id="right">right</div>
    <div id="footer">footer</div>
</body>
```
```css
#hd{
    height:50px;
    background: #666;
    text-align: center;
}
#middle{
    float:left;
    width:100%;/*左栏上去到第一行*/     
    height:100px;
    background:blue;
}
#left{
    float:left;
    width:180px;
    height:100px;
    margin-left:-100%;
    background:#0c9;
}
#right{
    float:left;
    width:200px;
    height:100px;
    margin-left:-200px;
    background:#0c9;
}

/*给内部div添加margin，把内容放到中间栏，其实整个背景还是100%*/ 
#inside{
    margin:0 200px 0 180px;
    height:100px;
}
#footer{  
   clear:both; /*记得清楚浮动*/  
   height:50px;     
   background: #666;    
   text-align: center; 
} 
```

## Flex 布局

#### Flex布局的全称为CSS Flexible Box Layout Module，是W3C提出的一种新型页面布局方案，第一个版本于2009年推出，到现在为止，W3C一共发布了12个版本，最新版本于20171019推出，已经得到了所有主流浏览器的支持


## Flexbox属性

|                    |   属性  |    属性  |      属性  |      属性      |  属性 |  属性 |
|--------------------|-------- |---------- |-------------  |-------- |---------|---------|
| flex-direction     |  row    | row-reverse | column | column-reverse |
| flex-wrap          |  nowrap  | wrap       | wrap-reverse|
| justify-content    |  flex-start | flex-end | center | space-between | space-around|
| align-itens        | flex-start | flex-end | center | baseline | stretch  | 
| align-content      |flex-start  | flex-end | center | space-between | space-around | stretch|


## flex-direction属性

#### 作用：决定主轴的方向。

::: tip

flex-direction: row | row-reverse | column | column-reverse;

:::

- row：默认值，主轴为水平方向,表示从左向右排列
- row-reverse：主轴为水平方向，从右向左排列
- column：主轴为垂直方向，从上向下排列
- column-reverse：主轴为垂直方向，从下向上排列

## flex-wrap属性

#### 作用：决定项目在一条轴线排不下时如何换行。

::: tip

flex-wrap: nowrap | wrap | wrap-reverse;

:::

- nowrap：默认值，不换行
- wrap：换行，第一行在上方
- row-reverse：换行，第一行在下方

## flex-glow属性

#### 作用：flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

::: tip

flex-wrap: flex-direction || flex-wrap;

:::

- row nowrap：默认值，主轴为水平方向，不换行
- flex-direction：同flex-direction
- flex-wrap：同flex-wrap


## justify-content属性

#### 作用：定义项目在主轴上的对齐方式。

::: tip
justify-content: flex-start | flex-end | center | space-between | space-round | space-evenly;
:::

- flex-start：默认值，左对齐
- flex-end：右对齐
- center：居中
- space-evenly：每个项目之间及两端的间隔都相等
- space-around：每个项目两侧间隔相等
- space-between：两端对齐，项目之间间隔相等

## align-items属性
#### 作用：定义项目在交叉轴(即是副轴)（默认方向从上到下）上的对齐方式。

::: tip 
align-items: flex-start | flex-end | center | baseline | stretch;
:::

- flex-start：交叉轴的起点对齐
- flex-end：交叉轴的终点对齐
- cente：交叉轴的中心对齐
- baseline：项目第一行文字的基线对齐
- stretch：默认值，项目未设置固定高度时，将占满整个容器

## align-content属性
#### 作用：定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
::: tip 
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
:::

- flex-start：交叉轴的起点对齐
- flex-end：交叉轴的终点对齐
- center：交叉轴的中心对齐
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布等
- space-around：每根轴线两侧的间隔都相
- stretch：默认值，轴线占满整个交叉轴
## order属性
#### 作用：定义项目的排列顺序。
::: tip 
order: number;
:::
- number：值为整数，数值越小，排列越靠前，默认为0

## flex-grow属性
#### 作用：定义项目的伸缩比例，按照该比例给项目分配空间。

::: tip 
flex-grow: number;
:::

- number：值为整数，数值越大，项目占据空间越大，默认为0

## flex-shrink属性
#### 作用：定义项目的收缩比例，按照该比例给项目分配空间。

::: tip 
flex-shrink: number;
:::

- number：值为整数，数值越大，项目占据空间越小，默认为0

## flex-basis属性

#### 作用：定义在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。

::: tip 
flex-basis: length | auto;
:::

- length：默认为auto，即项目的原始尺寸；也可设置和width或height属性一样的值（比如329px），则项目将占据固定空间。

## flex属性

#### 作用：是flex-grow,flex-shrink和flex-basis的简写，后两个属性可选。

::: tip 
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ];
:::

- 0 1 auto：默认值，不伸缩，如果容器空间不足则等比例收缩
- 1 1 auto：对应关键字auto，如果容器空间多余，则等比例分配多余空间空间；如果容器空间不足则等比例收缩
- 0 0 auto：对应关键字none，按项目原始大小分配空间

## align-self属性

#### 作用：定义单个项目的对齐方式，可覆盖align-items属性。

::: tip 
align-self: auto | flex-start | flex-end | center | baseline | stretch;
:::

- auto：默认值，继承父元素的align-items属性，如果没有父元素，则等同于stretch
- flex-start：交叉轴的起点对齐
- flex-end：交叉轴的终点对齐
- center：交叉轴的中心对齐
- baseline：项目第一行文字的基线对齐
- stretch：未设置固定高度是，将占满整个容器

