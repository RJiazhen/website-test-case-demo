"use strict";
const main = () => {
    // 获取当前页面url中的testCase，然后加载对应的js文件并执行
    const testCase = new URLSearchParams(window.location.search).get('testCase');
    const scriptUrl = `../scripts/test-cases/${testCase}.js`;
    console.log('当前要加载的测试用例脚本是：' + scriptUrl);
    if (testCase) {
        import(scriptUrl);
    }
};
main();
