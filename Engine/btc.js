// BTC data generator
// Api client
const Request = require('request');

//BTC to national currency exchange rate. Up date every 15 min
Request.get('https://blockchain.info/ticker',(err,res,body)=>{
   console.log('Error: ', err);
   // console.log('StatusCode: ', res);
   console.log('Data: ', body);
});

Request.get('',(err,res,body)=>{

});
