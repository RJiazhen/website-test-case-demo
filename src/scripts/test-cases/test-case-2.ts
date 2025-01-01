import { autoRun } from '../decorator/index.js';
import { sleep } from '../utils/sleep.js';

@autoRun
class testCase2 {
  async page2() {
    console.log('测试用例2在page2中开始执行');
    await sleep(1000);
    const input = document.querySelector('input');
    if (!input) return;

    input.value = '测试用例2在page2中执行了';

    await sleep(1000);
    input.value = '3秒后跳转到page1';

    await sleep(3000);
    // 跳转到page3，并且带上当前所有的页面参数
    window.location.href = 'page1.html' + window.location.search;
  }

  async page1() {
    await sleep(1000);
    const input = document.querySelector('input');
    if (!input) return;

    input.value = '测试用例2在page1中执行了';

    await sleep(1000);
    input.value = '3秒后，测试用例1执行完成';

    await sleep(3000);
    input.value = '测试用例2执行完成了';
  }
}
