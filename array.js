//ARRay  бир нече маанини сактоочу тизмек

// const fruits = ["алма", "банан", "өрүк"];
// тизме 0 башталат флма 0 индекс

// const number=[123,345,678];

// const names=["Asan","Uson","Adam,Aigul"];

// const arr =["Anar","Alma",23,45, undefined,{id:1,age:34,34}]

//index[]
//leght-узундукту эсептейт

// let arr={"Asan",34,35,{id:1,age:20},}
// numbers.push(100)-бул аягына кошот
// numbers.pop()-бул аягынан алып салат
// numbers.unshift()-башына кошот
// numbers.shift()-башынан алып салат
// console.log(arr.lenght);

// Жеңилден татаалга карай 12 тапшырма:
// 1-деңгээл: индекс жана length
// 1. const colors = ["кызыл", "жашыл", "көк", "сары"]; Консолго
//  биринчи жана акыркы түстү чыгар. Акыркысын length аркылуу ал.
// const colors = ["кызыл", "жашыл", "көк", "сары"];
// console.log(colors[0]);
// console.log(colors[colors.length-1]);

// 2. Ошол эле массивдеги "көк" түстү "ак" деп алмаштыр.

// colors[2] = "ак"
// console.log(colors);

// 3. Төмөнкү код эмне чыгарат? Эмне үчүн?
// const a = [1, 2, 3];
// console.log(a[3]);
// console.log(a.length);

// 2-деңгээл: push, pop, shift, unshift
// 4. Бош массив түз. push менен 3 шаардын атын кош,
// андан кийин unshift менен башына "Бишкек" деп кош.
//  Массивди жана анын узундугун чыгар.


// const cities =[]
// cities.push("Ош");
// cities.push("Наарын");
// cities.push("Талас");

// cities.unshift("Бишкек");
// console.log(cities);
// console.log(cities.length);


// 5. const nums = [10, 20, 30, 40, 50]; Биринчи жана
// акыркы элементти өчүр. Өчүрүлгөн элементтерди өзүнчө
//  өзгөрмөлөргө сакта жана консолго чыгар.
// const name = [10, 20, 30, 40, 50];
// let first = name[0];
// let last = name[name.length - 1];
// console.log(first, last);

// 6. Код эмне чыгарат?
// const arr = ["a", "b"];
// const x = arr.push("c");
// const y = arr.unshift("z");
// console.log(x, y, arr);



// 7. Код эмне чыгарат?
// const arr = [5];
// arr.pop();
// console.log(arr.pop(), arr.length);

// 3-деңгээл: логика
// 8. Кезек (очередь). Банктагы кезек:
//  const queue = ["Айбек", "Нуриза", "Эрлан"];
// Жаңы клиент "Айгүл" келди: аягына кош.
// Биринчи клиент тейленди: кезектен чыгар 
// жана "Тейленди: Айбек" деп чыгар.
// Кезекте канча адам калганын чыгар.

// const queue = ["Айбек", "Нуриза", "Эрлан"];
// queue.push("Aigul")
// console.log(`Тейленди: ${queue[0]}`);
// queue.shift()
// console.log(queue);
// console.log(queue.length);


// 9. Стек (браузер тарыхы). const history = [];
// Колдонуучу 3 баракка кирди: "home", "profile", "settings".
// «Артка» баскычы басылды: акыркы баракты чыгарып сал.
// Азыр кайсы баракта турганын чыгар (массивди өзгөртпөй).

// const histori = [];
// histori.push("home", "profile", "settings");
// histori.pop()
// console.log(histori[histori.length - 1]);

// 10. Айлантуу. const arr = [1, 2, 3, 4, 5]; 
// Акыркы элементти башына көчүр, натыйжа: [5, 1, 2, 3, 4].
//  Бир сапта жаза аласыңбы?

// const arr = [1, 2, 3, 4, 5];
// const last = arr.pop();
// arr.unshift(last);
// console.log(arr);

// 11. Алмаштыруу. 
// const arr = ["биринчи", "ортоңку", "акыркы"]; 
// Биринчи жана акыркы элементтин ордун алмаштыр. 
// Код массивдин узундугуна көз каранды болбосун.
// const arr = ["биринчи", "ортоңку", "акыркы"];
// const first = arr.shift();
// const last = arr.pop();
// arr.unshift(last);
// arr.push(first);
// console.log(arr);

