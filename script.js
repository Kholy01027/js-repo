// // //     // // // document.write("<h1 id='head'>Elzero</h1>")
// // //     // // // ;document.getElementById("head").style = "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;"
// // //     // // // ;console.log("%cI'm%c Alive %cBitch", "font-size: 40px; color: white; background-color: blue;", "font-size: 40px; color: green; font-weight: bold;", "font-size: 40px; color: red; text-decoration: line-through;")
// // //     // // // ;console.group("Gruop 1")
// // //     // // // ;console.log("Message One")
// // //     // // // ;console.log("Message Two")
// // //     // // // ;console.groupCollapsed("Child Group")
// // //     // // // ;console.log("Message One")
// // //     // // // ;console.log("Message Two")
// // //     // // // ;console.groupCollapsed("Grand Child Group")
// // //     // // // ;console.log("Message One")
// // //     // // // ;console.log("Message Two")
// // //     // // // ;console.groupEnd()
// // //     // // // ;console.groupEnd()
// // //     // // // ;console.groupEnd()
// // //     // // // ;console.group("Group 2")
// // //     // // // ;console.log("Message One")
// // //     // // // ;console.log("Message Two")
// // //     // // // ;console.groupEnd()
// // //     // // // ;console.table(["Mohamed" , "Kholy", "Elzero", "Ahmed", "Noor"])
// // //     // // // ;console.table(["apples", "oranges", "bananas"]);

// // //     // // // //we can stop it by comments like this . or this /* */
// // //     // // // /*
// // //     // // //  *;console.log("Iam In Console")
// // //     // // //  *;document.write("Iam In Page")
// // //     // // //  */

// // //     // // // Assignment 2

// // //     // // // let numberOne = 10 ; numberTwo = 20;
// // //     // // // console.log(numberOne + "" + numberTwo);
// // //     // // // console.log(typeof(numberOne + "" + numberTwo));
// // //     // // // console.log(`${numberOne}${numberTwo}`);
// // //     // // // console.log(typeof(`${numberOne}${numberTwo}`));
// // //     // // // console.log(numberTwo + "\n" + numberOne);
// // //     // // // console.log(`${numberTwo}
// // //     // // // ${numberOne}`);

// // //     // // // console.log(elzero.innerHTML); // object
// // //     // // // console.log(typeof elzero); // object

// // //     // // // console.log("`I'm In\n\\\\ \n Love \\\\ \"\"\" \'\'\'\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");

// // //     // // // let a = 21; b = 20;
// // //     // // // console.log(a + ("_" + b + a).repeat(3) + "_" + b);

// // //     // // // let title = "Elzero" ; desc = "Elzero Web School" ; date = "25/10" ;
// // //     // // // let structur = `
// // //     // // //     <div>
// // //     // // //         <h3>${title}</h3>
// // //     // // //         <p>${desc}</p>
// // //     // // //         <span>${date}</span>
// // //     // // //     </div>
// // //     // // // `
// // //     // // // document.write(structur.repeat(4));


// // //     // // // Assignment [018 to 022] ----------------------

// // //     // // // Replace ? With Arithmetic Operators
// // //     // // // console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// // //     // // // let num = 3;
// // //     // // // console.log(num * (true + true)); // 6
// // //     // // // console.log(num + true + true + true ); // 6
// // //     // // // console.log(num * num - true - true - true); // 6
// // //     // // // console.log(num + num); // 6
// // //     // // // console.log(num * num / num + num); // 6
// // //     // // // console.log(num ** num / num - num); // 6


// // //     // // // let numT = "10";

// // //     // // // console.log(+numT + Number(numT)); // 20
// // //     // // // console.log(+numT * +numT / numT + +numT); // 20
// // //     // // // console.log(Number(numT) * numT / numT * (true + true)); // 20
// // //     // // // console.log(((-numT + numT * numT % (true + true)) * (true + true)) * -1); // 20

// // //     // // // let points = 10;
// // //     // // // console.log((points * points) / 7.5 ); // 13
// // //     // // // console.log((points % (true + true + true + true) - points) * -1 ); // 8;

// // //     // // // let a = 10;
// // //     // // // let b = "20";
// // //     // // // let c = 80;

// // //     // // // console.log(++a + +b++ + +c++ - +a++);
// // //     // // // // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// // //     // // // /*
// // //     // // // [++a]
// // //     // // // - Value: 11
// // //     // // // - Explain: Pre Increment
// // //     // // // [+]
// // //     // // // - Explain: Addition Sign  
// // //     // // // [+b++]
// // //     // // // - Value : 21
// // //     // // // - Explain : Unary Plus, Post Increment
// // //     // // // [+]
// // //     // // // - Explain : Addition Sign  
// // //     // // // [+c++]
// // //     // // // - Value : 81
// // //     // // // - Explain : Unary Plus, Post Increment
// // //     // // // [-]
// // //     // // // - Explain : Decreas Sign
// // //     // // // ![+a++]
// // //     // // // - Value : 11 // *12 not 11 : 11 + 1.
// // //     // // // - Explain : Unary Plus, Post Increment
// // //     // // // */

// // //     // // // console.log(++a + -b + +c++ - -a++ + +a);
// // //     // // // // a = 12, b = 21, c = 81
// // //     // // // /*
// // //     // // // [++a]
// // //     // // // - V : 13
// // //     // // // - E : Pre Increment
// // //     // // // [+]
// // //     // // // - E : Addition Sign
// // //     // // // [-b]
// // //     // // // - V : -21
// // //     // // // - E : Negation Operator
// // //     // // // [+]
// // //     // // // - E : Addition Sign
// // //     // // // [+c++]
// // //     // // // - E : Unary Plus, Post Increment
// // //     // // // - V : 82
// // //     // // // [-]
// // //     // // // - E : Dicreas Sign
// // //     // // // [-a++]
// // //     // // // - E : Negation Operator, Post Increment
// // //     // // // - V : -14
// // //     // // // [+]
// // //     // // // - E : Addition Sign
// // //     // // // [+a]
// // //     // // // - E : Unary Plus
// // //     // // // - V : 14
// // //     // // // */

// // //     // // // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// // //     // // // a = 14, b = -21, c = 82
// // //     // // /*
// // //     // // [--c]
// // //     // // - E : Pre Dicrement 
// // //     // // - V : 81
// // //     // // [+]
// // //     // // - E : Addition Sign
// // //     // // [+b]
// // //     // // - E : Unary Operator
// // //     // // - V : 21
// // //     // // [+]
// // //     // // - E : Addition Sign
// // //     // // [--a]
// // //     // // - E : Post Dicrement
// // //     // // - V : 13
// // //     // // [*]
// // //     // // - E : Multiable Sign
// // //     // // [+b++]
// // //     // // - E : Unary Plus, Post Increment
// // //     // // - V : 22
// // //     // // [-]
// // //     // // - E : Dicrement Sign
// // //     // // [+b]
// // //     // // - E : Unary Plus
// // //     // // - V : 22
// // //     // // [*]
// // //     // // - E : Multiable Sign
// // //     // // [a]
// // //     // // - E : Normal Variable Call
// // //     // // - V : 13
// // //     // // [+]
// // //     // // - E : Addition Sign
// // //     // // [--a]
// // //     // // - E : Post Dicrement
// // //     // // - V : 12
// // //     // // [-]
// // //     // // - E : Dicreis Sign
// // //     // // [+true]
// // //     // // - E : Unary Plus
// // //     // // - V : 1
// // //     // // */

// // //     // // // let d = "-100";
// // //     // // // let e = "20";
// // //     // // // let f = 30;
// // //     // // // let g = true;

// // //     // // // console.log(-d * e); // 2000
// // //     // // // console.log(++e * ++g + -d + ++f); // 173

// // //     // // let a = 100;
// // //     // // let b = 2_00.5;
// // //     // // let c = 1e2;
// // //     // // let d = 2.4;

// // //     // // // Find Smallest Number In All Variables And Return Integer
// // //     // // console.log(parseInt(Math.min(a, b, c, d))); // 2 

// // //     // // // Use Variables a + d One Time To Get The Needed Output
// // //     // // console.log(Math.pow(a, parseInt(d))); // 10000

// // //     // // // Get Integer "2" From d Variable With 4 Methods
// // //     // // console.log(Math.round(d)); // 2
// // //     // // console.log(Math.floor(d)); // 2
// // //     // // console.log(Math.trunc(d)); // 2
// // //     // // console.log(parseInt(d)); // 2

// // //     // // // Use Variables b + d To Get This Valus
// // //     // // console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// // //     // // console.log(parseInt(Math.ceil(b) / Math.ceil(d))); // 67 => Number


