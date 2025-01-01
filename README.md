# website-test-case-demo

一个网页测试用例维护实现的示例

## 快速启动

使用VScode打开该项目，然后使用VScode自带的live-preview功能或其他插件启动服务器。

以启动的端口是3000为例，访问http://127.0.0.1:3000/src/pages/page1.html?testCase=test-case-1，即可看到测试用例1开始执行，并且在控制台打印相关内容

将内容替换为`testCase`参数替换为`test-case-2`，即可看到测试用例2开始执行，并且在控制台打印相关内容

## 测试用例编写

请先使用以下命令全局安装`typescript`

```bash
npm install -g typescript
```

然后在根目录下执行以下命令，启动ts自动编译

```bash
tsc -w
```

然后参考`src\scripts\test-cases\test-case-1.ts`文件，进行测试用例的编写

测试用例的编写需要注意以下各点：
- 必须使用`@autoTest`装饰器进行装饰；
- 想要在对应页面执行相关的方法，就必须有对应的方法，例如想要在`page1`页面执行相关方法，就必须有`page1`方法；

然后，如果需要执行自己编写的用例，就在页面的访问链接中添加对应的`testCase`参数，例如`http://127.0.0.1:3000/src/pages/page1.html?testCase=test-case-1`，就代表在`page1`页面执行`test-case-1`测试用例；

## 新增测试页面

在`src\pages`目录下新增对应的页面文件，例如`page2.html`，然后必须添加以下代码，以引入脚本入口文件：

```html
<script src="../scripts/index.js"></script>
```

## 项目结构

```bash
website-test-case-demo
├─ .gitattributes
├─ README.md                项目文档
├─ src                      源代码
│  ├─ pages                 页面文件
│  └─ scripts               脚本文件
│     ├─ decorator          装饰器
│     ├─ index.js
│     ├─ index.ts           脚本入口
│     ├─ test-cases         测试用例
│     │  ├─ test-case-1.js
│     │  ├─ test-case-1.ts  测试用例-1
│     │  ├─ test-case-2.js
│     │  └─ test-case-2.ts  测试用例-2
│     └─ utils              通用方法
└─ tsconfig.json

```



