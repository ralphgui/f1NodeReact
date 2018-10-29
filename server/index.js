const http = require('http');
const server = http.createServer()

server.on('request',(req,res)=>{
res.write('done');



res.end()

})

server.listen(3050,()=>{
  console.log("connected");
})
