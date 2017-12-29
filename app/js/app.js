import { setInterval, setTimeout } from "timers";

var main = document.getElementById("main");
var mains = main.getElementsByTagName("li");
for (let i = 0; i < mains.length; i++) {
    mains[i].onclick = function (event){
        // li = this;
        this.style.background = "red";
      //  setTimeout("li.parentNode.removeChild(li)",2000)
        console.log(i);
    }
}
//let  不允许变量提升
const PI = 3.1415;
//const  只读不允许重新声明

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo)
let [, , third] = ["foo", "bar", "baz"];
console.log(third);
let [x, , y] = [1, 2, 3];
console.log(y);
let [head, ...tial] = [1, 2, 3, 4];
console.log(tial, head);
let [x1, y1, ...z1] = ['a']
console.log(x1)
console.log(y1)
console.log(z1)
var { bars, foos } = { foos: "aaa", bars: "bbb" };
console.log(foos)
var { bazs } = { foo: "aaa", bazs: "bbb" };
console.log(bazs)
const [a, b, c, d, e] = "hello";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
//变量结构的用途
//1.交换变量的值
[x, y] = [y, x];
//2.从函数返回多个值
//函数只能返回一个值，如果要返回多个值，只能将他们放在数组或对象中返回。
function exp() {
    return [1, 2, 3]
}
var [cx1, cx2, cx3] = exp();
console.log(cx1);
console.log(cx2)

function exp2() {
    return {
        foos: 1,
        bars: 2
    };
}
var { foos, bars } = exp2();
console.log(foos);
console.log(bars);

//3.提取json数据
var jsonData = {
    "staff": [
        { "name": '张三', "age": 6 },
        { "name": '李四', "age": 7 }
    ]
}
for (let i = 0; i < jsonData.staff.length; i++) {
    let { name, age } = jsonData.staff[i];
    console.log(name, age)
}
//4.遍历map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + ' is ' + value)
}
//如果只想获取键名，或者只想获取键值，可以写成下面这样
// 获取键名
for (let [key] of map) {
    console.log(key)
}
// 获取键值
for (let [, value] of map) {
    console.log(value)
}
//字符串拓展
//传统上JavaScript只有indexof方法，可以来确定一个字符串是否包含在另一个字符串中.es6提供了三种方法：
//includes(): 返回布尔值，表示是否找到参数值
//startsWidth():返回布尔值，表示参数字符串是否在源字符串的头部
//endsWidth(): 返回布尔值，表示参数字符串是否在源字符串的尾部
var ss = 'hello world';
console.log(ss.startsWith('hello'))
console.log(ss.endsWith('!'))
console.log(ss.includes('o'))
//这三个方法都支持第二个参数，表示开始搜索的位置
console.log(ss.startsWith("world",6))
console.log(ss.endsWith('!',0))
console.log(ss.includes('l',8))
//repeat() 此方法返回一个新字符串，表示将原字符串重复N次
console.log('x'.repeat(3))
console.log('hello'.repeat(2))
console.log('na'.repeat(0))
//es6 将全局方法parseInt()和parseFloat()， 移植到Number对象上面，行为完全保持不变
//es5的写法
console.log(parseInt('12.5'))
console.log(parseFloat('12.346#'))
//es6
console.log(Number.parseInt('12.5'))
console.log(Number.parseFloat('12.566$'))
//Number.isInteger()用来判断是否为整数
//在JavaScript内部，整数和浮动点数是同样的储存方式，所有3和3.0被视为同一个值
console.log(Number.isInteger(33));
console.log(Number.isInteger(23.5));
console.log(Number.isInteger(3.0));
console.log(Number.isInteger('sss'))
//Math.trunc()，此方法用于一个数的小数部分，返回整数部分
console.log(Math.trunc(3.5));
console.log(Math.trunc(-4.53));
console.log(Math.trunc(4));
//此方法也可用于将字符串数字转换为数字类型
console.log(Math.trunc('12.3'))
//Math.sign() 来判断一个数到底是正数、负数还是零
//它会返回5种值
//参数为正数 返回为+1
//参数为负数 返回为-1
//参数为0 返回为0
//参数为-0 返回为-0
// 参宿为其他 返回为NaN
console.log(Math.sign(-5))
console.log(Math.sign(2))
console.log(Math.sign(0))
console.log(Math.sign(-0))
console.log(Math.sign('ss'))
//正则表达式
//新增了y修饰符 除了u修饰符,es6还添加了y修饰符叫做“粘连”修饰符
//y修饰符的作用和g修饰符类似，也是全局匹配，后一次匹配都是从上一次匹配成功的下一个位置开始
//不同之处在于，g修饰符只要剩余位置中存在配件即可
//而y修饰符确保匹配必须从剩余位置的第一个开始匹配，这也就是“粘连”的意义

