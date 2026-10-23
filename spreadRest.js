// { a: 1, b: 2 } жана { b: 3, c: 4 } объекттерин бириктир. b эмнеге барабар болот, эмне үчүн?
// Каалагандай сандагы сандардын орточосун эсептеген average(...nums) функциясын жаз.
// const product = { id: 5, title: "Ноутбук", secret: "xyz", price: 500 }. secret'сиз жаңы объект ал.
// [1, 2, 2, 3, 3, 3] массивинен кайталангандарды алып сал.

// spread-...
//rest-...
// экөөнүн тең белгиси бирдей айырмасы колдонулган жеринде
// spread-таратат (топтомдон элементтерди чыгарат)
// Spread массивди же объектти көчүрүүгө, бириктирүүгө жана функцияга аргумент катары жөнөтүүгө колдонулат.
//
// Rest: жыйнайт (калган элементтерди бир топко чогултат)

// Кантип айырмалайбыз?
// ... функциянын параметринде же = сол жагында (деструктуризацияда) турса, бул rest (жыйнайт).

// // let arr=[1,2,3,4,5]белгиси = оң жагында, чакырууда же массив/объект ичинде турса, бул spread (таратат).

// let arr1=[6,7,8,9,10,123]

// let res=[...arr,...arr1]

// console.log([...arr,"Guldana"]);

// console.log(res);

// let res=["mubine",...arr1]

// let user1 = {
//   id: 1,
//   name: "Asan",
//   age: 12,
// };

// let res = {
//   ...user1,
// address:"bishkek"
// };

// console.log(res);

// let user={
//     id:1,
//     name:"Asan",
//     age:20,
//     address:"bishkek"
// }

// let {...b}=user

// console.log(b);

// let students = [
//   {
//     name: "Ali",
//     age: 20,
//     skills: [
//       {
//         title: "HTML",
//         level: "good",
//       },
//       {
//         title: "CSS",
//         level: "excellent",
//       },
//     ],
//   },

//   {
//     name: "Aida",
//     age: 22,
//     skills: [
//       {
//         title: "JavaScript",
//         level: "good",
//       },
//     ],
//   },
// ];

// console.log(students[0].skills[0].level);

//1) Создайте функцию, которая принимает два аргумента (зарплата, премия).
// Зарплата будет целым числом, а премия — логическим.
// Если премия — true, зарплату следует умножить на 10. Если премия — false,
// ты не заработал достаточно денег и должен получить только свою заявленную зарплату.
// Дано: function bonus(20000, true) {}
// Результат: 200 000

// function bonus(a, b) {
//   if (b === true) {
//     return console.log(a * 10);
//   }else{
//     return console.log(a);

//   }
// }

// bonus(5000, true);

//2) Дан массив счетов матчей в формате 'x:y'. Посчитайте сумму очков 'x' например
// Дано: ['2:4', '0:5',  '5:2', '3:1', '1:4']
// Результат: 11

// let arr = ["2:4", "0:5", "5:2", "3:1", "1:4"];

//3) Вам дан несортированный массив, содержащий все целые числа от 0 до 100 включительно.
// Однако одно число отсутствует. Напишите функцию для нахождения и возврата этого числа
// Дано: [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
//  71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87,
//  90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14,
//  4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86,
//   49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16]
// Результат: 26

// const arr = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18,
//  71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87,
//  90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14,
//  4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86,
//   49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16]

// function missing(arr) {
//     const total = (100 * 101) / 2;
//     const sum = arr.reduce((s, n) => s + n , 0);
//     return total - sum;
// }

// console.log(missing(arr));

//4) Ваша задача — сделать все слова, которые состоят из 3 символов или меньше, заглавными.
// Вам также следует удалить все гласные из «длинных» (4 символа или больше) слов.
// Например: "The quick brown fox jumps over the lazy dog"
// Результат: "THE qck brwn FOX jmps vr THE lzy DOG"

// ________________________________________________

// Spread ... chachat  bir=>kop

// let arr1=["Alma","Oruk","Alcha"]
// let arr2=[1,2,3]

// let res=["Almurut",...arr1,"Anar"]
// console.log(res);

// let result=[...arr1,100,...arr2,1000]
// console.log(...result);

// ["Alma","Oruk","Alcha",1,2,3]
// console.log(result);

// console.log(...arr1, ...arr2);

// let user = {
//   id: 1,
//   name: "Uson",
// };
// console.log(user);

// let copy={hobby:"reading",...user,age:20}

