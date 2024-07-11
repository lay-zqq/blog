---
sidebar: auto
---
# 开发技巧

## JS开发技巧

### 带有多个条件的if语句
**把多个值放在一个数组中，然后调用数组的includes方法。**

```js

  // longhand 普通写法
  if (a === '124' || a === 'hbh' || a === '87n' || a === 'whj') {
    // 具体逻辑
  }
  // 优化写法 shorthand
  if (['124', 'hbh', '87n', 'whj'].includes(a)) {
    // 具体逻辑
  }

```

### 三元运算
**对于简单逻辑的if-else条件，我们可以简单地使用三元运算符来实现代码的简化。例如下面的例子。**

```js

  // longhand 普通写法
  let test = null
   if (x > 10) {
     test = true
   } else {
     test = false
   }

  //  优化写法 shorthand
  let test = ( x > 10 ) ? true : false

  // 或者我们可以直接使用
  let test = x > 10
  console.log(test)

```

如果有嵌套的条件，可以这样做
```js 

  let x = 200
  let test2 = (x>100)? 'greater 100' : (x < 50) ? 'less 50' : 'between 50 and 100'
  console.log(test2) // 'greater 100'

```

### 变量声明

当我们想要声明两个或两个以上具有相同类型的变量时，可以使用这种办法简写。

``` js

  // longhand 普通写法
  let test
  let test2 = 3

  //  优化写法 shorthand
  let test, test2 = 4

```

### 检查值是否为空、undefined、null

当我们创建了新的变量，有时候想要检查引用的变量是不是非null或undefined。
JavaScript确实有一个很好的快捷方式来实现这种检查。例子如下：

```js 

  // longhand 普通写法
  if (x !== null || x ! == undefined || x !== '') {
    let test = x
  }

  //  优化写法 shorthand
  let test = x || ''

```

### 检查null值和赋值

```js 

  let test = null, test2 = test || '';
  console.log("null check", test2) // 输出为 ""

```

### 检查undefined值和赋值

```js 
  let test = undefined, test2 = test || ''
  console.log("undefined check", test2) // 输出为 ""

  // 一般检查
  let test1 = 'test',
      test2 = test1 || '';
  console.log(test2); // 输出: 'test'

```

对于上述的null ,undefined 和空值检查，都可以使用 `??` 操作符
如果左边的值为null 或 undefined，就返回右边的值。默认情况下，它将返回左边的值。

```js

  const test = null ?? 'default'
  console.log(test) // 输出为 default

  const test1 = 1 ?? 2
  console.log(test1) // 输出为 1

```

### 给多个变量赋值

当我们想给多个不同的变量赋值时，这种技巧非常香。

```js 

  // longhand 普通写法
  let test, test1, test2
  test = 1
  test1 = 2
  test2 = 3

  // 优化写法 shorthand
  let [test, test1, test2] = [1, 2, 3]

```

### 简便的赋值操作符

在编程过程中，我们要处理大量的算术运算符。这是javaScript变量的赋值操作符的有用技巧之一。

```js

  // longhand 普通写法
  let test1 = test1 + 1;
  let test2 = test2 - 1;
  let test3 = test3 * 20;
  // 优化写法 shorthand
  test1++;
  test2--;
  test3 *= 20;

```

### if 判断值是否存在

这是我们都在使用的一种常用的简便技巧，在这里仍然值得再提一下。

```js

  // longhand 普通写法
  if (test1 === true) or if (test1 !== "") or if (test1 !== null)

  // 优化写法 shorthand //它也可以检查空字符串、null和未定义
  if (test1)

```

###  短路运算&& 操作符

如果只在变量为 true 时才调用函数，可以使用 && 操作符
短路运算符当第一个条件不符合的时候就会返回false,符合就执行后面的逻辑0

```js

  // longhand 普通写法
  if (test) {
    calllFountion()
  }

  // 优化写法 shorthand
  test && calllFountion()

```