//Array.from() 转化为真正的数组
let arraylike = {
    '0':1,
    '1':2,
    '2':3,
    length:3
}
//es5的写法
var arr1 = [].slice.call(arraylike);
console.log(arr1)
//es6的写法
var arr2 = Array.from(arraylike);
console.log(arr2)
//先理解下箭头函数
var reflect = value => value
//等同于
var reflect = function(value){
return value
}
//传两个参数
var sum = (num1,num2) => num1+num2;
//等同于
var sum = function(num1,num2){
    return num1+num2
}
//如果不需要穿参

var sum = () => 1+2;

//等同于
var sum = function(){
    return 1+2;
}
//若使用标准的函数体，或者函数体内有更多的语句要执行，则要用大括号将函数体括起来，并明确定义返回值
var sum = (num1,num2) =>{return num1+num2};
//大括号内的部分基本等同于传统函数，除了arguments参数不可用外
//因为大括号是函数主体的标志，而箭头函数若要返回自定义对象的话，就必须用小括号把该对象括起来先
var getTem = id =>({
    id:id,
    name:'22'
});
//等同于
var getTem = function(id){
    return {
        id:id,
        name:'22'
    }
} 
var page ={
    id:'1234',
    init:function(){
        document.addEventListener("click", (function(event) {
            this.doSomething(event.type);
        }).bind(this), false);
    },
    doSomething:function(type){
        console.log("list"+  type + 'for in ' + this.id)
    }
}
//可改为
var page ={
    id:'1234',
    init:function(){
        document.addEventListener('click',
        e =>this.doSomething(e.type),false)
    },
    doSomething:function(type){
        console.log("list"+  type + 'for in ' + this.id)
    }
}

//Array.from()还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理的值放入返回的数组
console.log(Array.from(arraylike,x=>x*x))
//等同于
//Array.from(arraylike).map(x=>x*x);
console.log( Array.from([1,2,4],(x)=>x*x)) 

//Array.of() 可以将一组值 直接转化为数组
console.log(Array.of(1,2,3))
//数组实例的copyWithin()
//数组实例的方法copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
//也就是说，使用这个方法会修改当前数组
//Array.prototype.copywithin(target,start =0, end = this.length);
//它接收三个参数
// target(必需) 从该位置替换数据
//start(可选) 从该位置开始读取数据，默认为0，如果为负数 表示倒数
// end(可选)  到该位置前停止读取数据，默认等于数组长度，如果为负数 表示倒数
//这三个参数都应该是数值，如果不是，会自动转为数值
console.log([1,2,3,4,5].copyWithin(0,3))
//上面代码从3号位直到数组结束的成员（4,5），复制到从0开始的位置，结果覆盖了原来的1,2
//find()和findIndex()  数组实例的find方法，用于找出第一个符合条件的数组成员，他的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回为true的成员，然后返回该成员，如果没有符合条件的，则返回undefined
console.log([1,4,5,6,-5].find((n)=>n<0))
//数组实例的findIndex的方法和find方法类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合则返回-1
console.log([1,5,14,15].findIndex(function(vlaue,index,err){
   return vlaue>9
}))
//改成箭头函数写法
console.log([1,5,14,15].findIndex((value,index,err)=>{return value>9}))
//数组实例的fill() fill方法使用给定值，填充一个数组
console.log(['a','b','c'].fill(7))
//从上面的输出可以看出，fill方法用于数组的初始化非常方便，数组中已有的元素会被全部抹去
//fill方法还可以接受第二个参数和第三个参数，用于指定填充的起始位置和结束位置
console.log(['a','b','c','d'].fill(1,3,4))
//数组实例的entries(),keys()和values()
//都是用于数组遍历，他们都返回一个遍历器对象（也就是iterator ）, 可以用for...of 循环进行遍历，唯一的区别就是keys()是对键名的遍历，values()是对键值的遍历，entries()是对键值对的遍历
for (let index of ['a','b'].keys()) {
    console.log(index)
}
// for (let elem of ['a', 'b'].values()) {
//     console.log(elem);
// }
//现在支持values()这一方法的浏览器并不多， chrome 现在是不支持的
 for (let index of ['a','b'].entries()) {
     console.log(index)
 }
 //r如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历
 let letter = ['a','b','c','d']
 let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']
