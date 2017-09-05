/*************************************************
 * Javascript 教程演示代码
 * 运行：
 *      $ node js.js
 *************************************************/


/*
 * 字符串
 */
{
    let str;
    let str2;
    console.log("Javascript 教程：")
    // 基本声明
    console.log("基本字符串：");
    str = 'This is a string. 👏';
    str2 = "This is the 2nd string. 💁";

    console.log(str);
    console.log(str2);

    // 嵌套
    console.log("\n引号嵌套：")
    str = "It's six o'clock.";
    str2 = 'Remember to say "please" and "thank you."';

    console.log(str);
    console.log(str2);

    str = 'It\'s six o\'clock.';
    str2 = "Remember to say \"please\" and \"thank you.\"";

    console.log(str);
    console.log(str2);

    // 长度
    console.log("\n字符串长度：")
    console.log('"caterpillar".length;');
    console.log("caterpillar".length);
    console.log('"THE KIDS".toLowerCase();');
    console.log("THE KIDS".toLowerCase());
    console.log('"I wish I were big.".toUpperCase();');
    console.log("I wish I were big.".toUpperCase());
    console.log('"   but keep the middle spaces   ".trim();');
    console.log("   but keep the middle spaces   ".trim());

    String.prototype.hanggi = function () {console.log("String has a custom function of hanggi.");}
    console.log('\n"This is a custom function of String.".hanggi();');
    "This is a custom function of String.".hanggi();

    // 字符串输出&连接
    let a = 123;
    console.log("Value a is equal to " + a + "!!!");
    console.log(`Value a is equal to ${a}!!!`);

    // var, let, const
    console.log("\nES6中的变量声明:");
    {
        let a = 10;
        var b = 1;
    }
    try {
        console.log(a);
    } catch (e) {
        console.log(`a is not defined!!`);
    }
    console.log(b);
}

/*
 * 数值
 */
{
    console.log("\n数值")
    var num = 123;
    let float = 0.333;
    const PI = 3.1415926;

    console.log(`num: ${num}, float: ${float}, PI: ${PI},`);
}

/*
 * 布尔
 */
{
    let bool = true;
    if (bool) {
        console.log("The bool is true!")
    }
}

/*
 * 函数
 */
{
    console.log("\n函数：");
    function foo(x, y) {
        return x + y;
    }
    console.log(`foo(1, 2) return ${foo(1,2)}`);
}

// 面向对象
{
    let person;
    person = new Object();
    person.firstname="Bill";
    person.lastname="Gates";
    person.age=56;
    person.eyecolor="blue";

    console.log(person)
}

{
    function person(firstname, lastname, age, eyecolor) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.eyecolor = eyecolor;
    }
    var myFather=new person("Bill","Gates",56,"blue");
    var myMother=new person("Steve","Jobs",48,"green");
    console.log(myMother);
}

