---
sidebar: auto
---
# 99

## Html试题

### 行内元素和块级元素
1)行内元素
```html
<span>、<a>、<b>、<strong>、<img>、<input>、<textarea>、<select>、<em>、<del>
```
2)块级元素
```html
<address>、<center>、<h1>~<h6>、<p>、<pre>、<ul>、<ol>、<dl>、<table>、<div>、<form>
```

### BFC
::: tip
BFC全称`Block Formatting Context` ,中文为 “块级格式化上下文”。
流体特性：块级水平元素，如div元素（下同），在默认情况下（非浮动，绝对定位等），水平方向会自动填满外部的容器。
BFC元素特性表现原则是，内部子元素不会影响外部的元素。
:::

### 弹性布局
::: tip
解决某元素中“子元素”是、的布局方式，为布局提供最大是灵活性。
设为`flex`布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效!!!
display: flex;属性 align-self 定义子元素的位置
:::

### html5新特性
* (1) `canvas`绘图
* (2) `SVG`绘图
* (3) `地理定位`
* (4) `Web Worker`
* **web worker 是运行在后台的JS，独立于其他脚本，不会影响页面的性能**
* (5) `web Storage`
* 1.Cookie技术 **(兼容性好，数据不能超4KB，操作复杂)**
* 2.sessionStorage **(兼容性差，数据8KB，操作简单)**
* 3.localStorage
* (6) `Web Socket`
* **WebSocket协议是基于TCP的一种新的网络协议。它实现了浏览器与服务器全双工（full-duplex）通信————允许服务器主动发送信息给客户端**

### position 属性
* 1 position: relative; 相对定位

* 2 position: absolute; 绝对定位

* 3 position: fixed; 固定定位

* 4 position: static; 默认值

* 5 position: sticky; 粘性定位

* 6 position: inherit; 规定应该从父元素继承position 属性的值

* 7 position: initial 设置该属性为默认值

### 盒子在页面水平垂直居中
**方法一：已知盒子宽高**
```css
  div {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
  }
```

**方法二：盒子未知宽高**
```css
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
```

### css选择器优先级顺序

* **ID选择器，如** #box {}
* **类选择器，如** 。box {}
* **属性选择器，如** a[href='baidu.com'] {}
* **伪类选择器，如** :hover {}
* **伪元素选择器，如** ::before {}
* **标签选择器，如** div {}
* **通配选择器，如** * {}

### 空元素

::: tip
  既没有内容的HTML元素，例如： br、meta、hr、link、input、img
:::

### 初始化css样式原因

**1 浏览器差异**

**不同浏览器对有些标签的默认值是不同的，如果没有对css进行初始化会出现浏览器之间的页面显示差异**

**2 提高编码质量**

**如果不初始化，整个页面做完会很糟糕，重复的css样式很多。**


 