---
sidebar: auto
---

# Html试题

## 行内元素和块级元素
1)行内元素
```html
<span>、<a>、<b>、<strong>、<img>、<input>、<textarea>、<select>、<em>、<del>
```
2)块级元素
```html
<address>、<center>、<h1>~<h6>、<p>、<pre>、<ul>、<ol>、<dl>、<table>、<div>、<form>
```

## html5新特性
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

## 空元素

::: tip
  既没有内容的HTML元素，例如： br、meta、hr、link、input、img
:::

## 初始化css样式原因

**1 浏览器差异**
不同浏览器对有些标签的默认值是不同的，如果没有对css进行初始化会出现浏览器之间的页面显示差异
**2 提高编码质量**
如果不初始化，整个页面做完会很糟糕，重复的css样式很多。
**3 支持不同的 CSS 框架**
当使用 CSS 框架（如 Bootstrap、Foundation 等）时，初始化样式有助于避免框架与浏览器默认样式之间的冲突，确保框架元素按照预期的样式展示
**4 提高响应式设计的灵活性**
当使用 CSS 媒体查询进行响应式设计时，初始化样式可以帮助确保在不同的视口下，元素的外观不会受到浏览器默认样式的影响，使得设计更具灵活性。


# CSS系列
## BFC
::: tip
BFC全称`Block Formatting Context` ,中文为 “块级格式化上下文”。
流体特性：块级水平元素，如div元素（下同），在默认情况下（非浮动，绝对定位等），水平方向会自动填满外部的容器。
BFC元素特性表现原则是，内部子元素不会影响外部的元素。
:::
**BFC的应用**
* 清除浮动：父元素设置overflow: hidden触发BFC实现清除浮动，防止父元素高度塌陷，后面的元素被覆盖，实现文字环绕等等。
* 消除相邻元素垂直方向的边距重叠：第二个子元素套一层，并设置overflow: hidden，构建BFC使其不影响外部元素。
* 消除父子元素边距重叠，父元素设置overflow: hidden

**触发BFC的方式**
1、float 不为 none，浮动元素所在的区域就是一个 BFC 区域。
2、position 的值不是 static 或 relative 的元素所在的区域就是一个 BFC 区域
3、display为 table-cell 的表格单元格元素所在的区域也是一个 BFC 区域
4、overflow 不为 visible 的元素所在的区域也是一个 BFC 区域

## 弹性布局
::: tip
解决某元素中“子元素”是、的布局方式，为布局提供最大是灵活性。
设为`flex`布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效!!!
display: flex;属性 align-self 定义子元素的位置
:::

## position 属性
* 1 position: relative; 相对定位

* 2 position: absolute; 绝对定位

* 3 position: fixed; 固定定位

* 4 position: static; 默认值

* 5 position: sticky; 粘性定位

* 6 position: inherit; 规定应该从父元素继承position 属性的值

* 7 position: initial 设置该属性为默认值

## 盒子在页面水平垂直居中

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
**方法三：Flexbox**
```html
<div class="container">
    <div class="box">居中盒子</div>
</div>

<style>
  .container {
    display: flex;          /* 使用 Flexbox 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center;    /* 垂直居中 */
    height: 100vh;         /* 设定高度为视口高度 */
  }

  .box {
    width: 200px;
    height: 100px;
    background-color: lightblue;
  }
</style>
```
**方法四：Grid**
```html
<div class="container">
    <div class="box">居中盒子</div>
</div>

<style>
  .container {
    display: grid;           /* 使用 Grid 布局 */
    place-items: center;     /* 同时水平和垂直居中 */
    height: 100vh;          /* 设定高度为视口高度 */
  }

  .box {
    width: 200px;
    height: 100px;
    background-color: lightblue;
  }
</style>
```
**方法五：传统的块级元素对齐**
```html
<div class="container">
    <div class="box">居中盒子</div>
</div>

<style>
  .container {
    display: table;           /* 设定为表格布局 */
    width: 100%;             /* 100% 宽度 */
    height: 100vh;           /* 设定高度为视口高度 */
  }

  .box {
    display: table-cell;      /* 设定为单元格 */
    vertical-align: middle;   /* 垂直居中 */
    text-align: center;       /* 水平居中文本 */
    width: 200px;
    height: 100px;
    margin: 0 auto;          /* 水平居中盒子 */
    background-color: lightblue;
  }
</style>
```

## css选择器优先级顺序

* **ID选择器，如** #box {}
* **类选择器，如** 。box {}
* **属性选择器，如** a[href='baidu.com'] {}
* **伪类选择器，如** :hover {}
* **伪元素选择器，如** ::before {}
* **标签选择器，如** div {}
* **通配选择器，如** * {}
 
