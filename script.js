// //     // // // document.write("<h1 id='head'>Elzero</h1>")
// //     // // // ;document.getElementById("head").style = "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;"
// //     // // // ;console.log("%cI'm%c Alive %cBitch", "font-size: 40px; color: white; background-color: blue;", "font-size: 40px; color: green; font-weight: bold;", "font-size: 40px; color: red; text-decoration: line-through;")
// //     // // // ;console.group("Gruop 1")
// //     // // // ;console.log("Message One")
// //     // // // ;console.log("Message Two")
// //     // // // ;console.groupCollapsed("Child Group")
// //     // // // ;console.log("Message One")
// //     // // // ;console.log("Message Two")
// //     // // // ;console.groupCollapsed("Grand Child Group")
// //     // // // ;console.log("Message One")
// //     // // // ;console.log("Message Two")
// //     // // // ;console.groupEnd()
// //     // // // ;console.groupEnd()
// //     // // // ;console.groupEnd()
// //     // // // ;console.group("Group 2")
// //     // // // ;console.log("Message One")
// //     // // // ;console.log("Message Two")
// //     // // // ;console.groupEnd()
// //     // // // ;console.table(["Mohamed" , "Kholy", "Elzero", "Ahmed", "Noor"])
// //     // // // ;console.table(["apples", "oranges", "bananas"]);

// //     // // // //we can stop it by comments like this . or this /* */
// //     // // // /*
// //     // // //  *;console.log("Iam In Console")
// //     // // //  *;document.write("Iam In Page")
// //     // // //  */

// //     // // // Assignment 2

// //     // // // let numberOne = 10 ; numberTwo = 20;
// //     // // // console.log(numberOne + "" + numberTwo);
// //     // // // console.log(typeof(numberOne + "" + numberTwo));
// //     // // // console.log(`${numberOne}${numberTwo}`);
// //     // // // console.log(typeof(`${numberOne}${numberTwo}`));
// //     // // // console.log(numberTwo + "\n" + numberOne);
// //     // // // console.log(`${numberTwo}
// //     // // // ${numberOne}`);

// //     // // // console.log(elzero.innerHTML); // object
// //     // // // console.log(typeof elzero); // object

// //     // // // console.log("`I'm In\n\\\\ \n Love \\\\ \"\"\" \'\'\'\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");

// //     // // // let a = 21; b = 20;
// //     // // // console.log(a + ("_" + b + a).repeat(3) + "_" + b);

// //     // // // let title = "Elzero" ; desc = "Elzero Web School" ; date = "25/10" ;
// //     // // // let structur = `
// //     // // //     <div>
// //     // // //         <h3>${title}</h3>
// //     // // //         <p>${desc}</p>
// //     // // //         <span>${date}</span>
// //     // // //     </div>
// //     // // // `
// //     // // // document.write(structur.repeat(4));


// //     // // // Assignment [018 to 022] ----------------------

// //     // // // Replace ? With Arithmetic Operators
// //     // // // console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// //     // // // let num = 3;
// //     // // // console.log(num * (true + true)); // 6
// //     // // // console.log(num + true + true + true ); // 6
// //     // // // console.log(num * num - true - true - true); // 6
// //     // // // console.log(num + num); // 6
// //     // // // console.log(num * num / num + num); // 6
// //     // // // console.log(num ** num / num - num); // 6


// //     // // // let numT = "10";

// //     // // // console.log(+numT + Number(numT)); // 20
// //     // // // console.log(+numT * +numT / numT + +numT); // 20
// //     // // // console.log(Number(numT) * numT / numT * (true + true)); // 20
// //     // // // console.log(((-numT + numT * numT % (true + true)) * (true + true)) * -1); // 20

// //     // // // let points = 10;
// //     // // // console.log((points * points) / 7.5 ); // 13
// //     // // // console.log((points % (true + true + true + true) - points) * -1 ); // 8;

// //     // // // let a = 10;
// //     // // // let b = "20";
// //     // // // let c = 80;

