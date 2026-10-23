//Logikalyk Operator  3tyry bar:
//1. && жана дегенди тушүндүрөт , жана дегенде канча шарт койбойлу,
// ошонун баары туура болушу керек ошондо treu чыгат
//2.|| жэ дегенди тушүндүрөт, бир условия туура болсо True  чыга берет
//3.  !-Emes  мааанисин тескери кылат,эгерде true болсо false кылат,false болсо  true кылат.
//4 if эгерде деп которулат,ушинтип жазгандан кийин () ичине шарт жазабыз
// 5. else- эгерде деп которулат

//= таандык
// == маанисин гана салыштырат,
// === маанисин да тибин да салыштырат
// != мааниси бирдей эмеспи
// !== мааниси же тиби бирдей эмеспи
// > чоңбу
// < кичинеби
// >= чоң жэ барабарбы
// <=  кичине жэ барабарбы

// console.log(5>=6 && 5<=10);

// let name1 ="Asan"
// let name2 = "Uson"

// let name3 = 12
// let name4 = 12

// console.log(name1 === name2 && name3 === name4);

//SHARTTUU OPERATOR:3
// 1) ()- шарт тузөбүз{}-туура болсо console.log го жазабыз if (шарт) {
// console.log("...");
// }

// if
// if....else
// if else.. if else

// let num1 = 2;
// let isStudent = true;

// if (num1 >= 3 && num1 <= 6) {
//   console.log("...");
// } else if (num1 > 6 && num1 < 18) {
//   console.log("Mektepke barsyn");
// } else if (num1 >= 18 && num1 <= 25) {
//   console.log("Universitetke barsyn");
// } else if (isStudent === false) {
//   console.log("Shabun");
// } else {
//   console.log("bir da shart tuura emes");
// }

//tERUNARNUI OPERATOR(?:)

// let text="Asan "
// let age=15

// console.log (text==="Asan" || age>=20 ? console.log("maalymat tuura") : console.log("maalumat tuura emes"));

// console.log;text === "Asan" ? console.log("tuura") : console.log;("tuura emes")

//1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let a=10

// if(a===10){
//     console.log("Verno");

// }else{
//     console.log;("Neverno");

// }

// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
//  let a=50
//  let b=100

//  if(a>b){
//     console.log("a больше b");

//  }else{(b<a)
//     console.log("a меньше b")

//  }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.

// let a = -2;

// if(a>0){
//     console.log("positive");

// }else if(a===0){
//     console.log("ravno");

// }else{
//     console.log("negativa");

// }

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".

// let number=45;
// if(number %2===0){
//     console.log("chotkoe chislo");
// }else{
//     console.log("nechotkoe chislo");
// }

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// let a=10;
// let b=2;
// console.log(a >= 15|| b <= 0 ? console.log("chotkoe chislo") : console.log("nechotkoe chislo"));

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// let s
// console.log;( typeof s);

// if(typeof s==="boolean"){
//     console.log("boolean");

// }else if(typeof s==="string"){
//     console.log;("string");

// }else if(typeof s==="number"){
//     console.log;("number");
// }

// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'
// let a=1;
// let b=8;
// if((a > 4 && a < 10 ) || (b >=7 && b <17)){
//     console.log("verno");

// }else {
//     console.log("neverno");
// }

// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от
// 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
// весна, осень).

// let month=4;
// if (month===12 ||month===1 || month===2) {
//   console.log("zima");
// }else if(month>=3 && month<=5){
//     console.log("vecna");

// }else if(month>=6 && month<=8){
//     console.log("leto");

// }else if(month>=9 && month<=11){
//     console.log("osen");

// }

// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1
// до 31. Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).

// let day=24;

// if(day>=1 && day<=10 ){
//     console.log("pervai");

// }else if(day>=11 && day<=20){
//     console.log("vtarai");

// }else if (day>=21 && day<=31){
//      console.log("treti");

// }

// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой
// переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в
// противном случае выведите ‘нет’.

// let a=`12345`;
// console.log(["1", "2", "3"].includes(a[0]) ? "да" : "нет");

