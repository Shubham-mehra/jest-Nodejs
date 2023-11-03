const animal=["monkey","deer","tiger"]

describe("Describe",()=>{
beforeEach(()=>console.log("SetupTest> before Each "))
it("Add Animal",()=>{
    animal.push("Lion");
    expect(animal.length).toBe(4)
})
afterEach(()=>console.log("SetupTest> after Each "))
})