// 12. Тазалоо. Массивди pop жана 
// length гана колдонуп толук бошот (arr = [] болбойт, const).

//<details>
//<summary>Жооптор (кийин карагыла)</summary>
//colors[0], colors[colors.length - 1]
//colors[2] = "ак"
//undefined (3-индекс жок), 3
//const cities = []; cities.push("Ош", "Нарын", "Талас"); cities.unshift("Бишкек"); → 4
//const first = nums.shift(); const last = nums.pop(); → 10, 50, [20, 30, 40]
//3 4 ["z", "a", "b", "c"] — push/unshift жаңы length кайтарат
//undefined 0 — бош массивден pop undefined кайтарат
//queue.push("Айгүл"); console.log("Тейленди: " + queue.shift()); console.log(queue.length); → 3
//history.push("home", "profile", "settings"); history.pop(); console.log(history[history.length - 1]); → "profile"
//arr.unshift(arr.pop());
//const first = arr.shift(); const last = arr.pop(); arr.unshift(last); arr.push(first);
//while (arr.length > 0) arr.pop(); (же arr.length = 0)
//details>
//8 жана 9-тапшырмалар кийин queue жана stack түшүнүгүнө жакшы көпүрө болот.


// 1.
// let fruits = ["алма", "алмурут"];
// Тапшырма: push методун колдонуп, массивдин аягына "банан" кошуңуз.
// Жыйынтык: ["алма", "алмурут", "банан"]

// let fruits = ["алма", "алмурут"];
// fruits.push("банан");
// console.log(fruits);

// 2.
// let numbers = [10, 20, 30, 40];
// Тапшырма: pop методун колдонуп, массивдин акыркы элементин өчүрүңүз.
// Жыйынтык: [10, 20, 30]

// let numbers = [10, 20, 30, 40];
// numbers.pop([3]);
// console.log(numbers);

// 3.
// let colors = ["жашыл", "көк"];
// Тапшырма: unshift методун колдонуп, массивдин башына "кызыл" кошуңуз.
// Жыйынтык: ["кызыл", "жашыл", "көк"]

// let colors = ["жашыл", "көк"];
// colors.unshift("кызыл");
// console.log(colors);



// 4.
// let cities = ["Бишкек", "Ош", "Баткен"];
// Тапшырма: shift методун колдонуп, массивдин биринчи элементин өчүрүңүз.
// Жыйынтык: ["Ош", "Баткен"]

// let cities = ["Бишкек", "Ош", "Баткен"];
// cities.shift("Бишкек");
// console.log(cities);

// 5.
// let animals = ["мышык", "ит"];
// Тапшырма: push методун колдонуп, массивдин аягына "уй" жана "кой" кошуңуз.
// Жыйынтык: ["мышык", "ит", "уй", "кой"]

// let animals = ["мышык", "ит"];
// animals.push("уй", "кой");
// console.log(animals);


// 6.
// let items = ["дептер", "калем", "сызгыч"];
// Тапшырма: unshift аркылуу массивдин башына "китеп" кошуп, андан кийин pop аркылуу акыркы элементти өчүрүңүз.
// Жыйынтык: ["китеп", "дептер", "калем"]

// let items = ["дептер", "калем", "сызгыч"];
// items.unshift("китеп");
// items.pop("сызгыч");
// console.log(items);



// 7.
// let letters = ["A", "B", "C", "D"];
// Тапшырма: shift методун эки жолу катар колдонуп, алгачкы эки элементти өчүрүңүз.
// Жыйынтык: ["C", "D"]
// let letters = ["A", "B", "C", "D"];
// letters.shift("A",);
// letters.shift("B");
// console.log(letters);



// 8.
// let queue = ["Айбек", "Бактыгүл"];
// Тапшырма: push аркылуу массивдин аягына "Замир" кошуп, андан соң shift аркылуу эң биринчи элементти өчүрүңүз.
// Жыйынтык: ["Бактыгүл", "Замир"]

// let queue = ["Айбек", "Бактыгүл"];
// queue.push("Замир");
// queue.shift("Бактыгүл");
// console.log(queue);




// 9.
// let score = [2, 3, 4];
// Тапшырма: pop аркылуу акыркы элементти өчүрүп, 
// unshift аркылуу массивдин башына 1 санын кошуңуз.
// Жыйынтык: [1, 2, 3]

// let score = [2, 3, 4];
// score.pop([2]);
// score.unshift(1);
// console.log(score);



