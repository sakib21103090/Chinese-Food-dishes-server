const express=require('express');
const cors=require("cors");
const app =express();
app.use(cors());
const port =process.env.PORT||5000;

const ChefInfo=require('./Data/ChefInfo.json');


app.get('/',(req,res)=>{
    res.send('food  server is running')
});

app.get('/chefInfo',(req,res)=>{
    res.send(ChefInfo)
})

app.get('/chefInfo/:id',(req,res)=>{
    const id=req.params.id;
    const selectedChef=ChefInfo.find(n=>n.id==id);
    res.send(selectedChef)
})
app.listen(port,()=>{
    console.log(`food API is running on port: ${port}`)
})