### 比较后返回

我们也可以在return 语句中使用比较，它可以减少好几行的代码。

```js

  // longhand 普通写法
  let test;
  function checkReturn() {
    if (!(test === undefined)) {
        return test;
    } else {
        return callMe('test');
    }
  }
  var data = checkReturn();
  console.log(data); //output test
  function callMe(val) {
      console.log(val);
  }
  // 优化写法 shorthand
  function checkReturn() {
      return test || callMe('test');
  }
  
```

### 箭头函数

使用箭头函数可以使代码看起来更加简洁,还可以隐式返回，不需要return.

```js

  // longhand 普通写法
  function add(a, b) { 
    return a + b; 
  } 
  // 优化写法 shorthand
  const add = (a, b) => a + b;

```

### switch高级用法

我们可以将条件保存在简直对象中，然后根据条件来调用它们。

```js

  // longhand 普通写法
  switch(value) {
    case 1:
      test ()
      break;
    case 2:
      test2 ()
      break;
    case 3:
      test3 ()
      break; 
  }

  // 优化写法 shorthand
  let dataObj = {
    1:  test,
    2:  test2,
    3:  test3 
  }
  dataObj[value] && dataObj[value]()

```

### 指数表示法
当循环的值要显示很大时，可以使用指数代替。

```js

  // longhand 普通写法
  for (var i = 0; i < 10000; i++) { ... }

  // 优化写法 shorthand
  for (var i = 0; i < 1e4; i++) {}

```

### 默认参数值

```js
  // longhand 普通写法
  function add(test1, test2) {
    if (test1 === undefined)
      test1 = 1;
    if (test2 === undefined)
      test2 = 2;
    return test1 + test2;
  }
  // 优化写法 shorthand
  add = (test1 = 1, test2 = 2) => (test1 + test2);
  add() //output: 3

```

### 延展操作符简化

两个数组合并成为一个数组还可以这样操作。

```js

  // longhand 普通写法
  // 正常操作合并数组都是用concat方法
  const arr = [1,2,3]
  const dataArr = [4,5,6].concat(arr)

  // 优化写法 shorthand
  const arr = [1,2,3]
  const dataArr = [4,5,6,...data]
  console.log(dataArr) // [4, 5, 6, 1, 2, 3]

```

我们还可以使用延展操作符进行克隆

```js

  //  longhand 普通写法 
  // 克隆数据
  const test = [1, 2, 3]
  const test2 = test.slice()

  // 优化写法 shorthand
  // 克隆数据
  const test = [1, 2, 3]
  const test2 = [...test]

```

### 模板字符串

当需要连接很多字符还有变量时使用+是不是很痛苦，一会又"" 一会又'',非常的混乱，这个技巧将解决你这些困扰。

```js
  // longhand 普通写法
  let test = '99'
  let test2 = '哈哈哈'
  const str = 'hi' + "" + test + test2

  // 优化写法 shorthand
  const str = `hi${test}${test2}`

```

### 跨行字符串

当我们在代码中处理跨行字符串时，可以这样做。

```js

  // longhand 普通写法
  const data = 'abc abc abc abc abc abc\n\t'
      + 'test test,test test test test\n\t'
  // 优化写法 shorthand
  const data = `abc abc abc abc abc abc
         test test,test test test test`

```

### 对象属性赋值

当我们赋值给的属性名一样时，可以这样做。

```js

  let test1 = 'a'
  let test2 = 'b'
  // longhand 普通写法
  let obj = {test1: test1, test2: test2}
  // 优化写法 shorthand
  let obj = {test1, test2}

```

### 结构赋值

当我们请求回来的数据嵌套很多属性时，可以使用解构的方法简化代码量，例如下面的例子

```js

  // longhand 普通写法
  const test1 = this.data.test1
  const test2 = this.data.test2
  const test2 = this.data.test3
  // 优化写法 shorthand
  const { test1, test2, test3 } = this.data

```

