# BUG

## 兼容

- [iOS 安全区问题](https://jelly.jd.com/article/6006b1055b6c6a01506c87fd)
- input、textarea 问题：

  | 机型 | 问题 | 解决方案 |
  | --- | --- | --- |
  | iPhone XR | 前置条件 input 设置 **disabled** ，当 textarea 聚焦弹出键盘时，点击已经禁用的 input ，textarea 不会失焦（键盘不会收起） | 使用 view 组件 input |