// 10.
// let data = ["иш1", "иш2"];
// Тапшырма: Алгач pop жана shift аркылуу бардык 
// элементтерди өчүрүп (массивди бошотуп), андан соң push 
// аркылуу "жаңы иш" элементин кошуңуз.
// Жыйынтык: ["жаңы иш"]
// let data = ["иш1", "иш2"];
// data.pop(0);
// data.shift(1);
// data.push("жаңы иш");
// console.log(data);



//()<={}-колбук фаншын

//map -массивдин ар бир элементин өзгөртүп, натыйжасын жаңы массивге салат.
//  Баштапкы массив өзгөрбөйт.
//Мисал: 3 алманы алып, ар биринин кабыгын сыйрып койсоң, 3 таза алма чыгат. 
// Саны ошол эле 3, бирок ар бири өзгөргөн. Ушул map.

// Кандай иштейт:
// map массивдеги ар бир элементти бирден алат (el).
// Функцияңа берет.
// Функция return кылган нерсени жаңы массивге салат.

//Эң маанилүү эреже
//map ар бир элемент үчүн сөзсүз return кылышы керек. 
// Болбосо undefined чыгат. 



// let numbers = [12, 34, 56, 78, 90, 56, 23, 33];

// let result = numbers.map((el) => {
//   if (el % 2 === 0) {
//     return el;
//   }
// });
// console.log(result);
//  let arr = ["apple", "banana", "cherry", "watermelon", "pear"];

// let res=arr.slice(3,5)
// console.log(res);

// console.log(arr);

// arr.splice(1,2,4,5,10,)
// arr.splice(5,0, 90)

// console.log(arr);


// splice -  масивдин ичиндеги эдементтерди очүрөт , кошот жэ альаштырат 
// splice- 3төн 5ку чейинки эле алат бирок 5ке келгенде токтойт албайт 
// let arr = ["potato","apple", "banana", "cherry", "watermelon", "pear"];

// let numbers = [5,5,10,20,30,3,2,0];

// console.log(numbers.sort((a,b)=>b-a));

// let res=numbers.reduce((acc,number)=>{
//     return acc+number
// },0)

// console.log(res);
// console.log(arr.reverse());
// console.log(numbers.reverse());


// sort,reverse,splice- масивдин өзүн озгортот ,иретке келтирет 



// 

// let res = numbers.sort((a, b) => b-a);
// console.log(res);

// console.log(arr.sort());

// let res=arr.slice(2,4)

// console.log(res);

// arr.splice(2,2)

// console.log(arr);

// arr.splice(1,1, "melon")

// arr.splice(3,0,"hello")
// console.log(arr);

// 1.Добавление и удаление элементов в конце массива:
// Создайте массив с несколькими элементами. Используйте push для добавления
// нового элемента в конец массива, а затем pop, чтобы удалить последний
// элемент. Выведите массив после каждой операции.


// 2.Добавление и удаление элементов в начале массива:
// Создайте массив с несколькими элементами. Используйте unshift для
// добавления нового элемента в начало массива, а затем shift, чтобы удалить
// первый элемент. Выведите массив после каждой операции.

// 3.Разделение массива:
// Создайте массив с несколькими элементами. Используйте pop для удаления
// последнего элемента, а затем shift, чтобы удалить первый элемент, и
// выведите новый массив.

// 4.Создать массив
// let fruits = ['яблоко', 'апельсин', 'груша'];
// Добавить элемент в конец массива; // ['яблоко', 'апельсин', 'груша', 'банан']

// 5.Удалить последний элемент массива
// ['яблоко', 'апельсин', 'груша']

// 6.Объединить два массива с помощью push
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// // [1, 2, 3, 4, 5, 6]

// arr1.push(...arr2)
// console.log(arr1);

// 7.let numbers = [1, 2, 3, 4, 5];
// Удалить последний элемент и добавить новый элемент в начало массива
// [0, 1, 2, 3, 4]

// 8.let queue = [];
// Добавить элементы в очередь
// ['третий', 'второй', 'первый']

// 9.Удалить элемент из очереди (первый добавленный)
// ['третий', 'второй']





// 10.let numbers = [10, 20, 30, 40, 50];
// Удалить один элемент, начиная с индекса 2
// [10, 20, 40, 50]
// Удалить три элемента, начиная с индекса 1
// [10]

