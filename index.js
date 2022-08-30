// arrow function with no argument

let greet =()=>console.log('hello');
greet();      // hello


// arrow function with one orgument

let great = x =>console.log(x);
great('hello');            //hello


// arrow function with expression

let age= 22;

let welcome = (age<18)?
()=>console.log('baby'):
()=>console.log('adult');

welcome();    //adult





