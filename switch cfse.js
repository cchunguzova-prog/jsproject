//break-сындыруу
//case- шартты тузөт
//switch-керектүү кодду аткаруучу шартуу оператор.
// default- эч бир case туура келбегенде аткарылат.


// let day =30;

// switch (day) {
//   case 1:
//     console.log("ponidelnik");
//     break;
//   case 2:
//     console.log("Vtornik");
//     break;
//   case 3:
//     console.log("sreda");
//     break;
//   case 4:
//     console.log("chetvek");
//     break;
//   case 5:
//     console.log("patnitsa");
//     break;
//   case 6:
//     console.log("subota");
//     break;
//   case 7:
//     console.log("voskrisenie");
//     break;
//     default:console.log("Mynday run jok")

// }


// let day = 30;

// switch (day) {
//   case 1:
//     console.log("Ponedelnik");
//     break;
//   case 2:
//     console.log("Vtornik");
//     break;
//   case 3:
//     console.log("Sreda");
//     break;
//   case 4:
//     console.log("Chetverg");
//     break;
//   case 5:
//     console.log("Pyatnisa");
//     break;
//   case 6:
//     console.log("Subbota");
//     break;
//   case 7:
//     console.log("voskreseniya");
//     break;
//   default:
//     console.log("Mynday kun jok");
// }

// let a = 20;

// switch (true) {
//   case a > 1 && a < 10:
//     console.log("0");
//     break;
//   case a > 30:
//     console.log("1");
//     break;
//   default:
//     console.log("5");
// }



// Switch case боюнча 10 тапшырма
// 1. Аптанын күнү. 1ден 7ге чейинки сан берилет. Ал сандын аптанын кайсы күнү экенин чыгаргыла (1 → "Дүйшөмбү"). Башка сан болсо "Мындай күн жок" деп чыгаргыла.

// 2. Светофор. color өзгөрмөсү берилет ("red", "yellow", "green"). Ар бир түскө жараша аракетти чыгаргыла: "Токто", "Даярдан", "console.log("Даярдан");".
// let color="yellow";
// switch(color){
//     case("red"):
//     console.log("Токто");
//     break;
//     case("yellow"):
//     console.log("Даярдан");
//     break;
//     case("green"):
//     console.log("Жүр");
//     break;
//     default:console.log("Мындай түс жок");
    
// }
// 3. Калькулятор. Эки сан жана оператор (+, -, *, /) берилет. Натыйжаны эсептегиле. Нөлгө бөлүүнү өзүнчө текшергиле.

// let a =15;
// if(a %3===0 && a % 5 ===0){
//     console.log("");
    
// }


    
// }
// 4. Мезгил. Айдын номери (1–12) берилет. Ал кайсы мезгилге кирерин чыгаргыла: кыш, жаз, жай же күз. Бир нече case бир блокту бөлүшсүн (fall-through колдонгула).
// let ai=9;
// switch (ai) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("kush");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("jaz");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("jai");
//     break;
//   case 9:
//   case 10:
//   case 11:
//   case 12:
//     console.log("riz")
//     break;
//     default:
//         console.log("Mundai ai jok");
// }

// 5. Баа. Студенттин баасы ("A", "B", "C", "D", "F") берилет. Ар бир баага жараша комментарий чыгаргыла: "Эң жакшы", "Жакшы", "Канааттандырарлык" ж.б.
    // let grade =5;
    // switch (grade){
    //     case 5:
    //     console.log("Эң жакшы");
    //     break;
    //     case 4:
    //     console.log("Жакшы");
    //      break;
    //      case 3:
    //         console.log("Канааттандырарлык");
    //         break;
    //         default:
    //             console.log("ech kandai baa algan jok")


// 6. Айдагы күндөрдүн саны. Айдын номери берилет. Ал айда канча күн бар экенин чыгаргыла (февраль = 28). Бирдей күндөгү айларды бириктиргиле.

// let month=44;

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 12:
//     console.log("31 kun");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 kun");
//     break;
//     case 2:
//         console.log("28 kun")
//         break;

//     default:
//     console.log("bir da mubdai kun jok")
// }

// 7. Үнсүз/үндүү тамга. Бир тамга берилет. Ал үндүү тамгабы же үнсүз тамгабы, аныктагыла. Чоң жана кичине тамганы эске алгыла (toLowerCase()).

// let tamga = "ч";
// switch (tamga) {
//   case "а":
//   case "э":
//   case "ы":
//   case "и":
//   case "о":
//   case "ө":
//   case "у":
//   case "ү":
//     console.log("unduu tamga");

//   case "б":
//   case "в":
//   case "г":
//   case "д":
//   case "ж":
//   case "з":
//   case "й":
//   case "к":
//   case "л":
//   case "м":
//   case "н":
//   case "ң":
//   case "п":
//   case "р":
//   case "с":
//   case "т":
//   case "ф":
//   case "х":
//   case "ц":
//   case "ч":
//     console.log("unsuz tamga");
//     break;
//   default:
//     console.log("ech kandai tamga jok");
// }

// 8. Меню. Колдонуучу 1–4 сандарынын бирин тандайт: 1 – "Кофе", 2 – "Чай", 3 – "Шире", 4 – "Чыгуу". Тандалган суусундуктун атын жана баасын чыгаргыла.
//  let Меню = 4;
//  switch(Меню ) {
//     case 1:
//         console.log("Amerikano 60som");
//         break;
//         case 2:
//         console.log("kara tea 100som");
//         break;
//         case 3:
//             console.log("konfet 150som");
//             break;
//             case 4:
//             console.log("Чыгуу");
//             break;
//             default:
//                 console.log("ech kandai  suusunduk jok");

//  }
// 9. break жок болсо эмне болот? Төмөнкү коддун натыйжасын код иштетпей туруп алдын ала айткыла. Анан текшерип, эмне үчүн мындай болгонун түшүндүргүлө.
// let x = 2;
// switch (x) {
//   case 1: 
//   console.log("Бир");
//   break;
//   case 2: 
//   console.log("Эки");
//   break;
//   case 3: 
//   console.log("Үч");
//   break;
//   default: 
//   console.log("Default");
// }
// 10. switch(true) менен балл. 0–100 аралыгындагы балл берилет. switch (true) жана case score >= 90: сыяктуу шарттарды колдонуп, бааны (A–F) аныктагыла.
// Каалашаңыз, ар бир тапшырманын жообун же студенттер үчүн кыскача теориясын да даярдап берем.
// let score =70;

// switch(true) {
//     case score >=90:
//     console.log("A");
//     break;
//     case score >=80:
//         console.log("B");
//         break;
//         case score >=70:
//             console.log("C");
//             break;
//             case score >=60:
//             console.log("D");
//             break;
//             default:
//             console.log("F");
    
// }




