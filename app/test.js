"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var main = document.getElementById("main");
var mains = main.getElementsByTagName("li");

var _loop = function _loop(i) {
    mains[i].onclick = function (event) {
        // li = this;
        this.style.background = "red";
        //  setTimeout("li.parentNode.removeChild(li)",2000)
        console.log(i);
    };
};

for (var i = 0; i < mains.length; i++) {
    _loop(i);
}
//let  不允许变量提升
var PI = 3.1415;
//const  只读不允许重新声明

var foo = 1,
    bar = 2,
    baz = 3;

console.log(foo);
var _ref = ["foo", "bar", "baz"],
    third = _ref[2];

console.log(third);
var _ref2 = [1, 2, 3],
    x = _ref2[0],
    y = _ref2[2];

console.log(y);
var head = 1,
    tial = [2, 3, 4];

console.log(tial, head);

var _ref3 = ['a'],
    x1 = _ref3[0],
    y1 = _ref3[1],
    z1 = _ref3.slice(2);

console.log(x1);
console.log(y1);
console.log(z1);
var _foos$bars = { foos: "aaa", bars: "bbb" },
    bars = _foos$bars.bars,
    foos = _foos$bars.foos;

console.log(foos);
var _foo$bazs = { foo: "aaa", bazs: "bbb" },
    bazs = _foo$bazs.bazs;

console.log(bazs);

var _hello = "hello",
    _hello2 = _slicedToArray(_hello, 5),
    a = _hello2[0],
    b = _hello2[1],
    c = _hello2[2],
    d = _hello2[3],
    e = _hello2[4];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
//变量结构的用途
//1.交换变量的值

//2.从函数返回多个值
//函数只能返回一个值，如果要返回多个值，只能将他们放在数组或对象中返回。
var _ref4 = [y, x];
x = _ref4[0];
y = _ref4[1];
function exp() {
    return [1, 2, 3];
}

var _exp = exp(),
    _exp2 = _slicedToArray(_exp, 3),
    cx1 = _exp2[0],
    cx2 = _exp2[1],
    cx3 = _exp2[2];

console.log(cx1);
console.log(cx2);

function exp2() {
    return {
        foos: 1,
        bars: 2
    };
}

var _exp3 = exp2(),
    foos = _exp3.foos,
    bars = _exp3.bars;

console.log(foos);
console.log(bars);

//3.提取json数据
var jsonData = {
    "staff": [{ "name": '张三', "age": 6 }, { "name": '李四', "age": 7 }]
};
for (var i = 0; i < jsonData.staff.length; i++) {
    var _jsonData$staff$i = jsonData.staff[i],
        name = _jsonData$staff$i.name,
        age = _jsonData$staff$i.age;

    console.log(name, age);
}
//4.遍历map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        console.log(key + ' is ' + value);
    }
    //如果只想获取键名，或者只想获取键值，可以写成下面这样
    // 获取键名
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 1),
            key = _step2$value[0];

        console.log(key);
    }
    // 获取键值
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            value = _step3$value[1];

        console.log(value);
    }
    //字符串拓展
    //传统上JavaScript只有indexof方法，可以来确定一个字符串是否包含在另一个字符串中.es6提供了三种方法：
    //includes(): 返回布尔值，表示是否找到参数值
    //startsWidth():返回布尔值，表示参数字符串是否在源字符串的头部
    //endsWidth(): 返回布尔值，表示参数字符串是否在源字符串的尾部
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var ss = 'hello world';
console.log(ss.startsWith('hello'));
console.log(ss.endsWith('!'));
console.log(ss.includes('o'));
//这三个方法都支持第二个参数，表示开始搜索的位置
console.log(ss.startsWith("world", 6));
console.log(ss.endsWith('!', 0));
console.log(ss.includes('l', 8));
//repeat() 此方法返回一个新字符串，表示将原字符串重复N次
console.log('x'.repeat(3));
console.log('hello'.repeat(2));
console.log('na'.repeat(0));
//es6 将全局方法parseInt()和parseFloat()， 移植到Number对象上面，行为完全保持不变
//es5的写法
console.log(parseInt('12.5'));
console.log(parseFloat('12.346#'));
//es6
console.log(Number.parseInt('12.5'));
console.log(Number.parseFloat('12.566$'));
//Number.isInteger()用来判断是否为整数
//在JavaScript内部，整数和浮动点数是同样的储存方式，所有3和3.0被视为同一个值
console.log(Number.isInteger(33));
console.log(Number.isInteger(23.5));
console.log(Number.isInteger(3.0));
console.log(Number.isInteger('sss'));
//Math.trunc()，此方法用于一个数的小数部分，返回整数部分
console.log(Math.trunc(3.5));
console.log(Math.trunc(-4.53));
console.log(Math.trunc(4));
//此方法也可用于将字符串数字转换为数字类型
console.log(Math.trunc('12.3'));
//Math.sign() 来判断一个数到底是正数、负数还是零
//它会返回5种值
//参数为正数 返回为+1
//参数为负数 返回为-1
//参数为0 返回为0
//参数为-0 返回为-0
// 参宿为其他 返回为NaN
console.log(Math.sign(-5));
console.log(Math.sign(2));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign('ss'));
//正则表达式
//新增了y修饰符 除了u修饰符,es6还添加了y修饰符叫做“粘连”修饰符
//y修饰符的作用和g修饰符类似，也是全局匹配，后一次匹配都是从上一次匹配成功的下一个位置开始
//不同之处在于，g修饰符只要剩余位置中存在配件即可
//而y修饰符确保匹配必须从剩余位置的第一个开始匹配，这也就是“粘连”的意义

