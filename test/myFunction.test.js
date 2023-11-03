var myFunction = require('../src/myFunction')


// Add function with to be 
test('Test add first', () => {
   expect(myFunction.add(2, 3)).toBe(5)
})

//add fucntion with no to be 

test('Test add first', () => {
   expect(myFunction.add(2, 3)).not.toBe(6)
})

//  To be null 

test("value to be null ", () => {
   expect(myFunction.isNull()).toBeNull()
})

// to be undefined 


test("value to be undefined ", () => {
   expect(myFunction.isUndefined()).toBeUndefined()
})

// create user 

test("should be Shubam mehra object  ", () => {
   expect(myFunction.createUser()).toEqual({
      firstName: "Shubham",
      lastName: "mehra"
   })
})

// shoould be less then witout functin 
test("shoudl be less than 10 ", () => {
   expect(myFunction.lessThanTen(6)).toBeLessThanOrEqual(9)
})


// less then 
test("first should be less then 2 ", () => {

   var load = 6;
   var load2 = 1;
   expect(load + load2).toBeLessThan(9)
})


// regex 

test("should contain value  ", () => {

   expect(myFunction.regex("Teams")).not.toMatch(/I/)
})
// role admin 
test("Is admin or not : ", () => {
   var admin = ["Shubham", "Sourav", "Bharat"]
   expect(admin).toContain(myFunction.admin("Bharat"));
})


// working with get api  async function 


// with promise 
test("user by Axios api ", () => {

   expect.assertions(1);
   return myFunction.fetchUser()
      .then((data) => {
         expect(data.name).toBe("Leanne Graham");
      })
})


// with async await 
test("user by Axios api ", async () => {

   expect.assertions(1);
   const data = await myFunction.fetchUser()
   expect(data.name).toBe("Leanne Graham");
})