// // //     // // Assignment and Challenges - WEEK 4.-----------------------
// // //     // /*
// // //     // -Number Methods----------
// // //     //     --isInteger()
// // //     //     --isNan()
// // //     //     --MAX_VALUE()
// // //     //     --MIN_VALUE()
// // //     //     --toFixed()
// // //     //     --toString()
// // //     //     --parseFloat()
// // //     //     --parseInt()
// // //     // -Math Object-------------
// // //     //     --ceil()
// // //     //     --fllor()
// // //     //     --round()
// // //     //     --max(x, y, z)
// // //     //     --min(x, y, z)
// // //     //     --pow(x, y)
// // //     //     --random()
// // //     //     --sign()
// // //     //     --trunc()
// // //     // -String Methods----------
// // //     //     --charAt(), []
// // //     //     --length()
// // //     //     --trim()
// // //     //     --toUpperCase(), toLowerCase()
// // //     //     --indexOf(), lastIndexOf()
// // //     //     --slice()
// // //     //     --split()
// // //     //     --substr()
// // //     //     --substring()
// // //     //     --includes()
// // //     //     --startsWith(), endsWith
// // //     // */

// // //     // let a = "Elzero Web School";

// // //     // console.log(a.slice(2, 6).charAt(0).toUpperCase()+a.slice(3, 6)); // Zero

// // //     // console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// // //     // console.log(a.split(" ", 1)); // ["Elzero"]

// // //     // console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School

// // //     // console.log(`${a.charAt(0).toLowerCase()}${a.toUpperCase().slice(1 , a.length - 1)}${a.charAt(a.length - 1).toLowerCase()}`); // eLZERO WEB SCHOOl
    
// // //     // // ---------------------------------
// // //     // // Examples
// // //     // console.log(100_000); // 100000
// // //     // console.log(100000); // 100000
// // //     // console.log(5e4 + 5e4); // 100000

// // //     // // Your Solutions
// // //     // console.log(10 ** 5); // 100000
// // //     // console.log(Math.pow(10, 5)); // 100000
// // //     // console.log(10 * 10 * 10 * 10 * 10); // 100000
// // //     // console.log(1e5); // 100000
// // //     // console.log(2e5 / 2); // 100000
// // //     // console.log(10000 * 10); // 100000
// // //     // console.log(1e4 * 1e1); // 100000
// // //     // console.log(parseInt(100000.54)); // 100000
// // //     // console.log(Math.max(Math.pow(10, 5), 1e4, 4e2)); // 100000
// // //     // console.log(Math.min(1e5, 1e99, 1e99999, 1e999999999999999999999)); // 100000

// // //     // console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991
// // //     // //!!!!!!!!!!!!!!
// // //     // console.log(Number.MAX_SAFE_INTEGER); // 16

// // //     // let myVar = "100.56789 Views";

// // //     // console.log(parseInt(myVar)); // 100
// // //     // console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// // //     // let num = 10;

// // //     // console.log(Number.isInteger(num) + Number.isInteger(num) ); // 2

// // //     // let flt = 10.4;

// // //     // console.log(Math.round(flt)); // 10
// // //     // console.log(Math.floor(flt)); // 10
// // //     // console.log(Math.trunc(flt)); // 10
// // //     // console.log(parseInt(flt)); // 10
// // //     // console.log(Number(flt.toFixed(0))); // 10

// // //     // console.log((parseInt(Math.random() * 5) + 1)); // 0 || 1 || 2 || 3 || 4

// // //     // // ----------------------------------------

// // //     // let userName = "Elzero";
// // //     // console.log(userName.charAt(0).toLowerCase()); // e
// // //     // console.log(userName.slice(0, 1).toLowerCase()); // e
// // //     // console.log(userName.substr(0, 1).toLowerCase()); // e
// // //     // console.log(userName.substring(0, 1).toLowerCase()); // e
// // //     // console.log(userName.substring(userName.indexOf("E"), userName.indexOf("l")).toLowerCase()); // e
// // //     // console.log(userName[0].toLowerCase().repeat(3)); // eee

// // //     // let word = "Elzero";
// // //     // let letterZ = "z";
// // //     // let letterE = "e";
// // //     // let letterO = "O";

// // //     // console.log(word.includes("z")); // True
// // //     // console.log(word.startsWith("E")); // True
// // //     // console.log(word.endsWith("o")); // True

    
// // //     // Assignments And Notes --- WEEK 5.---------------
// // //     /*
// // //     -comarison operators
// // //     -- == Equal
// // //     -- != Not Equal
// // //     -- === Identical Equal, Value and Type
// // //     -- !== Not Indentical Equal
// // //     -Logical operators
// // //     -- ! NOT
// // //     -- && AND
// // //     -- || OR
// // //     -if Conditions
// // //     -- if 
// // //     -- if else
// // //     -- else
// // //     -- nested if
// // //     - Conditional Ternary Operator
// // //     -- (expression) ? (action1"true") : (action2"false);
// // //     -- (expression1) ? action"true" 
// // //        : (expression2)"false" ? A "true" : A "false";
// // //     -Nullish Coalescing operator And logical Or.
// // //     -- ??, taking the second choise if the one is Undefiend or null.
// // //     -- ||, taking the second choise if the one is falsy value, undefiend or null and 0 or "".
// // //     -Boolean()
// // //     -- Boolean(x), is x true value or falsy one?.
// // //     -Switch Statement
// // //     --switch (expression) {
// // //         case x:
// // //             // code block;
// // //             break;
// // //         case y:
// // //             //code block;
// // //             break;
// // //         default: 
// // //             //code block;
// // //     }
// // //     */
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
// // // switch (num_1) {
// // //     case num_1 == str : 
// // //         console.log("{num1} Is The Same Value As {str}");
// // //         break;
// // //     case num_1 == str && num_1 !== str:
// // //         console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// // //         break;
// // //     case num_1 != str || num_1 !== str :
// // //         console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// // //         break;
// // //     case str === str2 && str != str2 : 
// // //         console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// // //         break;
// // //     default :
// // //         console.log("Fuck you")
// // // }
// // // Output
// // // "{num1} Is The Same Value As {str}"
// // // "{num1} Is The Same Value As {str} But Not The Same Type"
// // // "{num1} Is Not The Same Value Or The Same Type As {str2}"
// // // "{str} Is The Same Type As {str2} But Not The Same Value"

// // // // ------------------
// // // let num1 = 10;
// // // let num2 = 30;
// // // let num3 = "30";
// // // if (num3 > num1 && typeof num3 !== typeof num2) {
// // //     console.log(`${num3} is more then ${num1} and not the same type as ${num2}`);
// // //     if (num3 > num1 && typeof num3 !== typeof num2 && num3 == num2) {
// // //         console.log(`num3 is more then num1, the same value as num2 but not the same type`);
// // //     }
// // //     if (num3 !== num1 && typeof num3 !== typeof num2) {
// // //         console.log(`num 3 don't equal num1, and not the same type as num2`);
// // //     }
// // // }
// // // // Needed Output
// // // "30 Is Larger Than 10 And Type string Not The Same Type As number"
// // // "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// // // "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// // // // Edit What You Want Here

// // // let num1 = 9;
// // // let num2 = 8;
// // // let num3 = 9;
// // // let num4 = 31;

// // // /*
// // //   Do Not Edit Below This Line
// // //   Needed Output
// // //   True 7 Times
// // // */

// // // // Condition 1

// // // if (num1 > num2) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 2

// // // if (num1 > num2 && num1 < num4) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 3

// // // if (num1 > num2 && num1 === num3) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 4

// // // if ((num1 + num2) < num4) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 5

// // // if ((num1 + num3) < num4) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 6

// // // if ((num1 + num2 + num3) < num4) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 7

// // // if (num4 - (num1 + num3) + num2 === 21) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }
// // //------------------
// // // // sunday0 monday1 tuesday2 wednisday3 surthday4 fryday5 saturday6
// // // let day;
// // // let fry = "   friday  ";
// // // fry = fry.trim().charAt(0).toUpperCase()+fry.trim().slice(1);
// // // switch (new Date().getDay()) {
// // //     case 5 :
// // //         console.log(`No appontments Available today, its ${fry}`);
// // //         break;
// // //     case 6 :
// // //         console.log(`No appontments Available today, its Saturday`);
// // //         break;
// // //     case 0 :
// // //         console.log(`No appontments Available today, its Sunday`)
// // //         break;
// // //     case 1 :
// // //         console.log("From 10:00 AM To 5:00 PM, today is Monday");
// // //         break;
// // //     case 4 :
// // //         console.log("From 10:00 AM To 5:00 PM, today is Surthday ");
// // //         break;
// // //     case 2 :
// // //         console.log("From 10:00 AM To 6:00 PM today is Tuesday");
// // //         break;
// // //     case 3 :
// // //         console.log("From 10:00 AM To 7:00 PM today is, Wednisday");
// // //         break;
// // //     default :
// // //         console.log("Its not a valid day, fuck you");   
// // // }
// // // console.log();

