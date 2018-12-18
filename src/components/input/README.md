- [**zent**](https://youzan.github.io/zent/zh/component/input) 中输入框的 `initSelectionStart` 和 `initSelectionEnd` 两个属性需要设置 `autoFocus` 和 `autoSelect` 才能生效. 我觉得这种设定比较累赘. 既然用户设置了开始时选中的起止位置, 说明用户就是想这个输入框的内容被自动选中, 否则这个设置毫无意义. 因此, 在`shiye-ui`的输入框中, 只要设置了这两个属性, 就将输入框中的文本按照这个位置进行选中

- zent 的 textarea 在设置了 `autoSize` 之后, 是无法通过拖动右下角的三角形来改变大小的. 看zent的代码, 是使用了一个`autoSize`的第三方包来做这个. 我觉得既然无法拖动改大小, 就不应该给用户看到右下角的三角形. 所以在`shiye-ui`中, 设置了autoSize 之后, 把 textarea 的 autoSize 值设置成`'none'`, 避免误导用户.
