const express=require('express');
const app=express();
const path=require('path');
const port=3030

app.use(express.static('public'));

app.get('/',(req,res)=>
    res.sendFile(path.join(__dirname,'views','home.html')));

  /*  app.get('/',Ofertas,(req,res)=>
    res.sendFile(path.join(__dirname,'views','Ofertas.html')));

    app.get('/',TiendasOficiales,(req,res)=>
    res.sendFile(path.join(__dirname,'views','Tiendas Oficiales.html')));   

app.get('/',Ayuda,(req,res)=>
    res.sendFile(path.join(__dirname,'views','Ayuda.html')));*/

app.listen(port,()=>{
    console.log('servidor corriendo en http://localhost:${port}')});