// copy.name="Uson"
// console.log(copy);

// let b = { lang: "ru" };
// let a = { name: "Asan", lang: "kg" };

// let final = { ...a,...b };
// console.log(final);

// function greet(a,b,c){
//   return console.log(${a} -20 jashta,${b}-10 jashta, ${c}-30 jashta);

// }
//  let data=["Asan","Uson","Akyl"]
// greet(...data)

// Rest ... jyinaitb kop=>bir

// function esepte(...a){
//   let res=a.reduce((acc,num)=>acc+num,0)
//   return console.log(res);

// }

// esepte(1,2,3,4)

// function introduce(a,c,...b){
// console.log(a);
// console.log(c);

// console.log(b);

// }

// introduce("Гульдана", "Айбек", "Нурай", "Бекзат");

// const user = { id: 1, name: "Айбек", password: "123", age: 20 };

// const { password, ...safeUser } = user;
// console.log(password);

// const [x, ...b]=[100]

// console.log(b);

// let numbers={
//   id:12,
//   age:30,
//   class:34
// }

// let {id}=numbers
// console.log(id);

// const a = [1,2,3];
// const b =[...a,4,5];

// const user = {name:"Anna", age: 20};
// const copy = {...user,age:21};

// console.log(Math.max(...a));

// Практика

// const a = [10,20,30,];
// const b = [...a,40,50];
// console.log(...b);

// const user = {
//     neme: "Aibek",
//     aga:15
// };

// const updatedUser = {
//     ...user,
//     age: 19,
//     citi: "Bishkek"
// };

// console.log(updatedUser);

// const numbers = [5,10,15];
// const newNumbers = [...numbers];

// newNumbers.push(20);

// console.log(numbers);
// console.log(newNumbers);

// const a = [1,2];
// const b = [3,4];

// const result = [...a, ...b, 5];
// console.log(result);

// const user = {
//     name:"Ali",
//     age: 17
// };

// const updatedUser = {
//     ...user,
//     age:18,
//     citi:"Bishkek",
// };

// console.log(updatedUser);

// const a =[10,20];
// const b = [30,40];
// const result = [...a, ...b,100]

// console.log(result);

// const a = [1,2,3];
// const b = [4,5];
// const result = [...a,...b,6];
// console.log(result);

// const numbers = [2,4,6];
// const newNumbers = [...numbers,8]
// newNumbers.push(10);
// console.log(...numbers,...newNumbers);

// const fruits = ["Apple" , "Banana"];
// const vegetables = ["carrot","Potato"];
// console.log(...fruits,...vegetables);
//______________________________


// const students = [
//   {
//     id: 1,
//     fullName: "Aibek Osmonov",
//     age: 20,
//     isActive: true,
//     address: {
//       city: "Bishkek",
//       district: "Lenin",
//       location: {
//         street: "Manas Avenue",
//         house: 45,
//       },
//     },
//     courses: [
//       {
//         courseId: 101,
//         title: "JavaScript",
//         category: "Frontend",
//         instructor: {
//           name: "Gulnara",
//           experience: 5,
//         },
//         progress: 85,
//         completed: false,
//         grades: [90, 85, 78],
//       },
//       {
//         courseId: 102,
//         title: "HTML & CSS",
//         category: "Frontend",
//         instructor: {
//           name: "Aibek",
//           experience: 3,
//         },
//         progress: 100,
//         completed: true,
//         grades: [95, 92, 100],
//       },
//     ],
//     skills: ["HTML", "CSS", "JavaScript"],
//     contacts: {
//       email: "aibek@example.com",
//       phone: "+996700111222",
//       social: {
//         telegram: "@aibek",
//         github: "aibek-dev",
//       },
//     },
//     scholarship: {
//       eligible: true,
//       amount: 5000,
//       currency: "KGS",
//     },
//   },

//   {
//     id: 2,
//     fullName: "Meerim Sydykova",
//     age: 22,
//     isActive: true,
//     address: {
//       city: "Osh",
//       district: "Central",
//       location: {
//         street: "Kurmanjan Datka",
//         house: 18,
//       },
//     },
//     courses: [
//       {
//         courseId: 103,
//         title: "React",
//         category: "Frontend",
//         instructor: {
//           name: "Gulnara",
//           experience: 5,
//         },
//         progress: 70,
//         completed: false,
//         grades: [88, 91, 84],
//       },
//       {
//         courseId: 104,
//         title: "Node.js",
//         category: "Backend",
//         instructor: {
//           name: "Nurbek",
//           experience: 7,
//         },
//         progress: 40,
//         completed: false,
//         grades: [75, 80, 72],
//       },
//     ],
//     skills: ["JavaScript", "React", "TypeScript"],
//     contacts: {
//       email: "meerim@example.com",
//       phone: "+996555333444",
//       social: {
//         telegram: "@meerim",
//         github: "meerim-dev",
//       },
//     },
//     scholarship: {
//       eligible: false,
//       amount: 0,
//       currency: "KGS",
//     },
//   },