//数组实例的方法 includes()
//Array.prototype.includes方法返回布尔值 ，表示某个数组是否包含给定的值，与字符串的includes方法类似，该方法属于es7,但Babel转码器已经支持.
console.log([1,2,3].includes(2))
console.log([1,2,3].includes(4))
console.log([1,2,NaN].includes(NaN))
//该方法的第二个参数表示搜索的起始位置，默认值为0。如果第二个参数为负值，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但长度为3）则会重置从0开始。
console.log([1,2,3].includes(3,3));
console.log([1,2,3].includes(3,-1))
//扩展运算符
//扩展运算符用三个点表示，功能是把数组或者类数组对象展开成一系列用逗号隔开的值
var foos = (a,b,c)=>{
    console.log(a)
    console.log(b)
    console.log(c)
}
var arr_1 = [1,2,3];

//将数组arr中的值以参数的形式传递给foo();

//传统写法
foos(arr_1[0],arr_1[1],arr_1[2])


//es6的写法
foos(...arr_1)

//Iterator方法
//Iterator是一种遍历器，是一种接口，为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署Interator接口，就可以完成遍历操作，
//Interator 作用有三个，1、为各种数据结构，提供更简便的、统一的访问接口 2、似的数据结构成员能够按某种次序排列 3、Es6 创造了一种新的遍历 命令 for of 循环，Iterator接口主要供for。。。of 消费
var it = makerierator(['a','b']);
console.log(it.next())//vlaue:"a" done:false  这里 value 是属性值  done 是布尔值 表示遍历是否结束
console.log(it.next())//value:"b" done:false
console.log(it.next())//value:'undefined',done :true

function  makerierator(array){
    var nextIndex = 0;
    return{
        next: function(){
            return nextIndex < array.length ?
            {value: array[nextIndex++]} :
            {done: true};
        }
    }
}
//函数参数的默认值
function fooss({x,y=5}){
    console.log(x,y)
}

 fooss({})
 fooss({x:1})
 fooss({x:1,y:2})

// //es6引入了rest参数（...values），用于获得函数的多余参数，这样就不需要argument对象了，rest的参数搭配是一个数组，该变量将多余的参数放入数组中
function add(...values) {
    let sum = 0;
  
    for (var val of values) {
      sum += val;
    }
  
    return sum;
  }
  

  console.log(add(2, 5, 3)) // 10
//rest 参数之后不能再有其他参数了，即只能是最后一个参数，否则会报错
//    报错
//   function f(a, ...b, c) {
//     // ...
//   }
//函数的length属性不包括rest参数
// (function(a){}).length //1
// (function(...a){}).length //0
// (function(a,...b){}).length //1

//扩展运算符(spread) 是3个点(...),它好比rest参数里的逆运算，将一个数组转为用逗号分隔的参数序列
console.log(...[1,2,3])
console.log(1,...[2,3,4])
console.log([...document.querySelectorAll('li')])
//函数的name

console.log(foos.name)