// //     // // // console.log(++a + +b++ + +c++ - +a++);
// //     // // // // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// //     // // // /*
// //     // // // [++a]
// //     // // // - Value: 11
// //     // // // - Explain: Pre Increment
// //     // // // [+]
// //     // // // - Explain: Addition Sign  
// //     // // // [+b++]
// //     // // // - Value : 21
// //     // // // - Explain : Unary Plus, Post Increment
// //     // // // [+]
// //     // // // - Explain : Addition Sign  
// //     // // // [+c++]
// //     // // // - Value : 81
// //     // // // - Explain : Unary Plus, Post Increment
// //     // // // [-]
// //     // // // - Explain : Decreas Sign
// //     // // // ![+a++]
// //     // // // - Value : 11 // *12 not 11 : 11 + 1.
// //     // // // - Explain : Unary Plus, Post Increment
// //     // // // */

// //     // // // console.log(++a + -b + +c++ - -a++ + +a);
// //     // // // // a = 12, b = 21, c = 81
// //     // // // /*
// //     // // // [++a]
// //     // // // - V : 13
// //     // // // - E : Pre Increment
// //     // // // [+]
// //     // // // - E : Addition Sign
// //     // // // [-b]
// //     // // // - V : -21
// //     // // // - E : Negation Operator
// //     // // // [+]
// //     // // // - E : Addition Sign
// //     // // // [+c++]
// //     // // // - E : Unary Plus, Post Increment
// //     // // // - V : 82
// //     // // // [-]
// //     // // // - E : Dicreas Sign
// //     // // // [-a++]
// //     // // // - E : Negation Operator, Post Increment
// //     // // // - V : -14
// //     // // // [+]
// //     // // // - E : Addition Sign
// //     // // // [+a]
// //     // // // - E : Unary Plus
// //     // // // - V : 14
// //     // // // */

// //     // // // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// //     // // // a = 14, b = -21, c = 82
// //     // // /*
// //     // // [--c]
// //     // // - E : Pre Dicrement 
// //     // // - V : 81
// //     // // [+]
// //     // // - E : Addition Sign
// //     // // [+b]
// //     // // - E : Unary Operator
// //     // // - V : 21
// //     // // [+]
// //     // // - E : Addition Sign
// //     // // [--a]
// //     // // - E : Post Dicrement
// //     // // - V : 13
// //     // // [*]
// //     // // - E : Multiable Sign
// //     // // [+b++]
// //     // // - E : Unary Plus, Post Increment
// //     // // - V : 22
// //     // // [-]
// //     // // - E : Dicrement Sign
// //     // // [+b]
// //     // // - E : Unary Plus
// //     // // - V : 22
// //     // // [*]
// //     // // - E : Multiable Sign
// //     // // [a]
// //     // // - E : Normal Variable Call
// //     // // - V : 13
// //     // // [+]
// //     // // - E : Addition Sign
// //     // // [--a]
// //     // // - E : Post Dicrement
// //     // // - V : 12
// //     // // [-]
// //     // // - E : Dicreis Sign
// //     // // [+true]
// //     // // - E : Unary Plus
// //     // // - V : 1
// //     // // */

// //     // // // let d = "-100";
// //     // // // let e = "20";
// //     // // // let f = 30;
// //     // // // let g = true;

// //     // // // console.log(-d * e); // 2000
// //     // // // console.log(++e * ++g + -d + ++f); // 173

// //     // // let a = 100;
// //     // // let b = 2_00.5;
// //     // // let c = 1e2;
// //     // // let d = 2.4;

// //     // // // Find Smallest Number In All Variables And Return Integer
// //     // // console.log(parseInt(Math.min(a, b, c, d))); // 2 

// //     // // // Use Variables a + d One Time To Get The Needed Output
// //     // // console.log(Math.pow(a, parseInt(d))); // 10000

// //     // // // Get Integer "2" From d Variable With 4 Methods
// //     // // console.log(Math.round(d)); // 2
// //     // // console.log(Math.floor(d)); // 2
// //     // // console.log(Math.trunc(d)); // 2
// //     // // console.log(parseInt(d)); // 2

// //     // // // Use Variables b + d To Get This Valus
// //     // // console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// //     // // console.log(parseInt(Math.ceil(b) / Math.ceil(d))); // 67 => Number


