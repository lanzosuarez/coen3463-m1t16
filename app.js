let express=require("express");
let path=require("path");
let app=express();

app.use(express.static(path.join(__dirname,"public")));
let port=Number(process.env.PORT || 5000);
app.listen(port,()=>{
    console.log("Listening to port" + port);
});l