### 数组find简化

当我们有一个对象数组，并想根据对象属性找到特定的对象，find方法会非常好用。

```js

  // longhand 普通写法
  const data = [{
        type: '1',
        name: 'abc'
    },
    {
        type: '2',
        name: 'cde'
    },
    {
        type: '3',
        name: 'fgh'
    },
  ]
  function findtest1(name) {
      for (let i = 0; i < data.length; ++i) {
          if (data[i].type === '1' && data[i].name === name) {
              return data[i];
          }
      }
  }

  // 优化写法 shorthand
  let filteredData = data.find(data => data.type === '1' && data.name === 'fgh')
  console.log(filteredData) // { type: '1', name: 'fgh' }

```

### 条件查询简化

如果我们要基于不同的类型调用不同的方法，可以使用多个 else if 语句或 switch，但有没有比这更好的简化技巧呢？

```js

  // longhand 普通写法
  if (type === 'test1') {
    test1()
  }
  else if (type === 'test2') {
    test2()
  }
  else if (type === 'test3') {
    test3()
  }
  else if (type === 'test4') {
    test4()
  } else {
    throw new Error('Invalid value ' + type)
  }
  // 优化写法 shorthand
  var types = {
    test1: test1,
    test2: test2,
    test3: test3,
    test4: test4
  }
  var func = types[type]
  (!func) && throw new Error('Invalid value ' + type) func()

```

### indexOf 的按位操作简化

在查找数组的某个值时，我们可以使用indexOf()方法。但有一种更好的方法，让我们来看一下这个例子。

```js

  // longhand 普通写法
  if(arr.indexOf(item) > -1) { 
    // item found 
  }
  if(arr.indexOf(item) === -1) { 
    // item not found
  }

  // 优化写法 shorthand
  if(~arr.indexOf(item)) { 
    // item found
  }
  if(!~arr.indexOf(item)) { 
    // item not found
  }

```

按位 (~) 运算符将返回 true（-1 除外），反向操作只需要!~。另外，也可以使用 include() 函数。

```js

  if (arr.includes(item)) { 
  // true if the item found
  }

```

### Object.entries()

这个方法可以将对象转换为对象数组。

```js

  const data = { test1: 'abc', test2: 'cde', test3: 'efg' }
  const arr = Object.entries(data) 
  console.log(arr)

  /** 输出结果:
  [ [ 'test1', 'abc' ],
    [ 'test2', 'cde' ],
    [ 'test3', 'efg' ]
  ]
  **/

```

### Object.values()

这也是 ES8 中引入的一个新特性，它的功能类似于 Object.entries()，只是没有键。

```js 

  const data = { test1: 'abc', test2: 'cde' };
  const arr = Object.values(data);
  console.log(arr);
  /** 输出结果:
  [ 'abc', 'cde']
  **/

```

### 双重按位操作

```js

  // longhand 普通写法
  let a =  Math.floor(1.9) === 1 // true
  // 优化写法 shorthand
  let a =  ~~1.9 === 1 // true

```

### 重复字符串多次

了重复操作相同的字符，我们可以使用 for 循环，但其实还有一种简便的方法。

```js

  // longhand 普通写法
  let test = '';
  for(let i = 0; i < 5; i ++) { 
    test += 'test '
  } 
  console.log(str) // test test test test test 
  // 优化写法 shorthand
  'test '.repeat(5)

```

### 数组的最大值和最小值
查找数组的最大最小值，通常就是使用for循环，现在有个更简洁的方法2行代码搞定。

```js

  const arr = [1, 2, 3]; 
  Math.max(…arr); // 3
  Math.min(…arr); // 1

```

### 指数幂简化

```js

  // longhand 普通写法
  Math.pow(2,3); // 8
  // 优化写法 shorthand
  2**3 // 8

```