// // //------------------Assignments and Notes - WEEK 6-----------------------------
// // /*
// // // ----------------Fast Summery---------------------------------------------------
// // // -Array Big introduction
// // // --creat array
// // //     newarr[item1, item2,...];
// // //     new Array(item1, item2, ..);
// // // --access array elements
// // //     array[elementIndex]
// // // --nested arrays
// // //     array[item1, [item1arr2, item2arr2], item3];
// // // --change arrays element
// // //     array[elementIndex] = "newValue";
// // // --check for array arrays.isArray()
// // //     true or false
// // // -Arrays Methods
// // // --Length
// // // --shift and unshift
// // // --push and pop
// // // --indexOf and lastIndexOf
// // // --includes
// // // --sort and reverse
// // // --slice and splice
// // // --concat
// // // --join and toString
// // // */

// // // // // -------------------Challenge 6.1------------------------------
// // // let zero = 0;
// // // let counter = 3;
// // // let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // // my.reverse().splice(zero, --counter)
// // // console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
// // // console.log(my.slice(my.indexOf("mah") * my.indexOf("man"), my.indexOf("mah"))); // ["Elham", "Mazero"]
// // // console.log(((my.splice(counter * counter, counter * counter))[zero] = "Elzero")); // "Elzero"
// // // console.log(((my.splice(counter * counter, counter * counter))[zero] = "Elzero").substr(-counter, counter).charAt(zero).toLowerCase().concat(((my.splice(counter * counter, counter * counter))[zero] = "Elzero").substr(-counter, counter).charAt(1).toUpperCase()))

// // // // ----------------------Assignment 6.2---------------------------------
// // // let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// // // let num = 3;

// // // // Method 1
// // // console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];


// // // // Method 2
// // // myFriends.pop("Gamal");
// // // console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// // // //--------------
// // // let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // // // Write Your Code Here
// // // friends.shift();
// // // friends.pop();
// // // console.log(friends); // ["Eman", "Osama"]
// // // //-----------------
// // // let arrOne = ["C", "D", "X"];
// // // let arrTwo = ["A", "B", "Z"];
// // // let finalArr = [];

// // // // Write One Single Line Of Code
// // // finalArr = arrOne.concat(arrTwo).sort().reverse()
// // // console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// // // //----------------
// // // let website = "Go";
// // // let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// // // let numTwo = true + true;
// // // console.log(words[numTwo][0].slice(numTwo).toUpperCase()); // ZERO
// // // //--------------
// // // let needle = "JS";
// // // let haystack = ["PHP", "JS", "Python"];

// // // // Write 3 Solutions
// // // if (haystack.includes(needle) || haystack.indexOf(needle) !== -1 || haystack.lastIndexOf(needle) !== -1) {
// // // 	console.log("Found");
// // // }else {
// // // 	console.log("Not Found")
// // // }
// // // //--------------
// // // let arr1 = ["A", "C", "X"];
// // // let arr2 = ["D", "E", "F", "Y"];
// // // let allArrs = [];

// // // // Your Code Here
// // // allArrs = arr2[arr1.length - arr1.indexOf("C")].concat(arr1[arr1.length - arr1.indexOf("C")], arr2[arr1.length]).toLowerCase()
// // // console.log(allArrs); // fxy


// // // -----------------------Assignments & Notes - WEEK 7-----------
// // /*
// // ---------------Summery-------------------
// // -Loop
// // --For loop and concept of loop
// // --loop on sequences
// // --nested loop
// // -loop controle
// // --Braek
// // --continue
// // --lable
// // -For loop, Advanced Example
// // -Practice, Add Products to page
// // -While loop
// // -Do While loop
// // */

// // //---------Assignment 7.1-------------------

// // // let start1 = 10;
// // // let end1 = 100;
// // // let exclude1 = 40;

// // // for (let i = start1; i <= end1; i += start1 ) {
// // // 	if (i === exclude1) {
// // // 		continue;
// // // 	}
// // // 	console.log(i);
// // // }
// // // //----------------
// // // let start2 = 10;
// // // let end2 = 0;
// // // let stop2 = 3;
// // // for (let i = start2; i >= stop2; i--){
// // // 	if (i < start2) {
// // // 		console.log(`0${i}`)
// // // 	}else {
// // // 		console.log(i)
// // // 	}
	
// // // }
// // // //---------------
// // // let start3 = 1;
// // // let end3 = 6;
// // // let breaker3 = 2;

// // // for (let i = --start3; i <= end3; i++) {
// // // 	console.log(i)
// // // 	for (let j = breaker3 ; j <= breaker3 * breaker3; j += 2 ) {
// // // 		console.log(`-- ${j}`);
// // // 	}
// // // }
// // // //---------------
// // // let index = 10;
// // // let jump = 2;
// // // let end = 0;

// // // for (;;) {
// // //   // Write Your Code Here
  
// // //   if (index >= jump + jump) {
// // // 	console.log(index);
// // // 	index-=jump
// // //   }else {
// // // 	break;
// // //   }
// // // }
// // // //----------------
// // // let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// // // let letter = "a";
// // // for (let i = letter.indexOf("a"), x = letter.indexOf("a"); x < friends.length, i < friends.length; x++, i++) {	
// // // 	if (friends[i].startsWith(letter.toUpperCase())){
// // // 		x--;
// // // 	}else if (friends[i].startsWith() !== letter.toUpperCase) {
// // // 		console.log(`${x + true} => ${friends[i]}`)
// // // 	}else {
// // // 		break;
// // // 	}
// // // }
// // // // Output
// // // "1 => Sayed"
// // // "2 => Eman"
// // // "3 => Mahmoud"
// // // "4 => Osama"
// // // "5 => Sameh"

// // // //----------------!!!!!!!!!!!!!!!!!!!!!!!!!
// // // let start4 = 0;
// // // let swappedName = "elZerO";



// // // for (let i = start4; i < swappedName.length; i++ ) {
// // // 	var newS;
// // // 	if (swappedName[i] === swappedName[i].toUpperCase()) {
// // // 		newS += swappedName[i].toLowerCase();
// // // 	}else {
// // // 		newS += swappedName[i].toUpperCase();
// // // 	}
// // // }
// // // console.log(newS)

// // // // Output
// // // "ELzERo"

// // // //-----------------

// // // let start = 0;
// // // let mix = [1, 2, 3, "A", "B", "C", 4];
// // // for (let i = start; i < mix.length; i++) {
// // // 	if (typeof(mix[i]) === 'number' && mix[i] > 1) {
// // // 		console.log(mix[i])
// // // 	}
// // // }
// // // // Output
// // // 2
// // // 3
// // // 4

// // //-----------------Assignment 7.2-----------------------------
// // // let friends0 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany", 'Mohamed', "Hello"];
// // // let index0 = 0;
// // // let counter = 0;

// // // while (index0 < friends0.length) {
// // // 	index0++
// // // 	counter++
// // // 	if (typeof (friends0[index0]) === 'number') {
// // // 		counter--;
// // // 	}else if (friends0[index0].toString().startsWith("A")) {
// // // 		counter--;
// // // 	}else {
// // // 		console.log(`${counter} => ${friends0[index0]}`)
// // // 	}
// // // }

// // // // Output
// // // "1 => Sayed"
// // // "2 => Mahmoud"

// // //----------------Challenge------------------------
// // // let myX = ['Ahmed', 'Osama', 'Mohamed', 'Sayed', 'Stop', 'Samera'];
// // // let myE = ['Amgad', 'Samah', 'Ameer', 'Omar', 'Othman', 'Amany', 'Samia', 'Mahmoud', 'Moneer', 'Marawan'];
// // // var counter = 0;
// // // for (let i = 0 ; i < myX.length ; i++) {
	
// // // 	if (myX[i] === 'Stop') {
// // // 		document.write(`<hr><h3><center>We Have ${counter} Admins</center></h3><hr>`)
// // // 		break;

// // // 	}else {
// // // 		counter++;
// // // 		document.write(`<center>`)
// // // 		document.write(`<hr><h4>${myX[i]} Team ${i +1}'s Admin</h4>`)
// // // 		document.write('<h4>Team Members</h4>')
// // // 	}
// // // 	for (let j = 0; j < myE.length; j++) {
// // // 		if (myE[j].charAt(0) === myX[i].charAt(0)){
// // // 			document.write(`<p>- ${myE[j]}</p>`)
// // // 			document.write(`</div>`)
// // // 		}
// // // 	}
// // // }

