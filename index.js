let express = require("express");
let app=express();

//let signs ={
//    "data":[
//       {
//           name:"aries",
//          info:"March 21 - April 19"
//     },
//    {
//      name:"taurus",
//     info:""
//       },
//      {
//         name:"gemini",
//           info:""
//        }
//    ]
//}
//app.get('/',(req,res)=>{
//res.send("this is the root page");

//})
app.use('/',express.static('public'));

app.get('/about',(req,res)=>{
    res.send("this is the page that will contain info about the project");
    
    })


app.get('/signs',(req,res)=>{
  res.json(signs);
})


app.get('/signs/:sign',(req,res)=>{
    console.log(req.params.sign);
    let user_sign = req.params.sign;
    let user_obj;
    for(let i=0;i<signs.data.length;i++){
if(user_sign ==signs.data[i].name){
    user_obj = signs.data[i];
}

    }
console.log(user_obj);
if(user_obj){
    res.json(user_obj);
}else{
    res.json({status:"info not present"});
}
})
app.listen(3000,()=>{
console.log("listening at localhost:3000");
}) 