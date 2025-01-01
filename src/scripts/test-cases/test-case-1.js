var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { autoTest } from '../decorator/index.js';
import { sleep } from '../utils/sleep.js';
let testCase1 = (() => {
    let _classDecorators = [autoTest];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var testCase1 = _classThis = class {
        page1() {
            return __awaiter(this, void 0, void 0, function* () {
                // test case 2
                console.log('测试用例1从page1中开始执行');
                yield sleep(1000);
                const input = document.querySelector('input');
                if (!input)
                    return;
                input.value = '测试用例1在page1中执行了';
                yield sleep(1000);
                input.value = '3秒后跳转到page2';
                yield sleep(3000);
                // 跳转到page2，并且带上当前所有的页面参数
                window.location.href = 'page2.html' + window.location.search;
            });
        }
        page2() {
            return __awaiter(this, void 0, void 0, function* () {
                yield sleep(1000);
                const input = document.querySelector('input');
                if (!input)
                    return;
                input.value = '测试用例1在page2中执行了';
                yield sleep(1000);
                input.value = '3秒后跳转到page3';
                yield sleep(3000);
                // 跳转到page3，并且带上当前所有的页面参数
                window.location.href = 'page3.html' + window.location.search;
            });
        }
        page3() {
            return __awaiter(this, void 0, void 0, function* () {
                yield sleep(1000);
                const input = document.querySelector('input');
                if (!input)
                    return;
                input.value = '测试用例1在page3中执行了';
                yield sleep(1000);
                input.value = '3秒后，测试用例1执行完成';
                yield sleep(3000);
                input.value = '测试用例1执行完成了';
                console.log('测试用例1执行完成了');
            });
        }
    };
    __setFunctionName(_classThis, "testCase1");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        testCase1 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return testCase1 = _classThis;
})();
