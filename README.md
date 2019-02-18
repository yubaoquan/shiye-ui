## shiye-ui

一个失业人员开发的桌面端UI库, 基于React

### 缘起

> 面试官: 没有开发过组件库?

> 我: 没有 orz

为什么早没想到做一个组件库呢!!!

现在做也不晚. 视觉和交互大致抄 [**zent**](https://youzan.github.io/zent/), 细节稍加调整

### 进度
- done Button组件;
- done Icon组件弄了几个最简单的;
- done Layout
- done postcss (暂时加个 autoprefixer 功能)
- done Input
- done Notify
- done Pop
- done SweetAlert
- building... Form 及其依赖的组件
  - Form.InputField

### 与 zent 的差别

1. SweetAlert
- zent 里有一个组件叫做 `Sweetalert`, 其实就是个模态框. 用 google 翻译了一下, 翻译不出来. 这表明 Sweetalert 并不是一个英文单词. 猜测是Sweet和Alert两个单词合并起来组成的名称. 既然是两个单词, 就应该驼峰一下. 所以在我的组件库中, 将这个组件命名为 `SweetAlert` (感觉这个名字也怪怪的)
- zent 中如果在一个 Sweetalert组件的逻辑中唤起另一个Sweetalert, 两个 Sweetalert 实例的遮罩会重叠在一起, 如果页面中生成的 Sweetalert 实例足够多 (当然这种交互设计不是很好), 最后整个屏幕被遮罩的部分就变成完全黑色的. 因此我将SweetAlert设计成多个实例公用同一个遮罩, 这样不管生成多少个 SweetAlert 实例, 遮罩层始终是同一个.

2.
### 效果/进度截图

![总进度图](./images/total-progress.min.jpg)
