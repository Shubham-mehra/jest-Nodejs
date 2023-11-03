
var reverseString = require('../src/reverseString');


test("Reverse defined Test", ()=>{
    console.log("Defined reverse string")
    expect(reverseString).toBeDefined();
    
})

test("Find reverse Test", ()=>{
    expect(reverseString("hello")).toEqual("olleh");

})

test("Find reverse lowercase ", ()=>{
    expect(reverseString("Hello")).toEqual("olleh");

})