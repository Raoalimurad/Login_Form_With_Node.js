const express = require("express")
const templete_engine = require("ejs")
const path = require("path")
const app = express()
const loginData = require("./database/Scehma")
require("./database/config")
app.use(express.static(path.join(__dirname, "public")))

app.set('views', path.join(__dirname, 'views'));
app.set("view engine",'ejs')


app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/", (req,res)=>{
res.send("this is home page")
})
app.get('/login',(req,res)=>{
    res.render("login")
})

app.post("/login",async(req,res)=>{
    console.log(req.body)
    let password = req.body.password
    let Cpassword = req.body.Cpassword;
    console.log(password)
    console.log(Cpassword)
    if(password === Cpassword){
        let data = req.body;
        let response = loginData(data);
        let result = await response.save()
        console.log(result)

        res.render("thanks")

       
    }
  
    else{
       res.send(res.send("Password is not matching"))
    }
  
})
app.listen('3000')