// // //------------------ Assignments & Notes - WEEK 8----------------------
// // /*
// // 	-function - Intro and basic usage
// // 	--What is function
// // 	--User Defiend vs Built in
// // 	--Syntax + Basic Usage
// // 	--Example from real life
// // 	--parameter + argument
// // 	--practical example
// // 	-function
// // 	--Advanced Example
// // 	-Function
// // 	--Return
// // 	--Automatic simicolon Isertion
// // 	--Interrupting
// // 	-Default Parameter Function
// // 	--Default Function Parameter
// // 	--Function parameters default 'Undefiend'
// // 	--Old strategies [condition + Logical OR || ]
// // 	--Es6 Method
// // 	-Function Rest Parameter
// // */

// // //--------------Challenge 8.1 -----------------------------
// // /*
// //   Function - Random Argument Challenge
// //   ====================================
// //   Create Function showDetails
// //   Function Accept 3 Parameters [a, b, c]
// //   Data Types For Info Is
// //   - String => Name
// //   - Number => Age
// //   - Boolean => Status
// //   Argument Is Random
// //   Data Is Not Sorted Output Depend On Data Types
// //   - Use Ternary Conditional Operator
// // */

// // //-----------------Challenge 8.1-----------------------------------
// // function showDetails(...allArgue) {
// // 	let userName = "Unknown";
// // 	let age = 0;
// // 	var status = status || false ;
// // 	let hireS = " Please Write all your details to know your status";
// // 	for (let i = 0 ; i < allArgue.length; i++) {
// // 		typeof allArgue[i] === 'string' ? userName = allArgue[i]  :
// // 		typeof allArgue[i] === 'number' ? age += allArgue[i] :
// // 		typeof allArgue[i] === 'boolean' ? status = allArgue[i] : 'Unknown';
// // 		status === true ? hireS = " you'r available to hire" :
// // 		status === false ? hireS = " you'r not available to hire" : hireS = " you'r not available to hire";
// // 	}
// // 	age = age || 'Unknown';
// // 	if (age != 'Unknown' && userName != 'Unknown') {
// // 		document.write(`<div>`)
// // 		document.write(`<h3>Hello ${userName}, Your age is ${age}, ${hireS}</h3>`)
// // 		document.write(`</div>`)
// // 	} else {
// // 		document.write(`<h3>Please Write your details</h3>`)
// // 	}
	
// // }

// // showDetails(true, 18, "Mohamed");
// // showDetails("Osama", 35, false)
// // showDetails(19, "Marawan")
// // showDetails(true, 9, "Mohamed")
// // showDetails("Mohamed")

// // //------------------------Assignment 8.1------------------------
// // function sayHello(theName, theGender) {
// // 	// Your Code Here
// // 	if (theGender == "Male") {
// // 		console.log(`Hello Mr ${theName}`);
// // 	}else if (theGender == "Female") {
// // 		console.log(`Hello Miss ${theName}`);
// // 	}else {
// // 		console.log(`Hello ${theName}`)
// // 	}
// //   }
  
// //   // Needed Output
// //   sayHello("Osama", "Male"); // "Hello Mr Osama"
// //   sayHello("Eman", "Female"); // "Hello Miss Eman"
// //   sayHello("Sameh"); // "Hello Sameh"
// //   //---------------------
// //   function calculate(firstNum, secondNum, operation) {
// // 	// Your Code Here
// // 	if (typeof firstNum == 'number' && typeof secondNum == 'number') {
// // 		if (operation == 'subtract') {
// // 			console.log(firstNum - secondNum);
// // 		}else if (operation == 'multiply') {
// // 			console.log(firstNum * secondNum);
// // 		}else {
// // 			console.log(firstNum + secondNum);
// // 		}
// // 	}else {
// // 		console.log("You forget a number")
// // 	}
// //   }
  
// //   // Needed Output
// //   calculate(20); // Second Number Not Found
// //   calculate(20, 30); // 50
// //   calculate(20, 30, 'add'); // 50
// //   calculate(20, 30, 'subtract'); // -10
// //   calculate(20, 30, 'multiply'); // 600

// //   //------------------------
// //   function ageInTime(theAge) {
// // 	// Your Code Here
// // 	if (theAge > 10 && theAge < 100)  {
// // 		console.log(`Your age in Months is : ${theAge * 12}\nYour age in Weeks is : ${theAge *12 * 4}\nYour age in Days is : ${theAge *12 * 4 * 7}\nYour age in Hours is : ${theAge *12 *4 *7 *24}\nYour age in Minutes is : ${theAge *12 *4 *7 *24 *60}\nYour age in Seconds is : ${theAge *12 *4 *7 *24 *60 *60}`)
// // 	}else {
// // 		console.log("Sorry your age is out of range")
// // 	}
// //   }
  
// //   // Needed Output
// //   ageInTime(110); // Age Out Of Range
// //   ageInTime(38); // Months Example => 456 Months

// //   //----------------------
// //   function createSelectBox(startYear, endYear) {
// // 	// Your Code Here
// // 	document.write(`<p><lable for="years">Choose Year : </lable><select name="years" id="years">`)
// // 	for (let i = startYear; i <= endYear; i++){
// // 		document.write(`<option value ="${i}">${i}</option>`)
// // 	}
// //   }
// //   createSelectBox(2000, 2021);
// // //--------------------------

// // function multiply (...arrArgu) {
// // 	let x = 1;
// // 	for (let i = 0 ; i < arrArgu.length; i++) {
// // 		if (typeof arrArgu[i] == 'number') {
// // 			x *= parseInt(arrArgu[i]);
// // 		}
// // 	}
// // 	console.log(x)
// // }


// // multiply(10, 20); // 200
// // multiply("A", 10, 30); // 300
// // multiply(100.5, 10, "B"); // 1000

// //--------------------Assignments and Notes --Week 9 ----------------------
// /*
// ------------------------Quick Summery----------------------------
// -Anonymos Function and Practice
// --Anonymos Function
// ---function (parameters) {//code};
// --Callin Named Fanction Vs Anonymos Functions
// ---Self Executing function Or Storing function in variable
// --Argument to other function
// --Task without Name
// --setTimout
// -Return Nested Function
// --Function inside function
// --Return Function
// -Arrow function syntax
// --Arrow function
// ---fName() => exepression;
// --Return function
// --Regular vs arrow [Parameter + No param]
// --Multiple lines
// ---fName(Param1, Param2) => {//code here};
// -Scope- Global and local
// -scope- Block
// -scope- lexical scope
// ----------------Search for ---------------
// -Execution context
// -lexical environment
// -high-order function
// -setTimeout
// -self exicuting function
// -javascript function currying
// */

// //----------------Challenge 9.1----------------------
// /*
//   Function Arrow Challenges
// */

// // [1] One Statement In Function
// // [2] Convert To Arrow Function
// // [3] Print The Output [Arguments May Change]

// // function tryy(call,...names) {
// // 	let tryF = '';
// //   for (let i = 0 ; i < names.length; i++){
// // 	call(names[i]) ? tryF += `[${names[i]}], ` : null
// //   }
// //   return tryF = tryF.slice(0, tryF.length - 2)
// //   } 
// //   let isString = (x) => typeof x == 'string';
  

// // let names = function (...names) {
// // 	// Parameter ?
// // 	return `String [${names.join("], [")}] => Done !`
// //   };
// //   let arrowNames = (...names) => `Arrow [${names.join('], [')}] => Done !`
// //   console.log(tryy(isString,"Osama", "Mohamed", "Ali", "Ibrahim"));
// //   console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// //   console.log(arrowNames("Osama", "Mohamed", "Ali", "Ibrahim"));
// //   // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
// //   /* ================================= */
  
// //   // [1] Replace ??? In Return Statement To Get The Output
// //   // [2] Create The Same Function With Regular Syntax
// //   // [3] Use Array Inside The Arguments To Get The Output
  
// //   let myNumbers = [20, 50, 10, 60];
  
// //   let calc = (one, two, ...nums) => one + two + parseInt(nums);
// //   function calc2(one, two, ...nums) {return one + two + parseInt(nums)};
// //   console.log(calc2(10, 50, 20)); // 80

// //   //----------------------Assignment 9.1---------------------

// //   function details(name, age, country) {
// // 	let nameP =  () => `${name.slice(0, name.indexOf(' '))}${name.substr(name.indexOf(' ') , 2).toUpperCase()}.`;
// // 	nameP();
// // 	let ageP = () => `Your age is ${parseInt(age)}`;
// // 	ageP();
// // 	let countryP = ()=> `You'r From ${(country.slice(0, 2)).toUpperCase()}`; 
// // 	countryP();
// // 	let fullDetails = ()=> `${nameP()}, ${ageP()}, ${countryP()}`
// // 	return fullDetails();
// // }
// // console.log(details("Osama Mohamed", "38 Is My Age", "Egypt"));
// // // Hello Osama M., Your Age Is 38, You Live In EG

