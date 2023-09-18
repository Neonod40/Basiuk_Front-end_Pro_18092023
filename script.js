const UName = prompt('Як тебе звати?', "анонім")
alert("Hello, " +UName+"! How are you?")

let a = prompt('введи перше число', 0);
let b = prompt('введи друге число', 0);

c1=Number(a)+Number(b);
c1=(a+"+"+b+"="+c1);
c2=Number(a)-Number(b);
c2=(a+"-"+b+"="+c2);
c3=Number(a)*Number(b);
c3=(a+"*"+b+"="+c3);
c4=Number(a)/Number(b);
c4=(a+"/"+b+"="+c4);

alert(c1 + '\n' + c2 + '\n' + c3 + '\n' + c4);