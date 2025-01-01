import { autoTest } from '../decorator/index.js';
import { sleep } from '../utils/sleep.js';

@autoTest
class testCase1 {
  async page1() {
    // test case 2
    console.log('测试用例1从page1中开始执行');
    await sleep(1000);

    const input = document.querySelector('input');
    if (!input) return;
    input.value = '测试用例1在page1中执行了';

    await sleep(1000);
    input.value = '3秒后跳转到page2';

    await sleep(3000);
    // 跳转到page2，并且带上当前所有的页面参数
    window.location.href = 'page2.html' + window.location.search;
  }

  async page2() {
    await sleep(1000);
    const input = document.querySelector('input');
    if (!input) return;

    input.value = '测试用例1在page2中执行了';

    await sleep(1000);

    input.value = '3秒后跳转到page3';

    await sleep(3000);

    // 跳转到page3，并且带上当前所有的页面参数
    window.location.href = 'page3.html' + window.location.search;
  }

  async page3() {
    await sleep(1000);

    const input = document.querySelector('input');
    if (!input) return;

    input.value = '测试用例1在page3中执行了';

    await sleep(1000);
    input.value = '3秒后，测试用例1执行完成';

    await sleep(3000);

    input.value = '测试用例1执行完成了';
    console.log('测试用例1执行完成了');
  }
}
