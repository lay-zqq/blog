---
sidebar: auto
---
# JavaScript知识点

## 作用域
### 全局作用域

* 全局作用域是指在整个代码中都可以访问的变量和函数。在全局作用域中声明的变量和函数可以被程序中的任何地方访问。
```javascript
var globalVariable = 'I am a global variable';

function globalFunction() {
  console.log('I am a global function');
}

console.log(globalVariable); // 输出：I am a global variable
globalFunction(); // 输出：I am a global function
```

### 语法作用域
* 词法作用域是指作用域在代码编写时就已经确定，而不是在代码运行时决定的。作用域的范围由代码的书写位置决定。
```javascript
function foo() {
  var a = 2;

  function bar() {
    console.log(a); // 2
  }

  bar();
}
foo(); 
```
在上面的例子中，`bar` 函数可以访问 `a` 变量，因为 `bar` 在 `foo `内部定义。

### 函数作用域
* 函数作用域就字面意思在函数内部声明的变量在整个函数范围内都可以访问。
```javascript
function foo() {
  var a = 2;
  console.log(a); // 2
}
foo(); 
console.log(a); // ReferenceError: a is not defined
```
在上面的例子中，`a` 只能在 `foo` 函数内部访问，外部无法访问。因为外面没有定义`a`变量，函数里面定义了`a`变量

### 块作用域 
* 使用 let 和 const 声明的变量具有块级作用域，即只在块内有效。
:::warning 注意
当在代码中访问变量时，JavaScript引擎会根据作用域链找到相应的变量值。要注意的是，变量的作用域是静态的，即在编写代码时确定，与代码的执行顺序无关。
:::
```javascript
{
  let a = 2;
  const b = 3;
  console.log(a); // 2
  console.log(b); // 3
}
console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined
```
## 提升
:::tip
`JavaScript`中的提升是指在代码执行过程中，`JavaScript`引擎会将变量声明和函数声明提前到它们所在作用域的顶部，但是只是在代码解析阶段进行的，变量和函数的赋值操作仍然留在原来的位置。这意味着可以在声明之前访问变量和函数。
:::

:::warning 注意
需要注意的是，函数表达式（使用var或let声明的函数）不会被提升，只有函数声明才会被提升。
:::
* 在JavaScript中，变量声明会被提升到所在作用域的顶部，但是变量的赋值不会提升。
```javascript
console.log(x); // 输出：undefined
var x = 5;
```
实际上，上面的代码在执行时会被 JavaScript 引擎解析为：
```javascript
var x;
console.log(x); // 输出：undefined
x = 5;
```

**函数提升**: 函数声明会被提升到所在作用域的顶部，包括函数的整个定义。
```javascript
foo(); // 输出：Hello, I am a function

function foo() {
  console.log('Hello, I am a function');
}
```
在代码执行时，JavaScript引擎会将函数foo的声明提升到作用域的顶部，所以上面的代码实际上会被解析为：
```javascript
function foo() {
  console.log('Hello, I am a function');
}

foo(); // 输出：Hello, I am a function
```
## 闭包

* `闭包`是指在一个函数内部定义的函数，且内部函数可以访问外部函数的变量。闭包是 `JavaScript` 中非常重要的概念，它可以帮助我们实现一些功能，例如保护变量、模拟私有方法等。
在理解闭包之前，首先要了解 JavaScript 中的作用域链。作用域链是指内部函数可以访问外部函数的变量，但外部函数不能访问内部函数的变量。通过闭包，内部函数可以访问外部函数的变量，因为内部函数形成了一个闭包，将外部函数的作用域保存在内部函数中。
```javascript
function outerFunction() {
  var outerVariable = 'I am from outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction; // 返回内部函数
}

var innerFunc = outerFunction();
innerFunc(); // 输出：I am from outer function
```
在上面的代码中，`innerFunction` 内部函数可以访问` outerVariable` 外部函数的变量，形成了一个闭包。当 `outerFunction` 调用后，返回了 `innerFunction`，并赋值给 `innerFunc`，之后再调用 `innerFunc`，就可以输出外部函数的变量。
:::warning 注意
需要注意的是，闭包可能会导致`内存泄漏`问题，因为闭包会保持外部函数的作用域，导致外部函数的变量无法被释放。因此，在使用闭包时，需要谨慎处理内存管理，避免出现内存泄漏问题。
:::
**闭包特点**
* 内部函数可以访问外部函数的变量，即使外部函数已经执行完毕。
* 闭包可以保护外部函数的变量，使其在闭包中被私有化，不受外部环境的干扰。
* 闭包可以实现函数的延迟执行，将函数当做变量传递或返回，延长了函数的生命周期。

## this关键字

* `this`是一个关键字，用于引用当前执行上下文中的对象。`this` 的值取决于调用函数的方式，不是在代码编写时确定的，而是在运行时动态确定的。
:::warning 注意
在非严格模式下，`this`绑定到全局对象（浏览器中是`window`），在严格模式下，`this为undefined`
:::

