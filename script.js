    // document.write("<h1 id='head'>Elzero</h1>")
    // ;document.getElementById("head").style = "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;"
    // ;console.log("%cI'm%c Alive %cBitch", "font-size: 40px; color: white; background-color: blue;", "font-size: 40px; color: green; font-weight: bold;", "font-size: 40px; color: red; text-decoration: line-through;")
    // ;console.group("Gruop 1")
    // ;console.log("Message One")
    // ;console.log("Message Two")
    // ;console.groupCollapsed("Child Group")
    // ;console.log("Message One")
    // ;console.log("Message Two")
    // ;console.groupCollapsed("Grand Child Group")
    // ;console.log("Message One")
    // ;console.log("Message Two")
    // ;console.groupEnd()
    // ;console.groupEnd()
    // ;console.groupEnd()
    // ;console.group("Group 2")
    // ;console.log("Message One")
    // ;console.log("Message Two")
    // ;console.groupEnd()
    // ;console.table(["Mohamed" , "Kholy", "Elzero", "Ahmed", "Noor"])
    // ;console.table(["apples", "oranges", "bananas"]);

    // //we can stop it by comments like this . or this /* */
    // /*
    //  *;console.log("Iam In Console")
    //  *;document.write("Iam In Page")
    //  */

    // Assignment 2

    // let numberOne = 10 ; numberTwo = 20;
    // console.log(numberOne + "" + numberTwo);
    // console.log(typeof(numberOne + "" + numberTwo));
    // console.log(`${numberOne}${numberTwo}`);
    // console.log(typeof(`${numberOne}${numberTwo}`));
    // console.log(numberTwo + "\n" + numberOne);
    // console.log(`${numberTwo}
    // ${numberOne}`);

    // console.log(elzero.innerHTML); // object
    // console.log(typeof elzero); // object

    // console.log("`I'm In\n\\\\ \n Love \\\\ \"\"\" \'\'\'\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");

    // let a = 21; b = 20;
    // console.log(a + ("_" + b + a).repeat(3) + "_" + b);

    // let title = "Elzero" ; desc = "Elzero Web School" ; date = "25/10" ;
    // let structur = `
    //     <div>
    //         <h3>${title}</h3>
    //         <p>${desc}</p>
    //         <span>${date}</span>
    //     </div>
    // `
    // document.write(structur.repeat(4));


    // Assignment [018 to 022] ----------------------

    // Replace ? With Arithmetic Operators
    // console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

    // let num = 3;
    // console.log(num * (true + true)); // 6
    // console.log(num + true + true + true ); // 6
    // console.log(num * num - true - true - true); // 6
    // console.log(num + num); // 6
    // console.log(num * num / num + num); // 6
    // console.log(num ** num / num - num); // 6


    // let numT = "10";

    // console.log(+numT + Number(numT)); // 20
    // console.log(+numT * +numT / numT + +numT); // 20
    // console.log(Number(numT) * numT / numT * (true + true)); // 20
    // console.log(((-numT + numT * numT % (true + true)) * (true + true)) * -1); // 20

    // let points = 10;
    // console.log((points * points) / 7.5 ); // 13
    // console.log((points % (true + true + true + true) - points) * -1 ); // 8;

    // let a = 10;
    // let b = "20";
    // let c = 80;

    // console.log(++a + +b++ + +c++ - +a++);
    // // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

    // /*
    // [++a]
    // - Value: 11
    // - Explain: Pre Increment
    // [+]
    // - Explain: Addition Sign  
    // [+b++]
    // - Value : 21
    // - Explain : Unary Plus, Post Increment
    // [+]
    // - Explain : Addition Sign  
    // [+c++]
    // - Value : 81
    // - Explain : Unary Plus, Post Increment
    // [-]
    // - Explain : Decreas Sign
    // ![+a++]
    // - Value : 11 // *12 not 11 : 11 + 1.
    // - Explain : Unary Plus, Post Increment
    // */

    // console.log(++a + -b + +c++ - -a++ + +a);
    // // a = 12, b = 21, c = 81
    // /*
    // [++a]
    // - V : 13
    // - E : Pre Increment
    // [+]
    // - E : Addition Sign
    // [-b]
    // - V : -21
    // - E : Negation Operator
    // [+]
    // - E : Addition Sign
    // [+c++]
    // - E : Unary Plus, Post Increment
    // - V : 82
    // [-]
    // - E : Dicreas Sign
    // [-a++]
    // - E : Negation Operator, Post Increment
    // - V : -14
    // [+]
    // - E : Addition Sign
    // [+a]
    // - E : Unary Plus
    // - V : 14
    // */

    // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
    // // a = 14, b = -21, c = 82
    // /*
    // [--c]
    // - E : Pre Dicrement 
    // - V : 81
    // [+]
    // - E : Addition Sign
    // [+b]
    // - E : Unary Operator
    // - V : 21
    // [+]
    // - E : Addition Sign
    // [--a]
    // - E : Post Dicrement
    // - V : 13
    // [*]
    // - E : Multiable Sign
    // [+b++]
    // - E : Unary Plus, Post Increment
    // - V : 22
    // [-]
    // - E : Dicrement Sign
    // [+b]
    // - E : Unary Plus
    // - V : 22
    // [*]
    // - E : Multiable Sign
    // [a]
    // - E : Normal Variable Call
    // - V : 13
    // [+]
    // - E : Addition Sign
    // [--a]
    // - E : Post Dicrement
    // - V : 12
    // [-]
    // - E : Dicreis Sign
    // [+true]
    // - E : Unary Plus
    // - V : 1
    // */

    // let d = "-100";
    // let e = "20";
    // let f = 30;
    // let g = true;

    // console.log(-d * e); // 2000
    // console.log(++e * ++g + -d + ++f); // 173