// //   console.log(details("Ahmed ali", "32 Is The Age", "Syria"));
// //   console.log(details("Mohamed Elkholy", "18 fuck you", "Giza"));
// // //   // Hello Ahmed A., Your Age Is 32, You Live In SY

// // //   function getDetails(zName, zAge, zCountry) {
// // // 	function namePattern(zName) {
// // // 	  // Write Your Code Here
// // // 	  // Osama Mohamed => Osama M.
// // // 	  // Ahmed ali => Ahmed A.
// // //   		return zName = zName.slice(0, zName.indexOf(' ') + 2) + '.';
// // // 	}
// // // 	function ageWithMessage(zAge) {
// // // 	  // Write Your Code Here
// // // 	  // 38 Is My Age => Your Age Is 38
// // // 	  // 32 Is The Age => Your Age Is 32
// // // 	  return parseInt(zAge) ;
// // // 	}
// // // 	function countryTwoLetters(zCountry) {
// // // 	  // Write Your Code Here
// // // 	  // Egypt => You Live In EG
// // // 	  // Syria => You Live In SY
	  
// // // 	  return zCountry = zCountry.slice(0, 2).toUpperCase();
// // // 	}
// // // 	function fullDetails() {
// // // 	  // Write Your Code Here
// // // 	  return namePattern;
// // // 	}
// // // 	return fullDetails(); // Do Not Edit This
// // //   }

// // //-----------------------------------
// // function itsMe() {
// // 	return `Iam A Normal Function`;
// //   }
// //   let itsme = ()=> `I'm an Arrow Function`
  
// //   console.log(itsMe()); // Iam A Normal Function
// //   console.log(itsme()); // Iam A Normal Function

// //   function urlCreate(protocol, web, tld) {
// // 	return `${protocol}://www.${web}.${tld}`;
// //   }
// //   let urlcreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}` ;
  
// //   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
// //   console.log(urlcreate("https", "elzero", "org")); // https://www.elzero.org

// //   //----------------------------
// //   let checker = (zName) => (status) => (salary) => status == 'Available' ? `${zName}, My salary is ${salary}` : `Sorry, I'm not Available`
// // //   function checker(zName) {
// // // 	return function (status) {
// // // 	  return function (salary) {
// // // 		return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
// // // 	  };
// // // 	};
// // //   }
  
// //   console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// //   console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// //   //------------------------
// //   function specialMix(...data) {
// // 	// Your Code Here
// //   }

// //   	function specialMix(...input) {
// // 		let result = 0 ;
// // 		let notN = [];
// // 		for (let i = 0; i < input.length; i++){
// // 			if (isNaN(parseInt(input[i]))) {
// // 				notN.push(input[i]);
// // 			}else {
// // 				result += parseInt(input[i]);
// // 			}
// // 		}
// // 		if (result <= 0) {
// // 			return `There is no numbers`
// // 		}
// // 		if (notN.length !== 0) {
// // 			return `Result is ${result} and "${notN.join(" & ")}" is not a number`;
// // 		}else {
// // 			return `Result is ${result}`
// // 		}
		
// // 	}
// // 	console.log(specialMix("Mohamed2", "20", "s", "hellog", "233"))
// //   console.log(specialMix(10, 20, 30)); // 60
// //   console.log(specialMix("10Test", "Testing", "20Cool", "Nehahah")); // 30
// //   console.log(specialMix("kholy", "10Testing", "40Cool")); // 50
// //   console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// //   //-----------------
// //   const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// //   var i = arr.length, j, random;
// //   while (i-- > 0) {
// // 	j = Math.floor(Math.random() * (i + 1));
// // 	random = arr[j];
// // 	arr[j] = arr[i];
// // 	arr[i] = random;
// // }
// //   document.write(arr)

// //   //--------------------------Assignments and Notes - Week 10----------------------
// //   /*
// //   //----------------------------Quick Summery---------------------------------
// //   -Higher order function
// //     --Map
// //     --Map Practice
// //     --Filter
// //     --Filter Practice
// //     --Reduce
// //     --Reduce Pracitce
// //     --forEach And Practice
// //   //---------------------------Search FOr------------------
// //   -JavaScript Higher Order Function
// //   -Javascript Flatten Array
// //   -JavaScript ForEatch This Argument
// //   */

// //   // -------------------------------Challenge 10.1-----------------------------------
// //   /*
// //   Higher Order Functions Challenges

// //   You Can Use
// //   - ,
// //   - _
// //   - Space
// //   - True => 1 => One Time Only In The Code

// //   You Cannot Use
// //   - Numbers
// //   - Letters

// //   - You Must Use [Filter + Map + Reduce + Your Knowledge]
// //   - Order Is Not Important
// //   - All In One Chain

// // */

// // console.log("--------------Challenge 10.1-------------");
// // let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// // let solution = myString.split(",").filter((ele)=> isNaN(parseInt(ele)))
// // .reduce((all, ele)=> `${all}${ele}`).split("_").reduce((all, ele)=> `${all} ${ele}`).split()
// // .map((ele)=> {
// //   return `${ele.substr(true, ele.length - "  ".length)}`
// // }).reduce((all)=> `${all}`);


// // console.log(solution); // Elzero Web School

// // //------------------------Assignments 10.1---------------------------------------
// // console.log("-------------Assignments 10.1--------------");
// // let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// // let mixParse = ''; // we can simply use this variable with map as acucurment in reduce and get the element who pass the test in it ;
// // let mixParse2 = mix.map((ele)=> {
// //   if (isNaN(parseInt(ele))) {
// //     if(ele != 'undefiend')
// //     return ele;
// //   }
// // }).reduce((all, ele)=> `${all}${ele}`).split('undefined')
// // .reduce((all, ele)=> `${all}${ele}`);

// // console.log(`1- ${mixParse2}`)
// // // Elzero
// // //------------Assignment 10.2-----------------

// // //----------------Map Solution---------------
// // let myNewString = "EElllzzzzzzzeroo";
// // // let myStringParse = [];
// // // myNewString.split("").map((ele)=>{
// //   //   if (!myStringParse.includes(ele)){
// //     //     myStringParse += ele;
// //     //   }
// //     // })
    
// // //----------------filter Solution---------------
// // // myNewString.split("").filter((ele)=> !myStringParse.includes(ele) ? myStringParse += ele : null)
// // //-----------------Reduce Solution--------------
// // let myStringParse = myNewString.split("").reduce((all, ele)=> {
// //   !all.includes(ele) ? all += ele: null;
// //   return all;
// // }, '')
// // console.log("-----------Assignment 10.2----------------");
// // console.log(`2- ${myStringParse}`);
// // // Elzero
// // //--------------------Assignment 10.3-------------------------
// // let myArray = ["E", "l", "z", ["e", "r"], "o"];
// // let myArrayParse = myArray.reduce((all, ele, i, arr)=>{
// //   return `${all}${ele}`
// // }).split(",").reduce((all, ele)=> `3- ${all}${ele}`)
// // console.log("------------Assignment 10.3---------------");
// // console.log(myArrayParse);
// // // Elzero
// // //-----------------Assignment 10.4-----------------------------
// // console.log("-----------Assignment 10.4----------------");
// // let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// // let numsAndStringsParse = numsAndStrings.filter((ele)=> !isNaN(parseInt(ele)))
// // .map((ele)=> -ele)
// // console.log(numsAndStringsParse)
// // // [-1, -10, 10, 20, -5, -3]
// // console.log("-------------Assignment 10.5--------------");
// // //-----------------Assignment 10.5-----------------------------
// // let nums = [2, 12, 11, 5, 10, 1, 99];
// // let isOdd = (x)=> x % 2 !== 0;
// // let isEven = (x)=> x % 2 === 0;
// // let numsParse = nums.reduce((all, ele)=>{
// //   isOdd(ele) ? all += ele :
// //   isEven(ele) ? all *= ele : null;
// //   return all;
// // }, 1);
// // console.log(numsParse)
// // // 500


// // //-------------------------Assignments & Notes - WEEK 11----------------------
// // /*
// // ----------------------------Quick Summery-----------------------------------
// // -object introduction
// //   --intro and what is object
// //   --Testing window object
// //   --accessing object
// // -Dot notaion vs bracket notation
// //   --dig deeper
// //   --dot notation vs bracket noation
// //   --dynamic property name
// // -nested object and practice
// // -creat object with new keyword
// // -this keyword
// //   --this introdution
// //   --this inside object method
// //   --test variables with window and this
// //   --global context
// //   --function contxt
// //   --strict mode
// // -creat object with creat method
// // -cerat object with assign method