**在全局作用域中**: this指向全局对象（浏览器中为window对象）
```javascript
console.log(this === window); // 输出：true
```
**当函数作为对象的方法调用时**：`this` 指向调用该方法的`对象`。
```javascript
var person = {
  name: '你对象',
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};
person.greet(); // 输出：Hello, my name is 你对象
```
**当函数作为普通函数调用时**：this 指向全局对象（非严格模式下），或者是 undefined（严格模式下）。
```javascript
function sayName() {
  console.log('My name is ' + this.name);
}

sayName(); // 输出：My name is （非严格模式下指向全局对象）
```

**使用 call()、apply()、bind() 方法**可以显式指定函数内部的 this 所指向的对象。
```javascript
var person1 = {
  name: '指定对象'
};

var person2 = {
  name: 'boss'
};

function greet() {
  console.log('Hello, my name is ' + this.name);
}

// 使用 call() 方法指定 this 指向 person1
greet.call(person1); // 输出：Hello, my name is 指定对象
```
**箭头函数中**的 this 是在定义时确定的，不会被函数调用方式改变，始终指向箭头函数所在的上下文。
```javascript
var person = {
  name: 'David',
  greet: () => {
    console.log('Hello, my name is ' + this.name);
  }
};

person.greet(); // 输出：Hello, my name is （指向全局对象，因为箭头函数没有自己的上下文）
```

## 对象

对象（Object）是一种复合数据类型，用于存储一组键值对（属性和方法）。对象可以理解为一个包含了多个属性和方法的容器，通过对象可以将相关的数据和功能组织在一起。
创建对象的方法有很多种：例如对象字面量、构造函数、Object.create()等
**对象特点**
:::tip
对象是动态的：可以随时向对象添加新的属性或方法，也可以随时删除已有的属性或方法。
对象是引用类型：对象通过引用来传递和赋值。当将一个对象赋值给另一个变量时，实际上是将对象的引用传递给了新的变量，两个变量指向同一个对象。
对象的属性访问：可以使用点号（.）或方括号（[]）来访问对象的属性。点号方式适用于属性名符合标识符的情况，而方括号方式则适用于动态属性名或属性名包含特殊字符的情况。
:::
对象的访问：可以使用点号`.`，例如 `person.name`或者中括号`[]` `person['name']`来访问对象的属性值
```javascript
// 对象字面量创建对象
var person = {
  name: '对象',
  age: 30
};

console.log(person.name); // 对象 
```
对象的属性值也可以是函数，称为对象的方法。方法允许对象执行某些操作或计算。示例如下：
```javascript
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

console.log(calculator.add(2, 3)); // 输出: 5
console.log(calculator.multiply(2, 3)); // 输出: 6
```
每个 JavaScript 对象都有一个`原型（prototype）`，原型可以包含共享的属性和方法。通过原型链，对象可以继承原型对象的属性和方法。
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

const john = new Person("Jack", 25);
console.log(john.greet()); // 输出: Hello, my name is Jack and I am 25 years old.
```

## 原型链
原型链（Prototype Chain）是一种实现对象继承和共享属性的机制。所有对象都有一个内部链接指向其原型对象，通过这种链接，可以实现对象之间的属性和方法的继承。

原型链的工作原理
查找属性：当访问对象的属性时，JavaScript 首先查找对象自身是否有该属性。如果没有，JavaScript 会递归地沿着原型链向上查找，直到找到该属性或到达原型链的顶端`（通常是 Object.prototype）`。
原型链的结束: 原型链的末尾是 `null`，这表示没有原型可供查找。
原型链的使用
```javascript
// 定义一个构造函数
function Animal(type) {
    this.type = type;
}

// 为 Animal 设定一个方法
Animal.prototype.speak = function() {
    return `${this.type} makes a sound.`;
};

// 定义一个构造函数 Dog，继承自 Animal
function Dog(name) {
    Animal.call(this, 'Dog'); // 调用父构造函数
    this.name = name;
}

// 设置 Dog 的原型为 Animal 的实例
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// 为 Dog 设定一个特有的方法
Dog.prototype.bark = function() {
    return `${this.name} barks.`;
};

const myDog = new Dog("Buddy");
console.log(myDog.speak()); // 输出: Dog makes a sound.
console.log(myDog.bark());  // 输出: Buddy barks.
```

## 类型
原始类型：`Numner、String、Boolean、Undefined、Null、Symbol（ES6引入）`
示例如下
```javascript
// Number 表示数字，包括整数和浮点数。
let num = 42;
let decimal = 3.14;

// String 表示文本数据，由字符组成。使用单引号、双引号或反引号（模板字符串）定义。
let str1 = "Hello, World!";
let str2 = 'JavaScript';
let str3 = `Template string with variable: ${num}`;

// Boolean 表示逻辑值，只有 true 和 false 两个值。
let isTrue = true;
let isFalse = false;

// Undefined 表示一个变量未被赋值时的状态。
let unassigned;
console.log(unassigned); // 输出: undefined

// Null 表示一个空值或无值。
let emptyValue = null;

// Symbol (ES6引入) 表示独一无二的值，常用于对象属性的键。
const uniqueSymbol = Symbol('description');