//箭头函数可以与变量结构结合使用
const full = ({ first, last }) => first + ' ' + last;
//等同于
function fullssss(fisrt,last){
    return person.fisrt+'  ' +person.last
}
//箭头函数使得表达式更简洁
const isEven = n => n%2 ==0;
const square = n => n*n;
//箭头函数的一个作用是简化回调函数
//正常的函数写法
// [1,2,3].map(function(x){
//     return x*x
// })
// //等价于
[1,2,3,4].map(x => x * x);

//另一个例子
//正常的函数写法
var values_1 = [1,3,4,5,6,7];
var result =values_1.sort(function(a,b){
    return a-b
});
//等价于
var result_1 = values_1.sort((a,b)=>a-b);

//rest参数 和箭头函数结合
const num2_22 =  (...nums)=>nums;

console.log(num2_22(1,2,3,4,5,6))
const headAndTail = (head,...tial) => [head,tial]
console.log(headAndTail(1,2,3,4))

//使用箭头函数要注意
//1、 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
//2、不可以当做构造函数，也就是说，不可以使用new命令
//3、不可以使用arguments 对象，该对象在函数体内不存在，可以用rest参数替代
//4、不可以使用yieid命令，因此箭头函数不能作用于generator函数

function foosss(){
    setTimeout(()=>{
        console.log('id '+ this.id)
    },100)
}

var id = 21;
foosss.call({id:42}) //42

function times(){
    this.s1 = 0;
    this.s2 = 0;
    //箭头函数
    setInterval(() => this.s1++, 1000);
}
var timer = new times()
setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => {
    console.log('s2: ' + timer.s2)
}, 3000);

var hander = {
    id:'12345',
    init:function(){
        document.addEventListener('click',event=>this.doSomethings(event.type),false)
    },
    doSomethings:function(type){
    console.log('handing'+ type+ 'for'+ this.id)
    }
}

//prpmise 对象
//为了使异步操作更优雅    对象状态不受外界影响 prpmise对象代表一个异步操作
//有三种状态 ：pending（进行中），resolved（已完成 又叫fulfilled）     和rejected（已失败）
//基本用法
// var promise = new Promise(function(resolve,reject){
//     //...
//     if (/*异步操作成功*/) {
//         res(value)
//     }else{
//         rej(error)
//     }
// })
// resolve,reject 这两个参数是两个函数
//resolve函数的作用是，将promise对象的状态 从未完成变成成功（即从pending变成resolved），在异步操作时调用，并将异步操作结构变为参数传递出去，
//reject函数的作用是，将promise对象的状态 从未完成变成失败（即从pending变成rejected），
//promise实例生成以后，可以用then方法分别制定resolved状态和rejected状态的回调函数
//then方法可以接收两个回调函数作为参数， 第一个回调函数是Promise对象的状态变成resolved时调用，第二个回调函数是promise对象的状态变成rejected时调用。第二个参数是可选的，不一定提供，这两个函数都接受promise对象传出的值作为参数

//基本用法
// Promise.then(function(value){
//     //成功
// },function(error){
//     //失败
// });
//例子

    var ball1=document.querySelector('.ball1');
	    var ball2=document.querySelector('.ball2');
        var ball3=document.querySelector('.ball3');

        function Animate(ball,distance){
			return new Promise((resolve,reject)=>{
							function _animate(){
								setTimeout(()=>{
									var marginLeft=parseInt(ball.style.marginLeft,10)						
									if(marginLeft==distance){
										resolve();
										console.log("resolve")
									}
									else{
										if(marginLeft<distance){
											console.log("+++")
											marginLeft++
										}
										else{
											marginLeft--
										}
									ball.style.marginLeft=marginLeft+'px';
									_animate()
									}
								},13)
							}
				_animate()
			})
        }
        

        Animate(ball1,100)
		.then(()=>Animate(ball2,200))
		.then(()=>Animate(ball3,300))
		.then(()=>Animate(ball3,150))
		.then(()=>Animate(ball2,150))
		.then(()=>Animate(ball1,150))