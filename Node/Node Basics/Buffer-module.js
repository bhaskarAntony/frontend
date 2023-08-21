//Buffer module
//memory allocation

const buff = Buffer.alloc(5); // we are allocating 5 memory locations every memory loaction have 2 bits
console.log('safe memory = ', buff) //output : <Buffer 00 00 00 00 00 > => 5 memory locations

//unsafe memory
const unbuff = Buffer.allocUnsafe(5);
console.log('unsafe memory = ', unbuff); //can allow garbage values output: <Buffer 00 00 00 00 00 >

//from() => it will stores each charecters ASCII Values
const asciiValue = Buffer.from("Bhaskar")
console.log('ASCII values of Bhaskar = ', asciiValue);//ASCII values of Bhaskar =  <Buffer 42 68 61 73 6b 61 72>


// to convert this ASII values to string we will use toString Method
console.log(`ASCII value ${asciiValue} to string  = `, asciiValue.toString())// output;ASCII value Bhaskar to string  =  Bhaskar

//concate two buffers
let a1 = Buffer.from("Hello my dear bad friends!!");
let a2 = Buffer.from("How are my dear bad friends!!");
let res = [a1, a2];
let output = Buffer.concat(res);
console.log('ASCII output', output) //ASCII output
console.log('String output', output.toString()) //String output