```

复杂类型：JavaScript中的对象是引用类型，主要用来存储集合和更复杂的实体。所有对象都是基于原型的。
其中常用的有`Object、Array、Function、Date、RegExp`
```javascript
// Object: 包含键值对的集合。
let person = {
    name: "Object",
    age: 30, 
};

// Array: 特殊类型的对象，用于存储有序的数据集合。
let colors = ["red", "green", "blue"];

// Function 也是一种对象，表示可调用的代码。
function add(a, b) {
    return a + b;
}

// Date: 用于处理日期和时间。
let now = new Date();

// RegExp: 用于处理正则表达式，可以用来匹配字符串。
let regex = /ab+c/;
```

## 类型转换
JavaScript允许进行类型转换，可以手动或通过某些操作自动进行转换，有`隐式转换`跟`显示转换`。
```javascript
// 隐式转换 在需要时，JavaScript会自动将一个类型转换为另一个类型。
console.log("5" + 1); // "51" - 字符串拼接
console.log("5" - 1); // 4 - 字符串转为数字

// 显式转换 使用全局的构造函数进行类型转换。
let number = Number("123"); // 显式转为数字
let str = String(123);      // 显式转为字符串
let bool = Boolean(0);      // 0 -> false
```
:::warning 注意
类型是动态的，变量的类型可以在运行时变化。
:::

## 异步编程
因为JavaScript是单线程的，所以异步编程尤为重要，可以解决回调地狱等问题
* 同步：在执行代码时，程序会按照顺序逐行执行，每一行代码必须等到前一行执行完才能开始执行。同步代码可能会导致程序在某些操作（如网络请求）上阻塞，从而影响用户体验。
* 异步：代码可以在不阻塞执行的情况下进行处理。例如，一段代码可以发起一个网络请求，继续后续代码的执行，而当网络请求完成后再处理请求的结果。
 
 最基本的处理方式就是用`setTimeout`定时器充当异步操作，但是定时器多了不但影响性能还会出现不精准的情况
 **为什么`setTimeout`不精准?**
* 事件循环机制：`JavaScript` 是单线程的，通过事件循环来处理异步任务。当你调用 `setTimeout` 时，指定的回调函数会被加入到任务队列中，而不是立即执行。因此，实际调用的时间会受到事件循环中其他任务的影响。
* 最小时间限制：在某些情况下，浏览器会对 `setTimeout` 设定的时间进行限制，特别是当时间小于 4 毫秒时，浏览器可能会将其视为 4 毫秒。这意味着即使你设置了 1 毫秒，实际延迟也可能为 4 毫秒。
* 负载压力：如果主线程上有其他较重的处理任务，比如 `DOM` 操作或其他复杂的计算，`setTimeout` 的回调函数可能会被推迟执行。因此，实际执行时间可能比预期更长。 

### Promise
`Promise` 是 JavaScript 中用于处理异步操作的对象,它代表一个可能在未来某个时间点完成的操作及其结果,也避免了回调地狱的问题。
Promise有三种状态
* Pending（等待中）：初始状态，既不是成功，也不是失败。
* Fulfilled（已兑现）：操作成功完成，Promise 被解决（resolved）。
* Rejected（已拒绝）：操作失败，Promise 被拒绝（rejected）。
:::warning 注意
这些状态的变化是不可逆的，一旦从 Pending 状态转换为 Fulfilled 或 Rejected，就不会再改变。
:::

```javascript
// 创建 Promise
const myPromise = new Promise((resolve, reject) => {
  // 异步操作
  const success = true; // 模拟成功或失败
  if (success) {
      resolve('操作成功！'); // 兑现
  } else {
      reject('操作失败！'); // 拒绝
  }
});

// 使用 Promise： Promise 提供了 .then() 和 .catch() 方法来处理结果和错误。
myPromise
  .then(result => {
      console.log(result); // 输出：操作成功！
  })
  .catch(error => {
      console.error(error);
  });
```

`Promise` 的链式调用
由于 .then() 和 .catch() 方法返回一个新的 Promise，所以我们可以进行链式调用
```javascript
myPromise
  .then(result => {
    console.log(result); // 输出：操作成功！
    return '下一个成功结果';
  })
  .then(nextResult => {
    console.log(nextResult); // 输出：下一个成功结果
  })
  .catch(error => {
    console.error(error);
  });
```

`Promise.all() 和 Promise.race()`

`Promise.all()`：接收一个 `Promise` 数组，返回一个新的 `Promise`，该 `Promise` 在所有传入的 `Promise` 都成功时解决，或在任意一个 `Promise` 被拒绝时拒绝。
```javascript
Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results); // 所有 Promise 成功的结果
    })
    .catch(error => {
        console.error(error); // 任意一个 Promise 失败的错误
    });
```

`Promise.race()`：接收一个 `Promise` 数组，返回一个新的 `Promise`，该 `Promise` 在第一个传入的 `Promise` 解决或拒绝时解决或拒绝。
```javascript
Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log(result); // 第一个解决的 Promise 的结果
    })
    .catch(error => {
        console.error(error); // 第一个被拒绝的 Promise 的错误
    });
```