// let a=[10,20,30,40,50]

// let res=a.slice(2,3)
// console.log(res);

// 11.let colors = ["красный", "зеленый", "синий"];
// Вставить 'желтый' на место индекса 1, удалить 0 элементов
// ['красный', 'желтый', 'зеленый', 'синий']

// 12.let colors = ["красный", "зеленый", "синий"];
// Заменить 'зеленый' на 'фиолетовый'
// ['красный', 'желтый', 'фиолетовый', 'синий']

// 13.let cars = ["Мерседес", "БМВ", "Ауди"];
// Добавить два элемента ('Фольксваген' и 'Тойота') начиная с индекса 1
// ['Мерседес', 'Фольксваген', 'Тойота', 'БМВ', 'Ауди']

// 14.let colors = ["красный", "желтый", "синий"];
// Заменить один элемент на другой, начиная с индекса 0
// ['фиолетовый', 'желтый', 'синий']

// 15.let fruits = ["яблоко", "груша", "апельсин", "банан"];
// Удалить два элемента начиная с индекса 1 и сохранить их в новом массиве
// ['груша', 'апельсин']

// let a="Asan"

// let b=a
// let c=b
// let f=c
// console.log(f);

// let fruits = [
//   "banana",
//   "cherry",
//   "pear",
//   "watermelon",
//   "apple",
//   "melon",
//   "kiwi",
//   "grape",
//   "orange",
//   "pineapple",
//   "apple",
// ];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// console.log(fruits[4]);

// ()=>{}

// fruits.map((fruit) => {
//   return console.log(fruit);
// });

// fruits.filter((el)=>{
// return console.log(el==="apple" ? el : "")
// })

// let res=fruits.find((a)=>{
//     return a==="apple" ? a : ""
// })

// console.log(res)

// let num = [5, 5, 10, 20, 30, 40, 50];

// let summa = 0;

// num.map((a) => {
//   summa += a;

//   return summa;
// });

// console.log(summa);

// let name = ["Аскар", "Баяман", "Калмамат"];

// let result = name.map((el) => el.replaceAll("а", "я"));
// console.log(result);

// Жеңилден татаалга карай 12 тапшырма:

// 1-деңгээл: индекс жана length

// 1. const colors = ["кызыл", "жашыл", "көк", "сары"]; Консолго биринчи жана акыркы түстү чыгар. Акыркысын length аркылуу ал.

// const colors = ["кызыл", "жашыл", "көк", "сары"];

// console.log(colors[0]);
// console.log(colors[colors.length-1]);

// 2. Ошол эле массивдеги "көк" түстү "ак" деп алмаштыр.

// colors[2]="ak"
// console.log(colors);

// 3. Төмөнкү код эмне чыгарат? Эмне үчүн?
// ```js
// const a = [1, 2, 3];
// console.log(a[3]);
// console.log(a.length);
// ```

// 2-деңгээл: push, pop, shift, unshift

// 4. Бош массив түз. push менен 3 шаардын атын кош, андан кийин unshift менен башына "Бишкек" деп кош. Массивди жана анын узундугун чыгар.
// const b=[]
// b.push("osh")
// b.push("talas","batken")
// console.log(b);
// b.unshift("bishekek")
// console.log(b);
// console.log(b.length);

// 5. const nums = [10, 20, 30, 40, 50]; Биринчи жана акыркы элементти өчүр. Өчүрүлгөн элементтерди өзүнчө өзгөрмөлөргө сакта жана консолго чыгар.
// const nums = [10, 20, 30, 40, 50];
// let first=nums[0]
// let last=nums[nums.length-1]
// console.log(first,last);

// 6. Код эмне чыгарат?
// ```js
// const arr = ["a", "b"];
// const x = arr.push("c");
// const y = arr.unshift("z");
// console.log(x, y, arr);

// const arr1 = ["a", "b"];
// const x = arr1.push("c");
//  const y = arr1.unshift("z");
//  console.log(arr1);

// ```

// 7. Код эмне чыгарат?
// ```js
// const arr = [5];
// arr.pop();
// console.log( arr.length);
// ```

// 3-деңгээл: логика

// 8. Кезек (очередь). Банктагы кезек: const queue = ["Айбек", "Нуриза", "Эрлан"];
// - Жаңы клиент "Айгүл" келди: аягына кош.
// - Биринчи клиент тейленди: кезектен чыгар жана "Тейленди: Айбек" деп чыгар.
// - Кезекте канча адам калганын чыгар.

