//assert module => it is a builtin madule
// handle run time exceptions (run time errors)
const assert = require('assert') //it is builtin madule

// assert(10>15)

const x = [
    {
        name:"bhaskar"
    }
]
const y = {
    name:"bhaskar"
}

const z = [
    {
        name:"bhaskar"
    }
]

//values must be strictly deep equal, (structure, datatype, properties, values) must be equal otherwise we will get error
// assert.deepStrictEqual(x, y)// deepStrictEqual will strictly checks both are equal or not=> output is : error


// assert.deepStrictEqual(x, z) //here no error beacuse both are same structure and same values

// assert.notDeepStrictEqual(x, y)// this method is oppsite to deepStrictEqual beacuse here if the datatyes or structure ot values if sme it will through the error if not same no errors => here no errors beacuse x and y are not same values are same but structure are diffrent

assert.notDeepStrictEqual(x, z)// here we will get error beacuse x and z are same datatyoed and same values and same structure thats why we will get error here
