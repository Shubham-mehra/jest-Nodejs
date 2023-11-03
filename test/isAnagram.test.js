const Anagram=require("../src/isAnagram")


test("Find Anagram defined", ()=>{
    expect(Anagram.isAnagram).toBeDefined();

})

test("Find Anagram defined", ()=>{
    expect(typeof (Anagram.isAnagram)).toEqual("function");

})

test("Find Anagram Test", ()=>{
    expect(Anagram.isAnagram("Hello!")).toEqual("olleh");

})