// const queue = ["Айбек", "Нуриза", "Эрлан"];
// queue.push("Aigul")
// console.log(Тейленди: ${queue[0]});
// queue.shift()
// console.log(queue);
// console.log(queue.length);




//slis
//reples
// 


// 1. Массив (негиздер)
// жемиштер деген массив түз: алма, алмурут, өрүк, жүзүм. Биринчи жана акыркы элементти консолго чыгар.
// const jemishter = ["алма", "алмурут", "өрүк", "жүзүм"];
// console.log(jemishter[0]);
// console.log(jemishter[jemishter.length-1]);

// jemishter.map((el, index) => {
//   return console.log(index=== 0 || index===3 ? el : 0);
//  });

// сандар = [10, 20, 30] массивинин узундугун (length) чыгар, анан 2-индекстеги элементти 99 кылып өзгөрт.
// let candar = [10, 20, 30]
// console.log(candar.length);


// шаарлар = ["Бишкек", "Ош"] массивине push менен "Нарын", unshift менен "Талас" кош. Жыйынтыкты чыгар.
// let sharlar=["Бишкек", "Ош"];
// sharlar.push("Narun")
// sharlar.unshift("Talas")
// console.log(sharlar);


// 2. map
// баалар = [50, 120, 300] — ар бир баага 10% кошуп, жаңы массив кайтар.
// let баалар = [50, 120, 300];

// let rez = баалар.map((el)=>{
//     let prosent=el*10/100

//     return el+prosent
// })

// console.log(rez);
// аттар = ["айбек", "нурай", "бакыт"] — бардыгын чоң тамга менен жаз (toUpperCase).
// let аттар = ["айбек", "нурай", "бакыт"];

// console.log(аттар.map((el)=>{
//   return el.toUpperCase()
// }));

// студенттер = [{аты: "Айгүл", жашы: 20}, {аты: "Эрлан", жашы: 22}] — аттарынан гана турган массив чыгар.

// 3. filter
// сандар = [3, 8, 12, 5, 20] — 10дон чоң сандарды гана калтыр.
// сөздөр = ["кой", "китеп", "ат", "мектеп"] — узундугу 3төн көп сөздөрдү ал.
// товарлар = [{аты: "нан", баасы: 40}, {аты: "сүт", баасы: 90}, {аты: "эт", баасы: 600}] — баасы 100дөн арзан товарларды чыгар.
// let san = [3, 8, 12, 5, 20];

// let res = san.map((el) => {
//   if (el > 10) {
//     return el;
//   }
// });

// console.log(res);


// 4. find
// сандар = [4, 9, 15, 22] — 10дон чоң биринчи санды тап.

// let candar = [4, 9, 15, 22];
// let жыйынтык = candar.find((el) => el > 10);

// колдонуучулар = [{id: 1, аты: "Асел"}, {id: 2, аты: "Тилек"}] — id 2 болгон колдонуучуну тап.
// let колдонуучулар = [
//   { id: 1, аты: "Асел" },
//   { id: 2, аты: "Тилек" },
// ];

// let user = колдонуучулар.find(el => el.id === 2);
// console.log(user);



// аттар = ["Мээрим", "Азамат", "Бекжан"] — "А" тамгасы менен башталган биринчи атты тап. Эч ким табылбаса эмне кайтарарын текшер (undefined).
// let  аттар = ["Мээрим", "Азамат", "Бекжан"];
// let ат = аттар.find((el) => el.startsWith("А"));
// console.log(ат);



// 5. concat
// console.log — экөөн бириктир.
// кыздар = ["Айжан", "Нургүл"], балдар = ["Эмир", "Алмаз"] — бир топ массивин түз.

// let кыздар = ["Айжан", "Нургүл"],
//   балдар = ["Эмир", "Алмаз"]; 

//   let топ = кыздар.concat(балдар);
//   console.log(топ);
  
// Үч массивди бир жолу бириктир: [1], [2, 3], [4, 5, 6]. Баштапкы массивдер өзгөрбөгөнүн текшер.
// let a =[1,2];
// let b =[3,4];
// let c = [5,6];
// let d = a.concat(b,c);
// console.log(d)

// 6. includes
// түстөр = ["кызыл", "көк", "жашыл"] — "көк" бар бекенин текшер.

