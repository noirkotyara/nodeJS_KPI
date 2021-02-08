// Комментарий


/* Комментарии
*/


//Включение строгого режима для использования новых конструкций в ущерб совместимости со старым кодом
//Писать это надо в самом начале
"use strict";


//Объявление переменной
let message1 = 'Hello';
//Устаревшее объявление переменной
var message2 = 'Hello';


//let message1 = 2; //let нельзя повторно объявлять, но тип менять можно свободно
var message2 = 2;
console.log(message1);
console.log(message2);


//Имя переменной это буквы, цифры, знаки $ и _. Не может начинаться с цифры
let $ = 1; // объявили переменную с именем "$"
let _ = 2; // а теперь переменную с именем "_"


//Не важно какой при этом язык
let имя = '...';
let 我 = '...';
//num = 3; // С use strict так уже нельзя


//Константа
const myBirthday = '10.01.1998';
//myBirthday = '01.01.2001'; //ошибка


//Константы обычно пишут в верхнем регистре
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
let myColor = COLOR_ORANGE;


//Числа могут быть целыми и с плавающей точкой
let n = 123;
n = 12.345;
n = Infinity;
n = -Infinity;
n = NaN;


//Максимум и минимум для целых чисел. В его пределах всё работает как надо, дальше нет
console.log(9007199254740991);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);


//BigInt
console.log(1234567890123456789012345678901234567890n);
console.log(2323057228911815332926280681959505581722711124489135019110236359240435572489344455788737358856731484905680637561374380910764737402430111742077337982514410000n * 2323057228911815332926280681959505581722711124489135019110236359240435572489344455788737358856731484905680637561374380910764737402430111742077337982514410000n);
//n = 2n + 2; //ошибка, BigInt и Number нельзя смешивать


//Максимум и минимум для чисел с плавающей точкой
console.log(Number.MAX_VALUE);
console.log(1.7976931348623157e+308);
console.log(1.7976931348623157e+308 * 2);
console.log(-1.7976931348623157e+308);
console.log(-1.7976931348623157e+308 * 2);


//Строки
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут' + str + 'dfds';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}. Истинная правда!`;
console.log(str + str2 + phrase);
console.log(`результат: ${1 + 2}`);


//Boolean
console.log(true);
console.log(false);
let bool = 4 > 1;
console.log(bool);


//null, объект не существует
let age1 = null;
//undefined, значение не присвоено
let age2;
console.log(age2);
age1 = undefined;
console.log(age1);


//typeof, возвращение типа объекта
console.log(typeof(undefined));
console.log(typeof undefined);
console.log(typeof 2);
console.log(typeof 2.2);
console.log(typeof Infinity);
console.log(typeof 2n);
console.log(typeof "str");
console.log(typeof true);
console.log(typeof Number);
console.log(typeof alert);
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console);


//Взаимодействие с пользователем
/*do
{
	let result = prompt("Введите текст");
	result = prompt("Введите текст", "чтоб те не ошибся, вводить сюда");
	alert(result);
}while(confirm("Опять?"))*/


//Преобразование типов
//Неявно
console.log(100 / "10");
console.log(100 * "0.5" - "2");
//Явно
console.log(String(true) + ' ' + typeof String(true));
console.log(String(22.3) + ' ' + typeof String(22.3));
console.log(Number("22") + ' ' + typeof Number("22"));
console.log(Number(true) + ' ' + typeof Number(true));
console.log(Number(null) + ' ' + typeof Number(null));
console.log(Number(" ") + ' ' + typeof Number(" "));
console.log(Number("Вася 122") + ' ' + typeof Number("Вася 122"));
console.log(Boolean(null) + ' ' + typeof Boolean(null));
console.log(Boolean("3") + ' ' + typeof Boolean("3"));
console.log(Boolean("tt") + ' ' + typeof Boolean("tt"));
console.log(Boolean(" ") + ' ' + typeof Boolean(" "));
console.log(Boolean("") + ' ' + typeof Boolean(""));
console.log(Object("pp") + ' ' + typeof Object("pp"));


//Операции
console.log(4 + 2);
console.log(4 - 2);
console.log(4 * 2);
console.log(4 / 2);
console.log(4 % 2);
console.log(4 ** 2);
//В том числе унарные
console.log(-2);
console.log(+2);
//Последние ещё и преоразование в число
console.log(+"");
console.log(+true);


//Немного о специфике присваивания значений и операция
let a = 1, b = 2;
let c = 3 - (a = b + 1);
console.log(a);
console.log(c);
a = b = c = 2 + 2;
console.log(a);
console.log(b);
console.log(c);


//Сокращенные присваивания и инкремент/декремент
a += b;
a -= b;
a *= b;
a /= b;
a %= b;
a **= b;
console.log(a);
console.log(a++);
console.log(a--);
console.log(++a);
console.log(--a);


//Через запятую можно писать всякое, но воспринято будет или первое или последнее
a = 1 + 2, 3 + 4;
console.log(a);
a = (1 + 2, 3 + 4);
console.log(a);
//Когда пишем a = 1, b = 2; это то же самое, когда в цигклах несколько параметров объявляем тоже
for (a = 1, b = 3, c = a * b; a < 10; a++) 
{ }