// //     // // Assignment and Challenges - WEEK 4.-----------------------
// //     // /*
// //     // -Number Methods----------
// //     //     --isInteger()
// //     //     --isNan()
// //     //     --MAX_VALUE()
// //     //     --MIN_VALUE()
// //     //     --toFixed()
// //     //     --toString()
// //     //     --parseFloat()
// //     //     --parseInt()
// //     // -Math Object-------------
// //     //     --ceil()
// //     //     --fllor()
// //     //     --round()
// //     //     --max(x, y, z)
// //     //     --min(x, y, z)
// //     //     --pow(x, y)
// //     //     --random()
// //     //     --sign()
// //     //     --trunc()
// //     // -String Methods----------
// //     //     --charAt(), []
// //     //     --length()
// //     //     --trim()
// //     //     --toUpperCase(), toLowerCase()
// //     //     --indexOf(), lastIndexOf()
// //     //     --slice()
// //     //     --split()
// //     //     --substr()
// //     //     --substring()
// //     //     --includes()
// //     //     --startsWith(), endsWith
// //     // */

// //     // let a = "Elzero Web School";

// //     // console.log(a.slice(2, 6).charAt(0).toUpperCase()+a.slice(3, 6)); // Zero

// //     // console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// //     // console.log(a.split(" ", 1)); // ["Elzero"]

// //     // console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School

// //     // console.log(`${a.charAt(0).toLowerCase()}${a.toUpperCase().slice(1 , a.length - 1)}${a.charAt(a.length - 1).toLowerCase()}`); // eLZERO WEB SCHOOl
    
// //     // // ---------------------------------
// //     // // Examples
// //     // console.log(100_000); // 100000
// //     // console.log(100000); // 100000
// //     // console.log(5e4 + 5e4); // 100000

// //     // // Your Solutions
// //     // console.log(10 ** 5); // 100000
// //     // console.log(Math.pow(10, 5)); // 100000
// //     // console.log(10 * 10 * 10 * 10 * 10); // 100000
// //     // console.log(1e5); // 100000
// //     // console.log(2e5 / 2); // 100000
// //     // console.log(10000 * 10); // 100000
// //     // console.log(1e4 * 1e1); // 100000
// //     // console.log(parseInt(100000.54)); // 100000
// //     // console.log(Math.max(Math.pow(10, 5), 1e4, 4e2)); // 100000
// //     // console.log(Math.min(1e5, 1e99, 1e99999, 1e999999999999999999999)); // 100000

// //     // console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991
// //     // //!!!!!!!!!!!!!!
// //     // console.log(Number.MAX_SAFE_INTEGER); // 16

// //     // let myVar = "100.56789 Views";

// //     // console.log(parseInt(myVar)); // 100
// //     // console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// //     // let num = 10;

// //     // console.log(Number.isInteger(num) + Number.isInteger(num) ); // 2

// //     // let flt = 10.4;

// //     // console.log(Math.round(flt)); // 10
// //     // console.log(Math.floor(flt)); // 10
// //     // console.log(Math.trunc(flt)); // 10
// //     // console.log(parseInt(flt)); // 10
// //     // console.log(Number(flt.toFixed(0))); // 10

// //     // console.log((parseInt(Math.random() * 5) + 1)); // 0 || 1 || 2 || 3 || 4

// //     // // ----------------------------------------

// //     // let userName = "Elzero";
// //     // console.log(userName.charAt(0).toLowerCase()); // e
// //     // console.log(userName.slice(0, 1).toLowerCase()); // e
// //     // console.log(userName.substr(0, 1).toLowerCase()); // e
// //     // console.log(userName.substring(0, 1).toLowerCase()); // e
// //     // console.log(userName.substring(userName.indexOf("E"), userName.indexOf("l")).toLowerCase()); // e
// //     // console.log(userName[0].toLowerCase().repeat(3)); // eee

// //     // let word = "Elzero";
// //     // let letterZ = "z";
// //     // let letterE = "e";
// //     // let letterO = "O";

