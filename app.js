const express=require('express');r
const app=express();
const path=require('path');
const publicFolderPath=path.resolve(__dirname, './public');
app.get('/',(req,res)=>
    res.sendFile(path.resolve(__dirname, './views/home.html')));

   app.get('/register',(req,res)=>
    res.sendFile(path.join(__dirname,'views','./register.html')));

    app.get('/login',(req,res)=>
    res.sendFile(path.join(__dirname,'views','login.html')));  

    
app.listen(process.env.PORT || 3000 , function() {
    console.log(`Servidor corriendo en puerto 3000`);
})

/*app.get('/',Ayuda,(req,res)=>
    res.sendFile(path.join(__dirname,'views','Ayuda.html')));*/
    

<<<<<<< HEAD
/*app.listen(port,()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)});*/

=======
    console.log(`servidor corriendo en el puerto`,Port);
>>>>>>> 2fbb0a5c7351723db10286d2017fb512130041a1