// let түстөр = ["кызыл", "көк", "жашыл"];
// console.log(түстөр.includes("көк"));

// Колдонуучу киргизген атты тизме массивинен издеп, бар болсо "Кош келиңиз", жок болсо "Табылган жок" деп чыгар.

// let тизме = ["Aibek","Aitunai","Chunguz"];
// let ат = prompt("Атыңызды жазыңыз")

// {
//     if (тизме.includes(ат)){
//          console.log("Кош келиңиз");
//     }else{
//         console.log("Табылган жок");

//     }
// }

// сандар = [1, 2, NaN] — includes(NaN) жана indexOf(NaN) жыйынтыгын салыштыр. Эмнеге айырмаланат?
// let сандар = [1, 2, NaN]; 
// console.log(сандар.includes(NaN));
// console.log(сандар.lastIndexOf(NaN));

// 7. indexOf
// жаныбарлар = ["ит", "мышык", "ат"] — "мышык" кайсы индексте?
// let жаныбарлар = ["ит", "мышык", "ат"]; 
// console.log(жаныбарлар.indexOf("мышык"));
// console.log(жаныбарлар.indexOf("уй"));
// Массивде жок элементтин indexOf эмне кайтарарын текшер (-1).
// let a = [5, 3, 5, 7, 5]; 
// console.log(a.indexOf[5]);
// console.log(a.indexOf[5,1]);
// 8. lastIndexOf
// сандар = [2, 4, 2, 6, 2] — 2нин акыркы индексин тап.
// let сандар = [2, 4, 2, 6, 2];
// console.log(сандар.indexOf(2));

// "банан" сөзүндөгү "а" тамгасынын биринчи жана акыркы индексин чыгар.
// let сөз = ["банан"];
// console.log(сөз.indexOf("a"));
// console.log(сөз.indexOf("a"));

// баалар = [5, 4, 5, 3, 5] — студент "5" алган биринчи жана акыркы сабактын индексин чыгар, анан ортосунда канча сабак өткөнүн эсепте.
// let баалар = [5, 4, 5, 3, 5];
// let one = баалар.indexOf(5);
// let akurku = баалар.indexOf(5);
// console.log(one, akurku);
// console.log(akurku-one-1);
// Бонус (бардыгын бириктирген): студенттер массивинен балы 70тен жогору болгондорду filter, алардын аттарын map менен ал, 
// анан "Айбек" ичинде бар бекенин includes менен текшер.
// let studentter = [
//   { аты: "Aibek", ball: 85 },
//   { аты: "Nurai", ball: 60 },
//   { аты: "Baiel", ball: 90 },
//   { аты: "asel", ball: 70},
// ];

// let жогорку = studentter.filter((s) => s.ball > 70);
// let  аттар = жогорку.map(s=> s.аты);
// console.log(аттар.includes("Aibek"));

//                    Практика 

//  let a =[1,2,3,4];
//  let juiuntuk = a.map(el => el *3)
//  console.log(juiuntuk);
 

// let a = [10,20,30];;
// let juiuntuk = a.map(el => el + 5);
// console.log(juiuntuk);


// let b =[1,2,3,4];
// let f = b.map(el => el ** el );
// console.log(f);


// let c = [100,200,300];
// let baa = c.map(el => el  *10 /100 );
// console.log(baa);


// let a=[1,2,3];
// let can = a.map(el => el + 1);
// console.log(can);


// let b =[1,5,8];
// let can =b.map(el => el *10);
// console.log(can);


// let c = [2,4,10];
// let can = c.map(el => el / 2);
// console.log(can);


// let d = [10,20,30];
// let ken = d.map(el => el-5);
// console.log(ken);



// let e = [1,2,3];
// let ten = e.map(el => el +100);
// console.log(ten);


// let f =["ит","мышык"];
// let you =f.map(el => el.toLocaleUpperCase());
// console.log(you);



// let g =["салам","рахмат"];
// let lon = g.map(el => el +"!");
// console.log(lon);



// let j =[1,2,3];
// let lon = j.map(el => el*3 +1);
// console.log(lon);

// let h=[4,7,9];
// let res = h.map(el => el *2);
// console.log(res);

// let i=[10,20,50];
// let res =i.map(el => el -5);
// console.log(res);



// let a=[100,200,500,];
// let baa=a.map(el => el -20 );
// console.log(baa);


