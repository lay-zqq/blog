---
sidebar: auto
---
# SASS的知识点

## SASS的基本概念 

`SASS`是一种预处理器脚本语言，它扩展了`CSS`，使其具有更强的功能和更简洁的语法。`SASS`文件通常以 `.sass` 或 `.scss` 为扩展名。`SASS`代码需要通过编译器转换成标准的`CSS`代码，浏览器才能理解和应用。

参考文档和链接地址：
* [SASS官网](https://sass-lang.com/documentation/)
* [SASS Playground](https://www.sassmeister.com/)

## 安装

1. 使用 npm 安装（推荐）
1.1 全局安装
通过 npm（Node Package Manager）全局安装 SASS，这样可以在任何项目中使用 sass 命令。
```sh
$ npm install -g sass
```
1.2 本地安装
你也可以在项目中本地安装 SASS，这样可以确保每个项目使用不同版本的 SASS。
```sh
$ npm install --save-dev sass
```
安装完成后，你可以在项目的 package.json 文件中添加脚本来运行 SASS：
```json
// dev为本地开发命令，--watch是监听文件变化，自动编译
// build为正式打包命令，--style为打包风格，compressed为压缩模式，expanded为展开模式
{
  "scripts": {
    "dev-css": "npx sass index.scss output.css --watch",
    "build-css": "npx sass index.scss index.css --style=compressed"
  }
}
```
然后通过 npm 脚本运行：

```sh
$ npm run dev-css
$ npm run build-css
```
 
 ## SASS的优势

  * 模块化：通过变量、混合和继承，SASS使CSS代码更加模块化和可重用。
  * 维护性：嵌套和变量使代码更易读、更易维护。
  * 兼容性：SCSS语法完全兼容CSS，你可以逐步将CSS代码迁移到SASS。
  * 社区支持：SASS有一个活跃的社区，提供了大量的工具和库，如Compass、Bourbon等

  ## SASS 语法

  SASS支持两种语法
  `SASS`语法：使用缩进表示层级关系，文件扩展名为 .sass。
  ```scss
  // .sass缩进语法：无括号，无分号，只有缩进和换行
  .box
    div
      color: #333333
      padding: 20px
  ```

  `SCSS`语法：与CSS语法几乎完全相同，使用花括号和分号，文件扩展名为 .scss。
  ```scss
  // .scss 有括号，有分号，个人比较喜欢这种
  .box {
    div {
      color: #333333;
      padding: 20px;
    }
  }
  ```
  个人比较喜欢有括号有分号这种形式，在写嵌套样式的时候方便排查问题，根据个人的喜好选择，差别不大

  ## 基本语法

  ### 变量
  `SASS`允许你使用变量来存储`CSS`值，这样可以避免重复和方便修改。变量以美元符号 `$` 开头
  ```scss 
  $primary-color: #333;
  $font-stack: Helvetica, sans-serif;

  body {
    color: $primary-color;
    font-family: $font-stack;
  }
  ```

  ### 嵌套
  SASS支持嵌套，使CSS的层级关系更加清晰和易读。
  ```scss
    nav {
      padding: 10px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: inline-block;

        a {
          text-decoration: none;
          color: $primary-color;
        }
      }
    }
  } 
  ```
  编译结果为：
  ```scss
  nav {
    padding: 10px;
  }
  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  nav ul li {
    display: inline-block;
  }
  nav ul li a {
    text-decoration: none;
    color: $primary-color;
  }
  ```
### 混合（Mixins

混合允许你定义可重用的CSS代码块，可以带参数。使用 @mixin 定义混合，使用 @include 引用混合。
```scss
// 通过minxin 定义通用的代码块
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}
// 使用include 引用定义的代码块 可以减少页面的css重复样式
.box { 
  @include border-radius(10px); 
}
```
### 组合选择器(父级选择器)

在 `SCSS 中`，组合选择器 `&` 是一个非常强大的特性，它允许你在嵌套规则中引用父级选择器。这使得编写复杂的 `CSS` 变得更加简洁和直观。它使用`&`代表外层的父级选择器
```scss
  .box {
    &:hover {
      color: darkblue;
    }

    &:active {
      color: navy;
    }
    &::after {
      content: '',
      display: inline-block;
      width: 100px;
      height: 10px;
    }
    &__content {
      width: 100px;
      height: 100px;
      &_title {
        color: #333;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
```
编译生成
```scss
.box:hover {
  color: darkblue;
}
.box:active {
  color: navy;
}
.box::after {
  content: '',
  display: inline-block;
  width: 100px;
  height: 10px;
}
.box__content {
  width: 100px;
  height: 100px;
}
.box__content_title {
  color: #333;
  font-weight: 600;
  font-size: 16px;
}
```
### 继承样式也称（占位符选择器%）
`SASS`支持继承，使一个选择器可以继承另一个选择器的样式。使用 `@extend` 实现继承。
需要使用这个样式就使用`@extend`引用，不需要的时候这块代码也不会编译到最终的css样式中

```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
// 引用，占位符代码编译到最终的css样式里面
.message {
  @extend %message-shared;
  background-color: #f0f0f0;
}
// 不引用，占位符代码不会编译到css样式里面
.success { 
  border-color: green;
}
```

### 运算

`SASS`支持数学运算，可以在CSS中进行加减乘除等操作。
::: tip
 `CSS3` 的 `calc()` 函数允许我们在属性值中执行数学计算操作。`calc()`可以使用`+、-、*`和`/`数学运算符，但它们在使用方法上有所不同。 加法`(+)`和减法`(-)`要求这两个数都是长度。
:::

```scss
.container {
  width: 100%;
}

aside {
  width: 300px;
}

main {
  width: calc(100% - 300px);
}
.right {
  margin: calc(30px / 10px);
}
.left {
  padding: calc(10px * 3);
}

```

### 函数

::: tip
`Sass`函数提供了强大的工具来操作颜色、数值、字符串、列表和映射，使你的样式表更具动态性和可维护性。通过组合和自定义这些函数，你可以大大简化你的`CSS`代码，提升开发效率。
:::
**1. 颜色函数**

`lighten($color, $amount)` 使颜色变亮。
```scss
$base-color: #ff5500;
.lighten-example {
  width: 100px;
  height: 100px;
  background: lighten($base-color, 20%);
}
``` 
这是没有使用`lighten`前的图片效果

![alt text](./image/linghten-black.png)

这是执行`lighten`之后的效果图

![alt text](./image/linghten-active.png)

`darken($color, $amount)` 使颜色变暗。
```scss
$base-color: #ff5500;
.darken-example {
  width: 100px;
  height: 100px;
  background: darken($base-color, 20%);
}
``` 
这是执行`darken`之后的效果图

![alt text](./image/darken.png)

`rgba($color, $alpha)` 设置颜色的透明度。
```scss
$base-color: #ff5500;
.rgba-example {
  width: 100px;
  height: 100px;
  background: rgba($base-color, 0.5);
}
``` 
这是执行`rgba`之后的效果图

![alt text](./image/rgba.png)

**2. 数学函数**
`percentage($value)` 将一个数值转换为百分比。
```scss
$decimal: 0.5;
.percentage-example {
  width: percentage($decimal);
}
```
`round($number)` 对数值进行四舍五入。
```scss
$number: 1.5;
.round-example {
  width: round($number) * 1rem;
}
```

**3. 字符串函数**

`quote($string)` 将字符串包裹在引号中。
```scss
$unquoted-string: hello;
.quote-example {
  content: quote($unquoted-string);
}
```
`unquote($string)` 移除字符串中的引号。
```scss
$unquote-string: hello;
.quote-example {
  content: unquote($unquote-string);
}
```

**4. 列表函数**

`length($list)` 返回列表的长度。
```scss
$list: 1px solid red;
.length-example {
  content: length($list);
}

// 编译后的结果
.length-example {
  content: 3;
}
```

`nth($list, $n)` 返回列表中第n个元素。
```scss
$list: 1px solid red;
.nth-example {
  border: nth($list, 2);
}

// 编译后的结果
.nth-example {
  border: solid;
}
```

**5. 映射（Map）函数**

`map-get($map, $key)` 从映射中获取值。

```scss
$map: (key1: 'name', key2: 'age');
.map-get-example {
  content: map-get($map, key1);
}
// 编译后的结果
.map-get-example {
  content: 'name';
}
```

**6. 内置函数组合**

可以多个函数组合使用，例如：
```scss
$base-color: #333;
.combined-example {
  color: lighten(rgba($base-color, 0.5), 20%);
}
```

**7. 自定义函数**

你还可以定义自己的 `Sass`函数，使用`@function`指令。例如：

```scss
@function double($number) {
  @return $number * 2;
}

.custom-function-example {
  width: double(10px);
}
```

