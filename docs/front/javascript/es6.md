# es6
## 1- let, const

1.  都是不可以重复声明
2. 存在块级作用域
3. 都不会预解析变量
4. const做常量声明（一般常量名用大写）

## 2 -解构   函数默认值

```
//older
function(){
  var a=a||5;
}
//now
function(a=5){
  
}
```

## 3 -字符串

1.  新增了``反引号， 

2. 反引号中${}处理模板字符串

   ```
   let name='ddd';
   let age =5;
   let str =`${name}${age}`;
   ```

## 4 -includes 判断字符串是否包含某个字符串

```
//older
var str='eeeetttd';
str.indexOf('d');
//now 
let str='woaini';
str.includes('ai')//true;
```

## 5 -箭头函数

1. 如果参数只有一个，可以省略小括号

2. 不写return 可以不写大括号

3. 没有arguments变量

4. 改变this指向----指向上一层的this指向

   ```
   let sum =(a,b)=>a+b;
   ```

## 6 -数组

### 6.1 -Array.from将假数组（对象数组）转化为真数组

  ```
  let arr=Array.from({'0':1},'1':2,length:2);
  ```

### 6.2 -Array.of()创建数组

  ```
  Array.of(1,2,3)//[1,2,3]
  ```


### 6.3 -Array.filter() 数组过滤  

  ```
  let retsult=[1,2,3,4,5].filter(function(item){//item形参，内部才是实参
    return item>3;//找到大于3的并返回
  })
  console.log(retsult);//[4,5]
  Array.prototype.myFilter=function(callback){
    var arr=[];
    for(var i=0;i<this.length;i++){
      var item=this[i];
      if(callback(item)){//callback(item)调用外面的函数
        arr.push(item);
      }
    }
    
  }
  ```

### 6.4 -Araay.find()查找并把符合的值返回值

  ```
  let result = [1,1,2,2,2,3].find(function(item){
    return item==2;
  })
  console.log(result)//2;
  ```

### 6.5 -Array.includes()判断数组是否有某值，跟字符串样

## 7 -Class类

1. Class定义类

2. extends实现继承

3. 支持静态方法

4. 有constructor构造方法

   ```es6
   class Parent{//父类
     constructor(name){
       this.name=name;
     }
     getName(){
       return this.name;
     }
     static fn(){
       return 6;
     }
     
   }
   //子类
   class Child extends Parent{//继承Parent父类
     constructor(name,age){
       super(name);//固定写法，表示执行父类的constructor方法
       this.age=age;
     }
   }
   let child =new Child('my',66);//这样就可以在子类中调用父类的方法和属性
   console.log(child.getName())//my
   console.log(child.name)//my 调用的时父类的
   console.log(child.fn());//66

   ```