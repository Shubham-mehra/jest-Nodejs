const {demoTest}=require('../src/demo')
test('Demo test',()=>{
    expect(demoTest()).toBe("hello Shubham")
})