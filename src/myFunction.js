const { default: axios } = require("axios");

const myFunction={
add: (args1,args2)=>args1+args2,
isNull:()=>null,
isUndefined: ()=>undefined,
createUser: ()=>{
    var user={firstName:"Shubham"};
    user["lastName"]="mehra"
    return user
},
lessThanTen:(arg1)=>arg1,
regex:(value)=>value,
admin:(adminName)=>adminName,
fetchUser:()=>
   axios.get('https://jsonplaceholder.typicode.com/users/1')
   .then(res=> res.data)
   .catch(error=>"error") 
}

module.exports=myFunction