// //     // console.log(word.includes("z")); // True
// //     // console.log(word.startsWith("E")); // True
// //     // console.log(word.endsWith("o")); // True

    
// //     // Assignments And Notes --- WEEK 5.---------------
// //     /*
// //     -comarison operators
// //     -- == Equal
// //     -- != Not Equal
// //     -- === Identical Equal, Value and Type
// //     -- !== Not Indentical Equal
// //     -Logical operators
// //     -- ! NOT
// //     -- && AND
// //     -- || OR
// //     -if Conditions
// //     -- if 
// //     -- if else
// //     -- else
// //     -- nested if
// //     - Conditional Ternary Operator
// //     -- (expression) ? (action1"true") : (action2"false);
// //     -- (expression1) ? action"true" 
// //        : (expression2)"false" ? A "true" : A "false";
// //     -Nullish Coalescing operator And logical Or.
// //     -- ??, taking the second choise if the one is Undefiend or null.
// //     -- ||, taking the second choise if the one is falsy value, undefiend or null and 0 or "".
// //     -Boolean()
// //     -- Boolean(x), is x true value or falsy one?.
// //     -Switch Statement
// //     --switch (expression) {
// //         case x:
// //             // code block;
// //             break;
// //         case y:
// //             //code block;
// //             break;
// //         default: 
// //             //code block;
// //     }
// //     */
// // // --------------------Challenge 5.1-------------------------------
// // //     let st = "Elzero Web School";
// // //     if (typeof(st) === typeof("w")) {
// // //         console.log("Good");
// // //       }

// // //     if (st !== "string") {
// // //         console.log("Good");
// // //     }
// // //     if (Boolean(st) === Boolean("number")) {
// // //         console.log("Good");
// // //     }
// // //     if (st.startsWith("E") === "ElzeroElzero".startsWith("E")) {
// // //         console.log("Good");
// // //     }
// // // // ------------------------Challenge 5.2--------------------------
// // // let job = "Support";
// // // let salary = 0;

// // // if (job === "Manager") {
// // //   salary = 8000;
// // // } else if (job === "IT" || job === "Support") {
// // //   salary = 6000;
// // // } else if (job === "Developer" || job === "Designer") {
// // //   salary = 7000;
// // // } else {
// // //   salary = 4000;
// // // }
// // // console.log("salary is : " + salary)

// // // switch (job) {
// // //     case "Manager" :
// // //         salary = 8000;
// // //         break;
// // //     case "IT" :
// // //     case "Support" :
// // //         salary = 6000;
// // //         break;
// // //     case "Developer" :
// // //     case "Designer" :
// // //         salary = 7000;
// // //         break;
// // //     default :
// // //         salary = 4000;
// // // }
// // // console.log("salary is : " + salary)

// // // // --------

// // // let holidays = 1;
// // // let money = 0;

// // // switch (holidays) {
// // //   case 0:
// // //     money = 5000;
// // //     console.log(`My Money is ${money}`);
// // //     break;
// // //   case 1:
// // //   case 2:
// // //     money = 3000;
// // //     console.log(`My Money is ${money}`);
// // //     break;
// // //   case 3:
// // //     money = 2000;
// // //     console.log(`My Money is ${money}`);
// // //     break;
// // //   case 4:
// // //     money = 1000;
// // //     console.log(`My Money is ${money}`);
// // //     break;
// // //   case 5:
// // //     money = 0;
// // //     console.log(`My Money is ${money}`);
// // //     break;
// // //   default:
// // //     money = 0;
// // //     console.log(`My Money is ${money}`);
// // // }

// // // if (holidays === 0) {
// // //     money = 5000;
// // //     console.log(`Your Money is ${money}`);
// // // }else if (holidays === 1 || holidays === 2) {
// // //     money = 3000;
// // //     console.log(`Your Money is ${money}`);
// // // }else if (holidays === 3) {
// // //     money = 2000;
// // //     console.log(`Your Money is ${money}`);
// // // }else if (holidays === 4) {
// // //     money = 1000;
// // //     console.log(`Your Mony is ${money}`);
// // // }else {
// // //     money = 0;
// // //     console.log(`Your Money is ${money}`)
// // // }

