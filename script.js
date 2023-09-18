/*const UName = prompt('Як тебе звати?', "анонім")
alert("Hello, " +UName+"! How are you?")*/

let c=1;
let z=true;
let a=1;
let b=1;

/*a = prompt('введи перше число',0);
b = prompt('введи друге число',0);

c1=Number(a)+Number(b);
c11=(a+"+"+b+"="+c1);
c2=Number(a)-Number(b);
c21=(a+"-"+b+"="+c2);
c3=Number(a)*Number(b);
c31=(a+"*"+b+"="+c3);
c4=Number(a)/Number(b);
c41=(a+"/"+b+"="+c4);

alert(c11 + '\n' + c21 + '\n' + c31 + '\n' + c41);*/

while (z == true) {
    c = prompt('виберіть дію:  ' + '\n' + '1-сума' + '\n' + '2-різниця' + '\n' + '3-множення' + '\n' + '4-ділення',0);
    console.log(c);
    switch (c){
        case '1':
            a = prompt('введи перше число', 0);
            b = prompt('введи друге число', 0);
            c1 = Number(a) + Number(b);
            c11 = (a + "+" + b + "=" + c1);
            alert(c11);
            z = confirm('сбробуєте знову?');
            if (z == true) {} else {alert('Бувай..')};
            break;
        case '2':
            a = prompt('введи перше число', 0);
            b = prompt('введи друге число', 0);
            c2 = Number(a) - Number(b);
            c21 = (a + "-" + b + "=" + c2);
            alert(c21);
            z = confirm('сбробуєте знову?');
            if (z == true) {} else {alert('Бувай..')};
            break;
        case '3':
            a = prompt('введи перше число', 0);
            b = prompt('введи друге число', 0);
            c3 = Number(a) * Number(b);
            c31 = (a + "*" + b + "=" + c3);
            alert(c31);
            z = confirm('сбробуєте знову?');
            if (z == true) {} else {alert('Бувай..')};
            break;
        case '4':
            a = prompt('введи перше число', 0);
            b = prompt('введи друге число', 0);
            c4 = Number(a) / Number(b);
            c41 = (a + "/" + b + "=" + c4);
            alert(c41);
            z = confirm('сбробуєте знову?');
            if (z == true) {} else {alert('Бувай..')};
            break;
        default:
            alert('something wrong');
            z = confirm('сбробуєте знову?');
            if (z == true) {} else {alert('Бувай..')};
    }
}