//   {
//     id: 3,
//     fullName: "Nursultan Bekov",
//     age: 19,
//     isActive: false,
//     address: {
//       city: "Bishkek",
//       district: "Sverdlov",
//       location: {
//         street: "Chuy Avenue",
//         house: 120,
//       },
//     },
//     courses: [
//       {
//         courseId: 105,
//         title: "JavaScript",
//         category: "Frontend",
//         instructor: {
//           name: "Aibek",
//           experience: 3,
//         },
//         progress: 100,
//         completed: true,
//         grades: [60, 72, 68],
//       },
//       {
//         courseId: 106,
//         title: "TypeScript",
//         category: "Frontend",
//         instructor: {
//           name: "Meerim",
//           experience: 4,
//         },
//         progress: 55,
//         completed: false,
//         grades: [82, 87, 90],
//       },
//     ],
//     skills: ["HTML", "JavaScript"],
//     contacts: {
//       email: "nursultan@example.com",
//       phone: "+996777555666",
//       social: {
//         telegram: "@nursultan",
//         github: "nursultan-dev",
//       },
//     },
//     scholarship: {
//       eligible: true,
//       amount: 3000,
//       currency: "KGS",
//     },
//   },

//   {
//     id: 4,
//     fullName: "Aizada Toktogulova",
//     age: 24,
//     isActive: true,
//     address: {
//       city: "Jalal-Abad",
//       district: "Bazar",
//       location: {
//         street: "Erkindik Street",
//         house: 9,
//       },
//     },
//     courses: [
//       {
//         courseId: 107,
//         title: "Python",
//         category: "Backend",
//         instructor: {
//           name: "Nurbek",
//           experience: 7,
//         },
//         progress: 90,
//         completed: false,
//         grades: [96, 89, 94],
//       },
//       {
//         courseId: 108,
//         title: "SQL",
//         category: "Database",
//         instructor: {
//           name: "Gulnara",
//           experience: 5,
//         },
//         progress: 100,
//         completed: true,
//         grades: [98, 95, 97],
//       },
//     ],
//     skills: ["Python", "SQL", "Git"],
//     contacts: {
//       email: "aizada@example.com",
//       phone: "+996700888999",
//       social: {
//         telegram: "@aizada",
//         github: "aizada-dev",
//       },
//     },
//     scholarship: {
//       eligible: true,
//       amount: 7000,
//       currency: "KGS",
//     },
//   },
// ];





// Задания для практики
// Уровень 1 — работа с объектами
// Найди студента с id === 

//  const student = students.map((el)=> el.id === 2);
//  console.log(student);
 
// 2.
// Выведи имена всех студентов из Бишкека.
// Получи массив имён всех преподавателей без повторений.
// Найди студентов, у которых есть навык TypeScript.
// Выведи имена студентов, получающих стипендию.

// Уровень 2 — вложенные массивы
// Найди всех студентов, у которых хотя бы один курс завершён.
// Получи названия всех курсов всех студентов в одном массиве.
// Найди все курсы с прогрессом не меньше 80%.
// Найди студентов, у которых средняя оценка по всем курсам выше 85.
// Посчитай общее количество курсов у всех студентов.


// Уровень 3 — сложные цепочки методов
// Получи имена активных студентов, у которых есть хотя бы один незавершённый курс с прогрессом выше 60%.
// Создай массив объектов такого вида:
// {
//   fullName: "Aibek Osmonov",
//   totalCourses: 2,
//   completedCourses: 1,
//   averageGrade: 90
// }
// averageGrade здесь нужно вычислить по всем оценкам студента, а не просто взять одну оценку.
// Найди преподавателя, который ведёт больше всего курсов.
// Сгруппируй курсы по категориям: Frontend, Backend, Database.
// Найди город, в котором живёт больше всего студентов.
// Рекомендация: начни с задания № 7. В нём нужно пройти через массив студентов, затем через вложенные массивы courses и собрать все названия курсов в один массив. Это хорошая практика для понимания вложенных структур данных.