// let b = [5,8,11,12];
// let res = b.map(el =>  el%4 )
// console.log(res);


// let c =[7,8,9];
// let res = c.map(el => `№${el}`);
// console.log(res);


// let d =[
//     {name:"Asel",age:19},
//     { name:"Tilek",age:23} 
// ]

// let res = d.map(el => el.age);
// console.log(res);


// let e =["алма","банан ","жүзүм"];
// let res = e.map(el => el.length);
// console.log(res);



// let f =[5,12,8,20];
// let res =f.map(el => el>10 ? "чон" :"кичине");
// console.log(res);



// let g =[100,200,350];
// let res = g.map(el => Math.round(el *1.15));
// console.log(es);




// let numbers =[10,20,30,40,50,60,];
// console.log(numbers.slice(-3));
// console.log(numbers.slice(-1,4));


// let res =numbers.splice(1,2,3);
// console.log(res);

// console.log(numbers.reverse()); 

// let result= numbers.sort((a,b)=>b-a)
// console.log(result);


// let result=numbers.reduce((acc,num)=>{
//     return acc+num
// },0)

// let res=numbers.reduce((acc,a)=>acc+a,0)
// console.log(result);


//slice-масивдин бир бөлугун кусип влуу үчун колдонулабжаңы масив кайтарат
//reverse-масивдин тектерин бөлүп койот, акыркы элемент биринчи болот
//sort-масивдт треттейт , баштапкы масивди өзгөртөт 
//reduce- бүт масивди бир мааниге жыйнайт,(сумма,көбоцтүндүү эң чоңу )


// 1.const nums = [5, 10, 15, 20] — бардык сандардын суммасын reduce менен тапкыла.
// const nums = [5, 10, 15, 20];

// let res = nums.reduce((acc,num)=> acc+num,0)
// console.log(res);


// 2.[2, 3, 4] — бардык сандарды бири-бирине көбөйткүлө (reduce).

// const numberst = [2, 3, 4];
// let res = numberst.reduce((acc,a)=> acc*a,1)
// console.log(res);

// 3.[8, 3, 1, 6] — өсүү тартибинде сорттогула (sort).

// const numbers = [8, 3, 1, 6];
// let res = numbers.sort((a,b)=>a-b);
// console.log(res);

// 4.[8, 3, 1, 6] — кемүү тартибинде сорттогула.

// const numbers = [8, 3, 1, 6];
// let res = numbers.sort((a,b)=>b-a);
// console.log(res);

// 5.['banana', 'apple', 'cherry'] — алфавит боюнча сорттогула.
//  const numbers = ['banana', 'apple', 'cherry'];
//  let res = numbers.sort((a,b)=>b.localeCompare(a));
//  console.log(res);
 
// 6.['a', 'b', 'c', 'd', 'e'] — slice менен алгачкы 2 элементти алгыла.


// const numbers = ["a", "b", "c", "d", "e"];
// let res = numbers.slice(0,2)
// console.log(res);

// 7.['a', 'b', 'c', 'd', 'e'] — slice менен акыркы 2 элементти алгыла.


// const numbers =['a', 'b', 'c', 'd', 'e'];
// let res = numbers.slice(-2)
// console.log(res);

// 8.[1, 2, 3, 4, 5] — splice менен 3 санын өчүргүлө.


// const numbers = [1, 2, 3, 4, 5];
// let res = numbers.splice(2,1);
// console.log(numbers);
// console.log(res);



// 9.['red', 'blue'] — splice менен ортосуна 'green' кошкула → ['red', 'green', 'blue'].


// const numbers = ["red", "blue"];
// let res = numbers.splice(1,0, "green")
// console.log(numbers);



// 10.[1, 2, 3, 4, 5] — splice менен 2ни 20 менен алмаштыргыла.
// const numbers = [1, 2, 3, 4, 5];
// let res = numbers.splice(1,1,20);
// console.log(numbers);

// 11[1, 2, 3] — ар бир санды 2ге көбөйткүлө (map).


// const numbers = [1, 2, 3]; 
// let res = numbers.map(el => el *2)
// console.log(res);



// ['ali', 'aida', 'bek'] — ар бир атты чоң тамга менен жазгыла (map + toUpperCase).


// const name = ["ali", "aida", "bek"];
// let res = name.map()
// 12['ali', 'aida', 'bek'] — ар бир аттын биринчи тамгасын гана чоң кылгыла → ['Ali', 'Aida', 'Bek'].

