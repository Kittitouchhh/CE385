// const express = require('express');

// const app = express();

// const port = 3000;

// app.get('/', (req,res) => {
//     res.send('Hello, Gus!');
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`)
// })

// const eventloop = (callback) => {
//     console.log("Begin");
//     setTimeout(()=> {
//         const result = callback("First");
//         console.log(result)
//     }, 2000);
//     setTimeout(()=> {
//         const result = callback("Second");
//         console.log(result)
//     }, 1000);
//     setTimeout(()=> {
//         const result = callback("Third");
//         console.log(result)
//     }, 0);
//     console.log("End");
// }
// eventloop((message) => {
//     return message;
// });

// 4.1
// const operation = require("./Workshop 4.1");
// console.log(operation("add",100,10))
// console.log(operation("subtract",100,10))
// console.log(operation("multiply",100,10))
// console.log(operation("divide",100,10))
// console.log(operation("asdad",100,10))

// 4.2 

const {
    fetchDataWithCallback,
    fetchDataWithPromise
} = require("./fetchData")

fetchDataWithCallback((result) => {
    console.log(result)
})


fetchDataWithPromise()
  .then(res => console.log(res))
  .catch(err => console.log(err));