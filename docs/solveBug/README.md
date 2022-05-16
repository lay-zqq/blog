---
sidebar: auto
---
# js模块

## js数组深浅拷贝

### 数组浅拷贝
数组的浅拷贝我们可以利用一些方法如：扩展运算符（...）、slice、concat、Object.assign()等方法返回一个新的数组来现实浅拷贝，代码如下

使用扩展运算符的方法进行浅拷贝。
```js

  let arr = ['wyb', 'zyx', 'yyqx', 'hb', 'hL']
  // 利用扩展运算符进行浅拷贝
  let newArr = [...arr]  
      console.log(newArr) // 打印出来 ['wyb', 'zyx', 'yyqx', 'hb', 'hL']
      newArr[0] = 'kb'
      console.log(newArr) // 打印出来 ['kb', 'zyx', 'yyqx', 'hb', 'hL']

```

使用slice的方法进行浅拷贝。

```js 

  let arr1 = [ '1', '2', '3', '4', '5']
  let newArr1 = arr1.slice()
  console.log(newArr1) // 打印出来的就是[ '1', '2', '3', '4', '5']

```

如果是浅拷贝数组里面嵌套着对象或者数组的话会是什么样的尼，例如我们用concat举例，代码如下

```js

  let arr2 = [ ['nice'], {name: 'zyx'}, {age: 30}, {vocation: 'singer'} ]
  let newArr2 = arr2.concat()
  arr2[0][0] = 'sad'
  arr2[1].name = 'Lay_zhang'
  console.log(arr2) // [['sad'],{name: 'Lay_zhang'}, {age: 30}, {vocation: 'singer'}]
  console.log(newArr2) // [['sad'],{name: 'Lay_zhang'}, {age: 30}, {vocation: 'singer'}]

```
通过上面的几个例子你会发现浅拷贝对于数组元素为基本类型起作用，但是对于有嵌套对象和数组的元素，我们会发现无论是新数组或旧数组我们改变其中一个数组的值另一个数组也会受到影响。像concat方法拷贝的这类型数据我们就需要用到深拷贝。


### 数组深拷贝

我们也可以像浅拷贝一样利用方法技巧进行深拷贝，这个方法非常香非常好用，不仅适合数组还适合对象，就是不适合函数。让我们一起见证一下

```js
  let arr = [ ['nice'], {name: 'zyx'}, {age: 30}, {vocation: 'singer'} ]
  let newArr = JSON.parse( JSON.stringify(arr) )
      arr[0][0] = 'sad'
      arr[1].name = 'who'
      console.log(arr) // 打印结果  [ ['sad'], {name: 'who'}, {age: 30}, {vocation: 'singer'} ]
      console.log(newArr) // 打印结果  [ ['nice'], {name: 'zyx'}, {age: 30}, {vocation: 'singer'} ]

```

### 手写浅拷贝
上面所述的都是利用一些方法实现的浅拷贝，其实我们也可以自己写一个函数实现这个功能。
实现原理就是：通过遍历原来的对象，把这些属性跟属性值放在另一个新的对象里面。

```js

  ShallowCopy (obj) {
    if (typeof obj !== 'object') return;
        // 根据obj的类型判断是新建一个数组还是对象
        var newObj = obj instanceof Array ? [] : {};
        // 遍历obj，并且判断是obj的属性才拷贝
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = obj[key];
            }
        }
        return newObj;
  }

```

### 手写深拷贝

深拷贝跟浅拷贝其实差不多的，有区别的地方就是在拷贝的时候判断属性值的类型，如果是对象的话通过递归再次拷贝就好了。

```js

  deepCopy (obj) {
    if (typeof obj !== 'object') return;
      // 根据obj的类型判断是新建一个数组还是对象
      var newObj = obj instanceof Array ? [] : {};
      // 遍历obj，并且判断是obj的属性才拷贝
      for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            // 判断属性值的类型，是对象再调用一次
              newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
          }
      }
    return newObj;
  }

```

## Array.prototype.reduce()用法
reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
`array.reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue)`

* previousValue：上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值
  initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。

* currentValue：数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，
其值则为数组索引为 0 的元素 array[0]，否则为 array[1]。

* currentIndex：数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，
否则从索引 1 起始。

* array：用于遍历的数组。

**initialValue**
作为第一次调用 callback 函数时参数 previousValue 的值。若指定了初始值 initialValue，则 currentValue 则将使用数组第一个元素；否则 previousValue 将使用数组第一个元素，而 currentValue 将使用数组第二个元素。

### reduce使数组转对象
在开发中经常会遇到对数据处理，把数组转成对象的方式，如何快速的转换尼，使用reduce，上代码

```js

  let star = [
    {name: 'ZYX',age: 30, gender: '男'},
    {name: 'HYB',age: 28, gender: '男'},
    {name: 'HJE',age: 37, gender: '男'},
  ]
  let starObj = star.reduce((pre,curValue)=>{
    let {name,...rest} = curValue
    // pre 的初始值是{}
    pre[name] = rest
    return pre
  },{})
  console.log(starObj)  // {
                        // ZYX: {age: 30, gender: '男'}
                        // HYB: {age: 28, gender: '男'}
                        // HJE: {age: 27, gender: '男'}
                        //}

```

### 获取对象指定键值

当你想获取对象某几个键值的时候reduce也是很香的，话不多说上代码

```js

  function getKeys(obj = {}, keys = []) {
    //  Object.keys(obj) 当obj为对象的时候，返回的就是键，当obj为字符串，返回索引，当为数组时也是返回索引
    // 其中运用了逗号运算符，逗号运算返回最后一个值
    return Object.keys(obj).reduce((pre, value) => (keys.includes(value) && (pre[value] = obj[value]), pre), {})

}
  let exampleObj = { name: 'ZYX', age: 30, address: '湖南长沙', vocation: '歌手' }
  let keyArr = [ 'name', 'vocation' ]
  getKeys(exampleObj, keyArr) // {name: 'ZYX', vocation: '歌手'}

```




 