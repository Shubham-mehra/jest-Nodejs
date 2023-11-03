const describeTestDemo=require("../src/describeTest")

const checkingConnection=()=>console.log("Checked connection !!!");
const checkingCloseConnection=()=>console.log("Close connection !!!");

describe("Checking Connection",()=>{
    beforeEach(()=>checkingConnection())

    test("TEST descritpion Fucntion ",()=>{
        expect(describeTestDemo.describeFunction()).toBe("Test Lib")
    })

    it(("Number System "),()=>{
        const value=2+2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(5);
    })

    afterEach(()=>checkingCloseConnection())
})