/**
 * 装饰器
 * @author: Ruan Jiazhen
 * @date: 2025-01-01 16:37:45
 **/
/** 自动执行测试用例的类装饰器 */
export const autoRun = (constructor) => {
    var _a;
    // 检查当前页面url中的页面地址，执行对应的方法
    const pageName = (_a = window.location.pathname
        .split('/')
        .pop()) === null || _a === void 0 ? void 0 : _a.replace('.html', '');
    if (!pageName)
        return;
    const func = constructor.prototype[pageName];
    if (func) {
        func();
        return;
    }
    throw new Error(`测试用例${constructor.name}中未找到在页面${pageName}中需要执行的测试方法`);
};
