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

 