// function mufun(){

//     document.getElementById('click') . innerHTML = "Form step 2";
// }

////////////////////////
// JavaScript mein underscore _ ka use kisi khaas kaam ke liye nahi hota by default — lekin developers use apni asaani aur coding standards ke liye karte hain
// let _x = 20;
// let y = 30;

// document.getElementById('click') . innerHTML = _x + y;  
//////////////////////////
// The charAt() method returns the character at a specified index (position) in a string:
// var text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charAt(4);
//////////////////////////////

// var text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charCodeAt(4);

//  var text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.at(4);

// this object & function 

let ram = {
    name: 'Pranshu Singh',
    age:  '27',
    oqupations: 'job',
    
    datafunction(){
            console.log(
                // 'Hello My name is' + '' + ram.name + ' ' + 'I live in'+ '' + city.cname + ' ' + 'in MP.'
                // use this Keyboard
                'Hello My name is' + '' + this.name + '' + this.age +' '+ this.oqupations + ' ' + 'I live in'+ '' + city.cname + ' ' + 'in MP.'
            )
    }
}

let city ={
    cname: 'Indore',
    cdistance: '750KM',
}

ram.datafunction();