//Array.from() 转化为真正的数组
var arraylike = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: 3
    //es5的写法
};var arr1 = [].slice.call(arraylike);
console.log(arr1);
//es6的写法
var arr2 = Array.from(arraylike);
console.log(arr2);
//先理解下箭头函数
var reflect = function reflect(value) {
    return value;
};
//等同于
var reflect = function reflect(value) {
    return value;
};
//传两个参数
var sum = function sum(num1, num2) {
    return num1 + num2;
};
//等同于
var sum = function sum(num1, num2) {
    return num1 + num2;
};
//如果不需要穿参

var sum = function sum() {
    return 1 + 2;
};

//等同于
var sum = function sum() {
    return 1 + 2;
};
//若使用标准的函数体，或者函数体内有更多的语句要执行，则要用大括号将函数体括起来，并明确定义返回值
var sum = function sum(num1, num2) {
    return num1 + num2;
};
//大括号内的部分基本等同于传统函数，除了arguments参数不可用外
//因为大括号是函数主体的标志，而箭头函数若要返回自定义对象的话，就必须用小括号把该对象括起来先
var getTem = function getTem(id) {
    return {
        id: id,
        name: '22'
    };
};
//等同于
var getTem = function getTem(id) {
    return {
        id: id,
        name: '22'
    };
};
var page = {
    id: '1234',
    init: function init() {
        document.addEventListener("click", function (event) {
            this.doSomething(event.type);
        }.bind(this), false);
    },
    doSomething: function doSomething(type) {
        console.log("list" + type + 'for in ' + this.id);
    }
    //可改为
};var page = {
    id: '1234',
    init: function init() {
        var _this = this;

        document.addEventListener('click', function (e) {
            return _this.doSomething(e.type);
        }, false);
    },
    doSomething: function doSomething(type) {
        console.log("list" + type + 'for in ' + this.id);
    }

    //Array.from()还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理的值放入返回的数组
};console.log(Array.from(arraylike, function (x) {
    return x * x;
}));
//等同于
//Array.from(arraylike).map(x=>x*x);
console.log(Array.from([1, 2, 4], function (x) {
    return x * x;
}));

//Array.of() 可以将一组值 直接转化为数组
console.log(Array.of(1, 2, 3));
//数组实例的copyWithin()
//数组实例的方法copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
//也就是说，使用这个方法会修改当前数组
//Array.prototype.copywithin(target,start =0, end = this.length);
//它接收三个参数
// target(必需) 从该位置替换数据
//start(可选) 从该位置开始读取数据，默认为0，如果为负数 表示倒数
// end(可选)  到该位置前停止读取数据，默认等于数组长度，如果为负数 表示倒数
//这三个参数都应该是数值，如果不是，会自动转为数值
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
//上面代码从3号位直到数组结束的成员（4,5），复制到从0开始的位置，结果覆盖了原来的1,2
//find()和findIndex()  数组实例的find方法，用于找出第一个符合条件的数组成员，他的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回为true的成员，然后返回该成员，如果没有符合条件的，则返回undefined
console.log([1, 4, 5, 6, -5].find(function (n) {
    return n < 0;
}));
//数组实例的findIndex的方法和find方法类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合则返回-1
console.log([1, 5, 14, 15].findIndex(function (vlaue, index, err) {
    return vlaue > 9;
}));
//改成箭头函数写法
console.log([1, 5, 14, 15].findIndex(function (value, index, err) {
    return value > 9;
}));
//数组实例的fill() fill方法使用给定值，填充一个数组
console.log(['a', 'b', 'c'].fill(7));
//从上面的输出可以看出，fill方法用于数组的初始化非常方便，数组中已有的元素会被全部抹去
//fill方法还可以接受第二个参数和第三个参数，用于指定填充的起始位置和结束位置
console.log(['a', 'b', 'c', 'd'].fill(1, 3, 4));
//数组实例的entries(),keys()和values()
//都是用于数组遍历，他们都返回一个遍历器对象（也就是iterator ）, 可以用for...of 循环进行遍历，唯一的区别就是keys()是对键名的遍历，values()是对键值的遍历，entries()是对键值对的遍历
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = ['a', 'b'].keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var index = _step4.value;

        console.log(index);
    }
    // for (let elem of ['a', 'b'].values()) {
    //     console.log(elem);
    // }
    //现在支持values()这一方法的浏览器并不多， chrome 现在是不支持的
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
    for (var _iterator5 = ['a', 'b'].entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _index = _step5.value;

        console.log(_index);
    }
} catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
        }
    } finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}