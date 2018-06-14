// last modify 2018-6-13 main class constract system basic
// initialize constent object
const express = require('express');
const app = express();
const readline = require('readline');
// Eos = require('eosjs') // Eos = require('./src')
//
// eos = Eos() // 127.0.0.1:8888
//
// // All API methods print help when called with no-arguments.
// eos.getBlock()
//
// // Next, you're going to need nodeosd running on localhost:8888 (see ./docker)
//
// // If a callback is not provided, a Promise is returned
// eos.getBlock(1).then(result => {console.log(result)})
//
// // Parameters can be sequential or an object
// eos.getBlock({block_num_or_id: 1}).then(result => console.log(result))
//
// // // Callbacks are similar
// // callback = (err, res) => {err ? console.error(err) : console.log(res)}
// // eos.getBlock(1, callback)
// // eos.getBlock({block_num_or_id: 1}, callback)
//
// // Provide an empty object or a callback if an API call has no arguments
// // eos.getInfo({}).then(result => {console.log(result)})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question("test input ", (input)=>{
//   console.log(`${input}`);
//   rl.close();
// });


// //middleware
// app.use('/api', require('./api/api'));
//
// //error handling mw
// app.use((err,req,res,next)=>{
//   console.log(err.message);
//   res.status(422),send({error:err.message});
// });
//
// //application listen to
// app.listen(process.env.PORT||4000,()=>{
//   console.log('able to get request ctrl+c terminate');
// });