// 1. Возрастное ограничение
// Попроси пользователя ввести его возраст. Если возраст меньше 18, выведи сообщение "Доступ запрещен". Если возраст больше или равен 18, выведи "Доступ разрешен".
// let age = Number(prompt("Введите возраст"));
// if(age<18){
//     console.log("doctup razrishon");
// }else{
//     console.log("Dostup zaprishon");

// }

// 2. Оценка успеваемости
// Попроси пользователя ввести его баллы за экзамен (от 0 до 100). Если баллы больше или равны 90, выведи "Отлично", если от 70 до 89 — "Хорошо", если от 50 до 69 — "Удовлетворительно". Если баллы меньше 50 — "Неудовлетворительно".

// let ball = 25;
// if(ball>= 20)

// {else if (ball>=0 && ball<=100)
//       console.log("otlichno");
// }else if(ball>=70 && ball<=89){
//     console.log("Xorosho");
// }else if(ball>=50 && ball<=69){
//     console.log("Удовлетворительно");
// }else{
//     console.log("Неудовлетворительно");

// }

// 3. Проверка времени суток
// Попроси пользователя ввести час (от 0 до 23). Если время от 0 до 11 — выведи "Доброе утро", от 12 до 17 — "Добрый день", от 18 до 23 — "Добрый
// let hour= prompt("ВВидиде час");
// if(hour<=11) {
//     console.log("Доброе утро");
// }else if(hour<=17){
//     console.log("Добрый день");
// }else if (hour<=23){
//     console.log("Добрый");
// }

// 4. Проверка на кратность
// Пользователь вводит число. Нужно проверить, кратно ли оно 3 или 5. Если кратно 3 — вывести "Число кратно 3", если кратно 5 — "Число кратно 5". Если кратно и 3, и 5 — "Число кратно 3 и 5". Если не кратно — "Число не кратно ни 3, ни 5".
// let num = prompt("ВВидиде число:");
// if(num % 3==0 &&num % 5 == 0){
//     console.log("Число кратно 3 и 5");
// }else if (num % 3 == 0){
//      console.log("Число кратно 3");

// } else if( num %5==0){
//     console.log("Число кратно 5");
// }else{
//     console.log("Число кратно 3, ни 5");

// }

// 5. Проверка пароля
// Пользователь одит пароль. Если пароль равен "admin123", вывести сообщение "Доступ разрешен", иначе — "Неверный пароль".

// let password = prompt("ВВидиде пароля");
// if(password == "cholpon456") {
//     console.log("Доступ разрешен");

// }else{
//     console.log("Неверный пароль");

// }

// let san = prompt("ВВидиде число");
// if(10>0){
//     console.log("Чоң сан");

// }else{
//     console.log("Кичине жэ барабар");

// }

// let age = prompt("ВВидиде возраст");
// if(age<13){
//     console.log("ребенок");

// }else if(age <18){
//     console.log("Подросток");
// }else {
//     console.log("Взрослый");
// }

// let number = 90;
// if (number < 0) {
//   console.log("Терс сан");
// } else if (number > 0) {
//   console.log("Оң сан");
// } else {
//   console.log("Нөл");
// }



// let age = 9;
// if(age > 18){
//   console.log("Кирүүго болот ");
  
// }else if(age < 18){
//   console.log("Кирүүго болбойт ");
// }


// let num =70;
// if(num % 2===0){
//   console.log("Жуп сан");
  
// }else if(num % 2===0){
//   console.log("Так сан");
// }



// let a = 92;
// let b = 60;
// let c = 250;
// if(a >= b && a >= c ){
//   console.log("Эң чоңу: a = " + a);
  
// }else if(b >= a && b>=c){
//      console.log("Эң чоңу: b=" + b);

// }else{
//   console.log("Эң чоңу: c= " + c );

// }




// let year = 2024;
// if(year & 400 ===0){
//   console.log("kabat jul");
  
// }else if(year % 100===0){
//   console.log("kabat jul");
// }else if( year % 4 ===0){
//   console.log("kabat jul");
// }else{
//   console.log("kabat jul");
// }


