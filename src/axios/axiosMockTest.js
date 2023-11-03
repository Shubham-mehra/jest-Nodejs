const { default: axios } = require("axios");

const MockAxiosTest = {
    AxiosTest: (id) => {
        console.log("id===>",id)
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res)
            .catch(error => "error")
    }
}
module.exports = MockAxiosTest;