//   const name = ['ali', 'aida', 'bek'];
//   let res = name.map((el) => el.toUpperCase());
//   console.log(res);
  
// 14[1, 2, 3, 4, 5, 6] — жуп сандарды гана калтыргыла (filter).
// const san = [1, 2, 3, 4, 5, 6]; 
// let res = san.filter((el)=> el % 2 === 0 ? console.log(el): 0);


// 15[12, 5, 30, 8, 50] — 10дон чоң сандарды гана калтыргыла (filter).
// const san = [12, 5, 30, 8, 50];
// let res = san.filter((el)=> el > 10);
// console.log(res );

// 16['cat', 'elephant', 'dog', 'giraffe'] — 3 тамгадан узун сөздөрдү калтыргыла.


// const janubar = ["cat", "elephant", "dog", "giraffe"]; 
// let res = janubar.filter((el)=> el.length >3);
// console.log(res);


// 17['apple', 'banana', 'mango'] — массивде 'banana' барбы? (includes) → true/false.


// const jemish = ["apple", "banana", "mango"]; 
// let res = jemish.includes("banana")
// console.log(res);

// 18'Hello World' — бул сапта 'World' сөзү барбы? (includes).

// const soz = "Hello World";
// let res = soz.includes("World");
// console.log(res);

// 19['js', 'css', 'html'] — filter + includes менен 's' 
// тамгасы бар сөздөрдү калтыргыла.


// const it = ["js", "css", "html"]; 
// let res = it.filter((el) => el.includes("s"));
// console.log(res);

// // 20[3, 8, 1, 10, 6] — 5тен чоңдорун filter менен алып,
//  аларды sort менен өсүү тартибинде тизип, reduce менен суммасын 
// тапкыла.

// const san = [3, 8, 1, 10, 6]; 
// let res = san.filter((el)=> el > 5).sort((a,b) => a-b) ;
// console.log(res);

// let sum = res.reduce((acc,el)=> acc + el, 0);
// console.log(sum);


// 1. filter менен складта бар (саны > 0) товарларды гана чыгаргыла.
// const skalat = [
//   { name: "shampun", price: 150, count: 4 },
//   { name: "sheker", price: 30, count: 10 },
//   { name: "krem", price: 80, count: 0 },
//   { name: "tarak", price: 450, count: 5 },
// ];


// let bar = skalat.filter(el=> el.count > 0);
// console.log(bar);




// 2. map менен ар бир товардын атын чоң тамга менен массив кылгыла: 
// ["НАН", "СҮТ", ...].

// const tovar = [
//    { name: "nan" , price: 30, count: 10},
//     { name:" cum" , price: 80, count: 0},
//      { name: "cur" , price: 450, count: 5},
//     { name:"jumurtka" , price: 80, count: 30},


//  ];


//  let names = tovar.map(el => el. name.toUpperCase());
//  console.log(names);
 


// 3. reduce менен складтагы бардык товарлардын жалпы суммасын
//  эсептегиле (баасы * саны).

// const skalat = [
//   { name: "shampun", price: 150, count: 4 },
//   { name: "sheker", price: 30, count: 10 },
//   { name: "krem", price: 80, count: 0 },
//   { name: "tarak", price: 450, count: 5 },
// ];
 
// let names = skalat.reduce((acc,el)=>  acc+el.price * el.count,0);
// console.log(names);



// 4. find менен баасы 100дөн кымбат биринчи товарды тапкыла.

// const skalat = [
//   { name: "shampun", price: 150, count: 9 },
//   { name: "sheker", price: 30, count: 10 },
//   { name: "krem", price: 80, count: 0 },
//   { name: "tarak", price: 450, count: 5 },
// ];

// let bar = skalat.find(el => el.price > 100);
// console.log(bar);




//5
// const tovar = [
//     { name: "nan" , price: 30, count: 10},
//     { name:" cum" , price: 80, count: 0},
//     { name: "cur" , price: 450, count: 5},
//     { name:"jumurtka" , price: 80, count: 30},


// ];


// let bar = tovar.filter(el => el .count > 0);
// console.log(bar);


// let names = tovar.map(el => el.name.toUpperCase());
// console.log(names);


// let total = tovar.reduce((acc,el) => acc + el.price * el.count,0);
// console.log(total);


// let expensive = tovar.find((el)=> el .price > 100);
// console.log(expensive);





