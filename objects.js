//Objects-
//  ключ и значение бодуп экиге болүнөт 
// delete- менен ключун очүрүп салабыз
// values- 
// 
// let user = {
// //   id: 1,
// //   name: "Nurasyl",
// //   age: 13,
// //   status: "puple",
// //   hobby: "reading",
// //   address: {
// //     street: "Manas",
// //     dom: 12,
// //   },
// // };

// // console.log(user.address.dom);

// // user.surname="Asanov"
// // user.isStudent=false
// // delete(user.status)
// // console.log(user);

// // console.log(Object.keys(user));
// // console.log(Object.values(user));

// // const student = {
// //   name: "Aida",
// //   age: 19,
// //   education: {
// //     university: "KNU",
// //     course: {
// //       name: "Frontend",
// //       duration: "6 months",
// //       teacher: {
// //         name: "Guldana",
// //         experience: 2,
// //       },
// //     },
// //   },
// // };

// // console.log(student.education.course.name);

// // console.log(student.education.course.teacher.name);

// let arr = [
//   {
//     id: 1,
//     name: "Nurasyl",
//   },
//   {
//     id: 2,
//     name: "Guldana",
//   },
//   {
//     id: 3,
//     name: "Asem",
//   },
//   { id: 4, name: "Aigul" },
//   { id: 5, name: "Guldana" },
// ];

// // console.log(arr[0].name);
// // console.log(arr[3].name);

// // arr.map((el) => console.log(el.name));

// arr.filter((a) => (a.name === "Guldana" ? console.log(a.name) : ""));
// let res=arr.find((el) => (el.name === "Guldana" ? el.name : ""));
// console.log(res);

// // console.log(user);

// // console.log(user.name);
// // console.log(user.age);

// // console.log(${user.name} ${user.age} jashta );

// // console.log(user.name +" "+ user.age + " jashta");


// 1-деңгээл: Жөнөкөй объекттер
// Задача 1. Student
// student объектин түз. Анын төмөнкү касиеттери болсун:
// name: "Aida"
// age: 20
// group: "Frontend"
// Үч касиеттин маанисин өз-өзүнчө console.log() менен чыгар.

// const student = {
//   name: "Aida",
//   age: 20,
//  group: "Frontend",

//  };

// console.log(student.name);
// console.log(student.age);
// console.log(student.group);

// Задача 2. Prodage: 20,

// product объектин түз:
// name: "Laptop"
// price: 75000
// inStock: true
// Товардын атын чыгар.
// Баасын чыгар.
// Товардын кампада бар экенин чыгар.

// const product = {
//   name: "Laptop",
//    price: 75000,
//    inStock: true,
// };
// console.log("name:",  product.name );
// console.log("price:", product.price);
// console.log("instock:", product.inStock);



// Задача 3. Объекттин маанисин өзгөртүү
// const user = {
//   name: "Ali",
//   age: 18,
//   city: "Osh"
// };
 
// user.age = 19;
// user.city ="Bishkek";
// console.log(user);


// age маанисин 19 кыл.
// city маанисин "Bishkek" кыл.
// Объектти толугу менен чыгар.




// Задача 4. Жаңы property кошуу
// const car = {
//   brand: "BMW",
//   year: 2020
// };

// car["color"] = "black";
// car["price"] = 30000;
// console.log(car);



// color деген касиет кошуп, маанисин "black" кыл.
// price деген касиет кошуп, маанисин 30000 кыл.
// Объектти чыгар.


// Задача 5. Property өчүрүү
// const book = {
//   title: "JavaScript",
//   author: "Ivan",
//   pages: 300,
//   price: 500
// };


// delete book["price"];
// console.log(book);


// price касиетин өчүрүп, калган объектти чыгар.




// 2-деңгээл: Object методдору
// Задача 6. Object.keys()
// const user = {
//   name: "Aida",
//   age: 25,
//   city: "Bishkek"
// };