// // ----------------------search for-------------------------
// // -javascript objects
// // -JS has own property
// // -JS object sorting
// // -JS object length
// // -JS object keys
// // -JS object values
// // -JS stric mode
// // */

// // //------------------Assignment 11.1----------------
// // console.log('------------11.1-------------');
// // // Create Your Object Here
// // const member = {
// //   name: 'Elzero',
// //   age: 38,
// //   country: 'Egypt',
// //   fullDetails(){
// //     console.log(`My name is ${this.name}, My Age Is ${this.age}, I live in ${this.country}.`)
// //   },
// // };
// // console.log(member.name); // Elzero
// // console.log(member.age); // 38
// // console.log(member.country); // Egypt
// // console.log(member.fullDetails());
// // // My Name Is Elzero, My Age Is 38, I Live in Egypt

// // //------------------Assignment 11.2----------------
// // console.log('------------11.2-------------');
// // // Method One
// // // Create Your Object Here
// // const objMethodOne = {property: 'Method One'};

// // console.log(objMethodOne.property); // "Method One"

// // // Method Two
// // // Create Your Object Here
// // const objMethodTwo = new Object();
// // objMethodTwo.property = 'Method Two';
// // console.log(objMethodTwo.property); // "Method Two"

// // const objMethodThree = Object.create({property: 'Method Three'}, {});
// // console.log(objMethodThree.property)


// // // Method Four
// // // Create Your Object Here
// // const objMethodFour = Object.assign({property: 'Method Four'}, {});
// // console.log(objMethodFour.property); // "Method Four"

// // //------------------Assignment 11.3----------------
// // console.log('------------11.3-------------');
// // let a = 1;

// // let threeNums = {
// //   b: 2,
// //   c: 3,
// //   d: 4,
// // };

// // let twoNums = {
// //   e: 5,
// //   f: 6,
// // };

// // // Create Your Object Here in One Line
// // const finalObject = Object.assign({a}, threeNums, twoNums);
// // Object.keys(finalObject).forEach((e)=>{
// //   console.log(e);
// // })

// // /*
// //   a: 1
// //   b: 2
// //   c: 3
// //   d: 4
// //   e: 5
// //   f: 6
// // */

// // //------------------Assignment 11.4----------------
// // console.log('------------11.4-------------');
// // // The Object To Work With
// // let myFavGames = {
// //   "Trinity Universe": {
// //     publisher: "NIS America",
// //     price: 40,
// //   },
// //   "Titan Quest": {
// //     publisher: "THQ",
// //     bestThree: {
// //       one: "Immortal Throne",
// //       two: "Ragnarök",
// //       three: "Atlantis",
// //     },
// //     price: 50,
// //   },
// //   YS: {
// //     publisher: "Falcom",
// //     bestThree: {
// //       one: "Oath in Felghana",
// //       two: "Ark Of Napishtim",
// //       three: "origin",
// //     },
// //     price: 40,
// //   },
// // };

// // // Code One => How To Get Object Length ?
// // let objectLength = Object.keys(myFavGames).length;

// // for(let i = 0; i < objectLength; i++) {
// //   const propertiesOne = myFavGames[Object.keys(myFavGames)[i]];
// //   // const release = Object.values(propertiesOne['bestThree'])[i];
// //   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
// //   console.log(`The Publisher Is ${propertiesOne["publisher"]}`);
// //   console.log(`The Price Is ${propertiesOne['price']} `);
// //   if (Object.keys(propertiesOne).length >= 3) {
// //         console.log(`First => ${Object.values(propertiesOne['bestThree'])[0]}`);
// //         console.log(`Second => ${Object.values(propertiesOne['bestThree'])[1]} `);
// //         console.log(`Third => ${Object.values(propertiesOne['bestThree'])[2]} `);
// //   }else {
// //     null;
// //   }
// //   console.log("#".repeat(20));

// //   // if (myFavGames[Object.keys(myFavGames)[i]]['bestThree']){
// //   //   console.log("- Game Has Releases");
// //   //     console.log(`First => ${Object.values(myFavGames[Object.keys(myFavGames)[i]['bestThree'][0]])}`);
// //   //     console.log(`Second => ${Object.values(Object.keys(myFavGames)[i])[1]}`);
// //   //     console.log(`Third => ${Object.values(myFavGames.YS.bestThree)[2]}`);
// //   }
// //   // Check If Nested Object Has Property (bestThree)
// //   // for(let i = 0; i < objectLength; i++){
// //   //   const value = (Object.keys(myFavGames)[i])
// //   //   if (myFavGames.value.bestThree) {
// //   //     console.log("- Game Has Releases");
// //   //     console.log(`First => ???????`);
// //   //     console.log(`Second => ???????`);
// //   //     console.log(`Third => ???????`);
// //   //     console.log(value);
// //   //   }
// //   //   console.log("#".repeat(20));
// //   // }

// //   // if (myFavGames.YS.bestThree){
// //   //   console.log("- Game Has Releases");
// //   //     console.log(`First => ${Object.values(myFavGames.YS.bestThree)[0]}`);
// //   //     console.log(`Second => ${Object.values(myFavGames.YS.bestThree)[1]}`);
// //   //     console.log(`Third => ${Object.values(myFavGames.YS.bestThree)[2]}`);
// //   // }
// //   // if (myFavGames["Trinity Universe"].bestThree){
// //   //   console.log('hi')
// //   //   console.log("- Game Has Releases");
// //   //     console.log(`First => ${Object.values(myFavGames["Trinity Universe"].bestThree)[0]}`);
// //   //     console.log(`Second => ${Object.values(myFavGames["Trinity Universe"].bestThree)[1]}`);
// //   //     console.log(`Third => ${Object.values(myFavGames["Trinity Universe"].bestThree)[2]}`);
// //   // }
// //   // if (myFavGames["Titan Quest"].bestThree){
// //   //   console.log("- Game Has Releases");
// //   //     console.log(`First => ${Object.values(myFavGames["Titan Quest"].bestThree)[0]}`);
// //   //     console.log(`Second => ${Object.values(myFavGames["Titan Quest"].bestThree)[1]}`);
// //   //     console.log(`Third => ${Object.values(myFavGames["Titan Quest"].bestThree)[2]}`);
// //   // }


// // // Ouput

// // // "The Game Name Is Trinity Universe"
// // // "The Publisher Is NIS America"
// // // "The Price Is 40"
// // // "####################"
// // // "The Game Name Is Titan Quest"
// // // "The Publisher Is THQ"
// // // "The Price Is 50"
// // // "- Game Has Releases"
// // // "First => Immortal Throne"
// // // "Second => Ragnarök"
// // // "Third => Atlantis"
// // // "####################"
// // // "The Game Name Is YS"
// // // "The Publisher Is Falcom"
// // // "The Price Is 40"
// // // "- Game Has Releases"
// // // "First => Oath in Felghana"
// // // "Second => Ark Of Napishtim"
// // // "Third => origin"
// // // "####################"


// // //------------------------------------------------------------
// // const x = document.getElementById("main");
// // const y = x.getElementsByTagName("p");
// // console.log(y);
// // const findbyClassName = document.getElementsByClassName("intro");
// // console.log(findbyClassName);
// // const query = document.querySelector("p.intro");
// // const queryAll = document.querySelectorAll("p.intro");
// // console.log(query)
// // console.log(queryAll)
// // console.log(document.anchors.length);
// // console.log(document.body);
// // console.log(document.documentElement);
// // console.log(document.embeds);
// // console.log(document.forms);
// // console.log(document.head);
// // console.log(document.images);
// // console.log(document.links);
// // console.log(document.scripts);
// // console.log(document.title);

// // let test = document.getElementById("test");
// // console.log(test.innerHTML)// expect : this element has extra spacing           and <span>span</span>.
// // console.log(test.innerText)//expect : this element has extra spacing and span.
// // console.log(test.textContent)// expect : this element has extra spacing           and span.

// // //--------------90
// // for(let i = 0 ; i <= 100; i++){
// //   let products = document.createElement("div");
// //   let productsH2 = document.createElement("h2");
// //   let productsPara = document.createElement('p');
// //   let productsH2Text;
// //   let productsParaText;
// //   products.className = "products";
// //   productsH2Text = document.createTextNode("Heading" + i)
// //   productsH2.appendChild(productsH2Text);
// // productsParaText= document.createTextNode("Paragraph" + i)
// // productsPara.appendChild(productsParaText);
// // products.appendChild(productsH2);
// // products.appendChild(productsPara);
// // document.body.appendChild(products);
// // }
// // let element = document.createElement("div");
// // element.className = 'hi'
// // console.log(element.hasAttributes('class'))

// // //------------------------ preventDefault();

