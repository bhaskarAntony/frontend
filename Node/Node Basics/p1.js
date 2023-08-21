const x = 123
let y = 43

let result = x * y;

//we did't use var keyword in node js
console.log("product = ", result)
//if we want to see the output go to gitbash or terminal type "node filename.js" (example: node p1.js) and enter

if(x>y){
    console.log('x is greater than y')
}
else{
    console.log('y is greater than x')
}
//looping statements
for(let i = 0; i<=10; i++){
    i==10 ? console.log(`${x} * ${i} = ${x * i}\n`) : console.log(`${x} * ${i} = ${x * i}`)
}

//while loop
let i=1;
while(i<=10) {
    console.log(`${y} * ${i} = ${y * i}`)
    i++
}


//array
let colors = ["red", "green", "blue", "white", "orange"];

colors.forEach(element=>{
    console.log("color: ", element)
})
console.log("\n")

//object
let user = {
    name:"john",
    email:"john@gmail.com",
    age:23,
    mobile:9606729320,
}
console.log("username: ", user.name);
console.log("email: ", user.email);
console.log("age: ", user.age);
console.log("mobile number: ", user.mobile);

console.log('\n')
//object array
let course = [
    {
        id:1,
        title: "HTML",
        duration:1
    },
    {
        id:2,
        title: "CSS",
        duration:1
    },
    {
        id:3,
        title: "Bootstrap",
        duration:1
    },
    {
        id:1,
        title: "JavaScript",
        duration:1.5
    }
]
console.log(course)
