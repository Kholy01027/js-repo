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
    console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

    let num = 3;
    console.log(num * (true + true)); // 6
    console.log(num + true + true + true ); // 6
    console.log(num * num - true - true - true); // 6
    console.log(num + num); // 6
    console.log(num * num / num + num); // 6
    console.log(num ** num / num - num); // 6


    let numT = "10";

    console.log(+numT + Number(numT)); // 20
    console.log(+numT * +numT / numT + +numT); // 20
    console.log(Number(numT) * numT / numT * (true + true)); // 20
    console.log(((-numT + numT * numT % (true + true)) * (true + true)) * -1); // 20

    let points = 10;
    console.log((points * points) / 7.5 ); // 13
    console.log((points % (true + true + true + true) - points) * -1 ); // 8;