// console.log(Object.keys(user));

// Объекттин бардык касиеттеринин аттарын массив түрүндө чыгар.
// Задача 7. 
// 

// const user = {
//   name: "Aida",
//   age: 25,
//   city: "Bishkek"
// };


// const values = Object.values(user);
// console.log(values);



// Жогорудагы объекттин бардык маанилерин массив түрүндө чыгар.


// Задача 8.
// const product = {
//   name: "Phone",
//   price: 25000,
//   color: "white",
// };

// console.log(Object.entries(product));
   
// Объекттин ар бир касиесин жана маанисин жуптар түрүндө чыгар.



// Задача 9. Касиет барбы?
// const user = {
//   name: "Aida",
//   age: 22,
//   email: "aida@gmail.com"
// };

// console.log("email" in user);
// console.log("password" in user);

// email жана password касиеттеринин бар же жок экенин текшер. Натыйжаны true же false түрүндө чыгар.



// Задача 10. Касиеттердин саны
// const phone = {
//   brand: "Apple",
//   model: "iPhone 16",
//   price: 80000,
//   color: "black",
//   memory: "256GB"
// };

// console.log(Object.keys(phone).length);

// Объектте канча касиет бар экенин эсепте.
// 3-деңгээл: Вложенный объекттер
// Задача 11. User жана address


// const user = {
//   name: "Asan",
//   age: 24,
//   address: {
//     city: "Bishkek",
//     street: "Chui",
//     house: 15
//   }
// };

// console.log(user.name);
// console.log(user.address.city);
// console.log(user.address.street);
// console.log(user.address.house);
// Төмөнкүлөрдү чыгар:
// Колдонуучунун аты.
// Шаары.
// Көчөсү.
// Үйүнүн номери.


// Задача 12. Student жана course

// const student = {
//   name: "Meerim",
//   course: {
//     title: "Frontend",
//     duration: "6 months",
//     teacher: {
//       name: "Guldana",
//       experience: 2,
//     }
//   }
// }

// console.log(student.course.title);
// console.log(student.course.duration);
// console.log(student.course.teacher.name);
// console.log(student.course.teacher.experience);


// Курстун атын чыгар.
// Курстун узактыгын чыгар.
// Мугалимдин атын чыгар.
// Мугалимдин тажрыйбасын чыгар.
// 4-деңгээл: Логикалык тапшырмалар

// Задача 13. Айлыкты эсептөө

// const employee = {
//   name: "Aibek",
//   salary: 50000,
//   bonus: 10000
// };

// console.log(employee.salary + employee.bonus);

// Кызматкердин айлыгын жана бонусун кошуп, жалпы суммасын чыгар.
// Задача 14. Эки объектти салыштыруу

// const user1 = {
//   name: "Ali",
//   age: 20
// };

// const user2 = {
//   name: "Ali",
//   age: 25
// };


// console.log(user1.name === user1.name);
// console.log(user2.age === user2.age);
// Эки колдонуучунун аттары бирдейби — текшер. Андан кийин жаштары бирдейби — текшер.

// Задача 15. Татаал задача — интернет-дүкөн

// const order = {
//   orderId: 101,
//   customer: {
//     name: "Aida",
//     city: "Bishkek"
//   },
//   product: {
//     name: "Laptop",
//     price: 70000,
//     quantity: 2
//   },
//   delivery: {
//     price: 500
//   }
// };


// console.log(order.orderId);
// console.log(order.customer.name);
// console.log(order.customer.city);
// console.log(order.product.name);
// console.log(order.product.price);
// console.log(order.product.quantity);
// console.log(order.delivery.price);


// Практика 


// const contact = {
//   name: "Adilet",
//   phone: "0700123456",
//   address: {
//     city: "Bishkek",
//     street: "Manas",
//   },
// };

// console.log(contact.phone);
// console.log("Osh");
// contact.email ="adilet@gmail.com";
// delete contact.address.street;