// // // // ------------Assignment 5.1------------------------
// // // console.log(100 == "100"); // true
// // // console.log(100 < 1000); // true
// // // console.log(110 > 100 > 10 < 20); // true
// // // console.log(-10 == "-10"); // true
// // // console.log(! (-50 == +"-40")); // true
// // // console.log(! (10 == -"-40")); // true
// // // console.log(! ("10" === 10)); // true
// // // console.log(! (20 == false)); // true
// // // // ----------
// // // let num1 = 10;
// // // let num2 = 20;
// // // console.log(num1 != num2); // true
// // // console.log(num1 < num2); // true
// // // console.log(num1 !== num2); // true
// // // console.log(!(num1 == num2)); // true
// // // console.log(!(num1 > num2)); // true
// // // console.log(!(num1 === num2)); // true
// // // // ----------------
// // // let a = 20;
// // // let b = 30;
// // // let c = 10;
// // // console.log(a < b && a < c || a < b); // true
// // // console.log(a < b > a < c); // true
// // // console.log(!(a == b) && !(a == b) && !(a == c) && !(a == c)); // true
// // // //-----------------Assignment 5.2------------------------------
// // // // Test Case 1
// // // let num = "s"; // "009"
// // // num < 10 ? 
// // //     console.log("00" + num):
// // // num > 10 && num < 100 ? 
// // //     console.log("0" + num):
// // // num >= 100 ?
// // //     console.log(num):
// // //     console.log("fuck you");
// // // if (num < 10) {
// // //     console.log("00" + num)
// // // }else if (num > 10 && num < 100) {
// // //     console.log("0" + num)
// // // }else if (num >= 100) {
// // //     console.log(num)
// // // }else {
// // //     console.log("number is unknown")
// // // }
// // // // -------------
// // // let num_1 = "20";
// // // let str = "21";
// // // let str2 = "20";

// // // num_1 == str ? console.log("{num1} Is The Same Value As {str}"):
// // // num_1 == str && !(typeof num_1 === typeof str) ? console.log("{num1} Is The Same Value As {str} But Not The Same Type"):
// // // typeof num_1 !== typeof str2 && num_1 != str2 ? console.log("{num1} Is Not The Same Value Or The Same Type As {str2}"):
// // // typeof str === typeof str2 && str != str2 ? console.log("{str} Is The Same Type As {str2} But Not The Same Value"): console.log("nothing")
// // // // switch (num_1) {
// // // //     case num_1 == str : 
// // // //         console.log("{num1} Is The Same Value As {str}");
// // // //         break;
// // // //     case num_1 == str && num_1 !== str:
// // // //         console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// // // //         break;
// // // //     case num_1 != str || num_1 !== str :
// // // //         console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// // // //         break;
// // // //     case str === str2 && str != str2 : 
// // // //         console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// // // //         break;
// // // //     default :
// // // //         console.log("Fuck you")
// // // // }
// // // // Output
// // // "{num1} Is The Same Value As {str}"
// // // "{num1} Is The Same Value As {str} But Not The Same Type"
// // // "{num1} Is Not The Same Value Or The Same Type As {str2}"
// // // "{str} Is The Same Type As {str2} But Not The Same Value"

// // // ------------------
// // let num1 = 10;
// // let num2 = 30;
// // let num3 = "30";
// // if (num3 > num1 && typeof num3 !== typeof num2) {
// //     console.log(`${num3} is more then ${num1} and not the same type as ${num2}`);
// //     if (num3 > num1 && typeof num3 !== typeof num2 && num3 == num2) {
// //         console.log(`num3 is more then num1, the same value as num2 but not the same type`);
// //     }
// //     if (num3 !== num1 && typeof num3 !== typeof num2) {
// //         console.log(`num 3 don't equal num1, and not the same type as num2`);
// //     }
// // }
// // // Needed Output
// // "30 Is Larger Than 10 And Type string Not The Same Type As number"
// // "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// // "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// // Edit What You Want Here

// let num1 = 9;
// let num2 = 8;
// let num3 = 9;
// let num4 = 31;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// //------------------
// // sunday0 monday1 tuesday2 wednisday3 surthday4 fryday5 saturday6
// let day;
// let fry = "   friday  ";
// fry = fry.trim().charAt(0).toUpperCase()+fry.trim().slice(1);
// switch (new Date().getDay()) {
//     case 5 :
//         console.log(`No appontments Available today, its ${fry}`);
//         break;
//     case 6 :
//         console.log(`No appontments Available today, its Saturday`);
//         break;
//     case 0 :
//         console.log(`No appontments Available today, its Sunday`)
//         break;
//     case 1 :
//         console.log("From 10:00 AM To 5:00 PM, today is Monday");
//         break;
//     case 4 :
//         console.log("From 10:00 AM To 5:00 PM, today is Surthday ");
//         break;
//     case 2 :
//         console.log("From 10:00 AM To 6:00 PM today is Tuesday");
//         break;
//     case 3 :
//         console.log("From 10:00 AM To 7:00 PM today is, Wednisday");
//         break;
//     default :
//         console.log("Its not a valid day, fuck you");   
// }
// console.log();