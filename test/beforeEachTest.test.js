
const { expect } = require('chai');
var Before=require('../src/beforeEachTest')

const beforeFunction=()=>console.log("Before Testing !!!!!!!")
const afterFunction=()=>console.log("After Testing !!!!!!!")
const beforeAllFunction=()=>console.log("Before Testing All !!!!!!!")
const afterAllFunction=()=>console.log("After Testing All !!!!!!!")
// run This before Each Test 
beforeEach(()=>beforeFunction())

// run This After Each Test 
afterEach(()=>afterFunction())

// test Case
test("Before ",()=>{
    expect(Before.beforeEachTest()).to.equal("test");
    
})


 //Before All 

 beforeAll(()=>beforeAllFunction())

//  Run test after all 
 afterAll(()=>afterAllFunction())
