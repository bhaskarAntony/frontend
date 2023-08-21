const {friends, courses} = require('./data/array')

let i = 1;
friends.forEach(element =>{
    console.log(`${i}) ${element} is my Friend\n`)
    i+=1;
})
console.log('\n')

courses.forEach((element, key )=>{
    console.log(`${key+1})id = ${element.id}`)
    console.log(`title = ${element.title}`)
    console.log(`duration = ${element.duration} months`)
    console.log(`price = ${element.price}/-`)
    console.log(`description = ${element.desc}`)
    console.log('\n')
})