//Операторы сравнения < > <= >= == != === !==
//Интересен только === (ну и !==) который возвращает истину в том случае, если операнды равны, или их типы одинаковые.
console.log(2 == 2);
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 1);
console.log(false == 0);
console.log(false === 0);
console.log(null == undefined);
console.log(null === undefined);
console.log('Я' > 'А');
console.log('Молоко' > 'Моло');
console.log('Молоко' > 'Молот');
//Может случаться неожиданное...
console.log(0 == "0");
console.log(Boolean(0) == Boolean("0"));
//Чтобы избежать проблем либо относимся осторожно к сравнениям, либо используем === и не используем >= > < <= с переменными, которые могут принимать значения null/undefined


//if
if (a > 0) console.log("Да");
else console.log("Нет");
console.log(a > 0 ? "Да" : "Нет");
if (1) console.log("Всегда выводится");
if (0) console.log("Никогда не выводится");
//Логически оператора && || ! тривиальны. Ну их нафиг.


//Отсечение неопределённых переменных ?? ||  
a = null
b = 3;
c = 4;
console.log(a ?? b ?? c);
console.log(a ?? c ?? b);
console.log(a || b || 5);
console.log(a || 5 || b);
//Можно использовать для задания значений по умолчанию
let height;
height = height ?? 100;
console.log(height);


//Оператор !! двойное отрицание, приведение к логическому значению
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!'') // false
console.log(!!0) // false
console.log(!!NaN) // false
console.log(!!' ') // true
console.log(!!{}) // true
console.log(!![]) // true
console.log(!!1) // true
console.log(!![].length) // false


//Циклы
//while
let i = 0;
while (i < 3) 
{ 
  i++;
}
//работает преобразование. Это всё равно что i > 0
i = 3;
while (i) 
{ 
  i--;
}

//do while
i = 0;
do 
{
  i++;
} while (i < 3);

//for
for(let i = 0; i < 3; i++)
{}
/*
for (;;) 
{
  //будет выполняться вечно
}*/

//break и continue тривиальны. Но есть ещё специальные метки циклов которые позволяют выпрыгнуть из их вложений на метку и пропустить цикл идущий за ней
let t = 0;
outer: for (let i = 0; i < 3; i++) 
{
	for (let j = 0; j < 3; j++) 
	{
		t++;
		if (i == 1) break outer;
	}
}
console.log(t);


//switch такой же как и везде, но если не ставить break то выведет заодно и всё что идёт посл найденного значения
a = 4;
switch (a) 
{
	case 3:
		console.log("Это 3");
	case 4:
		console.log("Это 4");
	case 5:
		console.log("Это 5");
	default:
		console.log("Нет таких значений");
}
//Можно писать выражения в switch, можно группировать значения, тип учитывается
switch (a + 2) 
{
	case 3:
		console.log("Это 3");
		break;
	case 4:
	case 5:
	case 6:
		console.log("Это 4 или 5 или 6");
		break;
	case "7":
		console.log("Сюда никогда не зайдём");
		break;
	default:
		console.log("Нет таких значений");
}


//Функции
//Переменные внутри свои и временные. Если имена совпадают, то используется переменная с функции, можно задавать значения по умолчанию
a = 2;
b = 4;
c = 5;
function Show(c, d = 6, e = Calc()) 
{
	let a = 3;
	c++;
	console.log(a + " " + b + " " + c + " " + d + " " + e);
}
function Calc() 
{
	return 10;
}
Show(c);
Show(c, 9);
console.log(a + " " + b + " " + c);

//Function Expression 
function Message1() 
{ 
	console.log("Message1");
}
let Func1 = Message1;
let Func2 = function Message2() 
{ 
	console.log("Message2");
}; //Тут точка с запятой завершает присваивание и по хорошему ставится всегда
Message1();
//Message2(); //Тут ошибка, если сразу присваиваем значение, то старое имя не актуально, можно его сразу пропустить и писать провто function()
Func1();
Func2();


//Функции-стрелки 
let Sum1 = (a, b) => a + b;
console.log(Sum1(2, 3));
let Double = a => a * 2;
console.log(Double(2));
let Sum2 = (a, b) => 
{  
  let result = a + b;
  return result; 
};
console.log(Sum2(2, 3));


//Объекты
let user = new Object(); // синтаксис "конструктор объекта"
user = {};  // синтаксис "литерал объекта"
user = {     // объект
  name: "John", 
  age: 30,
  "likes birds": true
};
console.log(user.name + " " + user.age + " " + user["likes birds"] + " " + user);

//Добавление значения
user.isAdmin = true;
console.log(user.name + " " + user.age + " " + user["likes birds"] + " " + user["isAdmin"] + " " + user);
//Удаление значения и дабавление его снова с уже неопределённым значением
delete user.age;
console.log(user.name + " " + user.age + " " + user["likes birds"] + " " + user["isAdmin"] + " " + user);

//Константные объекты можно менять
const user2 = {
  name: "John"
};
user2.name = "Vasia";
console.log(user2.name);

//Имена свойств можно брать с переменных или из свойств других объектов как здесь и компоновать их по всякому
user2[user.name] = 5;
console.log(user2.John);
user2[user.name + "Style"] = true;
console.log(user2.JohnStyle);

//Имена могут быть специфические
const obj = {
  0: "Тест1",
  for: "Тест2"
};

//Объекты передаются по сслыке, там не полноценное копирование
let obj1 = {};
obj1.name = "Vasia";
let obj2 = obj1;
obj2.name = "Vova";
console.log(obj1.name);


