// // // let checkbox = document.querySelector("#id-checkbox");

// // // checkbox.addEventListener("click", checkboxClick, false);

// // // function checkboxClick (event) {
// // //   let warn = "preventDefault() won't let you check it ( : <br>"

// // //   document.getElementById("output-box").innerHTML += warn;

// // //   event.preventDefault();
// // // }



// // let checkbox = document.querySelector("#id-checkbox");

// // checkbox.onclick = function checkboxClick (event) {
// //   let warn = "preventDefault() won't let you check it ( : <br>"

// //   document.getElementById("output-box").innerHTML += warn;

// //   event.preventDefault();
// // }

// // // let event;
// // // document.body.onmousedown = ()=>  console.log("You'r clicking your mouse now! (:")
// // // document.body.onmouseup = ()=>  console.log("You'r not")
// // // document.body.onscroll = ()=>  console.log("Scrolling?????")
 
// // console.log(document.lastModified);
// // console.log(document.readyState);
// // console.log(document.URL);


// //------------------------JavaScript Assignments and notes-- Week 12-----------------
// /*
// -What's DOM and select elements
//   --what's DOM or document object model, a w3c standard.
//   --DOM selectors
//     ---find element by id
//     ---find elements by tag name
//     ---find elements by class name
//     ---find elements by css selectors
//     ---find elements by collections
//       -title
//       -body
//       -images
//       -forms
//       -links
// -DOM [get/set elements content and attributes]
//   --innerHTML
//   --textContent
//   --innerText
//   --change atribute directly
//   --change attribute with methods
//     --get attribute
//     --set attribute
// -creat and append elements
//   --DOM[creat elements]
//   --creat element
//   --creat comment
//   --creatTextNode
//   --creat atrribute
//   --appendchild
// -product with title and description Practice
// -DOM [deal with children]
//   --children
//   --childNodes
//   --firstChild
//   --lastChild
//   --firstElementChild
//   --lastElementChild
// -DOM Events
//   --Use Events on HTML
//   --Use Events on JS
//     ---onclick
//     ---oncontextmenu
//     ---onmouseenter
//     ---onmouseleave
//     ---onload
//     ---onscroll
//     ---onresize
//     ---onfocus
//     ---onblur
//     ---onnsubmit
// -Validate form and preventDefault()

// --------------------Search For
//   -JS DOM
//   -JS DOM Methods
//   -JS DOM Atrributes
//   -JS Create Elements
// */

// //-------------------------Assignment 12.1----------------
// console.log('--------------12.1--------------');

// // <div id="elzero" class="element" name="js">JavaScript</div>

// // let method1 = document.getElementById("elzero"); // ById
// // let method3 = document.getElementsByClassName("element"); //ByClassName
// // let method2 = document.getElementsByName("js"); //ByName
// // let method4 = document.getElementsByTagName("div");// ByTagName
// // let method5 = document.firstElementChild;
// // let method6 = document.lastElementChild;
// // let method7 = document.children[0];
// // let method8 = document.querySelector("div"); // QuerySelector
// // let method9 = document.querySelector("#elzero");// QuerySelector
// // let method10 = document.querySelector(".element");// QuerySelector
// // let method11 = document.querySelector("[name = js]");// QuerySelector
// // let method12 = document.querySelectorAll("div")[0]; // QuerySelectorAll
// // let method13 = document.querySelectorAll("#elzero")[0];// QuerySelectorAll
// // let method14 = document.querySelectorAll(".element")[0];// QuerySelectorAll
// // let method15 = document.querySelectorAll("[name = js]")[0];// QuerySelectorAll

// // console.log(method1);
// // console.log(method2);
// // console.log(method3);
// // console.log(method4);
// // console.log(method5);
// // console.log(method6);
// // console.log(method7);
// // console.log(method8);
// // console.log(method9);
// // console.log(method10);
// // console.log(method11);
// // console.log(method12);
// // console.log(method13);
// // console.log(method14);
// // console.log(method15);

// //-------------------------Assignment 12.2----------------
// console.log('--------------12.2--------------');


// // let img = document.createElement("img");


// // // img.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
// // // img.setAttribute("alt", "Elzero Logo");

// // let srcAtt = document.createAttribute("src").value = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
// // let altAtt = document.createAttribute("alt").value = "Elzero Logo";

// // // img.setAttributeNode(srcAtt);
// // // img.setAttributeNode(altAtt);

// // img.append(srcAtt)

// // document.body.appendChild(img);

// // let element = document.querySelector("div>img");
// // let srcAtt = document.createAttribute("src");
// // srcAtt.value = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
// // let altAtt = document.createAttribute("alt");
// // altAtt.value = "Elzero Logo";
// // console.log(element);
// // element.setAttributeNode(srcAtt);
// // element.setAttributeNode(altAtt);
// // for (let i = 0 ; i <= 10; i++){
// //   // element.src = "hi";
// //   // element.setAttribute("src", "fuck");
// //   document.body.appendChild(element);
  
// // }

// // let imgCount = document.getElementsByTagName("img").length; 

// // for(let i = 0 ; i <= imgCount; i++){
// //   let container = document.querySelector("div");
// //   let element = document.querySelector("img");
  
// //   element.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
// //   element.setAttribute("alt", "Elzero Logo");
  
// //   container.appendChild(element);
// //   document.body.appendChild(container);
// // }

  
//   //-------------------------Assignment 12.3----------------
//   console.log('--------------12.3--------------');
//   //   <form action="">
//   //   <input type="number" name="dollar" placeholder="USD Dollar" />
//   //   <div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
// // </form>


// // let input = document.getElementsByTagName("input")[0];
// // let output = document.getElementsByClassName("result")[0];
// // output.innerHTML = "Enter A Number Please"
// //   input.oninput = ()=> {
// //     let inputValue = input.value;
// //     let result = inputValue * 15.6;
// //    console.log(result)
// //    output.innerHTML = `{${inputValue}} USD Dollar = {${result.toFixed(2)}} Egyptian Pound`
// //   } 


// // let inputValid = false;

// // if (inputValid == false) {
// //   input.preventDefault()
// // }

// // let dollar = document.getElementById("dollar");
// // let dollarIn = Number(dollar.value);
// // console.log(dollarIn)
// // console.log(dollar.innerText)
// // console.log(dollar.innerHTML)
// // console.log(dollar.value)
// // console.log(dollar.value)

// // dollar.addEventListener("input", Input);

// // function Input(e) {
// //   e.preventDefault();
// // }


// // // if (typeof(dollarIn) === 'number') {
// // //   console.log('hi');
// // // }else{
// // //   console.log('fuck')
// // // }


//   //-------------------------Assignment 12.4----------------
//   console.log('--------------12.4--------------');
  
//   //<div class="one" title="two">Two</div>
// /* <div class="two" title="one">One</div> */

// // let elementOne = document.getElementsByClassName("one")[0];
// // let elementTwo = document.getElementsByClassName("two")[0];

// // console.log(elementOne , elementTwo)


// // let elementOneText = elementTwo.innerText;
// // let elementTwoText = elementOne.innerText;

// // elementOne.innerText = elementOneText;
// // elementTwo.innerText = elementTwoText;

// // let elementOneAttText = elementTwo.getAttribute("title");
// // let elementTwoAttText = elementOne.getAttribute("title");

// // elementOne.setAttribute("title", elementOneAttText);
// // elementTwo.setAttribute("title", elementTwoAttText);

// // document.body.appendChild(elementOne);
// // document.body.appendChild(elementTwo);

// // let elementOneAtt = document.createAttribute("title", elementOneAttText) ;
// // let elementTwoAtt = document.createAttribute("title", elementTwoAttText) ;

// // elementOne.removeAttribute('title');
// // elementTwo.removeAttribute('title');

// // elementOne.setAttributeNode(elementOneAtt);
// // elementTwo.setAttributeNode(elementTwoAtt);


// // elementOne.innerText = elementTwo.innerText;
// // elementTwo.innerText = elementOne.innerText;

// // elementOne.setAttribute("title", "one");
// // elementTwo.setAttribute("title", "two");



// // elementOne.removeAttribute("title")

// // console.log(elementOne.hasAttribute('title'))
// // let oneAtt = document.createAttribute("title");
// // oneAtt.value = "one";
// // let twoAtt = document.createAttribute("title");
// // twoAtt.value = "two";

// // elementOne.setAttributeNode(oneAtt);
// // elementTwo.setAttributeNode(twoAtt);
// // console.log(elementOne.hasAttribute('title'))

// //-----------------
//   //-------------------------Assignment 12.5----------------
//   console.log('--------------12.5--------------');
//   {/* <img src="#" alt="One" />
//   <img src="#" />
// <img src="#" alt="Three" />
// <img src="#" />
// <img src="#" /> */}

