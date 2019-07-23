# css换行写法

## css3 text-overflow属性
| 属性值               |              描述   |
| --------------------|----------------------|
|clip                 | 修剪文本               |              
|ellipsis             |显示省略符号来代表被修剪的文本。|
|hidden               | 超出隐藏    |
|white-space          | 不换行     |

```
    overflow: hidden;    
    text-overflow: ellipsis;      //超出部分以省略号显示
    white-space: nowrap;
    width: 20em;  //用px单位亦可行
```
## css控制几行隐藏并出省略号 
存在兼容性
```
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: initial;
```

## css