## em/px/rem/vh/vw区别

在css单位中，可以分为长度单位、绝对单位

相对长度单位：`em、rem、vw、vh`

绝对长度单位：`px`
### px
px 表示像素，就是呈现在显示器上的一个个小点，每个像素点都是大小相同

**特性：**
* 不随父元素或根元素的字体大小变化而变化，因此在响应式设计中，使用 px 可能会导致适应性差。
* 通常用于精确控制元素的大小和布局。

**使用场景：**
适合需要精确尺寸的场合，如边框、图像尺寸
### em
相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（1em = 16px）
为了减少计算复杂度，使得从像素`（px）`到`em`的换算更加直观，我们需要在`body`选择器中声明`font-size: 62.5%`，使得`em`的值`16px*62.5% = 10px` ,这样`1em`就等于`10px`。
```css 
  body {
    font-size: 62.5%; /* 转换为 10px */
  }
  /* 使用示例 */
  h1 {
    font-size: 2em; /* 20px */
  }
```

**特点：**
* em 的值并不是固定的
* em 会继承父级元素的字体大小
* em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸
* 任意浏览器的默认字体高都是 16px

### rem
`rem` 也是相对单位，但它是相对于根元素（通常是 `<html>`）的字体大小。
为了在开发中可以简化复杂的计算，我们可以简化font-size的转化，我们需要在`html`选择器中声明`font-size: 62.5%`，这样页面中`1rem = 10px,16px = 1.6rem`。
**特点：**
* 1 rem 总是等于根元素的字体大小（通常是 html 元素的 `font-size`），不受父元素影响。
* 使得在整个文档中保持一致性和可预测性。

### vh vw
vw 和 vh 是基于视口（`viewport`）的相对单位。vw表示宽度，vh表示高度，根据窗口的宽高分成`100等份`，`50vw`就是占窗口的一半宽度。同理vh也是一样的道理。
:::warning 注意
在PC端，窗口置的是浏览器的可视区域，在移动端指的就是布局视口
:::

## CSS优化、提高性能的方法有哪些
* 将多个 `CSS` 文件合并为一个文件，以减少` HTTP` 请求次数，提高加载效率。
* 在页面 `<head>` 中将 CSS 文件放在最上面，以确保样式在页面渲染前加载，避免闪烁现象。
* 清理未使用的或空的 CSS 规则，减少文件大小，提高可维护性。
* 避免使用 `CSS` 表达式（如` expression()`），因为它们会影响性能，尤其是在动态计算时。
* 优化选择器，避免层级过深的嵌套选择器，使用简单、高效的选择器以提高匹配速度。
* 充分利用 `CSS` 继承特性，减少重复定义的样式，简化代码量。
* 提取并抽象公共样式，创建共享的类或样式，以减少代码重复。
* 对于值为 `0 `的属性，不必加单位（如 `margin: 0`;），简化代码。
* 对于小于 `1` 的小数，省略小数点前面的 `0`（如 `opacity: .5`;），使代码更简洁。
* 对于小于 `1` 的小数，省略小数点前面的 `0`（如 `opacity: .5`;），使代码更简洁。

## 如何减少重绘和回流
减少重绘`（Repaint）`和回流`（Reflow）`是提高网页性能的重要措施，这两者都是浏览器在渲染页面时必须处理的过程
* 批量`dom`操作，将多个 `DOM` 操作合并在一起，减少浏览器重新计算的次数
* 使用 `DocumentFragment`：在内存中构建 DOM 结构，然后一次性将其插入到文档中，避免多次操作导致的回流
* 避免频繁读取布局信息，避免频繁读取会导致重绘和回流的布局属性（如 `offsetWidth、clientHeight`），可以通过缓存值来减少性能开销。
* 使用 `CSS` 过渡：通过 `CSS` 动画和过渡动画，浏览器可以优化重绘，避免由于 JavaScript 频繁操作导致的性能问题。
* 使用绝对定位或固定定位, 将不影响其他元素的元素设置为绝对定位，这样可以减少回流的计算。
* 减少不必要的 CSS 选择器, 使用简单选择器：复杂的选择器可能导致浏览器在计算时开销更大，尽量使用简单的选择器。
* 使用 `visibility: hidden` 而不是 `display: none：`这样可以避免回流，但会导致重绘。根据具体情况选择最合适的方式。
* 尽量不要使用`table`布局，因为可能很小的一个小改动会造成整个`table`的重新渲染。
* 避免使用css表达式`(expression)`，因为每次调用都会重新计算值（包括加载页面）