// // let imgs = document.getElementsByTagName("img");
// // console.log(imgs);

// // let imgCount = imgs.length;
// // for(let i = 0; i <= imgCount ; i++){
// //   if(imgs[i].hasAttribute("alt")){
// //     imgs[i].alt = "Old";
// //   }else {
// //     imgs[i].setAttribute("alt", "Elzero New")
// //   }
// //   imgs[i].innerHTML = "<br>"
// // }

//   //-------------------------Assignment 12.6----------------
//   console.log('--------------12.6--------------');

// {/* <form action="">
//   <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
//   <input type="text" name="texts" class="input" placeholder="Elements Text" />
//   <select name="type" class="input">
//     <option value="Div">Div</option>
//     <option value="Section">Section</option>
//   </select>
//   <input type="submit" name="create" value="Create" />
//   <div class="results"></div>
// </form> */}

// //Inputs
// let inputNumber = document.querySelector("[type = number]");
// let inputText = document.querySelector("[type = text]");
// let inputSelect = document.querySelector("[name = type]");
// let selectOptions = inputSelect.children;
// let selectOptionsCount = selectOptions.length;
// //submit
// let inputSubmit = document.querySelector("[type = submit]");
// //result
// let result = document.getElementsByClassName("results")[0];
// //warn
// let warnMessage;

// document.forms[0].onsubmit = (e)=>{
// //back to default
//   e.preventDefault();
//   result.innerHTML = ``

// //inputValues
//   let numberValue = inputNumber.value;
//   let textValue = inputText.value;
//   let selectValue = inputSelect.value;

// //someconditions & main Code
//   if(+numberValue > 0){
//     for(let i = 0; i < +numberValue; i++){
//       if(textValue != ""){
//           for(let s = 0; s < selectOptionsCount; s++){
//             //loop on select options & the Important code
//             if(selectValue === selectOptions[s].getAttribute("value")){
//               result.innerHTML += `<${selectValue} id = "out-${i + 1}" class = "output">${textValue}</${selectValue}>`   
//               // let outElement = document.createElement(selectValue);
//                 // let outContent = document.createTextNode(textValue);
              
//                 // outElement.appendChild(outContent);
//               }
//           }
//           //Without Loopt on select options
//           // if(selectValue === selectOptions[0].getAttribute("value")){
//           //   let outElement = document.createElement(selectValue);
//           //   let outContent = document.createTextNode(textValue);
//           //   outElement.appendChild(outContent);
//           //   result.innerHTML += `<${selectValue}>${textValue}</${selectValue}>`
//           // }else if(selectValue === selectOptions[1].getAttribute("value")){
//           //   let outElement = document.createElement(selectValue);
//           //   let outContent = document.createTextNode(textValue);
//           //   outElement.appendChild(outContent);
//           //   result.innerHTML += `<${selectValue}>${textValue}</${selectValue}>`
//           // }
//           // else{
//           //   result.innerHTML = `Choose Type Please`
//           // }
//       }else{
//         result.innerHTML = `Enter A Valid Text Please`
//       }
//     }
//   }else{
//     result.innerHTML = `Enter A Valid Number Please`
//   }
// }

// /*
// inputNumber
// inputText
// inputSelect
// inputSubmit
// result
// output
// */

// //Make it Stylish
// output.style.backgroundColor('balck')

// document.body.style.color = 'white'























// // document.forms[0].onsubmit = function(e) {
// //   e.preventDefault();
// //   //inputValues
// //   let numberValue = inputNumber.value;
// //   let textValue = inputText.value;
// //   let selectValue = inputSelect.value;
// //   //Main Script
// //   if(+numberValue > 0){
// //     for(let i = 0 ; i < +numberValue; i++){
// //       // let contentContainer = document.createElement("div");
// //         if (textValue !== "") {
// //           for(let j = 0; j < +selectOptionsCount; j++){
           
// //               let outputElement = document.createElement(selectOptions[j].getAttribute("value"));
// //               let outputContent = document.createTextNode(textValue);

// //               outputElement.innerHTML = textValue;
// //               result.appendChild(outputElement)

// //               // document.body.appendChild(outputElement);
// //               // outputElement.appendChild(outputContent);
// //               // result.appendChild(outputElement)
// //               // document.body.appendChild(outputElement);
// //               // contentContainer.appendChild(outputElement);
// //               // document.body.appendChild(contentContainer);
// //           }
// //         }else {
// //           warnMessage = document.createTextNode("Please enter A text");
// //           result.innerHTML = "Please enter A text"
// //         }
// // }
// // }else {
// //   console.log("Please Enter A validNumber")
// // }
// // }


























// // let inputNumber = document.querySelector("[type = number]");
// // let inputText = document.querySelector("[type = text]");
// // let inputSubmit = document.querySelector("[type = submit]");
// // let inputSelect = document.getElementsByTagName("select")[0];

// // function action(){
  
// //   inputNumber.oninput = (e)=> {
// //     let numberValue;
// //     let textValue;
// //     let selectValue;
// //     numberValue = inputNumber.value;
// //     textValue = inputText.value;
// //     selectValue = inputSelect.value;
// //     e.preventDefault();
// //     for (let i = 0; i <= +numberValue; i++){
// //       let divElement = "";
// //       let elementContent = "";

// //       let elementContent = document.createTextNode(textValue);
// //       if (selectValue === "Div"){
// //         let divElement = document.createElement("div");
// //         // divElement.innerText = elementContent;
// //         divElement.appendChild(elementContent);
// //         document.body.appendChild(divElement);
// //       }else if (selectValue === "Section"){
// //         let sectionElement = document.createElement("section");
// //         sectionElement.appendChild(elementContent);
// //         document.body.appendChild(sectionElement);
// //       }else {
// //         let warn = document.createElement("p");
// //         let warnMessage = document.createTextNode( "Please Choose The Type");
// //         warn.appendChild(warnMessage)
// //         document.body.appendChild(warn);
// //       }
      
// //     }
// //   }

// // }

// // action()


// // console.log(inputSubmit)

// // inputSubmit.addEventListener("submit", onSubmit, false);
// // function onSubmit(event){
// //   console.log(event);
// //   event.preventDefault();
// // }



// // inputSubmit.onsubmit = (e)=> inputSubmit.preventDefault()












//------------------------WEEK 13--------------------------

{/* <div class="assign">
      <input type="text" class="classes-to-add" placeholder="Add Classes" />
      <input type="text" class="classes-to-remove" placeholder="Remove Classes" />
      <div class="element current" title="Current">Current Element</div>
      <div class="classes-list">
        <h5>Current Element Class Lists</h5>
        <div></div>
      </div>
    </div> */}

//inputs
// const allIn = document.getElementsByTagName("input");
// const add = document.getElementsByClassName("classes-to-add");
// const remove = document.getElementsByClassName("classes-to-remove");
// //outut
// const containerOut = document.getElementsByClassName("classes-list");
// const displayOut = containerOut[0].children[1];

// const allInArr = Array.from(allIn);

// let element;
// let elementText;
// let elementsArr = [];
// let idCount = 0;

// allInArr.map((e)=>{
//   e.onblur = (e)=>{
//     if(e.target.id === "add"){
//       e.target.value.split(" ").map((e)=>{
//         if(e != " " && e.length > 0){
//           element = document.createElement("span");
//           element.id = idCount++;
//           element.innerText = e;
//           displayOut.appendChild(element) 
//         }
//       })
//     }else if(e.target.id === 'remove'){
//       e.target.value.split(" ").map((e)=>{
//         if(e != " " && e.length > 0){
          
//         }
//       })
//     }
//      e.target.value = "";
//   }
// })

//-------------------------13.3------------------
{/* <div class="our-element">Our Element</div>
<p>Paragraph</p> */}
// const mainElement = document.getElementsByClassName("our-element");
// mainElement[0].nextElementSibling.remove();
// const pre = document.createElement("div");
// pre.classList.add("Start");
// pre.setAttribute("data-value", "Start");
// pre.innerText = "Start";
// const end = document.createElement("div");
// end.classList.add("End");
// end.setAttribute("data-value", "End");
// end.innerText = "End";
// mainElement[0].before(pre)
// mainElement[0].after(end)

//-------------------------13.4------------------
{/* <div>
<span>Hello</span>
  <!-- We Need The Next Text Without Spaces -->
  Elzero
</div> */}
// const elzero = document.getElementsByTagName("div")[0].lastChild
// console.log(elzero)

//-------------------------13.4------------------
const all = document.querySelectorAll("body *");
console.log(all)
Array.from(all).map((e)=>{
  e.onclick=(e)=>{
    console.log(`This is <${e.target.tagName.toLowerCase()}>`)
  }
})